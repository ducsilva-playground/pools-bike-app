import { StyleSheet } from 'react-native';
import { Colors } from 'theme';

export default StyleSheet.create({
  inputContainer: {
    height: 40,
    borderRadius: 8,
    alignSelf: 'stretch',
    paddingHorizontal: 16,
  },
  selectedTextStyle: {
    color: Colors.white,
    borderRadius: 8,
    fontSize: 16,
  },
  placeholderText: {
    fontWeight: '500',
    fontSize: 16,
    color: Colors.white,
  },
  inputSearchStyle: {
    fontWeight: '300',
    fontSize: 16,
    borderRadius: 8,
  },
  selectedInputStyle: {
    fontSize: 16,
    color: Colors.white,
    borderRadius: 8,
  },
  containerStyle: {
    borderRadius: 8,
    backgroundColor: Colors.color11,
    overflow: 'hidden',
    borderColor: Colors.color11,
  },
});
