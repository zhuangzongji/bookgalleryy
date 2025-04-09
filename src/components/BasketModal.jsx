import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems, removeCartItems, selectCartItems } from "../redux/cartSlice";
import { ShoppingBasket } from "lucide-react";

export default function BasketModal({ isOpen, toggleModal }) {
   const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems);

   const handleCancel = () => toggleModal(!isOpen);
   const getTotalPrice = () => {
      return (cartItems.length > 0)
         ? cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
         : 0;
   };

   return (
      <>
         {/* DaisyUI Modal */}
         {isOpen && (
            <div className="modal modal-open bg-opacity-50 bg-black">
               <div className="modal-box max-w-lg p-6 bg-gray-800 text-white rounded-lg shadow-lg">
                  <h3 className="font-thin text-3xl mb-4 text-left text-yellow-400">Shopping Basket</h3>
                  
                  {/* Cart Items */}
                  {cartItems.length === 0 ? (
                     <div className="text-center text-gray-400">Cart is empty</div>
                  ) : (
                     cartItems.map(item => (
                        <li key={item.id} className="flex justify-between items-center pb-4 mb-4 border-b border-gray-500 rounded-md">
                           <Link to={`/products/id/${item.id}?qtyFromBasket=${item.qty}`} onClick={handleCancel}>
                              <img className="max-w-16 max-h-16 flex-1 cursor-pointer rounded-md" src={item.image} alt={item.name} />
                           </Link>
                           <div className="ml-8 flex-8 w-48 text-left">
                              <div className="font-medium mb-1">{item.name}</div>
                              <div className="flex items-center space-x-2">
                                 <span>Qty:</span>
                                 <select
                                    defaultValue={item.qty}
                                    onChange={(e) =>
                                       dispatch(addCartItems({
                                          id: item.id,
                                          name: item.name,
                                          image: item.image,
                                          price: item.price,
                                          countInStock: item.countInStock,
                                          qty: Number(e.target.value),
                                       }))}
                                    className="select select-bordered select-xs w-[3.5rem] px-2 bg-gray-700 border-gray-600 text-white"
                                 >
                                    {[...Array(item.countInStock).keys()].map((x) => (
                                       <option key={x + 1} value={x + 1}>{x + 1}</option>
                                    ))}
                                 </select>
                              </div>
                           </div>
                           <div className="text-right">
                              <div className="font-bold text-lg">${item.price * item.qty}</div>
                              <div
                                 className="text-xl opacity-60 cursor-pointer"
                                 onClick={() => dispatch(removeCartItems(item.id))}
                              >
                                 x
                              </div>
                           </div>
                        </li>
                     ))
                  )}

                  {/* Total */}
                  <div className="flex justify-between items-center mt-4 text-gray-300">
                     <div className="font-semibold text-lg">Total</div>
                     <div className="font-bold text-lg">${getTotalPrice()}</div>
                  </div>

                  {/* Checkout Button */}
                  <button
                     className="btn w-full bg-yellow-500 text-white text-base font-light py-3 mt-8 flex justify-center items-center rounded-md transition-transform hover:scale-105"
                  >
                     <ShoppingBasket strokeWidth={1} className="w-5 h-5 md:w-6 md:h-6 text-white" />
                     <span className="font-thin ml-3">START CHECKOUT</span>
                  </button>

                  {/* Close button */}
                  <div className="absolute right-4 top-4 modal-action mt-4">
                     <button onClick={handleCancel} className="btn btn-sm font-thin bg-gray-600 text-white">X</button>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}