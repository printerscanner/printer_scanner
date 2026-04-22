import data from "../data/api.js";

// eslint-disable-next-line react/prop-types
const Grid = () => {
  let productIds = Object.keys(data);

  const renderGridItem = (id) => {
    const itemClass = data[id].featured ? "grid-item span-2" : "grid-item";
    const itemContent = (
      <>
        <div className="text overview">
          <p className="overview-title">
            <span className="overview-title-left">
              <b>{data[id].title}</b>
            </span>
            <span className="overview-title-right">
              {data[id].now ? <span className="now-pill">now</span> : null}
              {data[id].source ? <span>↗</span> : null}
            </span>
          </p>
          <p style={{ fontSize: "12px", paddingBottom: ".5rem" }}>
            {data[id].collaborators ? (
              <span className="grid-crumbs">with {data[id].collaborators}</span>
            ) : (
              ""
            )}
            {data[id].category ? (
              <span className="grid-crumbs">{data[id].category}</span>
            ) : (
              ""
            )}
            {data[id].software ? (
              <span className="grid-crumbs">{data[id].software}</span>
            ) : (
              ""
            )}
            {data[id].license ? (
              <span className="grid-crumbs">{data[id].license}</span>
            ) : (
              ""
            )}
            {data[id].year ? (
              <span className="grid-crumbs">{data[id].year}</span>
            ) : (
              ""
            )}
          </p>
          <p>{data[id].description}</p>
        </div>
      </>
    );

    return (
      <a
        className={itemClass}
        href={data[id].source ? `${data[id].source}` : `work/${id}`}
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
