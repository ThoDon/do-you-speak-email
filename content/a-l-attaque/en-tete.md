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
      
    </table>
  </body>
</html>
```