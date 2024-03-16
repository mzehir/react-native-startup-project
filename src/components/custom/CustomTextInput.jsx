import React, {useState} from 'react';
import styled from '@emotion/native';
import {useTheme} from '@emotion/react';
import {TouchableOpacity} from 'react-native';
import ViewComp from '../core/View';
import TextInputComp from '../core/TextInput';
import {MaterialCommunityIconsDefaultComp} from './Icons';
import {COLORS} from '../../utils/constant/app/colorConstant';
import {SIZES} from '../../utils/constant/app/sizeConstant';

const keyboardTypes = ['default', 'numeric'];
const typesOfUse = ['default', 'password', 'search'];
const defColor = COLORS.SUCCESS.value;
const defSize = SIZES.medium.value;
const defPlaceholder = 'Enter text...';

const Container = styled(ViewComp)`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-radius: 8px;
  padding-horizontal: 8px;
  border-color: ${props =>
    !props.isFocus
      ? props.theme.palette.app.components.input.borderColor
      : props.isFocus && props.color
      ? props.theme.palette[props.color].borderColor
      : props.theme.palette.app.components.input.borderColorFocus};
`;

const StyledTextInput = styled(TextInputComp)`
  flex: 1;

  color: ${props => props.theme.palette[props.color].color};

  font-size: ${props =>
    props.theme.typography.forTextInput[props.size].fontSize + `px`};

  font-weight: ${props =>
    props.theme.typography.forTextInput[props.size].fontWeight};
`;

const CustomTextInput = ({
  keyboardType = keyboardTypes[0],
  typeOfUse = typesOfUse[0],
  color = defColor,
  size = defSize,
  placeholder = defPlaceholder,
  iconFields,
  disabled = false,
  readOnly = false,
}) => {
  const themeHook = useTheme();
  const iconSize = size === 'small' ? 20 : size === 'medium' ? 24 : 28;

  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState('');

  return (
    <Container isFocus={isFocused} color={color}>
      {typeOfUse === 'default' &&
        iconFields?.component &&
        iconFields?.position == 'start' && (
          <iconFields.component name={iconFields.name} size={iconSize} />
        )}
      <StyledTextInput
        keyboardType={keyboardType}
        color={color}
        size={size}
        placeholder={placeholder}
        placeholderTextColor={
          themeHook.palette.app.components.input.placeholderColor
        }
        value={text}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={setText}
        secureTextEntry={typeOfUse === 'password' && !showPassword}
        editable={!disabled && !readOnly}
      />

      {typeOfUse === 'search' && text !== '' && (
        <TouchableOpacity onPress={() => setText('')}>
          <MaterialCommunityIconsDefaultComp name="close" size={iconSize} />
        </TouchableOpacity>
      )}

      {typeOfUse === 'password' && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <MaterialCommunityIconsDefaultComp
            name={showPassword ? 'eye-off' : 'eye'}
            size={iconSize}
          />
        </TouchableOpacity>
      )}

      {typeOfUse === 'default' &&
        iconFields?.component &&
        iconFields?.position == 'end' && (
          <iconFields.component name={iconFields.name} size={iconSize} />
        )}
    </Container>
  );
};

export default CustomTextInput;
