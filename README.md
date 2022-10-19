# MMI2022 - Design d'interaction

## Summary
* [Liens utiles](#liens-utiles)
* [Git & Github - Setup](#setup)

## Liens utiles

### Exemples sur codepen : 

https://codepen.io/alexisben/

### Tech:

https://experiments.withgoogle.com/

https://tympanus.net/codrops/

https://developer.mozilla.org/fr/

http://caniuse.com

https://codepen.io/

https://css-tricks.com/


### CSS

#### Bases

https://www.alsacreations.com/article/lire/533-initiation-au-positionnement-en-css-partie-1.html

https://www.alsacreations.com/tuto/lire/530-La-structure-des-balises-bloc-et-en-ligne.html

#### Flexbox : 

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

https://la-cascade.io/flexbox-guide-complet/

#### Liste des propriétés CSS

https://developer.mozilla.org/fr/docs/Web/CSS/Reference

#### RESET CSS

https://gist.github.com/terkel/1360380


#### Slideshows

https://kenwheeler.github.io/slick/

https://owlcarousel2.github.io/OwlCarousel2/

#### Animation

Animer simplement au scroll : https://michalsnik.github.io/aos/



## Veille

#### Créa:

https://dribbble.com/

https://www.behance.net/

http://www.fubiz.net/

#### Les deux : 

https://www.awwwards.com/

https://thefwa.com

https://usepanda.com/app/#/



## Git & Github

### Setup 

1. Installer git sur sa machine : https://git-scm.com/downloads
> sur PC : https://youtu.be/4o9qzbssfII?t=188


2. Créer son compte sur https://github.com/

3. Connecter son compte sur sa machine : 

```
git config --global user.name "your_name_here"
git config --global user.email "your_email@email.com"
git config --global pull.rebase false
```

4. Un membre de votre équipe doit créer le repo de votre site web sur github.com

5. Cette personne va ensuite ajouter des collaborateurs au repo :
```https://github.com/USER_NAME/REPO_NAME/settings/access```,
puis cliquer sur "Invite a collaborator".

6. Sur votre machine (pour tous les membres de l'équipe), naviguez et créez un dossier propice où sera placé votre code (exemple : PROJECTS/PROJECT_NAME).

7. Cloner le repo

    a. Sur Mac : 
    - Ouvrez un terminal : spotlight (cmd + espace) puis cherchez "terminal"
    - Naviguer avec la commande ```cd``` (et aidez-vous de la commande ```ls``` jusqu'à entrer dans le dossier que vous avez créé précédement.
    - Un fois à l'intérieur du dossier, taper la commande : ```git clone https://github.com/USER_NAME/REPO_NAME```

    b. Sur PC :
    - Click droit sur le dossier > Git Bash Here
    > https://youtu.be/4o9qzbssfII?t=286

### Tutorial

MAC : https://www.youtube.com/watch?v=hPfgekYUKgk&ab_channel=LaCapsule


PC : 
https://www.youtube.com/watch?v=4o9qzbssfII&ab_channel=getCodingKnowledge


### Usage : 

#### Obtenir la dernière version depuis la remote (le repo sur github)

```
git pull
```
> Vous pouvez avoir un "failed" quand vous voulez pull : c'est surement que vous avez des modifications en local qui ne sont pas "commit", il faut alors créer un commit (sans avoir à le push)

Dans certains cas il peut y avoir des conflits lors du pull. Deux possibilités : 
  - Git résout seul le conflit : dans ce cas il va vous ouvrir une fenêtre pour ajouter un message au commit qu'il créé : soit dans un editeur de texte, soit dans la fenêtre de votre terminal via l'editeur VI. 
  Dans le cas de la fenêtre de l'editeur VI : vous pouvez sauvegarder et quitter l'editeur VI en tapant sur la touche "ESC" - pour quitter le mode édition, puis taper ```:wq``` puis entrée (w - save | q - quit).
  - Sinon vous devez résoudre manuellement le conflit : ouvrir le fichier ou les fichiers en questions, modifier le code en triant les modifications locales (HEAD) VS modifications remote (long identifiant chelou genre ```862638ad1cb8a0d1c30bbb84ab650d5f71bd0cc5```).
  N'oubliez pas de supprimer les balisages git : ```>>>>>> HEAD```, ```=======```, et ```>>>>>>> id du commit distant```

#### Vérifier l'état actuel du projet git en local (sur sa machine)

> Status présente les informations sur l'état actuel du projet en local (suis-je à jour ? Ai-je de nouveaux fichiers non "trackés" - untracked files ? Ai-je des fichiers modifier à commit ?)

```
git status
```

> Log présente l'historique des commits du projet. Tapez "q" pour quitter.

```
git log
```

#### Envoyer ses modifications 

> Ajoute les modifications des fichiers, les suppressions et les créations de nouveaux fichiers :

```
git add .
```

> Créer un nouveau "commit" - ceci passe en "Staged" les modifications, les suppressions et les créations de fichiers :

```
git commit -m 'enter what you did here'
```

> Envoyer votre / vos commits sur la remote (Le repo sur Github) : 

```
git push
```

### CheatSheet

[Cheat sheet](./zt_git_cheat_sheet.pdf)
