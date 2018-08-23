/**
 * @api {post} /json/dependence-cities
 * Добавить пассажиров к заказу
 * @apiDescription
 * Поскольку может быть несколько пассажиров
 * поля могут дублироваться как firstName[1], firstName[2] etc.
 * @apiName add passengers
 * @apiGroup Order
 *
 *
 *
     @apiParam {string} categoryCode[n] ???
     @apiParam {string} firstName[n] Имя пассажира
     @apiParam {string} lastName[n]  Фамилия пассажра
     @apiParam {string} gender[n] Пол
     @apiParam {string} dateOfBirth[n] Дата рождения
     @apiParam {string} nationality[n] Код страны, указанной в графе национальность
     @apiParam {string} documentType[n] Тип документа
     @apiParam {string} documentNumber[n] Номер документа
     @apiParam {string} documentDate[n]  Дата, по которую документ действительный
     @apiParam {string} phone[n]  Номер телефона
     @apiParam {string} email[n] email
 *
 * @apiSuccessExample {json} success:
      {"result":"ok"}
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
