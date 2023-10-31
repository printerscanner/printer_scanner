
// eslint-disable-next-line react/prop-types
function CondensedGrid({ filter, setFilter, showAbout, toggleAbout }) {
  return (
    <div className="grid-layout condensed-grid">
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
          All
        </button>
      </div>
      <div className="grid-item">
        <button className={`${showAbout ? "selected" : ""}`} onClick={toggleAbout}>
          About
        </button>
      </div>
      <div className="grid-item span-2"></div>
      <div className="grid-item">
        <a className="menu-link" href="">
          Mother Type
        </a>
      </div>
      <div className="grid-item">
        <a className="menu-link" href="">
          Earthly Delights
        </a>
      </div>
    </div>
  );
}

export default CondensedGrid;
