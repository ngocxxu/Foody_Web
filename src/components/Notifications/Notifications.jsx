import { notification } from 'antd';

export const openNotificationWithIcon = (type) => {
  switch (type) {
    case 'success':
      notification[type]({
        message: 'Add to cart successfully',
      });
      break;
    case 'error':
      notification[type]({
        message: 'Add to cart unsuccessfully',
      });
      break;

    default:
      break;
  }
};
