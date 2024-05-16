import Grid from '../layouts/PostGrid.jsx';
import { Helmet } from 'react-helmet';


function Archive() {
  return (
    <div>
      <Helmet>
        <title>Archive</title>
        <meta name="description" content="Browse the Archive of past projects" />
      </Helmet>
      <Grid includeArchived={true} />
    </div>
  );
}

export default Archive;
