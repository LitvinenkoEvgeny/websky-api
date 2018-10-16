/**
 @api {get} /json/passenger-add
 добавить пассажира к заказу

 @apiName add passenger
 @apiGroup Order


 @apiParam {string} categoryCode Трехбуквенный код пассажира [Взрослый, ребенок, младенец] [AAA, RGB, RMG]

 @apiParam {string} firstName[1] Имя пассажира
 @apiParam {string} lastName[1] Фамилия пассажира
 @apiParam {string} gender[1] Пол пассажира
 @apiParam {string} dateOfBirth[1] Дата рождения
 @apiParam {string} nationality[1] Гражданство
 @apiParam {string} documentType[1] Тип документа (паспорт, свидетельство о рожд. etc.)
 @apiParam {string} documentNumber[1] Номер документа
 @apiParam {string} phone[1] Номер телефона
 @apiParam {string} email[1] Email


 @apiSuccessExample {json} success:

    {"result": "ok"}


 */
