import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Dashboard from "./Dashbaord/Page";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-20 p-6">
        <Dashboard/>
        <Footer/>
      </div>
    </main>
  );
}