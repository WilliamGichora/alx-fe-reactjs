import axios from "axios"

const getUsers = async (searchInput) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${searchInput}`);
        return response.data
    } catch (error) {
        return console.error(`Error: ${error}`);   
    }
    
}

export default getUsers;