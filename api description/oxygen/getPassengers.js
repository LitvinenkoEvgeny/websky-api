/**
 @api {get} /json/getPassengers
 Получить сохраненного пассажира

 @apiDescription
 Получить сохраненного пассажира  из личного кабинета в ответ вернется созданный пассажир, созданные для него документы и т.д. это можно использовать для автозаполнения полей ввода (пассажир единожды в личном кабинете сохраняет информацию) потом может в один клик заполнить все поля

 @apiName get saved passengers

 @apiGroup Oxygen

 @apiParam {String} login Email пользователя

 @apiPrivate


 @apiSuccessExample {json} success:
 {
   "passengers": [
     {
       "lastName": "LITVINENKO",
       "firstName": "EVGENY",
       "firstNameEn": "EVGENY",
       "gender": "male",
       "nationality": "AU",
       "phone": "78947328974",
       "documents": [
         {
           "documentDate": "27.11.2018",
           "documentType": "NP",
           "documentNumber": "423423234"
         }
       ],
       "dateOfBirth": "27.11.1993",
       "id": 1627141,
       "lastNameEn": "LITVINENKO",
       "email": "test@gmail.com"
     }
   ],
   "passengerLastNameRegexp": "^[- а-яА-ЯЁёa-zA-Z]{2,41}$",
   "passengerFirstNameRegexp": "^[- а-яА-ЯЁёa-zA-Z]{2,41}$",
   "passengerFirstNameLatRegexp": "^[- a-zA-Z]{2,41}$",
   "passengerLastNameLatRegexp": "^[- a-zA-Z]{2,41}$"
 }
 */
