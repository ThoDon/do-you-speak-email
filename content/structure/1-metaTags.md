---
title: 'Meta Tags'
metaTitle: 'Meta Tags'
metaDescription: 'Que sont les meta tags ?'
---

# Description par MDN

> L'élément HTML `<meta>` représente toute information de métadonnées qui ne peut pas être représentée par un des éléments (`<base>`, `<link>`, `<script>`, `<style>` ou `<title>`)

Il existe beaucoup de meta tags dans le web, qui sont pour la plupart utilisés pour apporter un complément d'informations à notre page (auteur, description, mots-clés, etc...) qui facilite le référencement de notre document. Ceux-ci se positionnent au sein de la balise `head`.

Une email n'étant pas référencé par les moteurs de recherches, nous allons nous concentrer sur les meta tags qui vont servir au visuel de notre page :

```html
<meta charset="utf-8" />
```

- Définit l'encodage des charactères au format UTF-8, assure le bon affichage des caractères spéciaux (je ne vais pas faire un cours là-dessus, si voulez plus d'infos [cliquez-ici](https://fr.wikipedia.org/wiki/UTF-8))

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0" />
```

- Permet l'affichage du mail en mode responsive. Force le zoom initiale de la page à 100% de la largeur disponible du device qui reçoit l'email.

```html
<meta name="color-scheme" content="light dark" />
```

Par défaut, si aucun style 'sombre' n'est défini au codage, la boîte mail chargée d'afficher le message peut transformer les styles pour les faire correspondre aux préférences définies par l'utilisateur. Ce tag nous permet de contrôler cet affichage.

- `content="light dark"` permet de faire savoir au device qu'un mode "light" et "dark" sont disponible pour l'affichage du mail (cela veut dire que les styles doivent être définis pour chacun des modes).
- `content="light"` indique que seul un style clair existe pour le mail, mais la boîte mail **peut** modifier les couleurs du document.
- `content="only"` (synonyme de `content="light only"`) indique que seul un style clair existe pour le mail, et que la boîte mail **ne doit pas** modifier les couleurs du document.
- `content="light dark only"` indique que les deux styles sont présent dans le mail, de séléctionner celui préféré par l'utilisateur, et ne pas le modifier par la suite.

```html
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no" />
```

- Empêche la boîte mail de souligner et afficher en bleu les numéros de tééléphones, les adresses et les emails.

```html
<meta name="x-apple-disable-message-reformatting" />
```

- Corrige un bug sur d'anciennes versions d'iOS qui affichait le mail de façon tronquée.

# Résumons tout ça :

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="color-scheme" content="light dark" />
    <meta name="format-detection" content="telephone=no, date=no, address=no, email=no" />
    <meta name="x-apple-disable-message-reformatting" />
  </head>
  <body></body>
</html>
```

Nous avons déja une bonne base, mais il faut encore ajouter quelques éléments à notre `head` pour s'assurer d'un affichage consistant, passons au chapitre suivant 👇
