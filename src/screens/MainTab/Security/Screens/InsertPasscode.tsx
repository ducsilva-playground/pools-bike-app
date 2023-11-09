import SecuritySvg from 'assets/svg/SecuritySvg';
import { MainLayout, TextCus, TouchCus, ViewCus } from 'components';
import { useAuth, useKey } from 'hooks';
import { NavigationService, Routes } from 'navigation';
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from 'theme';
import { ArrNumber, KEY_CONTEXT } from 'utils';

const InsertPasscode = () => {
  const { getKeyStore } = useKey();
  const [passcode, setPasscode] = useState<number[]>([]);
  const { code, onCheckPasscode } = useAuth();
  const [err, setErr] = useState(false);
  const [token, setToken] = useState('');

  const handleGetToken = async () => {
    const res = await getKeyStore(KEY_CONTEXT.ACCESS_TOKEN);
    res && setToken(res);
  };

  const hanldeSetValue = (val: number) => {
    if (passcode.length < 6) {
      const temp = [...passcode, val];
      setPasscode(temp);
    }
  };

  const handleBackSpace = () => {
    if (passcode.length > 0) {
      const temp = [...passcode];
      temp.pop();
      setPasscode(temp);
    }
  };

  useEffect(() => {
    if (passcode.length === 6) {
      handleGetToken();
      if (code === JSON.stringify(passcode)) {
        // NavigationService.navigate(Routes.HomeTabs);
        token &&
          onCheckPasscode({
            passcode: passcode?.join(''),
            access_token: token,
          });
      } else {
        setErr(true);
        setPasscode([]);
      }
    }
  }, [passcode, token]);

  return (
    <MainLayout showAuthHeader titleAuthHeader="security.passcode">
      <ViewCus px-24 pt-24>
        <ViewCus fd-row items-center justify-center mt-72>
          <TextCus body1 medium useI18n>
            security.insert_your_passcode
          </TextCus>
        </ViewCus>

        <ViewCus fd-row items-center justify-center my-24 style={{ gap: 10 }}>
          {[...Array(6)].map((v, i) => {
            return (
              <ViewCus
                key={i}
                style={[
                  styles.dot,
                  {
                    backgroundColor:
                      i < passcode.length ? Colors.white : Colors.transparent,
                  },
                ]}
              />
            );
          })}
        </ViewCus>
        <ViewCus items-center justify-cennter style={{ width: '100%' }}>
          <ViewCus style={styles.keyBoard}>
            {ArrNumber.map((item, index) => {
              return (
                <TouchCus
                  key={index}
                  onPress={() => hanldeSetValue(item.number)}>
                  <TextCus style={styles.btnNum}>{item.number}</TextCus>
                </TouchCus>
              );
            })}
            <TouchCus onPress={handleBackSpace}>
              <ViewCus items-center justify-center style={styles.btnNum}>
                {SecuritySvg.backSpace()}
              </ViewCus>
            </TouchCus>
          </ViewCus>
        </ViewCus>
        {err && (
          <ViewCus items-center mt-20>
            <TextCus body2 medium useI18n errorColor>
              Your passcode is incorrect !
            </TextCus>
          </ViewCus>
        )}
      </ViewCus>
    </MainLayout>
  );
};

export default InsertPasscode;

const styles = StyleSheet.create({
  dot: {
    width: 12,
    height: 12,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  btnNum: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: Colors.color33,
    textAlign: 'center',
    lineHeight: 60,
    fontSize: 24,
    marginHorizontal: 4,
  },
  keyBoard: {
    width: 228,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
    gap: 12,
  },
});
