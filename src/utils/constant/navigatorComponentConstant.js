import DefaultLayout from '../../layout/DefaultLayout';
import ComponentsView from '../../view/component/Components';
import IconPlayground from '../../view/component/icon/IconPlayground';
import CheckboxPlayground from '../../view/component/checkbox/CheckboxPlayground';
import RadioPlayground from '../../view/component/radio/RadioPlayground';
import TextPlayground from '../../view/component/text/TextPlayground';
import TextInputPlayground from '../../view/component/textInput/TextInputPlayground';
import ButtonPlayground from '../../view/component/button/ButtonPlayground';
//* components
import {ScrollViewDefault} from '../../components/custom/ScrollViews';
import CustomTextComp from '../../components/custom/CustomText';
//* utils
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

  ICON: {
    name: 'icon',
    component: props => (
      <ScrollViewDefault>
        <DefaultLayout>
          <IconPlayground {...props} />
        </DefaultLayout>
      </ScrollViewDefault>
    ),
    options: {
      title: 'components.iconPlayground',
      headerTitle: props => (
        <CustomTextComp
          variant={TEXT_VARIANTS.TITLE.value}
          size={SIZES.medium.value}>
          {props.children}
        </CustomTextComp>
      ),
    },
  },

  CHECKBOX: {
    name: 'checkbox',
    component: props => (
      <ScrollViewDefault>
        <DefaultLayout>
          <CheckboxPlayground {...props} />
        </DefaultLayout>
      </ScrollViewDefault>
    ),
    options: {
      title: 'components.checkboxPlayground',
      headerTitle: props => (
        <CustomTextComp
          variant={TEXT_VARIANTS.TITLE.value}
          size={SIZES.medium.value}>
          {props.children}
        </CustomTextComp>
      ),
    },
  },

  RADIO_BUTTON: {
    name: 'radio-button',
    component: props => (
      <ScrollViewDefault>
        <DefaultLayout>
          <RadioPlayground {...props} />
        </DefaultLayout>
      </ScrollViewDefault>
    ),
    options: {
      title: 'components.radioButtonPlayground',
      headerTitle: props => (
        <CustomTextComp
          variant={TEXT_VARIANTS.TITLE.value}
          size={SIZES.medium.value}>
          {props.children}
        </CustomTextComp>
      ),
    },
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

  TEXT_INPUT: {
    name: 'text-input',
    component: props => (
      <ScrollViewDefault>
        <DefaultLayout>
          <TextInputPlayground {...props} />
        </DefaultLayout>
      </ScrollViewDefault>
    ),
    options: {
      title: 'components.textInputPlayground',
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
