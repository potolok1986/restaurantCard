var RestaurantCards = angular.module("restaurant-card",['ngResource']);
RestaurantCards.config(["$resourceProvider","$httpProvider",function ($resourceProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
}]);