import React from 'react';
import {useTheme} from '@emotion/react';
import TabNavigator from '../tab/Tab';
import {getHomeNavigatorsConstantAsArray} from '../../utils/constant/navigatorHomeConstant';

const {initialRouteName, screens} = getHomeNavigatorsConstantAsArray();

const HomeNavigator = () => {
  const themeHook = useTheme();

  const screenOptions = {
    tabBarShowLabel: false,
    headerStyle: {
      backgroundColor: themeHook.palette.app.appBar.background,
    },
    tabBarStyle: {
      backgroundColor: themeHook.palette.app.bottomTab.background,
    },
  };

  return (
    <TabNavigator
      initialRouteName={initialRouteName}
      screens={screens}
      screenOptions={screenOptions}
    />
  );
};

export default HomeNavigator;
