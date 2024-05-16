import Grid from './layouts/PostGrid.jsx';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div>
    <Helmet>
      <title>Printer Scanner Studio</title>
      <meta name="description" content="Welcome to printer_scanner, an independent design and technology studio based in Berlin." />
    </Helmet>
      <Grid includeArchived={false} /> {/* Only include non-archived items */}
    </div>
  );
}

export default App;
