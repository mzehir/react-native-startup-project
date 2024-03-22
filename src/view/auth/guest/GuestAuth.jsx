import React, {useEffect, useState} from 'react';
import styled from '@emotion/native';
import {useNavigation} from '@react-navigation/native';
//* components
import ViewComp from '../../../components/core/View';
import CustomTextComp from '../../../components/custom/CustomText';
//* utils
import {AUTH_NAVIGATORS} from '../../../utils/constant/navigatorAuthConstant';
import {COLORS} from '../../../utils/constant/app/colorConstant';
import {TEXT_VARIANTS} from '../../../utils/constant/app/textVariantConstant';

const Container = styled(ViewComp)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const GuestAuthView = () => {
  const navigation = useNavigation();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown === 0) {
      clearInterval(interval);
      navigation.navigate(AUTH_NAVIGATORS.HOME_NAVIGATOR.name);
      return;
    }

    const interval = setInterval(() => {
      setCountdown(currentCountdown => currentCountdown - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown, navigation]);

  return (
    <Container>
      <CustomTextComp
        style={{textAlign: 'center'}}
        color={COLORS.WARNING.value}>
        components.guestAuthContent
      </CustomTextComp>

      <ViewComp style={{padding: 5}} />

      <CustomTextComp
        isTranslate={false}
        color={COLORS.WARNING.value}
        variant={TEXT_VARIANTS.TITLE.value}>
        {countdown}
      </CustomTextComp>
    </Container>
  );
};

export default GuestAuthView;
