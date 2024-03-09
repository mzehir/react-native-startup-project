import React from 'react';
import styled from '@emotion/native';
import {useNavigation} from '@react-navigation/native';
import ViewComp from '../../../components/core/View';
import ThemeTextComp from '../../../components/custom/ThemeText';
import ThemeTouchableOpacityComp from '../../../components/custom/ThemeTouchableOpacity';
import {MaterialIconsDefaultComp} from '../../../components/custom/Icons';
import {AUTH_NAVIGATORS} from '../../../utils/constant/navigatorAuthConstant';

const Container = styled(ViewComp)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Spacer = styled(ViewComp)`
  margin-vertical: ${props => props.theme.spacing.byHeight(12)};
`;

const ForgotPasswordView = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ThemeTextComp>Forgot Password View</ThemeTextComp>

      <Spacer />

      <ThemeTouchableOpacityComp
        variant="text"
        color="success"
        size="small"
        iconFields={{
          component: MaterialIconsDefaultComp,
          name: 'arrow-forward',
          position: 'right',
        }}
        onPress={() => navigation.navigate(AUTH_NAVIGATORS.REGISTER.name)}>
        Go to Register View
      </ThemeTouchableOpacityComp>

      <ThemeTouchableOpacityComp
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
      </ThemeTouchableOpacityComp>
    </Container>
  );
};

export default ForgotPasswordView;
