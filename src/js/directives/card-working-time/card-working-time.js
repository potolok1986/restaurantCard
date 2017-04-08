RestaurantCards.directive('cardWorkingTime',function () {
    return {
        scope:{
            time : "@"
        },
        link : function postLink($scope, element) {
            var text = $scope.time.split(" - "),
                backgroundClass = 'card__working-time-';
            if(text.length > 1){
                text = "С "+text[0] + " ДО " + text[1];
                backgroundClass += 'open';
            }else{
                backgroundClass += 'round';
            }
            element.addClass(backgroundClass).text(text)
        }
    }
});