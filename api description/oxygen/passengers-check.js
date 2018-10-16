/**
 @api {get} /json/passengers-check
 Получить правила заполнения информации о пассажире
 @apiDescription
 Получить правила заполнения информации о пассажире
 их можно использовать для проверки правильности заполнения input'ов на странице /#/passengers
 @apiName get passenger info rules
 @apiGroup Oxygen

 @apiSuccessExample {json} success:
 {
   "emailRegex": "^[a-zA-Z0-9,!#\\$%&'\\*\\+/=\\?\\^_`\\{\\|}~-]+(\\.[a-zA-Z0-9,!#\\$%&'\\*\\+/=\\?\\^_`\\{\\|}~-]+)*@[a-zA-Z0-9-\\^_]+(\\.[a-zA-Z0-9-]+)*\\.([a-zA-Z]{2,})$",
   "passengerLastNameRegexp": "^[- а-яА-ЯЁёa-zA-Z]{2,41}$",
   "requirePhone": false,
   "passengers": [
     {
       "passengerType": "ADULT",
       "rangeBirthFrom": "18.10.1918",
       "documents": [
         {
           "code": "NP",
           "name": "National passport",
           "defaultSelectedForeign": "true",
           "expiry": "01.11.2018",
           "notAllow": "russian"
         },
         {
           "code": "PS",
           "name": "Паспорт гражданина РФ",
           "defaultSelectedRussian": "true",
           "notAllow": "foreign"
         },
         {
           "code": "PSP",
           "name": "Заграничный паспорт",
           "expiry": "01.11.2018",
           "notAllow": "foreign"
         },
         {
           "code": "SR",
           "name": "Свидетельство о рождении"
         }
       ],
       "count": 1,
       "rangeBirthTo": "17.10.2006",
       "type": "AAA"
     }
   ],
   "phoneRegex": "^[0-9]{11,15}$",
   "requireEmail": false,
   "passengerFirstNameRegexp": "^[- а-яА-ЯЁёa-zA-Z]{2,41}$",
   "allowEmail": true,
   "isLatinNamesOnly": false,
   "allowPhone": true,
   "countriesAvailableForDoco": [],
   "countriesAvailableForDoca": []
 }
 */
