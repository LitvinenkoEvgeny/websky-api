/**
 @api {get} /json/pricing-variant
 Варианты и суммы оплаты
 @apiDescription
 В ответ приходит информация о всех доступных способах оплаты
 @apiName pricing variant
 @apiGroup Oxygen
 @apiSuccessExample {json} success:
 {
   "totalTax": "4755.00",
   "totalFare": "38000.00",
   "totalPrice": "42755.00",
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
   ],
   "fullList": [
     {
       "totalTax": "4755.00",
       "default": true,
       "totalFare": "38000.00",
       "paymentForm": "plastic_card",
       "totalPrice": "42755.00",
       "currency": "RUB"
     }
   ]
 }


 */
