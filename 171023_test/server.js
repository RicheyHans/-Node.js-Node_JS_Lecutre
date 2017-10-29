/*
  방문자 수를 카운트하는 로직을 작성하시오
*/

// API설계

// /서비스 명/값
// /피보나치/100  -> 화면상에 피보나치 100(배열)개를 띄워주는 요청

// 1. 서버 모듈(library)을 import한다
var http = require("http");
// var cnt = 0;
// 2. 서버 모듈을 사용해서 서버를 정의
// 파라미터로 들어가는 함수는 함수의 이름 필요없음
var server = http.createServer( function(request, response){
  // 사용자 요청에 대해 어떻게 응답할지를 정의
  // cnt = cnt + 1;

  var array = request.url.split("/");
  // for(i in array)
  //  response.write("["+array[i]+"]");
  // response.write("url : "+request.url);
  // response.write(cnt);

  // 일반 for문은 배열의 index를 리턴하고
  // 향상된 for문은 배열안의 실제 item을 리턴한다.

  response.writeHead(200, {'Content-Type':'text/html'});
  array.forEach(function(item){
    response.write("["+item+"] <br>");
  });
  response.end("");
});

// 3. 서버 실행
server.listen(8089, function(){
  console.log("Server is running....");
});    // socket.accpet와 같은 역할
