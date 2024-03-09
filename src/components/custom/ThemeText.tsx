import React, { FC, ReactNode } from 'react';
import styled from '@emotion/native';
import TextComp from '../core/Text';

type Variant = 'display' | 'headline' | 'title' | 'label' | 'body' | 'button';
type Size = 'small' | 'medium' | 'large';

interface ThemeTextCompProps {
    variant: Variant;
    size: Size;
    children?: ReactNode;
    [key: string]: any; // Other props
}

const StyledThemeTextComp = styled(TextComp) <ThemeTextCompProps>`
  font-size: ${props => props.theme.typography[props.variant][props.size].fontSize + `px`};
  font-weight: ${props => props.theme.typography[props.variant][props.size].fontWeight};
  letter-spacing: ${props => props.theme.typography[props.variant][props.size].letterSpacing + `px`};
  line-height: ${props => props.theme.typography[props.variant][props.size].lineHeight + `px`};
  color: ${(props) => props.theme.palette.app.color}
`;

const ThemeTextComp: FC<ThemeTextCompProps> = ({ variant, size, children, ...props }) => {
    return (
        <StyledThemeTextComp variant={variant} size={size} {...props}>
            {children}
        </StyledThemeTextComp>
    );
};

ThemeTextComp.defaultProps = {
    variant: 'label',
    size: 'large',
};

export default ThemeTextComp;
