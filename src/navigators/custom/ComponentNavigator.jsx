import React from 'react';
import {useTheme} from '@emotion/react';
import StackNavigator from '../stack/Stack';
import {MaterialIconsDefaultComp} from '../../components/custom/Icons';
import TouchableOpacityComp from '../../components/core/TouchableOpacity';
import {getComponentNavigatorsConstantAsArray} from '../../utils/constant/navigatorComponentConstant';

const {initialRouteName, screens} = getComponentNavigatorsConstantAsArray();

const ComponentNavigator = () => {
  const themeHook = useTheme();

  let screenOptions = {
    headerStyle: {
      backgroundColor: themeHook.palette.app.appBar.background,
    },
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

export default ComponentNavigator;
