function loadDoc() {
  var urn = document.getElementById('ttv_id').value.slice(-10)
  var url = "https://researchfi-api-production-researchfi.rahtiapp.fi/portalapi/infrastructure/_search?q=urn:" + urn
  var xhttp = new XMLHttpRequest()

  xhttp.open("GET",url,true)
  xhttp.send()
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        try {
            const jsonObj = JSON.parse(xhttp.responseText)
            const data = jsonObj.hits.hits[0]._source
            console.log(data)
            setValues(data)
        } catch (e) {
            console.warn(e)
        }
   }
};
}

function setValues(data) {
    //Ifrastructure name
    document.getElementById('infraNameFi').value = (data.nameFi == 0) ? "" : data.nameFi
    document.getElementById('infraNameEn').value = (data.nameEn == 0) ? "" : data.nameEn
    document.getElementById('infraNameSv').value = (data.nameSv == 0) ? "" : data.nameSv
    //Abbreviation
    document.getElementById('infraAbbrev').value = (data.acronym == 0) ? "" : data.acronym
    //Description
    document.getElementById('infraDescrFi').value = (data.descriptionFi == 0) ? "" : data.descriptionFi
    document.getElementById('infraDescrEn').value = (data.descriptionEn == 0) ? "" : data.descriptionEn
    document.getElementById('infraDescrSv').value = (data.descriptionSv == 0) ? "" : data.descriptionSv
    //Scientific Description
    document.getElementById('infraDescrSciFi').value = (data.scientificDescriptionFi == 0) ? "" : data.scientificDescriptionFi
    document.getElementById('infraDescrSciEn').value = (data.scientificDescriptionEn == 0) ? "" : data.scientificDescriptionEn
    document.getElementById('infraDescrSciSv').value = (data.scientificDescriptionSv == 0) ? "" : data.scientificDescriptionSv
    // Dates
    document.getElementById('startYear').value = (data.startYear == 0) ? "" : data.startYear
    document.getElementById('endYear').value = (data.endYear == 0) ? "" : data.endYear

    //Roadmap, ESFRI and Meril
    if (data.finlandRoadmap == true) {
        document.getElementById("infraAcafi").checked = true
    }
    document.getElementById('infraEsfri').value = (data.ESFRICodes == null) ? "" : data.ESFRICodes
    document.getElementById('infraMeril').value = (data.merilCodes == null) ? "" : data.merilCodes
    //Keywords
 
    const getElem = document.getElementById('tags-input')
    var elemList = [];
    window.idlist.forEach(id => elemList.push(document.getElementById(id)))
    console.log(elemList)
    var hiddeninput = [];
    elemList.forEach(elem => hiddeninput.push(document.querySelector('[name="'+ elem.dataset.name +'"]')))
    console.log(hiddeninput)
    addTag(data.keywords[0].keyword,getElem,window.tagslist[0],hiddeninput[0])
    
    

}