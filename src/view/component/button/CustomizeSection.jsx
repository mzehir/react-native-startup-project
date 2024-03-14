import React from 'react';
import styled from '@emotion/native';
import PaperComp from '../../../components/custom/Paper';
import ViewComp from '../../../components/core/View';
import CustomTextComp from '../../../components/custom/CustomText';
import ReactNativeElementDropdown from '../../../components/core/reactNativeElementDropdown/ReactNativeElementDropdown';
import CustomCheckboxComp from '../../../components/custom/CustomCheckbox';
import {TEXT_VARIANTS} from '../../../utils/constant/app/textVariantConstant';
import {
  COLORS,
  getColorsConstantAsArray,
} from '../../../utils/constant/app/colorConstant';
import {getSizesConstantAsArray} from '../../../utils/constant/app/sizeConstant';
import {getButtonVariantsConstantAsArray} from '../../../utils/constant/app/buttonVariantConstant';
import {getButtonRadiusConstantAsArray} from '../../../utils/constant/app/buttonRadiusConstant';

const RowContainer = styled(ViewComp)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
`;

const LeftColumn = styled(ViewComp)`
  width: 50%;
`;

const RightColumn = styled(ViewComp)`
  width: 50%;
`;

const sizeOptions = getSizesConstantAsArray();

const colorOptions = getColorsConstantAsArray();

const variantOptions = getButtonVariantsConstantAsArray();

const radiusOptions = getButtonRadiusConstantAsArray();

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
        <CustomTextComp
          variant={TEXT_VARIANTS.TITLE.value}
          color={COLORS.INFO.value}>
          components.customizeComponent
        </CustomTextComp>

        <RowContainer>
          <LeftColumn>
            <CustomTextComp>components.selectSize</CustomTextComp>
          </LeftColumn>

          <RightColumn>
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
          </RightColumn>
        </RowContainer>

        <RowContainer>
          <LeftColumn>
            <CustomTextComp>components.selectColor</CustomTextComp>
          </LeftColumn>

          <RightColumn>
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
          </RightColumn>
        </RowContainer>

        <RowContainer>
          <LeftColumn>
            <CustomTextComp>components.selectVariant</CustomTextComp>
          </LeftColumn>

          <RightColumn>
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
          </RightColumn>
        </RowContainer>

        <RowContainer>
          <LeftColumn>
            <CustomTextComp>components.selectRadius</CustomTextComp>
          </LeftColumn>

          <RightColumn>
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
          </RightColumn>
        </RowContainer>

        <RowContainer>
          <LeftColumn>
            <CustomTextComp>components.addIcon</CustomTextComp>
          </LeftColumn>

          <RightColumn>
            <CustomCheckboxComp
              checked={iconVisible}
              onChange={value => {
                setIconVisible(value);
              }}
            />
          </RightColumn>
        </RowContainer>

        {iconVisible && (
          <RowContainer>
            <LeftColumn>
              <CustomTextComp>components.selectLocationForIcon</CustomTextComp>
            </LeftColumn>

            <RightColumn>
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
            </RightColumn>
          </RowContainer>
        )}
      </ViewComp>
    </PaperComp>
  );
};

export default CustomizeSection;
