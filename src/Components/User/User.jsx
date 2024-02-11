import react from 'react';
import { Link } from 'react-router-dom';

const User = ({ props }) => {
    const { id,firstName, lastName, email, image, address: { city, address, state }, company: { name: companyName } } = props
    return (
        <div className='card flex px-4 my-2 shadow-md primary_black border-zinc-300 hover:border-x-2'>

            <div className=''>
                <img src={image} className='object-contain' alt={firstName + lastName} srcset="" />

            </div>
            <div className='py-2'>
              <Link to={`/${id}`}> <h2 className='font-bold text-xl'>{firstName} {lastName}</h2></Link> 
                 <span className='font-bold text-xl'>Email : </span><span className='font-semibold'> {email}</span>
                <h2 className='font-semibold'><span className='font-bold text-xl'>Company Name : </span>{companyName}</h2>
                <h2 className='font-semibold'><span className='font-bold text-xl'>City : </span>{city}</h2>
                <h2 className='font-semibold'><span className='font-bold text-xl'>Adress : </span>{address}</h2>
                <h2 className='font-semibold'><span className='font-bold text-xl'>State : </span>{state}</h2>
                {/* <p>City: {city}</p>
                <p>Adress: {address}</p>
                <p>State: {state}</p> */}
            </div>
        </div>
    )
};
export default User;