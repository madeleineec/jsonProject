let contentGridElement = document.getElementById('contentGrid');
let pageTitleElement = document.getElementById('pageTitle');
let animalDisplayElement = document.getElementById('animalDisplay');

let jsonDatabase = [
	{
		"title" : "Amur leopard",
		"picture_url" : "https://i.imgur.com/IUCbCGd.jpg",
		"habitat_color" : "#B3C8CF", // icy blue
		"population" : "less than 100 left",
		"id" : "amurleopard",
		"description":"amur leopard description here",
		"additional_pic_url":"https://files.worldwildlife.org/wwfcmsprod/images/Amur_Leopard_/hero_small/k6vvkt4tj_amur_leopard_99144569.jpg"
	},
	{
		"title" : "Sumatran orangutan",
		"picture_url" : "https://files.worldwildlife.org/wwfcmsprod/images/sumatran_orangutan_8.6.2012_Hero_and_Circle_image_XL_257636.jpg/hero_small/b0umbt3ds_sumatran_orangutan_8.6.2012_Hero_and_Circle_image_XL_257636.jpg",
		"habitat_color" : "#FC8F54", //orange
		"population" : "only 14,613 left",
		"id" : "sumatranorangutan",
		"description":"description here",
		"additional_pic_url":"https://images.takeshape.io/86ce9525-f5f2-4e97-81ba-54e8ce933da7/dev/ae731028-b8be-4323-bbea-2898c0141dff/Portrait%20of%20male%20Sumatran%20orangutan%20Pongo%20abelii%20in%20Gunung%20Leuser%20National%20Park%2C%20Sumatra%2C%20Indonesia.%20Sumatran%20orangutan%20is%20endemic%20to%20the%20north%20of%20Sumatra%20and%20is%20critically%20endangered%20dreamstime%20(1).jpg?auto=compress%2Cformat&w=1440"
	},
	{
		"title" : "Vaquita",
		"picture_url" : "https://oceangeneration.org/wp-content/uploads/2023/07/meet-the-vaquita-the-most-endangered-marine-mammal-1024x604.png",
		"habitat_color" : "#78B3CE", //blue
		"population" : "only 10 left",
		"id" : "vaquita",
		"description":"description here",
		"additional_pic_url":"https://files.worldwildlife.org/wwfcmsprod/images/Vaquita_1_Thomas_A_Jefferson_20081019.jpg/story_full_width/8pc3684jv6_Vaquita_1_Thomas_A_Jefferson_20081019.jpg"
	},
	{
		"title" : "Black rhino",
		"picture_url" : "https://m.psecn.photoshelter.com/img-get/I0000ewyPMCOwviI/s/900/900/Mature-Male-Black-Rhino-Lewa.jpg",
		"habitat_color" : "#AA5486", //purple
		"population" : "less than 6,500 left",
		"id" : "blackrhino",
		"description":"description here",
		"additional_pic_url":"https://discovery.sndimg.com/content/dam/images/discovery/fullset/2021/9/20/GettyImages-1046943480.jpg.rend.hgtvcom.616.411.suffix/1632175261677.jpeg"
	},
	{
		"title" : "Hawksbill Turtle",
		"picture_url" : "https://images.squarespace-cdn.com/content/v1/5369465be4b0507a1fd05af0/1504570814751-229TMWFNRGF2PSCVZQ4J/hawksbill+turtle",
		"habitat_color" : "#9ABF80", //green
		"population" : "less than 20,000 left",
		"id" : "hawksbillturtle",
		"description":"description here",
		"additional_pic_url":"https://miro.medium.com/v2/resize:fit:1200/1*pwsGZCtWClR4KXk9yY1dew.png"
	},
	{
		"title" : "Saola",
		"picture_url" : "https://www.synchronicityearth.org/wp-content/uploads/2023/10/By-Toon-Fey39-saola.jpg",
		"habitat_color" : "#B17457", //brown
		"population" : "less than 750 left",
		"id" : "saola",
		"description":"description here",
		"additional_pic_url":"https://media.licdn.com/dms/image/v2/D4E12AQGniCbWy7Eo0w/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1683659936527?e=2147483647&v=beta&t=lrdB0iXLWsSeuUY-pq_POL-h9FSiM-kwcYofOPU1WOg"
	}
];

for (var i = 0; i < jsonDatabase.length; i++) {
	createElement(jsonDatabase[i]);
}

document.addEventListener("DOMContentLoaded", function(){
  // Get URL Params
  let queryString = window.location.search;
  let urlParams = new URLSearchParams(queryString);
  let urlID = urlParams.get('id');

  if (urlID == null) {
    pageTitleElement.innerText = "Critically Endangered Species";
    for (let i = 0; i < jsonDatabase.length; i++) {
      createElement(jsonDatabase[i]);
    }
  } else {
    for (let i = 0; i < jsonDatabase.length; i++) {
      if (jsonDatabase[i]["id"] === urlID) {
        createAnimalPage(jsonDatabase[i]);
      }
	}
  }
});

function createElement(incomingJSON) {
	//create a link
	let newAnimalLink = document.createElement("A");
	newAnimalLink.href = "index.html?id=" + incomingJSON['id'];

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

  	//add item to link
  	newAnimalLink.appendChild(newContentElement);

  	//add ink to grid
  	contentGridElement.appendChild(newAnimalLink);
}

function createAnimalPage(incomingJSON) {
	contentGridElement.style.display = 'none';
	pageTitleElement.innerText = incomingJSON["title"];

	let newAnimalElement = document.createElement("DIV");
	newAnimalElement.classList.add('animalPage');

  	// Add animal image
  	let newAnimalImage = document.createElement("IMG");
  	newAnimalImage.classList.add("hero");
  	newAnimalImage.src = incomingJSON["additional_pic_url"];
  	newAnimalElement.appendChild(newAnimalImage);

  	// Add description
  	let newAnimalDescription = document.createElement("P");
  	newAnimalDescription.classList.add("description");
  	newAnimalDescription.innerText = incomingJSON["description"];
  	newAnimalElement.appendChild(newAnimalDescription);

  	animalDisplayElement.appendChild(newAnimalElement);
}












