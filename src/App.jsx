import { useEffect } from "react";
import data from './data/api.js';
import Header from './Header.jsx'


function App() {

  let productIds = Object.keys(data);

  const renderGridItem = (id) => {
    const itemClass = data[id].featured ? "grid-item span-2" : "grid-item";
    const itemContent = (
      <>
        <div className="text">
          <p><b>{data[id].title}</b> <span style={{float: "right"}}>{data[id].link ? <span>↗ </span> : ''}</span></p>
          <p style={{ fontSize: '12px', paddingBottom: '.5rem' }}>
            {data[id].category ? <span className="grid-crumbs">{data[id].category}</span> : ''} 
            {data[id].subcategory ? <span className="grid-crumbs">{data[id].subcategory}</span> : ''}
            {data[id].subsubcategory ? <span className="grid-crumbs">{data[id].subsubcategory}</span> : ''}
            {data[id].year ? <span className="grid-crumbs">{data[id].year}</span> : ''} 

          </p>

          <p >{data[id].description}</p>
        </div>
      </>
    );

    return (
      <a
        className={itemClass}
        href={data[id].link ? `${data[id].link}` : `work/${id}`}
        key={id}
      >
        {itemContent}
      </a>
    );
  };

  useEffect(() => {
    const handlePopstate = () => {
      // Handling popstate if needed
    };
  
    window.addEventListener("popstate", handlePopstate);
  
    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  return (
    <div>
      <>
        <Header/>
        <div className="grid-layout">
          {productIds.map((id) => (
            renderGridItem(id)
          ))}
        </div>
      </>
    </div>
  );
}

export default App;
