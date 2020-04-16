---
title: 'Coder ses emails : 3 méthodes'
metaTitle: 'Coder ses emails : 3 méthodes'
metaDescription: 'Coder ses emails : 3 méthodes'
---

# Trois techniques pour coder vos emails

En effet, il n'y a pas une seule bonne méthode pour coder ses emails, mais l'on peut en ressortir 3 relativement communes.  
Je vais vous expliquer leurs principales différences, et surtout dans quelles conditions les utiliser.

Dans un soucis de simplicité, je vais vous montrer le codage d'un email selon la méthode "responsive", mais vous pourrez retrouver ce même exemple avec les autres méthodes à la fin de ce cours 😉

# La méthode "fluide"

Il s'agit d'une façon de coder qui n'emploie pas de valeur fixée en pixels pour vos tables et cellules.  
Ici, on utilisera des des max-width pour empêcher nos composants de devenir trop larges.  
Très utile dans la mesure où l'on peut se passer de calculs pour les largeurs des différents éléments de nos mails, elle implique tout de même l'utilisation de commentaires conditionnels pour restreindre la largeur maximale sur Outlook. **Nous reviendrons sur les commentaires conditionnels d'ici peu**. 😏

__Dans quel cas l'utiliser__ : Pour des mails dont la structure est relativement simple (une colonne), où les éléments ne doivent pas forcément passer l'un en dessous de l'autre en mobile.

__Point négatif__ : Difficile de créer des layouts plus complexes, on est vite limité.

# La méthode "reponsive"

Méthode un peu plus souple que la "fluide", la technique "responsive" se base sur l'utilisation de "media-queries" pour modifier l'affichage de nos emails en fonction de la largeur de l'écran. Cela permet d'adapter au mieux certains éléments qui ne serait pas forcément bien rendus lors d'une transition "design desktop → design mobile".

Cette méthode est relativement aisée à prendre en mains si vous avez l'habitude de manipuler le CSS dans votre vie quotidienne.

__Dans quel cas l'utiliser__ : Pour des mails dont la structure et le design sont amenés à changer drastiquement entre la version desktop et mobile. Parfaite pour se faire la main dans le rude monde de l'emailing (apprentissage de la structure des tableaux, rigeur dans les calculs de width, réutilisation des connaissances CSS, ...)

__Point négatif__ : L'utilisation de media-queries (MQ) n'est pas universellement adoptée, ce qui peut empêcher l'affichage du mode responsive sur certaines plateformes. Cela dit, les géants du mail supportent les MQ (comprenez, les parts de marché pour ces boites mails sont extrêmement conséquantes).

# La méthode "hybrid"

Notre dernière méthode est une version plus complexe de la version "fluide", dans le sens où nous allons utiliser des combinaisons de max-width, min-width sur des `div`.  
Couplées au `display:inline-block`, le combo permet une simplification de la transition desktop → mobile dans le sens où l'on se passe de media-queries.

Cette méthode offre donc un avantage incomparable permettant d'offrir un affichage "responsive" sur tout type d'écran, peu importe la boite mail recevant notre code HTML.

Mais, ce serait extrêmement présompteux de laisser notre pire ennemi de côté : Outlook !
Eh oui, Outlook ne supportant pas les `display:inline-block` sur les `div`, on court tout droit à notre perte si l'on se contente de coder ainsi !
Retenez juste pour le moment que l'on devra user et abuser des **commentaires conditionnels** pour s'assurer d'un affichage correct sur Outlook.

__Dans quel cas l'utiliser__ (et points positifs) : 
- Une fois le fonctionnement des `table > tr > td` inscrit au fer rouge dans votre mémoire, l'utilisation de cette méthode "hybride" pourra vous sembler plus appropriée.
- Le codage est différent de la méthode responsive, plus souple à certains endroit mais plus rigide à d'autres.
- Affichage responsive garanti sur toutes les plateformes, y compris celles ne supportant pas les MQ.

__Points négatifs__ : 
- Les concepts en rapport avec l'emailing doivent être compris et assimilés pour éviter des sessions de debugging trop intenses
- Les commentaires conditionnels peuvent poser de gros soucis si votre ESP modifie votre code, dans la mesure où une balise mal fermée brisera votre visuel en milles morceaux.
- Dû aux commentaires, le fichier peut peser plus lourd que les autres méthodes (sur de longs mails).
