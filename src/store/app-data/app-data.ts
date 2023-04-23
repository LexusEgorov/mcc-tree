import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, node_1 } from '../../const';
import { AppData } from '../../types/types';

const initialState : AppData = {
  rootNode: node_1,
}

export const appData = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    addNode: (state, action) => {
      if(!state.rootNode){
        state.rootNode = action.payload;
        return;
      }

      /*Tree traversal*/
    }
  },
});