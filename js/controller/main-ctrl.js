RestaurantCards.controller("main-ctrl", ["$resource", function ($resource) {
    var main = this;
    $resource("https://chibbistest.ru/api/restaurants").query(function (data) {
        main.cardsList = data;
        main.loadingComplite = true;
    })
}]);