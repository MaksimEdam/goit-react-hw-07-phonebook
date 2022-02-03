import * as contactsAPI from '../../src/services/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/FetchContacts',
  async (_value, { rejectWithValue }) => {
    try {
      return await contactsAPI.fetchContacts();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/AddContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      return await contactsAPI.addContact(name, number);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/Delete',
  async (id, { rejectWithValue }) => {
    try {
      const contact = await contactsAPI.deleteContact(id);
      return contact.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
