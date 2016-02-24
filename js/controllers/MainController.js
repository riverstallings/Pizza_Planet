app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
  $scope.mains = [
    {
      name: 'Margherita',
      description: 'Olive Oil, Fresh Garlic, Fresh Mozzarella, Basil and Sauce',
      price: 12.49
    },
    {
      name:'White Pizza',
      description:'Garlic-Herb Butter, Mozzarella',
      price: 10.49
    },
    {
      name: 'Mediterranean Pizza',
      description: 'Olive Oil, Fresh Garlic, Tomatoes, Olives, Artichokes, Feta and Mozzarella',
      price: 12.49
    }
  ];
  $scope.extras = [
    {
    	name: 'Steak Philly',
      description: 'with Green Peppers, Mushrooms and Onions',
      price: 8.95
    },
    {
    	name: 'Meatball Parmigiana',
      description: 'with Provolone Cheese',
      price: 8.95
    },
    {
    	name: 'Eggplant Parmigiana',
      description: 'with Provolone Cheese',
      price:  8.95
    }
  ]

}]);
