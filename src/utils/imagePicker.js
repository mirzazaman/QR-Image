import { Alert } from 'react-native';
import { launchCamera as camera, launchImageLibrary } from 'react-native-image-picker';
import { requestCameraPermission } from './cameraPermission';

export const launchLibrary = (callback) => {
    const options = {
        mediaType: 'photo',
        maxHeight: 200,
        maxWidth: 200,
        quality: 0.5,
    };

    launchImageLibrary(options, (response) => {
        if (response.errorCode) {
            Alert.alert('Error', response.errorMessage);
        } else {
            return callback(response);
        }
    });
}

export const launchCamera = async (callback) => {
    const options = {
        mediaType: 'photo',
        maxHeight: 200,
        maxWidth: 200,
        quality: 0.5,
        saveToPhotos: false,
        cameraType: 'back',
    };

    let allowed = await requestCameraPermission();
    if (!allowed) {
        Alert.alert('Error', 'Camera permission denied');
        return;
    }

    camera(options, (response) => {
        if (response.errorCode) {
            Alert.alert('Error', response.errorMessage);
        } else {
            return callback(response);
        }
    });
}