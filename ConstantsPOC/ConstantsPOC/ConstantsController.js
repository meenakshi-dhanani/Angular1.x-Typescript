/// <reference path="scripts/typings/angularjs/angular.d.ts" />
angular.module("myApp", []).controller("ConstantsController", [function () {
        var rootGroups = new CustomXML.Groups("NeoConstant");
        rootGroups.addGroup(new CustomXML.Groups("DepositTapeStatus"));
        rootGroups.elements[0].addConstant(new CustomXML.Constant("Balanced"));
        rootGroups.elements[0].addConstant(new CustomXML.Constant("Confirmed_with_Bank"));
        rootGroups.elements[0].addConstant(new CustomXML.Constant("Review"));
        //rootGroups.elements[0].elements[2].delete(2);
        rootGroups.elements[0].clear();
        rootGroups.print();
    }]);
//# sourceMappingURL=ConstantsController.js.map