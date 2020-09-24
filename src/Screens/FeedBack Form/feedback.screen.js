import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

import styles from './feedback.style';
import InputComponent from '../../Component/Input/input.component';
import ButtonComponent from '../../Component/Button/button.component';
import {Actions} from 'react-native-router-flux';
import validateEmail from '../../Auth/Email/email.authentication';

const FeedbackScreen = () => {
  const [mail, setMail] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [feedback, setFeedback] = useState('');
  const [mailError, setMailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [feedbackError, setFeedbackError] = useState(false);

  const authenticate = () => {
    if (!validateEmail(mail)) {
      setMailError(true);
    }
    if (name.length <= 4) {
      setNameError(true);
    }
    if (number.length <= 4) {
      setNumberError(true);
    }
    if (feedback.length <= 4) {
      setFeedbackError(true);
    }
    if (mail.length <= 4) {
      setMailError(true);
    } else if (
      !mailError &&
      !nameError &&
      !feedbackError &&
      !numberError &&
      number.length === 9 &&
      name.length > 4 &&
      validateEmail(mail)
    ) {
      Actions.push('Submit');
    }
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={[styles.signInBoard, styles.whiteBgrd]}>
          <Text style={styles.option}>FEEDBACK FORM</Text>
          <Text style={styles.welcome}>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry
          </Text>

          <InputComponent
            holder="Your Name"
            icon="user"
            type="default"
            capitalize="words"
            secure={false}
            value={name}
            setValue={(text) => setName(text)}
            hasError={nameError}
            toggleError={() => setNameError(false)}
          />
          <InputComponent
            holder="Mail Id"
            icon="mail"
            type="email-address"
            capitalize="none"
            secure={false}
            value={mail}
            setValue={(text) => setMail(text)}
            hasError={mailError}
            toggleError={() => setMailError(false)}
          />
          <InputComponent
            holder="Mobile Number"
            icon="mobile1"
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
            holder="Your Feedback"
            type="default"
            capitalize="sentences"
            secure={false}
            value={feedback}
            multiline={true}
            height="medium"
            setValue={(text) => setFeedback(text)}
            hasError={feedbackError}
            toggleError={() => setFeedbackError(false)}
          />

          <ButtonComponent action="SUBMIT" userAuth={() => authenticate()} />
        </View>
      </View>
    </ScrollView>
  );
};

export default FeedbackScreen;
