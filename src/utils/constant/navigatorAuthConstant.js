import {ScrollViewDefault} from '../../components/custom/ScrollViews';
import AuthLayout from '../../layout/AuthLayout';
import LoginView from '../../view/auth/login/Login';
import RegisterView from '../../view/auth/register/Register';
import ForgotPasswordView from '../../view/auth/forgotPassword/ForgotPassword';
import HomeNavigator from '../../navigators/custom/HomeNavigator';
import ThemeTextComp from '../../components/custom/ThemeText';

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
        <ThemeTextComp variant="title" size="medium">
          {props.children}
        </ThemeTextComp>
      ),
    },
  },

  LOGIN: {
    name: 'login',
    component: props => (
      <ScrollViewDefault>
        <AuthLayout>
          <LoginView {...props} />
        </AuthLayout>
      </ScrollViewDefault>
    ),
    options: {
      title: 'Login',
      headerTitle: props => (
        <ThemeTextComp variant="title" size="medium">
          {props.children}
        </ThemeTextComp>
      ),
    },
  },

  FORGOT_PASSWORD: {
    name: 'forgot-password',
    component: props => (
      <ScrollViewDefault>
        <AuthLayout>
          <ForgotPasswordView {...props} />
        </AuthLayout>
      </ScrollViewDefault>
    ),
    options: {
      title: 'Forgot Password',
      headerTitle: props => (
        <ThemeTextComp variant="title" size="medium">
          {props.children}
        </ThemeTextComp>
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
