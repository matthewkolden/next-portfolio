import React from 'react';

interface Props {
  title: string;
  href: string;
}

const SectionHeader: React.FC<Props> = ({ title }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold font-robotomono">{title}</h2>
    </div>
  );
};

export default SectionHeader;