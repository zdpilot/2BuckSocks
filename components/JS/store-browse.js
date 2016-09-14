(function () {
    angular.module('myApp')
        .component('storeBrowse', {
            templateUrl: 'components/HTML/store-browse.html',
            controller: storeBrowseController
        });
    

    function storeBrowseController( ngCart ) {
        ngCart.setTaxRate(7.5);
        ngCart.setShipping(2.99);
        
        var self = this;
        
        self.showCart = showCart;
        self.isNotVisible = false;
        self.isVisible = true;
        
        function showCart() {
            self.isNotVisible = self.isNotVisible ? false : true;
            self.isVisible = self.isVisible ? false : true;
        }
        
        
    }
})();



// var myApp = angular.module('myApp',['ngCart']);
//
// myApp.controller ('myCtrl', ['$scope', '$http', 'ngCart', function($scope, $http, ngCart) {
//     ngCart.setTaxRate(7.5);
//     ngCart.setShipping(2.99);
// }]);