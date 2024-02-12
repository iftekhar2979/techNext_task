import react, { useState } from 'react';

const useFetchAllData = (url) => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

       //fetching all User Data
       const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`${url}select=firstName,lastName,company,image,email,address`);
            const data = await response.json();
            setUsers(data.users);
        
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };
    return {fetchData,users,setUsers,error,isLoading}
};
export default useFetchAllData;