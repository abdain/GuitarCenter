app.directive('myInput', myInput);

function myInput(){
	return {
		restrict:"E",
		template:"<div><input type="button" ng-model="info"><div>"
		scope:{}
	}
}