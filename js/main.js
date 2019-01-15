/* Constants */
var HOME_INDEX = 0;
var ABOUT_INDEX = 1;
var EDUCATION_INDEX = 2;
var EXPERIENCE_INDEX = 3;
var SKILLS_INDEX = 4;
var PROJECTS_INDEX = 5;
var CONTACT_INDEX = 6;
var WAYPOINT_OFFSET = 50;
var WAYPOINT_OFFSET_SUBSECTION = 80;

/* Variables */
var basicProgressBar = [];
var intermediateProgressBar = [];

function animateProgressBars() {
  basicProgressBar.forEach(element => {
    element.animate(0.25);
  });

  intermediateProgressBar.forEach(element => {
    element.animate(0.5);
  });
}

$(document).ready(function () {

  const progressBarStyle = {
    color: 'var(--hair-yellow)',
    trailColor: 'var(--brand-gray)',
    duration: 2000,
    easing: 'easeInOut',
    strokeWidth: 8,
    svgStyle: {
      'border-radius': '0.3rem'
    }
  };

  const intermediateSkillNames = ['#javaBar', '#cppBar', '#springBar', '#hibernateBar', '#mavenBar', '#gitBar', '#sqlBar'];
  const basicSkillNames = ['#csharpBar', '#pythonBar', '#cBar', '#htmlBar', '#jsBar', '#cssBar', '#jerseyBar', '#lambdaBar',
  '#apigBar', '#dynamoBar', '#cognitoBar', '#iamBar'];


  intermediateSkillNames.forEach(name => {
    intermediateProgressBar.push(new ProgressBar.Line(name, progressBarStyle));
  }); 

  basicSkillNames.forEach(name => {
    basicProgressBar.push(new ProgressBar.Line(name, progressBarStyle));
  });

});

$(window).on('load', function () {
  $('.nav-link:not(#contact-item)').bind('click', function (e) {
    e.preventDefault(); // prevent hard jump, the default behavior

    var target = $(this).attr("href"); // Set the target as variable

    // perform animated scrolling by getting top-position of target-element and set it as scroll target
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top
    }, 600, function () {
      location.hash = target; //attach the section id to the pageurl
    });

    return false;
  });

  $('#contact-item').bind('click', function (e) {
    e.preventDefault(); // prevent hard jump, the default behavior

    // perform animated scrolling to the bottom of page
    $('html, body').stop().animate({
      scrollTop: $(document).height()
    }, 600);

    return false;
  });

  $('.home-title').eq(0).addClass('animated fadeIn slow');
});

function setActiveNavItem(index) {
  $('.nav-item.active').removeClass('active');
  $('.nav-item').eq(index).addClass('active');
}

new Waypoint({
  element: document.getElementById('about-me'),
  handler: function (direction) {
    if (direction === 'up') {
      $('.navbar.navbar-dark').removeClass('navbar-dark');
      $('.navbar.bg-dark').removeClass('bg-dark');
      $('.navbar').addClass('navbar-light');
      $('.navbar').addClass('bg-light');

      setActiveNavItem(HOME_INDEX);
      pJSDom[0].pJS.particles.move.enable = true;
      pJSDom[0].pJS.fn.particlesRefresh();
    }
    else if (direction === 'down') {
      $('.navbar.navbar-light').removeClass('navbar-light');
      $('.navbar.bg-light').removeClass('bg-light');
      $('.navbar').addClass('navbar-dark');
      $('.navbar').addClass('bg-dark');

      setActiveNavItem(ABOUT_INDEX);
      pJSDom[0].pJS.particles.move.enable = false;
      $('#about-me-left-animated').addClass('animated fadeInLeft slow');
      $('#about-me-center-animated').addClass('animated fadeIn slow');
      $('#about-me-right-animated').addClass('animated fadeInRight slow');
    }
  },
  offset: WAYPOINT_OFFSET
})

new Waypoint({
  element: document.getElementById('education'),
  handler: function (direction) {
    if (direction === 'up') {
      setActiveNavItem(ABOUT_INDEX);
    }
    else if (direction === 'down') {
      setActiveNavItem(EDUCATION_INDEX);
      $('#ucr-logo-animated').addClass('animated fadeInUp');
      $('#ucr-degree-title-animated').addClass('animated fadeInUp');
    }
  },
  offset: WAYPOINT_OFFSET
})

new Waypoint({
  element: document.getElementById('experience'),
  handler: function (direction) {
    if (direction === 'up') {
      setActiveNavItem(EDUCATION_INDEX);
    }
    else if (direction === 'down') {
      setActiveNavItem(EXPERIENCE_INDEX);
      $('#cicanum-card-animated').addClass('animated flipInY');
      $('#gl-card-animated').addClass('animated flipInY delay-05s');
      $('#ecci-card-animated').addClass('animated flipInY delay-1s');
    }
  },
  offset: WAYPOINT_OFFSET
})

new Waypoint({
  element: document.getElementById('skills'),
  handler: function (direction) {
    if (direction === 'up') {
      setActiveNavItem(EXPERIENCE_INDEX);
    }
    else if (direction === 'down') {
      setActiveNavItem(SKILLS_INDEX);
      $('.soft-skill-animated').addClass('animated fadeInUp slow');
    }
  },
  offset: WAYPOINT_OFFSET
})

new Waypoint({
  element: document.getElementById('technical-skills'),
  handler: function () {
    animateProgressBars();
  },
  offset: WAYPOINT_OFFSET_SUBSECTION
})

new Waypoint({
  element: document.getElementById('projects'),
  handler: function (direction) {
    if (direction === 'up') {
      setActiveNavItem(SKILLS_INDEX);
    }
    else if (direction === 'down') {
      setActiveNavItem(PROJECTS_INDEX);
      $('#spring-card-animated').addClass('animated flipInY');
      $('#talent-card-animated').addClass('animated flipInY delay-05s');
      $('#csharp-card-animated').addClass('animated flipInY delay-1s');
    }
  },
  offset: WAYPOINT_OFFSET
})

/* Particles Configuration */

particlesJS("home", {
  "particles": {
    "number": {
      "value": 200,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#22A39F"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.8,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 10,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 500,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 400,
        "size": 4,
        "duration": 0.3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});