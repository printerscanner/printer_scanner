import { Helmet } from 'react-helmet';


function Capabilities() {
  return (
    <div>
      <Helmet>
        <title>Capabilities</title>
        <meta name="description" content="From design, development, ecommerce, to product MVP, read about our capabilities." />
      </Helmet>
      <div className="grid-layout">
        <div className="grid-item text">
        <b>Tech Stack</b>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>11ty</li>
            <li>Node.js</li>
            <li>Typescript</li>
            <li>Sanity</li>
            <li>Shopify</li>
            <li>Contentful</li>
          </ul>
        </div>
        <div className="grid-item span-2 text">
          <b>About</b>
          <p></p>
        </div>
        <div className="grid-item"></div>
      </div>
    </div>
  );
}

export default Capabilities;
