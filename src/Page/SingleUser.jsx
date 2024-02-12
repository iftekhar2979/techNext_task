import react from 'react';
import { useParams } from 'react-router';
import useFetch from '../CustomHooks/useFetch';
import Spinner from '../Components/Utils/Spinner';

const SingleUser = () => {
    const {id={}}=useParams()
    const {user=[],isLoading,error}=useFetch(id)
    if(isLoading || user===null){
        return <Spinner/>
        
    }
    if(error){
        return "Failed To Fetch ...!"
    }
    const {firstName, lastName, email, image, address: { city, address, state }, company: { name: companyName } } = user
    return (
<div className=' my-4 flex flex-col items-center bordered'>
    <div className='max-w-xs'>
        <img src={image} alt="" className='mx-auto' />
    </div>
    <div className=''>
        <h2><span className="font-bold">First Name:</span> {firstName}</h2>
        <h2><span className="font-bold">Last Name:</span> {lastName}</h2>
        <h2><span className="font-bold">Email :</span> {email}</h2>
        <h2><span className="font-bold">Street :</span> {address}</h2>
        <h2><span className="font-bold">City :</span> {city}</h2>
        <h2><span className="font-bold">State :</span> {state}</h2>
        <h2><span className="font-bold">Company :</span> {companyName}</h2>
    </div>
</div>


    )
};
export default SingleUser;