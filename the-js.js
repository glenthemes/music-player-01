<!-------MUSIC PLAYER BY GLENTHEMES------->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
<script>
function toggleSound() {
  var songfile = document.getElementById('audio');
  if (songfile.paused)
    songfile.play();
  else
    songfile.pause();}
$(document).ready(function(){
$(".pressplay").click(function() {
    $('.ongaku').toggleClass('lineschange');
    $('.ongaku').toggleClass('onionchange');
});
});

function restart() {
    $('.ongaku').toggleClass('lineschange');
    $('.ongaku').toggleClass('onionchange');
}
</script>
<link href="https://fonts.googleapis.com/css?family=Karla" rel="stylesheet">
