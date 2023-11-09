import { StyleSheet } from 'react-native';
import { Colors } from 'theme';
import { height, width } from 'utils';

export default StyleSheet.create({
  container: {
    height: height,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleInput: {
    backgroundColor: Colors.transparent,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: Colors.colorB1,
    borderBottomWidth: 1,
    height: 40,
    borderRadius: 0,
    width: width - 48,
  },
  btnGG: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    gap: 24,
  },
  styleGG: {
    color: Colors.color11,
  },
  btnLater: {
    backgroundColor: Colors.transparent,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    height: 44,
  },
});
