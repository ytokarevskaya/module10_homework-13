/* Задание 1.

Напишите программу, которая работала бы следующим образом: в prompt вводится значение. С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, 
затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
Если это число, то вывести в консоль чётное оно или нечётное.
Если передано не число, выведите: «Упс, кажется, вы ошиблись».
*NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения. 
*/

function questOne(arg){
    try{
        arg = +arg
        if(typeof arg === 'number' && Number.isNaN(arg) === false) {
          if (arg % 2 === 0) {
            console.log(`Число ${arg} четное!`)
          } else{
            console.log(`Число ${arg} нечетное!`)
          }
        } else {
          console.log('Упс, кажется, вы ошиблись')
        }
    } catch(err) {
      console.log(err)
    }
  }
  
  questOne('прив')
  questOne(423)
  questOne(prompt('Введите значение:', ''))