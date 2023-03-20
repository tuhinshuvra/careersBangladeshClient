import { useEffect, useState } from "react";

const useJobSeeker = email => {

  console.log("JobSeekers Email : ", email);
  const [isJobSeeker, setIsJobSeeker] = useState(false);
  const [isJobSeekerLoading, setIsJobSeekerLoading] = useState(true);

  useEffect(() => {
      fetch(
        `${process.env.REACT_APP_CABD_server_address}/jobseekerUser/${email}`
      )
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setIsJobSeeker(data.isJobSeeker);
          setIsJobSeekerLoading(false);
        });
    
  }, [email]);
  return [isJobSeeker, isJobSeekerLoading];
};

export default useJobSeeker;
