import React from 'react';
import { Text } from 'react-native';

import BorderLayout from '@thallyssonklein/border-layout-react-native';

export default HomeScreen = () => {
  return <>
    <BorderLayout>
        {{
            center: <Text>Home</Text>
        }}
    </BorderLayout>
  </>;
}