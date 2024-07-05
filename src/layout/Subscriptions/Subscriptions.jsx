import { useState } from "react";
import { useAccount } from "../../store/auth/hooks";
import { setCurrentOrder } from "../../store/orders/actions";
import classNames from "classnames";
import { useOrder } from "../../store/orders/hooks";

const Subscriptions = () => {
    const account = useAccount();
    const orders = useOrder();
    const [isMoreOpen, setIsMoreOpen] = useState(false);
  return (
    <div className="text-[#62618F] w-2/3 text-[13px] leading-5">
        <div className="flex justify-between">
          <span>Date</span>
          <span>Type</span>
          <span>Receipt</span>
        </div>
        {account.orders &&
          account.orders
            .slice(0, isMoreOpen ? account.orders.length : 3)
            .map((item, index) => (
              <div
                onClick={(e) => {
                    e.preventDefault()
                    setCurrentOrder(item)
                }}
                key={index}
                className={classNames("text-black mt-3 w-full flex justify-between hover:border hover:shadow-lg hover:rounded-lg p-2", {
                    "rounded-lg p-2 shadow-lg border": orders.id === item.id
                })}
              >
                <span className="text-[16px] flex justify-start">
                  {item.date}
                </span>
                <span className="flex items-center w-auto">{item.type}</span>
                <button className="border rounded-lg h-[30px] w-[100px]">
                  <span className="my-3">Download</span>
                </button>
              </div>
            ))}
        {account.orders.length > 3 && (
          <button
            className="text-[16px] text-[#EE6338] underline"
            onClick={() => setIsMoreOpen(!isMoreOpen)}
          >
            {isMoreOpen ? "Expand" : "Load More"}
          </button>
        )}
      </div>
  )
}

export default Subscriptions