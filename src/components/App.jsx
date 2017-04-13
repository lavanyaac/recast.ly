class App extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	videos: this.props;
		// 	// currentVideo:'',
		// 	// videos:this.props.searchYouTube();
		// };
	}

	render() {
		console.log('hellllo', this.props);
		return (
		  <div>
		   <Nav />
		  //   <div className="col-md-7">
		  //     <VideoPlayer />
		  //   </div>
		   <div>
		      <VideoList videos = {this.state.videos}/>
		    </div>
		  </div>
		);
	}
}

		  // <div>
		  //  <Nav />
		  //   <div className="col-md-7">
		  //     <VideoPlayer />
		  //   </div>
		  //   <div className="col-md-5">
		  //     <VideoList videos = {this.state.videos}/>
		  //   </div>
		  // </div>


// var App = (props) => (
//   <div>
//    <Nav />
//     <div className="col-md-7">
//       <VideoPlayer />
//     </div>
//     <div className="col-md-5">
//       <VideoList videos = {props.videoData}/>
//     </div>
//   </div>
// );










// var App = () => (
  // <div>
  //  <Nav />
  //   <div className="col-md-7">
  //     <VideoPlayer />
  //   </div>
  //   <div>
  //     {console.log(...videos.snippet.title)}
  //   </div>
  //   <div className="col-md-5">
  //     <VideoList/>
  //   </div>
  // </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

