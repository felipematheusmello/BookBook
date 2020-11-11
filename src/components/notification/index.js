import { notification } from 'antd';
import "./index.css"
export const openNotificationWithIcon = (type, title, description) => {
  notification[type]({
    message: title,
    description: description,
  });
};
