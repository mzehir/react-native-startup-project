import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = ({initialRouteName, screens, screenOptions = {}}) => {
  const {...otherScreenOptions} = screenOptions;
  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        ...otherScreenOptions,
      }}>
      {screens.map((item, index) => (
        <Tab.Screen
          key={index.toString()}
          name={item.name}
          options={{
            ...(item.options?.title ? {title: item.options.title} : {}),

            ...(typeof item.options?.headerShown === 'boolean'
              ? {headerShown: item.options.headerShown}
              : {}),

            ...(item.options?.headerTitle
              ? {headerTitle: props => item.options.headerTitle(props)}
              : {}),

            ...(item.options?.tabBarIcon
              ? {tabBarIcon: props => item.options.tabBarIcon(props)}
              : {}),
          }}>
          {props => item.component(props)}
        </Tab.Screen>
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;
