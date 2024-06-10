// TechCardArea.tsx
import React from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import TechCard from './TechCard';

const CardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#333',
  padding: '2rem',
  position: 'relative',
  marginTop: '-50px', // Catchphraseに重なるように設定
  zIndex: 1,
}));

const CardContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '2rem',
  flexWrap: 'nowrap', // 折り返しを無効に
  overflowX: 'auto', // 横スクロールを有効に
}));

const techCardsData = [
  {
    name: '技術名1',
    description: 'ここに技術の利用例が入ります。',
    relatedTechnologies: ['技術A', '技術B', '技術C'],
  },
  {
    name: '技術名2',
    description: 'ここに技術の利用例が入ります。',
    relatedTechnologies: ['技術X', '技術Y', '技術Z'],
  },
  {
    name: '技術名3',
    description: 'ここに技術の利用例が入ります。',
    relatedTechnologies: ['技術P', '技術Q', '技術R'],
  },
  {
    name: '技術名4',
    description: 'ここに技術の利用例が入ります。',
    relatedTechnologies: ['技術D', '技術E', '技術F'],
  },
  {
    name: '技術名5',
    description: 'ここに技術の利用例が入ります。',
    relatedTechnologies: ['技術G', '技術H', '技術I'],
  },
];

const TechCardArea: React.FC = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));
  const isLg = useMediaQuery(theme.breakpoints.only('lg'));
  const isXl = useMediaQuery(theme.breakpoints.up('xl'));

  let cardsPerRow = 1;
  if (isSm) {
    cardsPerRow = 2;
  } else if (isMd) {
    cardsPerRow = 3;
  } else if (isLg) {
    cardsPerRow = 4;
  } else if (isXl) {
    cardsPerRow = 5;
  }

  const displayedCards = techCardsData.slice(0, cardsPerRow);

  return (
    <CardContainer>
      <Typography variant="h4" component="h2" color="White" gutterBottom>
        TechCards
      </Typography>
      <CardContentContainer>
        {displayedCards.map((card, index) => (
          <TechCard
            key={index}
            name={card.name}
            description={card.description}
            relatedTechnologies={card.relatedTechnologies}
          />
        ))}
      </CardContentContainer>
    </CardContainer>
  );
};

export default TechCardArea;
