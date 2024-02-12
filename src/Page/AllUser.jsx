import react from 'react';
import Users from '../Components/User/Users';
import blob from '../assets/blob_5.svg'
import Modal from '../Components/Utils/Modal';

const AllUsers = (props) => {
    return (
        <section className='p-4 bg_primary bordered'>
            <Users/>
          <Modal/>
        </section>
    )
};
export default AllUsers;