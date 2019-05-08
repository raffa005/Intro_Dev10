function lucky(){
	var bet1 = Number(document.forms["input"]["bet1"].value);
	if(bet1 <= 0){
		alert("Bets have to be more than zero, please.");
		document.forms["input"]["bet1"].focus();
    document.forms["input"]["bet1"].value = "";
		return false;
	}

	var n = 0;
  var wins = [bet1];
	for(var money = bet1; money>=1; n++){
		die1 = Math.ceil(Math.random()*6);
		die2 = Math.ceil(Math.random()*6);
		if(Number(die1+die2)==7){
			money = money + 4;
			wins[wins.length] = money;
		}

    else{
			money = money - 1;
			wins[wins.length] = money;
		}
	}

	var max = 0;
	for(var i = 0; i < wins.length; i++){
		if(wins[i] > max){
			max = wins[i];
		}
	}

  document.getElementById("rolls").innerText = n;
	document.getElementById("res").style.display = "block";
	document.getElementById("bet").innerText = ("$" + bet1.toFixed(2));
  document.getElementById("count").innerText = wins.indexOf(max);
	document.getElementById("amount").innerText = ("$" + max.toFixed(2));
	document.forms["input"]["bet1"].focus();
	document.getElementById("sub").innerText = "Play Again";
	return false;
}
