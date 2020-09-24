import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colorTheme from '../../../resources/Color/colorTheme';
import styles from './button-two.styles';

const ButtonTwo = (props) => {
  const {filterName, filterSelected, id, selected} = props;
  return (
    <TouchableOpacity
      style={styles.buttonWidth}
      onPress={() => filterSelected(id)}>
      <LinearGradient
        style={styles.mainContainer}
        colors={[colorTheme.primary_color, colorTheme.secondary_color]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <View style={selected === id ? styles.selected : styles.notSelected}>
          <Text
            style={
              selected === id
                ? styles.buttonTextSelected
                : styles.buttonTextNotSelected
            }>
            {filterName}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ButtonTwo;
