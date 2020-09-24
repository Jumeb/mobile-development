import React, {useState} from 'react';
import {Text, View} from 'react-native';

import styles from './forgot.style';
import InputComponent from '../../Component/Input/input.component';
import ButtonComponent from '../../Component/Button/button.component';
import {Actions} from 'react-native-router-flux';

const Forgot = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userEmailError, setUserEmailError] = useState(false);

  const validateEmail = (mail) => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail,
      )
    ) {
      return true;
    }
  };

  const authenticate = () => {
    if (!validateEmail(userEmail)) {
      setUserEmailError(true);
    } else if (!userEmailError && validateEmail(userEmail)) {
      Actions.push('ChangePassword');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.signInBoard, styles.whiteBgrd]}>
        <Text style={styles.option}>FORGOT PASSWORD</Text>
        <Text style={styles.welcome}>
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry
        </Text>

        <InputComponent
          holder="Enter Email Id"
          icon="mail"
          type="email-address"
          capitalize="none"
          secure={false}
          value={userEmail}
          multiline={false}
          setValue={(text) => setUserEmail(text)}
          hasError={userEmailError}
          toggleError={() => setUserEmailError(false)}
        />
        <ButtonComponent action="SUBMIT" userAuth={() => authenticate()} />
      </View>
    </View>
  );
};

export default Forgot;
