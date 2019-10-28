//fetch method
fetch('http://165.227.229.49:8000/bonds?api_key=4ee6VsMCJLVjPwpsRSEy5K3WzQqkO6cL')
.then(response => response.json())
.then(data => {
    // Here's a list of bonds!
    console.log(data)
  });


  //ajax method
var settings = {
    "url": "http://165.227.229.49:8000/bonds?api_key=4ee6VsMCJLVjPwpsRSEy5K3WzQqkO6cL",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Accept": "application/json"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });