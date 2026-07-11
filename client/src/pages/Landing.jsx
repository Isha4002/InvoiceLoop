import Navbar from "../components/landing/Navbar";

const Landing = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="h-[80vh] flex items-center justify-center">
        <h1 className="text-6xl font-bold">
          Landing Page
        </h1>
      </section>
    </div>
  );
};

export default Landing;