import { useState } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { getRootNode } from '../../store/app-data/selectors';
import TreeNode from '../tree-node/tree-node';
import './tree-body.css'
import TreeControls from '../tree-controls/tree-controls';
import Modal from '../modal/modal';
import { Action } from '../../const';

function TreeBody() : JSX.Element {
  const [selectedNode, setSelectedNode] = useState(-1);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [currentAction, setCurrentAction] = useState('');

  const handleSelect = (id : number) => {
    setSelectedNode(id);
  }

  const handleCloseModal = () => {
    setIsModalOpened(false);
    setCurrentAction('');
    setSelectedNode(-1);
  }

  const handleOpenModal = (action: string) => {
    let isLegal = true;

    if(action !== Action.Reset){
      if(!rootNode){
        if(action !== Action.Add){
          isLegal = false;
        }
      } else {
        if(selectedNode === -1){
          isLegal = false;
        }
      }
    }

    if(!isLegal){
      return;
    }

    setCurrentAction(action);
    setIsModalOpened(true);
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
      <TreeControls openModal={handleOpenModal}/>
      <Modal currentNode={selectedNode} action={currentAction} isOpened={isModalOpened} closeModal={handleCloseModal}/>
    </>
  );
}

export default TreeBody;
