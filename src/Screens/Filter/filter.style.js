import {StyleSheet} from 'react-native';
import colorTheme from '../../../resources/Color/colorTheme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: 'center',9
  },
  whiteBgrd: {
    backgroundColor: colorTheme.white_color,
  },
  signInBoard: {
    marginHorizontal: 20,
  },
  categoryButtonsLayout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  welcome: {
    color: colorTheme.dark_grey_color + 'ff',
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
  sectionFilter: {
    borderBottomColor: colorTheme.light_grey_color,
    borderBottomWidth: 1.2,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  categoryFilter: {
    color: colorTheme.primary_color,
  },
  priceSlider: {
    width: '100%',
  },
  priceIndicator: {
    color: colorTheme.dark_grey_color,
    margin: 5,
  },
});

export default styles;
