import React from 'react';
import {Stack, Router, Scene} from 'react-native-router-flux';

import Login from '../Screens/SignIn/signIn.screen';
import SignUp from '../Screens/SignUp/signUp.screen';
import Forgot from '../Screens/Forgot/forgot.screen';
import ChangePassword from '../Screens/ChangePassword/change.screen';
import FeedbackScreen from '../Screens/FeedBack Form/feedback.screen';
import SubmitScreen from '../Screens/Submit Request/submit.screen';
import Filter from '../Screens/Filter/filter.screen';
import UserProfile from '../Screens/UserProfile/userProfile.screen';

const Routes = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="Filter" component={Filter} title="Filter" />
        <Scene key="UserProfile" component={UserProfile} title="User Profile" />
        <Scene key="login" component={Login} title="Login" hideNavBar />
        <Scene key="signup" component={SignUp} title="SignUp" />
        <Scene key="Forgot" component={Forgot} title="Forgot Password" />
        <Scene
          key="ChangePassword"
          component={ChangePassword}
          title="Change Password"
        />
        <Scene key="Feedback" component={FeedbackScreen} title="Feed Back" />
        <Scene key="Submit" component={SubmitScreen} title="Submit Request" />
      </Stack>
    </Router>
  );
};

export default Routes;
