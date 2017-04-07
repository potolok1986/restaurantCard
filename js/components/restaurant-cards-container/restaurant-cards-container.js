RestaurantCards.component("restaurantCardsContainer",{
    template: "<section class=\'restaurant-cards-container\'>\n    <restaurant-card ng-repeat=\'card in $ctrl.cardsList\' card=\'card\'></restaurant-card>\n</section>",
    bindings: {
        cardsList: "<"
    },
    controller: function () {
        
    }
});