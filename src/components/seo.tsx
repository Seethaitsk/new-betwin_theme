'use client';
import { useEffect } from 'react';

// prop type 
type IProps = {
  title: string;
};

const SEOCom = ({ title }: IProps) => {
  useEffect(() => {
    const pageTitle = title
      ? `${title} - MYKD eSports and Gaming React Template`
      : 'MYKD - eSports and Gaming React Template';
    document.title = pageTitle;
  }, [title]);

  return null;
};

export default SEOCom;