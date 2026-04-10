# Brief de génération de site (niche-starter)

Ce fichier est auto-généré depuis Website Manager.
L'agent doit lire d'abord `CLAUDE.md`, puis ce fichier.

---

## 1) Infos projet

- `site_name`: bugeysud-entreprendre.fr
- `site_domain`: bugeysud-entreprendre.fr
- `site_url`: https://bugeysud-entreprendre.fr
- `default_locale`: fr-FR
- `site_id` (UUID Supabase): 4de4d2c0-3e98-46fd-b98b-aaf2021c9578
- `tier` (`tier1` / `tier2`): tier2

## 2) Positionnement éditorial

- Thématique: Entrepreneuriat
- Audience cible:
- Objectif business:
- Ton éditorial:
- Angles à privilégier:
- Angles interdits:

## 3) Arborescence souhaitée

- Pages de navigation (hors blog):
- Sections homepage attendues:
- CTA principal:
- CTA secondaire:

## 4) Contraintes SEO

- Requêtes principales:
- Entités importantes:
- Concurrents de référence:
- Règles de maillage interne spécifiques:
- URLs legacy à rediriger (si applicable):
  - www.bugeysud-entreprendre.fr/presentation-et-atouts-du-site/
  - www.bugeysud-entreprendre.fr/les-atouts-du-site/
  - www.bugeysud-entreprendre.fr/le-pole-entrepreneurial-dactipole-bugey-sud-inspire-dautres-collectivites/
  - Si l'URL contient des caractères encodés (`%C3%A9`, etc.), la décoder d'abord puis slugifier proprement (ne jamais produire des slugs de type `c3a9`/`c3a8`).

## 5) Direction artistique

- Univers visuel:
- Inspirations:
- Couleurs souhaitées / évitées:
- Style typographique:
- Niveau d'animation:
- Niveau de sobriété (1-10):

## 6) Assets (R2 / médias)

- Bucket/source:
- Liste images hero:
- Liste images sections:
- Liste images guides/blog:
- Contraintes de ratio/poids:

## 7) Contraintes techniques

- Le code doit respecter strictement les règles de `CLAUDE.md`.
- Ne pas modifier les fichiers Core interdits.
- Pas de `select("*")` ajouté.
- Pas de faux articles.
- Aucune page 404.
- Toute page additionnelle liée (outil, carte, simulateur, etc.) doit être implémentée et réellement remplie.
- Si une page n'existe pas, aucun lien ne doit pointer vers elle.
- Tout lien vers le même domaine doit être traité comme lien interne dofollow.
- Les redirections legacy doivent pointer vers des slugs décodés/normalisés (jamais vers des slugs encodés type `c3a9`).
- `npm run build` doit passer.

## 8) Données légales à injecter

- Mentions légales (éditeur):
- Contact public:
- DPO/contact RGPD:
- Hébergeur:

---

## 9) Données source Website Manager

### Brief éditorial brut

Ok, l'objectif du site, c'est de montrer comment entreprendre. Donc quand on n'y connait rien, comment, voilà, pour enlever toutes les peurs pour entreprendre, qu'on peut entreprendre dans n'importe quoi, dans le milieu du jardin, du bâtiment, toutes les questions qu'on peut se poser sur comment je commence, voilà, j'ai des compétences dans ça. Le but, c'est, voilà, de montrer que c'est pas si compliqué, que tout le monde peut s'y mettre. Toutes les choses à savoir pour commencer une entreprise, quoi acheter comme matériel, fiscalement, légalement, comment ça se passe, quel régime créer, des opportunités, voilà, où aller postuler, où aller tout simplement se mettre en avant. Pour avoir des clients, ses premiers clients, comment faire ça, la prestation, comment facturer. Et c'est plutôt dans les milieux du bâtiment, enfin, bâtiment dans les milieux physiques, on va dire, électricien, jardinier, rénovateur, peintre, tous ces métiers là, plutôt, on va viser dans ce site tout ce qui est bâtiment, enfin, tout ce qui est manuel, quoi. Pombier, entreprendre dans ces milieux là, il y en a plein d'autres, ça peut être caroller, ça peut être boulanger, tu vois ce que je veux dire, il y en a plein, plein, plein. Donc, ouais, c'est ça, c'est surtout. Et ce qui se posent des questions, c'est, j'ai fait un bac plus, j'ai pas de bac, est-ce que je peux lancer ma boîte ? J'ai une femme et trois enfants, est-ce que je peux lancer ma boîte ? J'ai pas de local, est-ce que je peux faire si ? Ce genre de questions, c'est toutes les questions que les gens peuvent se poser et les trouver du coup sur ce site qui va aller bien les renseigner.

### Description générée

# BugeySud Entreprendre - Plateforme d'accompagnement entrepreneurial

**BugeySud Entreprendre** est un site de ressources et d'accompagnement destiné à démystifier l'entrepreneuriat dans les métiers manuels et du bâtiment. La plateforme vise à rassurer et guider les personnes souhaitant se lancer dans l'entrepreneuriat, qu'elles soient électriciennes, jardinières, peintres, plombiers, boulangers ou exerçant tout autre métier manuel.

## Objectif et public cible

Le site s'adresse spécifiquement aux futurs entrepreneurs qui se posent des questions pratiques : "Puis-je créer ma boîte sans diplôme ?", "Comment commencer avec une famille à charge ?", "Quel matériel acheter ?", "Comment trouver mes premiers clients ?". L'objectif est de fournir des réponses concrètes et rassurantes sur tous les aspects de la création d'entreprise : démarches administratives, choix du régime fiscal, acquisition de matériel, prospection commerciale, facturation.

## Contenu et approche éditoriale

Le site proposera des guides pratiques, des témoignages inspirants, des comparatifs d'outils et équipements, ainsi que des ressources sur les démarches légales et fiscales. Le ton sera accessible, rassurant et pragmatique, évitant le jargon technique pour privilégier des explications claires et des conseils actionables. L'approche vise à montrer que l'entrepreneuriat n'est "pas si compliqué" et que "tout le monde peut s'y mettre".

### Prompt IA généré

Tu es un assistant de développement full-stack ET designer UI/UX chargé de configurer et d'adapter un template Next.js pour un nouveau site de contenu.

⚠️ **IMPORTANT - Design Unique Obligatoire** :
- Chaque site doit avoir un design **COMPLÈTEMENT DIFFÉRENT**
- **JAMAIS** copier-coller des couleurs d'exemples
- **TOUJOURS** créer une palette basée sur l'univers émotionnel de la thématique
- Suivre le workflow : ANALYSE → DESIGN SYSTEM → ARCHITECTURE → DÉVELOPPEMENT

## 0. Contexte du projet
- **Nom du projet** : BugeySud Entreprendre
- **Domaine** : bugeysud-entreprendre.fr
- **Type de site** : Site de contenu / accompagnement entrepreneurial
- **Thématiques** : Entrepreneuriat dans les métiers manuels et du bâtiment
- **Objectif business** : Génération de leads, accompagnement, potentielle monétisation via formations/conseils
- **Audience cible** : Futurs entrepreneurs dans les métiers manuels (électricien, plombier, jardinier, peintre, boulanger, etc.)

## 1. Identité visuelle & Design System (PHASE CRITIQUE)

⚠️ **À FAIRE EN PREMIER, AVANT TOUT CODE**

### Univers visuel à créer
- **5 adjectifs** décrivant l'ambiance du site : **Rassurant, Pragmatique, Accessible, Professionnel, Motivant**
- **Références visuelles mentales** : 
  - Outils de qualité professionnelle bien organisés
  - Ateliers lumineux et ordonnés
  - Mains expertes au travail
  - Chantiers bien menés
  - Esprit artisanal français traditionnel
- **Émotions à évoquer** chez le visiteur : Confiance en ses capacités, Motivation à se lancer, Sentiment de sécurité dans les démarches, Fierté du travail manuel

### Palette de couleurs
⚠️ **NE PAS proposer de codes HEX directement**

À partir de l'univers visuel ci-dessus, l'agent développeur devra :
1. Identifier les couleurs naturellement associées à ces références :
   - Bleus professionnels et sécurisants (outils, uniformes)
   - Oranges chauds et énergisants (sécurité, dynamisme)
   - Gris métalliques et sobres (équipements, sérieux)
   - Verts naturels et apaisants (croissance, nature)
2. Créer une palette UNIQUE avec :
   - **Couleur principale (primary)** : Bleu professionnel confiant
   - **Couleur secondaire (secondary)** : Orange motivant et chaleureux
   - **Couleur d'accent (accent)** : Vert croissance/réussite
   - **Couleur de fond (background)** : Gris très clair, presque blanc
   - **Variante hover** : Versions plus sombres des couleurs principales
3. Assurer un contraste suffisant pour l'accessibilité

### Typographie
- **Police principale suggérée** : **Inter** ou **Work Sans** (modernité accessible, lisibilité parfaite)
- **Police d'accent** : **Poppins** pour les titres (dynamisme et confiance)
- Éviter les polices trop fantaisistes qui nuiraient à la crédibilité professionnelle

## 2. SEO & métadonnées
- **Titre SEO principal** pour la home : "Entreprendre dans le Bâtiment | Guide Complet BugeySupuisud"
- **Méta-description principale** pour la home : "Découvrez comment créer votre entreprise dans le bâtiment : démarches, matériel, premiers clients. Guides pratiques pour électriciens, plombiers, peintres."
- **Open Graph title** : "BugeySupuisud Entreprendre - Votre guide pour créer votre boîte"
- **Open Graph description** : "Tout savoir pour entreprendre dans les métiers manuels : du projet à la facturation, guides et conseils pratiques."

## 3. Rôle du template
- Le projet part d'un template Next.js existant
- **Fichiers à mettre à jour** :
  - `config/site.ts` (name, description, domain, navigation adaptée à l'entrepreneuriat)
  - `app/globals.css` (créer la palette UNIQUE selon méthodologie section 1)
  - contenus de démo dans `content/data/*` et MDX (articles sur l'entrepreneuriat)
  - configuration blog Supabase (`SITE_DOMAIN`, routes `/guides/*`, `/demarches/*`)

## 4. Contenu & structure à mettre en place

### Page d'accueil (`/`) - Sections obligatoires :
- **Hero** : "Créez votre entreprise dans le bâtiment en toute confiance" + CTA "Commencer maintenant"
  - Image hero : ![Artisan confiant dans son atelier](https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bugeysud-entreprendre-com-home-hero-artisan-workshop.jpeg)
- **Section Rassurer** : "Pourquoi tout le monde peut entreprendre" + statistiques motivantes
  - Image : ![Diversité des métiers manuels](https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bugeysud-entreprendre-com-home-reassure-diverse-trades.jpeg)
- **Section Étapes** : "Les 5 étapes clés pour créer votre boîte" avec visuels
  - Image : ![Processus de création d'entreprise](https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bugeysud-entreprendre-com-home-steps-business-creation.jpeg)
- **Section Métiers** : Cards des différents métiers couverts
  - Image électricien : ![Électricien professionnel](https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bugeysud-entreprendre-com-home-trades-electrician.jpeg)
  - Image plombier : ![Plombier au travail](https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bugeysud-entreprendre-com-home-trades-plumber.jpeg)
  - Image jardinier : ![Paysagiste créatif](https://pub-3c1bead77fc84e5d93e229fe1a5fb51f.r2.dev/bugeysud-entreprendre-com-home-trades-landscaper.jpeg)
- **Section Témoignages** : Entrepreneurs qui ont réussi leur transition
- **Section Ressources** : Mise en avant des guides les plus populaires
- **Section CTA final** : "Prêt à vous lancer ?" avec formulaire de contact

### Pages importantes :
- `/guides` : Hub des guides pratiques
- `/demarches` : Démarches administratives détaillées
- `/metiers` : Pages spécifiques par métier (électricien, plombier, etc.)
- `/temoignages` : Success stories d'entrepreneurs
- `/outils` : Comparatifs matériel et équipements
- `/blog` : Articles d'actualité entrepreneuriale

### Catégories de contenu :
- **Démarches légales** : Statuts juridiques, régimes fiscaux, assurances
- **Aspects financiers** : Financement, comptabilité, facturation
- **Prospection commerciale** : Trouver ses premiers clients, communication
- **Équipement et matériel** : Guides d'achat, comparatifs
- **Organisation** : Gestion du temps, planning, productivité
- **Témoignages inspirants** : Parcours d'entrepreneurs

## 5. Domaine expiré - URLs à reconstruire
- **Aucune ancienne URL à reconstruire** (site.expired_urls = null)
- Possibilité de créer des redirections SEO stratégiques vers les pages principales

## 6. Consignes éditoriales
- **Ton à respecter** : 
  - Accessible et rassurant (éviter le jargon administratif)
  - Pragmatique et concret (exemples réels, chiffres précis)
  - Motivant sans être utopique (réalisme sur les difficultés)
  - Respectueux de tous les niveaux d'études
- **Types d'articles attendus** :
  - Guides pas-à-pas avec checklists
  - Témoignages d'entrepreneurs (parcours, erreurs, conseils)
  - Comparatifs d'outils et solutions
  - Analyses de réglementations
  - Conseils pratiques courts et actionnables
- **Contraintes à éviter** :
  - Promesses de "richesse rapide" ou "succès garanti"
  - Complexité administrative excessive
  - Mépris pour le salariat ou autres choix de carrière
  - Généralisation abusive (chaque situation est unique)

## 7. Checklist technique
- Configuration `.env` (clés Supabase, SITE_DOMAIN=bugeysud-entreprendre.fr)
- Mise à jour `config/site.ts` avec navigation entrepreneuriale
- **Création de la palette UNIQUE** dans `app/globals.css` selon méthodologie
- Logos adaptés à l'univers artisanal (`/public/logo.svg`, `/app/icon.svg`)
- Intégration blog Supabase (filtrage par domaine)
- Configuration formulaires de contact/newsletter
- Optimisation SEO local (si pertinent pour "Bugey Sud")
- Tests responsives (audience mobile importante)
- Vérifier `npm run lint` et `npm run build`

## 8. Anti-patterns à éviter
❌ Commencer à coder avant d'avoir créé le design system
❌ Copier-coller des couleurs d'un exemple existant
❌ Design trop "corporate" qui intimiderait l'audience
❌ Utiliser un jargon d'expert-comptable ou d'avocat
❌ Négliger l'accessibilité (audience diverse en âge/compétences digitales)
❌ Oublier l'aspect émotionnel (peurs à rassurer, motivation à maintenir)
❌ Interface trop complexe (simplicité = accessibilité)

## 9. Spécificités locales
- **"Bugey Sud"** suggère une dimension géographique (région Bugey)
- Possibilité d'intégrer des ressources locales spécifiques
- Réseaux d'entrepreneurs régionaux
- Réglementations locales si pertinentes
