function splitRaffle() {
   var tokens = document.getElementById("raffle").value.split(",");
   for (let token of tokens) {
      if (parseInt(token) == 3) {
         window.alert("You won!");
         return;
      }
   }
   window.alert("You lost:(");
   return;
}