import { useState } from "react"
import fetchUserData from "../services/githubService";

function Search() {
    const [searchData, setSearchData] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setError] = useState();
    const [user, setUser] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(false);

        try {
            const response = await fetchUserData(searchData.trim());
            setUser(response);
            console.log(user);

        } catch (error) {
            setError(true);
        } finally {
            setIsLoading(false);
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="search" name="" id="" onChange={(e) => setSearchData(e.target.value)} style={{ padding: '20px', width: '50%', marginRight: '5px' }} placeholder="search github users.." />
                <button type="submit">Search</button>
            </form>

            {isLoading && <div>Loading</div>}
            {isError && <div>Something went wrong</div>}

            {user? (<div style={{ display: 'flex', flexDirection: 'column', gap: '0.5px' }}>
                <p>User: {user.name}</p>
                <p>company : {user.login}</p>
                <p>Avatar url: {user.avatar_url}</p>
                <img src={user.avatar_url} alt="avatar" style={{ width: '100px', height: '100px', margin: "0 auto"}} />
            </div>) : <div>Looks like we cant find the user</div> }
        </div>
    )
}

export default Search;