import { StyleSheet } from 'react-native';
import { Colors } from 'theme';
import { height, width } from 'utils';

export default StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    height: height - 70,
  },
  titleContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: -70,
  },
  titleText: {
    marginTop: 15,
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 32,
  },
  formContainer: {
    justifyContent: 'flex-start',
    marginTop: 48,
  },
  inputTitle: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: Colors.white,
  },
  inputContainer: {
    borderRadius: 12,
    width: width - 48,
    borderWidth: 1,
    // borderColor: Colors.color33,
    backgroundColor: Colors.color11,
  },
  inputPlaceholder: {
    padding: 12,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '300',
    color: '',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#DC4534',
    borderRadius: 8,
  },
  register: {
    textTransform: 'capitalize',
  },
  // Modal condition
  containerModalCondition: {
    backgroundColor: '#1F1F1F',
    position: 'relative',
    width: width - 48,
    borderRadius: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  close: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
