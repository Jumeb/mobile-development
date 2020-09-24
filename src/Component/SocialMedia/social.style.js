import {StyleSheet} from 'react-native';

import colorScheme from '../../../resources/Color/colorTheme';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginHorizontal: 10,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    color: colorScheme.white_color,
  },
  faceBblue: {
    backgroundColor: colorScheme.facebook_color,
  },
  twitterBlue: {
    backgroundColor: colorScheme.twitter_color,
  },
});

export default styles;
