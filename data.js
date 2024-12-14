var APP_DATA = {
  "scenes": [
    {
      "id": "0-vista-ruta",
      "name": "Vista Ruta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.8007323552549952,
        "pitch": 0.094614604692973,
        "fov": 1.4452797330702214
      },
      "linkHotspots": [
        {
          "yaw": -0.27584787517022136,
          "pitch": 0.28380560361853036,
          "rotation": 0,
          "target": "1-vista-calle"
        },
        {
          "yaw": -0.17625103267547892,
          "pitch": 0.06503100103864945,
          "rotation": 0,
          "target": "2-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-vista-calle",
      "name": "Vista Calle",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.019982455436285,
        "pitch": -0.11177184144665375,
        "fov": 1.4452797330702214
      },
      "linkHotspots": [
        {
          "yaw": -2.94955274829306,
          "pitch": 0.019829081541754334,
          "rotation": 0,
          "target": "2-entrada"
        },
        {
          "yaw": -0.38215880485759257,
          "pitch": 0.12503340774901872,
          "rotation": 0,
          "target": "0-vista-ruta"
        },
        {
          "yaw": -2.071391205434889,
          "pitch": 0.020309419749244384,
          "rotation": 0,
          "target": "3-esquina-derecha"
        },
        {
          "yaw": 2.4336879311375323,
          "pitch": 0.03333998124984561,
          "rotation": 0,
          "target": "4-esquina-izquierda"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.815375479699812,
        "pitch": 0.16181601613330798,
        "fov": 1.4452797330702214
      },
      "linkHotspots": [
        {
          "yaw": 1.7922128876499608,
          "pitch": 0.19883484915877503,
          "rotation": 0,
          "target": "4-esquina-izquierda"
        },
        {
          "yaw": 3.11222943612454,
          "pitch": 0.3904968168795513,
          "rotation": 0,
          "target": "5-dentro-1"
        },
        {
          "yaw": -3.1230331446594413,
          "pitch": 0.1856845233485167,
          "rotation": 0,
          "target": "6-dentro-2"
        },
        {
          "yaw": -3.0756848045116403,
          "pitch": 0.01332681846329109,
          "rotation": 0,
          "target": "7-dentro-3"
        },
        {
          "yaw": -1.7496360626615086,
          "pitch": 0.1034448869161082,
          "rotation": 0,
          "target": "3-esquina-derecha"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-esquina-derecha",
      "name": "Esquina Derecha",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.3788067162118356,
        "pitch": 0.26168899140348145,
        "fov": 1.4452797330702214
      },
      "linkHotspots": [
        {
          "yaw": -0.6792569238150925,
          "pitch": 0.21331988219046494,
          "rotation": 0,
          "target": "5-dentro-1"
        },
        {
          "yaw": -0.06286096766962856,
          "pitch": 0.15490229514340825,
          "rotation": 0,
          "target": "6-dentro-2"
        },
        {
          "yaw": 0.2934029878124118,
          "pitch": 0.07543845870561938,
          "rotation": 0,
          "target": "7-dentro-3"
        },
        {
          "yaw": -1.1742543647789674,
          "pitch": 0.17482245579818034,
          "rotation": 0,
          "target": "2-entrada"
        },
        {
          "yaw": -1.002158490108961,
          "pitch": 0.0878758006160929,
          "rotation": 0,
          "target": "4-esquina-izquierda"
        },
        {
          "yaw": -1.5877967708157925,
          "pitch": 0.15889740647787853,
          "rotation": 0,
          "target": "1-vista-calle"
        },
        {
          "yaw": -1.921779366309913,
          "pitch": 0.1018177228867021,
          "rotation": 0,
          "target": "0-vista-ruta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-esquina-izquierda",
      "name": "Esquina Izquierda",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.242114310034058,
        "pitch": 0.07930204296681254,
        "fov": 1.4452797330702214
      },
      "linkHotspots": [
        {
          "yaw": -1.6622526778104003,
          "pitch": 0.1936358817657542,
          "rotation": 0,
          "target": "2-entrada"
        },
        {
          "yaw": -2.3245610791983555,
          "pitch": 0.09831909885610912,
          "rotation": 0,
          "target": "5-dentro-1"
        },
        {
          "yaw": -2.6208531793739347,
          "pitch": 0.04598950657713985,
          "rotation": 0,
          "target": "6-dentro-2"
        },
        {
          "yaw": -2.851295621071232,
          "pitch": -0.021484979707036445,
          "rotation": 0,
          "target": "7-dentro-3"
        },
        {
          "yaw": -1.5412947798348373,
          "pitch": 0.05343052020987216,
          "rotation": 0,
          "target": "3-esquina-derecha"
        },
        {
          "yaw": -0.8282393632887413,
          "pitch": 0.20499335234197602,
          "rotation": 0,
          "target": "1-vista-calle"
        },
        {
          "yaw": -0.3118649739005299,
          "pitch": 0.12624727100421929,
          "rotation": 0,
          "target": "0-vista-ruta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dentro-1",
      "name": "Dentro 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.04387699236857756,
        "pitch": 0.03370336826090181,
        "fov": 1.4452797330702214
      },
      "linkHotspots": [
        {
          "yaw": -0.09010308062551786,
          "pitch": 0.2735642227887567,
          "rotation": 0,
          "target": "6-dentro-2"
        },
        {
          "yaw": -0.06245737823578956,
          "pitch": 0.035876588756107,
          "rotation": 0,
          "target": "7-dentro-3"
        },
        {
          "yaw": 1.748719213859859,
          "pitch": 0.09002791885303196,
          "rotation": 0,
          "target": "3-esquina-derecha"
        },
        {
          "yaw": -1.9755702635278674,
          "pitch": 0.14330144622796226,
          "rotation": 0,
          "target": "4-esquina-izquierda"
        },
        {
          "yaw": 3.03684105154338,
          "pitch": 0.19991607799377142,
          "rotation": 0,
          "target": "2-entrada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dentro-2",
      "name": "Dentro 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.22376034031861636,
        "pitch": 0.1095716306759833,
        "fov": 1.4452797330702214
      },
      "linkHotspots": [
        {
          "yaw": -0.49589100641050265,
          "pitch": 0.07992802574920432,
          "rotation": 0,
          "target": "7-dentro-3"
        },
        {
          "yaw": 2.7697326690184507,
          "pitch": 0.3745114868170827,
          "rotation": 0,
          "target": "5-dentro-1"
        },
        {
          "yaw": 2.7893054326252393,
          "pitch": 0.10307354432072202,
          "rotation": 0,
          "target": "2-entrada"
        },
        {
          "yaw": -2.9505681605813407,
          "pitch": 0.06720258130332901,
          "rotation": 0,
          "target": "4-esquina-izquierda"
        },
        {
          "yaw": 2.0304801078189385,
          "pitch": 0.041780529553740564,
          "rotation": 0,
          "target": "3-esquina-derecha"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-dentro-3",
      "name": "Dentro 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 0.1404301595249393,
        "pitch": 0.00222953004677251,
        "fov": 1.4452797330702214
      },
      "linkHotspots": [
        {
          "yaw": 0.0367069375246718,
          "pitch": 0.31628721240529956,
          "rotation": 0,
          "target": "6-dentro-2"
        },
        {
          "yaw": -0.46818136222928786,
          "pitch": 0.08697153168094118,
          "rotation": 0,
          "target": "3-esquina-derecha"
        },
        {
          "yaw": 0.5055973942407519,
          "pitch": 0.11235553470361204,
          "rotation": 0,
          "target": "4-esquina-izquierda"
        },
        {
          "yaw": 0.03435376571027682,
          "pitch": 0.15261724417825207,
          "rotation": 0,
          "target": "5-dentro-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Siquiman Terreno",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
