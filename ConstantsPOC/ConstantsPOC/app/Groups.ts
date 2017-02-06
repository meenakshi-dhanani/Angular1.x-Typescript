module Constants{
    export module BusinessObjects {
        interface IGroups {

            groupType: string;
            sfwNodeID: string;

        }

        export class Groups extends RuleConstants implements IGroups {


            groupType: string;
            sfwNodeID: string;


            constructor(ID: string) {
                super(ID);
                this.name = "groups";

                this.init();

                this.elements = [];
                this.parent = null;
            }

            init() {
                this.groupType = "";
                this.sfwNodeID = "";
            }

            print() {

                console.log("<groups ID='" + this.ID + "' groupType='" + this.groupType + "' sfwNodeID='" + this.sfwNodeID + "' >");
                if (this.elements.length == 0)
                    console.log("</groups>");
                else {
                    for (let child of this.elements) {
                        child.print();
                    }

                    console.log("</groups>");
                }

            }


            addGroup(child?: Groups) {

                if (child === undefined) {
                    let groupID = prompt("Please enter ID of the group", "");
                    let child = new Groups(groupID);
                    child.parent = this;
                    this.elements.push(child);
                } else {

                    child.parent = this;
                    this.elements.push(child);
                }
            }

            addConstant(child?: Constant) {
                if (child === undefined) {
                    let constantID = prompt("Please enter ID of the group", "");
                    let child = new Constant(constantID);
                    child.parent = this;
                    this.elements.push(child);
                } else {

                    child.parent = this;
                    this.elements.push(child);
                }
            }

            clear() {

                this.elements.splice(0, this.elements.length);
            }

        }
    }
}