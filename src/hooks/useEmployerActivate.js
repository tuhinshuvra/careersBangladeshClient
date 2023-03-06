import { useEffect, useState } from "react"

const useEmployerActivate = (email) => {
    const [isEmployerActivated, setIsEmployerActivated] = useState(false);
    const [isEmployerAcivationLoading, setIsEmployerAcivationLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/employers/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsEmployerActivated(data.isEmployerActivated)
                    setIsEmployerAcivationLoading(false)
                })
        }
    }, [email])
    return [isEmployerActivated, isEmployerAcivationLoading]
}
export default useEmployerActivate;