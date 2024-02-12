import react, { useState } from 'react';
import { postObject } from '../../CustomHooks/postObject';

const Modal = ({setUsers}) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        state: '',
        city: '',
        address: ''
    });
    const imgKey='a879ed1b150827ea6672ba50cad0c6b0'
    const [img, setImg] = useState()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value 
        }));
    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImg(file); 
    };
// console.log(process.env.REACT_APP_IMAGE_KEY)
    const handleSubmit = (e) => {
        e.preventDefault(); 
        // Destructure formData for newObj creation
        const { companyName, firstName, lastName, email, state, city, address } = formData;
        const newObj = {
            firstName,
            lastName,
            email,
            address: { state, city, address },
            company: { name: companyName }
        };

        // Prepares the image for upload
        const imageFormData = new FormData();
        imageFormData.append('image', img);

        const url = `https://api.imgbb.com/1/upload?key=${imgKey}`;
        fetch(url, { method: 'POST', body: imageFormData })
            .then((res) => res.json())
            .then((imgData) => {
                newObj.image = imgData.data.url; // Add image URL to newObj
                postObject(newObj)
                    .then(data =>{
                        setUsers(prev=>{
                            return [data,...prev]
                        })
                        document.getElementById("my_modal_4").close()
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
            })
            .catch((err) => console.error(err));
    };
    return (


        <dialog id="my_modal_4" className="modal">
            <div className="modal-box ">
                <h3 className="font-bold text-lg">ADD USER</h3>
                <div className="modal-action">
                    <form method="dialog" onSubmit={handleSubmit}>
                        <div className=' px-auto mx-auto'>
                            <input type="file" accept="image/*" onChange={handleImageChange} />
                            <input type="text" placeholder="FIRST NAME" name='firstName' onChange={handleChange} value={formData.firstName} className="input my-2 input-bordered input-primary w-full max-w-xs" />
                            <input type="text" placeholder="LAST NAME" name='lastName' onChange={handleChange} value={formData.lastName} className="input my-2 input-bordered input-primary w-full max-w-xs" />
                            <input type="text" placeholder="EMAIL" name='email' onChange={handleChange} value={formData.email} className="input my-2 input-bordered input-primary w-full max-w-xs" />
                            <input type="text" placeholder="COMPANY NAME" name='companyName' onChange={handleChange} value={formData.companyName} className="input my-2 input-bordered input-primary w-full max-w-xs" />
                            <input type="text" placeholder="STATE" name='state' onChange={handleChange} value={formData.state} className="input my-2 input-bordered input-primary w-full max-w-xs" />
                            <input type="text" placeholder="CITY" name='city' onChange={handleChange} value={formData.city} className="input  my-2 input-bordered input-primary w-full max-w-xs" />
                            <input type="text" placeholder="ADDRESS" name='address' onChange={handleChange} value={formData.address} className="input mt-2 input-bordered input-primary w-full max-w-xs" />
                            <div className='my-2 flex'>
                                <button type='button' className="btn block" onClick={() => document.getElementById("my_modal_4").close()}>Close</button>
                                <button type='sumbit' className="btn block btn-primary mx-2" >Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </dialog>

    )
};
export default Modal;