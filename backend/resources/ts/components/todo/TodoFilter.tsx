import React from 'react';
import { TodoFilterType } from '../../services/todos';

const filters = [
  { type: 'all', label: 'すべて' },
  { type: 'active', label: '作業中' },
  { type: 'completed', label: '済' },
];

type FilterType = {
  selectedFilter: TodoFilterType,
  handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TodoFilter = ({selectedFilter, handleFilter}: FilterType) => {
  return (
    <>
      {filters.map(filter => (
        <label key={filter.type}>
          <input
            type="radio"
            value={filter.type}
            checked={filter.type === selectedFilter}
            onChange={handleFilter}
          />
          {filter.label}
        </label>
      ))}
    </>
  );
};
export default TodoFilter;