/**
 @api {post} /json/do-booking-and-register-order
 зарегистрировать заказ
 @apiDescription
 в ответ либо {"result": "ok"} либо код и описание ошибки
 @apiName register order
 @apiGroup Order

 @apiParam {string} payment-form Способ оплаты
 @apiParam {string} payment-type Тип оплаты
 @apiParam {boolean} removeInsuranceAeroExpress когда экспресс или страховка несовместимы с выбранной формой оплаты, этот флаг форсирует удаление
 @apiSuccessExample {json} success:

 {
   "result": "ok",
   "eraseAeroexpressBecauseOfCurrency": false,
   "eraseInsuranceBecauseOfCurrency": false,
   "pnr": "1PLTK0",
   "lastName": "LITVINENKO"
 }
 */
