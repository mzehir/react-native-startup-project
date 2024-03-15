import {ScrollViewDefault} from '../../components/custom/ScrollViews';
import DefaultLayout from '../../layout/DefaultLayout';
import ComponentsView from '../../view/component/Components';
import ButtonPlayground from '../../view/component/button/ButtonPlayground';
import TextPlayground from '../../view/component/text/TextPlayground';

import CustomTextComp from '../../components/custom/CustomText';
import {TEXT_VARIANTS} from './app/textVariantConstant';
import {SIZES} from './app/sizeConstant';

export const COMPONENT_NAVIGATORS = {
  COMPONENTS: {
    name: 'components',
    component: props => (
      <ScrollViewDefault>
        <DefaultLayout>
          <ComponentsView {...props} />
        </DefaultLayout>
      </ScrollViewDefault>
    ),
    options: {
      title: 'Components',
      headerTitle: props => (
        <CustomTextComp
          isTranslate={false}
          variant={TEXT_VARIANTS.TITLE.value}
          size={SIZES.medium.value}>
          {props.children}
        </CustomTextComp>
      ),
      headerLeft: () => {
        return null;
      },
    },
    initialRouteName: true,
  },

  TEXT: {
    name: 'text',
    component: props => (
      <ScrollViewDefault>
        <DefaultLayout>
          <TextPlayground {...props} />
        </DefaultLayout>
      </ScrollViewDefault>
    ),
    options: {
      title: 'components.typographyPlayground',
      headerTitle: props => (
        <CustomTextComp
          variant={TEXT_VARIANTS.TITLE.value}
          size={SIZES.medium.value}>
          {props.children}
        </CustomTextComp>
      ),
    },
  },

  BUTTON: {
    name: 'button',
    component: props => (
      <ScrollViewDefault>
        <DefaultLayout>
          <ButtonPlayground {...props} />
        </DefaultLayout>
      </ScrollViewDefault>
    ),
    options: {
      title: 'components.buttonPlayground',
      headerTitle: props => (
        <CustomTextComp
          variant={TEXT_VARIANTS.TITLE.value}
          size={SIZES.medium.value}>
          {props.children}
        </CustomTextComp>
      ),
    },
  },
};

export const getComponentNavigatorsConstantAsArray = () => {
  let initialRouteName = '';
  let screens = [];

  for (const key in COMPONENT_NAVIGATORS) {
    const navigator = COMPONENT_NAVIGATORS[key];

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
