import { useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import SideBar from "./components/sidebar";
import MainScreen from "./components/mainscreen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="flex">
        <SideBar />
        <MainScreen />
      </div>
      <Footer />
    </>
  );
}

export default App;
