// TechCardArea.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import TechCard from './TechCard';

const CardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#333',
  padding: '2rem',
}));

const CardContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '2rem',
}));

const TechCardArea: React.FC = () => {
  return (
    <CardContainer>
      <Typography variant="h4" component="h2" color="textPrimary" gutterBottom>
        カードコンテンツ
      </Typography>
      <CardContentContainer>
        <TechCard
          name="技術名1"
          description="ここに技術の利用例が入ります。"
          relatedTechnologies={['技術A', '技術B', '技術C']}
        />
        <TechCard
          name="技術名2"
          description="ここに技術の利用例が入ります。"
          relatedTechnologies={['技術X', '技術Y', '技術Z']}
        />
        <TechCard
          name="技術名3"
          description="ここに技術の利用例が入ります。"
          relatedTechnologies={['技術P', '技術Q', '技術R']}
        />
      </CardContentContainer>
    </CardContainer>
  );
};

export default TechCardArea;
