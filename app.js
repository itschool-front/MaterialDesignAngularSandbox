/*window.onload = function (params) {
    document.getElementsByTagName('body')[0].innerHTML = 'app.js';
}*/

(function() {
   
    'use strict';
    
    angular.module('app', ['ngMaterial'])
        .controller('main', main);  

        
    function main(){
        var self = this;
        
        this.greeting = "main controller";
    }

})();