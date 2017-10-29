// 1. 서버 모듈(library) 가져오기(import)
var http = require("http");

// 2. 서버 생성
var server = http.createServer( function(request, response){
  console.log(request);
  response.end("");   // 브라우저가 무한히 로딩하지 않도록 완료를 명시한다.
});

// 3. 서버 실행
server.listen(8090, function(){
  console.log("server is running....");
});

// JS의 Object 생성
var request = {
  one : 157,       // var를 생략한다
  two : "Hello",
  three : 5,

  // 객체에 기능을 추가
  sum : function(){
    return one + three;
  }
};

console.log(request.one);     // 157을 출력
console.log(request.two);     // Hello 출력
console.log(request.sum());
