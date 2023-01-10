import redToken from './images/counter-red-large.svg'
import yellowToken from './images/counter-yellow-large.svg'

const Token = ({ place, source }) => {
  return (
    <img
      src={ source === 1 ? redToken : source === 2 ? yellowToken : '' }
      alt={ source === 1 ? 'red token' : source === 2 ? 'yellow token' : '' }
      className='token' />
  );
};

export default Token;
