/**
 * Created by leon on 03.12.13.
 */
  function quadratic(a, b, c){
if (typeof(a) === 'number' &&
    typeof(b) === 'number' &&
    typeof(c) === 'number'){
  var d = Math.pow(b, 2) - (4 * a * c);
  if (d >= 0){
    var x1;
    var x2;
    if (d == 0){
       x1 = x2 = (- b + Math.sqrt(d) / (2 * a));
      console.log('x1 = x2 = ' + x1);
    }else{
       x1 = (- b + Math.sqrt(d)) / (2 * a);
       x2 = (- b - Math.sqrt(d)) / (2 * a);
      console.log('x1 = ' + x1 + '; x2 = ' + x2);}
  }else{
    console.log('Корней нет');}
}else{
  console.log('Введите переменные');
  }
}
quadratic(2, 4, 8);