import {ScrollViewDefault} from '../../components/custom/ScrollViews';
import DefaultLayout from '../../layout/DefaultLayout';
import ComponentsView from '../../view/component/Components';
import ButtonView from '../../view/component/button/Button';
import ThemeTextComp from '../../components/custom/ThemeText';

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
        <ThemeTextComp variant="title" size="medium">
          {props.children}
        </ThemeTextComp>
      ),
      headerLeft: () => {
        return null;
      },
    },
    initialRouteName: true,
  },

  BUTTON: {
    name: 'button',
    component: props => (
      <ScrollViewDefault>
        <DefaultLayout>
          <ButtonView {...props} />
        </DefaultLayout>
      </ScrollViewDefault>
    ),
    options: {
      title: 'Button',
      headerTitle: props => (
        <ThemeTextComp variant="title" size="medium">
          {props.children}
        </ThemeTextComp>
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
