// $(document).ready(function(){
//   searchYouTube();
// })


var searchYouTube = ({query='dog', max=5, key}, callback) => {

  var url = 'https://www.googleapis.com/youtube/v3/search';
  var params = {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    videoEmbeddable: true,
    type:'video'
  };

  var results = $.getJSON(url,params, function(){
    console.log('sucess');
  })
  .done(function(data){
    console.log("inside done");
    console.log(data);
  })
};

window.searchYouTube = searchYouTube;

