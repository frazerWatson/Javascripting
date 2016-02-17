
describe('Weather', function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  it('Responds to stormy?', function() {
    expect(weather.isStormy).toBe(true||false);

  })

})