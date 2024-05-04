import { useContext } from "react";
import { ProviderContext } from "./Provider";
export const useDispatch = () => {
  const { dispatch } = useContext(ProviderContext);
  return dispatch;
};

export const useSelector = (callback) => {
  if (typeof callback !== "function") {
    throw new Error("callback hook useSelector is not a function");
  }
  const { state } = useContext(ProviderContext);
  return callback(state);
};
