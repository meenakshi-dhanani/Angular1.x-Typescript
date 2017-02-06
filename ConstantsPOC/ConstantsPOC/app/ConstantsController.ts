module Constants {

    interface IConstantsModel {
        groups: BusinessObjects.Groups[];
        showResult(): void;
    }

    class ConstantsController implements IConstantsModel {
        groups: BusinessObjects.Groups[];

        static $inject = ['xmlhandler'];
        constructor(private xmlhandler: Service.XMLHandler) {

            this.groups = [];
        
            this.xmlhandler.readXML("RuleConstants.xml").then((grp: BusinessObjects.Groups) => {
                    this.groups.push(grp);
            });
        }

        showResult(): void {
            console.log(this.groups[0].print());
        }
    }

    angular.module("myApp").controller("ConstantsController", ConstantsController);

}