var myApp = angular.module("myApp", []);

myApp.service("ContactService", function() {
    var contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    function saveContactsToLocalStorage() {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }

    this.save = function(contact) {
        var index = contacts.findIndex(function(c) {
            return c.id === contact.id;
        });
        if (index === -1) {
            contact.id = contacts.length + 1;
            contacts.push(contact);
        } else {
            contacts[index] = contact;
        }
        saveContactsToLocalStorage();
    };

    this.get = function(id) {
        return contacts.find(function(contact) {
            return contact.id === id;
        });
    };

    this.delete = function(id) {
        contacts = contacts.filter(function(contact) {
            return contact.id !== id;
        });
        saveContactsToLocalStorage();
    };

    this.list = function() {
        return contacts;
    };

    this.authenticate = function(email, password) {
        return contacts.some(function(contact) {
            return contact.email === email && contact.password === password;
        });
    };
});

myApp.controller("ContactController", function($scope, $window, ContactService) {
    $scope.contacts = ContactService.list();
    $scope.newcontact = {};

    $scope.saveContact = function() {
        ContactService.save($scope.newcontact);
        $scope.newcontact = {};
    };

    $scope.delete = function(id) {
        ContactService.delete(id);
        $scope.contacts = ContactService.list(); // Update $scope.contacts after deletion
        if ($scope.newcontact.id == id) $scope.newcontact = {};
    };
    

    $scope.edit = function(id) {
        $scope.newcontact = angular.copy(ContactService.get(id));
    };

    $scope.searchUser = function() {
        $scope.ifSearchUser = !$scope.ifSearchUser;
        $scope.title = ($scope.ifSearchUser) ? "Close Search" : "Search User";
    };

    $scope.goToLoginPage = function() {
        $window.location.href = "login.html";
    };
});

myApp.controller("LoginController", function($scope, $window, ContactService) {
    $scope.login = function() {
        var email = $scope.email;
        var password = $scope.password;

        if (ContactService.authenticate(email, password)) {
            console.log("Login successful!");
            $window.location.href = "welcome.html"; 
        } else {
            window.alert("Invalid email or password! Please try again.");
            console.log("Invalid email or password!");
        }
    };
});

