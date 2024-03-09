import React from 'react';
import styled from '@emotion/native';
import TextComp from '../core/Text';
import TouchableOpacityComp from '../core/TouchableOpacity';

const StyledText = styled(TextComp)`
  font-size: ${props =>
    props.theme.typography.forButton[props.size].fontSize + `px`};

  font-weight: ${props =>
    props.theme.typography.forButton[props.size].fontWeight};

  color: ${props =>
    props.variant === 'contained'
      ? props.theme.palette[props.color].containedColor
      : props.theme.palette[props.color].color};
`;

const StyledTouchableOpacityComp = styled(TouchableOpacityComp)`
  flex-direction: ${props =>
    props.iconPosition === 'right' ? 'row' : 'row-reverse'};
  align-items: center;

  justify-content: ${props => (props.isIcon ? 'space-between' : 'center')};

  gap: 5px;

  padding: ${props => {
    switch (props.size) {
      case 'small':
        return '6px 12px';
      case 'medium':
        return '8px 16px';
      default:
        return '10px 20px';
    }
  }};

  background-color: ${props =>
    props.variant === 'contained'
      ? props.theme.palette[props.color].background
      : 'transparent'};

  border-color: ${props =>
    props.variant === 'outlined'
      ? props.theme.palette[props.color].borderColor
      : 'transparent'};

  border-width: ${props => (props.variant === 'outlined' ? '1px' : '0')};

  border-radius: ${props => {
    switch (props.radius) {
      case 'little':
        return '2px';
      case 'few':
        return '4px';
      case 'normal':
        return '8px';
      case 'more':
        return '12px';
      case 'much':
        return '16px';
      case 'plenty':
        return '20px';
      case 'many':
        return '24px';
      default:
        return '0px';
    }
  }};
`;

const ThemeTouchableOpacityComp = ({
  size,
  color,
  variant,
  radius,
  iconFields,
  children,
  ...props
}) => {
  return (
    <StyledTouchableOpacityComp
      size={size}
      color={color}
      variant={variant}
      radius={radius}
      isIcon={iconFields ? true : false}
      iconPosition={iconFields?.position}
      {...props}>
      <StyledText size={size} color={color} variant={variant}>
        {children}
      </StyledText>

      {iconFields?.component && (
        <iconFields.component
          size={size === 'small' ? 15 : size === 'medium' ? 21 : 27}
          colorGroup={color}
          color={variant === 'contained' ? 'containedColor' : 'color'}
          name={iconFields.name}
        />
      )}
    </StyledTouchableOpacityComp>
  );
};

ThemeTouchableOpacityComp.defaultProps = {
  size: 'small', // small || medium || large => zorunlu değil
  color: 'success', // error || info || primary || secondary || success || warning => zorunlu deği
  variant: 'contained', // text || outlined || contained => zorunlu deği
  radius: 'few', // little || few || normal || more || much || plenty || many || none => zorunlu deği
  iconFields: {
    component: null, // => component => zorunlu değil
    name: '', // => string => component varsa zorunlu, component yoksa zorunlu değil
    position: 'right', // => left || right => zorunlu değil
  },
};

export default ThemeTouchableOpacityComp;
