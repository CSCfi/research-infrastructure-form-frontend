let addedDivs = 0;

function toggleElement(id, visible) {
  const elem = document.getElementById(id);

  if (visible) {
    elem.classList.remove('hidden');
  } else {
    elem.classList.add('hidden')
  }
}
---- ${addedDivs}------
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

                            <label for="serName${addedDivs}">Palvelun nimi<span style="color: red !important;">*</span></label>
                            <input type="text" id="serName${addedDivs}" name="serName${addedDivs}" class="field require-if-active"> <!-- https://css-tricks.com/exposing-form-fields-radio-button-css/ !-->

                            <label for="serDescr${addedDivs}">Palvelun kuvaus </label>
                            <p class="info"><a class="ohje">&#9432;</a> Palvelun sisällön ja toiminnan yleinen kuvaus.</p>
                            <input type="text" id="serDescr${addedDivs}" name="serDescr${addedDivs}" class="field">

                            <label for="serDescriptionsci${addedDivs}">Tieteellinen kuvaus</label>
                            <p class="info"><a class="ohje">&#9432;</a> Tarvittaessa tarkempi kuvaus palvelusta. Esimerkiksi laitteisto, tarjottavat mittausmenetelmät, jne.</p>
                            <input type="text" id="serDescrsci${addedDivs}" name="serDescrsci${addedDivs}" class="field">


                            <label for="serAbbrev${addedDivs}">Lyhenne</label>
                            <p class="info"><a class="ohje">&#9432;</a> Mikäli palvelulla on vakiintunut ja käytössä oleva lyhenne tai lyhenne, jota halutaan käytettäväksi.</p>
                            <input type="text" id="serAbbrev${addedDivs}" name="serAbbrev${addedDivs}" class="field">

                            <label for="serType${addedDivs}" class="dropdown">Palvelun tyyppi<span style="color: red !important;">*</span>
                            <select id="serType${addedDivs}" name="serType${addedDivs}">
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

                                <label for="SerPointSame${addedDivs}">
                                    <input type="checkbox" id="SerPointSame${addedDivs}" name="SerPointSame${addedDivs}" value="yes" onclick="toggleElement('hidden_fields2${addedDivs}', this.checked)" />
                                    Palvelun yhteystiedot ovat eri kuin kohdassa 2a.
                                </label>
                            </fieldset>

                            <!-- Tähän tarvitaan toiminto jos klikattu = kopioi tiedot kohdasta 2a. -->

                            <!-- -------(SerPoint)----- Option fields for service contact info (other than 2a)------------ -->

                            
                                <div id="hidden_fields2${addedDivs}${addedDivs}" class="hidden">
                                    <fieldset id="SerPointOther${addedDivs}">

                                    <legend>
                                        <h3>Palvelun yhteystiedot (eri kuin kohdassa 2a ilmoitetut)</h3>
                                    </legend>

                                    <label for="SerPointName${addedDivs}">Palvelupisteen nimi<span style="color: red !important;">*</span></label>
                                    <p class="info"><a class="ohje">&#9432;</a> Yhteyspisteen tai palvelusta vastaavan henkilön nimi</p>
                                    <input type="text" id="SerPointName${addedDivs}" name="SerPointName${addedDivs}" class="field">


                                    <label for="SerPointDescr${addedDivs}">Palvelupisteen kuvaus</label>
                                    <p class="info"><a class="ohje">&#9432;</a> Tarvittaessa tarkempi kuvaus yhteystiedon roolista. Esimerkiksi onko kyse tutkimushenkilökunnasta, teknisestä tuesta, hallinnollisesta yhteyshenkilöstä jne.</p>
                                    <textarea id="SerPointDescr${addedDivs}" name="SerPointDescr${addedDivs}" class="field"></textarea>

                                    <label for="SerPointTel${addedDivs}">Puhelinnumero<span style="color: red !important;">*</span></label>
                                    <input type="tel" id="SerPointTel${addedDivs}" name="SerPointTel${addedDivs}" class="field">

                                    <label for="SerPointEmail${addedDivs}">Sähköposti<span style="color: red !important;">*</span> </label>
                                    <input type="email" id="SerPointEmail${addedDivs}" name="SerPointEmail${addedDivs}" class="field">

                                    <label for="SerPointPost${addedDivs}">Postiosoite<span style="color: red !important;">*</span></label>
                                    <input type="text" id="SerPointPost${addedDivs}" name="SerPointPost${addedDivs}" class="field">

                                    <label for="SerPointInfo${addedDivs}">Linkki lisätietoihin</label>
                                    <p class="info"><a class="ohje">&#9432;</a> Esimerkiksi infrastruktuurin kotisivu jne.</p>
                                    <input type="url" id="SerPointInfo${addedDivs}" name="SerPointInfo${addedDivs}" class="field">

                                    <label for="SerPointTerms${addedDivs}">Linkki käyttöehtoihin</label>
                                    <p class="info"><a class="ohje">&#9432;</a> Tutkimusinfrastruktuurin käyttöehdot kertova dokumentti tai verkkosivu.</p>
                                    <input type="url" id="SerPointTerms${addedDivs}" name="SerPointTerms${addedDivs}" class="field">


                                    <label for="SerPointMuninci${addedDivs}">Kuntatieto <a href="#" target="_blank">(koodisto)</a><span style="color: red !important;">*</span></label>
                                    <input type="text" id="SerPointMuninci${addedDivs}" name="SerPointMuninci${addedDivs}" class="field">

                                    <label for="SerPointCountry${addedDivs}" class="dropdown">Maa<span style="color: red !important;">*</span></label>

                                    <select id="SerPointCountry${addedDivs}" name="SerPointCountry${addedDivs}">
                                    </select>

                                    <label for="SerPointLatitude${addedDivs}">Leveysaste</label>
                                    <p class="info"><a class="ohje">&#9432;</a> <strong>Desimaaleina, 64 bit.</strong> Infrastruktuurit voivat olla sijoittuneena laajasti. Joskus esimerkiksi mittausaseman sijainti on tieto, joka halutaan välittää eteenpäin.</p>
                                    <input type="number" min="0" value="0" step=".01" id="SerPointLatitude${addedDivs}" name="SerPointLatitude${addedDivs}" class="field">

                                    <label for="SerPointLongitude${addedDivs}">Pituusaste</label>
                                    <p class="info"><a class="ohje">&#9432;</a> <strong>Desimaaleina, 64 bit.</strong> Infrastruktuurit voivat olla sijoittuneena laajasti. Joskus esimerkiksi mittausaseman sijainti on tieto, joka halutaan välittää eteenpäin.</p>
                                    <input type="number" min="0" value="0" step=".01" id="SerPointLongitude${addedDivs}" name="SerPointLongitude${addedDivs}" class="field">

                                    </fieldset>
                                </div>
                            


                            <!-- -------(SerCoOrg)------ Option checkbox / responsible organisation ---------------- !-->

                            <fieldset>
                                <legend>
                                    <h3>3c. Koordinoiva organisaatio</h3>
                                </legend>

                                <label for="SerCoOrg${addedDivs}">
                                    <input type="checkbox" id="SerCoOrg${addedDivs}" name="SerCoOrg${addedDivs}" value="yes" onclick="toggleElement('hidden_fields3${addedDivs}', this.checked)"/>
                                    Palvelua koordinoiva organisaatio on eri kuin kohdassa 2b.
                                </label>

                            </fieldset>

                            <!-- -----(CoOrg_oth)------- 3c option fields for responsible organisation (other than 2b) --->


                           <div id="hidden_fields3${addedDivs}${addedDivs}" class="hidden"> 
                           <fieldset id="SerCoOrgOther${addedDivs}">
                                

                                    <legend>
                                        <h2>Koordinoiva organisaatio (eri kuin kohdassa 2b)</h2>
                                    </legend>

                                    <label for="CoOrgName_oth${addedDivs}">Organisaation nimi<span style="color: red !important;">*</span></label>
                                    <input type="text" id="CoOrgName_oth${addedDivs}" name="CoOrgName_oth${addedDivs}" class="field">

                                    <label for="CoOrgID_oth${addedDivs}">Y-tunnus<span style="color: red !important;">*</span></label>
                                    <input type="text" id="CoOrgID_oth${addedDivs}" name="CoOrgID_oth${addedDivs}" class="field" pattern="([0-9]{7} - [0-9]{1})" placeholder="1234567-8">

                                    <label for="CoOrgIsni_oth${addedDivs}">ISNI</label>
                                    <input type="text" id="CoOrgIsni_oth${addedDivs}" name="CoOrgIsni_oth${addedDivs}" class="field" pattern="([0-9]{15} [a-zA-Z0-9]{1})" placeholder="0000 0000 0000 0000">

                               </fieldset> 
                               </div>
                            



                            <!-- --------(_Add)-----Option checkbox / additional contact information ---------------- -->

                            <fieldset>
                                <legend>
                                    <h3>3d. Palvelun muut palvelupisteet</h3>
                                </legend>

                                <label for="SerPointOther_add${addedDivs}">
                                    <input type="checkbox" id="SerPointOther_add${addedDivs}" name="SerPointOther_add${addedDivs}" value="yes" onclick="toggleElement('hidden_fields4${addedDivs}', this.checked)"/>
                                    Palvelulla on kohdassa 2a ja 3b ilmoitettujen palvelupisteiden lisäksi myös muita palvelupisteitä.
                                </label>
                            </fieldset>

                            <!-- ------(_Add)------ 3d option fields for additional contact information ----------- -->


                            <div id="hidden_fields4${addedDivs}${addedDivs}" class="hidden">
                                <fieldset id="AddOtherSerPoint${addedDivs}">


                                    <legend>
                                        <h3>Saman palvelun muut palvelupisteet</h3>
                                    </legend>


                                    <label for="SerPointName_add${addedDivs}">Palvelupisteen nimi<span style="color: red !important;">*</span></label>
                                    <p class="info"><a class="ohje">&#9432;</a> Yhteyspisteen tai palvelusta vastaavan henkilön nimi</p>
                                    <input type="text" id="SerPointName_add${addedDivs}" name="SerPointName_add${addedDivs}" class="field">


                                    <label for="SerPointDescr_add${addedDivs}">Palvelupisteen kuvaus</label>
                                    <p class="info"><a class="ohje">&#9432;</a> Tarvittaessa tarkempi kuvaus yhteystiedon roolista. Esimerkiksi onko kyse tutkimushenkilökunnasta, teknisestä tuesta, hallinnollisesta yhteyshenkilöstä jne.</p>
                                    <textarea id="SerPointDescr_add${addedDivs}" name="SerPointDescr_add${addedDivs}" class="field"></textarea>

                                    <label for="SerPointTel_add${addedDivs}">Puhelinnumero<span style="color: red !important;">*</span></label>
                                    <input type="tel" id="SerPointTel_add${addedDivs}" name="SerPointTel_add${addedDivs}" class="field">

                                    <label for="SerPointEmail_add${addedDivs}">Sähköposti<span style="color: red !important;">*</span> </label>
                                    <input type="email" id="SerPointEmail_add${addedDivs}" name="SerPointEmail_add${addedDivs}" class="field">

                                    <label for="SerPointPost_add${addedDivs}">Postiosoite<span style="color: red !important;">*</span></label>
                                    <input type="text" id="SerPointPost_add${addedDivs}" name="SerPointPost_add${addedDivs}" class="field">

                                    <label for="SerPointInfo_add${addedDivs}">Linkki lisätietoihin</label>
                                    <p class="info"><a class="ohje">&#9432;</a> Esimerkiksi infrastruktuurin kotisivu jne.</p>
                                    <input type="url" id="SerPointInfo_add${addedDivs}" name="SerPointInfo_add${addedDivs}" class="field">

                                    <label for="SerPointTerms_add${addedDivs}">Linkki käyttöehtoihin</label>
                                    <p class="info"><a class="ohje">&#9432;</a> Tutkimusinfrastruktuurin käyttöehdot kertova dokumentti tai verkkosivu.</p>
                                    <input type="url" id="SerPointTerms_add${addedDivs}" name="SerPointTerms_add${addedDivs}" class="field">


                                    <label for="SerPointMuninci_add${addedDivs}">Kuntatieto <a href="#" target="_blank">(koodisto)</a><span style="color: red !important;">*</span></label>
                                    <input type="text" id="SerPointMuninci_add${addedDivs}" name="SerPointMuninci_add${addedDivs}" class="field">

                                    <label for="SerPointCountry_add${addedDivs}" class="dropdown">Maa<span style="color: red !important;">*</span></label>

                                    <select id="SerPointCountry_add${addedDivs}" name="SerPointCountry_add${addedDivs}">
                                    </select>

                                    <label for="SerPointLatitude_add${addedDivs}">Leveysaste</label>
                                    <p class="info"><a class="ohje">&#9432;</a> <strong>Desimaaleina, 64 bit.</strong> Infrastruktuurit voivat olla sijoittuneena laajasti. Joskus esimerkiksi mittausaseman sijainti on tieto, joka halutaan välittää eteenpäin.</p>
                                    <input type="number" min="0" value="0" step=".01" id="SerPointLatitude_add${addedDivs}" name="SerPointLatitude_add${addedDivs}" class="field">

                                    <label for="SerPointLongitude_add${addedDivs}">Pituusaste</label>
                                    <p class="info"><a class="ohje">&#9432;</a> <strong>Desimaaleina, 64 bit.</strong> Infrastruktuurit voivat olla sijoittuneena laajasti. Joskus esimerkiksi mittausaseman sijainti on tieto, joka halutaan välittää eteenpäin.</p>
                                    <input type="number" min="0" value="0" step=".01" id="SerPointLongitude_add${addedDivs}" name="SerPointLongitude_add${addedDivs}" class="field">



                                </fieldset>
                            </div>

                        </fieldset>

                        
                        <!-- ------------------EO  service ---------------- -->

                        <!-- --------Additional services 3a-d repeated ---------------- !-->


                        <button class="cta-pal" value="yes" onclick="addSection('moreServices')" type="button" >Lisää uusi palvelu</button>
                        
  </div>
  `;
  addedDivs++;
  const newDiv = document.createElement("div");
  newDiv.innerHTML = markup;
  document.getElementById(id).append(newDiv);

  countrySelectIds.slice(1).map(s => s + (addedDivs-1)).forEach(id => {
    populateCountryList(id);
  })
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
