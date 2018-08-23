/**
 * @api {get} /json/pricevariant
 * Запросить доступные способы оплаты
 * @apiDescription
 * В ответ приходит информация о всех доступных способах оплаты
 * @apiName price variant
 * @apiGroup Price
 *
 *
 *
 *
 * @apiSuccessExample {json} success:
 *
     [
         {
           "conflicts_with_timelimit": "false",
           "code": "plastic_card",
           "conflicts_with_insurance": "false",
           "price": "133926.00",
           "name": "Пластиковая карта",
           "currency": "RUB",
           "paymentTypes": {
             "plastic_card": "Пластиковая карта"
           },
           "type": "online",
           "conflicts_with_aeroexpress": "false",
           "selected": "true",
           "timelimit": "23.08.2018 17:58"
         }
     ]
 *
 *
 *
 *
 */
