//const canvas = document.querySelector('canvas')
//const c = canvas.getContext('2d')

function triangleNumDivisors(amount) {
   var currentTriangleNum = amount * 2
   while (divisorsFound < amount) {
      divisorsFound = 0
      tryUpTo = Math.ceil((currentTriangleNum / 2) + 2)
      for (let divisor = 1; divisor < tryUpTo; divisor++) {
         if (currentTriangleNum % divisor === 0) {
            divisorsFound++
         }
      }
      currentTriangleNum++
      Console.log(currentTriangleNum, divisorsFound)
   }
   document.getElementById("answer").innerHTML = currentTriangleNum;
}


//canvas.width = innerWidth
//canvas.height = innerHeight



//class Player {
   
//}