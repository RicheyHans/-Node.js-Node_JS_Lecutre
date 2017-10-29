// 1. 서버 모듈(library) 가져오기(import)
var http = require("http");
var url = require("url");
var qs = require("querystring");    // split을 내장

// 2. 서버 생성
var server = http.createServer( function(request, response){
  // console.log(request);

  // 객체화
  var parsedUrl = url.parse(request.url);
  console.log(parsedUrl);

  var parsedQuery = qs.parse(parsedUrl.query);
  console.log(parsedUrl);
  // 브라우저가 무한히 로딩하지 않도록 완료를 명시한다.
  response.end("aaa의 값은 "+request.url);    // 주의 : run만 쓰면 코드 전체가 넘어옴
});

// 3. 서버 실행
server.listen(8090, function(){
  console.log("server is running....");
});
