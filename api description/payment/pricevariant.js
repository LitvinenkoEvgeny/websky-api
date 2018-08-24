/**
 @api {get} /json/pricevariant
 Запросить доступные способы оплаты
 @apiDescription
 В ответ приходит информация о всех доступных способах оплаты
 @apiName price variant
 @apiGroup Price
 @apiSuccessExample {json} success:

 [
 {
   "conflicts_with_timelimit": "false",
   "code": "plastic_card",
   "conflicts_with_insurance": "false",
   "price": "42755.00",
   "name": "Пластиковая карта",
   "currency": "RUB",
   "paymentTypes": {
     "plastic_card": "Пластиковая карта"
   },
   "type": "online",
   "conflicts_with_aeroexpress": "false",
   "selected": "true",
   "timelimit": "24.08.2018 11:25"
 }
 ]

 */
