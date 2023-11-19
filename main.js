function menuBar() {
  var a = document.querySelector(".nav_right_side");
  if (a.style.width === "270px") {
    a.style.width = "0px";
  } else {
    a.style.width = "270px";
  }
}

function filterMenu() {
  var a = document.querySelector(".mobilefilt");
  if (a.style.left === "0px") {
    a.style.left = "-290px";
  } else {
    a.style.left = "0px";
  }
}

function user(evt, userRecipeTab) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(userRecipeTab).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpenUser").click();

function userName() {
  var input, filter, profile, user_card, h2, i, txtValue;
  input = document.querySelector("#username");
  filter = input.value.toUpperCase();
  profile = document.querySelector(".user_profile");
  user_card = profile.getElementsByTagName("a");
  for (i = 0; i < user_card.length; i++) {
    h2 = user_card[i].getElementsByTagName("h2")[0];
    txtValue = h2.textContent || h2.innerText;
    if (txtValue.toLocaleUpperCase().indexOf(filter) > -1) {
      user_card[i].style.display = "";
    } else {
      user_card[i].style.display = "none";
    }
  }
}

function inputchecked() {
  var a = location.search.slice(1, location.length);
  document.getElementById(a).checked = true;
}

function searchRecipe() {
  var input, filter, recipecard, recipe_card, recipetext, i, txtValue;
  input = document.querySelector("#searchrecipe");
  filter = input.value.toUpperCase();
  recipecard = document.querySelector(".recipes_card");
  recipe_card = recipecard.getElementsByTagName("a");
  for (i = 0; i < recipe_card.length; i++) {
    recipetext = recipe_card[i].getElementsByTagName("b")[0];
    txtValue = recipetext.textContent || recipetext.innerText;
    if (txtValue.toLocaleUpperCase().indexOf(filter) > -1) {
      recipe_card[i].style.display = "";
    } else {
      recipe_card[i].style.display = "none";
    }
  }
}

function checkPass() {
  var password = document.getElementById("password").value;
  var conf_password = document.getElementById("conf_password").value;
  if (password != conf_password) {
    var alert = document.querySelector(".page_error");
    alert.style.display = "block";
  } 
}

function erhide(){
  var hide = document.querySelector(".page_error");
  hide.style.display = "none";
}

function change(n) {
  var checkbox, filter, recipecard, recipe_card, recipetext, i, txtValue;
  checkbox = n;
  filter = checkbox.toUpperCase();
  recipecard = document.querySelector(".recipes_card");
  recipe_card = recipecard.getElementsByTagName("a");
  for (i = 0; i < recipe_card.length; i++) {
    recipetext = recipe_card[i].querySelectorAll(".recipes_rating > span")[0];
    txtValue = recipetext.textContent || recipetext.innerText;
    if (txtValue.toLocaleUpperCase().indexOf(filter) > -1) {
      recipe_card[i].style.display = "";
    } else {
      recipe_card[i].style.display = "none";
    }
  }
}

function inputchecked() {
  var a = location.search.slice(1, location.length);
  document.getElementById(a).checked = true;
}


function errorshow(){
  document.querySelector(".page_error").style.right = "15px";
}


function date() {
  var date = new Date();
  var mondayDate = date.getDate() - date.getDay() + 1;

  const currentMonday = new Date(date.setDate(mondayDate));

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  var yearMonth = monthNames[currentMonday.getMonth()];

  document.getElementById("firstweek").innerText =
    currentMonday.getDate() +
    " " +
    yearMonth +
    "-" +
    (currentMonday.getDate() + 6) +
    " " +
    yearMonth;

  document.getElementById("secondweek").innerText =
    currentMonday.getDate() +
    7 +
    " " +
    yearMonth +
    "-" +
    (currentMonday.getDate() + 13) +
    " " +
    yearMonth;

  document.getElementById("thirdweek").innerText =
    currentMonday.getDate() +
    14 +
    " " +
    yearMonth +
    "-" +
    (currentMonday.getDate() + 20) +
    " " +
    yearMonth;

  document.getElementById("fourweek").innerText =
    currentMonday.getDate() +
    21 +
    " " +
    yearMonth +
    "-" +
    (currentMonday.getDate() + 27) +
    " " +
    yearMonth;
}
