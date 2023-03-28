import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useEmployer = (email) => {
  const [isEmployer, setIsEmployer] = useState(false);
  const [isEmployerLoading, setIsEmployerLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(
        `${process.env.REACT_APP_CABD_server_address}/employerUser/${email}`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          // if(isEmployer){
          //   toast.success('Employer user login successfully.')
          // }
          setIsEmployer(data.isEmployer);
          setIsEmployerLoading(false);
        });
    }
  }, [email, isEmployer]);

  return [isEmployer, isEmployerLoading];
};

export default useEmployer;
