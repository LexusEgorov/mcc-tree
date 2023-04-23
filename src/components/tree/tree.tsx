import TreeBody from '../tree-body/tree-body';
import TreeControls from '../tree-controls/tree-controls';
import TreeHeader from '../tree-header/tree-header';
import './tree.css';

function Tree() : JSX.Element {
  return(
    <section className="tree">
      <TreeHeader />
      <TreeBody />
      <TreeControls />
    </section>
  );
}

export default Tree;
