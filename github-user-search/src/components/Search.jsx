import { useState } from "react";
import fetchUserData from '../services/githubService'

function Search() {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [users, setUsers] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setError(false);

        try {
            const query = [];
            if (username) query.push(`user:${username}`);
            if (location) query.push(`location:${location}`);
            if (minRepos) query.push(`repos:>${minRepos}`);

            //const searchQuery = query.join(" ");
            const response = await fetchUserData({
                username: username.trim(),
                location: location.trim(),
                minRepos: minRepos ? Number(minRepos) : null,
                page: 1,
                perPage: 10,
            });

            setUsers(response.items || []);
        } catch (error) {
            setError(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-6 max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter GitHub username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Minimum Repositories</label>
                    <input
                        type="number"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Enter minimum number of repositories"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:outline-none"
                >
                    Search
                </button>
            </form>

            {isLoading && <div className="mt-4 text-center">Loading...</div>}
            {isError && <div className="mt-4 text-center text-red-500">Something went wrong. Please try again.</div>}

            <div className="mt-6 space-y-4">
                {users.map((user) => (
                    <div key={user.id} className="p-4 border rounded shadow-sm flex items-center space-x-4">
                        <img src={user.avatar_url} alt="avatar" className="w-16 h-16 rounded-full" />
                        <div>
                            <p className="text-lg font-medium">{user.login}</p>
                            <p className="text-sm text-gray-500">{user.location || "Location not provided"}</p>
                            <a
                                href={user.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-500 hover:underline"
                            >
                                View Profile
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;
