import React, {useState} from 'react';
import {useTheme} from '@emotion/react';
import {View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const ReactNativeElementDropdown = ({
  data = [], //* [{label: "", value: ""}]
  value = '',
  setValue, // function
  mode = 'default', //* auto || default || modal
  dropdownPosition = 'auto', //* auto || top ||bottom
  disable = false,
  placeholder = 'Bir değer seç',
  searchPlaceholder = 'Bir değer ara',
  search = true,
  maxHeight = 300,
}) => {
  const themeHook = useTheme();
  const [isFocus, setIsFocus] = useState(false);

  const style = {
    height: 50,
    paddingHorizontal: 8,

    backgroundColor:
      themeHook.palette.app.customComponents.elementDropdown.inputBackground,

    borderColor: isFocus
      ? themeHook.palette.app.customComponents.elementDropdown
          .inputBorderColorFocus
      : themeHook.palette.app.customComponents.elementDropdown.inputBorderColor,

    borderWidth: 1,
    borderRadius: 8,
  };

  const placeholderStyle = {
    fontSize: 16,

    color:
      themeHook.palette.app.customComponents.elementDropdown.placeholderColor,
  };

  const selectedTextStyle = {
    fontSize: 16,
    color: themeHook.palette.app.customComponents.elementDropdown.textColor,
  };

  const containerStyle = {
    borderWidth: 0,
    backgroundColor:
      themeHook.palette.app.customComponents.elementDropdown.menuBackground,
  };

  const inputSearchStyle = {
    height: 40,
    fontSize: 16,
    borderWidth: 0,
    borderBottomWidth: 1,

    borderColor:
      themeHook.palette.app.customComponents.elementDropdown.inputBorderColor,

    color:
      themeHook.palette.app.customComponents.elementDropdown.placeholderColor,
  };

  const itemTextStyle = {
    color: themeHook.palette.app.customComponents.elementDropdown.textColor,
  };

  const activeColor =
    themeHook.palette.app.customComponents.elementDropdown.activeItemBackground;

  const iconStyle = {
    marginRight: 5,
  };

  return (
    <View style={{width: '100%'}}>
      <Dropdown
        //* Styled
        style={style}
        placeholderStyle={placeholderStyle}
        selectedTextStyle={selectedTextStyle}
        containerStyle={containerStyle}
        itemTextStyle={itemTextStyle}
        inputSearchStyle={inputSearchStyle}
        activeColor={activeColor}
        iconStyle={iconStyle}
        //* Setting Props
        mode={mode}
        dropdownPosition={dropdownPosition}
        disable={disable}
        labelField={'label'}
        valueField={'value'}
        placeholder={placeholder}
        searchPlaceholder={searchPlaceholder}
        maxHeight={maxHeight}
        search={search}
        //* Other
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
