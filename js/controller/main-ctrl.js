RestaurantCards.controller("main-ctrl", ["$resource","$http", function ($resource) {
    var main = this;
    $resource("https://chibbistest.ru/api/restaurants").query(function (data) {
        console.log(data[0]);
        main.cardsList = data
    })
}]);