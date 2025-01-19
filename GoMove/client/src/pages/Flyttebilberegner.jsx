const Flyttebilberegner = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Flyttebilberegner</h1>
      <p>Indtast dimensionerne på dine møbler, og se, hvordan de passer i flyttebilen.</p>
      <form className="mt-6">
        <label className="block mb-2">
          Møbelnavn:
          <input type="text" className="border w-full p-2 mt-1" placeholder="Skriv møbelnavn" />
        </label>
        <label className="block mb-2">
          Dimensioner (L x B x H i cm):
          <input type="text" className="border w-full p-2 mt-1" placeholder="Fx 200 x 100 x 50" />
        </label>
        <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded">Beregn</button>
      </form>
    </div>
  );
};

export default Flyttebilberegner;
