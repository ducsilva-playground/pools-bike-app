import { StyleSheet } from 'react-native';
import { Colors } from 'theme';
import { Typography } from 'theme/typography';

export default StyleSheet.create({
  default: {
    height: 48,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  textDefault: {
    ...Typography.title4,
    color: Colors.white,
    fontWeight: '700',
  },
  outline: {
    borderWidth: 1,
  },
  shadow: { shadowColor: Colors.black, shadowOpacity: 0.9 },
  full: {
    width: '100%',
    alignSelf: 'auto',
  },
  round: {
    borderRadius: 28,
  },
  padLeft5: { paddingLeft: 5 },
  actionBottom: {
    padding: 24,
    paddingTop: 10,
    flexDirection: 'row',
    borderWidth: 1,
  },
  btnActive: {
    backgroundColor: Colors.main,
  },
  lh24: {
    lineHeight: 24,
  },
  fw400: {
    fontWeight: '400',
  },
  flex1: {
    flex: 1,
  },
  btlogi: {
    borderRadius: 8,
  },
  fs16: {
    fontSize: 16,
  },
  swapBtn: {
    width: 48,
    height: 48,
    padding: 8,
    gap: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: 50,
  },
});
