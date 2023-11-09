import { Platform, StyleSheet } from 'react-native';
import { Colors } from 'theme';
import { dimensions, height } from 'utils';
const isIos = Platform.OS === 'ios';
const { width } = dimensions;
export default StyleSheet.create({
  container: {
    height,
    width,
    backgroundColor: Colors.colorF7,
  },
  btnIcon: {
    width: (width - 126) / 4,
    height: (width - 126) / 4,
    backgroundColor: Colors.white,
  },
  wrapBtnIcon: {
    width: (width - 80) / 4,
    height: (width - 80) / 4,
  },
  bgColorDA: {
    backgroundColor: Colors.colorDA,
  },
  wrapLogo: {
    alignItems: 'center',
    marginTop: 8,
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  boxLogo: {
    width: 250,
    height: 250,
  },
  main: { padding: 24, flex: 1 },
  rowItem: {
    flexDirection: 'row',
  },
  spaceItem: {
    justifyContent: 'space-between',
  },
  topU10: {
    top: -15,
  },
  cenItem: {
    alignItems: 'center',
  },
  endItem: {
    justifyContent: 'flex-end',
  },
  cenItemvh: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCondition: {
    alignContent: 'center',
    marginTop: 25,
    marginBottom: 25,
  },
  btnActive: {
    backgroundColor: Colors.mainLight,
  },
  btlogi: {
    backgroundColor: Colors.border,
    borderRadius: 8,
    borderColor: Colors.transparent,
    height: 56,
  },
  btlog: {
    marginTop: 30,
    backgroundColor: Colors.info,
    borderRadius: 8,
    width: '100%',
    justifyContent: 'center',
  },
  txtdn: {
    fontSize: 16,
    textTransform: 'uppercase',
  },
  input: {
    height: 44,
    borderRadius: 8,
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    marginBottom: 6,
    borderColor: Colors.borderBottom,
    color: Colors.borderBottom,
    backgroundColor: Colors.white,
  },
  wrapTitle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.border,
  },
  posAbsolute: {
    position: 'absolute',
  },
  posBtnTitle: {
    bottom: 5,
    right: 5,
  },
  wrapBtnTitle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.main,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  form: {
    marginBottom: isIos ? 70 : 40,
    alignItems: 'flex-start',
  },
  fieldTextRequired: {
    color: Colors.error,
    textAlign: 'left',
  },
  bgWhite: {
    backgroundColor: Colors.white,
  },
  boxImg: { height: 156, marginBottom: 8 },
  imgItem: { width: width * 0.5 - 30 },
  mr10: {
    marginRight: 10,
  },
  mr24: {
    marginRight: 24,
  },
  fw400: {
    fontWeight: '400',
  },
  fw500: {
    fontWeight: '500',
  },
  fs24: {
    fontSize: 24,
  },
  lh34: {
    lineHeight: 34,
  },
  fs10: {
    fontSize: 10,
  },
  fs14: {
    fontSize: 14,
  },
  fs16: {
    fontSize: 16,
  },
  lh13: {
    lineHeight: 13,
  },
  lh18: {
    lineHeight: 18,
  },
  lh22: {
    lineHeight: 22,
  },
  lh24: {
    lineHeight: 24,
  },
  text74: {
    color: Colors.text74,
  },
  flex1: {
    flex: 1,
  },
  alignRight: {
    alignSelf: 'flex-end',
  },
  mt24: {
    marginTop: 24,
  },
  mt1: {
    paddingTop: 1,
  },
  ml24: {
    marginLeft: 24,
  },
  upperCase: {
    textTransform: 'uppercase',
  },
  centerItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contact: {
    height: 34,
    marginBottom: isIos ? 20 : 40,
  },
  m24: {
    margin: 24,
  },
  ml8: {
    marginLeft: 8,
  },
  textHotline: {
    color: Colors.colorDc,
  },
  h100: {
    height: '100%',
  },
  w100: {
    width: '100%',
  },
  mr8: {
    marginRight: 8,
  },
  mr2: {
    marginRight: 2,
  },
  textWhite: {
    color: Colors.white,
  },
  textRed: {
    color: Colors.colorDA,
  },
  fw600: {
    fontWeight: '600',
  },
  fw700: {
    fontWeight: '700',
  },
  p5: {
    padding: 5,
  },
  pr5: {
    paddingRight: 5,
  },
  p24: {
    padding: 24,
  },
  p22: {
    padding: 22,
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
