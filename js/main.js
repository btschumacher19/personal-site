
    $( window ).load( function () {
        $( "#loading" ).fadeOut( 500 );
    } );

const me = document.getElementById('about-me');
const dot = document.getElementById('dot-holder')
const tedot = document.querySelector('.dot')
const image = document.getElementById('left-right')


me.addEventListener('click', event => {
    tedot.classList.toggle("slider")
    image.classList.toggle("visible")
    me.classList.toggle("visible")
  });
  