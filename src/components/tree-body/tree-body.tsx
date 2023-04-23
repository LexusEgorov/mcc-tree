import { useAppSelector } from '../../hooks/hooks';
import { getRootNode } from '../../store/app-data/selectors';
import TreeNode from '../tree-node/tree-node';
import './tree-body.css'

function TreeBody() : JSX.Element {
  const rootNode = useAppSelector(getRootNode);

  return(
    <article className='tree-body'>
      {
        rootNode ? (
          <TreeNode
            id={rootNode.id}
            value={rootNode.value}
            childNodes={rootNode.childNodes}
            key={rootNode.id}
          />
        ) : (
          <p className='empty'>Tree is empty</p>
        )
      }
    </article>
  );
}

export default TreeBody;
