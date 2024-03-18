import React from 'react';
import styled from '@emotion/native';
import {useNavigation} from '@react-navigation/native';
//* components
import ViewComp from '../../../components/core/View';
import CustomTouchableOpacityComp from '../../../components/custom/CustomTouchableOpacity';
import {MaterialIconsDefaultComp} from '../../../components/custom/Icons';
//* utils
import {AUTH_NAVIGATORS} from '../../../utils/constant/navigatorAuthConstant';
import {ICON_POSITION} from '../../../utils/constant/app/iconSizeConstant';
import {BUTTON_VARIANTS} from '../../../utils/constant/app/buttonVariantConstant';
import {COLORS} from '../../../utils/constant/app/colorConstant';
import {SIZES} from '../../../utils/constant/app/sizeConstant';

const Container = styled(ViewComp)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const GuestAuthView = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <CustomTouchableOpacityComp
        variant={BUTTON_VARIANTS.TEXT.value}
        color={COLORS.INFO.value}
        size={SIZES.small.value}
        iconFields={{
          component: MaterialIconsDefaultComp,
          name: 'arrow-forward',
          position: ICON_POSITION.end.value,
        }}
        onPress={() =>
          navigation.navigate(AUTH_NAVIGATORS.HOME_NAVIGATOR.name)
        }>
        Go to the home screen in home navigator
      </CustomTouchableOpacityComp>
    </Container>
  );
};

export default GuestAuthView;
