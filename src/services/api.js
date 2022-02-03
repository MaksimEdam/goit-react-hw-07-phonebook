import axios from 'axios';

axios.defaults.baseURL = 'https://61f9766b69307000176f7286.mockapi.io';

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);

  return data;
}

export async function addContact(name, number) {
  const { data } = await axios.post(`/contacts`, {
    name,
    number,
  });
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}
