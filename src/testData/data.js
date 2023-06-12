import axios from 'axios';

export const getBookLists = async () => {
    return await axios.get('http://localhost:8080').then((res) => res.data).catch((err) => alert('Đã xảy ra lỗi', err));;
};