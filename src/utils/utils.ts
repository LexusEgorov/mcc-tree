import { TreeNodeType } from '../types/types';

export function generator(start: number) : () => number{
  let generated = ++start;

  return function(): number{
    return generated++;
  }
}

export const traverseRootChild = {
  addNode: (root: TreeNodeType, parentId: number, node: TreeNodeType) : number => {
    if(root.id === parentId){
      root.childNodes.push(node);
      return 1;
    }

    for(let i = 0; i < root.childNodes.length; i++){
      if(traverseRootChild.addNode(root.childNodes[i], parentId, node) === 1){
        return 1;
      }
    }

    return 0;
  },

  removeNode: (root: TreeNodeType, removeId: number) : number => {
    for(let i = 0; i < root.childNodes.length; i++){
      if(root.childNodes[i].id === removeId){
        root.childNodes = [...root.childNodes.slice(0, i), ...root.childNodes.slice(++i)];
        return 1;
      }
    }

    for(let i = 0; i < root.childNodes.length; i++){
      if(traverseRootChild.removeNode(root.childNodes[i], removeId) === 1){
        return 1;
      }
    }

    return 0;
  },

  editNode: (root: TreeNodeType, editId: number, newValue: string) : number => {
    if(root.id === editId){
      root.value = newValue;
      return 1;
    }

    for(let i = 0; i < root.childNodes.length; i++){
      if(traverseRootChild.editNode(root.childNodes[i], editId, newValue) === 1){
        return 1;
      }
    }

    return 0;
  },

  getSize: (root : TreeNodeType) : number => {
    let size = 1;
    for(let i = 0; i < root.childNodes.length; i++){
      size += traverseRootChild.getSize(root.childNodes[i]);
    }

    return size;
  }
}
