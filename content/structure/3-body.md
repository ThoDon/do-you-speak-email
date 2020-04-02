---
title: 'Préparer le body'
metaTitle: 'Préparer le body'
metaDescription: 'Préparer le body'
---

# Une dernière vérification avant le gros oeuvre

Le `body` est le contenant principal de votre email, tous le code concernant le layout se trouvera dedans. 

Comme expliqué dans l'introduction, __nous ne pouvons pas__ compter sur une feuille de style externe lorsque l'on code un email. Ce qui nous oblige à écrire notre style dans un attribut `style=""`, qui sera à chaque fois répété sur chaque élément.

Commencons donc à écrire en _inline_ avec notre `body`, en plaçant quelques 'fixes' supplémentaires dessus :

```html
<body style="margin:0; padding:0; background: #e9e9e9; min-width: 100%; -webkit-font-smoothing: antialiased; text-align: center;">
```

Oulà camarade, ça fait beaucoup d'un seul coup non ? 😮

Pas d'inquiétude, voici quelques explications :

- `margin:0` et `padding:0` permettent de s'assurer qu'aucun espace supplémentaire ne vienne s'ajouter à cause des margins et paddings naturellement présent sur les tags HTML. Vous verrez que l'on souvent tendance à écraser ceux par défaut pour éviter les effets de bord.
- `background: #e9e9e9` indique la couleur de fond de notre email.
- `min-width: 100%;` force le body à bien prendre toute la largeur de l'espace qui lui est attribué par le client mail.
- `-webkit-font-smoothing: antialiased` force l'anti-crénelage sur les textes, sous Webkit.
- `text-align: center` force les éléments compris dans le body à bien se centrer au milieu du conteneur. (Parfois ce n'est pas suffisant, on reprécisera ce comportement sur les sous-éléments)


Bien ! Maintenant que vous savez comment _inliner_ votre style, il est temps de passer au gros morceau : coder votre mail 😎