import { useEffect, useState } from 'react';

const useEmployer = (email) => {

    const [isEmployer, setIsEmployer] = useState(false);
    const [isEmployerLoading, setIsEmployerLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/employer${email}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setIsEmployer(data.isEmployer)
                    setIsEmployerLoading(false)
                })
        }
    }, [email])
    return [isEmployer, isEmployerLoading]
};

export default useEmployer;