module Constants {
    export module BusinessObjects {
        abstract class BaseXML {

            ID: string;

            constructor(ID: string) {
                this.ID = ID;
            }
            //Set up additional attributes 
            init() {
                alert("init MethodNotImplemented");
            }

        }


        export abstract class RuleConstants extends BaseXML {

            name: string;
            elements: any[]; // allow to push both groups and constants 
            parent: RuleConstants;

            delete() {

                let index = this.parent.elements.indexOf(this);
                this.parent.elements.splice(index, 1);
            }

        }
    }
}