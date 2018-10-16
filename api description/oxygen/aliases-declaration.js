/**
 @api {get} /json/aliases-declaration.json
 Получить языковые переменные (Отсюда приходят алиасы для конкретной а\к)
 @apiDescription
 В ответе будет находится массив объектов в формате {code, value}
 @apiName aliases declaration
 @apiGroup Oxygen

 @apiSuccessExample {json} success:
 [
 {
   "code": "web.header",
   "value": "<!-- web.header -->"
 },
 {
   "code": "web.footer",
   "value": "<!-- web.footer -->"
 },
 {
   "code": "web.brandConfig",
   "value": "[]"
 },
 {
   "code": "web.privateMenu.orders",
   "value": "Orders"
 },
 {
   "code": "web.privateMenu.passengers",
   "value": "Passengers"
 },
 {
   "code": "web.privateMenu.bankDetails",
   "value": "Bank details"
 },
 {
   "code": "web.privateMenu.profile",
   "value": "Profile"
 },
 {
   "code": "web.privateMenu.password",
   "value": "Password"
 },
 {
   "code": "web.privateMenu.payments",
   "value": "Способ оплаты"
 },
 {
   "code": "web.privateCards.title",
   "value": "Мои карты"
 },
 {
   "code": "web.privateCards.delete",
   "value": "Удалить карту"
 }
 ]
 */
