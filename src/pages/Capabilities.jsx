import { Helmet } from 'react-helmet';

function Capabilities() {
  return (
    <div>
      <Helmet>
        <title>Capabilities</title>
        <meta name="description" content="Discover our wide range of services and expertise, spanning design, development, strategy, and more." />
      </Helmet>
      <div className="grid-layout">

        <div className="grid-item text xl-grid"><b>About Us</b></div>
        <div className="grid-item span-most text l-grid"><p>We’re an independent design and technology studio based in Berlin. We collaborate with agencies, brands, and designers to create modern, accessible and high-performing products.</p></div>
        <div className='grid-item'></div>
   
        <div className='grid-item'></div>
        <div className='grid-item'></div>
        <div className='grid-item'></div>
        <div className='grid-item'></div>
        <div className='grid-item'></div>
        <div className='grid-item'></div>

        <div className="grid-item text xl-grid"><b>Our Capabilities</b></div>
        <div className="grid-item span-most text l-grid"><p>
        Design, Strategy, Web Development, Product Development, Ecommerce</p></div>
        <div className='grid-item'></div> 

        <div className='grid-item'></div>
        <div className='grid-item'></div>
        <div className='grid-item'></div>
        <div className='grid-item'></div>
        <div className='grid-item'></div>
        <div className='grid-item'></div>

        <div className="grid-item text xl-grid"><b>Our Stack</b></div>
        <div className="grid-item span-most text l-grid"><p>React, Node, Sanity.io, NextJS, TypeScript, GraphQL, Shopify, WebGL, ThreeJS, D3, Contentful, Electron, Shopify</p></div>
        <div className='grid-item'></div>
      </div>
    </div>
  );
}

export default Capabilities;
