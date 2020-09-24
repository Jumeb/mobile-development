import React from 'react';
import {View, TextInput, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

import colorScheme from '../../../resources/Color/colorTheme';

import styles from './input.style';

const Input = (props) => {
  const {
    holder,
    icon,
    label,
    type,
    capitalize,
    secure,
    value,
    setValue,
    hasError,
    toggleError,
    multiline,
    height,
  } = props;
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.mainContainer,
          styles.rowLayout,
          hasError ? styles.validateInput : '',
          multiline && height === 'medium' ? styles.medium : '',
          multiline && height === 'small' ? styles.small : '',
        ]}>
        {icon && (
          <LinearGradient
            style={styles.logoDetail}
            colors={[colorScheme.secondary_color, colorScheme.primary_color]}>
            <Icon name={icon} size={20} color={colorScheme.white_color} />
          </LinearGradient>
        )}
        <TextInput
          placeholder={holder}
          style={[
            styles.inputField,
            hasError ? styles.validateText : '',
            multiline && height === 'medium' ? styles.mediumTextInput : '',
            multiline && height === 'small' ? styles.smallTextInput : '',
          ]}
          keyboardType={type}
          autoCapitalize={capitalize}
          secureTextEntry={secure}
          value={value}
          numberOfLines={8}
          multiline={multiline}
          onFocus={() => toggleError()}
          placeholderTextColor={
            hasError ? colorScheme.secondary_color : colorScheme.dark_grey_color
          }
          onChangeText={(text) => setValue(text)}
        />
      </View>
    </View>
  );
};

export default Input;
