/**
 @api {get} /json/get-params
 Получить настройки движка для конкретной а\к
 @apiDescription
 В ответе будет находится массив объектов в формате {code, value}
 @apiName get params
 @apiGroup Oxygen

 @apiSuccessExample {json} success:
 [
 {
   "code": "bankDetails.addressRegexp",
   "value": "^[- .,а-яА-Яa-zA-Z0-9]{1,1024}$"
 },
 {
   "code": "bankDetails.organizationNameRegexp",
   "value": "^[- а-яА-Яa-zA-Z0-9]{1,1024}$"
 },
 {
   "code": "customer.defaultIsMessageSend",
   "value": "true"
 },
 {
   "code": "customer.firstNameRegexp",
   "value": "^[- а-яА-Яa-zA-Z]{3,30}$"
 },
 {
   "code": "customer.isDocument",
   "value": "false"
 },
 {
   "code": "customer.joinToFirstPassenger",
   "value": "false"
 }
 ]
 */
