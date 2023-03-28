import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useJobSeeker = (email) => {
  const [isJobSeeker, setIsJobSeeker] = useState(false);
  const [isJobSeekerLoading, setIsJobSeekerLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`${process.env.REACT_APP_CABD_server_address}/jobseekerUser/${email}`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          // if(isJobSeeker){
          //   toast.success('JobSeeker user login successfully.')
          // }
          setIsJobSeeker(data.isJobSeeker);
          setIsJobSeekerLoading(false);
        });
    }
  }, [email, isJobSeeker]);
  return [isJobSeeker, isJobSeekerLoading];
};

export default useJobSeeker;
