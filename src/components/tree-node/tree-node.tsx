import { TreeNodeType } from '../../types/types';

function TreeNode({value, childNodes} : TreeNodeType) : JSX.Element {
  return(
    <ul className='tree-node'>
      <p className="tree-node-value">{value}</p>
      {
        childNodes.map((node) => (
          <li>
            <TreeNode value={node.value} childNodes={node.childNodes}/>
          </li>
        ))
      }
    </ul>
  );  
}

export default TreeNode;
