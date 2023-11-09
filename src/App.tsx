import { Loading, SafeAreaStatusBar } from 'components';
import { LayoutProvider } from 'context/LayoutContext';
import { useKey, usePermission } from 'hooks';
import i18nn from 'i18n';
import { Navigator } from 'navigation';
import React, { Suspense, useEffect } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import { LogBox } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { getLocales } from 'react-native-localize';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configStore } from 'store/createStore';
import { STORE_LANGUAGE_KEY } from 'utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SocketProvider } from 'context/SocketContext';
import { AppState, Platform } from 'react-native';
import type { AppStateStatus } from 'react-native';
import { focusManager } from '@tanstack/react-query';

const queryClient = new QueryClient();
const { persistor, store } = configStore();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};


const App = () => {
  function onAppStateChange(status: AppStateStatus) {
    if (Platform.OS !== 'web') {
      focusManager.setFocused(status === 'active');
    }
  }

  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange);

    return () => subscription.remove();
  }, []);
  const { i18n } = useTranslation();
  const { saveKeyStore, getKeyStore } = useKey();
  const { requestPermission } = usePermission();

  const checkLanguage = async () => {
    try {
      const lang = await getKeyStore(STORE_LANGUAGE_KEY);
      if (lang) {
        await i18n.changeLanguage(`${lang}`);
      } else {
        await i18n.changeLanguage(`${getLocales()[0].languageCode}`);
        await saveKeyStore(
          STORE_LANGUAGE_KEY,
          `${getLocales()[0].languageCode}`,
        );
      }
    } catch (error) {
      console.error('Error reading language', error);
      await i18n.changeLanguage('en');
      await saveKeyStore(STORE_LANGUAGE_KEY, 'en');
    }
  };

  useEffect(() => {
    checkLanguage();
    requestPermission();
  }, []);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaStatusBar backgroundColor="transparent" />
      <Provider store={store}>
        <SocketProvider>
          <QueryClientProvider client={queryClient}>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <PaperProvider theme={theme}>
                <LayoutProvider>
                  <I18nextProvider i18n={i18nn}>
                    <Suspense fallback={null}>
                      <PersistGate loading={null} persistor={persistor}>
                        <Navigator />
                        <Toast />
                        <Loading />
                      </PersistGate>
                    </Suspense>
                  </I18nextProvider>
                </LayoutProvider>
              </PaperProvider>
            </GestureHandlerRootView>
          </QueryClientProvider>
        </SocketProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
