// HideShow TTV tunniste

function showHideTTVcode() {
  var checkBox = document.getElementById("TTV_yes")
  var text = document.getElementById("TTVcode")
  var muutpal = document.getElementById("hidden_fieldsTTV")

  if (!checkBox.checked) {
    muutpal.classList.add("hide");
  }
  else {
    muutpal.classList.remove("hide")
  }
}
$(function () {
  var checkbox = $("#TTV_yes");
  var hidden = $("#hidden_fieldsTTV");
  hidden.hide();
  checkbox.change(function () {
    if (checkbox.is(':checked')) {
      hidden.show();
    } else {
      hidden.hide();
    }
  });
});

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
$(function () {
  var checkbox = $("#muut");
  var hidden = $("#hidden_fields1");
  hidden.hide();
  checkbox.change(function () {
    if (checkbox.is(':checked')) {
      hidden.show();
    } else {
      hidden.hide();
    }
  });
});

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
$(function () {
  var checkbox = $("#PPadditional");
  var hidden = $("#hidden_fields2");
  hidden.hide();
  checkbox.change(function () {
    if (checkbox.is(':checked')) {
      hidden.show();
    } else {
      hidden.hide();
    }
  });
});

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
$(function () {
  var checkbox = $("#VOadditional");
  var hidden = $("#hidden_fields3");
  hidden.hide();
  checkbox.change(function () {
    if (checkbox.is(':checked')) {
      hidden.show();
    } else {
      hidden.hide();
    }
  });
});

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
$(function () {
  var checkbox = $("#MuuPPadditional");
  var hidden = $("#hidden_fields4");
  hidden.hide();
  checkbox.change(function () {
    if (checkbox.is(':checked')) {
      hidden.show();
    } else {
      hidden.hide();
    }
  });
});

// ------------------- Aloitusvuosi -------------------------


function getSelectValue() {
  var selectedValue = document.getElementById("startYear").value;
  console.log(SelectedValue);
}
getSelectValue();




// ------------------- testi "lisää palveluita" -------------------------

function addnew4d() {
  var node = document.createElement("hidden_fields4");
  var muut4d = document.getElementById("hidden_fields4");
  node.appendChild(muut4d);
  document.getElementById("hidden_fields4").appendChild(node);
}

// ------------------- tietosuoja ennen submit -------------------------

//function checkForm(form) {
  //  if(!form.terms.checked){
    //    alert("Varmistus tietosuojaseloste luettu/ ehdot hyväksytty tms");
      //  form.terms.focus();
        //return false;
    //}
    // return.true;
// }

















