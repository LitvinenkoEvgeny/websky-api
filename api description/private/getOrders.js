/**
 @api {POST} /json/getOrders
 Получить заказы все закзы для пользователя (приватный endpoint)

 @apiDescription
 вернет все заказы данного пользователя

 @apiName get orders

 @apiGroup Private

 @apiParam {Date} from
 @apiParam {Date} to
 @apiParam {Sring} searchType


 @apiSuccessExample {json} success:

 {
   "result": "ok",
   "found": 40,
   "total": 97,
   "orders": [
     {
       "pnr": "1PGB5B",
       "lastName": "TEST",
       "seance": "5F",
       "book_time": "13.07.2018 13:03",
       "sum": "0.00",
       "npax": "1",
       "common_status": "cancelled",
       "currency": "EUR",
       "payment_form": "CC",
       "payment_type": "VI",
       "trip": [
         {
           "company": "МД",
           "flight": "234",
           "subclass": "Х",
           "departure": {
             "city": "VRN",
             "cityCode": "VRN",
             "airport": "VRN",
             "airportCode": "VRN",
             "dateTime": "14.07.2018"
           },
           "arrival": {
             "city": "КШН",
             "cityCode": "KIV",
             "dateTime": "14.07.2018"
           }
         }
       ]
     },
     {
       "pnr": "1PGB5V",
       "lastName": "TEST",
       "seance": "5F",
       "book_time": "13.07.2018 13:04",
       "sum": "0.00",
       "npax": "1",
       "common_status": "cancelled",
       "currency": "EUR",
       "payment_form": "НА",
       "trip": [
         {
           "company": "МД",
           "flight": "234",
           "subclass": "Х",
           "departure": {
             "city": "VRN",
             "cityCode": "VRN",
             "airport": "VRN",
             "airportCode": "VRN",
             "dateTime": "14.07.2018"
           },
           "arrival": {
             "city": "КШН",
             "cityCode": "KIV",
             "dateTime": "14.07.2018"
           }
         }
       ]
     }
   ]
 }


 */
