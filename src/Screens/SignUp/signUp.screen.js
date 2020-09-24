import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

import styles from './signUp.style';
import InputComponent from '../../Component/Input/input.component';
import ButtonComponent from '../../Component/Button/button.component';
import validateEmail from '../../Auth/Email/email.authentication';
import {Actions} from 'react-native-router-flux';

const SignUp = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');
  const [userError, setUserError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [conPasswordError, setConPasswordError] = useState(false);

  const authenticate = () => {
    if (user.length <= 4) {
      setUserError(true);
      console.log(user);
    }
    if (!validateEmail(email)) {
      setEmailError(true);
    }
    if (number.length !== 9) {
      setNumberError(true);
    }
    if (password.length <= 4) {
      setPasswordError(true);
    }
    if (conPassword.length <= 4 || password !== conPassword) {
      setPasswordError(true);
      setConPasswordError(true);
    } else if (!userError && !emailError && !numberError && !conPasswordError) {
      Actions.Filter();
    }
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={[styles.signInBoard, styles.whiteBgrd]}>
        <Text style={styles.option}>SIGN UP</Text>
        <Text style={styles.welcome}>
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry
        </Text>
        <InputComponent
          holder="Enter User Name"
          icon="user"
          label="User Name"
          type="default"
          capitalize="words"
          secure={false}
          value={user}
          multiline={false}
          setValue={(text) => setUser(text)}
          hasError={userError}
          toggleError={() => setUserError(false)}
        />
        <InputComponent
          holder="Enter Email"
          icon="mail"
          label="Email Id"
          type="email-address"
          capitalize="none"
          secure={false}
          value={email}
          multiline={false}
          setValue={(text) => setEmail(text)}
          hasError={emailError}
          toggleError={() => setEmailError(false)}
        />
        <InputComponent
          holder="Enter your 9 digit mobile number"
          icon="mobile1"
          label="Mobile Number"
          type="phone-pad"
          capitalize="none"
          secure={false}
          value={number}
          multiline={false}
          setValue={(text) => setNumber(text)}
          hasError={numberError}
          toggleError={() => setNumberError(false)}
        />
        <InputComponent
          holder="Password should be 8 - 15 characters"
          icon="lock"
          label="Password"
          type="default"
          capitalize="none"
          secure={true}
          value={password}
          multiline={false}
          setValue={(text) => setPassword(text)}
          hasError={passwordError}
          toggleError={() => setPasswordError(false)}
        />
        <InputComponent
          holder="Repeat the Password"
          icon="lock"
          label="Confirm Password"
          type="default"
          capitalize="none"
          secure={true}
          multiline={false}
          value={conPassword}
          setValue={(text) => setConPassword(text)}
          hasError={conPasswordError}
          toggleError={() => setConPasswordError(false)}
        />

        <ButtonComponent action="SIGN UP" userAuth={() => authenticate()} />
      </View>
    </ScrollView>
  );
};

export default SignUp;
