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



function sortHighToLow(arr){
    return arr.sort((a,b) => b.price - a.price)
}

console.log(sortHighToLow([{id:1, price:50},{id:2, price:0},{id:3, price:500}]))