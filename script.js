let outputElement = document.getElementById('outputElement');
let contentGridElement = document.getElementById('contentGrid');

let jsonDatabase = [
	{
		"title" : "Amur leopard",
		"picture_url" : "https://i.imgur.com/IUCbCGd.jpg",
		"habitat_color" : "#B3C8CF", // icy blue
		"population" : "less than 100 left"
	},
	{
		"title" : "Sumatran orangutan",
		"picture_url" : "https://files.worldwildlife.org/wwfcmsprod/images/sumatran_orangutan_8.6.2012_Hero_and_Circle_image_XL_257636.jpg/hero_small/b0umbt3ds_sumatran_orangutan_8.6.2012_Hero_and_Circle_image_XL_257636.jpg",
		"habitat_color" : "#FC8F54", //orange
		"population" : "only 14,613 left"
	},
	{
		"title" : "Vaquita",
		"picture_url" : "https://oceangeneration.org/wp-content/uploads/2023/07/meet-the-vaquita-the-most-endangered-marine-mammal-1024x604.png",
		"habitat_color" : "#78B3CE", //blue
		"population" : "only 10 left"
	},
	{
		"title" : "Black rhino",
		"picture_url" : "https://m.psecn.photoshelter.com/img-get/I0000ewyPMCOwviI/s/900/900/Mature-Male-Black-Rhino-Lewa.jpg",
		"habitat_color" : "#AA5486", //purple
		"population" : "less than 6,500 left"
	},
	{
		"title" : "Hawksbill Turtle",
		"picture_url" : "https://images.squarespace-cdn.com/content/v1/5369465be4b0507a1fd05af0/1504570814751-229TMWFNRGF2PSCVZQ4J/hawksbill+turtle",
		"habitat_color" : "#9ABF80", //green
		"population" : "less than 20,000 left"
	},
	{
		"title" : "Saola",
		"picture_url" : "https://www.synchronicityearth.org/wp-content/uploads/2023/10/By-Toon-Fey39-saola.jpg",
		"habitat_color" : "#B17457", //brown
		"population" : "less than 750 left"
	},
];

for (var i = 0; i < jsonDatabase.length; i++) {
	createElementProper(jsonDatabase[i]);
}

function createElementProper(incomingJSON) {
	// create whole content item div and set class
	let newContentElement = document.createElement("DIV");
	newContentElement.style.backgroundColor = incomingJSON['habitat_color'];
	newContentElement.classList.add('contentItem');

	// create and add header image
	let newImage = document.createElement("IMG");
  	newImage.classList.add("headerImage");
  	newImage.src = incomingJSON['picture_url'];
  	newContentElement.appendChild(newImage);


  	//create h2, set class, set content
	let newContentHeading = document.createElement("H3");
  	newContentHeading.classList.add('contentTitle');
  	newContentHeading.innerText = incomingJSON['title'];
  	newContentElement.appendChild(newContentHeading);

  	//create p, set class, set content
  	let newContentWords = document.createElement("p");
  	newContentWords.classList.add('popNumber');
  	newContentWords.innerText= incomingJSON['population'];
  	newContentElement.appendChild(newContentWords);

  	//add item to page
  	contentGridElement.appendChild(newContentElement);
}