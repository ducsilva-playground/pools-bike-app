import { StyleSheet } from 'react-native';
import { Colors } from 'theme';
import { width } from 'utils';

export default StyleSheet.create({
  banner: {
    width: width - 48,
    height: 150,
    borderRadius: 24,
    resizeMode: 'cover',
  },
  phone: {
    width: 32,
    height: 32,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 1.8550724983215332,
    },
    shadowRadius: 1.8550724983215332,
    shadowOpacity: 1,
    backgroundColor: Colors.color1E,
    borderRadius: 6.96,
    overflow: 'hidden',
  },
  claimBtn: {
    display: 'flex',
    width: 100,
    paddingHorizontal: 8,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 50,
  },
  thumbnail: {
    width: 80,
    height: 90,
    borderRadius: 12,
    resizeMode: 'stretch',
  },
  iconApp: {
    width: '100%',
    height: '100%',
  },
});
