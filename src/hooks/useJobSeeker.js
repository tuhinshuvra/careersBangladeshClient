import { useEffect, useState } from 'react';

const useJobSeeker = (email) => {

    const [isJobSeeker, setIsJobSeeker] = useState(false);
    const [isJobSeekerLoading, setIsJobSeekerLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/jobseeker/${email}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setIsJobSeeker(data.isJobSeeker)
                    setIsJobSeekerLoading(false)
                })
        }
    }, [email])
    return [isJobSeeker, isJobSeekerLoading]
};

export default useJobSeeker;