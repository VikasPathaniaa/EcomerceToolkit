import React from "react";
// import ermptyBagImg from "../../../public/assets/emptyBag.avif"
import { useSelector, useDispatch } from "react-redux";
import { removefromCart } from "../../Fetaures/CartSlice/cartSlice";

const Cart = () => {
  const { totalAmmount, cart, totalPrice } = useSelector(
    (state) => state.cartSlice
  );
  const data = useSelector((state) => state.cartSlice);
  console.log(data);
  const dispatch = useDispatch();

  return (
    <>
      {totalAmmount > 0 ? (
        <>
          <div className="cart_container">
            {cart.map((item, index) => {
              return (
                <>
                  <div
                    className="flex flex-row space-around space-x-4  m-6 cart_card "
                    key={index + 1}
                  >
                    <div>
                      <img
                        src={item.img}
                        alt="image not found "
                        height={100}
                        width={100}
                      />
                      <p> {item.title.slice(0, 10)}...</p>
                    </div>
                    <div className="ml-7">
                      <p>Price {item.price}</p>
                      <p>Total Items {item.ammount}</p>
                      <p>Total {item.totalPrice}</p>
                      <button
                        className="p-2 rounded-full"
                        color="red"
                        onClick={() => dispatch(removefromCart(item))}
                      >
                        {" "}
                        Remove
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
            <p> your total price {Math.ceil(totalPrice)}</p>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center mb-20">
            <img src="/assets/emptyBag.avif" alt="empty Bag" width={300} height={300}/>
           <p>
            
           Your Bag is empty
            </p> 
             
              </div>
        </>
      )}
    </>
  );
};

export default Cart;
