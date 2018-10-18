var pets = [
  {
    name: 'Benito',
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.',
    'id-pet': 1
  },
  {
    name: 'Felipe',
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.',
    'id-pet': 2
  },
  {
    name: 'Remmy',
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.',
    'id-pet': 3
  },
  {
    name: 'Claudio',
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.',
    'id-pet': 4
  },
  {
    name: 'Shisha',
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.',
    'id-pet': 5
  },
  {
    name: 'Brandon',
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.',
    'id-pet': 6
  },
];

var templates = [];

for(var i = 0; i < pets.length; i++) {
  var id = (pets[i]['id-pet'] + '-' + i * 2) + '-' + ('-' + i%2 === 0);
  // '-' + i%2 === 0 associativity
  templates.push(buildCard(id, pets[i].name, pets[i].details));
}

console.log(templates);

function buildCard(id, name, details) {
  var name = name.toLowerCase();

  // console.log(buildLink()); throw an error since it is undefined for the hoisting phase

  var buildLink = function() {
    var link = '/adoptar/' + name;

    return (
      '<p class="yta_Adopt-card-description-link">' +
        '<a href="' + link + '" class="yta_Link-outline--primary">Adoptar</a>' +
      '</p>'
    );
  }

  var buildImage = function () {
    return '<div class="yta_Adopt-card-img" style="background-image: url(./images/' + name + '.png)"></div>';
  }
  
  return (
    '<article class="yta_Adopt-card" id="' + id + '">' +
      buildImage() +
      '<div class="yta_Adopt-card-description">' +
        '<h3 class="yta_Adopt-card-description-name">' + name + '</h3>' +
        '<p class="yta_Adopt-card-description-details">' + details + '</p>' +
        buildLink() +
      '</div>' +
    '</article>'
  );
}
