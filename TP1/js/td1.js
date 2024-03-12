let message = 'JavaScript is ok, but node.js is better -> by Akira Santhakumaran';
let originalContent = null;
console.log(message);

function defineHeading1() {
	var h1Element = document.getElementById("title");
	var titleText = h1Element.textContent;
	document.title = titleText;
}

function defineHeading2() {
	var h2Elements = document.getElementsByTagName("h2");
	if (h2Elements.length > 0) {
		var firstH2 = h2Elements[0];
		var titleText = firstH2.textContent;
		document.title = titleText;
	} else {
		document.title = "Santhakumaran Akira Vijay Kumar";
	}
}

function defineHeading3() {
	var h2Elements = document.getElementsByTagName("h2");
	if (h2Elements.length > 0) {
		var lastH2 = h2Elements[h2Elements.length - 1];
		var titleText = lastH2.textContent;
		document.title = titleText;
	} else {
		document.title = "Santhakumaran Akira Vijay Kumar";
	}
}

function defineHeading4() {
	var elements = document.getElementsByClassName("firstOrLast");
	if (elements.length > 0) {
		var titleText;
		if (elements.length % 2 === 0) {
			titleText = elements[0].textContent;
		} else {
			titleText = elements[elements.length - 1].textContent;
		}
		document.title = titleText;
	} else {
		document.title = "Santhakumaran Akira Vijay Kumar";
	}
}

function dateAlter() {
	var updateDateDiv = document.getElementById("update-date");
	var lastModifiedDate = new Date(document.lastModified);
	var author = document.querySelector('meta[name="author"]').getAttribute("content");
	
	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	var formattedDate = lastModifiedDate.toLocaleDateString("fr-FR", options);
	
	var newText = "Dernière modification : le " + formattedDate + " par " + author;
	updateDateDiv.textContent = newText;
}

document.getElementById("countdown").addEventListener("click", getNbDays);

function getNbDays() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const targetDate = new Date(`July 19, ${currentYear}`);
    const timeDiff = targetDate - today;
    let daysDiff = timeDiff / (1000 * 60 * 60 * 24);
    
    daysDiff = Math.ceil(daysDiff);
	const dayWord = daysDiff === 1 ? "jour" : "jours";
    document.getElementById("countdown").textContent = `Il reste ${daysDiff} ${dayWord} avant le 19 juillet ${currentYear}.`;

	if (daysDiff <= 0) {
        document.getElementById("countdown").removeEventListener("click", getNbDays);
        document.getElementById("countdown").textContent = `Le 19 juillet ${currentYear} est déjà passé ou nous y sommes !`;
    }
}

function updateClock1() {
    setInterval(() => {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        document.getElementById('clock').textContent = timeString;
    }, 1000); 
}

function updateGraphicClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = hours + ':' + minutes + ':' + seconds;
    let htmlContent = '';

    for (let char of timeString) {
        if (char === ':') {
            htmlContent += `<img src="assets/images/minus.gif" />`;
        } else {
            htmlContent += `<img src="assets/images/${char}.gif" />`;
        }
    }
    document.getElementById('graphic-clock').innerHTML = htmlContent;
    setTimeout(updateGraphicClock, 1000);
}

function search() {
    const searchTerm = document.getElementById('searchInput').value.trim();
    
    if (!searchTerm) {
        alert('Veuillez entrer un terme de recherche.');
        return;
    }
    
    if (!originalContent) {
        originalContent = document.body.innerHTML;
    } else {
        document.body.innerHTML = originalContent;
    }

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    document.body.innerHTML = document.body.innerHTML.replace(regex, '<span class="select">$1</span>');
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

document.getElementById('numberInput').addEventListener('keyup', function() {
    var input = this.value;
    if (input === '') {
        this.className = 'white';
    } else if (!isNaN(input) && input.trim() !== '') { // isNaN teste si c'est PAS un nombre
        this.className = 'green';
    } else {
        this.className = 'red';
    }
});

document.querySelectorAll('.menu-item .menu-title').forEach(title => {
    title.addEventListener('click', function() {
        const submenu = this.nextElementSibling;
        const isOpen = submenu.style.display === 'block';
        submenu.style.display = isOpen ? 'none' : 'block';
        if (isOpen) {
            this.parentNode.classList.remove('open');
        } else {
            this.parentNode.classList.add('open');
        }
    });
});

document.getElementById('searchBtn').addEventListener('click', search);
document.getElementById('interactiveSearchInput').addEventListener('keyup', interactiveSearch);


window.onload = function() {
	defineHeading4();
	dateAlter();
	getNbDays();
	updateClock1();
	updateGraphicClock();
	search();
	interactiveSearch();
};

