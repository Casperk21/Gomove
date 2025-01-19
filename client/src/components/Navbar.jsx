import '../styles/navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="flex justify-between">
        <Link to="/" className="text-2xl font-bold">Gomove</Link>
        <div className="space-x-4">
          <Link to="/flyttebilberegner">Flyttebilberegner</Link>
          <Link to="/3d-visualisering">3D-Visualisering</Link>
          <Link to="/tjekliste">Tjekliste</Link>
          <Link to="/flytteguide">Flytteguide</Link>
          <Link to="/om-os">Om os</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
