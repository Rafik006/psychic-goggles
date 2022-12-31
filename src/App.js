import "./App.css";
import Header from "./Components/Header";
import Foote from "./Components/Foote";
import VideoContainer from "./Components/VideoContainer";
import ObjectifCarsousel from "./Components/nav/ObjectifCarsousel";
import SceneCarsousel from "./Components/nav/SceneCarsousel";
import Duree from "./Components/nav/Duree";



function App() {
  return (
    <div className="App">
      <div className="container">
        <Header /> 
        {/* // lazem hedhom yethatou fi div    */}
        <VideoContainer />
        <ObjectifCarsousel/>
        {/* <SceneCarsousel/> */}
        {/* <Duree/> */}
        <Foote />
      </div>
    </div>
  );
}

export default App;
