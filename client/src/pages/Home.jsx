import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="text-center py-20 bg-gray-100">
      <h1 className="text-5xl font-bold">Velkommen til Gomove</h1>
      <p className="mt-4 text-lg">Din komplette løsning til en effektiv flytning.</p>
      <div className="mt-6 space-x-4">
        <Link to="/flyttebilberegner" className="bg-blue-600 text-white px-4 py-2 rounded">Prøv Flyttebilberegner</Link>
        <Link to="/tjekliste" className="bg-gray-300 px-4 py-2 rounded">Se Tjekliste</Link>
      </div>
    </section>
  );
};

export default Home;
