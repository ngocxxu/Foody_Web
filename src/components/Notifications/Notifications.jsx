import { notification } from 'antd';

export const resetPasswordNotification = (type, message) => {
  switch (type) {
    case 'success':
      notification[type]({
        message: 'Successful Reset',
        duration: 2,
      });
      break;
    case 'error':
      notification[type]({
        message: message,
        duration: 2,
      });
      break;
    default:
      break;
  }
};

export const signInNotification = (type, message) => {
  switch (type) {
    case 'success':
      notification[type]({
        message: 'Successful Login',
        duration: 2,
      });
      break;
    case 'error':
      notification[type]({
        message: message,
        duration: 2,
      });
      break;
    default:
      break;
  }
};

export const signUpNotification = (type, message) => {
  switch (type) {
    case 'success':
      notification[type]({
        message: 'You registered successfully',
        duration: 2,
      });
      break;
    case 'error':
      notification[type]({
        message: message,
        duration: 2,
      });
      break;
    default:
      break;
  }
};

export const openNotificationWithIcon = (type) => {
  switch (type) {
    case 'success':
      notification[type]({
        message: 'Add to cart successfully',
        duration: 2,
      });
      break;
    case 'error':
      notification[type]({
        message: 'Add to cart unsuccessfully',
        duration: 2,
      });
      break;
    default:
      break;
  }
};

export const updateCartNotification = (type) => {
  switch (type) {
    case 'success':
      notification[type]({
        message: 'Product updates successfully',
        duration: 2,
      });
      break;
    case 'error':
      notification[type]({
        message: 'Product updates unsuccessfully',
        duration: 2,
      });
      break;
    default:
      break;
  }
};

export const placeOrderNotification = (type, message) => {
  switch (type) {
    case 'success':
      notification[type]({
        message: 'You have placed your order successfully',
        duration: 2,
      });
      break;
    case 'error':
      notification[type]({
        message: message,
        duration: 2,
      });
      break;
    default:
      break;
  }
};
