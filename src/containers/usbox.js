import React from 'react';
import { Link } from 'react-router';
import Item from './item';
import * as Actions from '../actions';
import * as Utils from '../utils/utils';
import * as data from '../store/data';
import { connect } from 'react-redux';
import List from './list';
class Usbox extends React.Component {

  componentWillMount(){
      const p = this.props.location.pathname;
      const k = p.substr(1,p.length);
      const url = Utils.getUrlByKey(data.DATA,k);
      this.props.requestUsbox(url);
  }

  render(){
    var state = this.props.state.data;
    var items = state.map((item,i) => {
          return <Item item={item.subject} key={i} />
        })
      return (
        <div id="app">
        <section id="list" className="grid">
          {items}
        </section>
      </div>
      )
  }
}

function mapStateToProps(state) {
    console.log('d',state);
    return {
      state: state.usbox
    };
}

function mapDispatchToProps(dispatch) {
  return {
    requestUsbox:function(url){
      return dispatch(Actions.requestUsbox(url));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Usbox);
