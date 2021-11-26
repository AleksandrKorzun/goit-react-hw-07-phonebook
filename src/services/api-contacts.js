import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3004';

export const getContactsApi = async () => {
    const { data } = await axios.get('/contacts')
    return data
}
export const setContactsApi = async (contact) => {
    const { data } = await axios.post('/contacts', contact)
    return data
}
export const deleteContactsApi = async (id) => {
    const { data } = await axios.delete(`/contacts/${id}`)
    return data
}