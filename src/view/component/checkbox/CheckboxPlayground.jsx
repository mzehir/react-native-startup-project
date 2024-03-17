import React, {useState} from 'react';
import styled from '@emotion/native';
import ViewComp from '../../../components/core/View';
import ObserveSection from './ObserveSection';
import CustomizeSection from './CustomizeSection';
import ReadyComponentsSection from './ReadyComponentsSection';

const Container = styled(ViewComp)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const sectionPaperPadding = {
  paddingHorizontal: '15',
  paddingVertical: '15',
};

const CheckboxPlayground = () => {
  const [selectedSize, setSelectedSize] = useState('small');
  const [selectedColor, setSelectedColor] = useState('success');
  const [checked, setChecked] = useState(true);

  return (
    <Container>
      <ObserveSection
        sectionPaperPadding={sectionPaperPadding}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        checked={checked}
        setChecked={setChecked}
      />

      <CustomizeSection
        sectionPaperPadding={sectionPaperPadding}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />

      <ReadyComponentsSection sectionPaperPadding={sectionPaperPadding} />
    </Container>
  );
};

export default CheckboxPlayground;
