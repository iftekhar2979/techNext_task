import react from 'react';

const Search = ({handleSearch}) => {
    return (
        <input type="text" placeholder="Search By First Name" onChange={handleSearch} className="input input-bordered input-accent w-full max-w-xs" />
    )
};
export default Search;