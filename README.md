# CV Showcase - Site Web Personnel

Un CV en ligne moderne, responsive et professionnel, créé avec HTML, CSS et JavaScript. Hébergé gratuitement sur GitHub Pages.

## 🌟 Aperçu

Ce projet est un site web portfolio/CV one-page avec un design moderne et une palette de couleurs verte tech. Il comprend toutes les sections essentielles pour présenter votre parcours professionnel de manière élégante et interactive.

## 🚀 Démo en ligne

**[Voir le site en ligne](https://votre-username.github.io/cv-showcase/)**

## ✨ Fonctionnalités

- **Design Moderne** : Interface élégante avec palette de couleurs verte tech
- **100% Responsive** : S'adapte parfaitement à tous les appareils (mobile, tablette, desktop)
- **Animations Fluides** : Transitions et animations au scroll
- **Navigation Fixe** : Menu de navigation qui reste visible pendant le scroll
- **Sections Complètes** :
  - Header avec photo et réseaux sociaux
  - À propos
  - Expérience professionnelle (timeline)
  - Compétences techniques (barres de progression)
  - Formation
  - Projets/Portfolio
  - Contact
- **Menu Hamburger** : Navigation mobile optimisée
- **Bouton Scroll to Top** : Retour en haut de page rapide
- **SEO Optimisé** : Meta tags pour un meilleur référencement
- **Performance** : Code optimisé et léger
- **Easter Egg** : Code Konami caché pour les curieux 🎮

## 🛠️ Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styles modernes avec variables CSS, Grid, Flexbox
- **JavaScript Vanilla** : Interactions sans framework
- **Font Awesome** : Icônes
- **Google Fonts** : Police Poppins
- **GitHub Pages** : Hébergement gratuit

## 📂 Structure du Projet

```
cv-showcase/
├── index.html          # Page principale
├── css/
│   └── style.css       # Styles CSS
├── js/
│   └── main.js         # Scripts JavaScript
├── assets/
│   ├── images/         # Photos et images
│   │   ├── profile.jpg
│   │   ├── project1.jpg
│   │   ├── project2.jpg
│   │   └── ...
│   └── pdf/
│       └── cv.pdf      # CV téléchargeable (optionnel)
├── README.md           # Ce fichier
└── .gitignore          # Fichiers ignorés par Git
```

## 🎨 Palette de Couleurs

- **Vert Principal** : `#27AE60`
- **Vert Secondaire** : `#1ABC9C`
- **Vert Accent** : `#2ECC71`
- **Texte Principal** : `#2C3E50`
- **Texte Secondaire** : `#7F8C8D`

## 🔧 Installation et Utilisation

### 1. Cloner le dépôt

```bash
git clone https://github.com/votre-username/cv-showcase.git
cd cv-showcase
```

### 2. Personnaliser le contenu

Ouvrez `index.html` et remplacez tous les placeholders entre crochets `[...]` par vos informations personnelles :

- `[Votre Nom]`
- `[Votre Titre Professionnel]`
- `[votre.email@example.com]`
- Etc.

### 3. Ajouter vos images

Placez vos images dans le dossier `assets/images/` :
- `profile.jpg` : Votre photo de profil
- `project1.jpg`, `project2.jpg`, etc. : Captures d'écran de vos projets
- `favicon.png` : Icône du site (optionnel)

### 4. Tester localement

Ouvrez simplement `index.html` dans votre navigateur pour voir le résultat.

### 5. Publier sur GitHub Pages

1. Créez un nouveau dépôt sur GitHub nommé `cv-showcase` (ou `votre-username.github.io` pour un site principal)

2. Poussez votre code :
```bash
git init
git add .
git commit -m "Initial commit - CV Showcase"
git branch -M main
git remote add origin https://github.com/votre-username/cv-showcase.git
git push -u origin main
```

3. Activez GitHub Pages :
   - Allez dans `Settings` > `Pages`
   - Source : `Deploy from a branch`
   - Branch : `main` et dossier `/root`
   - Cliquez sur `Save`

4. Votre site sera accessible à l'adresse :
   - `https://votre-username.github.io/cv-showcase/` (dépôt normal)
   - `https://votre-username.github.io/` (si nommé `votre-username.github.io`)

## ✏️ Personnalisation Avancée

### Changer les couleurs

Modifiez les variables CSS dans `css/style.css` (lignes 5-20) :

```css
:root {
    --primary-color: #27AE60;    /* Changez cette valeur */
    --secondary-color: #1ABC9C;  /* Changez cette valeur */
    /* ... */
}
```

### Ajouter/Supprimer des sections

Dans `index.html`, vous pouvez :
- Dupliquer des sections existantes
- Supprimer des sections non nécessaires
- Modifier l'ordre des sections

### Modifier les animations

Dans `js/main.js`, vous pouvez personnaliser :
- La vitesse des transitions
- Les effets au scroll
- Activer/désactiver certaines fonctionnalités

### Ajouter un formulaire de contact

Pour un formulaire fonctionnel, utilisez un service comme :
- [Formspree](https://formspree.io/) - Gratuit et simple
- [Netlify Forms](https://www.netlify.com/products/forms/) - Si vous hébergez sur Netlify
- [GetForm](https://getform.io/) - Alternative gratuite

## 📱 Responsive Design

Le site s'adapte automatiquement aux différentes tailles d'écran :
- **Desktop** : > 1024px
- **Tablette** : 768px - 1024px
- **Mobile** : < 768px

## 🎯 SEO

Pour améliorer le référencement :
1. Remplissez les meta tags dans `<head>` de `index.html`
2. Ajoutez un fichier `sitemap.xml`
3. Utilisez des balises sémantiques (déjà fait)
4. Optimisez les images (compression)

## 🐛 Dépannage

**Le site ne s'affiche pas sur GitHub Pages :**
- Vérifiez que le fichier s'appelle bien `index.html`
- Attendez quelques minutes (le déploiement peut prendre du temps)
- Vérifiez les paramètres GitHub Pages dans Settings

**Les images ne s'affichent pas :**
- Vérifiez les chemins des images dans `index.html`
- Assurez-vous que les fichiers existent dans `assets/images/`

**Le menu mobile ne fonctionne pas :**
- Vérifiez que `js/main.js` est bien chargé
- Ouvrez la console du navigateur pour voir les erreurs

## 📄 Licence

Ce projet est libre d'utilisation. Vous pouvez le modifier et le personnaliser à votre guise.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer de nouvelles fonctionnalités
- Améliorer le code

## 📧 Contact

Pour toute question, contactez-moi :
- Email : [votre.email@example.com]
- LinkedIn : [votre-profil]
- GitHub : [votre-username]

---

**Fait avec ❤️ et hébergé sur GitHub Pages**

## 💡 Conseils Bonus

### Images de Projets
Si vous n'avez pas encore de captures d'écran de projets, utilisez :
- [Unsplash](https://unsplash.com/) - Photos libres de droits
- [Placeholder.com](https://placeholder.com/) - Images de remplacement

### Photo de Profil
- Utilisez une photo professionnelle
- Format : JPG ou PNG
- Taille recommandée : 500x500px minimum
- Fond neutre de préférence

### CV PDF
N'oubliez pas d'ajouter un CV téléchargeable dans `assets/pdf/cv.pdf`

### Analytics
Pour suivre les visites, ajoutez Google Analytics :
1. Créez un compte sur [Google Analytics](https://analytics.google.com/)
2. Ajoutez le code de suivi dans `<head>` de `index.html`

### Domaine Personnalisé
GitHub Pages permet d'utiliser un domaine personnalisé :
1. Achetez un domaine (ex: `votre-nom.com`)
2. Configurez les DNS
3. Ajoutez le domaine dans Settings > Pages

---

**Bonne chance avec votre CV en ligne ! 🚀**
