app.factory("dataService", dataService);
function dataService($http) {
	var obj = {
		getData:function(){
			return $http.get("../guitar.json") //returns promise
			.then(function(response){
				var product = response.data;
				return product;
			})
		}
	};
	return obj;
	console.log(obj);
}

