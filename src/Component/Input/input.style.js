import {StyleSheet} from 'react-native';

import colorScheme from '../../../resources/Color/colorTheme';

const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    borderColor: colorScheme.light_grey_color,
    borderRadius: 35,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 15,
    marginBottom: 20,
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    fontSize: 18,
    color: colorScheme.white_color,
    textAlign: 'center',
  },
  logoDetail: {
    width: 40,
    height: 40,
    backgroundColor: colorScheme.primary_color,
    marginLeft: 5,
    marginVertical: 4.5,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    width: '76%',
    height: 40,
    color: 'black',
    marginLeft: 7,
  },
  label: {
    color: colorScheme.primary_color,
    marginBottom: -8,
  },
  validateInput: {
    borderColor: colorScheme.secondary_color,
  },
  validateText: {
    color: colorScheme.secondary_color,
  },
  medium: {
    height: 160,
  },
  mediumTextInput: {
    height: 160,
    width: '97%',
    borderRadius: 35,
    textAlignVertical: 'top',
    paddingLeft: 15,
  },
  small: {
    height: 100,
  },
  smallTextInput: {
    height: 100,
    width: '97%',
    borderRadius: 35,
    textAlignVertical: 'center',
    textAlign: 'center',
    paddingLeft: 15,
  },
});

export default styles;
