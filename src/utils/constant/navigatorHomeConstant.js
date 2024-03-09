import {ScrollViewDefault} from '../../components/custom/ScrollViews';
import DefaultLayout from '../../layout/DefaultLayout';
import HomeView from '../../view/home/home/Home';
import ComponentNavigator from '../../navigators/custom/ComponentNavigator';
import ProfileView from '../../view/home/profile/Profile';
import {MaterialIconsDefaultComp} from '../../components/custom/Icons';
import ThemeTextComp from '../../components/custom/ThemeText';

export const HOME_NAVIGATORS = {
  HOME: {
    name: 'home',
    component: props => (
      <ScrollViewDefault>
        <DefaultLayout>
          <HomeView {...props} />
        </DefaultLayout>
      </ScrollViewDefault>
    ),
    options: {
      title: 'Home',
      headerTitle: props => (
        <ThemeTextComp variant="title" size="medium">
          {props.children}
        </ThemeTextComp>
      ),
      tabBarIcon: ({size, focused}) => (
        <MaterialIconsDefaultComp name="home" size={size} active={focused} />
      ),
    },
    initialRouteName: true,
  },

  COMPONENT_NAVIGATOR: {
    name: 'component-navigator',
    component: () => <ComponentNavigator />,
    options: {
      headerShown: false,
      tabBarIcon: ({size, focused}) => (
        <MaterialIconsDefaultComp name="grid-view" size={size} active={focused} />
      ),
    },
  },

  PROFILE: {
    name: 'profile',
    component: props => (
      <ScrollViewDefault>
        <DefaultLayout>
          <ProfileView {...props} />
        </DefaultLayout>
      </ScrollViewDefault>
    ),
    options: {
      title: 'Profile',
      headerTitle: props => (
        <ThemeTextComp variant="title" size="medium">
          {props.children}
        </ThemeTextComp>
      ),
      tabBarIcon: ({size, focused}) => (
        <MaterialIconsDefaultComp name="person" size={size} active={focused} />
      ),
    },
  },
};

export const getHomeNavigatorsConstantAsArray = () => {
  let initialRouteName = '';
  let screens = [];

  for (const key in HOME_NAVIGATORS) {
    const navigator = HOME_NAVIGATORS[key];

    if (navigator.initialRouteName) {
      initialRouteName = navigator.name;
    }

    screens.push({
      name: navigator.name,

      component: navigator.component,

      ...(navigator.options ? {options: navigator.options} : {}),

      ...(navigator.initialParams
        ? {initialParams: navigator.initialParams}
        : {}),
    });
  }

  return {initialRouteName, screens};
};
