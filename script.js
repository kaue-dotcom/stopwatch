window.onload = function () {
   var minutes = 00; 
   var seconds = 00; 
   var dezenas = 00; 

   var minutesTurn = 00; 
   var turns = 00; 
   var tens = 00; 
   
   var segundos = 00; 
   var milisegundos = 00; 
   var minutos = 00; 

   var volta = "";
   var turn = 1;
   var appendMinutes = document.getElementById("minutes");
   var appendDezenas = document.getElementById("dezenas");
   var appendSeconds = document.getElementById("seconds");
   
   var appendMinutesTurn = document.getElementById("minutesTurn");
   var appendTens = document.getElementById("tens");
   var appendTurns = document.getElementById("turns");

   var buttonTurn = document.getElementById('button-turn');
   var buttonStart = document.getElementById('button-start');
   var buttonStop = document.getElementById('button-stop');
   var buttonReset = document.getElementById('button-reset');
   var Interval;
 
   buttonStart.onclick = function() {
      buttonStop.removeAttribute("disabled", "disabled");
      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
      buttonTurn.style.display = "initial";
   }
   
   buttonStop.onclick = function() {
      if(minutes == 0 && seconds == 0 && dezenas == 0){
         buttonStop.setAttribute("disabled", "disabled");
         $('#message').fadeIn(1000);
         setTimeout(function() { 
            $('#message').fadeOut(1000); 
         }, 5000);

         return;
      }

      clearInterval(Interval);
      buttonTurn.style.display = "none";
   }
   
   buttonReset.onclick = function() {
      /* if you just want to restart the watch without reload * -----------/

      /* clearInterval(Interval);
      dezenas = "00";
      seconds = "00";
      appendDezenas.innerHTML = dezenas;
      appendSeconds.innerHTML = seconds; */

      location.reload();
   }

   buttonTurn.onclick = function() {
      if(minutes == 0 && seconds == 0 && dezenas == 0){
         buttonStop.setAttribute("disabled", "disabled");
         $('#message').fadeIn(1000);
         setTimeout(function() { 
            $('#message').fadeOut(1000); 
         }, 5000);

         return;
      }

      milisegundos = tens;
      segundos = turns;
      minutos = minutesTurn;

      if (minutos == 00 && segundos <= 9){
         volta = "00:" +"0" + segundos + ":" + milisegundos
         $("#volta").append("<span id='voltas'>Volta "+turn+": "+volta+"</span>");
         turn++;
      }else if(minutes <= 9 && segundos <= 9){
         volta = "0"+ minutos+":"+ "0"+segundos + ":" + milisegundos
         $("#volta").append("<span id='voltas'>Volta "+turn+": "+volta+"</span>");
         turn++;
      }else{
         volta = minutos+":"+segundos + ":" + milisegundos
         $("#volta").append("<span id='voltas'>Volta "+turn+": "+volta+"</span>");
         turn++;
      }

      tens = "00";
      turns = "00";
      minutesTurn = "00"
      appendTens.innerHTML = tens;
      appendTurns.innerHTML = turns;
      appendMinutesTurn.innerHTML = minutesTurn;
   }
   
   function startTimer () {
      dezenas++;
      tens++; 
      
      if(dezenas <= 9){
         appendDezenas.innerHTML = "0" + dezenas;
      }
     
      if (dezenas > 9){
         appendDezenas.innerHTML = dezenas;
      } 
     
      if (dezenas > 99) {
         seconds++;
         appendSeconds.innerHTML = "0" + seconds;
         dezenas = 0;
         appendDezenas.innerHTML = "0" + 0;
      }
     
      if (seconds > 9){
         appendSeconds.innerHTML = seconds;
      }

      if (seconds == 59){
         minutes++;
         appendMinutes.innerHTML = "0" + minutes;
         seconds = 0;
      }

      if (minutes > 9){
         appendMinutes.innerHTML = minutes;
      } 

      /* Turns */
      if(tens <= 9){
         appendTens.innerHTML = "0" + tens;
      }
     
      if (tens > 9){
         appendTens.innerHTML = tens;
      } 
     
      if (tens > 99) {
         turns++;
         appendTurns.innerHTML = "0" + turns;
         tens = 0;
         appendTens.innerHTML = "0" + 0;
      }
     
      if (turns > 9){
         appendTurns.innerHTML = turns;
      }

      if (turns == 59){
         minutesTurn++;
         appendMinutesTurn.innerHTML = "0" + minutesTurn;
         turns = 0;
      }

      if (minutesTurn > 9){
         appendMinutesTurn.innerHTML = minutesTurn;
      } 
   
   }
}