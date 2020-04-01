---
title: 'Structure'
metaTitle: 'Partie 1 : Structure'
metaDescription: 'Structure : apprentissage au codage email'
---

# On démarre en haut et on finit en bas

Avant de vous donner un boilerplate tout fait que vous aller copier/coller à tout va, revoyons les bases :

Comme pour une page **HTML** classique, la première chose à indiquer est le `!DOCTYPE html`.  
Sous celle-ci, l'élément de base à savoir : la balise `html`.  
En suite, à l'intérieur de celle-ci, on place le `head` suivi de la balise `body` comme ceci :

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body></body>
</html>
```

Bon clairement, ça ne suffira pas pour envoyer un coupon de réduction ou autre communication à votre client, mais c'est un début.

# Une brève histoire de DOCTYPE

Les plus malins d'entre vous auront sans doute tiqué, dans mon introduction je vous dis que l'on va utiliser de vieilles technologies et je vous ai même parlé de XHTML et d'HTML4, sauf que dans mon exemple, j'utilise ceci : `<!DOCTYPE html>`, qui correspond à un doctype HTML5 ?!

En effet, pour rester concis, la majeure partie des boîtes mails ne prêtent pas attention au type de doctype de votre document, ceux-ci préfèrant l'adapter à leur sauce.  
C'est pourquoi dans un soucis de simplicité, on va utiliser quelque chose de court à retenir 😉

Ceux désirant en apprendre un peu plus sur le fonctionnement des doctypes dans l'email peuvent consulter <a target="_blank" title="Article de Rémi Parmentier sur les doctypes" href="https://emails.hteumeuleu.fr/2016/10/quel-doctype-faut-il-utiliser-dans-un-email/">cet article</a> du grand HTEUMEULEU (une pointure dans le milieu !).

# Ajoutons un peu de sel à la soupe

Bien, maintenant que vous savez le pourquoi du comment au sujet du doctype, il est temps de pimenter les choses.
Vous vous en doutez, comme une bonne recette de cuisine, notre document HTML à besoin plusieurs ingrédients pour assurer ~~son goût délicieux~~ un affichage parfait.

Nous allons donc nous pencher dans un premier temps sur les **meta tags**.
