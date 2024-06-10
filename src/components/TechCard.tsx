// TechCard.tsx
import React from 'react';
import { Typography, Card, CardContent } from '@mui/material';

interface TechCardProps {
  name: string;
  description: string;
  relatedTechnologies: string[];
}

const TechCard: React.FC<TechCardProps> = ({ name, description, relatedTechnologies }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="textPrimary">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          利用例: {description}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          関連技術: {relatedTechnologies.join(', ')}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TechCard;
