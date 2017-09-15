window.onload = function()
{
  var oCalculator;
  var calcValue;

  oCalculator = document.getElementById("calcResult");

  var oDigits = document.querySelectorAll(".digit");
  for (var i = 0; i < oDigits.length; i++)
  {
    oDigits[i].addEventListener("click", function()
    {
      var curValue = this.value;
      calcValue = oCalculator.innerHTML += curValue;
      if (calcValue.length > 16)
      {
      }
    }
      , false);
  }

  document.querySelector(".zero").addEventListener("click", function()
  {
    var btnZero = this.value;
    if (oCalculator.innerHTML == "")
    {
      calcValue = oCalculator.innerHTML = btnZero;
    }
    else if (oCalculator.innerHTML == calcValue)
    {
      calcValue = oCalculator.innerHTML += btnZero;
    }
  }, false);

  document.querySelector(".period").addEventListener("click", function()
  {
    var btnDecimal = this.value;
    if (oCalculator.innerHTML == "")
    {
      calcValue = oCalculator.innerHTML = oCalculator.innerHTML.concat("0.");
    }
    else if (oCalculator.innerHTML == calcValue)
    {
      oCalculator.innerHTML = oCalculator.innerHTML.concat(".");
    }
  }, false);

  document.querySelector("#btnEqual").addEventListener("click", function()
  {
    if (oCalculator.innerHTML == calcValue)
    {
      oCalculator.innerHTML = eval(calcValue);
    }
    else
    {
      oCalculator.innerHTML = "";
    }
  }, false);

  document.querySelector("#delete").addEventListener("click", function()
  {
    oCalculator.innerHTML = "";
  }, false);

  var oOperators = document.querySelectorAll(".operator");
  for (var i = 0; i < oOperators.length; i++)
  {
    oOperators[i].addEventListener("click", function()
    {
      var curOperator = this.value;
      if (oCalculator.innerHTML == "")
      {
        oCalculator.innerHTML = oCalculator.innerHTML.concat("");
      }
      else if (calcValue)
      {
        oCalculator.innerHTML = calcValue.concat(curOperator);
      }
    }, false);
  }
}