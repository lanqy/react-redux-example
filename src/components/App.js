import React from 'react';
import Header from '../containers/Header';
import Root from './root';
import * as data from '../store/data';
class App extends React.Component {

  componentWillMount(){
    console.log("props:",this.props);
  }

  render() {
    return (
      <div>
        <Header data={data.DATA} />
        {this.props.children}
      </div>
    );
  }
}

export default App;
