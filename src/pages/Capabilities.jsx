import { Helmet } from 'react-helmet';


function Capabilities() {
  return (
    <div>
      <Helmet>
        <title>Capabilities</title>
        <meta name="description" content="From design, development, ecommerce, to product MVP, read about our capabilities." />
      </Helmet>
      <div className="grid-layout">
        <div className="grid-item"></div>
        <div className="grid-item span-all"></div>
        <div className="grid-item"></div>
      </div>
    </div>
  );
}

export default Capabilities;
