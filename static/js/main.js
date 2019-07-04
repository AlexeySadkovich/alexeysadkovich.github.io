$(document).ready(function() {
	$('#toTop').hide();
	 
	$(window).scroll( () => {
	 
		if($(window).scrollTop() > 50) {
		 
			$('#toTop').fadeIn();
		 
		} else {
		 
			$('#toTop').fadeOut();
		 
		};
		 
	});
	 
	$('#toTop').bind('click', () => {
 
		$('body,html').animate({scrollTop:0}, 500);
	 
	});
	 
});

var skillsOpen = false;
var linksOpen  = false;

const defaultView = () => {
	//Particles 
	$(".about-particles").attr("id","particles-js-nonactive");
	$(".projects-particles").attr("id","particles-js-nonactive");

	//Default main page
	$(".main-page").removeClass("main-page-active-skills");
	$(".main-page").removeClass("main-page-active-links");
	$(".main-page").removeClass("main-page-active-projects");
	$(".main-page").removeClass("main-page-active-about");

	//Default buttons
	$(".show-skills").removeClass("show-skills-active");
	$(".show-links").removeClass("show-links-active");

	//Default pages
	$(".skills-page").removeClass("skills-page-active");
	$(".links-page").removeClass("links-page-active");
	$(".projects-page").removeClass("projects-page-active");
	$(".about-page").removeClass("about-page-active");

};

//Set progress

const drawProgress = () => {
	setProgress(circleFE, 90);
	setProgress(circleJS, 60);
	setProgress(circleGO, 60);
	setProgress(circlePY, 70);
};

//Skills page

$(".show-skills").on("click", e => {

	if (!skillsOpen){

		e.preventDefault();
		defaultView();
		$(".main-page").toggleClass("main-page-active-skills");
		$(".skills-page").toggleClass("skills-page-active");
		$(".show-skills").toggleClass("show-skills-active");

		setTimeout(drawProgress, 800);

		skillsOpen = true;
		linksOpen  = false;

	} else {

		defaultView();
		skillsOpen = false;

	};

});

//Links page

$(".show-links").on("click", e => {

	if (!linksOpen) {

		e.preventDefault();
		defaultView();
		$(".main-page").toggleClass("main-page-active-links");
		$(".links-page").toggleClass("links-page-active");
		$(".show-links").toggleClass("show-links-active");

		skillsOpen = false;
		linksOpen = true;

	} else {

		defaultView();
		linksOpen = false;

	};

});

//Projects page

$(".show-main").on("click", e =>  {
	defaultView();
});


$(".show-projects").on("click", e =>  {
	defaultView();
	$(".projects-particles").attr("id","particles-js");
	loadParticles();
	$(".main-page").toggleClass("main-page-active-projects");
	$(".projects-page").toggleClass("projects-page-active");
});

//About page

$(".show-main").on("click", e =>  {
	defaultView();
});


$(".show-about").on("click", e =>  {
	defaultView();
	$(".about-particles").attr("id","particles-js");
	loadParticles();
	$(".main-page").toggleClass("main-page-active-about");
	$(".about-page").toggleClass("about-page-active");
});

function loadParticles(){
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', '/static/assets/particles/particles.json', function() {
        console.log('callback - particles.js config loaded');
  });
};

