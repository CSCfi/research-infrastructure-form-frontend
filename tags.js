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
        mainInput = document.createElement('input'),
        tags = [];
    
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', el.getAttribute('data-name'));

    mainInput.setAttribute('type', 'text');
    mainInput.classList.add('main-input');
    mainInput.addEventListener('input', function () {
        let enteredTags = mainInput.value.split(',');
        if (enteredTags.length > 1) {
            enteredTags.forEach(function (t) {
                let filteredTag = filterTag(t);
                if (filteredTag.length > 0)
                    addTag(filteredTag);
            });
            mainInput.value = '';
        }
    });

    mainInput.addEventListener('keydown', function (e) {
        let keyCode = e.which || e.keyCode;
        if (keyCode === 8 && mainInput.value.length === 0) {
            removeTag(tags.length - 1);
        }

       if (event.keyCode === 13 && mainInput.value.length > 0 ||
           event.keyCode ===  9 && mainInput.value.length > 0) {
            addTag(mainInput.value);
            mainInput.value ="";
        }


    });

    el.appendChild(mainInput);
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
        closeBtn.addEventListener('click', function () {
            removeTag(tags.indexOf(tag));
        });
        tag.element.appendChild(closeBtn);

        tags.push(tag);

        el.insertBefore(tag.element, mainInput);

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