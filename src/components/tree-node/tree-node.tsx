import { TreeNodeType } from '../../types/types';
import './tree-node.css';

type TreeNodeProps = {
  node: TreeNodeType,
  selectedNode: number,
  selectHandler: (id: number) => void
}

function TreeNode({node, selectedNode, selectHandler} : TreeNodeProps) : JSX.Element {
  const {id, value, childNodes} = node;

  const handleSelect = () => {
    selectHandler(id);
  }

  return(
    <ul className='tree-node'>
      <p
        className={`tree-node-value${selectedNode === id ? ' selected' : ''}${childNodes.length ? '' : ' leaf'}`}
        onClick={handleSelect}
      >
        {value}
      </p>
      {
        childNodes && childNodes.map((currentNode) => (
          <li key={currentNode.id}>
            <TreeNode
              node={currentNode}
              selectedNode={selectedNode}
              selectHandler={selectHandler}
            />
          </li>
        ))
      }
    </ul>
  );  
}

export default TreeNode;
