import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';

import BorderLayout from '@thallyssonklein/border-layout-react-native';

import Button from '../components/Button';
import Logo from '../components/Logo';
import TextInput from '../components/TextInput';
import ErrorMessage from '../components/ErrorMessage';

export default Form = ({navigation}) => {
  const [ step, setStep ] = useState(0);
  const [ error, setError ] = useState("");
  const [ formValues, setFormValues ] = useState([]);

  const refContainerStep1 = useRef(null), refContainerStep2 = useRef(null);

  async function forgotPassword(){
    await Linking.openURL("https://google.com"); //Put here your password recovery page
  }

  useEffect(() => {
      if(formValues.finish){
        console.log(formValues); //Send to your API
        navigation.navigate("Hello");
      }
  }, [formValues]);

  useEffect(() => {
      setError("");
  }, [step]);

  const validate = (callback, param) => {
    console.log(step);
    switch(step){
        case 0:
            if(refContainerStep1.current.state.value !== ""){
                setFormValues({...formValues, username: refContainerStep1.current.state.value, finish: false})
                callback(param);
            }else{
              setError("Você precisa preencher o nome de usuário");
            }
            break;
        case 1:
            if(refContainerStep2.current.state.value !== ""){
                setFormValues({...formValues, password: refContainerStep2.current.state.value, finish: true})
            }else{
                setError("Você precisa preencher a senha");
            }
            break;
        default:
          console.log("Entrou no default XXXXXXXZ");
          callback(param);
          break;
    }
  }

  let input1 = <TextInput ref={refContainerStep1} label={"Username"} key={0}/>;
  let input2 = <TextInput ref={refContainerStep2} secure={true} label={"Password"} key={1}/>;
  return <>
            <BorderLayout>
              {{
                top: <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                        <Logo/>
                     </View>,
                center: <View style={{flexDirection: "column", justifyContent: "center"}}>
                          {error !== "" && <ErrorMessage error={error}/>}
                          {step === 0 ?  
                           input1 : input2
                          }
                          <TouchableOpacity style={{marginTop: 10}} onPress={() => forgotPassword()}>
                            <Text>Esqueci minha senha</Text>
                          </TouchableOpacity>
                        </View>,
                bottom: <>
                          <Button title={(step === 0 ) ? "PRÓXIMO" : "FINALIZAR"}
                                          onPress={
                                            (step === 0) ? () => validate(setStep, 1) : () => validate()}/>
                        </>
              }}
            </BorderLayout>
         </>;
}