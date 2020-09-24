import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';

import Button from '../../Component/Button/button.component';
import Input from '../../Component/Input/input.component';
import colorScheme from '../../../resources/Color/colorTheme';
import styles from './userProfile.style';
import validateEmail from '../../Auth/Email/email.authentication';

const UserProfile = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [dateOfBirthError, setDateOfBirthError] = useState(false);
  const [gender, setGender] = useState('');

  const authenticate = () => {
    if (userName.length <= 4) {
      setUserNameError(true);
    }
    if (!validateEmail(email)) {
      setEmailError(true);
    }
    if (number.length !== 9) {
      setNumberError(true);
    }
    if (dateOfBirth.length <= 4) {
      setDateOfBirthError(true);
    } else if (
      !emailError &&
      !userNameError &&
      userName.length > 4 &&
      email.length > 4 &&
      validateEmail(email) &&
      number.length === 9
    ) {
      Actions.push('login');
    }
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.boardLayout}>
        <LinearGradient
          style={styles.logoLayout}
          colors={[colorScheme.secondary_color, colorScheme.primary_color]}>
          <View style={styles.userImage}>
            <Image
              source={require('../../../resources/images/avatar.jpg')}
              style={styles.userProfileImage}
            />
            <TouchableOpacity style={styles.userImagePicker}>
              <Icon
                name="image"
                size={18}
                color={colorScheme.darker_grey_color}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.userName}>
            <Text style={styles.userNameText}>Lacey Fernandez</Text>
            <Icon name="user" size={14} style={styles.userNameEdit} />
          </TouchableOpacity>
        </LinearGradient>
        <View style={[styles.bottomBoard, styles.whiteBgrd]}>
          <View style={[styles.signInBoard, styles.whiteBgrd]}>
            <Text style={styles.option}>USER PROFILE</Text>
            <Input
              holder="User Name"
              icon="user"
              label="User Name"
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
              holder="Enter Email"
              icon="mail"
              label="Email Id"
              type="email-address"
              capitalize="none"
              secure={true}
              value={email}
              multiline={false}
              setValue={(text) => setEmail(text)}
              hasError={emailError}
              toggleError={() => setEmailError(false)}
            />
            <Input
              holder="Enter your 9 digit mobile number"
              icon="mobile1"
              label="Mobile Number"
              type="phone-pad"
              capitalize="none"
              secure={true}
              value={number}
              multiline={false}
              setValue={(text) => setNumber(text)}
              hasError={numberError}
              toggleError={() => setNumberError(false)}
            />
            <Input
              holder="DD / MM / YYYY"
              icon="lock"
              label="Date of Birth"
              type="default"
              capitalize="none"
              secure={true}
              value={dateOfBirth}
              multiline={false}
              setValue={(text) => setDateOfBirth(text)}
              hasError={dateOfBirthError}
              toggleError={() => setDateOfBirthError(false)}
            />
            <View>
              <Text style={styles.genderLabel}>Sex</Text>
              <View style={styles.genderContainer}>
                <TouchableOpacity
                  style={styles.genderSelect}
                  onPress={() => setGender('male')}>
                  <View
                    style={[
                      gender === 'male'
                        ? styles.toggleContainerSelected
                        : styles.toggleContainer,
                    ]}>
                    <View
                      style={[
                        gender === 'male'
                          ? styles.toggleButtonSelected
                          : styles.toggleButton,
                      ]}
                    />
                  </View>
                  <Text
                    style={[
                      gender === 'male'
                        ? styles.genderChoiceSelected
                        : styles.genderChoice,
                    ]}>
                    Male
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.genderSelect}
                  onPress={() => setGender('female')}>
                  <View
                    style={[
                      gender === 'female'
                        ? styles.toggleContainerSelected
                        : styles.toggleContainer,
                    ]}>
                    <View
                      style={[
                        gender === 'female'
                          ? styles.toggleButtonSelected
                          : styles.toggleButton,
                      ]}
                    />
                  </View>
                  <Text
                    style={[
                      gender === 'female'
                        ? styles.genderChoiceSelected
                        : styles.genderChoice,
                    ]}>
                    Female
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Button action="SAVE" userAuth={() => authenticate()} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserProfile;
