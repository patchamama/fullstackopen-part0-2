import axios from 'axios';

const URL = 'http://localhost:3001/persons';

const getAll = () => {
  return axios.get(URL).then((response) => response.data);
};

const addNewPerson = (newPerson) => {
  return axios.post(URL, newPerson).then((response) => response.data);
};

const updatePerson = (id, data) => {
  return axios.put(`${URL}/${id}`, data).then((response) => response.data);
};

const deletePerson = (id) => {
  axios.delete(`${URL}/${id}`);
};

const api = { getAll, addNewPerson, updatePerson, deletePerson };
export default api;
