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
    tagsInput.classList.add('main-input');
    tagsInput.addEventListener('input', function () {
        let enteredTags = mainInput.value.split(',');
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
           event.keyCode ===  9 && tagsInput.value.length > 0) {
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

// adjust width of input to its input

// var input = document.querySelector('input'); // get the input element
// input.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
// resizeInput.call(inputFlex); // immediately call the function

// function resizeInput() {
//   this.style.width = this.value.length + "ch";
// }