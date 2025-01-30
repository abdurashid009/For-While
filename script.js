let numbers = [
    2,4,9,10,45,67,8,90 
]
console.log(numbers, "Boshlangandagi array")
let evenNumbers = []
  

for(i = 0 ; i <numbers.length ; i++ ){
    if (numbers[i] % 2  === 0){
        evenNumbers.push(numbers[i])
    }
}
console.log(evenNumbers, 'Juft sonlarga ajratilgan array')
