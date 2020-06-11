import { AsyncStorage } from 'react-native';
import { APP_NAME } from 'react-native-dotenv';

const createOrUpdate = async(key, content) =>{
    await AsyncStorage.setItem('@' + APP_NAME + ":" + key, new String(content));
}
const read = async(key) =>{
    await AsyncStorage.getItem('@' + APP_NAME + ":" + key);
}

const remove = async(key) =>{
    await AsyncStorage.removeItem('@' + APP_NAME + ":" + key);
}

export { createOrUpdate, read, remove }