import axios from 'axios';

class Services {
    getDummy = async (formData) => {
        const data = await axios.post('https://jsonplaceholder.typicode.com/todos/1',formData); 
        // console.log(data.data);
        return data.data;
    }
}

export default new Services();