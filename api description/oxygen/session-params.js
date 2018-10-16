/**
 @api {get} /json/session-params
 Получить параметры сессии (если есть)
 @apiDescription
 В ответе будет находится объект параметров сессии если есть
 @apiName get session params
 @apiGroup Oxygen

 @apiSuccessExample {json} success:
 {
   "authoriseCustomer": false,
   "maxInactiveInterval": 2100,
   "alertInactiveTimeout": 100,
   "availableCurrencies": [
     {
       "code": "RUB",
       "name": "RUB"
     },
     {
       "code": "EUR",
       "name": "EUR"
     },
     {
       "code": "USD",
       "name": "USD"
     }
   ],
   "currency": "RUB",
   "commonCssPrefix": "online-[aviacompanyName]-5290",
   "lang": "ru",
   "todayDate": "16.10.2018"
 }
 */
