var CustomXML;
(function (CustomXML) {
    var Directive;
    (function (Directive) {
        var TreeView = (function () {
            function TreeView() {
                this.restrict = "E";
                this.template = ["{{ele.ID}}", "<div ng-if=\"ele.name==='groups'\"><button ng-click=\"ele.addGroup()\">Add Groups</button>",
                    "<button ng-click=\"ele.addConstant()\">Add Constants</button>",
                    "<button ng-click=\"ele.clear()\">Clear</button></div>",
                    "<button ng-if=\"ele.ID!== 'NeoConstant'\" ng-click=\"ele.delete()\">Delete</button>",
                    "<ul><li ng-repeat=\"ele in ele.elements\"><treeview></treeview></li></ul>"].join(' ');
            }
            TreeView.instance = function () {
                return new TreeView;
            };
            return TreeView;
        }());
        Directive.TreeView = TreeView;
    })(Directive || (Directive = {}));
    angular.module("myApp").directive("treeview", Directive.TreeView.instance);
})(CustomXML || (CustomXML = {}));
//# sourceMappingURL=Treeview.Directive.js.map