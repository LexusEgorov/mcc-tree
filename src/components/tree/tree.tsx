import TreeControls from '../tree-controls/tree-controls';
import './tree.css';

function Tree() : JSX.Element {
  return(
    <section className="tree">
      <article className='tree-body'>
        tree-body
      </article>
      <TreeControls />
    </section>
  );
}

export default Tree;
