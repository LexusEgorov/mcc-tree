import './tree-controls.css';

function TreeControls() : JSX.Element {
  /*
    Handlers for Add, Remove, Edit, Reset
    OnClick: openModal(action, selectedNode)
  */
  const handleAdd = () => {
    console.log('add');
  };
  
  const handleRemove = () => {
    console.log('remove');
  };
  
  const handleEdit = () => {
    console.log('edit');
  };
  
  const handleReset = () => {
    console.log('reset');
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
