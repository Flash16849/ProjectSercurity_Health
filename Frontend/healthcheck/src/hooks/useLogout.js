import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    try {const response = await axios.post("/users/logout", {withCredentials: false,})
    
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return logout;
};

export default useLogout;
