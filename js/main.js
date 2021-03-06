var javaBar, cppBar, csharpBar, pythonBar, cBar, htmlBar, jsBar, cssBar,
  springBar, hibernateBar, mavenBar, jerseyBar, gitBar, mysqlBar, mssqlBar,
  oracleBar, lambdaBar, apigBar, dynamoBar, cognitoBar, iamBar;

function animateProgressBars() {
  javaBar.animate(0.6);
  cppBar.animate(0.5);
  csharpBar.animate(0.30);
  pythonBar.animate(0.20);
  cBar.animate(0.20);
  htmlBar.animate(0.30);
  jsBar.animate(0.30);
  cssBar.animate(0.30);
  springBar.animate(0.50);
  hibernateBar.animate(0.50);
  mavenBar.animate(0.50);
  gitBar.animate(0.50);
  jerseyBar.animate(0.20);
  mysqlBar.animate(0.50);
  mssqlBar.animate(0.30);
  oracleBar.animate(0.30);
  lambdaBar.animate(0.20);
  apigBar.animate(0.20);
  dynamoBar.animate(0.20);
  cognitoBar.animate(0.20);
  iamBar.animate(0.20);
}

$(document).ready(function () {

  let progressBarStyle = {
    color: 'var(--hair-yellow)',
    trailColor: 'var(--brand-gray)',
    duration: 2000,
    easing: 'easeInOut',
    strokeWidth: 8,
    svgStyle: {
      'border-radius': '0.3rem'
    }
  };

  javaBar = new ProgressBar.Line('#javaBar', progressBarStyle);
  cppBar = new ProgressBar.Line('#cppBar', progressBarStyle);
  csharpBar = new ProgressBar.Line('#csharpBar', progressBarStyle);
  pythonBar = new ProgressBar.Line('#pythonBar', progressBarStyle);
  cBar = new ProgressBar.Line('#cBar', progressBarStyle);
  htmlBar = new ProgressBar.Line('#htmlBar', progressBarStyle);
  jsBar = new ProgressBar.Line('#jsBar', progressBarStyle);
  cssBar = new ProgressBar.Line('#cssBar', progressBarStyle);
  springBar = new ProgressBar.Line('#springBar', progressBarStyle);
  hibernateBar = new ProgressBar.Line('#hibernateBar', progressBarStyle);
  mavenBar = new ProgressBar.Line('#mavenBar', progressBarStyle);
  jerseyBar = new ProgressBar.Line('#jerseyBar', progressBarStyle);
  gitBar = new ProgressBar.Line('#gitBar', progressBarStyle);
  mysqlBar = new ProgressBar.Line('#mysqlBar', progressBarStyle);
  mssqlBar = new ProgressBar.Line('#mssqlBar', progressBarStyle);
  oracleBar = new ProgressBar.Line('#oracleBar', progressBarStyle);
  lambdaBar = new ProgressBar.Line('#lambdaBar', progressBarStyle);
  apigBar = new ProgressBar.Line('#apigBar', progressBarStyle);
  dynamoBar = new ProgressBar.Line('#dynamoBar', progressBarStyle);
  cognitoBar = new ProgressBar.Line('#cognitoBar', progressBarStyle);
  iamBar = new ProgressBar.Line('#iamBar', progressBarStyle);

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

const HOME_INDEX = 0;
const ABOUT_INDEX = 1;
const EDUCATION_INDEX = 2;
const EXPERIENCE_INDEX = 3;
const SKILLS_INDEX = 4;
const PROJECTS_INDEX = 5;
const CONTACT_INDEX = 6;
const WAYPOINT_OFFSET = 50;

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
  offset: WAYPOINT_OFFSET + 30
})

new Waypoint({
  element: document.getElementById('projects'),
  handler: function (direction) {
    if (direction === 'up') {
      setActiveNavItem(SKILLS_INDEX);
    }
    else if (direction === 'down') {
      setActiveNavItem(PROJECTS_INDEX);
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