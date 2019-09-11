function toggleElement(id, visible) {
  let elem = document.getElementById(id);

  if (visible) {
    elem.classList.remove('hidden');
  } else {
    elem.classList.add('hidden')
  }
}

// HideShow TTV tunniste

// function showHideTTVcode() {
//   var checkBox = document.getElementById("TTV_yes")
//   var text = document.getElementById("TTVcode")
//   var muutpal = document.getElementById("hidden_fieldsTTV")

//   if (!checkBox.checked) {
//     muutpal.classList.add("hide");
//   }
//   else {
//     muutpal.classList.remove("hide")
//   }
// }

// ------------muut HideShow osiot-------------------------

// HideShow 3

function showHidePalveluInfo() {
  var checkBox = document.getElementById("muut")
  var text = document.getElementById("palveluinfo")
  var muutpal = document.getElementById("hidden_fields1")

  if (!checkBox.checked) {
    muutpal.classList.add("hide");
  }
  else {
    muutpal.classList.remove("hide")
  }
}

// require-if-active --- https://css-tricks.com/exposing-form-fields-radio-button-css/

// HideShow 4b

function showHidePPadditional() {
  var checkBox = document.getElementById("PPadditional")
  var text = document.getElementById("PPlisapalvelu")

  if (checkBox.checked == true) {
    text.style.display = "none";
  }
  else {
    text.style.display = "block";
  }
}

// HideShow 4c

function showHideVOadditional() {
  var checkBox = document.getElementById("VOadditional")
  var text = document.getElementById("VOlisapalvelu")

  if (checkBox.checked == true) {
    text.style.display = "none";
  }
  else {
    text.style.display = "block";
  }
}

// HideShow 4d

function showHideMuuPPadditional() {
  var checkBox = document.getElementById("MuuPPadditional")
  var text = document.getElementById("MuuPPlisapalvelu")
  var muut4d = document.getElementById("hidden_fields4")

  if (!checkBox.checked) {
    muut4d.classList.add("hide4d");
  }
  else {
    muut4d.classList.remove("hide4d")
  }
}

// HideShow 5 (additional contact for main infra)

function showHideAddContact() {
  var checkBox = document.getElementById("xtrPPMain")
  var text = document.getElementById("AddContact")
  var AC = document.getElementById("hidden_fields5")

  if (!checkBox.checked) {
    AC.classList.add("hide");
  }
  else {
    AC.classList.remove("hide")
  }
}


// HideShow 2nd service 

function showHide2ndSer() {
  var button = document.getElementById("2ndService")
  var text = document.getElementById("2ndSer")
  var ss = document.getElementById("hidden_fields2ndSer")

  if (!button.clicked) {
    ss.classList.add("hide2ndSer");
  }
  else {
    ss.classList.remove("hide2ndSer")
  }
}
// ------------------- Aloitusvuosi -------------------------


function getSelectValue() {
  var selectedValue = document.getElementById("startYear").value;
  console.log(selectedValue);
}


// ------------------- testi "lisää palveluita" -------------------------



// ------------------- tietosuoja ennen submit -------------------------

//function checkForm(form) {
  //  if(!form.terms.checked){
    //    alert("Varmistus tietosuojaseloste luettu/ ehdot hyväksytty tms");
      //  form.terms.focus();
        //return false;
    //}
    // return.true;
// }

// Wait for DOM to load, then populate selects
window.addEventListener("DOMContentLoaded", function() {
  // Go through each select list
  countrySelectIds.forEach(id => {
    // Get the current select element
    let select = document.getElementById(id);
    // Add each country option to the select list
    countryList.forEach(elem => {
      select.options.add( new Option(elem.text, elem.code));
    });
  });
}, false)


// Variables related to populating the select fields
let countrySelectIds = ['country'];

let countryList = [
  {code: 'FIN', text: 'Suomi'},
  {code: 'AFG', text: 'Afganistan'}
];













