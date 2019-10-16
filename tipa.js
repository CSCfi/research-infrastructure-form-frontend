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
  <div class="test">
    <fieldset class="white">
      <legend>
          <h2>3. Tutkimusinfrastruktuurin palvelu</h2>
      </legend>

      <!-- --------------- 3a service information---------------- -->

      <legend>
          <h3>3a. Palvelun tiedot</h3>
      </legend>

      <label for="serName">Palvelun nimi<span style="color: red important!;">*</span></label>
      <input type="text" id="serName" name="serName" class="field require-if-active"> <!-- https://css-tricks.com/exposing-form-fields-radio-button-css/ !-->

      <label for="serDescr">Palvelun kuvaus </label>
      <p class="info"><a class="ohje">&#9432;</a> Palvelun sisällön ja toiminnan yleinen kuvaus.</p>
      <input type="text" id="serDescr" name="serDescr" class="field">

      <label for="serDescriptionsci">Tieteellinen kuvaus</label>
      <p class="info"><a class="ohje">&#9432;</a> Tarvittaessa tarkempi kuvaus palvelusta. Esimerkiksi laitteisto, tarjottavat mittausmenetelmät, jne.</p>
      <input type="text" id="serDescrsci" name="serDescrsci" class="field">


      <label for="serAbbrev">Lyhenne</label>
      <p class="info"><a class="ohje">&#9432;</a> Mikäli palvelulla on vakiintunut ja käytössä oleva lyhenne tai lyhenne, jota halutaan käytettäväksi.</p>
      <input type="text" id="serAbbrev" name="serAbbrev" class="field">

      <label for="serType" class="dropdown">Palvelun tyyppi<span style="color: red important!;">*</span>
      <select id="serType" name="serType">
          <option selected value="base" disabled>Valitse</option>
          <option value="aineisto">Aineisto</option>
          <option value="laitteisto">Laitteisto</option>
          <option value="palvelu">Palvelu</option>
      </select></label>

      <!-- ------------------ option checkbox / Servive contact information ---------------- -->

      <fieldset>
          <legend>
              <h3>3b. Palvelun yhteystiedot</h3>
          </legend>

          <label for="SerPointSame">
              <input type="checkbox" id="SerPointSame" name="SerPointSame" value="yes" onclick="toggleElement('hidden_fields2${addedDivs}', this.checked)" />
              Palvelun yhteystiedot ovat eri kuin kohdassa 2a.
          </label>
      </fieldset>

      <!-- Tähän tarvitaan toiminto jos klikattu = kopioi tiedot kohdasta 2a. -->

      <!-- -------(SerPoint)----- Option fields for service contact info (other than 2a)------------ -->

      
      <div id="hidden_fields2${addedDivs}" class="hidden">
          <fieldset id="SerPointOther">

            <legend>
                <h3>Palvelun yhteystiedot (eri kuin kohdassa 2a ilmoitetut)</h3>
            </legend>

            <label for="SerPointName">Palvelupisteen nimi<span style="color: red important!;">*</span></label>
            <p class="info"><a class="ohje">&#9432;</a> Yhteyspisteen tai palvelusta vastaavan henkilön nimi</p>
            <input type="text" id="SerPointName" name="SerPointName" class="field">


            <label for="SerPointDescr">Palvelupisteen kuvaus</label>
            <p class="info"><a class="ohje">&#9432;</a> Tarvittaessa tarkempi kuvaus yhteystiedon roolista. Esimerkiksi onko kyse tutkimushenkilökunnasta, teknisestä tuesta, hallinnollisesta yhteyshenkilöstä jne.</p>
            <textarea id="SerPointDescr" name="SerPointDescr" class="field"></textarea>

            <label for="SerPointTel">Puhelinnumero<span style="color: red important!;">*</span></label>
            <input type="tel" id="SerPointTel" name="SerPointTel" class="field">

            <label for="SerPointEmail">Sähköposti<span style="color: red important!;">*</span> </label>
            <input type="email" id="SerPointEmail" name="SerPointEmail" class="field">

            <label for="SerPointPost">Postiosoite<span style="color: red important!;">*</span></label>
            <input type="text" id="SerPointPost" name="SerPointPost" class="field">

            <label for="SerPointInfo">Linkki lisätietoihin</label>
            <p class="info"><a class="ohje">&#9432;</a> Esimerkiksi infrastruktuurin kotisivu jne.</p>
            <input type="url" id="SerPointInfo" name="SerPointInfo" class="field">

            <label for="SerPointTerms">Linkki käyttöehtoihin</label>
            <p class="info"><a class="ohje">&#9432;</a> Tutkimusinfrastruktuurin käyttöehdot kertova dokumentti tai verkkosivu.</p>
            <input type="url" id="SerPointTerms" name="SerPointTerms" class="field">


            <label for="SerPointMuninci">Kuntatieto <a href="#" target="_blank">(koodisto)</a><span style="color: red important!;">*</span></label>
            <input type="text" id="SerPointMuninci" name="SerPointMuninci" class="field">

            <label for="SerPointCountry" class="dropdown">Maa<span style="color: red important!;">*</span></label>

            <select id="SerPointCountry" name="SerPointCountry">
            </select>

            <label for="SerPointLatitude">Leveysaste</label>
            <p class="info"><a class="ohje">&#9432;</a> <strong>Desimaaleina, 64 bit.</strong> Infrastruktuurit voivat olla sijoittuneena laajasti. Joskus esimerkiksi mittausaseman sijainti on tieto, joka halutaan välittää eteenpäin.</p>
            <input type="number" min="0" value="0" step=".01" id="SerPointLatitude" name="SerPointLatitude" class="field">

            <label for="SerPointLongitude">Pituusaste</label>
            <p class="info"><a class="ohje">&#9432;</a> <strong>Desimaaleina, 64 bit.</strong> Infrastruktuurit voivat olla sijoittuneena laajasti. Joskus esimerkiksi mittausaseman sijainti on tieto, joka halutaan välittää eteenpäin.</p>
            <input type="number" min="0" value="0" step=".01" id="SerPointLongitude" name="SerPointLongitude" class="field">

          </fieldset>
      </div>
      


      <!-- -------(SerCoOrg)------ Option checkbox / responsible organisation ---------------- !-->

      <fieldset>
          <legend>
              <h3>3c. Koordinoiva organisaatio</h3>
          </legend>

          <label for="SerCoOrg">
              <input type="checkbox" id="SerCoOrg" name="SerCoOrg" value="yes" onclick="toggleElement('hidden_fields3${addedDivs}', this.checked)"/>
              Palvelua koordinoiva organisaatio on eri kuin kohdassa 2b.
          </label>

      </fieldset>

      <!-- -----(CoOrg_oth)------- 3c option fields for responsible organisation (other than 2b) --->


      <div id="hidden_fields3${addedDivs}" class="hidden"> 
      <fieldset id="SerCoOrgOther">
          

          <legend>
              <h2>Koordinoiva organisaatio (eri kuin kohdassa 2b)</h2>
          </legend>

          <label for="CoOrgName_oth">Organisaation nimi<span style="color: red important!;">*</span></label>
          <input type="text" id="CoOrgName_oth" name="CoOrgName_oth" class="field">

          <label for="CoOrgID_oth">Y-tunnus<span style="color: red important!;">*</span></label>
          <input type="text" id="CoOrgID_oth" name="CoOrgID_oth" class="field" pattern="([0-9]{7} - [0-9]{1})" placeholder="1234567-8">

          <label for="CoOrgIsni_oth">ISNI</label>
          <input type="text" id="CoOrgIsni_oth" name="CoOrgIsni_oth" class="field" pattern="([0-9]{15} [a-zA-Z0-9]{1})" placeholder="0000 0000 0000 0000">

      </fieldset> 
      </div>
                        



      <!-- --------(_Add)-----Option checkbox / additional contact information ---------------- -->

      <fieldset>
          <legend>
              <h3>3d. Palvelun muut palvelupisteet</h3>
          </legend>

          <label for="SerPointOther_add">
              <input type="checkbox" id="SerPointOther_add" name="SerPointOther_add" value="yes" onclick="toggleElement('hidden_fields4${addedDivs}', this.checked)"/>
              Palvelulla on kohdassa 2a ja 3b ilmoitettujen palvelupisteiden lisäksi myös muita palvelupisteitä.
          </label>
      </fieldset>

      <!-- ------(_Add)------ 3d option fields for additional contact information ----------- -->


      <div id="hidden_fields4${addedDivs}" class="hidden">
          <fieldset id="AddOtherSerPoint">

            <legend>
                <h3>Saman palvelun muut palvelupisteet</h3>
            </legend>


            <label for="SerPointName_add">Palvelupisteen nimi<span style="color: red important!;">*</span></label>
            <p class="info"><a class="ohje">&#9432;</a> Yhteyspisteen tai palvelusta vastaavan henkilön nimi</p>
            <input type="text" id="SerPointName_add" name="SerPointName_add" class="field">


            <label for="SerPointDescr_add">Palvelupisteen kuvaus</label>
            <p class="info"><a class="ohje">&#9432;</a> Tarvittaessa tarkempi kuvaus yhteystiedon roolista. Esimerkiksi onko kyse tutkimushenkilökunnasta, teknisestä tuesta, hallinnollisesta yhteyshenkilöstä jne.</p>
            <textarea id="SerPointDescr_add" name="SerPointDescr_add" class="field"></textarea>

            <label for="SerPointTel_add">Puhelinnumero<span style="color: red important!;">*</span></label>
            <input type="tel" id="SerPointTel_add" name="SerPointTel_add" class="field">

            <label for="SerPointEmail_add">Sähköposti<span style="color: red important!;">*</span> </label>
            <input type="email" id="SerPointEmail_add" name="SerPointEmail_add" class="field">

            <label for="SerPointPost_add">Postiosoite<span style="color: red important!;">*</span></label>
            <input type="text" id="SerPointPost_add" name="SerPointPost_add" class="field">

            <label for="SerPointInfo_add">Linkki lisätietoihin</label>
            <p class="info"><a class="ohje">&#9432;</a> Esimerkiksi infrastruktuurin kotisivu jne.</p>
            <input type="url" id="SerPointInfo_add" name="SerPointInfo_add" class="field">

            <label for="SerPointTerms_add">Linkki käyttöehtoihin</label>
            <p class="info"><a class="ohje">&#9432;</a> Tutkimusinfrastruktuurin käyttöehdot kertova dokumentti tai verkkosivu.</p>
            <input type="url" id="SerPointTerms_add" name="SerPointTerms_add" class="field">


            <label for="SerPointMuninci_add">Kuntatieto <a href="#" target="_blank">(koodisto)</a><span style="color: red important!;">*</span></label>
            <input type="text" id="SerPointMuninci_add" name="SerPointMuninci_add" class="field">

            <label for="SerPointCountry_add" class="dropdown">Maa<span style="color: red important!;">*</span></label>

            <select id="SerPointCountry_add" name="SerPointCountry_add">
            </select>

            <label for="SerPointLatitude_add">Leveysaste</label>
            <p class="info"><a class="ohje">&#9432;</a> <strong>Desimaaleina, 64 bit.</strong> Infrastruktuurit voivat olla sijoittuneena laajasti. Joskus esimerkiksi mittausaseman sijainti on tieto, joka halutaan välittää eteenpäin.</p>
            <input type="number" min="0" value="0" step=".01" id="SerPointLatitude_add" name="SerPointLatitude_add" class="field">

            <label for="SerPointLongitude_add">Pituusaste</label>
            <p class="info"><a class="ohje">&#9432;</a> <strong>Desimaaleina, 64 bit.</strong> Infrastruktuurit voivat olla sijoittuneena laajasti. Joskus esimerkiksi mittausaseman sijainti on tieto, joka halutaan välittää eteenpäin.</p>
            <input type="number" min="0" value="0" step=".01" id="SerPointLongitude_add" name="SerPointLongitude_add" class="field">

          </fieldset>
      </div>
    </fieldset>
    <button class="cta-pal" onclick="addSection('${id}')" type="button">Lisää uusi palvelu</button>
  </div>
  `;
  addedDivs++;
  const newDiv = document.createElement("div");
  newDiv.innerHTML = markup;
  document.getElementById(id).append(newDiv);
}

// Wait for DOM to load, then populate selects
window.addEventListener("DOMContentLoaded", function() {
  // Go through each select list
  countrySelectIds.forEach(id => {
    // Get the current select element
    let select = document.getElementById(id);
    // Add each country option to the select list
    countryList.forEach(elem => {
      select.options.add(new Option(elem.text, elem.code));
    });
  });
}, false)


// Variables related to populating the select fields
let countrySelectIds = ['infraCountry', 'SerPointCountry', 'SerPointCountry_add'];
