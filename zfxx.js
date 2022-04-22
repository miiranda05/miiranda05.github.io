function read() {
 document.getElementById('readmore').innerHTML="There's a relaxing teahouse culture – favorite local institutions have been serving the same brews for generations; a lively nightlife that mixes craft beer bars and super-hip clubs with Sichuan opera shows; and delicious food that is famous for its heat, history and variety even in cuisine-rich China, and is very much a point of pride: Chengdu is, after all, Unesco's first-ever City of Gastronomy. Oh, and as if that's not enough, this is the place to come to see China's cutest residents – the giant pandas."
}
function name(){
  var a=prompt('please enter your first name:');
  var b=prompt('please enter your last name:');
  document.getElementById('form_name').innerHTML=a+b
}



var Gall=0;
var Max=5;
function GoLeft(){
  Gall=Gall>0?Gall-1:Max;
  MoveSlide();
}
function GoRight(){
  Gall=Gall<Max?Gall+1:0;
  MoveSlide();
}
function MoveSlide(){
  document.getElementById("Gal_Slider").style.left="-"+(Gall*100)+"%";
}



function change(){
var select=document.getElementById('jump');

select.style.fontFamily='Pacifico';
select.style.textAlign="center";
select.style.fontSize="50px";
select.innerHTML='Sanya travel guide';
}




function time() {
var d = new Date();
document.getElementById("tx").innerHTML = d.toLocaleTimeString();
}
setInterval(time, 1000);





function content(){
  var select=document.getElementById('one')
  select.innerHTML='The One&Only';
}

function contentt(){
  var select=document.getElementById('two')
  select.innerHTML='The Sofitel Sanya Leeman';
}


function contenttt(){
  var select=document.getElementById('three')
  select.innerHTML='The Sanya EDITION beach hotels';
}


function contentttt(){
  var select=document.getElementById('four')
  select.innerHTML='Ritz-Carlton';
}

function contenttttt(){
  var select=document.getElementById('five')
  select.innerHTML='Shangri-La';
}




function names(){

  var a=prompt('please enter the first name:');
  var b=prompt('please enter the second name');
   document.getElementById('six').innerHTML= a+b

} 

function sum(){ var hotel=['the One&Only','the Sofitel Sanya Leeman','the Sanya EDITION beach hotels','Ritz-Carlton','Shangri-La'];
var name=prompt('enter your name');
var choice=parseInt(prompt('choose 0 for the One&Only ,choose 1 for the Sofitel Sanya Leeman,choose 2 for the Sanya EDITION beach hotels,choose 3 for Ritz-Carlton,choose 4 for Shangri-La'));
document.getElementById('fjc').innerHTML=name+ " "+'likes'+" "+hotel[choice]}










function one() {
  window.alert("Widely rated as one of China's best beaches, Dàdōnghǎi is a few miles down the coast from Sanya and occupies a stunning bay, with pure blue waters. It fills up in peak season, but when the crowds aren't too heavy, it's a wonderful place to be.")}

function two() {
  window.alert("Also dubbed Monkey Island, Nan Wan is home to a huge macaque colony, many of them tame enough to serve as a greeting party when guests disembark. The 7,000 ft ropeway is also not to be missed for thrill-seekers.");
}

function three() {
  window.alert("Set across 18 square miles, Yanoda is another world. You can hike to waterfalls in Dream Valley, see exotic plants in Rainforest Valley, and even camp out overnight, with folk music performances throughout the evening.");
}

function four() {
  window.alert("Another gorgeous bay, Yalong is the place to swim or snorkel near Sanya. Reefs filled with multicolored fish are 30 feet below the surface, while the bay's waters remain warm and welcoming all year round.");
}

function five() {
  window.alert("Located 25 miles away from Sanya, Nanshan is a thriving Buddhist complex that is worth visiting for the buzz of the community alone, but it also hosts some incredible vegetarian restaurants on-site.");
}

function six() {
  window.alert("Declared a World Heritage Site in 1985, Petra was the capital of the Nabataean empire of King Aretas IV, and likely existed in its prime from 9 B.C. to A.D. 40. The members of this civilization proved to be early experts in manipulating water technology, constructing intricate tunnels and water chambers, which helped create an pseudo-oasis. A number of incredible structures carved into stone, a 4,000-seat amphitheater and the El-Deir monastery have also helped the site earn its fame.");
}

function seven() {
  window.alert("Built between the 5th century B.C. and the 16th century, the Great Wall of China is a stone-and-earth fortification created to protect the borders of the Chinese Empire from invading Mongols. The Great Wall is actually a succession of multiple walls spanning approximately 4,000 miles, making it the world's longest manmade structure.");
}


$('.slider').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;
  
  function move(newIndex) {
    var animateLeft, slideLeft;
    
    advance();
    
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
    
    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');
    
    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }
    
    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }
  
  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }
  
  $('.next_btn').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });
  
  $('.previous_btn').on('click', function() {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });
  
  $.each($slides, function(index) {
    var $button = $('<a class="slide_btn">&bull;</a>');
    
    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
  });
  
  advance();
});






