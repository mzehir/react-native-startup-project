import {ScrollViewDefault} from '../../components/custom/ScrollViews';
import AuthLayout from '../../layout/AuthLayout';
import RegisterView from '../../view/auth/register/Register';
import HomeNavigator from '../../navigators/custom/HomeNavigator';
import CustomTextComp from '../../components/custom/CustomText';

export const AUTH_NAVIGATORS = {
  REGISTER: {
    name: 'register',
    component: props => (
      <ScrollViewDefault>
        <AuthLayout>
          <RegisterView {...props} />
        </AuthLayout>
      </ScrollViewDefault>
    ),
    options: {
      title: 'Register',
      headerTitle: props => (
        <CustomTextComp variant="title" size="medium">
          {props.children}
        </CustomTextComp>
      ),
    },
  },

  HOME_NAVIGATOR: {
    name: 'home-navigator',
    component: () => <HomeNavigator />,
    options: {
      headerShown: false,
    },
  },
};

export const getAuthNavigatorsConstantAsArray = () => {
  let initialRouteName = '';
  let screens = [];

  for (const key in AUTH_NAVIGATORS) {
    const navigator = AUTH_NAVIGATORS[key];

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
