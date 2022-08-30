import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { housImg, price, houseName, quantity } = cartItem;
//   detail: "Qui ut officia liber"
// housImg: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAA
// houseName: "Patrick Jarvis"
// location: "Quo ex non doloremqu"
// price: "211"
// quantity: 2
// rooms: "Unde qui dolor amet"
// squirFeet: "Sit perspiciatis cu"
// __v: 0
// _id: "630ca0b00d6b2f788647aa2e"

  return (
    <div className='cart-item-container'>
      <img src={housImg} alt={`${houseName}`} />
       <div className='item-details'>
         <span className='name'>{houseName}</span>
        <span className='price'>
        {quantity} x ${price}
         </span>
      </div>
    </div>
  );
};

export default CartItem;