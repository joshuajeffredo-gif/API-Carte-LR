var map = L.map('map').setView([46.16, -1.15], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap"
}).addTo(map);

const iconeWC = L.divIcon({
    className: "marker-wc",
    html: "🚻",
    iconSize: [35, 35],
    iconAnchor: [17, 17]
});

const iconeVelo = L.divIcon({
    className: "marker-velo",
    html: "🚲",
    iconSize: [35, 35],
    iconAnchor: [17, 17]
});
// ==========================
// WC PUBLICS
// ==========================

fetch("https://opendata.agglo-larochelle.fr/d4c/api/records/1.0/search/dataset=hygiene_et_sante_wc_publics&resource_id=9745936c-ba12-4c0b-94a6-bf0638a41e42&facet=emplacement")
    .then(response => response.json())
    .then(data => {
        //affichage des données dans la console pour vérifier le contenu
        console.log(data.records[0].fields);
        data.records.forEach(element => {
            //affichage des données dans la console pour vérifier le contenu
            console.log(element.fields.emplacement);
            console.log(element.fields.geo_point_2d);
            //récupération des coordonnées géographiques et conversion en float
            const coordonees = element.fields.geo_point_2d.split(",");
            const latidude = parseFloat(coordonees[0]);
            const longitude = parseFloat(coordonees[1]);
            //création d'un marqueur sur la carte avec les coordonnées et un popup contenant les informations de l'élément
            L.marker([latidude, longitude], { icon: iconeWC })
                .addTo(map)
                .bindPopup(`
                    <strong>${element.fields.emplacement}</strong><br>
                    Mode : ${element.fields.mode}<br>
                    Horaires : ${element.fields.horaires}
                `);
        });
    });

    // ==========================
    // VELOS YELO
    // ==========================

    fetch("https://opendata.agglo-larochelle.fr/d4c/api/records/1.0/search/dataset=yelo___disponibilite_des_velos_en_libre_service&resource_id=1f124bea-d55f-457f-9eab-b7877d803435&facet=station_nom")
    .then(response => response.json())
    .then(data => {
        //affichage des données dans la console pour vérifier le contenu
        console.log(data);
        //affichage des données dans la console pour vérifier le contenu
        data.records.forEach(element => {
            //affichage des données dans la console pour vérifier le contenu
            const coordonnees = element.fields.geo_point_2d.split(",");
            //récupération des coordonnées géographiques et conversion en float
            const latitude = parseFloat(coordonnees[0]);
            const longitude = parseFloat(coordonnees[1]);
            //création d'un marqueur sur la carte avec les coordonnées et un popup contenant les informations de l'élément
            L.marker([latitude, longitude], { icon: iconeVelo })
                .addTo(map)
                .bindPopup(`
                    <strong>Station vélo</strong><br>
                    ${element.fields.station_nom}
                `);
        });
    });