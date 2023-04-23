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
  }
}
