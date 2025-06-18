import React from 'react';
import { TURNS } from '../constants';
import '../styles/Cell.css'

export const Cell = React.memo(({ 
  children, 
  isSelected, 
  updateFunction, 
  index, 
  shouldBeFilled 
}) => {
  
  const _className = () => {
    let shouldFill = shouldBeFilled && (children !== TURNS.EMPTY);
    let className = 'cell';
    
    if (isSelected) className += ' selected';
    if (shouldFill) className += ' filled';
    return className;
  }
  
  const handleClick = () => {
    if (updateFunction != null)
      updateFunction(index);
  };
  
  return (
    <div className={_className()}
      onClick={handleClick}
    >
      {children}
    </div>
  );
});