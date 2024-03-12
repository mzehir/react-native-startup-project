import React from 'react';
import styled from '@emotion/native';
import TextComp from '../core/Text';
import {TEXT_VARIANTS} from '../../utils/constant/app/textVariantConstant';
import {COLORS} from '../../utils/constant/app/colorConstant';
import {SIZES} from '../../utils/constant/app/sizeConstant';

const StyledTextComp = styled(TextComp)`
  font-size: ${props =>
    props.theme.typography[props.variant][props.size].fontSize + `px`};

  font-weight: ${props =>
    props.theme.typography[props.variant][props.size].fontWeight};

  letter-spacing: ${props =>
    props.theme.typography[props.variant][props.size].letterSpacing + `px`};

  line-height: ${props =>
    props.theme.typography[props.variant][props.size].lineHeight + `px`};

  color: ${props => props.theme.palette[props.color].color};
`;

const CustomTextComp = ({
  variant = TEXT_VARIANTS.LABEL.value,
  size = SIZES.large.value,
  color = COLORS.STANDARD.value,
  isTranslate = false,
  children,
  ...props
}) => {
  return (
    <StyledTextComp variant={variant} size={size} color={color} {...props}>
      {children}
    </StyledTextComp>
  );
};

export default CustomTextComp;
