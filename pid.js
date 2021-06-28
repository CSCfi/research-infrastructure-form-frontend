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
    var hiddeninput = [];
    elemList.forEach(elem => hiddeninput.push(document.querySelector('[name="'+ elem.dataset.name +'"]')))
    data.keywords.forEach(item => addTag(item.keyword,getElem,window.tagslist[0],hiddeninput[0]))

    //2a Service
    document.getElementById('infraConNameFi').value = (data.infraConPoint[0].infraConNameFi == 0) ? "" : data.infraConPoint[0].infraConNameFi
    document.getElementById('infraConNameEn').value = (data.infraConPoint[0].infraConNameEn == 0) ? "" : data.infraConPoint[0].infraConNameEn
    document.getElementById('infraConNameSv').value = (data.infraConPoint[0].infraConNameSv == 0) ? "" : data.infraConPoint[0].infraConNameSv
    document.getElementById('infraConDescrFi').value = (data.infraConPoint[0].infraConDescrFi == 0) ? "" : data.infraConPoint[0].infraConDescrFi
    document.getElementById('infraConDescrEn').value = (data.infraConPoint[0].infraConDescrEn == 0) ? "" : data.infraConPoint[0].infraConDescrEn
    document.getElementById('infraConDescrSv').value = (data.infraConPoint[0].infraConDescrSv == 0) ? "" : data.infraConPoint[0].infraConDescrSv
    document.getElementById('infraConTel').value = (data.infraConPoint[0].infraConPhone == null) ? "" : data.infraConPoint[0].infraConPhone
    document.getElementById('infraConEmail').value = (data.infraConPoint[0].infraConEmail == null) ? "" : data.infraConPoint[0].infraConEmail
    document.getElementById('infraConTel').value = (data.infraConPoint[0].infraConPhone == null) ? "" : data.infraConPoint[0].infraConPhone
    document.getElementById('infraConPost').value = (data.infraConPoint[0].infraConPost== null) ? "" : data.infraConPoint[0].infraConPost
    document.getElementById('infraConTel').value = (data.infraConPoint[0].infraConPhone == null) ? "" : data.infraConPoint[0].infraConPhone
    document.getElementById('infraConInfoEn').value = (data.infraConPoint[0].infraConInfo == null) ? "" : data.infraConPoint[0].infraConInfo
    document.getElementById('infraConTermsEn').value = (data.infraConPoint[0].infraConTerms == 0) ? "" : data.infraConPoint[0].infraConTerms


    //Organisation name
    const organisations = data.responsibleOrganization[0]
    document.getElementById('CoOrgNameFi').value = (organisations.responsibleOrganizationNameFi == 0) ? "" : organisations.responsibleOrganizationNameFi
    document.getElementById('CoOrgNameEn').value = (organisations.responsibleOrganizationNameEn == 0) ? "" : organisations.responsibleOrganizationNameEn
    document.getElementById('CoOrgNameSv').value = (organisations.responsibleOrganizationNameSv == 0) ? "" : organisations.responsibleOrganizationNameSv
    
    //3a
    data.services.forEach((service,index) => {
        if (index == 0) {
            document.getElementById('serNameFi').value = (service.serviceNameFi == 0) ? "" : service.serviceNameFi
            document.getElementById('serNameSv').value = (service.serviceNameSv == 0) ? "" : service.serviceNameSv
            document.getElementById('serNameEn').value = (service.serviceNameEn == 0) ? "" : service.serviceNameEn
            document.getElementById('serDescrFi').value = (service.serviceDescriptionFi == 0) ? "" : service.serviceDescriptionFi
            document.getElementById('serDescrSv').value = (service.serviceDescriptionSv == 0) ? "" : service.serviceDescriptionSv
            document.getElementById('serDescrEn').value = (service.serviceDescriptionEn == 0) ? "" : service.serviceDescriptionEn
            document.getElementById('serDescrsciFi').value = (service.serviceScientificDescriptionFi == 0) ? "" : service.serviceScientificDescriptionFi
            document.getElementById('serDescrsciSv').value = (service.serviceScientificDescriptionSv == 0) ? "" : service.serviceScientificDescriptionSv 
            document.getElementById('serDescrsciEn').value = (service.serviceScientificDescriptionEn == 0) ? "" : service.serviceScientificDescriptionEn
            document.getElementById('serAbbrev').value = (service.serviceAcronym == 0) ? "" : service.serviceAcronym
            document.getElementById('serType').value = (service.serviceType == 0) ? "" : service.serviceType
        }
        else{
            addSection('moreServices')
            document.getElementById('serNameFi'+(index-1)).value = (service.serviceNameFi == 0) ? "" : service.serviceNameFi
            document.getElementById('serNameSv'+(index-1)).value = (service.serviceNameSv == 0) ? "" : service.serviceNameSv
            document.getElementById('serNameEn'+(index-1)).value = (service.serviceNameEn == 0) ? "" : service.serviceNameEn
            document.getElementById('serDescrFi'+(index-1)).value = (service.serviceDescriptionFi == 0) ? "" : service.serviceDescriptionFi
            document.getElementById('serDescrSv'+(index-1)).value = (service.serviceDescriptionSv == 0) ? "" : service.serviceDescriptionSv
            document.getElementById('serDescrEn'+(index-1)).value = (service.serviceDescriptionEn == 0) ? "" : service.serviceDescriptionEn
            document.getElementById('serDescrsciFi'+(index-1)).value = (service.serviceScientificDescriptionFi == 0) ? "" : service.serviceScientificDescriptionFi
            document.getElementById('serDescrsciSv'+(index-1)).value = (service.serviceScientificDescriptionSv == 0) ? "" : service.serviceScientificDescriptionSv 
            document.getElementById('serDescrsciEn'+(index-1)).value = (service.serviceScientificDescriptionEn == 0) ? "" : service.serviceScientificDescriptionEn
            document.getElementById('serAbbrev'+(index-1)).value = (service.serviceAcronym == 0) ? "" : service.serviceAcronym
            document.getElementById('serType'+(index-1)).value = (service.serviceType == 0) ? "" : service.serviceType
        }
    })
    

}