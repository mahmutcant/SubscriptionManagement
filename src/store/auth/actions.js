import { _removeOrder } from ".";
import store from "..";

export const removeOrder = data => store.dispatch(_removeOrder(data))