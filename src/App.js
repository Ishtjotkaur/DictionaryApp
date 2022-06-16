import "./App.scss";
import Dict from "./components/Dict";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <div className="body">
          <Navbar />
          <div className="d-flex align-centerS">
            <div>
              <Dict />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
