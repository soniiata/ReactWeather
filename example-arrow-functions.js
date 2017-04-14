// var names = ['Soni','Nopvi','Anggraini']
//
// names.forEach(function(name){
//   console.log('forEach',name);
// });
//
// names.forEach((name) => {
//   console.log('ArrowFunc',name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name +'!';
// console.log(returnMe('Nopvi'));

// var person = {
//   name: 'Nopvi',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' say hello to ' + name);
//     });
//   }
// };
//
// person.greet();

//challenge area
function add(a, b){
  return a+b;
}

//addStatement
var addStatement=(a,b) => {
  return a + b ;
}

console.log(addStatement(5,6));
//addExpression
var addExpression = (a,b) => a + b;
console.log(addExpression(4, -6));
// console.log(add(4,7));
// console.log(add(3,8));
