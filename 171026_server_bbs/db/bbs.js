// ****./db/index.js****
// db에 대한 CRUD 함수를 생성
// 특정 DB의 특정 table을 갱신 하도록 작성
// 주로 db 디렉토리 명을 bbs, table명 으로 설정하기도 함

// BBS테이블 접속 - 갱신

var mongo = require("mongodb").MongoClient;
var dbname = "bbsdb";
var dburl = "mongodb://localhost:27017/"+dbname;
var table = "bbs";

// 가상의 데이터 설정(function에 인수로 들어간다)
/*
  bbs = {
    no : 12,
    title : "제목",
    content : "내용",
    data : "2017/10/26 11:21:30",
    user_id : "root"
  }

  search = {
    type : "all",     // all 일 경우 전체검색, no = 글 한개 검색, title = "제목검색"
    no : 137,
    title : "제목검색",
    content : "내용검색",
    date : "날짜검색",
    user_id : "사용자 아이디로 검색"
  }
*/

exports.bbs = function(){
  this.no = -1;
  this.title = "";
  this.content = "";
  this.data = "";
  this.user_id = "";

  this.toQuery = function(){
    var bbs = {
      no : -1,
      title : "제목",
      content : "내용",
      data : "2017/10/26 11:21:30",
      user_id : "root"
    }
    bbs.no = this.no;
    bbs.title = this.title;

    return bbs;
  }
}

exports.create = function(bbs, callback){
  mongo.connect(dburl, function(error, db){
    db.collection(table).insert(bbs, function(error){
      if(error){
        callback(error);
      }else{
        callback("OK");   // callback; 만 쓰면 코드 자체이고, 괄호가 들어가야 실행
      }
      db.close();
    });
  });
}

exports.read = function(search, callback){
  mongo.connect(dburl, function(error, db){
    var query = {};
    if(search.type === "all"){
      query = {};
    }else if(search.type === "no"){
      query = {no:-1};
      query.no = search.no;
    }

    var cursor = db.collection(table).find(query);
    cursor.toArray(function(error, documents){
      if(error){

      }else{
        // document 처리
        callback(documents);
      }
      db.close();
    });
  });

}

exports.readOne = function(search, callback){
  mongo.connect(dburl, function(error, db){
    var query = {};
    if(search.type === "all"){
      query = {};
    }else if(search.type === "no"){
      query = {no:-1};
      query.no = search.no;
    }

    var cursor = db.collection(table).find(query);
    cursor.toArray(function(error, documents){
      if(error){

      }else{
        // document 처리
        callback(documents);
      }
      db.close();
    });
  });
}

exports.update = function(bbs){
  mongo.connect(dburl, function(error, db){
    // 1. 수정 대상 쿼리
    var query = {_id:-1};
    query._id = bbs._id;
    // 2. 데이터 수정 명령 - 실제 변경될 칼럼 이름과 값
    var operator = bbs;
    delete operator._id;
    // var operator = {title:"수정된 타이틀", data:"2018-11-15 11:13:23"};

    // 3. 수정 옵션 - upsert가 true일 때 데이터가 없으면 insert
    var option = {upsert:true};

    db.collection(table).update(query, operator, option, function(err, upserted){
      if(err){
        // 에러 발생
      }else{
        // 정상 처리
      }
      db.close();
    });
  });

}

exports.delete = function(bbs){
  mongo.connect(dburl, function(error, db){
    // 1. 수정 대상 쿼리
    var query = {no:-1};
    query.no = bbs.no;

    db.collection(table).remove(query, function(err, removed){
      if(err){

      }else{

      }
      db.close();
    });
  });

}
