// POST처리
var http = require("http");
var u = require("url");
var fs = require("fs");

var server = http.createServer(function(request, response){
  // 쿼리를 분석해 주소를 추출한다
  var url = u.parse(request.url);

  // 쿼리 스트링 앞부분만 추출
  var path = url.pathname

  // path에 해당되는 파일을 읽는다
  response.writeHead(200, {'Content-Type' : 'text/html'});
  //파라미터(파일 경로, 인코딩, 콜백 함수)
  fs.readFile(path.substring(1), 'utf-8', function(error, data){
    var text = "";
    // 콜백 함수 내부에서 처리한다. 주의.
    if(error){
      htmlText(error);
    } else {
      text = data;
    }
    response.end(text);
  });   // substring(1) 을 하면 첫 글자를 제외한 모든 글자 호출
});

server.listen(8090, function(){

});

function htmlText(str){

  text = "<html><meta charset='utf-8'/><body>서버 오류: ";
  // text = "{errorMsg"":""";    // json
  text += error;
  text += "</body></html>";
  // text += "\"}";              // json
  return text;
}
