import React from 'react';
import styled from '@emotion/native';
import TextComp from '../core/Text';
import {TEXT_VARIANTS} from '../../utils/constant/app/textVariantConstant';
import {COLORS} from '../../utils/constant/app/colorConstant';
import {SIZES} from '../../utils/constant/app/sizeConstant';
import {COLOR_TYPE} from '../../utils/constant/app/colorTypeConstant';

const StyledTextComp = styled(TextComp)`
  color: ${props => props.theme.palette[props.color][props.colorType]};

  font-size: ${props =>
    props.theme.typography[props.variant][props.size].fontSize + `px`};

  font-weight: ${props =>
    props.theme.typography[props.variant][props.size].fontWeight};

  ${props =>
    props.theme.typography[props.variant][props.size].letterSpacing &&
    props.theme.typography[props.variant][props.size].letterSpacing + `px`}

  ${props =>
    props.theme.typography[props.variant][props.size].lineHeight &&
    props.theme.typography[props.variant][props.size].lineHeight + `px`}
`;

const CustomTextComp = ({
  variant = TEXT_VARIANTS.LABEL.value,
  size = SIZES.large.value,
  colorType = COLOR_TYPE.COLOR.value,
  color = COLORS.STANDARD.value,
  isTranslate = false,
  children,
  ...props
}) => {
  return (
    <StyledTextComp
      variant={variant}
      size={size}
      colorType={colorType}
      color={color}
      {...props}>
      {children}
    </StyledTextComp>
  );
};

export default CustomTextComp;
