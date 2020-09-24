import {StyleSheet} from 'react-native';
import colorTheme from '../../../resources/Color/colorTheme';

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
    marginTop: -115,
    padding: 12,
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
  userName: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  userNameText: {
    color: colorTheme.white_color,
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: 1.2,
  },
  userNameEdit: {
    color: colorTheme.dark_grey_color,
    borderRadius: 50,
    height: 23,
    width: 23,
    backgroundColor: colorTheme.white_color,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginLeft: 10,
  },
  userImage: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginLeft: '8%',
  },
  userProfileImage: {
    height: 140,
    width: 140,
    borderRadius: 70,
  },
  userImagePicker: {
    height: 30,
    width: 30,
    backgroundColor: colorTheme.white_color,
    top: '-8%',
    left: '-27%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleContainer: {
    width: 37,
    height: 15,
    borderRadius: 8,
    backgroundColor: colorTheme.light_grey_color,
    marginRight: 10,
  },
  toggleButton: {
    width: 22,
    height: 22,
    borderRadius: 50,
    backgroundColor: colorTheme.dark_grey_color,
    marginTop: '-8.5%',
  },
  toggleContainerSelected: {
    width: 37,
    height: 15,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: colorTheme.primary_color + 'aa',
    alignItems: 'flex-end',
  },
  toggleButtonSelected: {
    width: 22,
    height: 22,
    borderRadius: 50,
    backgroundColor: colorTheme.primary_color,
    marginTop: '-8.5%',
  },
  genderSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '13%',
  },
  genderChoice: {
    color: colorTheme.dark_grey_color,
  },
  genderChoiceSelected: {
    color: colorTheme.primary_color,
  },
  genderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  genderLabel: {
    color: colorTheme.primary_color,
  },
});

export default styles;
