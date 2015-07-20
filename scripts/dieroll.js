module.exports = function (robot) {

  var roll = function (numDice, numSides) {
    var total = 0;
    for( int i = 0; i < numDice; i++ ) {
      total += Math.floor((Math.random() * numSides) + 1);
    }
    return total;
  };

  robot.respond(/roll( me)? (.*)d(.*)/i, function (res) {
      res.send(roll(res.match[2], res.match[3]));
  });

};
