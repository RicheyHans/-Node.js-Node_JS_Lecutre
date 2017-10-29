// 함수를 하나 만들고, 0부터 시작해서 100개의 피보나치 수열을 출력하라

var count = 100;

function run(){
  var a = 0;
  var b = 1;
  var c = 0;

  for(var i = 0; i < count; i++){
    //console.log(i+"+"+(i+1)+"="+(i+(i+1)));
    if(i === 0){
      console.log(i);
    } else{
      c = a + b;
      a = b;
      b = c;
      console.log(c);
    }
  }
}
