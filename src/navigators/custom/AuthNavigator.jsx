import React from 'react';
import {useTheme} from '@emotion/react';
import StackNavigator from '../stack/Stack';
import {MaterialIconsDefaultComp} from '../../components/custom/Icons';
import TouchableOpacityComp from '../../components/core/TouchableOpacity';
import {getAuthNavigatorsConstantAsArray} from '../../utils/constant/navigatorAuthConstant';

const {initialRouteName, screens} = getAuthNavigatorsConstantAsArray();

const AuthNavigator = () => {
  const themeHook = useTheme();

  let screenOptions = {
    headerStyle: {
      backgroundColor: themeHook.palette.app.appBar.background,
    },
    headerBackVisible: false,
    headerLeft: (navigation, navigationHook) => {
      return navigation.canGoBack ? (
        <TouchableOpacityComp
          onPress={() => navigationHook.goBack()}
          style={{marginRight: 10}}>
          <MaterialIconsDefaultComp name="arrow-back" size={20} />
        </TouchableOpacityComp>
      ) : null;
    },
  };

  return (
    <StackNavigator
      initialRouteName={initialRouteName}
      screens={screens}
      screenOptions={screenOptions}
    />
  );
};

export default AuthNavigator;
