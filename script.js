/* 1 */


// function showRating(num){
//     let ratings = ''
//     for (i=0;i<Math.floor(num);i++){
//         ratings += '*'
//         if (i !== Math.floor(num) - 1){
//             ratings += ' '
//         }
//     }
//     if (!Number.isInteger(num)){
//         ratings += ' .'
//     }
//     return ratings
// }

// console.log(showRating(4))


/* 2 */


// function sortLowToHigh(arr){
//     return arr.sort((a,b) => a-b);
// }

// console.log(sortLowToHigh([1,5,0,10,4]))


/* 3 */



// function sortHighToLow(arr){
//     return arr.sort((a,b) => b.price - a.price)
// }

// console.log(sortHighToLow([
//     {id:1, price:50},
//     {id:2, price:0},
//     {id:3, price:500}
// ])
// )


/* 4 (Fireship)*/


// // L1
// console.log('Sync 1')

// // L2
// setTimeout(_ => console.log('to 2'), 0)

// // L3
// console.log('sync 3')

// // L4
// setTimeout(_ => console.log('to 4'), 0)


/* 5 */


console.log('person1: shows ticket')
console.log('person2: shows ticket')

const promiseWifeTick = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('ticket')
    },3000)
})

const getPopcorn = promiseWifeTick.then((t) => {
    console.log('husband: we should in')
    console.log('wife: no hungry')
    return new Promise((resolve,reject) => resolve(`${t} popcorn`))
})

const getButter = promiseWifeTick.then((t) => {
    console.log('husband: we should in')
    console.log('wife: no hungry butter')
    return new Promise((resolve,reject) => resolve(`${t} butter`))
})

getButter.then((t)=> console.log(t))

console.log('person4: shows ticket')
console.log('person5: shows ticket')