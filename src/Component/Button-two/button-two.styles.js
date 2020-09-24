import {StyleSheet} from 'react-native';
import colorTheme from '../../../resources/Color/colorTheme';

const styles = StyleSheet.create({
  mainContainer: {
    padding: 2.5,
    marginVertical: 20,
    borderRadius: 25,
    marginHorizontal: 4,
    // width: 150,
  },
  notSelected: {
    padding: 7,
    backgroundColor: colorTheme.white_color,
    borderRadius: 20,
  },
  selected: {
    padding: 7,
    backgroundColor: 'transparent',
    borderRadius: 20,
  },
  buttonTextNotSelected: {
    color: colorTheme.shadow_color,
    fontSize: 15,
    letterSpacing: 1,
    textAlign: 'center',
  },
  buttonTextSelected: {
    color: colorTheme.white_color,
    fontSize: 15,
    letterSpacing: 1,
    textAlign: 'center',
  },
  buttonWidth: {
    width: '50%',
  },
});

export default styles;
