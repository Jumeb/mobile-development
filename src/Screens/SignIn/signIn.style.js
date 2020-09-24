import {StyleSheet} from 'react-native';

import colorScheme from '../../../resources/Color/colorTheme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colorScheme.white_color,
  },
  boardLayout: {
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
    shadowColor: colorScheme.shadow_color,
    shadowOpacity: 1,
  },
  logoLayout: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
    paddingBottom: 120,
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
    backgroundColor: colorScheme.primary_color,
  },
  logoSlogan: {
    color: colorScheme.white_color,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 4,
  },
  whiteBgrd: {
    backgroundColor: colorScheme.white_color,
  },
  bottomBoard: {
    borderBottomEndRadius: 8,
    borderBottomStartRadius: 8,
    justifyContent: 'center',
    paddingVertical: 20,
    width: '100%',
  },
  signInBoard: {
    marginTop: -100,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
    shadowColor: colorScheme.shadow_color,
    shadowOpacity: 1,
  },
  option: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 7,
    marginTop: 15,
    textAlign: 'center',
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  space: {
    justifyContent: 'space-between',
    paddingHorizontal: 2,
    marginTop: 15,
  },
  notConnected: {
    color: colorScheme.dark_grey_color,
  },
  rememberMeText: {
    fontSize: 15,
    color: colorScheme.dark_grey_color,
  },
  forgotText: {
    fontSize: 15,
    color: colorScheme.primary_color,
  },
  checkBox: {
    height: 16,
    width: 16,
    borderWidth: 1,
    borderColor: colorScheme.dark_grey_color,
    borderRadius: 3,
    marginRight: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  check: {
    right: 1.5,
  },
  alignCenter: {
    justifyContent: 'center',
  },
  colorPrimary: {
    color: colorScheme.primary_color,
  },
  alternative: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    borderWidth: 0.6,
    backgroundColor: colorScheme.primary_color,
    width: '13%',
    borderColor: colorScheme.primary_color,
  },
  orSeparator: {
    marginHorizontal: 15,
    height: 35,
    width: 35,
    borderWidth: 1.3,
    borderRadius: 20,
    borderColor: colorScheme.primary_color,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orText: {
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 1,
    color: colorScheme.light_grey_color,
  },
});

export default styles;
