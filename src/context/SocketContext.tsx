/* eslint-disable react/react-in-jsx-scope */
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { SOCKET_CORE_HOST } from '@env';
import { AppState, AppStateStatus } from 'react-native';

export const SocketContext = createContext({
  socket: null,
  isConnected: false,
});
let canOpenLink = true;

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [ready, setReady] = useState(false);
  const [socket, setSocket] = useState(null);
  //   const [isConnected, setIsConnected] = useState(false);
  const shouldInit = useRef(true);

  useEffect(() => {
    if (!shouldInit.current) {
      return;
    }
    shouldInit.current = false;
  });

  useEffect(() => {
    const subscription = AppState.addEventListener('change', handleAppState);

    return () => {
      subscription.remove();
    };
  }, []);
  const handleAppState = (appState: AppStateStatus) => {
    console.debug(`AppState change: ${appState}`);
    canOpenLink = appState === 'active';
  };

  useEffect(() => {
    const socketInstance = io('https://poolsphone-core.playgroundvina.com/');

    socketInstance.on('connect', () => {
      console.log(
        '🚀 ~ file: SocketContext.tsx:26 ~ socketInstance.on ~ connected',
      );

      //   setIsConnected(true);
    });

    console.log(
      '🚀 ~ file: SocketContext.tsx:20 ~ useEffect ~ SOCKET_CORE_HOST:',
      SOCKET_CORE_HOST,
    );
    socketInstance.on('disconnect', () => {});

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
