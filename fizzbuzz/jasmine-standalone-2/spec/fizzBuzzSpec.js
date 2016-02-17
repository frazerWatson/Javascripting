describe('FizzBuzz', function() {
  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

describe('multiples of 3', function(){
  it('fizzes for 3', function() {
   expect(fizzbuzz.fizz(3)).toEqual('Fizz');
 });

});

describe('multiples of 5', function(){
  it('buzzes for 5', function() {
   expect(fizzbuzz.fizz(5)).toEqual('Buzz');
 });

});

describe('multiples of 15', function(){
  it('fizzes for 15', function() {
   expect(fizzbuzz.fizz(15)).toEqual('FizzBuzz');
 });

});
 

 


// var player;
//   var song;

//   beforeEach(function() {
//     player = new Player();
//     song = new Song();
//   });


 // it("should be able to play a Song", function() {
 //    player.play(song);
 //    expect(player.currentlyPlayingSong).toEqual(song);

 //    //demonstrates use of custom matcher
 //    expect(player).toBePlaying(song);
 //  });



});