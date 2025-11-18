import { use } from "react";
import { AuthContext } from "../contexts/Context";

const useAuth = () => {
  const userInfo = use(AuthContext);
  return userInfo;
};
export default useAuth;
