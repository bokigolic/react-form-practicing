//import logo from "./public/img/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-menu">
        <div className="links">
          <li><a href="/">Home</a></li>
          <li><a href="/create">Add new Car</a></li>
          <li><a href="/update">Update Inventory</a></li>
          <li><a href="/delete">Delete from inventory</a></li>
        </div>
        {/* <li><a href="./pages/Contact.js">Contact</a></li> 
       pitanje, kako naoraviti rutiranje na slececu stranu???
       
       */}
      </div>

    </nav>
  );
};
export default Navbar;