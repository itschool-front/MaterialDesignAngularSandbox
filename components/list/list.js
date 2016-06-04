//components/list.js/
(function () {
    
    angular.module('app')
        .controller('list', list);
        
    function list() {
        var self = this;
        
        self.greeting = "list controller";    
    }
    
})();