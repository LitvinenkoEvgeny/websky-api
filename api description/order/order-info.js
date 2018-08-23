/**
 @api {get} /json/extra-services-new
 запросить инфомацию о заказе
 @apiDescription
 В ответ приходит информация о заказе со всеми ценами(totalPrice), налогами (totalTax)
 и пассажирами к которым относится этот заказ
 @apiName order info
 @apiGroup Order




 @apiSuccessExample {json} success:


 {
   "pricesNotIssued": {
     "totalTax": "2726.00",
     "totalFare": "131200.00",
     "totalPrice": "133926.00",
     "taxes": [
       {
         "code": "RI",
         "name": "АЭРОПОРТОВЫЙ СБОР",
         "value": "2726.00"
       }
     ],
     "currency": "RUB",
     "segments": [
       {
         "aircompany": "Y7",
         "classCode": "Б",
         "id": "1",
         "prices": [
           {
             "totalTax": "1026.00",
             "fare": "65600.00",
             "clientId": 7604,
             "passengerCount": 2,
             "price": "66626.00",
             "fareCode": "DRT2",
             "taxes": [
               {
                 "code": "RI",
                 "name": "АЭРОПОРТОВЫЙ СБОР",
                 "value": 1026
               }
             ],
             "passengerCategory": "AAA",
             "brand": "Y7.Y7.C.3.ЛАЙТ"
           }
         ],
         "racenumber": "103"
       },
       {
         "aircompany": "Y7",
         "classCode": "Б",
         "id": "2",
         "prices": [
           {
             "totalTax": "1700.00",
             "fare": "65600.00",
             "clientId": 7604,
             "passengerCount": 2,
             "price": "67300.00",
             "fareCode": "DRT2",
             "taxes": [
               {
                 "code": "RI",
                 "name": "АЭРОПОРТОВЫЙ СБОР",
                 "value": 1700
               }
             ],
             "passengerCategory": "AAA",
             "brand": "Y7.Y7.C.3.ЛАЙТ"
           }
         ],
         "racenumber": "3333"
       }
     ]
   },
   "passengers": [
     {
       "documentCode": "NP",
       "documentDate": "27.11.2018",
       "lastName": "LITVINENKO",
       "hasSeats": true,
       "gender": "male",
       "documentType": "НАЦИОНАЛЬНЫЙ ПАСПОРТ",
       "documentNumber": "7328742789423",
       "index": 0,
       "dateOfBirth": "27.11.1993",
       "categoryCode": "AAA",
       "eMail": "test@gmail.com",
       "firstName": "EVGENY",
       "nationalityCode": "AI",
       "nationality": "Anguilla",
       "phone": "79084783274",
       "id": 1
     },
     {
       "documentCode": "NP",
       "documentDate": "27.11.2018",
       "lastName": "TEST",
       "hasSeats": true,
       "gender": "male",
       "documentType": "НАЦИОНАЛЬНЫЙ ПАСПОРТ",
       "documentNumber": "74329874239",
       "index": 1,
       "dateOfBirth": "27.11.1993",
       "categoryCode": "AAA",
       "eMail": "test@gmail.com",
       "firstName": "TEST",
       "nationalityCode": "AI",
       "nationality": "Anguilla",
       "phone": "843287492372",
       "id": 2
     }
   ],
   "conditionsPath": "https://private.sirena-travel.ru/docs/conditions-rus-eng-tch.pdf",
   "passengersWithSeatsCount": 2,
   "canEnterDoco": false,
   "refundAllowed": false,
   "retryRegisterAllowed": false,
   "addingExtraServicesAllowed": true,
   "cancellationAllowed": false,
   "flights": [
     {
       "date": "23.08.2018",
       "chainId": "chain-1",
       "flights": [
         {
           "date": "23.08.2018",
           "originportName": "Домодедово",
           "destinationcity": "NSK",
           "departuredate": "23.08.2018",
           "flightClass": "Б",
           "delaydays": "0",
           "flighttime": "4:05",
           "arrivaldate": "24.08.2018",
           "origincityName": "Москва",
           "originport": "DME",
           "company": {
             "code": "Y7",
             "code_en": "Y7",
             "name": "НОРДСТАР",
             "name_en": "НОРДСТАР"
           },
           "id": 1,
           "airplaneName": "БОИНГ 737-800",
           "brand": "Y7.Y7.C.3.ЛАЙТ",
           "destinationportName": "Норильск Алыкель",
           "destinationcityName": "Норильск",
           "departuredayshift": 0,
           "origincity": "MOW",
           "vehicleCodeEn": "738",
           "departuretime": "22:10",
           "destinationport": "NSK",
           "carrier": "Y7",
           "arrivaldayshift": 1,
           "airplane": "БОИНГ 737-800",
           "arrivaltime": "06:15",
           "subclass": "D",
           "racenumber": "103"
         }
       ]
     },
     {
       "date": "10.09.2018",
       "chainId": "chain-2",
       "flights": [
         {
           "date": "10.09.2018",
           "originportName": "Норильск Алыкель",
           "destinationcity": "MOW",
           "departuredate": "10.09.2018",
           "flightClass": "Б",
           "delaydays": "0",
           "flighttime": "5:30",
           "arrivaldate": "10.09.2018",
           "origincityName": "Норильск",
           "originport": "NSK",
           "company": {
             "code": "Y7",
             "code_en": "Y7",
             "name": "НОРДСТАР",
             "name_en": "НОРДСТАР"
           },
           "id": 2,
           "airplaneName": "БОИНГ 737-800",
           "brand": "Y7.Y7.C.3.ЛАЙТ",
           "destinationportName": "Домодедово",
           "destinationcityName": "Москва",
           "departuredayshift": 0,
           "origincity": "NSK",
           "vehicleCodeEn": "738",
           "departuretime": "10:00",
           "destinationport": "DME",
           "carrier": "Y7",
           "arrivaldayshift": 0,
           "airplane": "БОИНГ 737-800",
           "arrivaltime": "11:30",
           "subclass": "D",
           "racenumber": "3333"
         }
       ]
     }
   ],
   "prices": {
     "totalTax": "2726.00",
     "totalFare": "131200.00",
     "totalPrice": "133926.00",
     "taxes": [
       {
         "code": "RI",
         "name": "АЭРОПОРТОВЫЙ СБОР",
         "value": "2726.00"
       }
     ],
     "currency": "RUB",
     "segments": [
       {
         "aircompany": "Y7",
         "classCode": "Б",
         "id": "1",
         "prices": [
           {
             "totalTax": "1026.00",
             "fare": "65600.00",
             "clientId": 7604,
             "passengerCount": 2,
             "price": "66626.00",
             "fareCode": "DRT2",
             "taxes": [
               {
                 "code": "RI",
                 "name": "АЭРОПОРТОВЫЙ СБОР",
                 "value": 1026
               }
             ],
             "passengerCategory": "AAA",
             "brand": "Y7.Y7.C.3.ЛАЙТ"
           }
         ],
         "racenumber": "103"
       },
       {
         "aircompany": "Y7",
         "classCode": "Б",
         "id": "2",
         "prices": [
           {
             "totalTax": "1700.00",
             "fare": "65600.00",
             "clientId": 7604,
             "passengerCount": 2,
             "price": "67300.00",
             "fareCode": "DRT2",
             "taxes": [
               {
                 "code": "RI",
                 "name": "АЭРОПОРТОВЫЙ СБОР",
                 "value": 1700
               }
             ],
             "passengerCategory": "AAA",
             "brand": "Y7.Y7.C.3.ЛАЙТ"
           }
         ],
         "racenumber": "3333"
       }
     ]
   },
   "brand": "Y7.Y7.C.3.ЛАЙТ",
   "canEnterDoca": false,
   "customer": {
     "firstName": "EVGENY",
     "lastName": "LITVINENKO",
     "phone": "79043278432",
     "eMail": "e.litvinenko@mute-lab.com"
   },
   "exchangeAllowed": false,
   "paymentConfirmationAllowed": "false"
 }
 */
