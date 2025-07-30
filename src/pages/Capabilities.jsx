import { Helmet } from "react-helmet";

function Capabilities() {
  return (
    <div>
      <Helmet>
        <title>Capabilities</title>
        <meta
          name="description"
          content="I’m an independent designer and programmer based in Berlin. I collaborate with agencies, brands, and designers to create modern, accessible and high-performing products."
        />
      </Helmet>
      <div className="grid-layout">
        <div className="grid-item text xl-grid">
          <b>About</b>
        </div>
        <div className="grid-item span-most text l-grid">
          <p>
            I’m an independent designer and programmer based in Berlin. I
            collaborate with agencies, brands, and designers to create modern,
            accessible and high-performing products.
          </p>
        </div>
        <div className="grid-item"></div>

        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>

        <div className="grid-item text xl-grid">
          <b>Capabilities</b>
        </div>
        <div className="grid-item span-most text l-grid">
          <p>
            Design, Strategy, Web Development, Product Development, Ecommerce
          </p>
        </div>
        <div className="grid-item"></div>

        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>

        <div className="grid-item text xl-grid">
          <b>Stack</b>
        </div>
        <div className="grid-item span-most text l-grid">
          <p>
            React, Node, Sanity.io, NextJS, TypeScript, GraphQL, Shopify, WebGL,
            ThreeJS, D3, Contentful, Electron, Shopify
          </p>
        </div>
        <div className="grid-item"></div>
      </div>
    </div>
  );
}

export default Capabilities;
