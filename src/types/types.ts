import { store } from '../store/store';

export type TreeNodeType = {
  id: number
  value: string;
  childNodes: TreeNodeType[];
}

export type AppData = {
  rootNode?: TreeNodeType;
}

export type AddNodePayload = {
  parentId: number,
  value: string,
}

export type RemoveNodePayload = {
  removeId: number,
}

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;