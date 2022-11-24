// Code your solution in this file!

const scuberHquarter = 42;
const manhattanBloc6kFeet = 264;

// distanceFromHqInBlocks function
function distanceFromHqInBlocks(sumTotal){
     let blocks;
     if(sumTotal > scuberHquarter){
        blocks = sumTotal - scuberHquarter;
     } else{
        blocks = scuberHquarter - sumTotal;
     }

     return blocks;

}

function distanceFromHqInFeet(distance){
   return(distanceFromHqInBlocks(distance)* 264);
}

function distanceTravelledInFeet(start, destination) {
    if(destination > start){
       return (destination - start)* manhattanBloc6kFeet;
     } else{
       return (start - destination)* manhattanBloc6kFeet;
     }

}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance < 400) {
        return distance * 0;
    } else if (distance >= 400 && distance < 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }

}