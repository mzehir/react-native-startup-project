import React from 'react';
import styled from '@emotion/native';
import {useNavigation} from '@react-navigation/native';
import ViewComp from '../../../components/core/View';
import CustomTouchableOpacityComp from '../../../components/custom/CustomTouchableOpacity';
import {MaterialIconsDefaultComp} from '../../../components/custom/Icons';
import {AUTH_NAVIGATORS} from '../../../utils/constant/navigatorAuthConstant';

const Container = styled(ViewComp)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const RegisterView = () => {
  const navigation = useNavigation();

  return (
    <Container>
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
