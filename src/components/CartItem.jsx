import { Import, Trash2Icon } from "lucide-react"
import QuantityBtn from "./QuantityBtn"

export default function CartItem({ item, removeFromCart, addToCart, decreaseQuantity }) {
	return (
		<div className="flex h-34 border-b-2 border-blush px-2 relative py-2 gap-3">
			<Trash2Icon onClick={() => removeFromCart(item.id)} className="absolute top-1 right-1 text-red-700 transform-x-width cursor-pointer hover:scale-105 transition-transform" />
			<div className="bg-blush rounded-2xl">
				<img src={item.images[0]} className="h-full w-full object-contain" alt="" />
			</div>
			<div className="flex flex-col justify-between relative w-full pr-16">
				<div>
					<h3 className="text-xl font-medium">{item.title}</h3>
					<p className="font-semibold text-xl">${item.price}</p>
				</div>
				<QuantityBtn item={item} addToCart={addToCart} decreaseQuantity={decreaseQuantity} />
			</div>
		</div>
	)
}