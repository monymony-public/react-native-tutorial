import { ToastAndroid } from 'react-native';

const runToast = (message, duration, position) => {
    duration = duration === "LONG"
        ? duration = ToastAndroid.LONG
        : duration = ToastAndroid.SHORT

    position = position === "TOP"
        ? position = ToastAndroid.TOP
        : position === "BOTTOM"
            ? position = ToastAndroid.BOTTOM
            : position === "CENTER"
                ? position = ToastAndroid.CENTER
                : position = ToastAndroid.BOTTOM;

    return ToastAndroid.showWithGravity(message, duration, position);
}

export default runToast;
