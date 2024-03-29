import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, node_1 } from '../../const';
import { AddNodePayload, AppData, EditNodePayload, RemoveNodePayload } from '../../types/types';
import { generator, traverseRootChild } from '../../utils/utils';

/*
  If we get rootNode from the server, getSize must execute when promise is fulfilled
  Not here, in api module
*/
const generateId = generator(traverseRootChild.getSize(node_1));

const initialState : AppData = {
  rootNode: node_1,
  initValue: node_1,
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

    editNode: (state, action: PayloadAction<EditNodePayload> ) => {
      const {editId, value} = action.payload;

      if(!state.rootNode){
        return;
      }

      traverseRootChild.editNode(state.rootNode, editId, value);
    },

    reset: (state) => {
      state.rootNode = state.initValue;
    }
  },
});

export const { addNode, removeNode, editNode, reset } = appData.actions;