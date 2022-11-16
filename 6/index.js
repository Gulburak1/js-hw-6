let array = [2,19,33,3,15,33,12,3,5,68,8,99];

function square(a){            
  return a*a;
}
arrSquare = array.map(square);
console.log(arrSquare)

let arr = [2,19,33,3,15,33,12,3,5,68,8,99].filter(num=>num>10 && num<35)

console.log(arr);

let newArr =['reactjs', 'vuejs', 'angularjs', 'nodejs'].reduce(function (a, b) {
    return a.length > b.length ? a : b;
});

console.log(newArr);

let upperCasedArray =['reactjs', 'vuejs', 'angularjs', 'nodejs'].map(function(item, index) {
    return item.toUpperCase();
});

console.log(upperCasedArray)