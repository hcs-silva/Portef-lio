import "./App.css";
import Playlist from "./components/Playlist";
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Results/>
      <Playlist/>
    </div>
  );
}

export default App;
