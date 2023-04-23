import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

const initialState = {
  data: '',
}

export const appProcess = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {},
});