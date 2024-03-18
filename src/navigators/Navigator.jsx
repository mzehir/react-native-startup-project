import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//* sections
import AuthNavigator from './custom/AuthNavigator';

const Navigator = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
