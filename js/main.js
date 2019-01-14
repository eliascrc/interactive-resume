var lowerMidscreen = 0;
var javaBar, cppBar, csharpBar, pythonBar, cBar, htmlBar, jsBar, cssBar, 
springBar, hibernateBar, mavenBar, jerseyBar, gitBar, mysqlBar, mssqlBar,
oracleBar, lambdaBar, apigBar, dynamoBar, cognitoBar, iamBar;

function animations() {
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
  $('.nav-link').bind('click', function (e) {
    e.preventDefault(); // prevent hard jump, the default behavior

    var target = $(this).attr("href"); // Set the target as variable

    // perform animated scrolling by getting top-position of target-element and set it as scroll target
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top
    }, 600, function () {
      location.hash = target; //attach the hash (#jumptarget) to the pageurl
    });

    return false;
  });

  let scrollDistance = $(window).scrollTop();
  lowerMidscreen = ($('#home').height() + parseInt($('#home').css('padding-top')) * 2) / 3;
  if (scrollDistance > lowerMidscreen) {
    $('.navbar').addClass('navbar-dark');
    $('.navbar').addClass('bg-dark');
  } else {
    console.log('nani2');
    $('.navbar').addClass('navbar-light');
    $('.navbar').addClass('bg-light');
  }

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

$(window).scroll(function () {
  let scrollDistance = $(window).scrollTop();

  if (scrollDistance > lowerMidscreen) {
    if ($('.navbar').hasClass('navbar-light')) {
      $('.navbar').removeClass('navbar-light');
      $('.navbar').removeClass('bg-light');
      $('.navbar').addClass('navbar-dark');
      $('.navbar').addClass('bg-dark');
    }
  } else {
    if ($('.navbar').hasClass('navbar-dark')) {
      $('.navbar').removeClass('navbar-dark');
      $('.navbar').removeClass('bg-dark');
      $('.navbar').addClass('navbar-light');
      $('.navbar').addClass('bg-light');
    }
  }

  // Assign active class to nav links while scolling
  $('.panel').each(function (i) {
    if (($(this).position().top - 100) <= scrollDistance) {
      $('.nav-item.active').removeClass('active');
      $('.nav-item').eq(i).addClass('active');
    }
  });
}).scroll();

/* ---- particles.js config ---- */

particlesJS("home", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#22a39f"
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
      "value": 0.5,
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
      "speed": 6,
      "direction": "bottom",
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