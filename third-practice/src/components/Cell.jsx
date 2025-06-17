import { TURNS } from '../constants';
import '../styles/Cell.css'

export const Cell = ({ 
  children, 
  isSelected, 
  updateFunction, 
  index, 
  shouldBeFilled 
}) => {
  
  const _className = `
    cell
    ${isSelected ? ' selected' : ''}
    ${shouldBeFilled && (children !== TURNS.EMPTY) ? ' filled' : ''}
  `;
  
  const handleClick = () => {
    if (updateFunction != null)
      updateFunction(index);
  };
  
  return (
    <div className={_className}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};