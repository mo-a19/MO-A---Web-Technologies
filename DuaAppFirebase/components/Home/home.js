/**
 * Created by the project author on 11-Jun-15.
 */
angular.module('dua.home', [])
    .controller("HomeController", function () {
        var thisScope = this;
        this.name = 'Mo A in home';
        this.arr = [1, 2, 3, 4, 5];

        //var refAll = new Firebase("https://your-firebase-project.firebaseio.com/duaapp/dua/public")
        //
        //this.list = $firebaseArray(refAll);
        this.addval = function () {
            console.log("sssssssssssss");
            thisScope.list.$add({
                Content: "Simple Content 1",
                Counter: 0,
                RequestedOn: "1"/*new Date().toDateString*/,
                RequestedBy: "User"
            });
        }

    })
    .factory("myService", function () {
        var refAll = new Firebase("https://your-firebase-project.firebaseio.com/duaapp/dua/public")

        this.list = $firebaseArray(refAll);
    })