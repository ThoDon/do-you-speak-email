---
title: 'Compléter le haut du code'
metaTitle: 'Compléter le haut du code'
metaDescription: 'Compléter le haut du code'
---

# Quelques lignes de code bien mystérieuse

Dans un premier temps, copier-coller ces lignes car elles seont nécessaires au bon affichage du mail, nous y reviendrons par la suite, promis 😉

Remplacer votre balise `html` par ceci :

```html
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="fr">
```

Dans le `head`, placez ceci :

```html
  <!--[if gte mso 9]>
  <xml>
      <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
```

Mystère, mystère 😉

# Des fix CSS dans un mail ?

Choses assez communes lors de la création d'une page web, les resets CSS assurent un affichage consistant entre les différents browser.
Pour nos mails, on peut tout à fait mettre en place des 'reset' (plutôt des 'fix') qui corrigent certains bugs des navigateurs.  
Ceux-ci doivent être englobés dans une balise `<style></style>` à l'intérieur du `head`.

En voici une liste non exhaustive, qui pourra être complétée en fonction des cas de figures rencontrés :

```html
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
```

Si vous remarquez qu'un élément n'apparait pas correctement dans votre rendu final sur une plateforme spécifique, il est possible de viser la plateforme en question à l'aide de sélécteurs CSS précis. Je vous invite à consulter le site [howtotarget.email](https://howtotarget.email/) qui référence les diverses méthodes pour CORRIGER CE PUT\*IN DE BUG SUR OUTLOOK 2016 HiDPI !!! (Oups, sorry pour les mots crus 😁).

# Un titre ?

Et oui, comme pour une page web, nous pouvons préciser un titre qui s'affichera dans l'onglet lorsque l'on ouvrira le mail dans un navigateur (plus souvent via sa _webversion_).

Pour ça rien de compliqué, on ouvre une balise `<title>` et on indique le sujet du mail. Celle-ci peut-être placée sous le `style`.

```html
<title>50% de remise sur la techwear !</title>
```

# On met tout ça dans le four :

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
  <body></body>
</html>
```

Bien, ça commence tout doucement à prendre forme, mais nous n'avons toujours aucun contenu dans notre mail ! Un peu de patience, on y vient. 😉