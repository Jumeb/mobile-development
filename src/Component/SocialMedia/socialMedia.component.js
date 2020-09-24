import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './social.style';

const SocialMedia = () => {
  return (
    <View style={styles.mainContainer}>
      {socials.map((social, key) => (
        <IconButton key={key} icon={social.icon} bckColor={social.bckColor} />
      ))}
    </View>
  );
};

export default SocialMedia;

const IconButton = (props) => {
  const {icon, bckColor} = props;
  return (
    <TouchableOpacity
      style={[
        styles.socialButton,
        bckColor === 'facebook' ? styles.faceBblue : styles.twitterBlue,
      ]}>
      <Icon name={icon} size={23} color="white" />
    </TouchableOpacity>
  );
};

const socials = [
  {id: 1, icon: 'facebook', bckColor: 'facebook'},
  {id: 2, icon: 'twitter', bckColor: 'twitter'},
];
