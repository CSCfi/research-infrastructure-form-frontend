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
  <hr>
  <fieldset>
      <legend>
          <h2 class="form-header">3. Tutkimusinfrastruktuurin palvelu</h2>
      </legend>

      <!-- --------------- 3a service information---------------- -->

      <legend>
          <h3 class="sub-header">3a. Palvelun tiedot</h3>
      </legend>

      <label for="serName${addedDivs}" class="required">Palvelun nimi</label>
      <input type="text" id="serName${addedDivs}" name="serName${addedDivs}"> 

      <label for="serDescr${addedDivs}">Palvelun kuvaus 
          <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Palvelun sisällön ja toiminnan yleinen kuvaus.</span></div>
      </label>
      <input type="text" id="serDescr${addedDivs}" name="serDescr${addedDivs}" class="field">

      <label for="serDescriptionsci${addedDivs}">Tieteellinen kuvaus
          <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tarvittaessa tarkempi kuvaus palvelusta. Esimerkiksi laitteisto, tarjottavat mittausmenetelmät, jne.</span></div>
      </label>
      <input type="text" id="serDescrsci${addedDivs}" name="serDescrsci${addedDivs}" class="field">

      <label for="serAbbrev${addedDivs}">Lyhenne
          <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Mikäli palvelulla on vakiintunut ja käytössä oleva lyhenne tai lyhenne, jota halutaan käytettäväksi.</span></div>
      </label>
      <input type="text" id="serAbbrev${addedDivs}" name="serAbbrev${addedDivs}" class="field">

      <label for="serType${addedDivs}" class="dropdown required">Palvelun tyyppi</label>
      <select id="serType${addedDivs}" name="serType${addedDivs}">
          <option selected value="base" disabled>Valitse</option>
          <option value="aineisto">Aineisto</option>
          <option value="laitteisto">Laitteisto</option>
          <option value="palvelu">Palvelu</option>
      </select>
      <input type="hidden" name="serType${addedDivs}" value="">


      <!-- ------------------ option checkbox / Servive contact information ---------------- -->

      <fieldset>
          <legend>
              <h3 class="sub-header">3b. Palvelun yhteystiedot</h3>
          </legend>

          <label for="SerPointSame${addedDivs}">
              <input type="checkbox" class="box" id="SerPointSame${addedDivs}" name="SerPointSame${addedDivs}" value="1" onclick="toggleElement('hidden_fields2${addedDivs}', this.checked)"/>
              Palvelun yhteystiedot ovat eri kuin kohdassa 2a.
              <input type="hidden" name="SerPointSame${addedDivs}" value="0"/>
          </label>
      </fieldset>

      <!-- -------(SerPoint)----- Option fields for service contact info (other than 2a)------------ -->


      <div id="hidden_fields2${addedDivs}" class="hidden">
          <fieldset id="SerPointOther${addedDivs}">

              <legend>
                  <h3 class="sub-header">Palvelun yhteystiedot (eri kuin kohdassa 2a ilmoitetut)</h3>
              </legend>

              <label for="SerPointName${addedDivs}" class="required">Palvelupisteen nimi
                  <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tähän kirjoitetaan parhaiten yhteystietoa kuvaava nimi. Yhteyspisteen, asiakaspalvelusta vastaavaan henkilön tms. Infrastruktuurin yhteystietoa kuvaava nimi. Tähän ei täytetä palvelun nimeä.</span></div>
              </label>
              <input type="text" id="SerPointName${addedDivs}" name="SerPointName${addedDivs}" class="field">


              <label for="SerPointDescr${addedDivs}">Palvelupisteen kuvaus
                  <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tarvittaessa tarkempi kuvaus yhteystiedon roolista. Esimerkiksi onko kyse tutkimushenkilökunnasta, teknisestä tuesta, hallinnollisesta yhteyshenkilöstä jne.</span></div>
              </label>
              <textarea id="SerPointDescr${addedDivs}" name="SerPointDescr${addedDivs}" class="field"></textarea>

              <label for="SerPointTel${addedDivs}">Puhelinnumero</label>
              <input type="tel" id="SerPointTel${addedDivs}" name="SerPointTel${addedDivs}" class="field">

              <label for="SerPointEmail${addedDivs}" class="required">Sähköposti </label>
              <input type="email" id="SerPointEmail${addedDivs}" name="SerPointEmail${addedDivs}" class="field">

              <label for="SerPointPost${addedDivs}">Postiosoite</label>
              <input type="text" id="SerPointPost${addedDivs}" name="SerPointPost${addedDivs}" class="field">

              <label for="SerPointInfo${addedDivs}">Verkkosivu
                  <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Esimerkiksi infrastruktuurin kotisivu jne.</span></div>
              </label>
              <input type="url" id="SerPointInfo${addedDivs}" name="SerPointInfo${addedDivs}" class="field">

              <label for="SerPointTerms${addedDivs}">Linkki käyttöehtoihin
                  <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tutkimusinfrastruktuurin käyttöehdot kertova dokumentti tai verkkosivu.Esimerkiksi infrastruktuurin kotisivu jne.</span></div>
              </label>
              <input type="url" id="SerPointTerms${addedDivs}" name="SerPointTerms${addedDivs}" class="field">

              <label for="SerPointCountry${addedDivs}" class="dropdown required">Maa</label>
              <select id="SerPointCountry${addedDivs}" name="SerPointCountry${addedDivs}"></select>

              <label for="SerPointMunicipality${addedDivs}">Kunta</label>
              <input type="text" id="SerPointMunicipality${addedDivs}" name="SerPointMunicipality${addedDivs}" class="field">

          </fieldset>
      </div>



      <!-- -------(SerCoOrg)------ Option checkbox / responsible organisation ---------------- !-->

      <fieldset>
          <legend>
              <h3 class="sub-header">3c. Koordinoiva organisaatio</h3>
          </legend>

          <label for="SerCoOrg${addedDivs}">
              <input type="checkbox" class="box" id="SerCoOrg${addedDivs}" name="SerCoOrg${addedDivs}" value="1" onclick="toggleElement('hidden_fields3${addedDivs}', this.checked)" />
              Palvelua koordinoiva organisaatio on eri kuin kohdassa 2b.
              <input type="hidden" name="SerCoOrg${addedDivs}" value="0"/>
          </label>

      </fieldset>

      <!-- -----(CoOrg_oth)------- 3c option fields for responsible organisation (other than 2b) --->


      <div id="hidden_fields3${addedDivs}" class="hidden">
          <fieldset id="SerCoOrgOther${addedDivs}">


              <legend>
                  <h3 class="sub-header">Koordinoiva organisaatio (eri kuin kohdassa 2b)</h3>
              </legend>

              <label for="CoOrgOtherName${addedDivs}" class="required">Organisaation nimi</label>
              <input type="text" id="CoOrgOtherName${addedDivs}" name="CoOrgOtherName${addedDivs}" class="field">

              <label for="CoOrgOtherID${addedDivs}" class="required">Y-tunnus</label>
              <input type="text" id="CoOrgOtherID${addedDivs}" name="CoOrgOtherID${addedDivs}" class="field" pattern="\\d{7}-\\d" placeholder="1234567-8">

              <label for="CoOrgOtherIsni${addedDivs}">ISNI</label>
              <input type="text" id="CoOrgOtherIsni${addedDivs}" name="CoOrgOtherIsni${addedDivs}" class="field" pattern="(\\d{4}( )?){3}\\d{3}(\\d|[A-Z])" placeholder="0000 0000 0000 0000">

          </fieldset>
      </div>




      <!-- --------(_Add)-----Option checkbox / additional contact information ---------------- -->

      <fieldset>
          <legend>
              <h3 class="sub-header">3d. Palvelun muut palvelupisteet</h3>
          </legend>

          <label for="SerPointOther_add${addedDivs}">
              <input type="checkbox" class="box" id="SerPointOther_add${addedDivs}" name="SerPointOther_add${addedDivs}" value="1" onclick="toggleElement('hidden_fields4${addedDivs}', this.checked)" />
              Palvelulla on kohdassa 2a ja 3b ilmoitettujen palvelupisteiden lisäksi myös muita palvelupisteitä.
              <input type="hidden" name="SerPointOther_add${addedDivs}" value="0"/>                                
          </label>
      </fieldset>

      <!-- ------(_Add)------ 3d option fields for additional contact information ----------- -->


      <div id="hidden_fields4${addedDivs}" class="hidden">
          <fieldset id="AddOtherSerPoint${addedDivs}">
              <legend>
                  <h3 class="sub-header">Saman palvelun muut palvelupisteet</h3>
              </legend>


              <label for="SerPointName_add${addedDivs}" class="required">Palvelupisteen nimi
                  <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tähän kirjoitetaan parhaiten yhteystietoa kuvaava nimi. Yhteyspisteen, asiakaspalvelusta vastaavaan henkilön tms. Infrastruktuurin yhteystietoa kuvaava nimi. Tähän ei täytetä palvelun nimeä.</span></div>
              </label>
              <input type="text" id="SerPointName_add${addedDivs}" name="SerPointName_add${addedDivs}" class="field">


              <label for="SerPointDescr_add${addedDivs}">Palvelupisteen kuvaus
                  <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tarvittaessa tarkempi kuvaus yhteystiedon roolista. Esimerkiksi onko kyse tutkimushenkilökunnasta, teknisestä tuesta, hallinnollisesta yhteyshenkilöstä jne.</span></div>
              </label>
              <textarea id="SerPointDescr_add${addedDivs}" name="SerPointDescr_add${addedDivs}" class="field"></textarea>

              <label for="SerPointTel_add${addedDivs}">Puhelinnumero</label>
              <input type="tel" id="SerPointTel_add${addedDivs}" name="SerPointTel_add${addedDivs}" class="field">

              <label for="SerPointEmail_add${addedDivs}" class="required">Sähköposti </label>
              <input type="email" id="SerPointEmail_add${addedDivs}" name="SerPointEmail_add${addedDivs}" class="field">

              <label for="SerPointPost_add${addedDivs}" class="required">Postiosoite</label>
              <input type="text" id="SerPointPost_add${addedDivs}" name="SerPointPost_add${addedDivs}" class="field">

              <label for="SerPointInfo_add${addedDivs}">Verkkosivu
                      <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Esimerkiksi infrastruktuurin kotisivu jne.</span></div>
                  </label>
              <input type="url" id="SerPointInfo_add${addedDivs}" name="SerPointInfo_add${addedDivs}" class="field">

              <label for="SerPointTerms_add${addedDivs}">Linkki käyttöehtoihin
                  <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tutkimusinfrastruktuurin käyttöehdot kertova dokumentti tai verkkosivu.</span></div>
              </label>
              <input type="url" id="SerPointTerms_add${addedDivs}" name="SerPointTerms_add${addedDivs}" class="field">

              <label for="SerPointCountry_add${addedDivs}" class="dropdown required">Maa</label>
              <select id="SerPointCountry_add${addedDivs}" name="SerPointCountry_add${addedDivs}"></select>

              <label for="SerPointMunicipality_add${addedDivs}">Kunta</label>
              <input type="text" id="SerPointMunicipality_add${addedDivs}" name="SerPointMunicipality_add${addedDivs}" class="field">
    
          </fieldset>
      </div>

    </fieldset>

  </div>
  </div>
  `;
  addedDivs++;
  const newDiv = document.createElement("div");
  newDiv.innerHTML = markup;
  document.getElementById(id).append(newDiv);
  document.getElementById('extra-services').value = addedDivs.toString();
  toggleElement('remove-service', true)

  countrySelectIds.slice(1).map(s => s + (addedDivs-1)).forEach(id => {
    populateCountryList(id);
  })
}

function removeSection() {
  const el = document.getElementById('newService' + (addedDivs-1));
  el.remove();
  addedDivs--;
  toggleElement('remove-service', addedDivs > 0);
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
let countrySelectIds = ['infraConCountry', 'SerPointCountry', 'SerPointCountry_add'];



