/// <reference path="scripts/lib/typings/angular.d.ts" />
var CustomXML;
(function (CustomXML) {
    var XMLHandler = (function () {
        function XMLHandler($http) {
            this.$http = $http;
            this.$http = $http;
            this.objGroup = new CustomXML.Groups("");
        }
        XMLHandler.prototype.readXML = function (fileName) {
            var self = this;
            this.$http.get(fileName).then(function (response) {
                console.log(response.data);
                // let $xmlDoc: XMLDocument = $.parseXML(response.data);
                //   self.jQueryGroup = $($xmlDoc).find("groups").first();
                //      self.objGroup = new CustomXML.Groups("new");
                //this.parseToGroups(this.jQueryGroup, this.objGroup);
            }, function myError() {
                console.log("failure");
            });
        };
        XMLHandler.prototype.parseToGroups = function (jQueryGroup, objGroup) {
            /*
            jQueryGroup.children("constants").each(function () {
                //objGroup.addConstant(new Constant(this.attr

                console.log($(this).attr("ID"));
            });


            jQueryGroup.children("groups").each(function () {
                //let childGrp = new Groups(this.attr("ID"));
                //parseXML(this, childGrp);
                //parentT.addGroup(childGrp);
                console.log($(this).attr("ID"));
            });
            
            */
        };
        XMLHandler.$inject = ['$http'];
        return XMLHandler;
    }());
    CustomXML.XMLHandler = XMLHandler;
    var XMLController = (function () {
        function XMLController(xmlhandler) {
            this.xmlhandler = xmlhandler;
            this.xmlhandler.readXML("RuleConstants.xml");
        }
        XMLController.$inject = ['xmlhandler'];
        return XMLController;
    }());
    CustomXML.XMLController = XMLController;
    var app = angular.module("myApp", []);
    app.service('xmlhandler', XMLHandler);
    app.controller('myCtrl', XMLController);
})(CustomXML || (CustomXML = {}));
//# sourceMappingURL=XMLHandler.js.map