/**
 @api {post} /json/search-variants-mono-brand-cartesian
 Получить доступные сегменты
 @apiName get available segments
 @apiGroup segments


 @apiParam {string} segmentsCount Кол-во пассажиров
 @apiParam {string}  date[0] Дата вылета
 @apiParam {string} origin-city-code[0] IATA код аэропорта вылета
 @apiParam {string} destination-city-code[0] NSK
 @apiParam {string} date[1] 10.09.2018
 @apiParam {string} origin-city-code[1] NSK
 @apiParam {string} destination-city-code[1] MOW
 @apiParam {string} count-aaa 2


 @apiSuccessExample {json} success:
 {
   "result": "ok",
   "flights": [
     {
       "chainId": "1",
       "flights": [
         {
           "id": 1,
           "company": {
             "code_en": "Y7",
             "name_en": "ЮТЭЙР",
             "code": "Y7",
             "name": "ЮТЭЙР"
           },
           "carrier": "Y7",
           "racenumber": "103",
           "departuredate": "23.08.2018",
           "date": "23.08.2018",
           "departuretime": "22:10",
           "arrivaldate": "24.08.2018",
           "arrivaltime": "06:15",
           "airplane": "БОИНГ 737-800",
           "airplaneName": "БОИНГ 737-800",
           "vehicleCodeEn": "738",
           "destinationport": "NSK",
           "destinationportName": "Норильск Алыкель",
           "destinationcity": "NSK",
           "destinationcityName": "Норильск",
           "originport": "DME",
           "originportName": "Домодедово",
           "origincity": "MOW",
           "origincityName": "Москва",
           "flighttime": "4:05",
           "delaydays": 0,
           "departuredayshift": 0,
           "arrivaldayshift": 1,
           "landings": []
         }
       ],
       "connections": [],
       "flightTime": "04:05"
     },
     {
       "chainId": "2",
       "flights": [
         {
           "id": 2,
           "company": {
             "code_en": "Y7",
             "name_en": "ЮТЭЙР",
             "code": "Y7",
             "name": "ЮТЭЙР"
           },
           "carrier": "Y7",
           "racenumber": "3333",
           "departuredate": "10.09.2018",
           "date": "10.09.2018",
           "departuretime": "10:00",
           "arrivaldate": "10.09.2018",
           "arrivaltime": "11:30",
           "airplane": "БОИНГ 737-800",
           "airplaneName": "БОИНГ 737-800",
           "vehicleCodeEn": "738",
           "destinationport": "DME",
           "destinationportName": "Домодедово",
           "destinationcity": "MOW",
           "destinationcityName": "Москва",
           "originport": "NSK",
           "originportName": "Норильск Алыкель",
           "origincity": "NSK",
           "origincityName": "Норильск",
           "flighttime": "5:30",
           "delaydays": 0,
           "departuredayshift": 0,
           "arrivaldayshift": 0,
           "landings": []
         }
       ],
       "connections": [],
       "flightTime": "05:30"
     },
     {
       "chainId": "3-4",
       "flights": [
         {
           "id": 3,
           "company": {
             "code_en": "Y7",
             "name_en": "ЮТЭЙР",
             "code": "Y7",
             "name": "ЮТЭЙР"
           },
           "carrier": "Y7",
           "racenumber": "4443",
           "departuredate": "10.09.2018",
           "date": "10.09.2018",
           "departuretime": "18:00",
           "arrivaldate": "10.09.2018",
           "arrivaltime": "20:30",
           "airplane": "БОИНГ 737-800",
           "airplaneName": "БОИНГ 737-800",
           "vehicleCodeEn": "738",
           "destinationport": "KJA",
           "destinationportName": "Емельяново",
           "destinationcity": "KJA",
           "destinationcityName": "Красноярск",
           "originport": "NSK",
           "originportName": "Норильск Алыкель",
           "origincity": "NSK",
           "origincityName": "Норильск",
           "destinationTerminal": "1",
           "flighttime": "2:30",
           "delaydays": 0,
           "departuredayshift": 0,
           "arrivaldayshift": 0,
           "landings": []
         },
         {
           "id": 4,
           "company": {
             "code_en": "Y7",
             "name_en": "ЮТЭЙР",
             "code": "Y7",
             "name": "ЮТЭЙР"
           },
           "carrier": "Y7",
           "racenumber": "119",
           "departuredate": "10.09.2018",
           "date": "10.09.2018",
           "departuretime": "23:30",
           "arrivaldate": "11.09.2018",
           "arrivaltime": "00:25",
           "airplane": "БОИНГ 737-800",
           "airplaneName": "БОИНГ 737-800",
           "vehicleCodeEn": "738",
           "destinationport": "DME",
           "destinationportName": "Домодедово",
           "destinationcity": "MOW",
           "destinationcityName": "Москва",
           "originport": "KJA",
           "originportName": "Емельяново",
           "origincity": "KJA",
           "origincityName": "Красноярск",
           "originTerminal": "2",
           "flighttime": "4:55",
           "delaydays": 0,
           "departuredayshift": 0,
           "arrivaldayshift": 1,
           "landings": []
         }
       ],
       "connections": [
         {
           "city": "KJA",
           "cityName": "Красноярск",
           "previousAirport": "KJA",
           "previousAirportName": "Емельяново",
           "nextAirport": "KJA",
           "nextAirportName": "Емельяново",
           "previousTerminal": "1",
           "nextTerminal": "2",
           "time": "03:00"
         }
       ],
       "flightTime": "10:25"
     },
     {
       "chainId": "3-5",
       "flights": [
         {
           "id": 3,
           "company": {
             "code_en": "Y7",
             "name_en": "ЮТЭЙР",
             "code": "Y7",
             "name": "ЮТЭЙР"
           },
           "carrier": "Y7",
           "racenumber": "4443",
           "departuredate": "10.09.2018",
           "date": "10.09.2018",
           "departuretime": "18:00",
           "arrivaldate": "10.09.2018",
           "arrivaltime": "20:30",
           "airplane": "БОИНГ 737-800",
           "airplaneName": "БОИНГ 737-800",
           "vehicleCodeEn": "738",
           "destinationport": "KJA",
           "destinationportName": "Емельяново",
           "destinationcity": "KJA",
           "destinationcityName": "Красноярск",
           "originport": "NSK",
           "originportName": "Норильск Алыкель",
           "origincity": "NSK",
           "origincityName": "Норильск",
           "destinationTerminal": "1",
           "flighttime": "2:30",
           "delaydays": 0,
           "departuredayshift": 0,
           "arrivaldayshift": 0,
           "landings": []
         },
         {
           "id": 5,
           "company": {
             "code_en": "Y7",
             "name_en": "ЮТЭЙР",
             "code": "Y7",
             "name": "ЮТЭЙР"
           },
           "carrier": "Y7",
           "racenumber": "118",
           "departuredate": "11.09.2018",
           "date": "11.09.2018",
           "departuretime": "12:00",
           "arrivaldate": "11.09.2018",
           "arrivaltime": "17:30",
           "airplane": "БОИНГ 737-800",
           "airplaneName": "БОИНГ 737-800",
           "vehicleCodeEn": "738",
           "destinationport": "DME",
           "destinationportName": "Домодедово",
           "destinationcity": "MOW",
           "destinationcityName": "Москва",
           "originport": "KJA",
           "originportName": "Емельяново",
           "origincity": "KJA",
           "origincityName": "Красноярск",
           "originTerminal": "2",
           "flighttime": "9:30",
           "delaydays": 0,
           "departuredayshift": 1,
           "arrivaldayshift": 1,
           "landings": []
         }
       ],
       "connections": [
         {
           "city": "KJA",
           "cityName": "Красноярск",
           "previousAirport": "KJA",
           "previousAirportName": "Емельяново",
           "nextAirport": "KJA",
           "nextAirportName": "Емельяново",
           "previousTerminal": "1",
           "nextTerminal": "2",
           "time": "15:30"
         }
       ],
       "flightTime": "27:30"
     },
     {
       "chainId": "6-5",
       "flights": [
         {
           "id": 6,
           "company": {
             "code_en": "Y7",
             "name_en": "ЮТЭЙР",
             "code": "Y7",
             "name": "ЮТЭЙР"
           },
           "carrier": "Y7",
           "racenumber": "4444",
           "departuredate": "10.09.2018",
           "date": "10.09.2018",
           "departuretime": "23:00",
           "arrivaldate": "11.09.2018",
           "arrivaltime": "02:30",
           "airplane": "БОИНГ 737-800",
           "airplaneName": "БОИНГ 737-800",
           "vehicleCodeEn": "738",
           "destinationport": "KJA",
           "destinationportName": "Емельяново",
           "destinationcity": "KJA",
           "destinationcityName": "Красноярск",
           "originport": "NSK",
           "originportName": "Норильск Алыкель",
           "origincity": "NSK",
           "origincityName": "Норильск",
           "destinationTerminal": "1",
           "flighttime": "3:30",
           "delaydays": 0,
           "departuredayshift": 0,
           "arrivaldayshift": 1,
           "landings": []
         },
         {
           "id": 5,
           "company": {
             "code_en": "Y7",
             "name_en": "ЮТЭЙР",
             "code": "Y7",
             "name": "ЮТЭЙР"
           },
           "carrier": "Y7",
           "racenumber": "118",
           "departuredate": "11.09.2018",
           "date": "11.09.2018",
           "departuretime": "12:00",
           "arrivaldate": "11.09.2018",
           "arrivaltime": "17:30",
           "airplane": "БОИНГ 737-800",
           "airplaneName": "БОИНГ 737-800",
           "vehicleCodeEn": "738",
           "destinationport": "DME",
           "destinationportName": "Домодедово",
           "destinationcity": "MOW",
           "destinationcityName": "Москва",
           "originport": "KJA",
           "originportName": "Емельяново",
           "origincity": "KJA",
           "origincityName": "Красноярск",
           "originTerminal": "2",
           "flighttime": "9:30",
           "delaydays": 0,
           "departuredayshift": 1,
           "arrivaldayshift": 1,
           "landings": []
         }
       ],
       "connections": [
         {
           "city": "KJA",
           "cityName": "Красноярск",
           "previousAirport": "KJA",
           "previousAirportName": "Емельяново",
           "nextAirport": "KJA",
           "nextAirportName": "Емельяново",
           "previousTerminal": "1",
           "nextTerminal": "2",
           "time": "09:30"
         }
       ],
       "flightTime": "22:30"
     },
     {
       "chainId": "7-5",
       "flights": [
         {
           "id": 7,
           "company": {
             "code_en": "Y7",
             "name_en": "ЮТЭЙР",
             "code": "Y7",
             "name": "ЮТЭЙР"
           },
           "carrier": "Y7",
           "racenumber": "4445",
           "departuredate": "10.09.2018",
           "date": "10.09.2018",
           "departuretime": "23:00",
           "arrivaldate": "11.09.2018",
           "arrivaltime": "02:30",
           "airplane": "БОИНГ 737-800",
           "airplaneName": "БОИНГ 737-800",
           "vehicleCodeEn": "738",
           "destinationport": "KJA",
           "destinationportName": "Емельяново",
           "destinationcity": "KJA",
           "destinationcityName": "Красноярск",
           "originport": "NSK",
           "originportName": "Норильск Алыкель",
           "origincity": "NSK",
           "origincityName": "Норильск",
           "destinationTerminal": "1",
           "flighttime": "3:30",
           "delaydays": 0,
           "departuredayshift": 0,
           "arrivaldayshift": 1,
           "landings": []
         },
         {
           "id": 5,
           "company": {
             "code_en": "Y7",
             "name_en": "ЮТЭЙР",
             "code": "Y7",
             "name": "ЮТЭЙР"
           },
           "carrier": "Y7",
           "racenumber": "118",
           "departuredate": "11.09.2018",
           "date": "11.09.2018",
           "departuretime": "12:00",
           "arrivaldate": "11.09.2018",
           "arrivaltime": "17:30",
           "airplane": "БОИНГ 737-800",
           "airplaneName": "БОИНГ 737-800",
           "vehicleCodeEn": "738",
           "destinationport": "DME",
           "destinationportName": "Домодедово",
           "destinationcity": "MOW",
           "destinationcityName": "Москва",
           "originport": "KJA",
           "originportName": "Емельяново",
           "origincity": "KJA",
           "origincityName": "Красноярск",
           "originTerminal": "2",
           "flighttime": "9:30",
           "delaydays": 0,
           "departuredayshift": 1,
           "arrivaldayshift": 1,
           "landings": []
         }
       ],
       "connections": [
         {
           "city": "KJA",
           "cityName": "Красноярск",
           "previousAirport": "KJA",
           "previousAirportName": "Емельяново",
           "nextAirport": "KJA",
           "nextAirportName": "Емельяново",
           "previousTerminal": "1",
           "nextTerminal": "2",
           "time": "09:30"
         }
       ],
       "flightTime": "22:30"
     },
     {
       "chainId": "7-8",
       "flights": [
         {
           "id": 7,
           "company": {
             "code_en": "Y7",
             "name_en": "ЮТЭЙР",
             "code": "Y7",
             "name": "ЮТЭЙР"
           },
           "carrier": "Y7",
           "racenumber": "4445",
           "departuredate": "10.09.2018",
           "date": "10.09.2018",
           "departuretime": "23:00",
           "arrivaldate": "11.09.2018",
           "arrivaltime": "02:30",
           "airplane": "БОИНГ 737-800",
           "airplaneName": "БОИНГ 737-800",
           "vehicleCodeEn": "738",
           "destinationport": "KJA",
           "destinationportName": "Емельяново",
           "destinationcity": "KJA",
           "destinationcityName": "Красноярск",
           "originport": "NSK",
           "originportName": "Норильск Алыкель",
           "origincity": "NSK",
           "origincityName": "Норильск",
           "destinationTerminal": "1",
           "flighttime": "3:30",
           "delaydays": 0,
           "departuredayshift": 0,
           "arrivaldayshift": 1,
           "landings": []
         },
         {
           "id": 8,
           "company": {
             "code_en": "Y7",
             "name_en": "ЮТЭЙР",
             "code": "Y7",
             "name": "ЮТЭЙР"
           },
           "carrier": "Y7",
           "racenumber": "119",
           "departuredate": "11.09.2018",
           "date": "11.09.2018",
           "departuretime": "23:30",
           "arrivaldate": "12.09.2018",
           "arrivaltime": "00:25",
           "airplane": "БОИНГ 737-800",
           "airplaneName": "БОИНГ 737-800",
           "vehicleCodeEn": "738",
           "destinationport": "DME",
           "destinationportName": "Домодедово",
           "destinationcity": "MOW",
           "destinationcityName": "Москва",
           "originport": "KJA",
           "originportName": "Емельяново",
           "origincity": "KJA",
           "origincityName": "Красноярск",
           "originTerminal": "2",
           "flighttime": "4:55",
           "delaydays": 0,
           "departuredayshift": 1,
           "arrivaldayshift": 2,
           "landings": []
         }
       ],
       "connections": [
         {
           "city": "KJA",
           "cityName": "Красноярск",
           "previousAirport": "KJA",
           "previousAirportName": "Емельяново",
           "nextAirport": "KJA",
           "nextAirportName": "Емельяново",
           "previousTerminal": "1",
           "nextTerminal": "2",
           "time": "21:00"
         }
       ],
       "flightTime": "29:25"
     },
     {
       "chainId": "6-8",
       "flights": [
         {
           "id": 6,
           "company": {
             "code_en": "Y7",
             "name_en": "ЮТЭЙР",
             "code": "Y7",
             "name": "ЮТЭЙР"
           },
           "carrier": "Y7",
           "racenumber": "4444",
           "departuredate": "10.09.2018",
           "date": "10.09.2018",
           "departuretime": "23:00",
           "arrivaldate": "11.09.2018",
           "arrivaltime": "02:30",
           "airplane": "БОИНГ 737-800",
           "airplaneName": "БОИНГ 737-800",
           "vehicleCodeEn": "738",
           "destinationport": "KJA",
           "destinationportName": "Емельяново",
           "destinationcity": "KJA",
           "destinationcityName": "Красноярск",
           "originport": "NSK",
           "originportName": "Норильск Алыкель",
           "origincity": "NSK",
           "origincityName": "Норильск",
           "destinationTerminal": "1",
           "flighttime": "3:30",
           "delaydays": 0,
           "departuredayshift": 0,
           "arrivaldayshift": 1,
           "landings": []
         },
         {
           "id": 8,
           "company": {
             "code_en": "Y7",
             "name_en": "ЮТЭЙР",
             "code": "Y7",
             "name": "ЮТЭЙР"
           },
           "carrier": "Y7",
           "racenumber": "119",
           "departuredate": "11.09.2018",
           "date": "11.09.2018",
           "departuretime": "23:30",
           "arrivaldate": "12.09.2018",
           "arrivaltime": "00:25",
           "airplane": "БОИНГ 737-800",
           "airplaneName": "БОИНГ 737-800",
           "vehicleCodeEn": "738",
           "destinationport": "DME",
           "destinationportName": "Домодедово",
           "destinationcity": "MOW",
           "destinationcityName": "Москва",
           "originport": "KJA",
           "originportName": "Емельяново",
           "origincity": "KJA",
           "origincityName": "Красноярск",
           "originTerminal": "2",
           "flighttime": "4:55",
           "delaydays": 0,
           "departuredayshift": 1,
           "arrivaldayshift": 2,
           "landings": []
         }
       ],
       "connections": [
         {
           "city": "KJA",
           "cityName": "Красноярск",
           "previousAirport": "KJA",
           "previousAirportName": "Емельяново",
           "nextAirport": "KJA",
           "nextAirportName": "Емельяново",
           "previousTerminal": "1",
           "nextTerminal": "2",
           "time": "21:00"
         }
       ],
       "flightTime": "29:25"
     }
   ],
   "prices": [
     {
       "1": [
         {
           "clientId": 7604,
           "price": "30126.00",
           "originalPrice": "30126.00",
           "currency": "RUB",
           "brand": "Y7.Y7.Y.2.СТАНДАРТ",
           "requestedBrands": "СТАНДАРТ",
           "available": 6
         },
         {
           "clientId": 7604,
           "price": "70026.00",
           "originalPrice": "70026.00",
           "currency": "RUB",
           "brand": "Y7.Y7.C.3.ЛАЙТ",
           "requestedBrands": "ЛАЙТ",
           "available": 4
         }
       ]
     },
     {
       "6-8": [
         {
           "clientId": 7604,
           "price": "32440.00",
           "originalPrice": "32440.00",
           "currency": "RUB",
           "brand": "Y7.Y7.Y.1.ЛАЙТ",
           "requestedBrands": "ЛАЙТ",
           "available": 6
         }
       ],
       "2": [
         {
           "clientId": 7604,
           "price": "30800.00",
           "originalPrice": "30800.00",
           "currency": "RUB",
           "brand": "Y7.Y7.Y.2.СТАНДАРТ",
           "requestedBrands": "СТАНДАРТ",
           "available": 6
         },
         {
           "clientId": 7604,
           "price": "70700.00",
           "originalPrice": "70700.00",
           "currency": "RUB",
           "brand": "Y7.Y7.C.3.ЛАЙТ",
           "requestedBrands": "ЛАЙТ",
           "available": 4
         }
       ],
       "7-8": [
         {
           "clientId": 7604,
           "price": "32440.00",
           "originalPrice": "32440.00",
           "currency": "RUB",
           "brand": "Y7.Y7.Y.1.ЛАЙТ",
           "requestedBrands": "ЛАЙТ",
           "available": 6
         }
       ],
       "3-4": [
         {
           "clientId": 7604,
           "price": "32440.00",
           "originalPrice": "32440.00",
           "currency": "RUB",
           "brand": "Y7.Y7.Y.1.ЛАЙТ",
           "requestedBrands": "ЛАЙТ",
           "available": 6
         }
       ],
       "3-5": [
         {
           "clientId": 7604,
           "price": "32440.00",
           "originalPrice": "32440.00",
           "currency": "RUB",
           "brand": "Y7.Y7.Y.1.ЛАЙТ",
           "requestedBrands": "ЛАЙТ",
           "available": 6
         }
       ],
       "6-5": [
         {
           "clientId": 7604,
           "price": "32440.00",
           "originalPrice": "32440.00",
           "currency": "RUB",
           "brand": "Y7.Y7.Y.1.ЛАЙТ",
           "requestedBrands": "ЛАЙТ",
           "available": 6
         }
       ],
       "7-5": [
         {
           "clientId": 7604,
           "price": "32440.00",
           "originalPrice": "32440.00",
           "currency": "RUB",
           "brand": "Y7.Y7.Y.1.ЛАЙТ",
           "requestedBrands": "ЛАЙТ",
           "available": 6
         }
       ]
     }
   ]
 }
 */
