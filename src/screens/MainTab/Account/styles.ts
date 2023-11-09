import { StyleSheet } from 'react-native';
import { Colors } from 'theme';
import { width } from 'utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.colorF7,
  },
  bgHead: {
    backgroundColor: Colors.white,
    width,
    borderBottomColor: Colors.whisper,
    borderBottomWidth: 1,
  },
  bgDivider: {
    borderTopColor: Colors.whisper,
    borderTopWidth: 1,
  },
});
