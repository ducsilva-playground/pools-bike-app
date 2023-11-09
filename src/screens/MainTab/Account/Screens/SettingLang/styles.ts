import { StyleSheet } from 'react-native';
import { Colors } from 'theme';
import { height } from 'utils';

export default StyleSheet.create({
  container: { backgroundColor: Colors.main, minHeight: height },
  flatlist: { paddingHorizontal: 24 },
  iconPosition: {
    position: 'absolute',
    left: 24,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.black,
  },
  langText: {
    fontSize: 14,
    fontWeight: '400',
  },
  border: {
    borderBottomWidth: 0.5,
    borderColor: Colors.borderLang,
  },
  content: {
    height: height - 50,
    backgroundColor: Colors.white,
  },
});
