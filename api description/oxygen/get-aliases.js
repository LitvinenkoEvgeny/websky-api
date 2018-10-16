/**
 @api {get} /json/get-aliases
 Получить языковые переменные (Общие для движка (тут нет алиасов относящихся к конкретным а\к))
 @apiDescription
 В ответе будет находится массив объектов в формате {code, value}
 @apiName get aliases
 @apiGroup Oxygen

 @apiParam {string} lang для этого языка вернутся алиасы


 @apiSuccessExample {json} success:
     [
         {
           "code": "is2009.organization.name.ТРЭВЛ",
           "value": "ООО Северсталь"
         },
         {
           "code": "is2009.organization.name.ТРЭВЛ",
           "value": "ООО Северсталь"
         },
         {
           "code": "is2009.unprocessed_orders_notify.mail.from",
           "value": "noreply@sirena-travel.ru"
         }
     ]
 */
