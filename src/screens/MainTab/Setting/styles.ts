import { StyleSheet } from 'react-native';
import { Colors } from 'theme';
import { height, width } from 'utils';

export default StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: Colors.colorF7,
    width,
    height,
  },
  optionContainer: {
    gap: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,

    borderColor: Colors.bottomBorder,
  },
  flex1: {
    flex: 1,
  },
});
