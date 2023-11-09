import { StyleSheet } from 'react-native';
import { Colors } from 'theme';

export default StyleSheet.create({
  textProfile: {
    fontSize: 24,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  editIcon: {
    position: 'absolute',
    bottom: -10,
    right: 0,
  },
  nft: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  inputTitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  groupInput: {
    gap: 20,
  },
  inputEmail: {
    width: '100%',
  },
  textverify: {
    borderBottomWidth: 0.9,
    borderColor: Colors.colorFF00,
  },
});
