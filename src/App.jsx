import Grid from './layouts/PostGrid.jsx';

function App() {
  return (
    <div>
      <Grid includeArchived={false} /> {/* Only include non-archived items */}
    </div>
  );
}

export default App;
