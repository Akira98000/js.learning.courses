# Apprentissage JavaScript (basic) - TD1 (Questions / Réponses) :

## Partie 1.1 : "document.title"
### 1. Quel sera l’évènement qui déclenchera l’appelle de votre fonction ?

> L'événement qui déclenchera l'appel de la fonction defineHeading1() est l'événement de chargement complet de la fenêtre (window.onload). Cet événement se déclenche lorsque tous les éléments de la page Web ont été chargés.


### 2. Quelle méthode avez-vous utilisée pour récupérer l’objet représentant votre balise `<h1>` ?

> Pour récupérer l'objet représentant la balise `<h1>`, j'ai utilisé la méthode document.getElementById("title"). Cette méthode recherche dans le document HTML un élément ayant l'attribut ID spécifié ("title" dans ce cas) et renvoie l'élément correspondant, s'il existe.


### 3. Quelle propriété de l’objet représentant votre balise `<h1>`avez-vous utilisée pour récupérer le texte de celui-ci ?

> Pour récupérer le texte de la balise `<h1>`, j'ai utilisé la propriété textContent de l'objet représentant la balise `<h1>`. Cette propriété contient le texte contenu dans l'élément HTML, sans inclure le texte des éléments enfants ou les balises HTML. En utilisant h1Element.textContent, j'ai récupéré le texte de la balise `<h1>` avec l'ID "title".


### 4. Quelle(s) méthode(s) avez-vous utilisée pour récupérer l’objet représentant la première balise `<h2>` ?

> La fonction defineHeading2() récupère toutes les balises `<h2>`à l'aide de document.getElementsByTagName("h2"). Si au moins une balise `<h2>`est trouvée, elle récupère le texte de la première balise `<h2>` et définit le titre de la page avec ce texte. Sinon, elle définit le titre de la page comme "Votre nom et prénom".

### 5. Comment faire pour connaitre le nombre de balise `<h2>` du document ?


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

## Partie 6.2 : Les propriétés innerHTML, innerText et textContent

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


## Partie 6.3 : La propriété document.lastModified
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

## Partie 7 : l'objet Date

### 1. Comment obtenez-vous le nombre de jours ?

#### Calcul de la Différence de Temps
> Tout d'abord, vous devez calculer la différence de temps (en millisecondes) entre la date cible et la date actuelle. Utilisez l'objet Date de JavaScript pour cela.
```
const today = new Date();
const currentYear = today.getFullYear();
const targetDate = new Date(`July 19, ${currentYear}`);
const timeDiff = targetDate - today;
```
### 2. Comment faites-vous la mise à jour du texte ?

#### Conversion en Jours
> convertir cette différence de temps en jours. Une journée est équivalente à 24 heures, chaque heure ayant 60 minutes, chaque minute ayant 60 secondes, et chaque seconde ayant 1000 millisecondes.

```
let daysDiff = timeDiff / (1000 * 60 * 60 * 24);
daysDiff = Math.ceil(daysDiff); // Arrondir au nombre entier supérieur pour obtenir le nombre total de jours restants

```

### 2. Comment faites-vous la mise à jour du texte ?

#### Création d'une Chaîne de Caractères pour le Texte
> Créez la chaîne de caractères que vous souhaitez afficher, en intégrant le nombre de jours calculés. Gérez également le singulier ou le pluriel de "jour".

```
const dayWord = daysDiff === 1 ? "jour" : "jours"; // Singulier ou pluriel
const newText = `Il reste ${daysDiff} ${dayWord} avant le 19 juillet ${currentYear}.`;
```

#### Mise à Jour de l'Élément HTML
> Utilisez la propriété textContent (ou innerText, selon le cas) de l'élément HTML que vous souhaitez mettre à jour avec le nouveau texte.

```
document.getElementById("countdown").textContent = newText;
```

## Partie 7.1 : SetInterval() et SetTimeout()

### 1. Laquelle des deux méthodes de l’objet window avez-vous utilisé ? Pourquoi ?

#### SetInverval()
> setInterval() est utilisée pour exécuter une fonction ou un fragment de code à des intervalles réguliers, définis en millisecondes.

> Cette méthode est simple et directe pour des cas d'utilisation où vous voulez que quelque chose se produise à un rythme régulier, comme rafraîchir une horloge chaque seconde. Elle est idéale pour des tâches périodiques et régulières.

#### SetTimeOut()
> setTimeout() permet de retarder l'exécution d'une fonction ou d'un fragment de code une seule fois, après un délai spécifié 

>  L'approche avec setTimeout() offre plus de flexibilité. Par exemple, elle peut être utile si l'intervalle entre les mises à jour doit potentiellement changer ou si vous avez besoin d'une précision accrue. La récursivité de setTimeout() permet d'éviter certains écueils de setInterval(), comme l'empilement d'appels non exécutés si le thread est occupé

#### Réponse pertinante : SetInterval() est beaucoup mieux dans ce cas

## Partie 8.1 Champ Texte et Couleur d'arrière-plan

> J'ai utilisé l'événement keyup pour détecter chaque fois qu'une touche est relâchée après avoir été pressée dans le champ de texte. Cet événement permet de réagir en temps réel à la saisie de l'utilisateur, en vérifiant et en répondant à chaque modification apportée au contenu du champ.

### Comment avez-vous fait changer la couleur du champ texte ?

> Pour changer la couleur du champ de texte, j'ai modifié la classe CSS de l'élément en fonction de la validité de la saisie de l'utilisateur

## Réference code src

#### Voir le Source Code du TP1 (js)
> Lien de mon repository github (au passage abonnez-vous !!! )
```
https://github.com/Akira98000/js.learning.courses
```
#### Voir le démo du TP1 (js)
> Lien de la démonstration de mon TP1 
```
https://akira98000.github.io/js.learning.courses/TP1/
```

#### Mozilla Developer
> Lien des documentations JS fiables
```
https://developer.mozilla.org/fr/
```
