import react from 'react';

import { useEffect, useState } from 'react';


const useFetch = (id) => {
   const [user,setUser]=useState(null)
   const [isLoading,setIsLoading]=useState(false)
   const [error,setError]=useState(null)

   const fetchData = async (id) => {
    setIsLoading(true);
    setError(null);
    try {
        const response = await fetch(`https://dummyjson.com/users/${id}?select=firstName,lastName,company,image,email,address`);
        const data = await response.json();
        setUser(data);
      
    } catch (error) {
        setError(error);
    } finally {
        setIsLoading(false);
    }
};
   useEffect(()=>{
   fetchData(id)
   },[])

   return {user,isLoading,error}
};

export default useFetch;