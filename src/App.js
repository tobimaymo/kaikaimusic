import React from "react";
import "./styles.css";
import { styles } from "./styles";
import NavBar from "./components/NavBar";
import Main from "./components/Main";


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1 style={styles.heading}>Albumnes en Stock!</h1>
        <Main />
      </div>
    );
  }
}

export default App;
