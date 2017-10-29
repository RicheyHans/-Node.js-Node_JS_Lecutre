// 1. 서버 모듈(library) 가져오기(import)
var http = require("http");

// 2. 서버 생성
var server = http.createServer( function(request, response){
  console.log(request);
  // 브라우저가 무한히 로딩하지 않도록 완료를 명시한다.
  response.end(fibonacci.run());    // 주의 : run만 쓰면 코드 전체가 넘어옴
});

// 3. 서버 실행
server.listen(8090, function(){
  console.log("server is running....");
});

// Fibonacci 객체 생성
var fibonacci = {
  count : 100,
  run : function(){

    result ="";

    prev = 0;
    result = result + prev + ",";

    next = 1;
    result += next + ",";

    for(i = 0; i < this.count; i++){
        sum = prev + next;
        result += sum + ",";
        prev = next;
        next = sum;
    }
    return result;
  }
};
