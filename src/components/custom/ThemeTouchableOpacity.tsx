import React from 'react';
import styled from '@emotion/native';
import TextComp from '../core/Text';
import TouchableOpacityComp from '../core/TouchableOpacity';

interface IconProps {
  size: number;
  colorGroup: string;
  color: string;
  name: string;
}

interface IconFields {
  component?: React.ElementType<IconProps>;
  name: string;
  position?: 'left' | 'right';
}

interface StyledTouchableOpacityProps {
  size: 'small' | 'medium' | 'large';
  color: 'error' | 'info' | 'primary' | 'secondary' | 'success' | 'warning';
  variant: 'text' | 'outlined' | 'contained';
  radius:
    | 'little'
    | 'few'
    | 'normal'
    | 'more'
    | 'much'
    | 'plenty'
    | 'many'
    | 'none';
  iconFields?: IconFields | {position: 'right'};
  children: React.ReactNode;
}

const StyledText = styled(TextComp)<StyledTouchableOpacityProps>`
  font-size: ${props =>
    props.theme.typography.forButton[props.size].fontSize + `px`};
  font-weight: ${props =>
    props.theme.typography.forButton[props.size].fontWeight};
  color: ${props =>
    props.variant === 'contained'
      ? props.theme.palette[props.color].containedColor
      : props.theme.palette[props.color].color};
`;

const StyledTouchableOpacityComp = styled(
  TouchableOpacityComp,
)<StyledTouchableOpacityProps>`
  flex-direction: ${props =>
    props.iconFields?.position === 'right' ? 'row' : 'row-reverse'};

  justify-content: ${props => (props.iconFields ? 'space-between' : 'center')};

  align-items: center;

  gap: 5px;

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

  padding: ${props => {
    if (props.variant === 'text') {
      return '0px';
    } else {
      switch (props.size) {
        case 'small':
          return '6px 12px';
        case 'medium':
          return '8px 16px';
        default:
          return '10px 20px';
      }
    }
  }};
`;

const ThemeTouchableOpacityComp: React.FC<StyledTouchableOpacityProps> = ({
  size = 'small',
  color = 'success',
  variant = 'contained',
  radius = 'few',
  iconFields = {position: 'right'},
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
      <StyledText size={size} color={color} variant={variant}>
        {children}
      </StyledText>

      {iconFields && 'component' in iconFields && iconFields.component && (
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

export default ThemeTouchableOpacityComp;
