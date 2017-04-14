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

 $.getJSON(url,params, function(){
    console.log('sucess');
  })
  .done(({items}) => {
    if(callback){
      callback(items);
    }
  })
  .fail((responseJSON) => {
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
      );
  });
};

window.searchYouTube = searchYouTube;

