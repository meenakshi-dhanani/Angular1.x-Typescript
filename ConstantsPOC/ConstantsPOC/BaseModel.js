var CustomXML;
(function (CustomXML) {
    var BaseXML = (function () {
        function BaseXML(ID) {
            this.ID = ID;
        }
        BaseXML.prototype.init = function () {
            alert("initMethodNotImplemented");
        };
        return BaseXML;
    }());
    CustomXML.BaseXML = BaseXML;
})(CustomXML || (CustomXML = {}));
