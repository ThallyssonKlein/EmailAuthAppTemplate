import React, { useEffect } from 'react';
import { Alert, Text } from 'react-native';

import BorderLayout from '@thallyssonklein/border-layout-react-native';

export default Hello = () => {

  useEffect(() => {
    Alert.alert("Hello my little friend!");
  }, []);
 
  return <>
            <BorderLayout>
                {{
                    center: <Text>Hello Screen</Text>
                }}
            </BorderLayout>
         </>;
}