import React, { useState } from 'react';

const SortBySize = ({ onChange }) => {
  const sizes = ['XS', 'S', 'M', 'L'];
  const [selectedSize, setSelectedSize] = useState('All');

  const handleChange = (e) => {
    setSelectedSize(e.target.value);
    onChange(e.target.value); // Передаем выбранный размер в родительский компонент
  };

  return (
    <select value={selectedSize} onChange={handleChange}>
      <option value="All">Все</option>
      {sizes.map(size => (
        <option key={size} value={size}>{size}</option>
      ))}
    </select>
  );
};

export default SortBySize;