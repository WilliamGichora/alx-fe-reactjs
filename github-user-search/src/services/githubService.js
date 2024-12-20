import axios from "axios";

/**
 * Fetch GitHub users based on advanced search criteria.
 * 
 * @param {string} username - The GitHub username to search for.
 * @param {string} location - The location to filter by.
 * @param {number} minRepos - The minimum number of repositories.
 * @param {number} page - The page number for pagination (default is 1).
 * @param {number} perPage - The number of results per page (default is 30).
 * 
 * @returns {Object} - The response data from the GitHub API.
 */
const fetchAdvancedUserData = async ({ username, location, minRepos, page = 1, perPage = 30 }) => {
    try {
        const queryParts = [];
        if (username) queryParts.push(`user:${username}`);
        if (location) queryParts.push(`location:${location}`);
        if (minRepos) queryParts.push(`repos:>${minRepos}`);
        const query = queryParts.join(" ");

        // GitHub Search API endpoint
        const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`;

        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error fetching data from GitHub API:", error);
        throw error;
    }
};

export default fetchAdvancedUserData;
