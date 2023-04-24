import { Action } from '../../const';
import './tree-controls.css';

type TreeControlsProps = {
  openModal: (action: string) => void
}

function TreeControls({openModal} : TreeControlsProps) : JSX.Element {
  /*
    Handlers for Add, Remove, Edit, Reset
    OnClick: openModal(action, selectedNode)
  */
  const handleAdd = () => {
    openModal(Action.Add);
  };
  
  const handleRemove = () => {
    openModal(Action.Remove);
  };
  
  const handleEdit = () => {
    openModal(Action.Edit);
  };
  
  const handleReset = () => {
    openModal(Action.Reset);
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
