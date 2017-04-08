RestaurantCards.directive("cardStatus", function () {
    return {
        scope: {
            card: "="
        },
        link: function postLink($scope, element) {
            var card = $scope.card,
                i,
                statusList = {
                    IsNew: "новый",
                    HasPaymentForPoints:"за баллы",
                    HasSails: "акция"
                };
            for(i in statusList){
                if(card[i]){
                    element.addClass("card__status-" + i).text(statusList[i]);
                    break;
                }
            }

        }
    }
});