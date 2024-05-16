import data from '../data/api.js';

// eslint-disable-next-line react/prop-types
const Grid = ({ includeArchived }) => {
  let productIds = Object.keys(data);

  const renderGridItem = (id) => {
    if (!includeArchived && data[id].archived) {
      return null; // Don't render archived items if includeArchived is false
    }
    const itemClass = data[id].featured ? "grid-item span-2" : "grid-item";
    const itemContent = (
      <>
        <div className="text overview">
          <p><b>{data[id].title}</b> <span style={{float: "right"}}>{data[id].link ? <span>↗ </span> : ''}</span></p>
          <p style={{ fontSize: '12px', paddingBottom: '.5rem' }}>
            {data[id].category ? <span className="grid-crumbs">{data[id].category}</span> : ''} 
            {data[id].subcategory ? <span className="grid-crumbs">{data[id].subcategory}</span> : ''}
            {data[id].subsubcategory ? <span className="grid-crumbs">{data[id].subsubcategory}</span> : ''}
            {data[id].year ? <span className="grid-crumbs">{data[id].year}</span> : ''} 
          </p>
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

  return (
    <div className="grid-layout">
      {productIds.map((id) => renderGridItem(id))}
    </div>
  );
};

export default Grid;
