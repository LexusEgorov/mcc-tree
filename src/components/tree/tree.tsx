import TreeBody from '../tree-body/tree-body';
import TreeHeader from '../tree-header/tree-header';
import './tree.css';

function Tree() : JSX.Element {
  return(
    <section className="tree">
      <TreeHeader />
      <TreeBody />
    </section>
  );
}

export default Tree;
