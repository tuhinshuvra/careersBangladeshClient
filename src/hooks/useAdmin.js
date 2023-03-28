import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`${process.env.REACT_APP_CABD_server_address}/adminUser/${email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          // if(isAdmin){
          //   toast.success('Admin user login successfully.')
          // }
          setIsAdmin(data.isAdmin);
          setIsAdminLoading(false);
        });
    }
  }, [email, isAdmin]);
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
