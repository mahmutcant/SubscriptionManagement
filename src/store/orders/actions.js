import store from "..";
import { _setSelectedOrder } from ".";

export const setCurrentOrder = data => store.dispatch(_setSelectedOrder(data))