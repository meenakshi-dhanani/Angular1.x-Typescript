var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Constants;
(function (Constants) {
    var BusinessObjects;
    (function (BusinessObjects) {
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
        }(BusinessObjects.RuleConstants));
        BusinessObjects.Constant = Constant;
    })(BusinessObjects = Constants.BusinessObjects || (Constants.BusinessObjects = {}));
})(Constants || (Constants = {}));
//# sourceMappingURL=Constant.js.map