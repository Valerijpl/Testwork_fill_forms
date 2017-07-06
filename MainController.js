app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Search for flights !';
  $scope.action_status = 'flights_form';
  $scope.flights = [];
  $scope.hotels = [];
  $scope.cars = [];
  $scope.clearFlightForm = function(flight){
    flight.start_date = '';
    flight.end_date = '';
    flight.from = '';
    flight.to = '';
  };
  $scope.clearHotelForm = function(hotel){
    hotel.start_date = '';
    hotel.end_date = '';
    hotel.amenities = '';
    hotel.location = '';
  };
  $scope.clearCarForm = function(car){
    car.start_date = '';
    car.end_date = '';
    car.type = '';
    car.location = '';
  };
  $scope.searchFlights = function(flight){
    $scope.flights.push(flight);
    $scope.action_status = 'flights_search';
  };
  $scope.searchHotels = function(hotel){
    $scope.hotels.push(hotel);
    $scope.action_status = 'hotels_search';
  };
  $scope.searchCars = function(car){
    $scope.cars.push(car);
    $scope.action_status = 'cars_search';
  };
  $scope.selectFlights = function(){
    $scope.status = 'flights';
    $scope.action_status = 'flights_form';
    $scope.title = 'Search for flights !';
  };
  $scope.selectHotels = function(){
    $scope.status = 'hotels';
    $scope.action_status = 'hotels_form';
    $scope.title = 'Search for hotels !';
  };
  $scope.selectCars = function(){
    $scope.status = 'cars';
    $scope.action_status = 'cars_form';
    $scope.title = 'Search for cars !';
  };
  $scope.RemoveFlight = function(flight){
  var index = $scope.flights.indexOf(flight);
	$scope.flights.splice( index, 1 )
  };
  $scope.RemoveHotel = function(hotel){
  var index = $scope.hotels.indexOf(hotel);
  $scope.hotels.splice( index, 1 )
  };
  $scope.RemoveCar = function(car){
  var index = $scope.cars.indexOf(car);
  $scope.cars.splice( index, 1 )
  };
}]);

