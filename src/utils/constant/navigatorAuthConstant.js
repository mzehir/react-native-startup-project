import AuthLayout from '../../layout/AuthLayout';
import GuestAuthView from '../../view/auth/guest/GuestAuth';
import HomeNavigator from '../../navigators/custom/HomeNavigator';
//* components
import CustomTextComp from '../../components/custom/CustomText';
import {ScrollViewDefault} from '../../components/custom/ScrollViews';
//* utils
import {TEXT_VARIANTS} from './app/textVariantConstant';
import {SIZES} from './app/sizeConstant';

export const AUTH_NAVIGATORS = {
  GUEST_AUTH: {
    name: 'guest-auth',
    component: props => (
      <ScrollViewDefault>
        <AuthLayout>
          <GuestAuthView {...props} />
        </AuthLayout>
      </ScrollViewDefault>
    ),
    options: {
      title: 'Guest Screen',
      headerTitle: props => (
        <CustomTextComp
          isTranslate={false}
          variant={TEXT_VARIANTS.TITLE.value}
          size={SIZES.medium.value}>
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
