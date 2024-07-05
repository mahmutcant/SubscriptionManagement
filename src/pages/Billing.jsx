import SelectedSubscription from "../layout/SelectedSubscription/SelectedSubscription";
import Subscriptions from "../layout/Subscriptions/Subscriptions";

const Billing = () => {
  return (
    <div className="relative">
      <h2 className="font-bold text-[#1A194D] text-[24px]">Billing</h2>
      <div className="my-[60px]">
        <span className="font-bold text-[#1A194D] text-[12px]">
          Order History
        </span>
        <p className="text-[#1A194D] text-[12px]">
          Manage billing information and view receips
        </p>
      </div>

      <Subscriptions/>
      <div className="text-[#1A194D] mt-5">
        <span className="font-bold">Payment Method</span>
        <p className="text-[#62618F] text-[14px]">
          Manage billing information and view receips
        </p>
        <div className="w-full flex items-center">
          <div className="border w-[80px] h-[50px] p-1 flex items-center mt-2">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-visa-3521795-2945212.png?f=webp&w=256"
              alt=""
            />
          </div>
          <div className="flex justify-between w-7/12">
            <span className="ml-3 text-[15px]">Visa ending in 2255</span>
            <button className="flex items-end border p-2 rounded-lg">Remove</button>
          </div>
        </div>
      </div>
      <SelectedSubscription/>
    </div>
  );
};

export default Billing;
