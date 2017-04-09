RestaurantCards.component("restaurantCardsContainer",{
    template: "<section class=\'restaurant-cards-container\' vs-repeat vs-autoresize  vs-excess=\'1\'>   \n    <article class=\"card\" ng-repeat=\'card in $ctrl.cardsList\'>\n        <div class=\"card__container\">\n            <div class=\"card__header\">\n                <figure class=\"card__logo\">\n                    <img  ng-src=\"{{::card.Logo}}\"  alt=\"{{::card.Name}}\">\n                </figure>\n                <figcaption class=\"card__info\">\n                    <p class=\"card__name\" ng-bind=\"::card.Name\"></p>\n                    <p class=\"card__cuisines\" ng-bind=\"$ctrl.cuisinesReplace(card.Cuisines)\"></p>\n                    <div class=\"card__rating-wrap\">\n                        <card-working-time class=\"card__working-time\" time=\"{{card.WorkingTime}}\"></card-working-time>\n                        <div class=\"card__rating\">\n                            <div class=\"icon  icon__rating-{{card.PositiveReviewsPercent > 50 ? \'good\' : \'bad\'}}\"></div>\n                            <span ng-bind=\"::card.PositiveReviewsPercent + \'%\'\"></span>\n                        </div>\n                    </div>\n\n                </figcaption>\n            </div>\n            <div class=\"card__footer\">\n                <div class=\"card__icon-container\">\n                    <div class=\"icon icon__min-cost\"></div>\n                    &nbsp;ОТ&nbsp;\n                    <span ng-bind=\"::card.MinCost + \' \u20BD\'\" class=\"card__value\"></span>\n                </div>\n                <div class=\"card__icon-container\">\n                    <div class=\"icon icon__delivery-cost\"></div>\n                    <span ng-bind=\"::card.DeliveryCost + \' \u20BD\'\" class=\"card__value\"></span>\n                </div>\n                <div class=\"card__icon-container\">\n                    <div class=\"icon icon__delivery-time\"></div>\n                    <span ng-bind=\"::card.DeliveryTime + \' мин.\'\" class=\"card__value\"></span>\n                </div>\n            </div>\n            <card-status card=\"::card\" class=\"card__status \"></card-status>\n        </div>\n    </article>\n</section>",
    bindings: {
        cardsList: "<"
    },
    controller: function () {
        this.cuisinesReplace = function (cuisines) {
            return cuisines.replace(/\//g,",")
        }
    }
});