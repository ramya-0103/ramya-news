import React from 'react';

const categories = [
  'business', 
  'entertainment', 
  'general', 
  'health', 
  'science', 
  'sports', 
  'technology'
];

const CategoryFilter = ({ onSelectCategory }) => {
  return (
    <div>
      <h3>Filter by Category</h3>
      <div className="category-filter">
        {categories.map((category) => (
          <button key={category} onClick={() => onSelectCategory(category)}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;