import { StyleSheet } from 'react-native';
import { Colors } from 'theme';
import { height, width } from 'utils';
export default StyleSheet.create({
  container: {
    height: height - 70,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCheck: {
    maxWidth: 253,
    textAlign: 'center',
    marginTop: -85,
    justifyContent: 'center',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  rowItem: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputOTP: {
    width: (width - 122) / 6,
    height: 'auto',
    borderRadius: 0,
    borderBottomColor: Colors.colorB1,
    borderBottomWidth: 1,
    textAlign: 'center',
    color: Colors.white,
    fontSize: 32,
    fontWeight: '700',
    maxWidth: 100,
  },
  btnSend: {
    width: width - 48,
    marginTop: 32,
  },
  errOtp: {
    width: '100%',
  },
});
