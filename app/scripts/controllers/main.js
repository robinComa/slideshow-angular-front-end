'use strict';

angular.module('HTML5PresentationApp')
    .controller('MainCtrl', function ($scope, $resource, RevealFactory) {

        var sections = [];
        $scope.sections = [];

        $scope.getAllSections = function(){
            if(sections.length == 0){
                //TODO recursive
                for (var i in $scope.sections){
                    sections.push($scope.sections[i]);
                    for(var j in $scope.sections[i].sections){
                        $scope.sections[i].sections[j].isSubSection = true;
                        sections.push($scope.sections[i].sections[j]);
                        for(var k in $scope.sections[i].sections[j].sections){
                            $scope.sections[i].sections[j].sections[k].isSubSection = true;
                            sections.push($scope.sections[i].sections[j].sections[k]);
                        }
                    }
                }
            }
            return sections;
        };

        var Config = $resource('presentation-config.json', {});
        Config.get({}, function(config) {

            $scope.title = config.title;
            var MAX_LEFT = config.maxLeft;
            $scope.sections = config.sections;
            RevealFactory.setSections($scope.sections);

            $scope.navigateLeft = function(){
                RevealFactory.navigateLeft();
            };

            $scope.navigate = function(id){
                RevealFactory.navigate(id);
            };

            $scope.isActive = function(id){
                return RevealFactory.getCurrentSlide() == id;
            };

            $scope.navigateRight = function(){
                RevealFactory.navigateRight();
            };

            $scope.getTitle = function(id){
                var MAX = 23;
                var title = $scope.getAllSections()[id].title;
                return title.length > MAX ? title.substring(0, MAX - 3) + '...' : title;
            };

            $scope.isDone = function(id){
                return RevealFactory.getCurrentSlide() > id;
            };

            $scope.beforeActive = false;
            $scope.afterActive = false;

            $scope.beforeActiveFn = function(){
                $scope.beforeActive = !$scope.beforeActive;
            };

            $scope.afterActiveFn = function(){
                $scope.afterActive = !$scope.afterActive;
            };

            $scope.isShow = function(id){
                return $scope.beforeActive || $scope.afterActive || Math.abs(RevealFactory.getCurrentSlide() - id) < MAX_LEFT / 2;
            };

            $scope.hasBefore = function(){
                return RevealFactory.getCurrentSlide() >= MAX_LEFT - MAX_LEFT / 2;
            };

            $scope.hasAfter = function(){
                return Math.abs(RevealFactory.getCurrentSlide() - ($scope.getAllSections().length - 1)) > MAX_LEFT / 2;
            };

            $scope.showPaginationLink = function(id){
                var MAX = 12;
                var size = $scope.getAllSections().length;
                return (id < MAX/2) || (id > size - MAX/2) || $scope.isActive(id);
            };

            $scope.isCurrentSection = function(index){
                try{
                    return $scope.sections[index].title == $scope.getAllSections()[RevealFactory.getCurrentSlide()].title;
                }catch(err){
                    return false;
                }
            };

        });

    });
