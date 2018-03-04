var bikeLog = [9, 1, 2, 7, 2, 1, 1, 1, 2, 1, 2, 1, 9];
var checkedOutBikes = [];

for (var i=0; i<bikeLog.length; i++) {
  var currentBike = bikeLog[i];
  var foundBike = checkedOutBikes.indexOf(currentBike);

    if (foundBike !== -1) {
      checkedOutBikes.splice(foundBike, 1);
    } else {
      checkedOutBikes.push(currentBike);
    }
    console.log(checkedOutBikes);
}
