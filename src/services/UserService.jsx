import {
  signInNotification,
  signUpNotification,
} from '../components/Notifications/Notifications';
import { SignIn, SignOut, SignUp } from '../firebase';
import { OFF_LAZY_LOADING, ON_LAZY_LOADING } from '../redux/consts/const';

export const handleSignUp = ({ email, password }, navigate) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ON_LAZY_LOADING,
      });
      const data = await SignUp(email, password);
      if (data) {
        Promise.all([signUpNotification('success'), navigate()]);
      }
    } catch (error) {
      signUpNotification('error', error.code);
      console.log({ error });
    }
    dispatch({
      type: OFF_LAZY_LOADING,
    });
  };
};

export const handleSignOut = (navigate) => {
  return async () => {
    try {
      // dispatch({
      //   type: ON_LAZY_LOADING,
      // });
      const data = await SignOut();
      if (data) {
        Promise.all([navigate()]);
      }
    } catch (error) {
      console.log({ error });
    }
    // dispatch({
    //   type: OFF_LAZY_LOADING,
    // });
  };
};

export const handleSignIn = ({ email, password }, navigate) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ON_LAZY_LOADING,
      });
      const data = await SignIn(email, password);
      if (data) {
        Promise.all([signInNotification('success'), navigate()]);
      }
    } catch (error) {
      signInNotification('error', error.code);
      console.log({ error });
    }
    dispatch({
      type: OFF_LAZY_LOADING,
    });
  };
};
