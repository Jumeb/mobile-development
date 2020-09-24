import React, {useState} from 'react';
import {Text, View} from 'react-native';

import styles from './change.style';
import InputComponent from '../../Component/Input/input.component';
import ButtonComponent from '../../Component/Button/button.component';
import {Actions} from 'react-native-router-flux';

const Change = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [oldPasswordError, setOldPasswordError] = useState(false);
  const [newPasswordError, setNewPasswordError] = useState('');
  const [conPasswordError, setConPasswordError] = useState('');

  const authenticate = () => {
    if (oldPassword.length < 8) {
      setOldPasswordError(true);
    }
    if (newPassword.length < 8) {
      setNewPasswordError(true);
    }
    if (conPassword.length < 8 || newPassword !== conPassword) {
      setConPasswordError(true);
    } else if (
      !oldPasswordError &&
      !newPasswordError &&
      !conPasswordError &&
      conPassword.length > 7
    ) {
      Actions.login();
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.signInBoard, styles.whiteBgrd]}>
        <Text style={styles.option}>CHANGE PASSWORD</Text>
        <Text style={styles.welcome}>
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry
        </Text>
        <InputComponent
          holder="Enter Old Password"
          icon="lock"
          type="default"
          capitalize="none"
          secure={true}
          value={oldPassword}
          setValue={(text) => setOldPassword(text)}
          hasError={oldPasswordError}
          toggleError={() => setOldPasswordError(false)}
        />
        <InputComponent
          holder="Enter New Password"
          icon="lock"
          type="default"
          capitalize="none"
          secure={true}
          value={newPassword}
          setValue={(text) => setNewPassword(text)}
          hasError={newPasswordError}
          toggleError={() => setNewPasswordError(false)}
        />
        <InputComponent
          holder="Confirm Password"
          icon="lock"
          type="default"
          capitalize="none"
          secure={true}
          value={conPassword}
          setValue={(text) => setConPassword(text)}
          hasError={conPasswordError}
          toggleError={() => setConPasswordError(false)}
        />
        <ButtonComponent action="SUBMIT" userAuth={() => authenticate()} />
      </View>
    </View>
  );
};

export default Change;
