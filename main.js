  var obj ;
  $(document).ready(function() { 

       
 $.ajax({url: "http://api.oceandrivers.com:80/v1.0/getWeatherDisplay/jordan/?period=latestdata", success: function(result){
           obj = result;
            console.log(result);
            $('#TEMPERATURE').text('TEMPERATURE: ' + result.TEMPERATURE + ' c');
            $('#HUMIDITY').text('HUMIDITY: ' + result.HUMIDITY + ' %');


        }});




// AIzaSyCYIOLxu8ODcLtOKle0OeyC1zqJu-6Libw





$( "#getInfo" ).click(function() {

           var con = $('#SearchId').val();
          var urlW = "http://api.oceandrivers.com:80/v1.0/getWeatherDisplay/"+con+"/?period=latestdata";
          // console.log(urlW);

          $.ajax({url: urlW, success: function(result){
           obj = result;
            // console.log(result);
            $('#TEMPERATURE').text('TEMPERATURE: ' + result.TEMPERATURE + ' c');
            $('#HUMIDITY').text('HUMIDITY: ' + result.HUMIDITY + ' %');


        }});

});






  
});

