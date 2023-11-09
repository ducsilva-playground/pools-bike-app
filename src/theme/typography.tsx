import { StyleSheet } from 'react-native';
import { Colors } from './colors';

/**
 * Fontweight setting
 * - This font weight will be used for style of screens where needed
 * - Check more how to use font weight with url below
 * @url https://passionui.com/docs/listar-pro/theme
 */
export const FontWeight = {
  thin: '100',
  ultraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  heavy: '800',
  black: '900',
};

/**
 * Define list font use for whole application
 */
export const FontSupport = ['Inter'];

/**
 * Define font default use for whole application
 */
export const DefaultFont = 'Inter';

export const BaseStyle = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: Colors.color51,
    height: 46,
    borderRadius: 12,
    paddingHorizontal: 10,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.color11,
    alignSelf: 'stretch',
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

/**
 * Typography setting
 * - This font weight will be used for all template
 * - Check more how to use typography in url below
 * @url https://passionui.com/docs/listar-pro/theme
 */
export const Typography = StyleSheet.create({
  header: {
    fontSize: 34,
  },
  title: {
    fontSize: 32,
  },
  title1: {
    fontSize: 28,
  },
  title2: {
    fontSize: 22,
  },
  title3: {
    fontSize: 20,
  },
  title4: {
    fontSize: 18,
  },
  headline: {
    fontSize: 17,
  },
  body1: {
    fontSize: 16,
  },
  body2: {
    fontSize: 14,
  },
  callout: {
    fontSize: 17,
  },
  subhead: {
    fontSize: 15,
  },
  footnote: {
    fontSize: 13,
  },
  caption1: {
    fontSize: 12,
  },
  caption2: {
    fontSize: 11,
  },
  overline: {
    fontSize: 10,
  },
  label1: {
    fontSize: 9,
  },
  label2: {
    fontSize: 8,
  },
});
