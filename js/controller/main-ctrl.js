RestaurantCard.controller("main-ctrl", ["$resource","$http", function ($resource,$http) {
    var main = this;
    main.test = "hello word";
   //https://chibbistest.ru/api/restaurants
    $resource("https://chibbistest.ru/api/restaurants").get(function (data) {

    })
}]);