import React from 'react';
import styled from '@emotion/native';
import ViewComp from '../../../components/core/View';
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

const TextPlayground = () => {
  return (
    <Container>
      <ReadyComponentsSection sectionPaperPadding={sectionPaperPadding} />
    </Container>
  );
};

export default TextPlayground;
