# Apprentissage JavaScript (basics) / TP2 Questions / Réponses

## PARTIE 1.1 : Sélection d'un objet

### Comment avez-vous ajouté l'écouteur d'évènement et sur quel objet ?

> j'ai ajouté l'écouteur d'évènement à l'élément de titre `<h1>`. Cela a été réalisé dans la fonction initSelect() à l'aide de la méthode addEventListener().

```
titleElement.addEventListener('click', function() {
    // Appeler la fonction select() avec l'élément de titre en argument
    select(titleElement);
});
```

### Que se passe-t-il si vous utilisez currentTarget en lieu et place de target ?

> Utiliser event.currentTarget sélectionnerait l'élément ayant l'écouteur d'événements attaché, tandis que event.target sélectionne l'élément réellement cliqué, ce qui peut entraîner un comportement inattendu si des événements de propagation sont impliqués.


#### NOTE !
> Pour tester si une variable est déjà définie, on peut comparer son type avec la chaine de caractères « undefined ».

> Pour supprimer une variable de la mémoire (elle sera alors de type non définie), on peut utiliser la fonction delete(variable).

```
if (typeof variable === 'undefined') {
    // La variable n'est pas définie
} else {
    // La variable est définie
}
```

## Partie 1.2 : Insertion d'objets

### Comment avez-vous ajouté l’élément ?
> J'ai ajouté l'élément en utilisant la méthode insertBefore() sur l'élément parent de l'élément cible, insérant ainsi le nouvel élément avant l'élément spécifié.

> L'attribut JavaScript qui fait cela est parentNode, qui permet d'accéder à l'élément parent d'un élément donné. En utilisant parentNode

### Comment avez-vous fait pour que la fonction select2() ignore les évèments de la `<div>` donnée ci-dessus ?

> Pour que la fonction `select2()` ignore les évènements sur la `<div>` donnée, j'ai ajouté une vérification dans la fonction pour s'assurer que l'élément cliqué n'est pas la `<div>` ou un de ses enfants, en utilisant une condition pour exclure ces cas.

```
closest("#insert-div")
```

### Ressources : 
```

```
#### Github TP2 :
```

```
#### Lien Doc MarkDown : 
```

```