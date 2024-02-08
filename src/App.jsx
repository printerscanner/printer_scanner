import { useState, useEffect } from "react";
import data from './data/api.js';
import CondensedGrid from './CondensedGrid.jsx';

const randomClass = (value) => {
  const result = Math.floor(Math.random() * value);
  if (result === 0) {
    return "grid-item";
  }
  if (result === 1) {
    return "grid-item span-2";
  } else {
    return "grid-item";
  }
};

function App() {
  const [filter, setFilter] = useState(() => {
    // Initialize filter from localStorage or use "featured" as the default
    return localStorage.getItem("filter") || "featured";
  });
  const [showAbout, setShowAbout] = useState(false);

  let productIds = Object.keys(data);

  const filteredProducts = () => {
    if (filter === "featured") {
      return productIds.filter((id) => data[id].featured);
    }
    return productIds;
  };

  const renderGridItem = (id) => {
    const featured = filter === "featured"; // Check if the filter is "featured"
  
    const itemClass = featured ? "grid-item span-2" : "grid-item span-6";
    const itemContent = (
      <>
        {featured && data[id].thumbnail && !data[id].mov && <img loading="lazy" src={data[id].thumbnail} alt={data[id].title} />}
        {featured && data[id].mov && <video loading="lazy" autoPlay={true} muted={true}><source autoPlay src={data[id].mov} type="video/mp4" /></video>}
        <div className="text">
          <p>{data[id].link ? <span>↗ </span> : ''} <b>{data[id].title}</b></p>
          <p style={{ fontSize: '12px', paddingBottom: '.5rem' }}>{data[id].subcategory ? <span className="grid-crumbs">{data[id].subcategory}</span> : ''}
            {data[id].category ? <span className="grid-crumbs">{data[id].category}</span> : ''}
            {data[id].year ? <span className="grid-crumbs">{data[id].year}</span> : ''} </p>
          <p>{data[id].description}</p>
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
  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  const handleFilterClick = (selectedFilter) => {
    setShowAbout(false);
    setFilter(selectedFilter);

    // Save the selected filter in localStorage
    localStorage.setItem("filter", selectedFilter);
  };

  useEffect(() => {
    // Add event listener for browser back/forward navigation
    window.addEventListener("popstate", () => {
      // Retrieve the filter value from localStorage and set it
      const savedFilter = localStorage.getItem("filter");
      if (savedFilter) {
        setFilter(savedFilter);
      }
    });

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("popstate", () => { });
    };
  }, []);
  const featured = filter === "featured"; // Check if the filter is "featured"

  return (
    <div>
      <>
        <CondensedGrid
          filter={filter}
          setFilter={handleFilterClick}
          showAbout={showAbout}
          toggleAbout={toggleAbout}
        />
        <div className="grid-layout">
        {featured && 

          <div className="grid-item span-2 text">
            <p><b>printer_scanner</b> is the studio practice of <a href="https://abbeyyacoe.info">Abbey Yacoe</a>.</p>
            <p>
              If you would like to learn more or get in touch, our email is <a href="mailto:itsprinterscanner@gmail.com"> itsprinterscanner@gmail.com</a>. You can also find us on <a href="https://www.are.na/printer-scanner/">are.na</a>, <a href="https://instagram.com/printer_scanner">Instagram</a> and on <a href="https://github.com/printerscanner">Github</a>.
            </p>
          </div>
        }
          {filteredProducts().map((id) => (
            renderGridItem(id)
          ))}
        </div>
      </>
    </div>
  );
}

export default App;
