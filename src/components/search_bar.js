/**
 * Created by aliyy on 2017/1/13.
 */
import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props)
    this.state = {
      term : ''
    }
  }
  render (){
    return (  //此处要写return
      <div className="search-bar">
      <input
        value = {this.state.term}
        onChange = {event => this.onSearchTermChange(event.target.value)}
      />
      </div>
    )
  }

  onSearchTermChange(term){
    this.setState({  //setState里是对象
      'term' : term
    })
    this.props.onSearchTermChange(term)
  }
}

export default SearchBar;