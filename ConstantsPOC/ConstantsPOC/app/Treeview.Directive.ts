module CustomXML {
    module Directive {
       

        export class TreeView implements ng.IDirective {
            
            static instance(): ng.IDirective {
                return new TreeView;
            }

            restrict: string = "E";

            template: string = ["{{ele.ID}}", "<div ng-if=\"ele.name==='groups'\"><button ng-click=\"ele.addGroup()\">Add Groups</button>",
                "<button ng-click=\"ele.addConstant()\">Add Constants</button>",
                "<button ng-click=\"ele.clear()\">Clear</button></div>",
                "<button ng-if=\"ele.ID!== 'NeoConstant'\" ng-click=\"ele.delete()\">Delete</button>",
                "<ul><li ng-repeat=\"ele in ele.elements\"><treeview></treeview></li></ul>"].join(' ');

        }
    }

    angular.module("myApp").directive("treeview", Directive.TreeView.instance);
}