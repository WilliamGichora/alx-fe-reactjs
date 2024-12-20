import axios from "axios";

const fetchAdvancedUserData = async (query) => {
    try {
        const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
        throw error;
    }
};

export default fetchAdvancedUserData;
