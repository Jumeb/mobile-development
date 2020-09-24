import {StyleSheet} from 'react-native';

import colorScheme from '../../../resources/Color/colorTheme';

const styles = StyleSheet.create({
  mainButton: {
    paddingVertical: 10,
    marginVertical: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: colorScheme.white_color,
    fontSize: 15,
    letterSpacing: 1,
    textAlign: 'center',
  },
});

export default styles;
