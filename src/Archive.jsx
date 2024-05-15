import Header from './Header.jsx';
import Grid from './Grid.jsx';

function Archive() {
  return (
    <div>
      <Header />
      <Grid includeArchived={true} /> {/* Include all items, including archived ones */}
    </div>
  );
}

export default Archive;
