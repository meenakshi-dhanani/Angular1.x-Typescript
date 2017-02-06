
module Constants{
    export module BusinessObjects {

        interface IConstant {

            Value: string;
            sfwDataType: string;
            Description: string;
        }

        export class Constant extends RuleConstants implements IConstant {

            Value: string;
            sfwDataType: string;
            Description: string;

            constructor(ID: string) {
                super(ID);
                this.name = "constant";

                this.init();

                this.elements = null;
                this.parent = null;
            }

            init() {
                this.Value = "";
                this.sfwDataType = "";
                this.Description = "";
            }


            print() {
                console.log("<constant ID='" + this.ID + "' Value='" + this.Value + "' sfwDataType='" + this.sfwDataType + "' Description='" + this.Description + "' />");
            }

            findAllReferences() { }



        }

    }
}