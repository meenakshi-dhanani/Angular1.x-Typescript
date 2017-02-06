var Constants;
(function (Constants) {
    var ConstantsController = (function () {
        function ConstantsController(xmlhandler) {
            var _this = this;
            this.xmlhandler = xmlhandler;
            this.groups = [];
            this.xmlhandler.readXML("RuleConstants.xml").then(function (grp) {
                _this.groups.push(grp);
            });
        }
        ConstantsController.prototype.showResult = function () {
            console.log(this.groups[0].print());
        };
        ConstantsController.$inject = ['xmlhandler'];
        return ConstantsController;
    }());
    angular.module("myApp").controller("ConstantsController", ConstantsController);
})(Constants || (Constants = {}));
//# sourceMappingURL=ConstantsController.js.map