import react, { useState } from 'react';

const useFetchAllData = (url) => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [page, setPage] = useState(0);
       //fetching all User Data
       const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`${url}select=firstName,lastName,company,image,email,address&skip=${9 * page}`);
            const data = await response.json();
            setUsers(prevItems => [...prevItems, ...data.users]);
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };
    return {fetchData,users,setUsers,error,page,isLoading}
};
export default useFetchAllData;