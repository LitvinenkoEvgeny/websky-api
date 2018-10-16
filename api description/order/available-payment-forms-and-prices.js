/**
 @api {get} /json/available-payment-forms-and-prices
 запросить доступные формы оплаты

 @apiDescription
 В ответ вернутся доступные формы оплаты


 @apiName get saved passengers

 @apiGroup Order

 @apiSuccessExample {json} success:
 [
     {
       "conflicts_with_timelimit": "false",
       "code": "plastic_card",
       "conflicts_with_insurance": "false",
       "price": "5400.00",
       "name": "Пластиковая карта",
       "currency": "RUB",
       "paymentTypes": {
         "plastic_card": "Пластиковая карта"
       },
       "type": "online",
       "conflicts_with_aeroexpress": "false",
       "selected": "true",
       "timelimit": "16.10.2018 16:28"
     }
 ]
 */
