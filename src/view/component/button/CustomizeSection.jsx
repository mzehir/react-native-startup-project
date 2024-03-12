import React from 'react';
import PaperComp from '../../../components/custom/Paper';
import ReactNativeElementDropdown from '../../../components/core/reactNativeElementDropdown/ReactNativeElementDropdown';
import ViewComp from '../../../components/core/View';

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

const CustomizeSection = ({
  sectionPaperPadding,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  selectedVariant,
  setSelectedVariant,
  selectedRadius,
  setSelectedRadius,
}) => {
  return (
    <PaperComp {...sectionPaperPadding}>
      <ViewComp style={{display: 'flex', flexDirection: 'column', gap: 15}}>
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

        <ReactNativeElementDropdown
          search={false}
          data={colorOptions}
          value={selectedColor}
          setValue={item => {
            if (typeof item === 'object') {
              setSelectedColor(item.value);
            }
          }}
        />

        <ReactNativeElementDropdown
          search={false}
          data={variantOptions}
          value={selectedVariant}
          setValue={item => {
            if (typeof item === 'object') {
              setSelectedVariant(item.value);
            }
          }}
        />

        <ReactNativeElementDropdown
          search={false}
          data={radiusOptions}
          value={selectedRadius}
          setValue={item => {
            if (typeof item === 'object') {
              setSelectedRadius(item.value);
            }
          }}
        />
      </ViewComp>
    </PaperComp>
  );
};

export default CustomizeSection;
