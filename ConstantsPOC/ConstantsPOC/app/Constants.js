var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CustomXML;
(function (CustomXML) {
    var Constant = (function (_super) {
        __extends(Constant, _super);
        function Constant(ID) {
            _super.call(this, ID);
            this.name = "constant";
            this.init();
            this.elements = null;
            this.parent = null;
        }
        Constant.prototype.init = function () {
            this.Value = "";
            this.sfwDataType = "";
            this.Description = "";
        };
        Constant.prototype.print = function () {
            console.log("<constant ID='" + this.ID + "' Value='" + this.Value + "' sfwDataType='" + this.sfwDataType + "' Description='" + this.Description + "' />");
        };
        Constant.prototype.findAllReferences = function () { };
        return Constant;
    }(CustomXML.RuleConstants));
    CustomXML.Constant = Constant;
    var Groups = (function (_super) {
        __extends(Groups, _super);
        function Groups(ID) {
            _super.call(this, ID);
            this.name = "groups";
            this.init();
            this.elements = [];
            this.parent = null;
        }
        Groups.prototype.init = function () {
            this.groupType = "";
            this.sfwNodeID = "";
        };
        Groups.prototype.print = function () {
            console.log("<groups ID='" + this.ID + "' groupType='" + this.groupType + "' sfwNodeID='" + this.sfwNodeID + "' >");
            if (this.elements.length == 0)
                console.log("</groups>");
            else {
                for (var _i = 0, _a = this.elements; _i < _a.length; _i++) {
                    var child = _a[_i];
                    child.print();
                }
                console.log("</groups>");
            }
        };
        Groups.prototype.addGroup = function (child) {
            if (child === undefined) {
                var groupID = prompt("Please enter ID of the group", "");
                var child_1 = new Groups(groupID);
                child_1.parent = this;
                this.elements.push(child_1);
            }
            else {
                child.parent = this;
                this.elements.push(child);
            }
        };
        Groups.prototype.addConstant = function (child) {
            if (child === undefined) {
                var constantID = prompt("Please enter ID of the group", "");
                var child_2 = new Constant(constantID);
                child_2.parent = this;
                this.elements.push(child_2);
            }
            else {
                child.parent = this;
                this.elements.push(child);
            }
        };
        Groups.prototype.clear = function () {
            this.elements.splice(0, this.elements.length);
        };
        return Groups;
    }(CustomXML.RuleConstants));
    CustomXML.Groups = Groups;
})(CustomXML || (CustomXML = {}));
//# sourceMappingURL=Constants.js.map