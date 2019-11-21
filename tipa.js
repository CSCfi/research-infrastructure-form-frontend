let addedDivs = 0;

function toggleElement(id, visible) {
  const elem = document.getElementById(id);

  if (visible) {
    elem.classList.remove('hidden');
  } else {
    elem.classList.add('hidden')
  }
}

function addSection(id) {
  const markup = `
  <div id="newService${addedDivs}">
    <fieldset class="white">
      <legend>
      <h2 class="form-header">3. Tutkimusinfrastruktuurin palvelu</h2>
      </legend>

      <!-- --------------- 3a service information---------------- -->

      <legend>
      <h3 class="sub-header">3a. Palvelun tiedot</h3>
      </legend>

      <label class="required" for="serName${addedDivs}">Palvelun nimi</label>
      <input type="text" id="serName${addedDivs}" name="serName${addedDivs}"> 

      <label for="serDescr${addedDivs}">Palvelun kuvaus
        <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Palvelun sisällön ja toiminnan yleinen kuvaus</span></div>
      </label>
      <input type="text" id="serDescr${addedDivs}" name="serDescr${addedDivs}" class="field">

      <label for="serDescriptionsci${addedDivs}">Tieteellinen kuvaus
        <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tarvittaessa tarkempi kuvaus palvelusta. Esimerkiksi laitteisto, tarjottavat mittausmenetelmät, jne.</span></div>
      </label>
      <input type="text" id="serDescrsci${addedDivs}" name="serDescrsci${addedDivs}" class="field">


      <label for="serAbbrev${addedDivs}">Lyhenne
        <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Mikäli palvelulla on vakiintunut ja käytössä oleva lyhenne tai lyhenne, jota halutaan käytettäväksi</span></div>
      </label>
      <input type="text" id="serAbbrev${addedDivs}" name="serAbbrev${addedDivs}" class="field">

      <label class="required" for="serType${addedDivs}" class="dropdown">Palvelun tyyppi
      <select id="serType${addedDivs}" name="serType${addedDivs}">
          <option selected value="base" disabled>Valitse</option>
          <option value="aineisto">Aineisto</option>
          <option value="laitteisto">Laitteisto</option>
          <option value="palvelu">Palvelu</option>
      </select></label>

      <!-- ------------------ option checkbox / Servive contact information ---------------- -->

      <fieldset>
          <legend>
            <h3 class="sub-header">3b. Palvelun yhteystiedot</h3>
          </legend>

          <label for="SerPointSame${addedDivs}">
              <input type="checkbox" class="box" id="SerPointSame${addedDivs}" name="SerPointSame${addedDivs}" value="yes" onclick="toggleElement('hidden_fields2${addedDivs}', this.checked)" />
              Palvelun yhteystiedot ovat eri kuin kohdassa 2a.
          </label>
      </fieldset>

      <!-- Tähän tarvitaan toiminto jos klikattu = kopioi tiedot kohdasta 2a. -->

      <!-- -------(SerPoint)----- Option fields for service contact info (other than 2a)------------ -->

      
      <div id="hidden_fields2${addedDivs}" class="hidden">
          <fieldset id="SerPointOther${addedDivs}">

          <legend>
            <h3 class="sub-header">Palvelun yhteystiedot (eri kuin kohdassa 2a ilmoitetut)</h3>
          </legend>

          <label class="required" for="SerPointName${addedDivs}">Palvelupisteen nimi
             <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Yhteyspisteen tai palvelusta vastaavan henkilön nimi</span></div>
          </label>
          <input type="text" id="SerPointName${addedDivs}" name="SerPointName${addedDivs}" class="field">

          <label for="SerPointDescr${addedDivs}">Palvelupisteen kuvaus
             <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tarvittaessa tarkempi kuvaus yhteystiedon roolista. Esimerkiksi onko kyse tutkimushenkilökunnasta, teknisestä tuesta, hallinnollisesta yhteyshenkilöstä jne.</span></div>
          </label>
          <textarea id="SerPointDescr${addedDivs}" name="SerPointDescr${addedDivs}" class="field"></textarea>

          <label class="required" for="SerPointTel${addedDivs}">Puhelinnumero</label>
          <input type="tel" id="SerPointTel${addedDivs}" name="SerPointTel${addedDivs}" class="field">

          <label class="required" for="SerPointEmail${addedDivs}">Sähköposti </label>
          <input type="email" id="SerPointEmail${addedDivs}" name="SerPointEmail${addedDivs}" class="field">

          <label class="required" for="SerPointPost${addedDivs}">Postiosoite</label>
          <input type="text" id="SerPointPost${addedDivs}" name="SerPointPost${addedDivs}" class="field">

          <label for="SerPointInfo${addedDivs}">Linkki lisätietoihin
            <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Esimerkiksi infrastruktuurin kotisivu jne.</span></div>
          </label>
          <input type="url" id="SerPointInfo${addedDivs}" name="SerPointInfo${addedDivs}" class="field">

          <label for="SerPointTerms${addedDivs}">Linkki käyttöehtoihin
            <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tutkimusinfrastruktuurin käyttöehdot kertova dokumentti tai verkkosivu</span></div>
          </label>
          <input type="url" id="SerPointTerms${addedDivs}" name="SerPointTerms${addedDivs}" class="field">


          <label class="required" for="SerPointMuninci${addedDivs}">Kuntatieto <a href="#" target="_blank">(koodisto)</a></label>
          <input type="text" id="SerPointMuninci${addedDivs}" name="SerPointMuninci${addedDivs}" class="field">

          <label class="required" for="SerPointCountry${addedDivs}" class="dropdown">Maa</label>

          <select id="SerPointCountry${addedDivs}" name="SerPointCountry${addedDivs}">
          </select>

          <label for="SerPointLatitude${addedDivs}">Leveysaste
            <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext"><strong>Desimaaleina, 64 bit.</strong> Infrastruktuurit voivat olla sijoittuneena laajasti. Joskus esimerkiksi mittausaseman sijainti on tieto, joka halutaan välittää eteenpäin.</span></div>
          </label>
          <input type="number" min="0" value="0" step=".01" id="SerPointLatitude${addedDivs}" name="SerPointLatitude${addedDivs}" class="field">

          <label for="SerPointLongitude${addedDivs}">Pituusaste
          <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext"><strong>Desimaaleina, 64 bit.</strong> Infrastruktuurit voivat olla sijoittuneena laajasti. Joskus esimerkiksi mittausaseman sijainti on tieto, joka halutaan välittää eteenpäin.</span></div>
             </label>
          <input type="number" min="0" value="0" step=".01" id="SerPointLongitude${addedDivs}" name="SerPointLongitude${addedDivs}" class="field">

          </fieldset>
      </div>
  


      <!-- -------(SerCoOrg)------ Option checkbox / responsible organisation ---------------- !-->

      <fieldset>
          <legend>
          <h3 class="sub-header">3c. Koordinoiva organisaatio</h3>
          </legend>

          <label for="SerCoOrg${addedDivs}">
              <input type="checkbox" class="box" id="SerCoOrg${addedDivs}" name="SerCoOrg${addedDivs}" value="yes" onclick="toggleElement('hidden_fields3${addedDivs}', this.checked)"/>
              Palvelua koordinoiva organisaatio on eri kuin kohdassa 2b.
          </label>

      </fieldset>

      <!-- -----(CoOrg_oth)------- 3c option fields for responsible organisation (other than 2b) --->


      <div id="hidden_fields3${addedDivs}" class="hidden"> 
        <fieldset id="SerCoOrgOther${addedDivs}">
            

          <legend>
            <h3 class="sub-header">Koordinoiva organisaatio (eri kuin kohdassa 2b)</h3>
          </legend>

          <label class="required" for="CoOrgName_oth${addedDivs}">Organisaation nimi</label>
          <input type="text" id="CoOrgName_oth${addedDivs}" name="CoOrgName_oth${addedDivs}" class="field">

          <label class="required" for="CoOrgID_oth${addedDivs}">Y-tunnus</label>
          <input type="text" id="CoOrgID_oth${addedDivs}" name="CoOrgID_oth${addedDivs}" class="field" pattern="([0-9]{7} - [0-9]{1})" placeholder="1234567-8">

          <label for="CoOrgIsni_oth${addedDivs}">ISNI</label>
          <input type="text" id="CoOrgIsni_oth${addedDivs}" name="CoOrgIsni_oth${addedDivs}" class="field" pattern="([0-9]{15} [a-zA-Z0-9]{1})" placeholder="0000 0000 0000 0000">

        </fieldset> 
      </div>
      



      <!-- --------(_Add)-----Option checkbox / additional contact information ---------------- -->

      <fieldset>
          <legend>
            <h3 class="sub-header">3d. Palvelun muut palvelupisteet</h3>
          </legend>

          <label for="SerPointOther_add${addedDivs}">
              <input type="checkbox" class="box" id="SerPointOther_add${addedDivs}" name="SerPointOther_add${addedDivs}" value="yes" onclick="toggleElement('hidden_fields4${addedDivs}', this.checked)"/>
              Palvelulla on kohdassa 2a ja 3b ilmoitettujen palvelupisteiden lisäksi myös muita palvelupisteitä.
          </label>
      </fieldset>

      <!-- ------(_Add)------ 3d option fields for additional contact information ----------- -->


      <div id="hidden_fields4${addedDivs}" class="hidden">
        <fieldset id="AddOtherSerPoint${addedDivs}">


          <legend>
            <h3 class="sub-header">Saman palvelun muut palvelupisteet</h3>
          </legend>


          <label class="required" for="SerPointName_add${addedDivs}">Palvelupisteen nimi
            <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Yhteyspisteen tai palvelusta vastaavan henkilön nimi</span></div>
          </label>
          <input type="text" id="SerPointName_add${addedDivs}" name="SerPointName_add${addedDivs}" class="field">

          <label for="SerPointDescr_add${addedDivs}">Palvelupisteen kuvaus
            <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tarvittaessa tarkempi kuvaus yhteystiedon roolista. Esimerkiksi onko kyse tutkimushenkilökunnasta, teknisestä tuesta, hallinnollisesta yhteyshenkilöstä jne.</span></div>
          </label>
          <textarea id="SerPointDescr_add${addedDivs}" name="SerPointDescr_add${addedDivs}" class="field"></textarea>

          <label class="required" for="SerPointTel_add${addedDivs}">Puhelinnumero</label>
          <input type="tel" id="SerPointTel_add${addedDivs}" name="SerPointTel_add${addedDivs}" class="field">

          <label class="required" for="SerPointEmail_add${addedDivs}">Sähköposti </label>
          <input type="email" id="SerPointEmail_add${addedDivs}" name="SerPointEmail_add${addedDivs}" class="field">

          <label class="required" for="SerPointPost_add${addedDivs}">Postiosoite</label>
          <input type="text" id="SerPointPost_add${addedDivs}" name="SerPointPost_add${addedDivs}" class="field">

          <label for="SerPointInfo_add${addedDivs}">Linkki lisätietoihin
             <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Esimerkiksi infrastruktuurin kotisivu jne.</span></div>
          </label>
          <input type="url" id="SerPointInfo_add${addedDivs}" name="SerPointInfo_add${addedDivs}" class="field">

          <label for="SerPointTerms_add${addedDivs}">Linkki käyttöehtoihin</label>
            <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext"> Tutkimusinfrastruktuurin käyttöehdot kertova dokumentti tai verkkosivu</span></div>
          </label>
          <input type="url" id="SerPointTerms_add${addedDivs}" name="SerPointTerms_add${addedDivs}" class="field">


          <label class="required" for="SerPointMuninci_add${addedDivs}">Kuntatieto <a href="#" target="_blank">(koodisto)</a></label>
          <input type="text" id="SerPointMuninci_add${addedDivs}" name="SerPointMuninci_add${addedDivs}" class="field">

          <label class="required" for="SerPointCountry_add${addedDivs}" class="dropdown">Maa</label>

          <select id="SerPointCountry_add${addedDivs}" name="SerPointCountry_add${addedDivs}">
          </select>

          <label for="SerPointLatitude_add${addedDivs}">Leveysaste
          <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext"><strong>Desimaaleina, 64 bit.</strong> Infrastruktuurit voivat olla sijoittuneena laajasti. Joskus esimerkiksi mittausaseman sijainti on tieto, joka halutaan välittää eteenpäin.</span></div>
          </label>
          <input type="number" min="0" value="0" step=".01" id="SerPointLatitude_add${addedDivs}" name="SerPointLatitude_add${addedDivs}" class="field">

          <label for="SerPointLongitude_add${addedDivs}">Pituusaste
          <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext"><strong>Desimaaleina, 64 bit.</strong> Infrastruktuurit voivat olla sijoittuneena laajasti. Joskus esimerkiksi mittausaseman sijainti on tieto, joka halutaan välittää eteenpäin.</span></div>
          </label>
          <input type="number" min="0" value="0" step=".01" id="SerPointLongitude_add${addedDivs}" name="SerPointLongitude_add${addedDivs}" class="field">
        </fieldset>
      </div>

  </fieldset>

  
  <!-- ------------------EO  service ---------------- -->

  <!-- --------Additional services 3a-d repeated ---------------- !-->

  <div>
    <button class="cta-pal" value="yes" onclick="addSection('moreServices')" type="button" >Lisää uusi palvelu</button>
                          
    <button class="cta-del" value="yes" onclick="removeSection('newService${addedDivs}')" type="button" >Poista palvelu</button>
  </div>

  </div>
  `;
  addedDivs++;
  const newDiv = document.createElement("div");
  newDiv.innerHTML = markup;
  document.getElementById(id).append(newDiv);
  document.getElementById('extra-services').value = addedDivs.toString();

  countrySelectIds.slice(1).map(s => s + (addedDivs-1)).forEach(id => {
    populateCountryList(id);
  })
}

function removeSection(id) {
  const el = document.getElementById(id);
  el.remove();
}

function populateCountryList(id) {
  // Get the element reference
  let select = document.getElementById(id);
  // Add each country option to the select list
  countryList.forEach(elem => {
    select.options.add(new Option(elem.text, elem.code));
  });
}

// Wait for DOM to load, then populate selects
window.addEventListener("DOMContentLoaded", function() {
  // Go through each select list
  countrySelectIds.forEach(id => {
    populateCountryList(id);
  });
}, false)


// Variables related to populating the select fields
let countrySelectIds = ['infraCountry', 'SerPointCountry', 'SerPointCountry_add'];



