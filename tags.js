// keywords  https://stackoverflow.com/questions/49527155/tag-key-how-to-add-an-tag-while-pressing-enter-button/49527330

// Intercept document sending with enter
function interceptEnter(evt) {
    if (evt.keyCode === 13) return false;
}
document.onkeypress = interceptEnter;

window.addEventListener("DOMContentLoaded", function() {
    window.idlist = ['tags-input', 'tags-input-en','tags-input-sv']
    window.tagslist = [];
    var tagslist = window.tagslist
    var idlist = window.idlist
    idlist.forEach(id => tagslist.push([]))
    initTags(idlist,tagslist)
    
});

function initTags(elemIds,tagslist) {
    elemIds.forEach((id,index) => {
        const el = document.getElementById(id);
        let hiddenInput = document.createElement('input'),
            tagsInput = document.createElement('input'),
            tags = tagslist[index];
        
        hiddenInput.setAttribute('type', 'hidden');
        hiddenInput.setAttribute('name', el.getAttribute('data-name'));
    
        tagsInput.setAttribute('type', 'text');
        tagsInput.addEventListener('input', function () {
            let enteredTags = tagsInput.value.split(',');
            if (enteredTags.length > 1) {
                enteredTags.forEach(function (t) {
                    let filteredTag = filterTag(t);
                    if (filteredTag.length > 0)
                        addTag(filteredTag,el,tags,tagsInput,hiddenInput);
                });
                tagsInput.value = '';
            }
        });
    
        tagsInput.addEventListener('keydown', function (e) {
            let keyCode = e.which || e.keyCode;
            if (keyCode === 8 && tagsInput.value.length === 0) {
                removeTag(tags.length - 1,tags);
            }
    
           if (event.keyCode === 13 && tagsInput.value.length > 0 ||
               event.keyCode ===  9 && tagsInput.value.length > 0 ||
               event.keyCode === 188 && tagsInput.value.length > 0 ) {
                addTag(tagsInput.value,el,tags,tagsInput,hiddenInput);
                tagsInput.value ="";
            }
    
    
        });
    
        el.appendChild(tagsInput);
        el.appendChild(hiddenInput);
        
    

    })

}

function addTag (text,el,tags,tagsInput,hiddenInput) {
    let tag = {
        text: text,
        element: document.createElement('span'),
    };

    tag.element.classList.add('tag');
    tag.element.textContent = tag.text;

    let closeBtn = document.createElement('span');
    closeBtn.classList.add('close');
    tag.element.addEventListener('click', function () {
        removeTag(tags.indexOf(tag),tags,el,hiddenInput);
    });
    tag.element.appendChild(closeBtn);

    tags.push(tag);

    el.insertBefore(tag.element, tagsInput);

    refreshTags(hiddenInput,tags);
}

function removeTag (index,tags,el,hiddenInput) {
    let tag = tags[index];
    tags.splice(index, 1);
    el.removeChild(tag.element);
    refreshTags(hiddenInput);
}

function refreshTags (hiddenInput,tags) {
    let tagsList = [];
    tags.forEach(function (t) {
        tagsList.push(t.text);
    });
    hiddenInput.value = tagsList.join(',');
}

function filterTag (tag) {
    return tag.replace(/[^\w -]/g, '').trim().replace(/\W+/g, '-');
}