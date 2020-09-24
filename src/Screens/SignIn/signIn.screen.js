import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';

import Button from '../../Component/Button/button.component';
import Input from '../../Component/Input/input.component';
import SocialMedia from '../../Component/SocialMedia/socialMedia.component';
import colorScheme from '../../../resources/Color/colorTheme';
import styles from './signIn.style';

const SignIn = () => {
  const [check, setChecked] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const authenticate = () => {
    if (userName.length <= 4) {
      setUserNameError(true);
    }
    if (password.length <= 4) {
      setPasswordError(true);
    } else if (
      !passwordError &&
      !userNameError &&
      userName.length > 4 &&
      password.length > 4
    ) {
      Actions.push('Feedback');
    }
  };

  const rememberUser = () => {
    setChecked(!check);
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.boardLayout}>
        <LinearGradient
          style={styles.logoLayout}
          colors={[colorScheme.secondary_color, colorScheme.primary_color]}>
          <Icon name="qq" size={80} color={colorScheme.white_color} />
          <Text style={styles.logoSlogan}>FREEDOM</Text>
        </LinearGradient>
        <View style={[styles.bottomBoard, styles.whiteBgrd]}>
          <View style={[styles.signInBoard, styles.whiteBgrd]}>
            <Text style={styles.option}>SIGN IN</Text>
            <Input
              holder="User Name"
              icon="user"
              type="default"
              capitalize="words"
              secure={false}
              value={userName}
              multiline={false}
              setValue={(text) => setUserName(text)}
              hasError={userNameError}
              toggleError={() => setUserNameError(false)}
            />
            <Input
              holder="Password"
              icon="lock"
              type="default"
              capitalize="none"
              secure={true}
              value={password}
              multiline={false}
              setValue={(text) => setPassword(text)}
              hasError={passwordError}
              toggleError={() => setPasswordError(false)}
            />
            <View style={[styles.space, styles.rowLayout]}>
              <TouchableOpacity
                style={styles.rowLayout}
                onPress={() => rememberUser()}>
                <View style={styles.checkBox}>
                  <Icon
                    name="check"
                    size={15}
                    color={check ? colorScheme.primary_color : 'transparent'}
                    style={styles.check}
                  />
                </View>
                <Text style={styles.rememberMeText}>Remember me</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Actions.push('Forgot')}>
                <Text style={styles.forgotText}>Forgot Password</Text>
              </TouchableOpacity>
            </View>
            <Button action="SIGN IN" userAuth={() => authenticate()} />
            <View style={[styles.rowLayout, styles.alignCenter]}>
              <Text style={styles.notConnected}>Still not connected ? </Text>
              <TouchableOpacity onPress={() => Actions.signup()}>
                <Text style={styles.colorPrimary}> Sign Up</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.alternative, styles.rowLayout]}>
              <View style={styles.separator} />
              <View style={styles.orSeparator}>
                <Text style={styles.orText}>OR</Text>
              </View>
              <View style={styles.separator} />
            </View>
            <SocialMedia />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
