import { useSelector } from "react-redux";

export const useOrder = () => useSelector(state => state.orders.currentOrder)