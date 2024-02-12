import react from 'react';

const Filter = ({handleInputDropdown}) => {
    const sortOptions=['Email','Name','Company Name']
 
    return (
        <select className="select select-bordered w-full mx-2 max-w-xs"
        
        onChange={handleInputDropdown}
        >
            <option disabled selected>Sort By</option>
           
            {sortOptions?.map((item,index)=><option key={index} > {item}</option>)}
        </select>
    )
};
export default Filter;