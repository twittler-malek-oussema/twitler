
 
 function showTweets (){
        var $tweets = $('#tweets');
        $tweets.html('');

        var index = streams.home.length - 1;
        while(index >= 0){
          var tweet = streams.home[index];
          var $tweet = $('<div class="textdesign"></div>');
          $(".textdesign").css("border", "2px solid lightblue");
          $(".textdesign").css("padding-bottom" , "1cm")
          var html = '<div class ="user">' +tweet.user+'</div>' 
          $tweet.text('@' + tweet.user + ': ' + tweet.message+' : ' + tweet.created_at);
          $tweet.appendTo($tweets);
          index -= 1;
      ;
        }}
      

      $(document).ready(showTweets)
      $('#refresh').click(showTweets);
      $('#tweets').click(add)
      $('.user')
      
      




