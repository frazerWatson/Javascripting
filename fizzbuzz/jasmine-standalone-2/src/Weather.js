function Weather() {

}
  Weather.prototype.isStormy = function() {
    Math.floor((Math.random() * 8) +1);
  };