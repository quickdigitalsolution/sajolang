/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myApp = angular.module("cakemania", ["ngRoute"]);
myApp.config(function($routeProvider) {
    $routeProvider.
            when("/home", {
                templateUrl: "home.html",
                controller: "navigation"
            })
            .when("/about", {
                templateUrl: "about.html"
            })
            .when("/category/:id", {
                templateUrl: "eachcategory.html",
                controller: "categorydetails"
            })
            .when("/category/subcategory/:subid", {
                templateUrl: "DetailedDescription.html",
                controller: "detaileddescriptioncake"
            })
            .otherwise({
                redirectTo: "/"
            });
});
myApp.controller('navigation', function() {

});
myApp.controller("displaycategories", function($scope, $http) {
    $scope.showData = function() {

        $scope.curPage = 0;
        $scope.pageSize = 4;
        $http.get("json.json").success(function(response) {
            $scope.datalists = response.records;
        });
        $scope.numberOfPages = function() {
            return Math.ceil($scope.datalists.length / $scope.pageSize);
        };
    }

});
myApp.controller("categorydetails", function($scope, $http, $routeParams, $rootScope) {

    $scope.showsubData = function() {

        $scope.curPage = 0;
        $scope.pageSize = 2;

        $http({
            url: "json.json",
            params: {id: $routeParams.id},
            method: "get"
        }).success(function(response) {
            //var x=parseInt(idd.toString().substring(3,4))-1;
            // var x = idd - 1;
            //$scope.datalists1 = response.records[x].batters;
            funv(response);
            //alert(response.records[x].batters.length );
            //$scope.datalists = response.records[x].batters;
        });

        var funv = function(respo) {


            var k = respo.records.filter(function(el) {
                return el.id === $routeParams.id;
            });
            //console.log(k.batters.name);
            var out = [];
            for (var i = 0; i < k[0].batters.length; i++) {
                out.push({id: k[0].batters[i].id, name: k[0].batters[i].name, price: k[0].batters[i].price, weight: k[0].batters[i].weight});
            }



            //k[0].name;
            //$scope.datalists1 = k.batters[0];
            $scope.cakesutypes = out;
            $rootScope.subitemslist = out;
//$scope.datalists1 = k.batters[0];
        }

        $scope.numberOfPages1 = function() {

            return Math.ceil($scope.cakesutypes.length / $scope.pageSize);
        };

    }
});
myApp.controller("detaileddescriptioncake", function($scope, $routeParams,$rootScope) {

    var out=$rootScope.subitemslist;
    var singlelistout=[];
    debugger;
    for (var i = 0; i < out.length; i++) {

        if (out[i].id === $routeParams.subid)
        {
            singlelistout.push({id:out[i].id,name:out[i].name,price:out[i].price,weight:out[i].weight,});
            //console.log(out[i].name +" "+out[i].price+ " "+out[i].weight);
            
        }
        //       out.push({id:k[0].batters[i].id,name:k[0].batters[i].name,price:k[0].batters[i].price,weight:k[0].batters[i].weight});
    }


    //k[0].name;
    //$scope.datalists1 = k.batters[0];
    //$scope.cakesutypesfulldesc = out;

$scope.cakesutypesfulldesc = singlelistout;

});
myApp.filter('pagination', function()
{
    return function(input, start)
    {
        start = +start;
        return input.slice(start);
    };
});
