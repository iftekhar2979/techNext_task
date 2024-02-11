import react, { useEffect, useRef, useState } from 'react';
import User from './User';
import Spinner from '../Utils/Spinner';
import useFetchAllData from '../../CustomHooks/useFetchAllData';
import Filter from './Filter';

function toCamelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

const Users = () => {
    const { fetchData, users = [], setUsers, error, page, isLoading } = useFetchAllData('https://dummyjson.com/users')
    const [sortingValue, setSortingValue] = useState('')
    //Fetch Data When Component First Mount
    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        //Clean Up Event Listener For Scrolling
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isLoading]);

    //Infinity scrolling Function
    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
            return;
        }
        fetchData();
    };
    const handleInputDropdown = (e) => {
        let sortsValue = toCamelCase(e.target.value)

        if (sortsValue === 'name') {
            sortsValue = "firstName"
        }
        let sorted
        if (sortsValue === "companyName") {
            let sorted = [...users].sort((a, b) => {
                const sortedValuesA = a.company.name.toLowerCase();
                const sortedValuesB = b.company.name.toLowerCase();

                if (sortedValuesA < sortedValuesB) {
                    return -1;
                }
                if (sortedValuesA > sortedValuesB) {
                    return 1;
                }
                return 0;
            });
            setUsers(sorted)
            return 
        }
        sorted = [...users].sort((a, b) => {

            const sortedValuesA = a[sortsValue].toLowerCase();
            const sortedValuesB = b[sortsValue].toLowerCase();

            if (sortedValuesA < sortedValuesB) {
                return -1;
            }
            if (sortedValuesA > sortedValuesB) {
                return 1;
            }
            return 0;
        });
        setUsers(sorted)


    }

    return (
        <>
            <Filter handleInputDropdown={handleInputDropdown} />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mt-2 lg:mt-0'>
                {
                    users?.map(item => <User key={item.id} props={item} />)
                }
            </div>
            {isLoading && <Spinner />}
        </>

    )
};
export default Users;