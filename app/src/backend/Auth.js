import API from './ApiObj';

import { createOrUpdate } from '../Storage';

export default async function Auth(form){
    const response = await API.post('/auth/', form);
    if(response.ok){
        createOrUpdate('token', response.data.token);
        return true;
    }else{
        return false;
    }
}