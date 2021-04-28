import "./App.css";
import { Component } from "react";
import Tablist from "./components/tablist";
import Body from "./components/body";

class App extends Component {
  constructor() {
    super();
    this.state = {
      active: 1,
    };
    this.changeTab = (id) => {
      this.setState({
        active: id,
      });
    };
  }
  render() {
    const tabs = [
      {
        id: 1,
        title: "Home",
      },
      {
        id: 2,
        title: "Course List",
      },
    ];
    return (
      <div className="App">
        <div className="nav_bar">
          <Tablist
            tabs={tabs}
            activeTab={this.state.active}
            ctab={this.changeTab}
          />
        </div>
        <div className="body">
          <Body activeTab={this.state.active} />
        </div>
      </div>
    );
  }
}

export default App;
