import { AsyncStorage } from 'react-native';
import { XStorage } from 'react-native-easy-app';

export const RNStorage = {
    token: undefined,
};

XStorage.initStorage(RNStorage, AsyncStorage);   