// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    return Math.abs(street-42)
  }
console.log(distanceFromHqInBlocks(3))

function distanceFromHqInFeet (street) {
  return Math.abs((street-42)*264)
}
console.log (distanceFromHqInFeet (45))

function distanceTravelledInFeet (start, destination) {
  return Math.abs((start-destination)*264 )
}
console.log (distanceTravelledInFeet (30,35))

function calculatesFarePrice(start, destination) {
  if ((Math.abs(destination-start)*264)<= 400) {
    return 0
  }
  else if ((Math.abs(destination-start)*264)>400 && (Math.abs(destination-start)*264)<=2000) 
  {
      return ((Math.abs(destination-start)*264)-400)*0.02
  }
  else if ((Math.abs(destination-start)*264)>2000 && (Math.abs(destination-start)*264)<=2500) 
  {return 25 }
   else if ((Math.abs(destination-start)*264)>2500)
   {return'cannot travel that far'}
  
}
