// POST처리
var http = require("http");
var u = require("url");
var fs = require("fs");
var qs = require("querystring");
var mime = require("mime");

// 주소(Rest Api) 요청의 형태
// http://localhost:8090/post?filepath=/dir1/xxx.png

var server = http.createServer(function(request, response){
  // 쿼리를 분석해 주소를 추출한다
  var url = u.parse(request.url);
  // method를 꺼낸다
  // 주소에서 명령어=서버자원의id(uri)를 먼저 꺼낸다.
  var cmd = url.pathname;
  if(cmd == "/getfile"){
    // post가 어떤 변수 값을 받아 처리해야 하므로 쿼리 스트링을 꺼낸다.
    if(request.method == 'POST' ){
      // .. body에 넘어온 filepath 꺼낸다
    } else if(request.method == "GET"){
      // .. url.query를 꺼낸다
      var query = qs.parse(url.query);
      if(query.filepath){
        var filepath = query.filepath;
        console.log("filepath="+filepath);
        var mtype = mime.getType(filepath);  // 파일의 mime type을 알려준다.
        //파라미터(파일 경로, 인코딩, 콜백 함수)
        fs.readFile(filepath, function(error, data){
          if(error){

          }else{
            response.writeHead(200, {'Content-Type':mtype});
            response.end(data);
          }
        });

      }
    } else {
      response.writeHead(200, {'Content-Type':'text/html'});
      response.end(error+"");

    }
  }else{

  }


});

var sendHttpResult = function(){

};

server.listen(8090, function(){

});
