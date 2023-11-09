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
  btnSend: {
    width: width - 48,
    marginTop: 32,
  },
  inputEmail: {
    width: width - 48,
    borderWidth: 1,
    // borderColor: Colors.color33,
    backgroundColor: Colors.color11,
  },
});
