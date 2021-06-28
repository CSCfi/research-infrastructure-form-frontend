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

      <label for="serNameFi${addedDivs}" class="required">Palvelun nimi <small>(fi)</small></label>
      <input type="text" id="serNameFi${addedDivs}" name="serNameFi${addedDivs}">
      
      <label for="serNameEn${addedDivs}" class="required">Palvelun nimi <small>(en)</small></label>
      <input type="text" id="serNameEn${addedDivs}" name="serNameEn${addedDivs}">
      
      <label for="serNameSv${addedDivs}" class="required">Palvelun nimi <small>(sv)</small></label>
      <input type="text" id="serNameSv${addedDivs}" name="serNameSv${addedDivs}"> 

      <label for="serDescrFi${addedDivs}">Palvelun kuvaus <small>(fi)</small>
          <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Palvelun sisällön ja toiminnan yleinen kuvaus.</span></div>
      </label>
      <input type="text" id="serDescrFi${addedDivs}" name="serDescrFi${addedDivs}" class="field">

      <label for="serDescrEn${addedDivs}">Palvelun kuvaus <small>(en)</small>
          <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Palvelun sisällön ja toiminnan yleinen kuvaus.</span></div>
      </label>
      <input type="text" id="serDescrEn${addedDivs}" name="serDescrEn${addedDivs}" class="field">

      <label for="serDescrSv${addedDivs}">Palvelun kuvaus <small>(sv)</small>
          <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Palvelun sisällön ja toiminnan yleinen kuvaus.</span></div>
      </label>
      <input type="text" id="serDescrSv${addedDivs}" name="serDescrSv${addedDivs}" class="field">



      <label for="serDescriptionsciFi${addedDivs}">Tieteellinen kuvaus <small>(fi)</small>
          <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tarvittaessa tarkempi kuvaus palvelusta. Esimerkiksi laitteisto, tarjottavat mittausmenetelmät, jne.</span></div>
      </label>
      <input type="text" id="serDescrsciFi${addedDivs}" name="serDescrsciFi${addedDivs}" class="field">

      <label for="serDescriptionsciEn${addedDivs}">Tieteellinen kuvaus <small>(en)</small>
          <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tarvittaessa tarkempi kuvaus palvelusta. Esimerkiksi laitteisto, tarjottavat mittausmenetelmät, jne.</span></div>
      </label>
      <input type="text" id="serDescrsciEn${addedDivs}" name="serDescrsciEn${addedDivs}" class="field">

      <label for="serDescriptionsciSv${addedDivs}">Tieteellinen kuvaus <small>(sv)</small>
          <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tarvittaessa tarkempi kuvaus palvelusta. Esimerkiksi laitteisto, tarjottavat mittausmenetelmät, jne.</span></div>
      </label>
      <input type="text" id="serDescrsciSv${addedDivs}" name="serDescrsciSv${addedDivs}" class="field">



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

              <label for="SerPointNameFi${addedDivs}" class="required">Palvelupisteen nimi <small>(fi)</small>
                  <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tähän kirjoitetaan parhaiten yhteystietoa kuvaava nimi. Yhteyspisteen, asiakaspalvelusta vastaavaan henkilön tms. Infrastruktuurin yhteystietoa kuvaava nimi. Tähän ei täytetä palvelun nimeä.</span></div>
              </label>
              <input type="text" id="SerPointNameFi${addedDivs}" name="SerPointNameFi${addedDivs}" class="field">

              <label for="SerPointNameEn${addedDivs}" class="required">Palvelupisteen nimi <small>(en)</small>
              <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tähän kirjoitetaan parhaiten yhteystietoa kuvaava nimi. Yhteyspisteen, asiakaspalvelusta vastaavaan henkilön tms. Infrastruktuurin yhteystietoa kuvaava nimi. Tähän ei täytetä palvelun nimeä.</span></div>
          </label>
          <input type="text" id="SerPointNameEn${addedDivs}" name="SerPointNameEn${addedDivs}" class="field">

          <label for="SerPointNameSv${addedDivs}" class="required">Palvelupisteen nimi <small>(sv)</small>
          <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tähän kirjoitetaan parhaiten yhteystietoa kuvaava nimi. Yhteyspisteen, asiakaspalvelusta vastaavaan henkilön tms. Infrastruktuurin yhteystietoa kuvaava nimi. Tähän ei täytetä palvelun nimeä.</span></div>
      </label>
      <input type="text" id="SerPointNameSv${addedDivs}" name="SerPointNameSv${addedDivs}" class="field">


              <label for="SerPointDescrFi${addedDivs}">Palvelupisteen kuvaus <small>(fi)</small>
                  <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tarvittaessa tarkempi kuvaus yhteystiedon roolista. Esimerkiksi onko kyse tutkimushenkilökunnasta, teknisestä tuesta, hallinnollisesta yhteyshenkilöstä jne.</span></div>
              </label>
              <textarea id="SerPointDescrFi${addedDivs}" name="SerPointDescrFi${addedDivs}" class="field"></textarea>

              <label for="SerPointDescrEn${addedDivs}">Palvelupisteen kuvaus <small>(en)</small>
                  <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tarvittaessa tarkempi kuvaus yhteystiedon roolista. Esimerkiksi onko kyse tutkimushenkilökunnasta, teknisestä tuesta, hallinnollisesta yhteyshenkilöstä jne.</span></div>
              </label>
              <textarea id="SerPointDescrEn${addedDivs}" name="SerPointDescrEn${addedDivs}" class="field"></textarea>

              <label for="SerPointDescrSv${addedDivs}">Palvelupisteen kuvaus <small>(sv)</small>
                  <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tarvittaessa tarkempi kuvaus yhteystiedon roolista. Esimerkiksi onko kyse tutkimushenkilökunnasta, teknisestä tuesta, hallinnollisesta yhteyshenkilöstä jne.</span></div>
              </label>
              <textarea id="SerPointDescrSv${addedDivs}" name="SerPointDescrSv${addedDivs}" class="field"></textarea>

              <label for="SerPointTel${addedDivs}">Puhelinnumero</label>
              <input type="tel" id="SerPointTel${addedDivs}" name="SerPointTel${addedDivs}" class="field">

              <label for="SerPointEmail${addedDivs}" class="required">Sähköposti </label>
              <input type="email" id="SerPointEmail${addedDivs}" name="SerPointEmail${addedDivs}" class="field">

              <label for="SerPointPost${addedDivs}">Postiosoite</label>
              <input type="text" id="SerPointPost${addedDivs}" name="SerPointPost${addedDivs}" class="field">

              <label for="SerPointInfoFi${addedDivs}">Verkkosivu <small>(fi)</small>
                  <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Esimerkiksi infrastruktuurin kotisivu jne.</span></div>
              </label>
              <input type="url" id="SerPointInfoFi${addedDivs}" name="SerPointInfoFi${addedDivs}" class="field">

              <label for="SerPointInfoEn${addedDivs}">Verkkosivu <small>(en)</small>
                  <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Esimerkiksi infrastruktuurin kotisivu jne.</span></div>
              </label>
              <input type="url" id="SerPointInfoEn${addedDivs}" name="SerPointInfoEn${addedDivs}" class="field">

              <label for="SerPointInfoSv${addedDivs}">Verkkosivu <small>(sv)</small>
                  <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Esimerkiksi infrastruktuurin kotisivu jne.</span></div>
              </label>
              <input type="url" id="SerPointInfoSv${addedDivs}" name="SerPointInfoSv${addedDivs}" class="field">

              <label for="SerPointTermsFi${addedDivs}">Linkki käyttöehtoihin <small>(fi)</small>
                  <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tutkimusinfrastruktuurin käyttöehdot kertova dokumentti tai verkkosivu.Esimerkiksi infrastruktuurin kotisivu jne.</span></div>
              </label>
              <input type="url" id="SerPointTermsFi${addedDivs}" name="SerPointTermsFi${addedDivs}" class="field">
              
              <label for="SerPointTermsEn${addedDivs}">Linkki käyttöehtoihin <small>(en)</small>
              <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tutkimusinfrastruktuurin käyttöehdot kertova dokumentti tai verkkosivu.Esimerkiksi infrastruktuurin kotisivu jne.</span></div>
          </label>
          <input type="url" id="SerPointTermsEn${addedDivs}" name="SerPointTermsEn${addedDivs}" class="field">

          <label for="SerPointTermsSv${addedDivs}">Linkki käyttöehtoihin <small>(sv)</small>
          <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tutkimusinfrastruktuurin käyttöehdot kertova dokumentti tai verkkosivu.Esimerkiksi infrastruktuurin kotisivu jne.</span></div>
      </label>
      <input type="url" id="SerPointTermsSv${addedDivs}" name="SerPointTermsSv${addedDivs}" class="field">

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

              <label for="CoOrgOtherNameFi${addedDivs}" class="required">Organisaation nimi <small>(fi)</small></label>
              <input type="text" id="CoOrgOtherNameFi${addedDivs}" name="CoOrgOtherNameFi${addedDivs}" class="field">

              <label for="CoOrgOtherNameEn${addedDivs}" class="required">Organisaation nimi <small>(en)</small></label>
              <input type="text" id="CoOrgOtherNameEn${addedDivs}" name="CoOrgOtherNameEn${addedDivs}" class="field">

              <label for="CoOrgOtherNameSv${addedDivs}" class="required">Organisaation nimi <small>(sv)</small></label>
              <input type="text" id="CoOrgOtherNameSv${addedDivs}" name="CoOrgOtherNameSv${addedDivs}" class="field">

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


              <label for="SerPointName_addFi${addedDivs}" class="required">Palvelupisteen nimi <small>(fi)</small>
                  <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tähän kirjoitetaan parhaiten yhteystietoa kuvaava nimi. Yhteyspisteen, asiakaspalvelusta vastaavaan henkilön tms. Infrastruktuurin yhteystietoa kuvaava nimi. Tähän ei täytetä palvelun nimeä.</span></div>
              </label>
              <input type="text" id="SerPointName_addFi${addedDivs}" name="SerPointName_addFi${addedDivs}" class="field">

              <label for="SerPointName_addEn${addedDivs}" class="required">Palvelupisteen nimi <small>(en)</small>
              <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tähän kirjoitetaan parhaiten yhteystietoa kuvaava nimi. Yhteyspisteen, asiakaspalvelusta vastaavaan henkilön tms. Infrastruktuurin yhteystietoa kuvaava nimi. Tähän ei täytetä palvelun nimeä.</span></div>
          </label>
          <input type="text" id="SerPointName_addEn${addedDivs}" name="SerPointName_addEn${addedDivs}" class="field">

          <label for="SerPointName_addSv${addedDivs}" class="required">Palvelupisteen nimi <small>(sv)</small>
          <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tähän kirjoitetaan parhaiten yhteystietoa kuvaava nimi. Yhteyspisteen, asiakaspalvelusta vastaavaan henkilön tms. Infrastruktuurin yhteystietoa kuvaava nimi. Tähän ei täytetä palvelun nimeä.</span></div>
      </label>
      <input type="text" id="SerPointName_addSv${addedDivs}" name="SerPointName_addSv${addedDivs}" class="field">


              <label for="SerPointDescr_addFi${addedDivs}">Palvelupisteen kuvaus <small>(fi)</small>
                  <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tarvittaessa tarkempi kuvaus yhteystiedon roolista. Esimerkiksi onko kyse tutkimushenkilökunnasta, teknisestä tuesta, hallinnollisesta yhteyshenkilöstä jne.</span></div>
              </label>
              <textarea id="SerPointDescr_addFi${addedDivs}" name="SerPointDescr_addFi${addedDivs}" class="field"></textarea>

              <label for="SerPointDescr_addEn${addedDivs}">Palvelupisteen kuvaus <small>(en)</small>
                  <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tarvittaessa tarkempi kuvaus yhteystiedon roolista. Esimerkiksi onko kyse tutkimushenkilökunnasta, teknisestä tuesta, hallinnollisesta yhteyshenkilöstä jne.</span></div>
              </label>
              <textarea id="SerPointDescr_addEn${addedDivs}" name="SerPointDescr_addEn${addedDivs}" class="field"></textarea>

              <label for="SerPointDescr_addSv${addedDivs}">Palvelupisteen kuvaus <small>(sv)</small>
                  <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tarvittaessa tarkempi kuvaus yhteystiedon roolista. Esimerkiksi onko kyse tutkimushenkilökunnasta, teknisestä tuesta, hallinnollisesta yhteyshenkilöstä jne.</span></div>
              </label>
              <textarea id="SerPointDescr_addSv${addedDivs}" name="SerPointDescr_addSv${addedDivs}" class="field"></textarea>

              <label for="SerPointTel_add${addedDivs}">Puhelinnumero</label>
              <input type="tel" id="SerPointTel_add${addedDivs}" name="SerPointTel_add${addedDivs}" class="field">

              <label for="SerPointEmail_add${addedDivs}" class="required">Sähköposti </label>
              <input type="email" id="SerPointEmail_add${addedDivs}" name="SerPointEmail_add${addedDivs}" class="field">

              <label for="SerPointPost_add${addedDivs}" class="required">Postiosoite</label>
              <input type="text" id="SerPointPost_add${addedDivs}" name="SerPointPost_add${addedDivs}" class="field">

              <label for="SerPointInfo_addFi${addedDivs}">Verkkosivu <small>(fi)</small>
                      <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Esimerkiksi infrastruktuurin kotisivu jne.</span></div>
                  </label>
              <input type="url" id="SerPointInfo_addFi${addedDivs}" name="SerPointInfo_addFi${addedDivs}" class="field">

              <label for="SerPointInfo_addEn${addedDivs}">Verkkosivu <small>(en)</small>
                      <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Esimerkiksi infrastruktuurin kotisivu jne.</span></div>
                  </label>
              <input type="url" id="SerPointInfo_addEn${addedDivs}" name="SerPointInfo_addEn${addedDivs}" class="field">

              <label for="SerPointInfo_addSv${addedDivs}">Verkkosivu <small>(sv)</small>
                      <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Esimerkiksi infrastruktuurin kotisivu jne.</span></div>
                  </label>
              <input type="url" id="SerPointInfo_addSv${addedDivs}" name="SerPointInfo_addSv${addedDivs}" class="field">

              <label for="SerPointTerms_addFi${addedDivs}">Linkki käyttöehtoihin <small>(fi)</small>
                  <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tutkimusinfrastruktuurin käyttöehdot kertova dokumentti tai verkkosivu.</span></div>
              </label>
              <input type="url" id="SerPointTerms_addFi${addedDivs}" name="SerPointTerms_addFi${addedDivs}" class="field">

              <label for="SerPointTerms_addEn${addedDivs}">Linkki käyttöehtoihin <small>(en)</small>
                  <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tutkimusinfrastruktuurin käyttöehdot kertova dokumentti tai verkkosivu.</span></div>
              </label>
              <input type="url" id="SerPointTerms_addEn${addedDivs}" name="SerPointTerms_addEn${addedDivs}" class="field">

              <label for="SerPointTerms_addSv${addedDivs}">Linkki käyttöehtoihin <small>(sv)</small>
                  <div class="tooltip"><i class="fa fa-info-circle"></i><span class="tooltiptext">Tutkimusinfrastruktuurin käyttöehdot kertova dokumentti tai verkkosivu.</span></div>
              </label>
              <input type="url" id="SerPointTerms_addSv${addedDivs}" name="SerPointTerms_addSv${addedDivs}" class="field">

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
  document.getElementById('extra-services').value = addedDivs.toString();
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



