import { Helmet } from 'react-helmet';

function Capabilities() {
  return (
    <div>
      <Helmet>
        <title>Services & Expertise</title>
        <meta name="description" content="Discover our wide range of services and expertise, spanning design, development, strategy, and more." />
      </Helmet>
      <div className="grid-layout">
        <div className="grid-item text xl-grid"><p>About us</p></div>
        <div className="grid-item span-most text l-grid"><p>We're an independent design and technology studio based in Berlin. We collaborate with agencies, brands, and designers to create modern, accessible and high-performing products.</p></div>
        <div className='grid-item'></div>


        <div className="grid-item text xl-grid"><p>What We Do</p></div>
        <div className="grid-item span-most text l-grid"><p></p></div>
        <div className='grid-item'></div>

        <div className='grid-item'></div>    
        <div className="grid-item text xl-grid"><p>Design</p></div>
        <div className="grid-item span-3 text l-grid"><p>We specialize in crafting immersive design experiences tailored to your brand identity and user needs. From wireframing to prototyping, we bring ideas to life.</p></div>
        <div className='grid-item'></div> 

        <div className='grid-item'></div> 
        <div className="grid-item text xl-grid"><p>Strategy</p></div>
        <div className="grid-item span-3 text l-grid"><p>Collaborating closely with your team, we delve deep into understanding your objectives and challenges. Our strategic planning ensures alignment and maximizes value in every phase of the project.</p></div>
        <div className='grid-item'></div> 

        <div className='grid-item'></div> 
        <div className="grid-item text xl-grid"><p>Technology</p></div>
        <div className="grid-item span-3 text l-grid"><p>Empowered by the latest tech stacks and frameworks, we engineer robust solutions that scale, whether it's web, mobile, or custom applications.</p></div>
        <div className='grid-item'></div> 

        <div className='grid-item'></div> 
        <div className="grid-item text xl-grid"><p>Staff Augmentation</p></div>
        <div className="grid-item span-3 text l-grid"><p>We can serve as a strategic partner on challenging technical problems.</p></div>
        <div className='grid-item'></div> 

        <div className="grid-item text xl-grid"><p>Our Tech Stack</p></div>
        <div className="grid-item span-most text l-grid"><p>React, Node, Sanity.io, NextJS, TypeScript, GraphQL, Shopify, WebGL, ThreeJS, D3, Contentful, Electron, Shopify</p></div>
        <div className='grid-item'></div>
      </div>
    </div>
  );
}

export default Capabilities;
