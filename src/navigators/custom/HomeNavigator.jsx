import React from 'react';
import {useTheme} from '@emotion/react';
import TabNavigator from '../tab/Tab';
import AccessToGlobalSettingsUseContext from '../../hooks/AccessToGlobalSettingsUseContext';
import TouchableOpacityComp from '../../components/core/TouchableOpacity';
import {MaterialIconsDefaultComp} from '../../components/custom/Icons';
import {getHomeNavigatorsConstantAsArray} from '../../utils/constant/navigatorHomeConstant';

const {initialRouteName, screens} = getHomeNavigatorsConstantAsArray();

const HomeNavigator = () => {
  const themeHook = useTheme();
  const {setSettingsModalVisible} = AccessToGlobalSettingsUseContext();

  const screenOptions = {
    tabBarShowLabel: false,
    headerStyle: {
      backgroundColor: themeHook.appBar.background,
    },
    tabBarStyle: {
      backgroundColor: themeHook.bottomTab.background,
    },

    headerRight: () => (
      <TouchableOpacityComp
        onPress={() => setSettingsModalVisible()}
        style={{marginRight: 10}}>
        <MaterialIconsDefaultComp name="settings" size={20} />
      </TouchableOpacityComp>
    ),
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
