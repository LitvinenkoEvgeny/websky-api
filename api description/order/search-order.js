/**
 @api {post} /json/search-order
 Найти заказ по pnr и фамилии пассажира
 @apiDescription
 в ответ либо {"result": "ok"} либо код и описание ошибки
 @apiName search order
 @apiGroup Order

 @apiParam {string} lastName Фамилия пассажира
 @apiParam {string} pnr Номер заказа


 @apiSuccessExample {json} success:

 {
   "result": "ok",
 }
 */