let originalContent;

const message = 'JavaScript is ok but node.js is better than js by Akira Santhakumaran';
console.log(message);

function initSelect() {
    const titleElement = document.getElementById('title');
    titleElement.addEventListener('click', function() {
        select(titleElement);
    });
}

function select(event) {
    var clickedElement = event.target;
    var parentElement = clickedElement.parentNode;

    if (clickedElement.classList.contains('background-red')) {
        clickedElement.classList.remove('background-red');
    } else {
        clickedElement.classList.add('background-red');
    }

    if (parentElement && parentElement.tagName !== "BODY") {
        parentElement.classList.add('background-orange');
    }

    if (clickedElement.classList.contains('background-red')) {
        var grandParentElement = parentElement.parentNode;
        if (grandParentElement && grandParentElement.tagName !== "BODY") {
            grandParentElement.classList.add('background-orange');
        }
    }
}


function initSelect2() {
    document.addEventListener('click', select2);
}

function select2(event) {
    const clickedElement = event.target;
	if (clickedElement.classList.contains('background-orange')) {
        clickedElement.classList.remove('background-orange');
    }
    if (clickedElement.id !== "insert-div" && !clickedElement.closest("#insert-div")) {
        const elements = document.querySelectorAll('.selected');
        elements.forEach(function(el) {
            el.classList.remove('selected');
        });
        clickedElement.classList.add('selected');
    }
}

function insertElement(target) {
    const elementType = document.getElementById('insert-type').value;
    const elementText = document.getElementById('insert-text').value;
    const newElement = document.createElement(elementType);
    newElement.textContent = elementText;
    target.parentNode.insertBefore(newElement, target);
}

function interactiveSearch() {
    const searchTerm = document.getElementById('interactiveSearchInput').value.trim();

    if (!originalContent) {
        originalContent = document.body.innerHTML;
    } else {
        document.body.innerHTML = originalContent;
    }

    if (searchTerm) {
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        document.body.innerHTML = document.body.innerHTML.replace(regex, '<span class="select">$1</span>');
    }
}

window.onload = function() {
    initSelect();
    initSelect2();
};
