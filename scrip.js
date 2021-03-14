/* const names = "Marjana"

function greating(names) {
    return("dfhjgkj " + names)
}
console.log(greating(names))
console.log(greating("AG"))

const a = 86
const b = 86
function findBiggerNumber(a, b) {
    if(a < b){
        return ("1 число більше ніж 2")
    }
    else if(a > b){
        return ("2 число більше ніж 1")
    }
    else{
        return ("2 число дорівнює ніж 1")
    }
}
console.log(findBiggerNumber( a,b ))
 */
/*
 const array = [2212, 23212, "fgd", 342 ]
function wqqew (array) {
    console.log("Довжина масиву є " + array.length)
    array.forEach((value, index )=> {
        console.log("Під індексом 0 знаходиться " + index + "знаходиться " + value)
    });
}
wqqew(array)
*/
/*
const array = []
function wqqew (array) {
    if (array == 0){
    console.log("масив порожній" )
    }
    else{
    console.log("Довжина масиву є " + array.length)
    array.forEach((value, index )=> {
        console.log("Під індексом 0 знаходиться " + index + "знаходиться " + value)
    });
}
}
wqqew(array)
*/
function drawToConsole (height) {
    for (let i = 1; i <= height; i++) {
        let resaut = "";
        for (let  f= i;  f< height; f++) {
          resaut = resaut + " "
          
        }
      for (let j = 0; j < (2*i-1); j++) {
       resaut = resaut + "*"
      }
      console.log(resaut)
    }

} 
  
  drawToConsole(13)

 /* function drawToConsoleTree (width) {
    for (let q = 0; q <= width; q++) {
        let resau = "";

      for (let k = 0; k <= (q); k++) {
       resau = resau + "()"
      }
      console.log(resau)
    }

} 
  
  drawToConsoleTree(1)*/