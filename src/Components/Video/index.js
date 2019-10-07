import React from 'react'
import './Video.scss'


class Video extends React.Component {
//     videoRef = React.createRef();
//     endpoint = "https://firebasestorage.googleapis.com/v0/b/portfolio-9117a.appspot.com/o/test.mp4?alt=media&token=e8a6eabe-d5b8-4a8f-b8de-30a441af522e"
//     componentDidMount(){
//         const videoTag = this.videoRef.current;
//         if(videoTag){
//             const myMediaSource = new MediaSource();
//             const url = URL.createObjectURL(myMediaSource);
//             videoTag.src= url;
//             const videoSourceBuffer = myMediaSource.addSourceBuffer('video/mp4; codecs="avc1.64001e"');

//             fetch(this.endpoint).then(function(response) {
//                 // The data has to be a JavaScript ArrayBuffer
//                 return response.arrayBuffer();
//             }).then(function(videoData) {
//             videoSourceBuffer.appendBuffer(videoData);
// });
//         }

    render(){
        return(
            <div></div>
            // <video className="background-video" src={link} ref ={this.videoRef} width="1280px" height="720px" />
        )
    }

}

export default Video