module Constants {
    export module Service {

        export interface IXMLHandler {

            jQueryGroup: JQuery;
            rootGroup: BusinessObjects.Groups;
            readXML(fileName: string): ng.IPromise<BusinessObjects.Groups>;
        }
        export class XMLHandler implements IXMLHandler {

            static $inject = ['$http'];

            jQueryGroup: JQuery;
            rootGroup: BusinessObjects.Groups;

            constructor(private $http: ng.IHttpService) {
            }

            readXML = (fileName: string): ng.IPromise<BusinessObjects.Groups> => {

                return this.$http.get(fileName).then((response: ng.IHttpPromiseCallbackArg<string>) => {

                    let $xmlDoc: XMLDocument = $.parseXML(response.data);
                    this.jQueryGroup = $($xmlDoc).find("groups").first();
                    this.rootGroup = new BusinessObjects.Groups(this.jQueryGroup.attr("ID"));
                    this.parseToGroups(this.jQueryGroup, this.rootGroup, this);
                    return this.rootGroup;
                }, function myError() {
                    console.log("failure");
                });
            }

            parseToGroups(jQueryGroup: JQuery, objGroup: BusinessObjects.Groups, self: XMLHandler) {

                jQueryGroup.children("constant").each(function () {
                    objGroup.addConstant(new BusinessObjects.Constant($(this).attr("ID")));

                });

                jQueryGroup.children("groups").each(function () {
                    let childGrp = new BusinessObjects.Groups($(this).attr("ID"));
                    self.parseToGroups($(this), childGrp, self);
                    objGroup.addGroup(childGrp);

                });
            }
        }
    }
    angular.module("myApp").service("xmlhandler", Service.XMLHandler);
}