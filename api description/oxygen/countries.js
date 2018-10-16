/**
 @api {get} /json/countries
 Получить список стран и их IATA коды
 @apiDescription
 В ответе будет находится массив объектов, с названием страны (ru|en), iso кодом страны
 @apiName countries
 @apiGroup Oxygen

 @apiSuccessExample {json} success:
 [
     {
       "nameRu": "Остров Реюньон",
       "code": "RE",
       "iso": "REU",
       "codeRu": "РЬ",
       "nameEn": "Reunion"
     },
     {
       "nameRu": "Российская Федерация",
       "code": "RU",
       "iso": "RUS",
       "codeRu": "РФ",
       "nameEn": "Russian Federation"
     },
     {
       "nameRu": "Украина",
       "code": "UA",
       "iso": "UKR",
       "codeRu": "УА",
       "nameEn": "Ukraine"
     }
 ]

 */
