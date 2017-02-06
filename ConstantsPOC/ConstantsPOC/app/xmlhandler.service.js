var Constants;
(function (Constants) {
    var Service;
    (function (Service) {
        var XMLHandler = (function () {
            function XMLHandler($http) {
                var _this = this;
                this.$http = $http;
                this.readXML = function (fileName) {
                    return _this.$http.get(fileName).then(function (response) {
                        var $xmlDoc = $.parseXML(response.data);
                        _this.jQueryGroup = $($xmlDoc).find("groups").first();
                        _this.rootGroup = new Constants.BusinessObjects.Groups(_this.jQueryGroup.attr("ID"));
                        _this.parseToGroups(_this.jQueryGroup, _this.rootGroup, _this);
                        return _this.rootGroup;
                    }, function myError() {
                        console.log("failure");
                    });
                };
            }
            XMLHandler.prototype.parseToGroups = function (jQueryGroup, objGroup, self) {
                jQueryGroup.children("constant").each(function () {
                    objGroup.addConstant(new Constants.BusinessObjects.Constant($(this).attr("ID")));
                });
                jQueryGroup.children("groups").each(function () {
                    var childGrp = new Constants.BusinessObjects.Groups($(this).attr("ID"));
                    self.parseToGroups($(this), childGrp, self);
                    objGroup.addGroup(childGrp);
                });
            };
            XMLHandler.$inject = ['$http'];
            return XMLHandler;
        }());
        Service.XMLHandler = XMLHandler;
    })(Service = Constants.Service || (Constants.Service = {}));
    angular.module("myApp").service("xmlhandler", Service.XMLHandler);
})(Constants || (Constants = {}));
//# sourceMappingURL=XMLHandler.Service.js.map