RestaurantCards.component("restaurantCardsContainer",{
    template: "<section class='restaurant-cards-container'><restaurant-card ng-repeat='card in $ctrl.cardsList' card='card'></restaurant-card></section>",
    bindings: {
        cardsList: "<"
    },
    controller: function () {
        
    }
});