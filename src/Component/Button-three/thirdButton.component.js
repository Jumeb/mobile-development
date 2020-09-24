import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icons from 'react-native-vector-icons/AntDesign';

import styles from './thirdButton.style';
import colorTheme from '../../../resources/Color/colorTheme';

const ThirdButton = (props) => {
  const {category} = props;
  return (
    <TouchableOpacity>
      <LinearGradient
        colors={[colorTheme.primary_color, colorTheme.secondary_color]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.mainButton}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{category}</Text>
          <LinearGradient
            colors={[colorTheme.primary_color, colorTheme.secondary_color]}
            style={styles.categorySelector}>
            <Icons name="plus" size={13} color={colorTheme.white_color} />
          </LinearGradient>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ThirdButton;
