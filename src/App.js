import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";

import axios from "axios";

function Loading() {
  return (
    <div className="progress">
      <div className="indeterminate"></div>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { items: [] };

    this.onReloadData = this.onReloadData.bind(this);
  }

  componentDidMount() {

    setTimeout(() => {      
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(res => this.setState({ items: res.data }));
    }, 2000);
  }

  onReloadData() {

    this.setState({ items: [] }); //empty items again so loading bar shows

    setTimeout(() => {      
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(res => this.setState({ items: res.data }));
    }, 2000);

  }

  render() {
    return (
      <div className="App">
        {/*<h1>Loading</h1>*/}

        <div className="row col s12">
          <div className="col s12">
            {this.state.items.length > 0 && <a class="waves-effect waves-light btn" onClick={this.onReloadData}>Reload data</a>}
          </div>
        </div>


        {this.state.items.length === 0 && <Loading />}

        <div class="row">
          {this.state.items.map(item => (
            <Card title={item.title} body={item.body} />
          ))}
        </div>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <h1>Loading</h1>

//       <div className="progress">
//         <div className="indeterminate"></div>
//       </div>

//       <div class="row">

//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />

//       </div>

//     </div>
//   );
// }

export default App;
