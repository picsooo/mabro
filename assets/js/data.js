window.MABRO = {
  contact: {
    tel: '0557 86 11 15', telHref: '+213557861115',
    whatsapp: '0777 56 90 36', waHref: '213777569036',
    mail: 'marvelbrotherhoode@gmail.com',
    societe: 'Marvel Brotherhood'
  },
  // Plages : min / max en °C, lues sur les étiquettes et les publications de Mabro
  products: [
    { id: 'g13', name: 'Anti-freeze G13', family: 'Antigel organique', color: '#D63C9A', img: 'g13.webp',
      min: -37, max: 140, formats: ['5 L'], tag: 'Véhicules récents et véhicules chinois',
      pitch: 'Protection de −37 °C à +140 °C, technologie organique. Mabro le recommande pour les véhicules de marques chinoises.',
      points: ['Jusqu’à +140 °C', 'Protection contre la corrosion', 'Performance stable', 'Protection du circuit de refroidissement'] },
    { id: 'truck', name: 'Truck Anti-freeze', family: 'Poids lourds et engins', color: '#EE7417', img: 'truck.webp',
      min: -26, max: 121, formats: ['5 L', '200 L'], tag: 'Camions, bus, engins de chantier',
      pitch: 'Formulé pour les moteurs lourds : technologie HOAT (hybride organique), protection jusqu’à −26 °C.',
      points: ['Technologie HOAT (Hybrid Organic)', 'Résiste à la corrosion et aux dépôts', 'Haute résistance à l’ébullition', 'Fût de 200 L pour les flottes'] },
    { id: 'g12', name: 'Anti-freeze G12', family: 'Antigel', color: '#E8323F', img: 'g12.webp',
      min: -20, max: null, formats: ['5 L'], tag: 'Garages et ateliers',
      pitch: 'L’antigel rouge des professionnels de l’atelier, protection jusqu’à −20 °C.',
      points: ['Protection jusqu’à −20 °C', 'Format atelier 5 L', 'Pour l’entretien courant en garage'] },
    { id: 'psa', name: 'Specialized Coolant PSA', family: 'Liquide spécifique constructeur', color: '#1E88D2', img: 'specialized-psa.webp',
      min: -20, max: null, formats: ['5 L'], tag: 'Peugeot, Citroën',
      pitch: 'Liquide de refroidissement spécialisé pour les moteurs Peugeot et Citroën, protection jusqu’à −20 °C.',
      points: ['Spécifique Peugeot et Citroën', 'Protection jusqu’à −20 °C', 'Bidon 5 L'] },
    { id: 'typed', name: 'Specialized Coolant Type D', family: 'Liquide spécifique constructeur', color: '#E3C516', img: 'specialized-type-d.webp',
      min: -20, max: null, formats: ['5 L'], tag: 'Renault, Dacia, Nissan',
      pitch: 'Le liquide jaune « Type D » pour les moteurs Renault et Nissan.',
      points: ['Spécifique Renault et Nissan', 'Norme Type D', 'Bidon 5 L'] },
    { id: 'coolant', name: 'Coolant', family: 'Liquide de refroidissement', color: '#2E9BE0', img: 'coolant-bleu.webp', img2: 'coolant-jaune.webp',
      min: -5, max: null, formats: ['1 L', '2 L', '5 L'], tag: 'Pour tous les moteurs, climat doux et Sud',
      pitch: 'Le liquide de refroidissement du quotidien, en plusieurs couleurs. La version jaune est pensée pour les conditions du Sud.',
      points: ['Protection jusqu’à −5 °C', 'Bleu, jaune, rose, vert', '1 L, 2 L et 5 L', 'Carton de 4 × 5 L'] }
  ],
  // Correspondances proposées d'après les étiquettes Mabro (à valider)
  vehicles: [
    ['Peugeot', 'psa'], ['Citroën', 'psa'], ['DS', 'psa'],
    ['Renault', 'typed'], ['Dacia', 'typed'], ['Nissan', 'typed'],
    ['Chery', 'g13'], ['Geely', 'g13'], ['Haval / Great Wall', 'g13'], ['JAC', 'g13'], ['BAIC', 'g13'], ['Changan', 'g13'], ['MG', 'g13'], ['DFSK', 'g13'],
    ['Volkswagen', 'g12'], ['Seat', 'g12'], ['Skoda', 'g12'], ['Audi', 'g12'],
    ['Hyundai', 'coolant'], ['Kia', 'coolant'], ['Toyota', 'coolant'], ['Fiat', 'coolant'], ['Suzuki', 'coolant'], ['Autre marque', 'coolant'],
    ['Camion, bus ou engin', 'truck']
  ],
  wilayas: ['Adrar','Chlef','Laghouat','Oum El Bouaghi','Batna','Béjaïa','Biskra','Béchar','Blida','Bouira','Tamanrasset','Tébessa','Tlemcen','Tiaret','Tizi Ouzou','Alger','Djelfa','Jijel','Sétif','Saïda','Skikda','Sidi Bel Abbès','Annaba','Guelma','Constantine','Médéa','Mostaganem','M’Sila','Mascara','Ouargla','Oran','El Bayadh','Illizi','Bordj Bou Arréridj','Boumerdès','El Tarf','Tindouf','Tissemsilt','El Oued','Khenchela','Souk Ahras','Tipaza','Mila','Aïn Defla','Naâma','Aïn Témouchent','Ghardaïa','Relizane','Timimoun','Bordj Badji Mokhtar','Ouled Djellal','Béni Abbès','In Salah','In Guezzam','Touggourt','Djanet','El M’Ghair','El Meniaa']
};
