import { Link } from "react-router-dom";

function Header({ user, onLogout }) {
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }

  return (
    <header style={{width: '100%', border: '1px solid white'}}>
      {user ? (
        <div>
          <div style={{ border: '1px solid white'}}>
      <h1>
        <Link to="/">Lorem Blogum</Link>
        <button style={{marginLeft: '10px' }} onClick={handleLogout}>Logout</button>
      </h1>
      </div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <p>Welcome {user.username}!</p>
          {/* <button onClick={handleLogout}>Logout</button> */}
        </div>
        </div>
      ) : (
        <div>
        <h1>
        <Link to="/">Lorem Blogum</Link>
      </h1>
        <Link to="/login">Click Here to Login</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
