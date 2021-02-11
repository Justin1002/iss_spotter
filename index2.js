const {nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    for (const passes of passTimes) {
      let d = new Date(0);
      d.setUTCSeconds(passes['risetime']);
      console.log(`Next pass at ${d} for ${passes['duration']} seconds!`);
    }
  })

  .catch((error) => {
    console.log("It didnt work: ", error.message);
  });