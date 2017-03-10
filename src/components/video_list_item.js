/**
 * Created by aliyy on 2017/1/13.
 */
import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imgUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item"
        onClick={()=>{onVideoSelect(video)}}>
      {/*此处onClick要等于一个匿名函数，不能直接写onClick={onVideoSelect(video)}
          转成es5是：
       React.createElement("li", {
         onClick: function onClick() {
           onVideoSelect(video);
       } });

       如果写成onClick={onVideoSelect(video)}，转成es5是：
       React.createElement("li", {
         onClick: onVideoSelect(video) });
       onClick成为了一个函数调用，就会报错（应该是等于一个函数）
      */}
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imgUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;