import react, { useEffect, useState } from 'react';
import User from './User';
import Spinner from '../Utils/Spinner';

const Users = (props) => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [page, setPage] = useState(1);


    const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://dummyjson.com/users?limit=9&skip=${9 * page}`);
            const data = await response.json();

            setUsers(prevItems => [...prevItems, ...data.users]);
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
            return;
        }
        fetchData();
    };

  
    return (
        <>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mt-2 lg:mt-0'>
            {
                users?.map(item => <User key={item.id} props={item} />)
            }
        </div>
             {isLoading && <Spinner/>}
             </>

    )
};
export default Users;