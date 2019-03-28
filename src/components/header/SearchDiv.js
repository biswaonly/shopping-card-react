import React, { Component } from 'react';
import { connect} from 'react-redux';

class SearchDiv extends Component {
  render() {
    return (
      <div className="abcdef" style={(this.props.final_search.length === 0)?{display:"none"}:{display:"block"}}>
          {this.props.final_search.map((item, index)=>{
            return <p className="ab" key={index}>{item}</p>
          })}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    final_search : state.final_search
  }
}

export default connect(mapStateToProps)(SearchDiv);