import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './button.style';
import colorScheme from '../../../resources/Color/colorTheme';

const Button = (props) => {
  const {action, userAuth} = props;

  return (
    <TouchableOpacity onPress={() => userAuth()}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.mainButton}
        colors={[colorScheme.secondary_color, colorScheme.primary_color]}>
        <Text style={styles.buttonText}>{action}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
