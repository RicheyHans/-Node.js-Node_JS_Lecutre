/*
    postman 에서 전송 테스트시 content-type을 지정하면 안된다.
*/
var http = require("http");
// 파일 업로드하기
var formidable = require("formidable");
var fs = require("fs");

var server = http.createServer(function(request,response){
    if(request.url == "/upload"){
        var form = new formidable.IncomingForm();
        form.multiples = true;
        form.parse(request, function(error, names, files){ // 임시폴더에 저장
            if(error){
                console.log(error);
            }else{
                for(i in files){
                    var oldpath = files[i].path;
                    var realpath = "c:/temp/upload/" + files[i].name;

                    renameFile(oldpath,realpath,0);
                }
                response.end("upload completed!");
            }
        });

    }else{
        response.end("404 not found");
    }
});
// 파일 중복 재귀처리
function renameFile(oldpath,realpath,index){
    if(realpath.exists)
        renameFile(oldpath, realpath +"_"+ index, index++);
    else
        fs.renameSync(oldpath, realpath);
}

server.listen(8090, function(){
    console.log("server's running...");
});
