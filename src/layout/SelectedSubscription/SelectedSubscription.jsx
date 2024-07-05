import { removeOrder } from "../../store/auth/actions";
import { useAccount } from "../../store/auth/hooks";
import { setCurrentOrder } from "../../store/orders/actions";
import { useOrder } from "../../store/orders/hooks"

const SelectedSubscription = () => {
  const order = useOrder();
  const account = useAccount();
  console.log(order);
  return (
    <div className="w-[258px] h-[221px] bg-[#EE4D38] end-0 top-0 absolute rounded-2xl">
        <div className="m-6 grid grid-rows-3 gap-1">
          <span className="text-[16px]">Your plan</span>
          <div className="grid">
            <span className="font-bold text-[20px]">{order.type}</span>
            <span className="text-[14px]">Renews on {order.date}</span>
          </div>
          <button className="w-full flex items-center justify-center border rounded-lg mt-3" onClick={(e) => {
            e.preventDefault()
            removeOrder(order)
            setCurrentOrder(account.orders[0])
            }}>Cancel Subscription</button>
        </div>
      </div>
  )
}

export default SelectedSubscription