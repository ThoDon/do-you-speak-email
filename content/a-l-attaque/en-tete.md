---
title: "Bloc 'en-tête'"
metaTitle: "Bloc 'en-tête'"
metaDescription: "Création d'un bloc 'en-tête'"
---

# J'ai déjà vu ce logo quelque part...

Vous le savez, le _branding_ d'une entreprise représente son visage, sa marque de fabrique, mais également le message qu'elle souhaite faire passer.  
Il est important pour celle-ci de transmettre au mieux ses valeurs, et ce même à travers le canal de l'email. Nous allons donc construire un premier "bloc" (appelons les comme ça dorénavant 😁) qui comprendra le logo d'une marque fictive ainsi que de son slogan.

Repartons de notre squelette : 

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
    :root {color-scheme: light dark; supported-color-schemes: light dark;}
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
    <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; text-align: center; table-layout: fixed; background: #e9e9e9;">
      <tr>
        <td style="width: 100%; vertical-align: top; text-align: center;">
          NOTRE CONTENU !
        </td>
      </tr>
    </table>
  </body>
</html>
```

La façon la plus aisée de structurer nos blocs est de placer chacun d'eux dans une table à part entière, permettant ainsi de nous repérer visuellement de façon rapide dans notre code.

# Une image optimisée pour l'email, qu'est ce que c'est ?

- Une image au __poids léger__
- Une __taille x2__ pour s'afficher correctement sur les écrans à haute-densité de pixel (_retina_ par abus de langage), donc si mon image fait 300px par 50px, il faudra toujours l'exporter en x2 (minimum) pour éviter qu'elle n'apparaissent floue, donc une taille finale de 600px*100px.
- Dans la mesure du possible, un __PNG sur fond transparent__ (évidemment, si votre visuel est une photo qui va occuper tout l'espace, pas besoin de fond transparent 🥴)
- Penser _dark mode_, si l'image est assez sombre à la base, il faudra le __'décrocher'__ à l'aide soit d'un __contour blanc__, soit une légère __ombre portée claire__. Ainsi le logo ne se fondra pas avec le background.

Pour la démo, je vais utiliser ce logo récupéré sur [Logo ipsum](https://logoipsum.com/) :

![Logo de démo](https://mascuffi.sirv.com/DYSE/logo_demo.png)

Mettons que sa taille dans mon mail sera de __256px de large pour 60px de haut__, je l'ai donc exporté en __512px*120px__.


# Let's get down to the nitty-gritty

Bon, maintenant que l'on a notre logo, il faut l'intégrer.

🚨 Les blocs viennent se mettre dans notre squelette à la place de _"NOTRE CONTENU !_ 🚨

Remémorez-vous notre psaume : TABLE, TR, TD...

1. Structurer le bloc :

```html
<table>
  <tr>
    <td>
      <img src="https://mascuffi.sirv.com/DYSE/logo_demo.png">
    </td>
  </tr>
</table>
```

2. Rajouter les styles

```html
<table role="presentation" align="center" cellpadding="0" cellspacing="0" border="0" style="margin:0 auto; background-color:#ffffff; width: 640px;" class="MQ-100">
  <tr>
    <td style="width: 640px; vertical-align: top; font: 18px Arial, sans-serif;" class="MQ-100">
      <img src="https://mascuffi.sirv.com/DYSE/logo_demo.png" alt="Alternative text" border="0" width="256" style="border: 0; display: block; width: 256px;" class="MQ-img-responsive MQ-img-fade">
    </td>
  </tr>
</table>
```