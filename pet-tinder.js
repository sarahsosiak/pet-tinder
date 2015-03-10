var gallery;
var petMap;
var selectedPet;

function setup() {
	gallery = document.getElementById('myGallery');
	// gallery.addEventListener('drawer-open', handleOpen);
	// gallery.addEventListener('drawer-close', handleClose);
	// gallery.addEventListener('thumbnail-tap', handleTap);	

	fetchData();
}

function fetchData() {
	// $.getJSON('https://ga-music-ssosiak.firebaseio.com/artists.json', function (dagoods) {
	// 	artistMap = dagoods;
	// 	gallery.drawThumbnailsFromObject(artistMap);
	// });

	$.getJSON('http://api.petfinder.com/pet.find?format=json&count=10&location=94101&key=c0d92038235614877209f3b0487d13c5&callback=?', function (data) {
	  petMap = data.petfinder.pets.pet;
	  console.log(petMap);
	  gallery.drawThumbnailsFromArray(petMap);

	});
}


// function handleTap(e) {
// 	selectedArtistId = e._args;
// 	gallery.setDrawerBackground(artistMap[selectedArtistId].thumbnail);
// 	gallery.openDrawer();
// }

// function handleOpen(e) {

// 	console.log(selectedArtistId);

// 	var artistName = document.getElementById('artist-name');
// 	artistName.innerHTML = artistMap[selectedArtistId].name;

// 	var artistDescription = document.getElementById('artist-description');
// 	artistDescription.innerHTML = artistMap[selectedArtistId].description;

// 	var mainContent = document.getElementById('main-content');
// 	mainContent.style.opacity = 1;

// 	var songTitle = document.getElementById('song');
// 	songTitle.innerHTML = artistMap[selectedArtistId].sampletrack.trackname;
// }

// function handleClose() {
// 	var mainContent = document.getElementById('main-content');
// 	mainContent.style.opacity = 0;
// }


window.addEventListener('WebComponentsReady', function(e) {
  setup();
});