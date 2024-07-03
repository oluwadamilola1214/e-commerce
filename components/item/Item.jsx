
// import PropTypes from 'prop-types';
// import './Item.css';
// import { Link } from 'react-router-dom';
// const Item = (props) => {
//   return (
//     <div className="item">
//       <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
//       <p>{props.name}</p>

//       <div className='item-prices'>
//         <div className='item-price-new'>
//           ${props.new_price}
//         </div>
//         <div className='item-price-old'>
//           ${props.old_price}
//         </div>
//       </div>
//     </div>
//   );
// };

// Item.propTypes = {
//   image: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   new_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   old_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
// };

// export default Item;





import PropTypes from 'prop-types';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0,0)} src={props.image} alt={props.name} />
      </Link> 
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

Item.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  new_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  old_price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Item;