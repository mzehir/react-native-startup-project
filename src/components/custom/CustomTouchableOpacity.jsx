import React from 'react';
import styled from '@emotion/native';
import TouchableOpacityComp from '../core/TouchableOpacity';
import CustomTextComp from './CustomText';

import {TEXT_VARIANTS} from '../../utils/constant/app/textVariantConstant';
import {SIZES} from '../../utils/constant/app/sizeConstant';
import {COLORS} from '../../utils/constant/app/colorConstant';
import {BUTTON_VARIANTS} from '../../utils/constant/app/buttonVariantConstant';
import {BUTTON_RADIUS} from '../../utils/constant/app/buttonRadiusConstant';
import {COLOR_TYPE} from '../../utils/constant/app/colorTypeConstant';

const StyledTouchableOpacityComp = styled(TouchableOpacityComp)`
  flex-direction: ${({iconFields}) =>
    iconFields?.position === 'right' ? 'row' : 'row-reverse'};

  justify-content: center;

  align-items: center;

  gap: 5px;

  background-color: ${({theme, color, variant}) =>
    variant === BUTTON_VARIANTS.CONTAINED.value
      ? theme.palette[color].background
      : 'transparent'};

  border-color: ${({theme, color, variant}) =>
    variant === BUTTON_VARIANTS.OUTLINED.value
      ? theme.palette[color].borderColor
      : 'transparent'};

  border-width: ${({variant}) =>
    variant === BUTTON_VARIANTS.OUTLINED.value ? '1px' : '0'};

  border-radius: ${({radius}) => {
    switch (radius) {
      case BUTTON_RADIUS.LITTLE.value:
        return '2px';
      case BUTTON_RADIUS.FEW.value:
        return '4px';
      case BUTTON_RADIUS.NORMAL.value:
        return '8px';
      case BUTTON_RADIUS.MORE.value:
        return '12px';
      case BUTTON_RADIUS.MUCH.value:
        return '16px';
      case BUTTON_RADIUS.PLENTY.value:
        return '20px';
      case BUTTON_RADIUS.MANY.value:
        return '24px';
      default:
        return '0px';
    }
  }};

  padding: ${({variant, size}) => {
    if (variant === BUTTON_VARIANTS.TEXT.value) {
      return '0px';
    } else {
      switch (size) {
        case SIZES.small.value:
          return '6px 12px';
        case SIZES.medium.value:
          return '8px 16px';
        default:
          return '10px 20px';
      }
    }
  }};
`;

const CustomTouchableOpacityComp = ({
  size = SIZES.small.value,
  color = COLORS.SUCCESS.value,
  variant = BUTTON_VARIANTS.CONTAINED.value,
  radius = BUTTON_RADIUS.FEW.value,
  iconFields = {position: '', component: undefined, name: ''},
  isTranslate = true,
  children,
  ...props
}) => {
  return (
    <StyledTouchableOpacityComp
      size={size}
      color={color}
      variant={variant}
      radius={radius}
      iconFields={iconFields}
      {...props}>
      <CustomTextComp
        isTranslate={isTranslate}
        variant={TEXT_VARIANTS.FOR_BUTTON.value}
        size={size}
        colorType={
          BUTTON_VARIANTS.CONTAINED.value === variant
            ? COLOR_TYPE.CONTAINED_COLOR.value
            : COLOR_TYPE.COLOR.value
        }
        color={color}>
        {children}
      </CustomTextComp>

      {iconFields.component && (
        <iconFields.component
          size={
            size === SIZES.small.value
              ? 15
              : size === SIZES.medium.value
              ? 21
              : 27
          }
          colorGroup={color}
          color={variant === 'contained' ? 'containedColor' : 'color'}
          name={iconFields.name}
        />
      )}
    </StyledTouchableOpacityComp>
  );
};

export default CustomTouchableOpacityComp;
