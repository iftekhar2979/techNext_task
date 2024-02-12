import react from 'react';

const AddUser = ({handleAddUser}) => {
   
    return (
        <button className="btn btn-primary px-2 mx-2 mx-2" onClick={handleAddUser}>Add User</button>
    )
};
export default AddUser;