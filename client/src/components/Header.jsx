const Header = (props) => {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a href={global.window.location.origin} className="navbar-brand">UforU</a>
        </div>
        <div className="navbar-right navbar-brand">
          <a onClick={props.handleFav}>Favorite Universities</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
