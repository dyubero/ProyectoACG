angular.module('starter.services', [])

.factory('Profiles', function() {
  // Might use a resource here that returns a JSON array
                                
  // Some fake testing data
  var profiles = [{
    id: 0,
    name: 'Coca-cola',
    deseg: 'Lider en bebidas espirituosas',
    face: 'img/150x165/Coca-cola.jpg'
  }, {
    id: 1,
    name: 'Apple',
    deseg: 'Inspirado en Bill Gates',
    face: 'img/150x165/Apple.jpg'
  }, {
    id: 2,
	name: 'Nike',
	deseg: 'Just Do It ',
    face: 'img/150x165/Nike.jpg'
  }, {
    id: 5,
	name: 'Adidas',
	deseg: 'All Day I Dream About Sport”',
    face: 'img/150x165/Adidas.jpg'
  }];

  return {
    all: function() {
      return profiles;
    },
    remove: function(id) {
      profiles.splice(profiles.indexOf(id), 1);
    },
    get: function(profileId) {
      for (var i = 0; i < profiles.length; i++) {
        if (profiles[i].id === parseInt(profileId)) {
          return profiles[i];
        }
      }
      return null;
    }
  };
});






