import React from 'react';
import styled from '@emotion/native';
import PaperComp from '../../../components/custom/Paper';
import ViewComp from '../../../components/core/View';
import CustomTextComp from '../../../components/custom/CustomText';
import CustomTextInput from '../../../components/custom/CustomTextInput';
import ReactNativeElementDropdown from '../../../components/core/reactNativeElementDropdown/ReactNativeElementDropdown';
import {TEXT_VARIANTS} from '../../../utils/constant/app/textVariantConstant';
import {
  COLORS,
  getColorsConstantAsArray,
} from '../../../utils/constant/app/colorConstant';

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

const colorOptions = getColorsConstantAsArray();

const CustomizeSection = ({
  sectionPaperPadding,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
}) => {
  return (
    <PaperComp {...sectionPaperPadding}>
      <ViewComp style={{display: 'flex', flexDirection: 'column', gap: 15}}>
        <CustomTextComp
          style={{textAlign: 'center'}}
          variant={TEXT_VARIANTS.TITLE.value}
          color={COLORS.INFO.value}>
          components.customizeComponent
        </CustomTextComp>

        <RowContainer>
          <LeftColumn>
            <CustomTextComp>components.enterSize</CustomTextComp>
          </LeftColumn>

          <RightColumn>
            <CustomTextInput
              text={selectedSize}
              setText={setSelectedSize}
              keyboardType="numeric"
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
      </ViewComp>
    </PaperComp>
  );
};

export default CustomizeSection;
