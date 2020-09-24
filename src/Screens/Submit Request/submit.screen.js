import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

import styles from './submit.style';
import InputComponent from '../../Component/Input/input.component';
import ButtonComponent from '../../Component/Button/button.component';
import {Actions} from 'react-native-router-flux';
import validateEmail from '../../Auth/Email/email.authentication';

const SubmitScreen = () => {
  const [mail, setMail] = useState('');
  const [name, setName] = useState('');
  const [lname, setLName] = useState('');
  const [number, setNumber] = useState('');
  const [feedback, setFeedback] = useState('');
  const [subject, setSubject] = useState('');
  const [attachment, setAttachment] = useState('');
  const [mailError, setMailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [lnameError, setLNameError] = useState(false);
  const [feedbackError, setFeedbackError] = useState(false);
  const [attachmentError, setAttachmentError] = useState(false);
  const [subjectError, setSubjectError] = useState('');


  const authenticate = () => {
    if (!validateEmail(mail)) {
      setMailError(true);
    }
    if (name.length <= 4) {
      setNameError(true);
    }
    if (lname.length <= 4) {
      setLNameError(true);
    }
    if (subject.length <= 4) {
      setSubjectError(true);
    }
    if (number.length <= 4) {
      setNumberError(true);
    }
    if (feedback.length <= 4) {
      setFeedbackError(true);
    }
    if (attachment.length <= 4) {
      setAttachmentError(true);
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
      Actions.push('Filter');
    }
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={[styles.signInBoard, styles.whiteBgrd]}>
          <Text style={styles.option}>SUBMIT REQUEST</Text>
          <Text style={styles.welcome}>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry
          </Text>

          <InputComponent
            holder="Enter Your First Name"
            label="First Name"
            type="default"
            capitalize="words"
            secure={false}
            value={name}
            setValue={(text) => setName(text)}
            hasError={nameError}
            toggleError={() => setNameError(false)}
          />
          <InputComponent
            holder="Enter Your Last Name"
            label="Last Name"
            type="default"
            capitalize="words"
            secure={false}
            value={lname}
            setValue={(text) => setLName(text)}
            hasError={lnameError}
            toggleError={() => setLNameError(false)}
          />
          <InputComponent
            holder="Enter your Email Id"
            label="Email Id"
            type="email-address"
            capitalize="none"
            secure={false}
            value={mail}
            setValue={(text) => setMail(text)}
            hasError={mailError}
            toggleError={() => setMailError(false)}
          />
          <InputComponent
            holder="Enter your 9 digit mobile number"
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
            holder="Enter the Subject"
            label="Subject"
            type="default"
            capitalize="words"
            secure={false}
            value={subject}
            setValue={(text) => setSubject(text)}
            hasError={subjectError}
            toggleError={() => setSubjectError(false)}
          />
          <InputComponent
            holder="Enter Your Message"
            type="default"
            label="Report"
            capitalize="sentences"
            secure={false}
            value={feedback}
            multiline={true}
            height="medium"
            setValue={(text) => setFeedback(text)}
            hasError={feedbackError}
            toggleError={() => setFeedbackError(false)}
          />
          <Text style={styles.footNotes}>
            Please verify your entered details before submitting
          </Text>
          <InputComponent
            holder="Enter Your Message"
            type="default"
            label="Drag and Drop"
            capitalize="sentences"
            secure={false}
            value={attachment}
            multiline={true}
            height="small"
            setValue={(text) => setAttachment(text)}
            hasError={attachmentError}
            toggleError={() => setAttachmentError(false)}
          />
          <Text style={styles.footNotes}>
            Word, Excel, PDF, JPEG & PNG are accepted
          </Text>
          <Text style={styles.footNotes}>File size should be within 10mb</Text>

          <ButtonComponent action="SUBMIT" userAuth={() => authenticate()} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SubmitScreen;
