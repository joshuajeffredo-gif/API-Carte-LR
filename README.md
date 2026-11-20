# Carte interactive de La Rochelle

Cette carte permet de repérer les toilettes publiques et les stations de vélos en libre-service Yélo à La Rochelle. Clique sur un marqueur pour afficher les informations du lieu.

| Marqueur | Lieu | Informations affichées |
| --- | --- | --- |
| 🚻 Rouge | Toilettes publiques | Emplacement, mode de fonctionnement et horaires |
| 🚲 Bleu | Station Yélo | Nom de la station |

## Lancer le projet en local

1. Télécharge le dépôt et ouvre le dossier contenant `index.html`.
2. Depuis ce dossier, lance un serveur local avec Python 3. Sous Windows, utilise la commande suivante.

   ```powershell
   py -m http.server 8080
   ```

3. Ouvre [http://localhost:8080](http://localhost:8080) dans ton navigateur.

Une connexion Internet est nécessaire pour charger Leaflet, le fond de carte OpenStreetMap et les données de l’agglomération.

## Fonctionnement

La page [index.html](index.html) charge Leaflet et affiche la légende. À l’ouverture, [script.js](script.js) centre la carte sur La Rochelle et interroge l’[API open data de l’agglomération](https://opendata.agglo-larochelle.fr/). Pour chaque lieu reçu, le script lit la latitude et la longitude, puis place un marqueur avec sa fiche. Le fichier [assets/style.css](assets/style.css) définit la taille de la carte et les couleurs des marqueurs.
