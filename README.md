# Migrating Angular 1.x application to Typescript

### Why Typescript?
Javascript code usually ends up in tons of files each having long lines of sometimes(rather mostly) repitive code. Typescript allows our application code to be clean, in separate files and use object oriented features and also allows static typing.
Angular 2 is written in Typescript. A good way of migrating our application to Angular 2 would be to first move few parts of a Javascript to Typescript.

### Project

I have tried to move a part of an application, an independent module of a large project to Typescript. I haven't converted all parts of the original Javascript to Typescript, but some basic functionality, that's one way to go about it.

Constants Controller operates in the following manner
 - Receives a XML data from an Angular service
 - Creates a treeview based on the XML object
 - Allows the user to manipulate elements and their properties to using the UI
 - Calls a service that saves data back to XML
 

I have adopted the following approach to move parts of the code to Typescript:
 - Put the controller in a spearate Typescript class
 - Built business objects in Typescript that represent the XML data
 - Parsing the XML data from service to Typescript business objects
 - Using, business objects methods to manipulate the data
 - Written a treeview directive as a separate Typescript class
 
### Implementation Details(using Visual Studio IDE)

Tools -> Extensions and Updates -> Install Typescript for Microsoft Visual Studio
For AngularJS, since we want static typing support, we download the respective typings files(t.ds ie. Type Definition files) from Definitely Typed.

```
PM> Install-Package angularjs.Typescript.DefinitelyTyped
```

Now, create new Typescript files. If you do not see the Javascript file after creating the Typescript file, [check for solution](#the-tricky-parts)

Typescript modules can have code spread across files, making it easier to maintain. Since, Typescript is a superset of Javascript, all valid Javascript is valid Typescript. So we can move to Typescript gradually.

A headstart would usually be renaming .ts file to .js and adding typechecking for Javascript functions. 

### The Tricky Parts

 - **Cannot find automatically created .js file**
 In Visual Studio, Solution Explorer, click on Show All Files icon, and include the .js file in the project. Now unload project, edit .csproj file and include the following:

```
<Content Include="Example.js">
      <DependentUpon>Example.ts</DependentUpon>
</Content>
```

 - **Cannot see $scope! Is this Angular?**
In the Controller class, all members can be referred as this.member, you declare the controller below the class, if you declare it above the class since the class hasn't been defined, Angular won't be able to create an instance of ConstantsController

```
angular.module("myApp").controller("ConstantsController",Constants.ConstantsController)
```

You can bind data to your controller(with alias), in the following manner:

```
<div ng-controller="ConstantsController as vm">
{{vm.member}}
</div>
```
Without alias, check out the [link](https://gist.github.com/esfand/9569523#databinding-without-alias)

 - **How to use $scope built in methods? eg. evalAsync**
You can inject $scope, in the following manner,
```
class ConstantsController{
    static inject = ['$scope'];
    constructor($scope: ng.IScope){
        $scope.evalAsync(function(){});
    }
}
```

 - **"this" is the fix!**
Inside a function when you refer to this. , you get no intellisense support, if you want to refer to the class members inside a function, use the ECMAScript6 way: [arrow functions](http://www.2ality.com/2012/04/arrow-functions.html)

 - **Object doesn't support this action**
Sometimes, this is because, the respective js file links have not been added to the HTML file, or they are in incorrect order. Check the following [issue](https://forums.asp.net/t/2026098.aspx?+JavaScript+runtime+error+Object+doesn+t+support+property+or+method+dialog+)
Also, even after adding links you face the same error, in that case check if you're nots still using the cached HTML file.


### The Good Parts

- **Interfaces**
We can extend interfaces(eg.IScope), create interfaces for our classes, helps a lot in static type checking.
 - **Constructor**
In a Javascript Angular controller, we might have to scroll through the file to look for the sequence of excecution, for Typescript we just have to take a look at the constructor.
 - **No Pollution of Global Scope**
Typescript has access specifiers, private, public, protected. In addition, we can use **let** instead of **var** for local scope.
 - **Can keep old code**
You do not have to redo everything entirely, Typescript can use your old Javascript code files.
 - **Clean Code**
 - You can create **business objects**!


### Tips and Tricks

 - Organize your code into **modules**
 - Let your function parameters be **type-checked**
 - Add, **let**, **const** and **arrow** functions
 - **Services** and **controllers** can be turned into classes
 - **Reduce** contamination of **global** scope
 
