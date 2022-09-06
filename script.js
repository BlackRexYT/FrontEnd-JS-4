/* 1 */


function showRating(num){
    let ratings = ''
    for (i=0;i<4;i++){
        if (i === 4){
            ratings += '*'
        }
        else{
        }
        ratings += '* '
    }
    return ratings
}

console.log(showRating(4))