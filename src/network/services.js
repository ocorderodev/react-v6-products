import { SSL, HOST, PORT } from '../app/config/environment';
const URI = `${SSL}://${HOST}:${PORT}/api/product`;
import axios from 'axios';

const add = async (title, description, file) => {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('photo', file);
    return await axios.post(`${URI}/add`, fd);
}

const getAll = async () => {
    return await axios.get(`${URI}/getAll`);
}

const getById = async (id) => {
    return await axios.get(`${URI}/${id}`);
}

const update = async (title, description, file, id) => {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    if (file) {
        fd.append('photo', file);
    }
    return await axios.put(`${URI}/${id}`, fd);
}

const deleted = async (id) => {
    return await axios.delete(`${URI}/${id}`);
}

export default { add, getAll, getById, update, deleted }