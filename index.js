const { nextISSTimesForMyLocation } = require('./iss');


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error)
  }
  for (let passes of passTimes) {
    d = new Date(0);
    d.setUTCSeconds(passes['risetime'])
    console.log(`Next pass at ${d} for ${passes['duration']} seconds!`)
  }
})

// fetchMyIP((error,ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log(`It worked! Returned IP:` , ip);
// });

// fetchCoordsByIP('50.66.132.237', (error, coord) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned Coordinates:' , coord);
// });

// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, times) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned times:', times);
// });

