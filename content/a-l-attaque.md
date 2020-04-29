---
title: "A l'attaque !"
metaTitle: "A l'attaque !"
metaDescription: "Coder ses emails : 3 méthodes"
---

# Piqure de rappel 

Si vous n'avez jamais travaillé avec des tableaux en HTML, voici un bref récapitulatif sur les éléments qui les composent :

- Le tag `<table>`, qui représente tout simplement notre tableau. Il est possible (et surtout recommandé en emailing) d'imbriquer des tableaux dans des tableaux, on verra cela par la suite.
- Ensuite la balise `<tr>`, qui représente une nouvelle rangée de cellules ou d'en-têtes.
- Et enfin la balise `<td>`, qui représente notre fameuse cellule, dans laquelle nous viendrons stocker notre contenu.

__Mentions notables :__
- Le `<th>` qui représente un en-tête de tableau.
- Le `<tbody>`, qui se rajoute automatiquement à l'intérieur du tableau (ne soyez pas surpris lors de l'inspection du code 😉)

Pour faire fonctionner ces éléments, il faut les imbriquer de la sorte :

```html
<table>
    <tr>
        <td>
          Contenu
        </td>
    </tr>
</table>
```

Rien de bien compliqué, n'est-ce pas ? 😎

Si je veux créer une nouvelle rangée en-dessous de la précédente, j'ouvre un nouveau `<tr>` sous la balise fermante de mon prédédent `</tr>`:

```html
<table>
    <tr>
        <td>
          Rangée 1
        </td>
    </tr>
    <tr>
        <td>
          Rangée 2
        </td>
    </tr>
</table>
```

Et comment positionner deux éléments côte à côte ? Rien de plus simple, on met nos deux cellules (`td`) l'une en dessous de l'autre :
```html
<table>
    <tr>
        <td>
          Cellule de gauche
        </td>
        <td>
          Cellule de droite
        </td>
    </tr>
</table>
```

🧠 Retenez bien ce psaume de l'emailing : TABLE, TR, TD, TABLE, TR, TD, etc...

# Let's code this !

Bien, maintenant que vous êtes équippés de notre structure de base, il va falloir la remplir ! 
Reprenons donc notre code jusqu'ici : 

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="color-scheme" content="light dark" />
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no" />
    <meta name="x-apple-disable-message-reformatting" />
    <style>
    #outlook a{padding:0;} 
    body, table, td, p, a, li, blockquote{-webkit-text-size-adjust:100%; -ms-text-size-adjust:100%;} 
    table, td{mso-table-lspace:0pt; mso-table-rspace:0pt;} 
    body {height:100% !important; margin:0 auto !important; padding:0 !important; width:100% !important;}
    a[x-apple-data-detectors] {
      color: inherit!important; text-decoration: none!important; font-size: inherit!important; font-family: inherit!important; font-weight: inherit!important; line-height: inherit!important;
    }
    #MessageViewBody a {
      color: inherit; text-decoration: none; font-size: inherit; font-family: inherit; font-weight: inherit; line-height: inherit;
    }
    </style>
    <title>Titre de mon email</title>
  </head>
  <body style="margin:0; padding:0; background: #e9e9e9; min-width: 100%; -webkit-font-smoothing: antialiased; text-align: center;">
  </body>
</html>
```

Tout ce qui va nous occuper pour le moment se trouvera donc dans le `<body></body>`. 

Première chose à faire, créer un sous-élément qui va venir accueillir notre contenu. J'ai déjà vu certain codes utilisant des tags `<center>`, d'autres des `<div>` ou encore des `<span>`. Personnellement, j'utilise une première `<table>`.

🚫 Il existe un bug (sur Outlook évidemment...) qui crée d'énormes espaces si votre `<table>` mesure plus de 1790 pixels de haut. Je recommande donc d'utiliser une `<div>` si vous ne savez quel hauteur fera votre email ! (e.g. les mails créés programmatiquement)

Donc, cela étant dit, crééons notre premier conteneur : 

```html
<table 
  cellpadding="0"
  cellspacing="0" 
  border="0" 
  style="
    width: 100%; 
    text-align: center; 
    table-layout: fixed; 
    background: #e9e9e9;"
>
</table>
```

(J'ai volontairement splitté les éléments sur plusieurs lignes pour visualiser plus facilement, mais dans votre code vous pouvez évidemment tout mettre sur une ligne 😉)

Ok ! Voilà notre premier conteneur, déjà bien chargé en plus, voyons tout ça en détails : 

- __cellpadding="0"__ et __cellspacing="0"__ sont tous deux présent pour reset resepectivement "la taille de l'espace entre le contenu d'une cellule et sa bordure" et "la taille de l'espace entre deux cellules" (merci [MDN](https://developer.mozilla.org/fr/docs/Web/HTML/Element/table)).
- __border="0"__ reset tout style de bordure par défaut sur la table.
- Notre balise `style` comprend plusieurs éléments :
- __width:100%__ pour forcer la largeur de l'élément à 100%.
- __text-align: center__ pour centrer le contenu.
- __table-layout: fixed__ corrige un bug sur les webmails YAHOO! qui aligne le contenu à gauche malgré nos précédentes indications.  
(Ce style ne doit être précisé qu'une seule fois dans tout votre mail, sur la table parente donc)
- __background: #e9e9e9__ précise la couleur de fond de notre mail. (malgré que l'on l'ai déjà déclaré sur le `body`.)

Pas mal, vous venez de voir les _attributs_ et les _styles_ que nous allons indiquer (presque) sur chacune des tables formant notre email 🎉  
Ceux-ci seront bien entendu à adapter en fonction du contexte.


🚀 Il convient bien entendu de vérifier que __chaque balise__ est correctement fermée, sous peine de voir vos éléments se promener de part et d'autre de l'écran 😏

# Inception, on arrive

Bien, vous vous souvenez de notre mantra ? Bon le revoici : TABLE, TR, TD, TABLE, TR, TD...

On continue donc notre premier contenant en rajoutant un `<tr> </tr>`  
(❌&nbsp;__qui ne sera jamais stylisé !__&nbsp;❌) suivit d'une première cellule `<td></td>`.

So far so good : 
```html
<table cellpadding="0" cellspacing="0" border="0" style="width: 100%; text-align: center; table-layout: fixed; background: #e9e9e9;">
  <tr>
    <td>

    </td>
  </tr>
</table>
```

Comme expliqué dans le chapitre précédent, nous avons dû écraser certains paramètres par défaut en venant styliser notre `<td>`.

Voici le comment du pourquoi : 



# Squelette terminé, plaçons maintenant les organes !

Je vous l'accorde, dis comme cela c'est un peu gore... Mais l'idée est là 😁

A l'intérieur du dit squelette, nous allons commencer par créer un __module__, un __composant__, un __snippet__, bref appelez le comme vous voulez, l'idée est de créer des morceaux de code que l'on pourra par la suite réutiliser.
