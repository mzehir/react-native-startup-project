import React, {useState} from 'react';
import styled from '@emotion/native';
import ViewComp from '../../../components/core/View';
// import ObserveSection from './ObserveSection';
// import CustomizeSection from './CustomizeSection';
import ReadyComponentsSection from './ReadyComponentsSection';

const Container = styled(ViewComp)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

// const sectionPaperPadding = {
//   paddingHorizontal: '15',
//   paddingVertical: '15',
// };

const TextPlayground = () => {
//   const [selectedSize, setSelectedSize] = useState('large');
//   const [selectedColor, setSelectedColor] = useState('success');
//   const [selectedVariant, setSelectedVariant] = useState('title');
  return (
    <Container>
      {/* <ObserveSection
        sectionPaperPadding={sectionPaperPadding}
        selectedSize={selectedSize}
        selectedColor={selectedColor}
        selectedVariant={selectedVariant}
      /> */}

      {/* <CustomizeSection
        sectionPaperPadding={sectionPaperPadding}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedVariant={selectedVariant}
        setSelectedVariant={setSelectedVariant}
      /> */}

      <ReadyComponentsSection />
    </Container>
  );
};

export default TextPlayground;
