/**
 @api {post} /json/search-variants-mono-brand-cartesian

 @apiDescription
 Получить доступные сегменты на день. отличается от cartesian-search-period
 тем что второй ищет сегменты на неделю

 @apiName get available segments
 @apiGroup brands


 @apiParam {string} segmentsCount Кол-во пассажиров
 @apiParam {string}  date[0] Дата вылета
 @apiParam {string} origin-city-code[0] IATA код аэропорта вылета
 @apiParam {string} destination-city-code[0] NSK
 @apiParam {string} date[1] 10.09.2018
 @apiParam {string} origin-city-code[1] NSK
 @apiParam {string} destination-city-code[1] MOW
 @apiParam {string} count-aaa 2


 @apiSuccessExample {json} пример для {"segmentsCount": 2, "date[0]": "24.08.2018", "origin-city-code[0]": "MOW", "destination-city-code[1]": "MRV"}:

 {
   "result": "ok",
   "flights": [
     {
       "chainId": "1",
       "flights": [
         {
           "id": 1,
           "company": {
             "code_en": "UT",
             "name_en": "UTAIR AVIATION",
             "code": "UT",
             "name": "ЮТЭЙР"
           },
           "carrier": "UT",
           "racenumber": "574",
           "departuredate": "10.09.2018",
           "date": "10.09.2018",
           "departuretime": "06:00",
           "arrivaldate": "10.09.2018",
           "arrivaltime": "08:15",
           "airplane": "БОИНГ 737-800",
           "airplaneName": "БОИНГ 737-800",
           "vehicleCodeEn": "738",
           "destinationport": "VKO",
           "destinationportName": "Внуково",
           "destinationcity": "MOW",
           "destinationcityName": "Москва",
           "origincity": "MRV",
           "origincityName": "Минеральные Воды",
           "destinationTerminal": "A",
           "flighttime": "2:15",
           "delaydays": 0,
           "departuredayshift": 0,
           "arrivaldayshift": 0,
           "landings": []
         }
       ],
       "connections": [],
       "flightTime": "02:15"
     },
     {
       "chainId": "2",
       "flights": [
         {
           "id": 2,
           "company": {
             "code_en": "UT",
             "name_en": "UTAIR AVIATION",
             "code": "UT",
             "name": "ЮТЭЙР"
           },
           "carrier": "UT",
           "racenumber": "544",
           "departuredate": "10.09.2018",
           "date": "10.09.2018",
           "departuretime": "09:30",
           "arrivaldate": "10.09.2018",
           "arrivaltime": "11:55",
           "airplane": "БОИНГ 737-500",
           "airplaneName": "БОИНГ 737-500",
           "vehicleCodeEn": "735",
           "destinationport": "VKO",
           "destinationportName": "Внуково",
           "destinationcity": "MOW",
           "destinationcityName": "Москва",
           "origincity": "MRV",
           "origincityName": "Минеральные Воды",
           "destinationTerminal": "A",
           "flighttime": "2:25",
           "delaydays": 0,
           "departuredayshift": 0,
           "arrivaldayshift": 0,
           "landings": []
         }
       ],
       "connections": [],
       "flightTime": "02:25"
     },
     {
       "chainId": "3",
       "flights": [
         {
           "id": 3,
           "company": {
             "code_en": "UT",
             "name_en": "UTAIR AVIATION",
             "code": "UT",
             "name": "ЮТЭЙР"
           },
           "carrier": "UT",
           "racenumber": "374",
           "departuredate": "10.09.2018",
           "date": "10.09.2018",
           "departuretime": "14:00",
           "arrivaldate": "10.09.2018",
           "arrivaltime": "16:15",
           "airplane": "БОИНГ 737-800",
           "airplaneName": "БОИНГ 737-800",
           "vehicleCodeEn": "738",
           "destinationport": "VKO",
           "destinationportName": "Внуково",
           "destinationcity": "MOW",
           "destinationcityName": "Москва",
           "origincity": "MRV",
           "origincityName": "Минеральные Воды",
           "destinationTerminal": "A",
           "flighttime": "2:15",
           "delaydays": 0,
           "departuredayshift": 0,
           "arrivaldayshift": 0,
           "landings": []
         }
       ],
       "connections": [],
       "flightTime": "02:15"
     },
     {
       "chainId": "4",
       "flights": [
         {
           "id": 4,
           "company": {
             "code_en": "UT",
             "name_en": "UTAIR AVIATION",
             "code": "UT",
             "name": "ЮТЭЙР"
           },
           "carrier": "UT",
           "racenumber": "274",
           "departuredate": "10.09.2018",
           "date": "10.09.2018",
           "departuretime": "20:40",
           "arrivaldate": "10.09.2018",
           "arrivaltime": "22:50",
           "airplane": "БОИНГ 737-800",
           "airplaneName": "БОИНГ 737-800",
           "vehicleCodeEn": "738",
           "destinationport": "VKO",
           "destinationportName": "Внуково",
           "destinationcity": "MOW",
           "destinationcityName": "Москва",
           "origincity": "MRV",
           "origincityName": "Минеральные Воды",
           "destinationTerminal": "A",
           "flighttime": "2:10",
           "delaydays": 0,
           "departuredayshift": 0,
           "arrivaldayshift": 0,
           "landings": []
         }
       ],
       "connections": [],
       "flightTime": "02:10"
     },
     {
       "chainId": "5",
       "flights": [
         {
           "id": 5,
           "company": {
             "code_en": "UT",
             "name_en": "UTAIR AVIATION",
             "code": "UT",
             "name": "ЮТЭЙР"
           },
           "carrier": "UT",
           "racenumber": "273",
           "departuredate": "24.08.2018",
           "date": "24.08.2018",
           "departuretime": "17:30",
           "arrivaldate": "24.08.2018",
           "arrivaltime": "19:40",
           "airplane": "БОИНГ 737-800",
           "airplaneName": "БОИНГ 737-800",
           "vehicleCodeEn": "738",
           "destinationcity": "MRV",
           "destinationcityName": "Минеральные Воды",
           "originport": "VKO",
           "originportName": "Внуково",
           "origincity": "MOW",
           "origincityName": "Москва",
           "originTerminal": "A",
           "flighttime": "2:10",
           "delaydays": 0,
           "departuredayshift": 0,
           "arrivaldayshift": 0,
           "landings": []
         }
       ],
       "connections": [],
       "flightTime": "02:10"
     },
     {
       "chainId": "6-7",
       "flights": [
         {
           "id": 6,
           "company": {
             "code_en": "UT",
             "name_en": "UTAIR AVIATION",
             "code": "UT",
             "name": "ЮТЭЙР"
           },
           "carrier": "UT",
           "racenumber": "322",
           "departuredate": "10.09.2018",
           "date": "10.09.2018",
           "departuretime": "12:55",
           "arrivaldate": "10.09.2018",
           "arrivaltime": "14:05",
           "airplane": "АТР-72",
           "airplaneName": "АТР-72",
           "vehicleCodeEn": "AT7",
           "destinationcity": "AER",
           "destinationcityName": "Сочи",
           "origincity": "MRV",
           "origincityName": "Минеральные Воды",
           "flighttime": "1:10",
           "delaydays": 0,
           "departuredayshift": 0,
           "arrivaldayshift": 0,
           "landings": []
         },
         {
           "id": 7,
           "company": {
             "code_en": "UT",
             "name_en": "UTAIR AVIATION",
             "code": "UT",
             "name": "ЮТЭЙР"
           },
           "carrier": "UT",
           "racenumber": "564",
           "departuredate": "11.09.2018",
           "date": "11.09.2018",
           "departuretime": "05:10",
           "arrivaldate": "11.09.2018",
           "arrivaltime": "07:30",
           "airplane": "БОИНГ 737-500",
           "airplaneName": "БОИНГ 737-500",
           "vehicleCodeEn": "735",
           "destinationport": "VKO",
           "destinationportName": "Внуково",
           "destinationcity": "MOW",
           "destinationcityName": "Москва",
           "origincity": "AER",
           "origincityName": "Сочи",
           "destinationTerminal": "A",
           "flighttime": "2:20",
           "delaydays": 0,
           "departuredayshift": 1,
           "arrivaldayshift": 1,
           "landings": []
         }
       ],
       "connections": [
         {
           "city": "AER",
           "cityName": "Сочи",
           "time": "15:05"
         }
       ],
       "flightTime": "18:35"
     },
     {
       "chainId": "6-8",
       "flights": [
         {
           "id": 6,
           "company": {
             "code_en": "UT",
             "name_en": "UTAIR AVIATION",
             "code": "UT",
             "name": "ЮТЭЙР"
           },
           "carrier": "UT",
           "racenumber": "322",
           "departuredate": "10.09.2018",
           "date": "10.09.2018",
           "departuretime": "12:55",
           "arrivaldate": "10.09.2018",
           "arrivaltime": "14:05",
           "airplane": "АТР-72",
           "airplaneName": "АТР-72",
           "vehicleCodeEn": "AT7",
           "destinationcity": "AER",
           "destinationcityName": "Сочи",
           "origincity": "MRV",
           "origincityName": "Минеральные Воды",
           "flighttime": "1:10",
           "delaydays": 0,
           "departuredayshift": 0,
           "arrivaldayshift": 0,
           "landings": []
         },
         {
           "id": 8,
           "company": {
             "code_en": "UT",
             "name_en": "UTAIR AVIATION",
             "code": "UT",
             "name": "ЮТЭЙР"
           },
           "carrier": "UT",
           "racenumber": "580",
           "departuredate": "11.09.2018",
           "date": "11.09.2018",
           "departuretime": "06:00",
           "arrivaldate": "11.09.2018",
           "arrivaltime": "08:20",
           "airplane": "БОИНГ 737-800",
           "airplaneName": "БОИНГ 737-800",
           "vehicleCodeEn": "738",
           "destinationport": "VKO",
           "destinationportName": "Внуково",
           "destinationcity": "MOW",
           "destinationcityName": "Москва",
           "origincity": "AER",
           "origincityName": "Сочи",
           "destinationTerminal": "A",
           "flighttime": "2:20",
           "delaydays": 0,
           "departuredayshift": 1,
           "arrivaldayshift": 1,
           "landings": []
         }
       ],
       "connections": [
         {
           "city": "AER",
           "cityName": "Сочи",
           "time": "15:55"
         }
       ],
       "flightTime": "19:25"
     },
     {
       "chainId": "6-9",
       "flights": [
         {
           "id": 6,
           "company": {
             "code_en": "UT",
             "name_en": "UTAIR AVIATION",
             "code": "UT",
             "name": "ЮТЭЙР"
           },
           "carrier": "UT",
           "racenumber": "322",
           "departuredate": "10.09.2018",
           "date": "10.09.2018",
           "departuretime": "12:55",
           "arrivaldate": "10.09.2018",
           "arrivaltime": "14:05",
           "airplane": "АТР-72",
           "airplaneName": "АТР-72",
           "vehicleCodeEn": "AT7",
           "destinationcity": "AER",
           "destinationcityName": "Сочи",
           "origincity": "MRV",
           "origincityName": "Минеральные Воды",
           "flighttime": "1:10",
           "delaydays": 0,
           "departuredayshift": 0,
           "arrivaldayshift": 0,
           "landings": []
         },
         {
           "id": 9,
           "company": {
             "code_en": "UT",
             "name_en": "UTAIR AVIATION",
             "code": "UT",
             "name": "ЮТЭЙР"
           },
           "carrier": "UT",
           "racenumber": "348",
           "departuredate": "10.09.2018",
           "date": "10.09.2018",
           "departuretime": "22:40",
           "arrivaldate": "11.09.2018",
           "arrivaltime": "01:00",
           "airplane": "БОИНГ 737-500",
           "airplaneName": "БОИНГ 737-500",
           "vehicleCodeEn": "735",
           "destinationport": "VKO",
           "destinationportName": "Внуково",
           "destinationcity": "MOW",
           "destinationcityName": "Москва",
           "origincity": "AER",
           "origincityName": "Сочи",
           "destinationTerminal": "A",
           "flighttime": "2:20",
           "delaydays": 0,
           "departuredayshift": 0,
           "arrivaldayshift": 1,
           "landings": []
         }
       ],
       "connections": [
         {
           "city": "AER",
           "cityName": "Сочи",
           "time": "08:35"
         }
       ],
       "flightTime": "12:05"
     },
     {
       "chainId": "6-10",
       "flights": [
         {
           "id": 6,
           "company": {
             "code_en": "UT",
             "name_en": "UTAIR AVIATION",
             "code": "UT",
             "name": "ЮТЭЙР"
           },
           "carrier": "UT",
           "racenumber": "322",
           "departuredate": "10.09.2018",
           "date": "10.09.2018",
           "departuretime": "12:55",
           "arrivaldate": "10.09.2018",
           "arrivaltime": "14:05",
           "airplane": "АТР-72",
           "airplaneName": "АТР-72",
           "vehicleCodeEn": "AT7",
           "destinationcity": "AER",
           "destinationcityName": "Сочи",
           "origincity": "MRV",
           "origincityName": "Минеральные Воды",
           "flighttime": "1:10",
           "delaydays": 0,
           "departuredayshift": 0,
           "arrivaldayshift": 0,
           "landings": []
         },
         {
           "id": 10,
           "company": {
             "code_en": "UT",
             "name_en": "UTAIR AVIATION",
             "code": "UT",
             "name": "ЮТЭЙР"
           },
           "carrier": "UT",
           "racenumber": "268",
           "departuredate": "10.09.2018",
           "date": "10.09.2018",
           "departuretime": "20:55",
           "arrivaldate": "10.09.2018",
           "arrivaltime": "23:10",
           "airplane": "БОИНГ 737-800",
           "airplaneName": "БОИНГ 737-800",
           "vehicleCodeEn": "738",
           "destinationport": "VKO",
           "destinationportName": "Внуково",
           "destinationcity": "MOW",
           "destinationcityName": "Москва",
           "origincity": "AER",
           "origincityName": "Сочи",
           "destinationTerminal": "A",
           "flighttime": "2:15",
           "delaydays": 0,
           "departuredayshift": 0,
           "arrivaldayshift": 0,
           "landings": []
         }
       ],
       "connections": [
         {
           "city": "AER",
           "cityName": "Сочи",
           "time": "06:50"
         }
       ],
       "flightTime": "10:15"
     },
     {
       "chainId": "11-12",
       "flights": [
         {
           "id": 11,
           "company": {
             "code_en": "UT",
             "name_en": "UTAIR AVIATION",
             "code": "UT",
             "name": "ЮТЭЙР"
           },
           "carrier": "UT",
           "racenumber": "453",
           "departuredate": "24.08.2018",
           "date": "24.08.2018",
           "departuretime": "19:50",
           "arrivaldate": "25.08.2018",
           "arrivaltime": "00:30",
           "airplane": "БОИНГ 737-500",
           "airplaneName": "БОИНГ 737-500",
           "vehicleCodeEn": "735",
           "destinationport": "TJM",
           "destinationportName": "Рощино",
           "destinationcity": "TJM",
           "destinationcityName": "Тюмень",
           "originport": "VKO",
           "originportName": "Внуково",
           "origincity": "MOW",
           "origincityName": "Москва",
           "originTerminal": "A",
           "flighttime": "2:40",
           "delaydays": 0,
           "departuredayshift": 0,
           "arrivaldayshift": 1,
           "landings": []
         },
         {
           "id": 12,
           "company": {
             "code_en": "UT",
             "name_en": "UTAIR AVIATION",
             "code": "UT",
             "name": "ЮТЭЙР"
           },
           "carrier": "UT",
           "racenumber": "509",
           "departuredate": "25.08.2018",
           "date": "25.08.2018",
           "departuretime": "09:40",
           "arrivaldate": "25.08.2018",
           "arrivaltime": "11:10",
           "airplane": "БОИНГ 737-500",
           "airplaneName": "БОИНГ 737-500",
           "vehicleCodeEn": "735",
           "destinationcity": "MRV",
           "destinationcityName": "Минеральные Воды",
           "originport": "TJM",
           "originportName": "Рощино",
           "origincity": "TJM",
           "origincityName": "Тюмень",
           "flighttime": "3:30",
           "delaydays": 0,
           "departuredayshift": 1,
           "arrivaldayshift": 1,
           "landings": []
         }
       ],
       "connections": [
         {
           "city": "TJM",
           "cityName": "Тюмень",
           "previousAirport": "TJM",
           "previousAirportName": "Рощино",
           "nextAirport": "TJM",
           "nextAirportName": "Рощино",
           "time": "09:10"
         }
       ],
       "flightTime": "15:20"
     }
   ],
   "prices": [
     {
       "5": [
         {
           "clientId": 441,
           "price": "8085.00",
           "originalPrice": "8085.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.20.ЛАЙТ",
           "requestedBrands": "ЛАЙТ",
           "available": 2
         },
         {
           "clientId": 441,
           "price": "9385.00",
           "originalPrice": "9385.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.40.СТАНДАРТ",
           "requestedBrands": "СТАНДАРТ",
           "available": 2
         },
         {
           "clientId": 441,
           "price": "11385.00",
           "originalPrice": "11385.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.50.ГИБКИЙ",
           "requestedBrands": "ГИБКИЙ",
           "available": 2
         },
         {
           "clientId": 441,
           "price": "46885.00",
           "originalPrice": "46885.00",
           "currency": "RUB",
           "brand": "UT.UT.C.70.БИЗНЕС",
           "requestedBrands": "БИЗНЕС",
           "available": 3
         }
       ],
       "11-12": [
         {
           "clientId": 441,
           "price": "38470.00",
           "originalPrice": "38470.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.20.ЛАЙТ",
           "requestedBrands": "ЛАЙТ",
           "available": 1
         },
         {
           "clientId": 441,
           "price": "41470.00",
           "originalPrice": "41470.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.40.СТАНДАРТ",
           "requestedBrands": "СТАНДАРТ",
           "available": 1
         },
         {
           "clientId": 441,
           "price": "45470.00",
           "originalPrice": "45470.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.50.ГИБКИЙ",
           "requestedBrands": "ГИБКИЙ",
           "available": 1
         },
         {
           "clientId": 441,
           "price": "72470.00",
           "originalPrice": "72470.00",
           "currency": "RUB",
           "brand": "UT.UT.C.70.БИЗНЕС",
           "requestedBrands": "БИЗНЕС",
           "available": 1
         }
       ]
     },
     {
       "6-7": [
         {
           "clientId": 441,
           "price": "11475.00",
           "originalPrice": "11475.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.20.ЛАЙТ",
           "requestedBrands": "ЛАЙТ",
           "available": 1
         },
         {
           "clientId": 441,
           "price": "13975.00",
           "originalPrice": "13975.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.40.СТАНДАРТ",
           "requestedBrands": "СТАНДАРТ",
           "available": 1
         },
         {
           "clientId": 441,
           "price": "17975.00",
           "originalPrice": "17975.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.50.ГИБКИЙ",
           "requestedBrands": "ГИБКИЙ",
           "available": 1
         }
       ],
       "1": [
         {
           "clientId": 441,
           "price": "2885.00",
           "originalPrice": "2885.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.10.СУПЕРЛАЙТ",
           "requestedBrands": "СУПЕРЛАЙТ",
           "available": 9
         },
         {
           "clientId": 441,
           "price": "3385.00",
           "originalPrice": "3385.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.30.СТАНДАРТ1",
           "requestedBrands": "СТАНДАРТ1",
           "available": 9
         },
         {
           "clientId": 441,
           "price": "3585.00",
           "originalPrice": "3585.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.20.ЛАЙТ",
           "requestedBrands": "ЛАЙТ",
           "available": 9
         },
         {
           "clientId": 441,
           "price": "4085.00",
           "originalPrice": "4085.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.40.СТАНДАРТ",
           "requestedBrands": "СТАНДАРТ",
           "available": 9
         },
         {
           "clientId": 441,
           "price": "6085.00",
           "originalPrice": "6085.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.50.ГИБКИЙ",
           "requestedBrands": "ГИБКИЙ",
           "available": 9
         },
         {
           "clientId": 441,
           "price": "20885.00",
           "originalPrice": "20885.00",
           "currency": "RUB",
           "brand": "UT.UT.C.70.БИЗНЕС",
           "requestedBrands": "БИЗНЕС",
           "available": 2
         }
       ],
       "6-8": [
         {
           "clientId": 441,
           "price": "11475.00",
           "originalPrice": "11475.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.20.ЛАЙТ",
           "requestedBrands": "ЛАЙТ",
           "available": 1
         },
         {
           "clientId": 441,
           "price": "13975.00",
           "originalPrice": "13975.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.40.СТАНДАРТ",
           "requestedBrands": "СТАНДАРТ",
           "available": 1
         },
         {
           "clientId": 441,
           "price": "17975.00",
           "originalPrice": "17975.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.50.ГИБКИЙ",
           "requestedBrands": "ГИБКИЙ",
           "available": 1
         }
       ],
       "2": [
         {
           "clientId": 441,
           "price": "3385.00",
           "originalPrice": "3385.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.10.СУПЕРЛАЙТ",
           "requestedBrands": "СУПЕРЛАЙТ",
           "available": 1
         },
         {
           "clientId": 441,
           "price": "3885.00",
           "originalPrice": "3885.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.30.СТАНДАРТ1",
           "requestedBrands": "СТАНДАРТ1",
           "available": 1
         },
         {
           "clientId": 441,
           "price": "4085.00",
           "originalPrice": "4085.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.20.ЛАЙТ",
           "requestedBrands": "ЛАЙТ",
           "available": 1
         },
         {
           "clientId": 441,
           "price": "4585.00",
           "originalPrice": "4585.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.40.СТАНДАРТ",
           "requestedBrands": "СТАНДАРТ",
           "available": 1
         },
         {
           "clientId": 441,
           "price": "6585.00",
           "originalPrice": "6585.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.50.ГИБКИЙ",
           "requestedBrands": "ГИБКИЙ",
           "available": 1
         },
         {
           "clientId": 441,
           "price": "20885.00",
           "originalPrice": "20885.00",
           "currency": "RUB",
           "brand": "UT.UT.C.70.БИЗНЕС",
           "requestedBrands": "БИЗНЕС",
           "available": 1
         }
       ],
       "6-9": [
         {
           "clientId": 441,
           "price": "14475.00",
           "originalPrice": "14475.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.20.ЛАЙТ",
           "requestedBrands": "ЛАЙТ",
           "available": 1
         },
         {
           "clientId": 441,
           "price": "16975.00",
           "originalPrice": "16975.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.40.СТАНДАРТ",
           "requestedBrands": "СТАНДАРТ",
           "available": 1
         },
         {
           "clientId": 441,
           "price": "20975.00",
           "originalPrice": "20975.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.50.ГИБКИЙ",
           "requestedBrands": "ГИБКИЙ",
           "available": 1
         }
       ],
       "3": [
         {
           "clientId": 441,
           "price": "3885.00",
           "originalPrice": "3885.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.10.СУПЕРЛАЙТ",
           "requestedBrands": "СУПЕРЛАЙТ",
           "available": 3
         },
         {
           "clientId": 441,
           "price": "4785.00",
           "originalPrice": "4785.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.20.ЛАЙТ",
           "requestedBrands": "ЛАЙТ",
           "available": 3
         },
         {
           "clientId": 441,
           "price": "4885.00",
           "originalPrice": "4885.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.30.СТАНДАРТ1",
           "requestedBrands": "СТАНДАРТ1",
           "available": 3
         },
         {
           "clientId": 441,
           "price": "5585.00",
           "originalPrice": "5585.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.40.СТАНДАРТ",
           "requestedBrands": "СТАНДАРТ",
           "available": 3
         },
         {
           "clientId": 441,
           "price": "7585.00",
           "originalPrice": "7585.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.50.ГИБКИЙ",
           "requestedBrands": "ГИБКИЙ",
           "available": 3
         },
         {
           "clientId": 441,
           "price": "20885.00",
           "originalPrice": "20885.00",
           "currency": "RUB",
           "brand": "UT.UT.C.70.БИЗНЕС",
           "requestedBrands": "БИЗНЕС",
           "available": 2
         }
       ],
       "4": [
         {
           "clientId": 441,
           "price": "3885.00",
           "originalPrice": "3885.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.10.СУПЕРЛАЙТ",
           "requestedBrands": "СУПЕРЛАЙТ",
           "available": 2
         },
         {
           "clientId": 441,
           "price": "4585.00",
           "originalPrice": "4585.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.20.ЛАЙТ",
           "requestedBrands": "ЛАЙТ",
           "available": 2
         },
         {
           "clientId": 441,
           "price": "4885.00",
           "originalPrice": "4885.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.30.СТАНДАРТ1",
           "requestedBrands": "СТАНДАРТ1",
           "available": 2
         },
         {
           "clientId": 441,
           "price": "5585.00",
           "originalPrice": "5585.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.40.СТАНДАРТ",
           "requestedBrands": "СТАНДАРТ",
           "available": 2
         },
         {
           "clientId": 441,
           "price": "7585.00",
           "originalPrice": "7585.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.50.ГИБКИЙ",
           "requestedBrands": "ГИБКИЙ",
           "available": 2
         },
         {
           "clientId": 441,
           "price": "20885.00",
           "originalPrice": "20885.00",
           "currency": "RUB",
           "brand": "UT.UT.C.70.БИЗНЕС",
           "requestedBrands": "БИЗНЕС",
           "available": 2
         }
       ],
       "6-10": [
         {
           "clientId": 441,
           "price": "14675.00",
           "originalPrice": "14675.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.20.ЛАЙТ",
           "requestedBrands": "ЛАЙТ",
           "available": 1
         },
         {
           "clientId": 441,
           "price": "16975.00",
           "originalPrice": "16975.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.40.СТАНДАРТ",
           "requestedBrands": "СТАНДАРТ",
           "available": 1
         },
         {
           "clientId": 441,
           "price": "20975.00",
           "originalPrice": "20975.00",
           "currency": "RUB",
           "brand": "UT.UT.Y.50.ГИБКИЙ",
           "requestedBrands": "ГИБКИЙ",
           "available": 1
         }
       ]
     }
   ]
 }







 */
