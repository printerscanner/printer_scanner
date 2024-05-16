import Grid from './Grid.jsx';

function App() {
  return (
    <div>
      <Grid includeArchived={false} /> {/* Only include non-archived items */}
    </div>
  );
}

export default App;
