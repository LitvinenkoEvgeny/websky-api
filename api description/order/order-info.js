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
     "totalTax": "4755.00",
     "totalFare": "38000.00",
     "totalPrice": "42755.00",
     "taxes": [
       {
         "code": "PS",
         "name": "PAPER SURCHARGE",
         "value": "555.00"
       },
       {
         "code": "YQ",
         "name": "AIRLINE CHARGE",
         "value": "4200.00"
       }
     ],
     "currency": "RUB",
     "segments": [
       {
         "aircompany": "UT",
         "classCode": "Э",
         "id": "1",
         "prices": [
           {
             "totalTax": "1585.00",
             "luggNormMsr": "kg",
             "fare": "28500.00",
             "clientId": 441,
             "passengerCount": 1,
             "price": "30085.00",
             "fareCode": "YLTRT",
             "taxes": [
               {
                 "code": "PS",
                 "name": "PAPER SURCHARGE",
                 "value": 185
               },
               {
                 "code": "YQ",
                 "name": "AIRLINE CHARGE",
                 "value": 1400
               }
             ],
             "passengerCategory": "AAA",
             "brand": "UT.UT.Y.20.ЛАЙТ",
             "luggNorm": 0
           }
         ],
         "racenumber": "453"
       },
       {
         "aircompany": "UT",
         "classCode": "Э",
         "id": "2",
         "prices": [
           {
             "totalTax": "1585.00",
             "luggNormMsr": "kg",
             "fare": "6800.00",
             "clientId": 441,
             "passengerCount": 1,
             "price": "8385.00",
             "fareCode": "VLTRT",
             "taxes": [
               {
                 "code": "PS",
                 "name": "PAPER SURCHARGE",
                 "value": 185
               },
               {
                 "code": "YQ",
                 "name": "AIRLINE CHARGE",
                 "value": 1400
               }
             ],
             "passengerCategory": "AAA",
             "brand": "UT.UT.Y.20.ЛАЙТ",
             "luggNorm": 0
           }
         ],
         "racenumber": "509"
       },
       {
         "aircompany": "UT",
         "classCode": "Э",
         "id": "3",
         "prices": [
           {
             "totalTax": "1585.00",
             "luggNormMsr": "kg",
             "fare": "2700.00",
             "clientId": 441,
             "passengerCount": 1,
             "price": "4285.00",
             "fareCode": "OLTRT",
             "taxes": [
               {
                 "code": "PS",
                 "name": "PAPER SURCHARGE",
                 "value": 185
               },
               {
                 "code": "YQ",
                 "name": "AIRLINE CHARGE",
                 "value": 1400
               }
             ],
             "passengerCategory": "AAA",
             "brand": "UT.UT.Y.20.ЛАЙТ",
             "luggNorm": 0
           }
         ],
         "racenumber": "274"
       }
     ]
   },
   "passengers": [
     {
       "documentCode": "PS",
       "lastName": "TEST",
       "hasSeats": true,
       "gender": "male",
       "documentType": "Паспорт гражданина РФ",
       "documentNumber": "1234567890",
       "index": 0,
       "dateOfBirth": "27.11.1993",
       "categoryCode": "AAA",
       "eMail": "test@gmail.com",
       "firstName": "TEST",
       "nationalityCode": "RU",
       "nationality": "Российская Федерация",
       "phone": "79423789432",
       "id": 1
     }
   ],
   "conditionsPath": "https://private.sirena-travel.ru/docs/conditions-rus-eng.pdf",
   "passengersWithSeatsCount": 1,
   "canEnterDoco": false,
   "refundAllowed": false,
   "retryRegisterAllowed": false,
   "addingExtraServicesAllowed": true,
   "cancellationAllowed": false,
   "flights": [
     {
       "date": "24.08.2018",
       "cityName": "Тюмень",
       "chainId": "chain-1-2",
       "city": "TJM",
       "flights": [
         {
           "date": "24.08.2018",
           "originportName": "Внуково",
           "destinationcity": "TJM",
           "baggage": [
             {
               "luggNormMsr": "kg",
               "passengerCode": "AAA",
               "luggNorm": 0
             }
           ],
           "departuredate": "24.08.2018",
           "flightClass": "Э",
           "delaydays": "0",
           "flighttime": "2:40",
           "arrivaldate": "25.08.2018",
           "origincityName": "Москва",
           "originport": "VKO",
           "company": {
             "code": "UT",
             "code_en": "UT",
             "name": "ЮТЭЙР",
             "name_en": "UTAIR AVIATION"
           },
           "id": 1,
           "airplaneName": "БОИНГ 737-500",
           "brand": "UT.UT.Y.20.ЛАЙТ",
           "destinationportName": "Рощино",
           "originTerminal": "A",
           "destinationcityName": "Тюмень",
           "departuredayshift": 0,
           "origincity": "MOW",
           "vehicleCodeEn": "735",
           "departuretime": "19:50",
           "destinationport": "TJM",
           "carrier": "UT",
           "arrivaldayshift": 1,
           "airplane": "БОИНГ 737-500",
           "arrivaltime": "00:30",
           "subclass": "Y",
           "racenumber": "453"
         },
         {
           "date": "25.08.2018",
           "originportName": "Рощино",
           "destinationcity": "MRV",
           "baggage": [
             {
               "luggNormMsr": "kg",
               "passengerCode": "AAA",
               "luggNorm": 0
             }
           ],
           "departuredate": "25.08.2018",
           "flightClass": "Э",
           "delaydays": "0",
           "flighttime": "3:30",
           "arrivaldate": "25.08.2018",
           "origincityName": "Тюмень",
           "originport": "TJM",
           "company": {
             "code": "UT",
             "code_en": "UT",
             "name": "ЮТЭЙР",
             "name_en": "UTAIR AVIATION"
           },
           "id": 2,
           "airplaneName": "БОИНГ 737-500",
           "brand": "UT.UT.Y.20.ЛАЙТ",
           "destinationcityName": "Минеральные Воды",
           "departuredayshift": 1,
           "origincity": "TJM",
           "vehicleCodeEn": "735",
           "departuretime": "09:40",
           "carrier": "UT",
           "arrivaldayshift": 1,
           "airplane": "БОИНГ 737-500",
           "arrivaltime": "11:10",
           "subclass": "V",
           "racenumber": "509"
         }
       ],
       "flightTime": "15:20",
       "connections": [
         {
           "nextAirportName": "Рощино",
           "previousAirport": "TJM",
           "previousAirportName": "Рощино",
           "cityName": "Тюмень",
           "city": "TJM",
           "time": "09:10",
           "nextAirport": "TJM"
         }
       ]
     },
     {
       "date": "10.09.2018",
       "chainId": "chain-3",
       "flights": [
         {
           "date": "10.09.2018",
           "destinationcity": "MOW",
           "baggage": [
             {
               "luggNormMsr": "kg",
               "passengerCode": "AAA",
               "luggNorm": 0
             }
           ],
           "departuredate": "10.09.2018",
           "flightClass": "Э",
           "delaydays": "0",
           "flighttime": "2:10",
           "arrivaldate": "10.09.2018",
           "origincityName": "Минеральные Воды",
           "destinationTerminal": "A",
           "company": {
             "code": "UT",
             "code_en": "UT",
             "name": "ЮТЭЙР",
             "name_en": "UTAIR AVIATION"
           },
           "id": 3,
           "airplaneName": "БОИНГ 737-800",
           "brand": "UT.UT.Y.20.ЛАЙТ",
           "destinationportName": "Внуково",
           "destinationcityName": "Москва",
           "departuredayshift": 0,
           "origincity": "MRV",
           "vehicleCodeEn": "738",
           "departuretime": "20:40",
           "destinationport": "VKO",
           "carrier": "UT",
           "arrivaldayshift": 0,
           "airplane": "БОИНГ 737-800",
           "arrivaltime": "22:50",
           "subclass": "O",
           "racenumber": "274"
         }
       ]
     }
   ],
   "prices": {
     "totalTax": "4755.00",
     "totalFare": "38000.00",
     "totalPrice": "42755.00",
     "taxes": [
       {
         "code": "PS",
         "name": "PAPER SURCHARGE",
         "value": "555.00"
       },
       {
         "code": "YQ",
         "name": "AIRLINE CHARGE",
         "value": "4200.00"
       }
     ],
     "currency": "RUB",
     "segments": [
       {
         "aircompany": "UT",
         "classCode": "Э",
         "id": "1",
         "prices": [
           {
             "totalTax": "1585.00",
             "luggNormMsr": "kg",
             "fare": "28500.00",
             "clientId": 441,
             "passengerCount": 1,
             "price": "30085.00",
             "fareCode": "YLTRT",
             "taxes": [
               {
                 "code": "PS",
                 "name": "PAPER SURCHARGE",
                 "value": 185
               },
               {
                 "code": "YQ",
                 "name": "AIRLINE CHARGE",
                 "value": 1400
               }
             ],
             "passengerCategory": "AAA",
             "brand": "UT.UT.Y.20.ЛАЙТ",
             "luggNorm": 0
           }
         ],
         "racenumber": "453"
       },
       {
         "aircompany": "UT",
         "classCode": "Э",
         "id": "2",
         "prices": [
           {
             "totalTax": "1585.00",
             "luggNormMsr": "kg",
             "fare": "6800.00",
             "clientId": 441,
             "passengerCount": 1,
             "price": "8385.00",
             "fareCode": "VLTRT",
             "taxes": [
               {
                 "code": "PS",
                 "name": "PAPER SURCHARGE",
                 "value": 185
               },
               {
                 "code": "YQ",
                 "name": "AIRLINE CHARGE",
                 "value": 1400
               }
             ],
             "passengerCategory": "AAA",
             "brand": "UT.UT.Y.20.ЛАЙТ",
             "luggNorm": 0
           }
         ],
         "racenumber": "509"
       },
       {
         "aircompany": "UT",
         "classCode": "Э",
         "id": "3",
         "prices": [
           {
             "totalTax": "1585.00",
             "luggNormMsr": "kg",
             "fare": "2700.00",
             "clientId": 441,
             "passengerCount": 1,
             "price": "4285.00",
             "fareCode": "OLTRT",
             "taxes": [
               {
                 "code": "PS",
                 "name": "PAPER SURCHARGE",
                 "value": 185
               },
               {
                 "code": "YQ",
                 "name": "AIRLINE CHARGE",
                 "value": 1400
               }
             ],
             "passengerCategory": "AAA",
             "brand": "UT.UT.Y.20.ЛАЙТ",
             "luggNorm": 0
           }
         ],
         "racenumber": "274"
       }
     ]
   },
   "brand": "UT.UT.Y.20.ЛАЙТ",
   "canEnterDoca": false,
   "customer": {
     "firstName": "TEST",
     "lastName": "TEST",
     "phone": "79423789432",
     "eMail": "test@gmail.com"
   },
   "exchangeAllowed": false,
   "paymentConfirmationAllowed": "false"
 }


 */
