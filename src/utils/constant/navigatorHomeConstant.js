import DefaultLayout from '../../layout/DefaultLayout';
import HomeView from '../../view/home/home/Home';
import ComponentNavigator from '../../navigators/custom/ComponentNavigator';
//* components
import {ScrollViewDefault} from '../../components/custom/ScrollViews';
import {MaterialIconsDefaultComp} from '../../components/custom/Icons';
import CustomTextComp from '../../components/custom/CustomText';
//* utils
import {TEXT_VARIANTS} from './app/textVariantConstant';
import {SIZES} from './app/sizeConstant';

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
        <CustomTextComp
          variant={TEXT_VARIANTS.TITLE.value}
          size={SIZES.medium.value}>
          {props.children}
        </CustomTextComp>
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
        <MaterialIconsDefaultComp
          name="grid-view"
          size={size}
          active={focused}
        />
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
