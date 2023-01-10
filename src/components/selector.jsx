import redSelector from './images/marker-red.svg'
import yellowSelector from './images/marker-yellow.svg'

import "./css/selector.css";

const Selector = ({ column, onMouseOver, onClick }) => {
  return (
    <div className="selector-div" onMouseOver={ onMouseOver }
         onClick={ onClick }>
      <img
        src={ column === 1 ? redSelector : column === 2 ? yellowSelector : '' }
        className='selector'
        alt={ column === 1 ? 'red selector' : column === 'yellow' ? 'yellow selector' : '' }/>
    </div>
  );
};

export default Selector;
