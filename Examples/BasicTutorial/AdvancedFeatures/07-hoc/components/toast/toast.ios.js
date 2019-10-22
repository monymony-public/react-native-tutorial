import Toast from 'react-native-toast-native';

const runToast = (message, duration, position) => {
    duration = duration === "LONG"
        ? duration = Toast.LONG
        : duration = Toast.SHORT;

    position = position === "TOP"
        ? position = Toast.TOP
        : position === "BOTTOM"
            ? position = Toast.BOTTOM
            : position === "CENTER"
                ? position = Toast.CENTER
                : position = Toast.BOTTOM;

    Toast.show(message, duration, position);
}

export default runToast;
