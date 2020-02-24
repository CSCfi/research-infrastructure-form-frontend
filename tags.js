// keywords  https://stackoverflow.com/questions/49527155/tag-key-how-to-add-an-tag-while-pressing-enter-button/49527330

// Intercept document sending with enter
function interceptEnter(evt) {
    if (evt.keyCode === 13) return false;
}
document.onkeypress = interceptEnter;

window.addEventListener("DOMContentLoaded", initTags);

function initTags() {
    const el = document.getElementById('tags-input');
    let hiddenInput = document.createElement('input'),
        tagsInput = document.createElement('input'),
        tags = [];
    
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', el.getAttribute('data-name'));

    tagsInput.setAttribute('type', 'text');
    tagsInput.addEventListener('input', function () {
        let enteredTags = tagsInput.value.split(',');
        if (enteredTags.length > 1) {
            enteredTags.forEach(function (t) {
                let filteredTag = filterTag(t);
                if (filteredTag.length > 0)
                    addTag(filteredTag);
            });
            tagsInput.value = '';
        }
    });

    tagsInput.addEventListener('keydown', function (e) {
        let keyCode = e.which || e.keyCode;
        if (keyCode === 8 && tagsInput.value.length === 0) {
            removeTag(tags.length - 1);
        }

       if (event.keyCode === 13 && tagsInput.value.length > 0 ||
           event.keyCode ===  9 && tagsInput.value.length > 0 ||
           event.keyCode === 188 && tagsInput.value.length > 0 ) {
            addTag(tagsInput.value);
            tagsInput.value ="";
        }


    });

    el.appendChild(tagsInput);
    el.appendChild(hiddenInput);
    

    function addTag (text) {
        let tag = {
            text: text,
            element: document.createElement('span'),
        };

        tag.element.classList.add('tag');
        tag.element.textContent = tag.text;

        let closeBtn = document.createElement('span');
        closeBtn.classList.add('close');
        tag.element.addEventListener('click', function () {
            removeTag(tags.indexOf(tag));
        });
        tag.element.appendChild(closeBtn);

        tags.push(tag);

        el.insertBefore(tag.element, tagsInput);

        refreshTags();
    }

    function removeTag (index) {
        let tag = tags[index];
        tags.splice(index, 1);
        el.removeChild(tag.element);
        refreshTags();
    }

    function refreshTags () {
        let tagsList = [];
        tags.forEach(function (t) {
            tagsList.push(t.text);
        });
        hiddenInput.value = tagsList.join(',');
    }

    function filterTag (tag) {
        return tag.replace(/[^\w -]/g, '').trim().replace(/\W+/g, '-');
    }
}

//

// Keywords en

// Intercept document sending with enter
function interceptEnterEn(evt) {
    if (evt.keyCode === 13) return false;
}
document.onkeypress = interceptEnterEn;

window.addEventListener("DOMContentLoaded", initTagsEn);

function initTagsEn() {
    const el = document.getElementById('tags-inputEn');
    let hiddenInputEn = document.createElement('input'),
        tagsInputEn = document.createElement('input'),
        tagsEn = [];
    
    hiddenInputEn.setAttribute('type', 'hidden');
    hiddenInputEn.setAttribute('name', el.getAttribute('data-name'));

    tagsInputEn.setAttribute('type', 'text');
    tagsInputEn.addEventListener('input', function () {
        let enteredTagsEn = tagsInputEn.value.split(',');
        if (enteredTagsEn.length > 1) {
            enteredTagsEn.forEach(function (t) {
                let filteredTagEn = filterTagEn(t);
                if (filteredTagEn.length > 0)
                    addTagEn(filteredTagEn);
            });
            tagsInputEn.value = '';
        }
    });

    tagsInputEn.addEventListener('keydown', function (e) {
        let keyCode = e.which || e.keyCode;
        if (keyCode === 8 && tagsInputEn.value.length === 0) {
            removeTagEn(tags.lengthEn - 1);
        }

       if (event.keyCode === 13 && tagsInputEn.value.length > 0 ||
           event.keyCode ===  9 && tagsInputEn.value.length > 0 ||
           event.keyCode === 188 && tagsInputEn.value.length > 0 ) {
            addTagEn(tagsInputEn.value);
            tagsInputEn.value ="";
        }


    });

    el.appendChild(tagsInputEn);
    el.appendChild(hiddenInputEn);
    

    function addTagEn (text) {
        let tagEn = {
            text: text,
            element: document.createElement('span'),
        };

        tagEn.element.classList.add('tagEn');
        tagEn.element.textContent = tag.text;

        let closeBtn = document.createElement('span');
        closeBtn.classList.add('close');
        tagEn.element.addEventListener('click', function () {
            removeTagEn(tagsEn.indexOf(tagEn));
        });
        tagEn.element.appendChild(closeBtn);

        tagsEn.push(tagEn);

        el.insertBefore(tagEn.element, tagsInputEn);

        refreshTags();
    }

    function removeTagEn (index) {
        let tagEn = tagsEn[index];
        tagsEn.splice(index, 1);
        el.removeChild(tagEn.element);
        refreshTagsEn();
    }

    function refreshTagsEn () {
        let tagsEnList = [];
        tagsEn.forEach(function (t) {
            tagsListEn.push(t.text);
        });
        hiddenInput.value = tagsListEn.join(',');
    }

    function filterTagEn (tagEn) {
        return tagEn.replace(/[^\w -]/g, '').trim().replace(/\W+/g, '-');
    }
}

