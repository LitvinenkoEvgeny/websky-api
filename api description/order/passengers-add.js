/**
 @api {post} /json/passengers-add
 Добавить пассажиров к заказу

 @apiDescription Поскольку может быть несколько пассажиров
 поля могут дублироваться как firstName[1], firstName[2] etc.

 @apiName add passengers
 @apiGroup Order

 @apiParam {string} categoryCode[n] Трехбуквенный код пассажира [Взрослый, ребенок, младенец] [AAA, RGB, RMG]
 @apiParam {string} firstName[n] Имя пассажира
 @apiParam {string} lastName[n]  Фамилия пассажра
 @apiParam {string} gender[n] Пол
 @apiParam {date} dateOfBirth[n] Дата рождения
 @apiParam {string} nationality[n] Код страны, указанной в графе национальность
 @apiParam {string} documentType[n] Тип документа
 @apiParam {number} documentNumber[n] Номер документа
 @apiParam {date} documentDate[n]  Дата, по которую документ действительный
 @apiParam {string} phone[n]  Номер телефона
 @apiParam {string} email[n] email

 @apiSuccessExample {json} success:
 {"result":"ok"}


 */
