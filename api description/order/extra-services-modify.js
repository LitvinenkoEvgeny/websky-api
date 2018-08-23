/**
 @api {post} /json/extra-services-modify.js
 Добавить/удалить услугу
 @apiDescription
 в ответ либо {"result": "ok"} либо код и описание ошибки
 @apiName modify service
 @apiGroup Order
 @apiParam {string} code Код модифицируемой услуги
 @apiParam {string} [passenger_id] id пассажира
 @apiParam {string} [segment_id] id сегмента
 @apiParam {string} [subgroup] код подгруппы например cold ( холодные блюда ) - подгруппа питания meal,
 если нужно удалить все блюда в подгруппе холодных блюд, то code будет meal subgroup cold
 @apiParam {string} [amount] кол-во
 @apiParam {string} [service_type] ???
 @apiParam {string} [rfisc] ???
 @apiParam {string} ins ???
 @apiParam {string} tins  ???
 @apiSuccessExample {json} success:
 {"result" : "ok"}
 */
