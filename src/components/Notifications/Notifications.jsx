import { notification } from 'antd';

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

export const placeOrderNotification = (type) => {
  switch (type) {
    case 'success':
      notification[type]({
        message: 'You have placed your order successfully',
        duration: 2,
      });
      break;
    case 'error':
      notification[type]({
        message: 'You have placed your order unsuccessfully',
        duration: 2,
      });
      break;
    default:
      break;
  }
};
