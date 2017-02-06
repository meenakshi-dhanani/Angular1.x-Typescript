var CustomXML;
(function (CustomXML) {
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
    CustomXML.BaseXML = BaseXML;
})(CustomXML || (CustomXML = {}));
//# sourceMappingURL=BaseXML.js.map