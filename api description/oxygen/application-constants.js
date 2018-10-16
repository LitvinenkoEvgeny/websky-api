/**
 @api {get} /json/application-constants
 Получить константные переменные приложения
 @apiDescription
 В ответе будет находится объект
 @apiName get application constants
 @apiGroup Oxygen

 @apiSuccessExample {json} success:

 {
     "passengerFirstNameLatRegexp": "^[- a-zA-Z]{2,41}$",
     "passengerLastNameLatRegexp": "^[- a-zA-Z]{2,41}$",
     "passengerLastNameRegexp": "^[- а-яА-ЯЁёa-zA-Z]{2,41}$",
     "pnrOrTicketRegexp": "(^[0-9БВГДКЛМНПРСТФХЦЖШBVGDKLMNPRSTFXCZW]{6,6}$)|(^[0-9A-ZА-Я]{13,13}$)",
     "ticketRegexp": "^[0-9A-ZА-Я]{13,13}$"
 }

 */
