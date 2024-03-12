import React from 'react';
import PaperComp from '../../../components/custom/Paper';
import ViewComp from '../../../components/core/View';
import ReactNativeElementDropdown from '../../../components/core/reactNativeElementDropdown/ReactNativeElementDropdown';

const sizeOptions = [
  {label: 'Small', value: 'small'},
  {label: 'Medium', value: 'medium'},
  {label: 'Large', value: 'large'},
];

const colorOptions = [
  {label: 'Error', value: 'error'},
  {label: 'Info', value: 'info'},
  {label: 'Primary', value: 'primary'},
  {label: 'Secondary', value: 'secondary'},
  {label: 'Success', value: 'success'},
  {label: 'Warning', value: 'warning'},
];

const variantOptions = [
  {label: 'Text', value: 'text'},
  {label: 'Outlined', value: 'outlined'},
  {label: 'Contained', value: 'contained'},
];

const radiusOptions = [
  {label: 'Little', value: 'little'},
  {label: 'Few', value: 'few'},
  {label: 'Normal', value: 'normal'},
  {label: 'More', value: 'more'},
  {label: 'Much', value: 'much'},
  {label: 'Plenty', value: 'plenty'},
  {label: 'Many', value: 'many'},
  {label: 'None', value: 'none'},
];

const iconPositionOptions = [
  {label: 'Left', value: 'left'},
  {label: 'Right', value: 'right'},
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
  selectedIconPosition,
  setSelectedIconPosition,
  iconVisible,
  setIconVisible,
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

        <ReactNativeElementDropdown
          search={false}
          data={iconPositionOptions}
          value={selectedIconPosition}
          setValue={item => {
            if (typeof item === 'object') {
              setSelectedIconPosition(item.value);
            }
          }}
        />
      </ViewComp>
    </PaperComp>
  );
};

export default CustomizeSection;
