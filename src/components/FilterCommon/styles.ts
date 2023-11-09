import { StyleSheet } from 'react-native';
import { Colors } from 'theme';

export default StyleSheet.create({
  btnSelected: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.color78,
    backgroundColor: Colors.color1A,
  },
  btn: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.color33,
    backgroundColor: Colors.color11,
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
  },
  tabSelected: {
    paddingHorizontal: 4,
    paddingVertical: 4,
    gap: 10,
    borderRadius: 50,
    backgroundColor: Colors.color23,
    width: 100,
    height: 28,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  history: {
    width: 100,
    height: 28,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
