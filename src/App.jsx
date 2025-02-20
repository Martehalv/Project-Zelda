import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./components/CategoryPage";
import Home from "./components/Home";

function App() {
  const [games, setGames] = useState();

  const getGames = async()=>{
    fetch("https://zelda.fanapis.com/api/games")
    .then((response) => response.json())
    .then(data => setGames(data.data))
    .catch(error => console.error("Skjedde noe dritt ved fetch", error));
  };

  useEffect(()=>{
    getGames();
    console.log("Min state", games);
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home games={games} />} />
        <Route path=":slug" element={<CategoryPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

