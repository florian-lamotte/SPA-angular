var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'templates/accueil.html',
		controller : 'accueilController'
	}).when('/travail', {
		templateUrl : 'templates/travail.html',
		controller : 'travailController'
	}).when('/loisirs', {
		templateUrl : 'templates/loisirs.html',
		controller : 'loisirsController'
	}).when('/culture', {
		templateUrl : 'templates/culture.html',
		controller : 'cultureController'
	}).when('/autres', {
		templateUrl : 'templates/autres.html',
		controller : 'autresController'
	}).otherwise({
		redirectTo : '/'
	});
});

app.controller('accueilController', function($scope, $http, $window){
	$scope.getAllTodos = function(){
	    $http.get('serveur.php', {params:{method:'getTodo'}}).then(function(response){
	      	$scope.messages = response.data;
	    })
	};

	$scope.getAllCategories = function(){
	    $http.get('serveur.php', {params:{method:'getCat'}}).then(function(response){
	      	$scope.categories = response.data;
	    })
	};

	$scope.getAllImportances = function(){
	    $http.get('serveur.php', {params:{method:'getImp'}}).then(function(response){
	      	$scope.importances = response.data;
	    })
	};

    $scope.addTodo = function() {
    	switch($scope.categorie){
    		case 'Travail': var $logo = "briefcase"; break;
    		case 'Loisirs': var $logo = "tower"; break;
    		case 'Culture': var $logo = "grain"; break;
    		case 'Autres': var $logo = "tree-deciduous"; break;
    	}

		$http.get('serveur.php',
		{
			params : { 
				method: 'addTodo', 
				texte:$scope.texte, 
				categorie:$scope.categorie, 
				importance:$scope.importance, 
				glyphicon:$logo }
		}).then(function() {
			$window.location.reload();
		})
	};

	$scope.deleteTodo = function(id){
	    $http.get('serveur.php', {
	    	params : {
	    		method:'deleteTodo', 
	    		id:id
	    	}
	    	}).then(function(response){
	      		$scope.getAllTodos();
	    	}
	    );
	};

	$scope.getAllTodos();
	$scope.getAllCategories();
	$scope.getAllImportances();
});

app.controller('travailController', function($scope, $http) {
	$scope.getAllTodos = function(){
	    $http.get('serveur.php', {params:{method:'getTodo'}}).then(function(response){
	      	$scope.messages = response.data;
	    })
	};

	$scope.deleteTodo = function(id){
	    $http.get('serveur.php', {
	    	params : {
	    		method:'deleteTodo', 
	    		id:id
	    	}
	    	}).then(function(response){
	      		$scope.getAllTodos();
	    	}
	    );
	};

    $scope.getAllTodos();
});

app.controller('loisirsController', function($scope, $http) {
	$scope.getAllTodos = function(){
	    $http.get('serveur.php', {params:{method:'getTodo'}}).then(function(response){
	      	$scope.messages = response.data;
	    })
	};

	$scope.deleteTodo = function(id){
	    $http.get('serveur.php', {
	    	params : {
	    		method:'deleteTodo', 
	    		id:id
	    	}
	    	}).then(function(response){
	      		$scope.getAllTodos();
	    	}
	    );
	};

    $scope.getAllTodos();
});

app.controller('cultureController', function($scope, $http) {
	$scope.getAllTodos = function(){
	    $http.get('serveur.php', {params:{method:'getTodo'}}).then(function(response){
	      	$scope.messages = response.data;
	    })
	};

	$scope.deleteTodo = function(id){
	    $http.get('serveur.php', {
	    	params : {
	    		method:'deleteTodo', 
	    		id:id
	    	}
	    	}).then(function(response){
	      		$scope.getAllTodos();
	    	}
	    );
	};

    $scope.getAllTodos();
});

app.controller('autresController', function($scope, $http) {
	$scope.getAllTodos = function(){
	    $http.get('serveur.php', {params:{method:'getTodo'}}).then(function(response){
	      	$scope.messages = response.data;
	    })
	};

	$scope.deleteTodo = function(id){
	    $http.get('serveur.php', {
	    	params : {
	    		method:'deleteTodo', 
	    		id:id
	    	}
	    	}).then(function(response){
	      		$scope.getAllTodos();
	    	}
	    );
	};

    $scope.getAllTodos();
});