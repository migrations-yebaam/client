import React from 'react';
import { AdComponent } from './AdComponent';

interface AdListComponentProps {
  ads: { imageUrl: string; title: string; url: string }[];
}

export const AdListComponent: React.FC<AdListComponentProps> = ({ ads }) => {
  return (
    <div>
      {ads.map((ad, index) => (
        <AdComponent key={index} imageUrl={ad.imageUrl} title={ad.title} url={ad.url} />
      ))}
    </div>
  );
};
