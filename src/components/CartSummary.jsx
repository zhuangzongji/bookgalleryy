import { useState } from "react"
import { useSelector } from "react-redux"
import { ShoppingBasket } from "lucide-react"
import { selectCartItems } from "../redux/cartSlice"
import BasketModal from "./BasketModal"

function CartSummary() {
    const [isOpen, setIsOpen] = useState(false)
    const cartItems = useSelector(selectCartItems)
    const count = (cartItems.length > 0) ?
        cartItems.reduce((sum, item) => sum + item.qty, 0)
        : 0
    const toggleModal = () => setIsOpen(!isOpen)

    return (
        <>
            <nav
                onClick={toggleModal}
                className="inline-block absolute top-6 right-2 md:right-6 cursor-pointer"
            >
                <div className="indicator">
                    {count > 0 && <span className="indicator-item badge badge-primary font-bold">{count}</span>}
                    <ShoppingBasket strokeWidth={1.5} className="w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform" />
                </div>
                <p className="text-xs opacity-60 mt-[-4px]">Shopping bag</p>
            </nav>
            <BasketModal
                isOpen={isOpen}
                toggleModal={toggleModal}
            />
        </>
    )
}

export default CartSummary