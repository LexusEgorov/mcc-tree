import { useAppDispatch } from '../../hooks/hooks';
import { addNode } from '../../store/app-data/app-data';
import './tree-controls.css';

type TreeControlsProps = {
  currentNode: number;
}

function TreeControls({currentNode} : TreeControlsProps) : JSX.Element {
  const dispatch = useAppDispatch();
  /*
    Handlers for Add, Remove, Edit, Reset
    OnClick: openModal(action, selectedNode)
  */
  const handleAdd = () => {
    dispatch(addNode({
      parentId: currentNode,
      value: 777,
    }))
  };
  
  const handleRemove = () => {
    console.log(`Remove from ${currentNode}`);
  };
  
  const handleEdit = () => {
    console.log(`Edit ${currentNode}`);
  };
  
  const handleReset = () => {
    console.log('Reset');
  };

  return(
    <article className="tree-controls">
      <div className="controls">
        <button
          className='control'
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          className='control'
          onClick={handleRemove}
        >
          Remove
        </button>
        <button
          className='control'
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className='control'
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </article>
  );
}

export default TreeControls;
