import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, node_1 } from '../../const';
import { AddNodePayload, AppData, RemoveNodePayload } from '../../types/types';
import { generator, traverseRootChild } from '../../utils/utils';

const generateId = generator(7);

const initialState : AppData = {
  rootNode: node_1,
}

export const appData = createSlice({
  name: NameSpace.App,
  initialState,
  reducers: {
    addNode: (state, action: PayloadAction<AddNodePayload>) => {
      const {parentId, value} = action.payload;
      const node = {
        id: generateId(),
        value: value,
        childNodes: [],
      };

      if(!state.rootNode){
        state.rootNode = node;
        return;
      }

      traverseRootChild.addNode(state.rootNode!, parentId, node);
    },
    removeNode: (state, action: PayloadAction<RemoveNodePayload>) => {
      const {removeId} = action.payload;
      
      if(!state.rootNode){
        return;
      }

      if(state.rootNode.id === removeId){
        state.rootNode = undefined;
        return;
      }

      traverseRootChild.removeNode(state.rootNode, action.payload.removeId);
    },
  },
});

export const { addNode, removeNode } = appData.actions;