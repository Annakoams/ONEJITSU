import groupCarte from './images/groupCarte.png';
 
 
 const dataAdherents = {
    labels: ['Hommes (68)', 'Femmes (21)', 'Autres (3)'],
    
    datasets: [
      {
        label: 'Adherents',
        data: [10, 49, 41],
        backgroundColor: [
          "#E6E6E6",
          "#E62F2E",
          "#323232"
        ],
        borderColor: [
          "#E6E6E6",
          "#E62F2E",
          "#323232"
        ],
        borderWidth: 1,
        
        
      },
    ],
    
  };
 const dataCotisations = {
    labels: ['Hommes (68)', 'Femmes (21)', 'Autres (3)'],
    
    datasets: [
      {
        label: 'Cotisations',
        data: [10, 49, 41],
        backgroundColor: [
          "#E6E6E6",
          "#E62F2E",
          
        ],
        borderColor: [
          "#E6E6E6",
          "#E62F2E",
          
        ],
        borderWidth: 1,
        
        
      },
    ],
    
  };

  const cours = [

    {
      nom: 'JJB Débutants', date: 'Jeu. 20 Janvier', heure: '18h00 - 19h30', club: ' Par Jackson Paulo', participants: [
        { urlImage: groupCarte }, { urlImage: groupCarte }, { urlImage: groupCarte }, { urlImage: groupCarte }, { urlImage: groupCarte }, { urlImage: groupCarte },
        { urlImage: groupCarte }, { urlImage: groupCarte }, { urlImage: groupCarte }, { urlImage: groupCarte }, { urlImage: groupCarte }, { urlImage: groupCarte }

      ]
    },
    {
      nom: 'JJB toutes ceintures', date: 'Mer. 19 Janvier', heure: '07h30 - 08h30', club: ' Par Jackson Paulo', participants: [
        { urlImage: groupCarte }, { urlImage: groupCarte }, { urlImage: groupCarte }, { urlImage: groupCarte }, { urlImage: groupCarte }, { urlImage: groupCarte },
        { urlImage: groupCarte }, { urlImage: groupCarte }, { urlImage: groupCarte }, { urlImage: groupCarte }
      ]
    },
    {
      nom: 'JJB Avancés', date: "Mer. 19 Janvier", heure: ' 09h30 - 11h30', club: ' Par Jackson Paulo', participants: [
        { urlImage: groupCarte }, { urlImage: groupCarte }, { urlImage: groupCarte }, { urlImage: groupCarte }
      ]
    }

  ];
  export default{cours,dataAdherents,dataCotisations}