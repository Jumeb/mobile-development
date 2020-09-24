import {StyleSheet} from 'react-native';
import colorTheme from '../../../resources/Color/colorTheme';

const styles = StyleSheet.create({
  mainButton: {
    padding: 2.5,
    marginVertical: 3,
    borderRadius: 25,
    marginRight: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
    backgroundColor: colorTheme.white_color,
    borderRadius: 25,
  },
  categorySelector: {
    height: 18,
    width: 18,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 18,
    marginRight: 5,
  },
  buttonText: {
    color: colorTheme.dark_grey_color,
    fontSize: 12,
    letterSpacing: 1,
    textAlign: 'center',
    marginLeft: 5,
  },
});

export default styles;
