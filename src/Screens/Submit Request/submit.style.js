import {StyleSheet} from 'react-native';

import colorScheme from '../../../resources/Color/colorTheme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  whiteBgrd: {
    backgroundColor: colorScheme.white_color,
  },
  signInBoard: {
    marginHorizontal: 20,
  },
  welcome: {
    color: colorScheme.dark_grey_color + 'ff',
    textAlign: 'center',
    fontSize: 12,
    marginVertical: 12,
    paddingHorizontal: 40,
  },
  option: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 7,
    marginTop: 20,
    textAlign: 'center',
  },
  footNotes: {
    color: colorScheme.dark_grey_color,
    fontSize: 14,
    marginTop: -5,
    marginBottom: 15,
  },
});

export default styles;
