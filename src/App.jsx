import Grid from './layouts/PostGrid.jsx';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
    <Helmet>
      <title>Printer Scanner Studio</title>
      <meta name="description" content="I'm printer_scanner, a Berlin-based independent designer and technologist." />
    </Helmet>
      <Grid includeArchived={false} /> {/* Only include non-archived items */}
    </div>
  );
}

export default App;
