// Java는 다른 다른 클래스가 다른 파일로 접근하지만,
// 모듈은 소스코드 그대로 접근하는 형태.

// exports는 public과 유사하다
exports.a = 157;

// private
var b = 137;

function sum(a,b){
  return a+b;
}

exports.sum = function(a,b){
  return a+b;
}
