import { useState } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { getRootNode } from '../../store/app-data/selectors';
import TreeNode from '../tree-node/tree-node';
import './tree-body.css'
import TreeControls from '../tree-controls/tree-controls';

function TreeBody() : JSX.Element {
  const [selectedNode, setSelectedNode] = useState(-1);

  const handleSelect = (id : number) => {
    setSelectedNode(id);
  }

  const rootNode = useAppSelector(getRootNode);

  return(
    <>
      <article className='tree-body'>
        {
          rootNode ? (
            <TreeNode
              node={rootNode}
              key={rootNode.id}
              selectedNode={selectedNode}
              selectHandler={handleSelect}
            />
          ) : (
            <p className='empty'>Tree is empty</p>
          )
        }
      </article>
      <TreeControls currentNode={selectedNode}/>
    </>
  );
}

export default TreeBody;
