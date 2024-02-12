import react, { useEffect, useRef, useState } from 'react';
import User from './User';
import Spinner from '../Utils/Spinner';
import useFetchAllData from '../../CustomHooks/useFetchAllData';
import Filter from './Filter';
import Search from './Search';
import useDebounce from '../../CustomHooks/useDebounce';

function toCamelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

const Users = () => {
    const [searched, setSearched] = useState(false)
    const [searchedData, setSearchedData] = useState([])
    const { fetchData, users = [], setUsers, error, page, isLoading } = useFetchAllData(`https://dummyjson.com/users?`)

    //Fetch Data When Component First Mount
    useEffect(() => {
        fetchData()
    }, [])

    function debounce(func, wait) {
        let timeout;
        return function returnedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };

            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

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

    function filterDataByFirstName(searchedValue) {
        return users?.filter(item =>
            item.firstName.toLowerCase().includes(searchedValue.toLowerCase())
        );
    }

    const handleSearch = debounce((e) => {
        const searchedValue = e.target.value;
        if (searchedValue === '') {
            setSearched(false)
            setSearchedData([])
            return
        }
        setSearched(true)
        let searchedData = filterDataByFirstName(searchedValue);
        setSearchedData(searchedData)

    }, 500);
    let mappingValue = searched ? searchedData : users
    return (
        <>
            <Filter handleInputDropdown={handleInputDropdown} />
            <Search handleSearch={handleSearch} />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 px-6 mt-2 lg:mt-0'>
                {
                    mappingValue?.map(item => <User key={item.id} props={item} />)
                }
            </div>
            {isLoading && <Spinner />}
        </>

    )
};
export default Users;