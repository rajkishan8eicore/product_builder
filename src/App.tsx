import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import SideBar from "./components/sidebar";
import MainScreen from "./components/mainscreen";

function App() {
  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="flex">
        <SideBar />
        <MainScreen />
      </div>
      <Footer />
    </div>
  );
}

export default App;
