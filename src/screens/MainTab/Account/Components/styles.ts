import { StyleSheet } from 'react-native';
import { Colors } from 'theme';

export default StyleSheet.create({
  cenItem: {
    alignItems: 'center',
  },
  wrapImg: {
    width: 60,
    height: 60,
    borderRadius: 32,
  },
  row: { flexDirection: 'row' },
  divider: { backgroundColor: Colors.whisper },
});
