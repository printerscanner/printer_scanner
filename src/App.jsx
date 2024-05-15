import Header from './Header.jsx';
import Grid from './Grid.jsx';

function App() {
  return (
    <div>
      <Header />
      <Grid includeArchived={false} /> {/* Only include non-archived items */}
    </div>
  );
}

export default App;
