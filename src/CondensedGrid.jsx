
// eslint-disable-next-line react/prop-types
function CondensedGrid({ filter, setFilter, showAbout, toggleAbout }) {
  console.log(filter)
  return (
    <div className="grid-layout condensed-grid condensed-grid--secondary">
      <div className="grid-item">
        <button
          className={`${filter === "featured" ? "selected" : ""}`}
          onClick={() => setFilter("featured")}
        >
          Featured
        </button>
        /
        <button
          className={`${filter === "all" ? "selected" : ""}`}
          onClick={() => setFilter("all")}
        >
          Archive
        </button>
      </div>
      <div className="grid-item grid-item--link">
        {/* <button className={`${showAbout ? "selected" : ""}`} onClick={toggleAbout}>
          About
        </button> */}
      </div>
      <div className="grid-item span-2"></div>
      <div className="grid-item grid-item--link">
        {/* <a className="menu-link" href="https://mother-type.de">↗ Mother Type</a> */}
      </div>
      <div className="grid-item">
        {/* <a className="menu-link" href="">↗ Earthly Delights</a> */}
      </div>
    </div>
  );
}

export default CondensedGrid;
