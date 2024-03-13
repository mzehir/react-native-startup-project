import React from 'react';
import styled from '@emotion/native';
import {useNavigation} from '@react-navigation/native';
import ViewComp from '../../../components/core/View';
import {MaterialIconsDefaultComp} from '../../../components/custom/Icons';
import {AUTH_NAVIGATORS} from '../../../utils/constant/navigatorAuthConstant';
import CustomTouchableOpacityComp from '../../../components/custom/CustomTouchableOpacity';

const Container = styled(ViewComp)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Spacer = styled(ViewComp)`
  margin-vertical: ${props => props.theme.spacing.byHeight(12)};
`;

const RegisterView = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <CustomTouchableOpacityComp
        variant="text"
        color="primary"
        size="small"
        iconFields={{
          component: MaterialIconsDefaultComp,
          name: 'arrow-forward',
          position: 'right',
        }}
        onPress={() => navigation.navigate(AUTH_NAVIGATORS.LOGIN.name)}>
        Go to Login View
      </CustomTouchableOpacityComp>

      <Spacer />

      <CustomTouchableOpacityComp
        variant="text"
        color="error"
        size="small"
        iconFields={{
          component: MaterialIconsDefaultComp,
          name: 'arrow-forward',
          position: 'right',
        }}
        onPress={() =>
          navigation.navigate(AUTH_NAVIGATORS.FORGOT_PASSWORD.name)
        }>
        Go to Forgot Password View
      </CustomTouchableOpacityComp>

      <Spacer />

      <CustomTouchableOpacityComp
        variant="text"
        color="info"
        size="small"
        iconFields={{
          component: MaterialIconsDefaultComp,
          name: 'arrow-forward',
          position: 'right',
        }}
        onPress={() =>
          navigation.navigate(AUTH_NAVIGATORS.HOME_NAVIGATOR.name)
        }>
        Go to Home Navigator and Home View
      </CustomTouchableOpacityComp>
    </Container>
  );
};

export default RegisterView;
