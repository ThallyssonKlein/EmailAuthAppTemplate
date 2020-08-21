import API from './ApiObj';

import { RNStorage } from '../Storage';

export default async function Auth(form){
    const response = await API.post('/auth/', form);
    if(response.ok){
        RNStorage.token = response.data.token;
        return true;
    }else{
        return false;
    }
}