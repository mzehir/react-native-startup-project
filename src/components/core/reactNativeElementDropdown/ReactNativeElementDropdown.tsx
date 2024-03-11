import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

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
}

const ReactNativeElementDropdownTS: React.FC<Props> = ({
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
}) => {
    const themeHook: any = useTheme();
    const [isFocus, setIsFocus] = useState(false);

    const style = {
        height: 50,
        paddingHorizontal: 8,
        backgroundColor: themeHook.palette.app.customComponents.elementDropdown.inputBackground,
        borderColor: isFocus ? themeHook.palette.app.customComponents.elementDropdown.inputBorderColorFocus : themeHook.palette.app.customComponents.elementDropdown.inputBorderColor,
        borderWidth: 1,
        borderRadius: 8,
    };

    const placeholderStyle = {
        fontSize: 16,
        color: themeHook.palette.app.customComponents.elementDropdown.placeholderColor,
    };

    const selectedTextStyle = {
        fontSize: 16,
        color: themeHook.palette.app.customComponents.elementDropdown.textColor,
    };

    const containerStyle = {
        borderWidth: 0,
        backgroundColor: themeHook.palette.app.customComponents.elementDropdown.menuBackground,
    };

    const inputSearchStyle = {
        height: 40,
        fontSize: 16,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: themeHook.palette.app.customComponents.elementDropdown.inputBorderColor,
        color: themeHook.palette.app.customComponents.elementDropdown.placeholderColor,
    };

    const itemTextStyle = {
        color: themeHook.palette.app.customComponents.elementDropdown.textColor,
    };

    const activeColor = themeHook.palette.app.customComponents.elementDropdown.activeItemBackground;

    const iconStyle = {
        marginRight: 5,
    };

    return (
        <View style={{ width: '100%' }}>
            <Dropdown
                style={style}
                placeholderStyle={placeholderStyle}
                selectedTextStyle={selectedTextStyle}
                containerStyle={containerStyle}
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

export default ReactNativeElementDropdownTS;
