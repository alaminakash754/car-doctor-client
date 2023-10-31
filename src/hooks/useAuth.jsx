import { useContext } from "react";
import { AuthContext } from "../provider/UserProvider";


const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;