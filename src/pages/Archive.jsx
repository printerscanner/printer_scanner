import Grid from '../layouts/PostGrid.jsx';

function Archive() {
  return (
    <div>
      <Grid includeArchived={true} /> {/* Include all items, including archived ones */}
    </div>
  );
}

export default Archive;
