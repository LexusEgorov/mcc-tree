import { NameSpace } from '../../const';
import { State, TreeNodeType } from '../../types/types';

export const getRootNode = (state : State) : TreeNodeType | undefined => state[NameSpace.App].rootNode;