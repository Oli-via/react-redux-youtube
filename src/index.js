/**
 * Created by aliyy on 2017/1/13.
 */
import _ from 'lodash'
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyAEZwLux69EFEb0jlK0C37wGjGwWmKs9e4';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo : null
    };

    this.searchTerm('Justin Bieber');
  }

  searchTerm(term){
    YTSearch({key : API_KEY, term : term}, (videos) => {
      this.setState({
        videos : videos,
        selectedVideo: videos[0]
      })   //注意setState()语法
    })
  }

  render(){
    const search = _.debounce((term)=>this.searchTerm(term), 500);
    return (
      <div>
        <SearchBar onSearchTermChange={search}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={(video)=>{this.setState({selectedVideo: video})}}
          videos={this.state.videos}/>   {/*将父组件的videos传递到VideoList中，报存在了子组件的props.videos里*/}
      </div>
    );
  }

}

ReactDom.render(<App />, document.querySelector(".container"));