# M413 - TD1 : Réponses aux Questions

### 1. Quel sera l’évènement qui déclenchera l’appelle de votre fonction ?

L'événement qui déclenchera l'appel de la fonction defineHeading1() est l'événement de chargement complet de la fenêtre (window.onload). Cet événement se déclenche lorsque tous les éléments de la page Web ont été chargés.


### 2. Quelle méthode avez-vous utilisée pour récupérer l’objet représentant votre balise <h1> ?

> Pour récupérer l'objet représentant la balise `<h1>`, j'ai utilisé la méthode document.getElementById("title"). Cette méthode recherche dans le document HTML un élément ayant l'attribut ID spécifié ("title" dans ce cas) et renvoie l'élément correspondant, s'il existe.


### 3. Quelle propriété de l’objet représentant votre balise <h1> avez-vous utilisée pour récupérer le texte de celui-ci ?

> Pour récupérer le texte de la balise `<h1>`, j'ai utilisé la propriété textContent de l'objet représentant la balise `<h1>`. Cette propriété contient le texte contenu dans l'élément HTML, sans inclure le texte des éléments enfants ou les balises HTML. En utilisant h1Element.textContent, j'ai récupéré le texte de la balise `<h1>` avec l'ID "title".


### 4. Quelle(s) méthode(s) avez-vous utilisée pour récupérer l’objet représentant la première balise <h2> ?

> La fonction defineHeading2() récupère toutes les balises `<h2>`à l'aide de document.getElementsByTagName("h2"). Si au moins une balise `<h2>`est trouvée, elle récupère le texte de la première balise `<h2>` et définit le titre de la page avec ce texte. Sinon, elle définit le titre de la page comme "Votre nom et prénom".

### 5. Comment faire pour connaitre le nombre de balise <h2> du document ?


> Pour connaître le nombre de balises `<h2>` dans le document, vous pouvez utiliser la méthode getElementsByTagName() pour récupérer tous les éléments `<h2>` et ensuite utiliser la propriété length pour obtenir le nombre d'éléments dans la liste

```
var numberOfH2Tags = document.getElementsByTagName("h2").length;
```

### 6. Quelle méthode avez-vous utilisée pour récupérer les objets de votre classe ?

> Pour récupérer les objets de la classe CSS "firstOrLast", j'ai utilisé la méthode document.getElementsByClassName("firstOrLast"). Cette méthode retourne une liste d'objets représentant tous les éléments dans le document qui ont la classe CSS spécifiée ("firstOrLast" dans ce cas).

### 7. Comment avez-vous déterminé si un nombre est pair ?

> Pour déterminer si un nombre est pair en JavaScript, j'ai utilisé l'opérateur % (modulo). L'opérateur modulo renvoie le reste de la division de deux nombres. Si le résultat est zéro, cela signifie que le premier nombre est divisible par le second nombre et donc qu'il est pair.
exemple de code : 

```
var nombre = 10;
if (nombre % 2 === 0) {
    console.log("Le nombre est pair");
}
```

## PARTIE 6.2 

### 1. Quelles différences existe-t-il entre les 3 propriétés innerHTML, innerText et textContent ?

#### innerHTML :
> innerHTML permet de récupérer ou définir le contenu HTML d'un élément, y compris les balises HTML à l'intérieur de cet élément.
> Lorsque vous utilisez innerHTML pour récupérer le contenu d'un élément, il renvoie une chaîne de caractères représentant le contenu HTML de l'élément.
> Lorsque vous utilisez innerHTML pour définir le contenu d'un élément, vous pouvez affecter du texte avec du balisage HTML.

#### innerText :
> innerText permet de récupérer ou définir uniquement le texte visible contenu dans un élément, sans tenir compte des balises HTML à l'intérieur de cet élément. Les balises HTML ne sont pas interprétées, elles sont traitées comme du texte brut.
> Lorsque vous utilisez innerText pour récupérer le contenu d'un élément, il renvoie une chaîne de caractères représentant le texte visible dans l'élément.
> Lorsque vous utilisez innerText pour définir le contenu d'un élément, vous pouvez affecter uniquement du texte sans balisage HTML.

#### textContent :
> textContent permet de récupérer ou définir le contenu textuel de l'élément, y compris tous les nœuds de texte descendants.
> Lorsque vous utilisez textContent pour récupérer le contenu d'un élément, il renvoie une chaîne de caractères représentant tout le contenu textuel de l'élément, y compris le texte dans tous ses descendants.
> Lorsque vous utilisez textContent pour définir le contenu d'un élément, vous pouvez affecter uniquement du texte sans balisage HTML, mais cela remplacera également tout le contenu existant, y compris les balises et les nœuds de texte descendants.


## PARTIE 6.3 
### 1. Comment modifier votre code pour qu’il permette de sélectionner le 1er auteur de la liste ?

```
function dateAlter() {
            var updateDateDiv = document.getElementById("update-date");
            var lastModifiedDate = new Date(document.lastModified);
            var firstAuthor = document.querySelector('meta[name="author"]');
            
            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            var formattedDate = lastModifiedDate.toLocaleDateString("fr-FR", options);
            
            var authorText = firstAuthor ? firstAuthor.getAttribute("content") : "Auteur inconnu";
            
            var newText = "Dernière modification : le " + formattedDate + " par " + authorText;
            updateDateDiv.textContent = newText;
        }
```

### 2. Même question avec le dernier auteur de la liste.

```
var lastAuthor = authors[authors.length - 1];
            
            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            var formattedDate = lastModifiedDate.toLocaleDateString("fr-FR", options);
            
            var authorText = lastAuthor ? lastAuthor.getAttribute("content") : "Auteur inconnu";
            
            var newText = "Dernière modification : le " + formattedDate + " par " + authorText;
            updateDateDiv.textContent = newText;
```
