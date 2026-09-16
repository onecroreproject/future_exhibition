import { useEffect } from 'react';

const SEO = ({ title, description }) => {
  useEffect(() => {
    document.title = title ? `${title} | SMART EDU EXPO` : 'SMART EDU EXPO';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = description;
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = description;
      document.head.appendChild(metaDescription);
    }
  }, [title, description]);

  return null;
};

export default SEO;
