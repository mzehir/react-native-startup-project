import React, {useState} from 'react';
import styled from '@emotion/native';
import ViewComp from '../../../components/core/View';
import ThemeTouchableOpacityComp from '../../../components/custom/ThemeTouchableOpacity';
import ReactNativeElementDropdown from '../../../components/core/reactNativeElementDropdown/ReactNativeElementDropdown';

const Container = styled(ViewComp)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const sizeOptions = [
  {label: 'small', value: 'small'},
  {label: 'medium', value: 'medium'},
  {label: 'large', value: 'large'},
];

const colorOptions = [
  {label: 'error', value: 'error'},
  {label: 'info', value: 'info'},
  {label: 'primary', value: 'primary'},
  {label: 'secondary', value: 'secondary'},
  {label: 'success', value: 'success'},
  {label: 'warning', value: 'warning'},
];

const variantOptions = [
  {label: 'text', value: 'text'},
  {label: 'outlined', value: 'outlined'},
  {label: 'contained', value: 'contained'},
];

const radiusOptions = [
  {label: 'little', value: 'little'},
  {label: 'few', value: 'few'},
  {label: 'normal', value: 'normal'},
  {label: 'more', value: 'more'},
  {label: 'much', value: 'much'},
  {label: 'plenty', value: 'plenty'},
  {label: 'many', value: 'many'},
  {label: 'none', value: 'none'},
];

// const positionOptions = [
//   {label: 'left', value: 'left'},
//   {label: 'right', value: 'right'},
// ];

const ButtonView = () => {
  const [value, setValue] = useState('7');

  const [selectedSize, setSelectedSize] = useState('small');
  const [selectedColor, setSelectedColor] = useState('success');
  const [selectedVariant, setSelectedVariant] = useState('contained');
  const [selectedRadius, setSelectedRadius] = useState('few');
  // const [selectedIconPosition, setSelectedIconPosition] = useState('right');
  // const [iconVisible, setIconVisible] = useState(false);
  return (
    <Container>
      <ThemeTouchableOpacityComp
        size={selectedSize}
        color={selectedColor}
        variant={selectedVariant}
        radius={selectedRadius}>
        Custom Button asd
      </ThemeTouchableOpacityComp>

      <ReactNativeElementDropdown
        search={false}
        data={sizeOptions}
        value={selectedSize}
        setValue={item => {
          if (typeof item === 'object') {
            setSelectedSize(item.value);
          }
        }}
      />

      {/* <ReactNativeElementDropdownTS
        data={colorOptions}
        value={selectedColor}
        setValue={item => {
          if (typeof item === 'object') {
            setSelectedColor(item.value);
          }
        }}
      /> */}

      {/* <ReactNativeElementDropdownTS
        data={variantOptions}
        value={selectedVariant}
        setValue={item => {
          if (typeof item === 'object') {
            setSelectedVariant(item.value);
          }
        }}
      /> */}

      {/* <ReactNativeElementDropdownTS
        data={radiusOptions}
        value={selectedRadius}
        setValue={item => {
          if (typeof item === 'object') {
            setSelectedRadius(item.value);
          }
        }}
      /> */}
    </Container>
  );
};

export default ButtonView;
