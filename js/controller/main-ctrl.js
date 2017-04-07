RestaurantCards.controller("main-ctrl", ["$resource","$http", function ($resource, $http) {
    var main = this;
    main.test = "hello word";
   //https://chibbistest.ru/api/restaurants
    $resource("response.json",{

    }).get(function (data) {
        main.cardsList = data.data
    })
}]);