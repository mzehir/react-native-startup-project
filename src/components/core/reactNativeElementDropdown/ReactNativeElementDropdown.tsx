import React, {useState} from 'react';
import {useTheme} from '@emotion/react';
import {View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

interface Option {
  label: string;
  value: string;
}

interface Props {
  data: Option[];
  value: Option | '';
  setValue: (item: Option | '') => void;
  mode?: 'auto' | 'default' | 'modal';
  dropdownPosition?: 'auto' | 'top' | 'bottom';
  disable?: boolean;
  placeholder?: string;
  searchPlaceholder?: string;
  search?: boolean;
  maxHeight?: number;
  size?: 'small' | 'medium' | 'large';
}

const ReactNativeElementDropdown: React.FC<Props> = ({
  data = [],
  value = '',
  setValue,
  mode = 'default',
  dropdownPosition = 'auto',
  disable = false,
  placeholder = 'Bir değer seç',
  searchPlaceholder = 'Bir değer ara',
  search = true,
  maxHeight = 300,
  size = 'small',
}) => {
  const themeHook: any = useTheme();
  const [isFocus, setIsFocus] = useState(false);

  const style = {
    height: size === 'small' ? 35 : size === 'medium' ? 45 : 50,
    paddingHorizontal: size === 'small' ? 6 : size === 'medium' ? 8 : 10,
    backgroundColor:
      themeHook.palette.app.components.elementDropdown.inputBackground,
    borderColor: isFocus
      ? themeHook.palette.app.components.elementDropdown.inputBorderColorFocus
      : themeHook.palette.app.components.elementDropdown.inputBorderColor,
    borderWidth: 1,
    borderRadius: 8,
  };

  const placeholderStyle = {
    fontSize: themeHook.typography.forSelect[size].fontSize,
    fontWeight: themeHook.typography.forSelect[size].fontWeight,
    color: themeHook.palette.app.components.elementDropdown.placeholderColor,
  };

  const selectedTextStyle = {
    fontSize: themeHook.typography.forSelect[size].fontSize,
    fontWeight: themeHook.typography.forSelect[size].fontWeight,
    color: themeHook.palette.app.components.elementDropdown.textColor,
  };

  const containerStyle = {
    borderWidth: 0,
    backgroundColor:
      themeHook.palette.app.components.elementDropdown.menuBackground,
  };

  const inputSearchStyle = {
    height: size === 'small' ? 30 : size === 'medium' ? 35 : 40,
    padding: 0,
    fontSize: themeHook.typography.forSelect[size].fontSize,
    fontWeight: themeHook.typography.forSelect[size].fontWeight,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor:
      themeHook.palette.app.components.elementDropdown.inputBorderColor,
    color: themeHook.palette.app.components.elementDropdown.placeholderColor,
  };

  const itemTextStyle = {
    fontSize: themeHook.typography.forSelect[size].fontSize,
    fontWeight: themeHook.typography.forSelect[size].fontWeight,
    color: themeHook.palette.app.components.elementDropdown.textColor,
    margin: -10,
  };

  const activeColor =
    themeHook.palette.app.components.elementDropdown.activeItemBackground;

  const iconStyle = {
    marginRight: 5,
  };

  return (
    <View style={{width: '100%'}}>
      <Dropdown
        style={style}
        placeholderStyle={placeholderStyle}
        selectedTextStyle={selectedTextStyle}
        containerStyle={containerStyle}
        itemContainerStyle={{}}
        itemTextStyle={itemTextStyle}
        inputSearchStyle={inputSearchStyle}
        activeColor={activeColor}
        iconStyle={iconStyle}
        mode={mode}
        dropdownPosition={dropdownPosition}
        disable={disable}
        labelField={'label'}
        valueField={'value'}
        placeholder={placeholder}
        searchPlaceholder={searchPlaceholder}
        maxHeight={maxHeight}
        search={search}
        data={data}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default ReactNativeElementDropdown;
