import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: { justifyContent: 'center', flex: 1 },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    marginTop: 15,

    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 32,
    color: '#000000',
  },
  formContainer: {
    padding: 32,
    justifyContent: 'flex-start',

    gap: 8,
  },
  inputForm: {
    gap: 8,
  },
  inputTitle: {
    color: 'rgba(26, 26, 26, 0.9)',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
  inputContainer: {
    backgroundColor: 'rgba(153, 153, 153, 0.15)',
    height: 40,
    borderRadius: 8,
    alignSelf: 'stretch',
  },
  inputPlaceholder: {
    padding: 12,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '300',
    color: '',
  },
  inputPasswordContainer: {
    backgroundColor: 'rgba(153, 153, 153, 0.15)',
    height: 40,
    borderRadius: 8,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#FFFFFF',
  },
});
