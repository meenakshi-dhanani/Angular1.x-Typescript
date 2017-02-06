var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Constants;
(function (Constants) {
    var BusinessObjects;
    (function (BusinessObjects) {
        var BaseXML = (function () {
            function BaseXML(ID) {
                this.ID = ID;
            }
            //Set up additional attributes 
            BaseXML.prototype.init = function () {
                alert("init MethodNotImplemented");
            };
            return BaseXML;
        }());
        var RuleConstants = (function (_super) {
            __extends(RuleConstants, _super);
            function RuleConstants() {
                _super.apply(this, arguments);
            }
            RuleConstants.prototype.delete = function () {
                var index = this.parent.elements.indexOf(this);
                this.parent.elements.splice(index, 1);
            };
            return RuleConstants;
        }(BaseXML));
        BusinessObjects.RuleConstants = RuleConstants;
    })(BusinessObjects = Constants.BusinessObjects || (Constants.BusinessObjects = {}));
})(Constants || (Constants = {}));
//# sourceMappingURL=RuleConstants.js.map