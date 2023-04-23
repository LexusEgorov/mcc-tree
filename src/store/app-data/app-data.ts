import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, node_1 } from '../../const';
import { AppData } from '../../types/types';
import { generator, traverseRootChild } from '../../utils/utils';

const generateId = generator(7);

const initialState : AppData = {
  rootNode: node_1,
}

export const appData = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    addNode: (state, action) => { // add type
      const {parentId, value} = action.payload;
      const node = {
        id: generateId(),
        value: value,
        childNodes: [],
      };

      traverseRootChild.addNode(state.rootNode!, parentId, node) //create branch if rootNode === null;
      /*Tree traversal*/
    }
  },
});

export const { addNode } = appData.actions;