/**
 * @api {get, post} /json/dependence-cities Получить IATA коды доступных городов
 * @apiName get Cities
 * @apiGroup Cities
 *
 * @apiParam {string} [cityCode] IATA код аэропорта вылета, если передан, вернется только {destination: [...]}
 * @apiParam {string} [returnPoints]  Возвращать только аэропорты назначения или вернуть объект origin
 * @apiParam {boolean} [isBooking]  ???
 *
 * @apiSuccessExample {json} Без параметра returnPoints и cityCode:
 *
 *
 *
 {
   "result": "ok",
   "destination": [
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Анадырь",
       "countryRu": "РФ",
       "codeRu": "АНЫ",
       "nameEn": "Anadyr",
       "codeEn": "DYR",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Анадырь",
           "codeRu": "АНЫ",
           "nameEn": "Anadyr",
           "codeEn": "DYR"
         }
         ...
       ]
     }
       ...
   ],
   "origin": [
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Анадырь",
       "countryRu": "РФ",
       "codeRu": "АНЫ",
       "nameEn": "Anadyr",
       "codeEn": "DYR",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Анадырь",
           "codeRu": "АНЫ",
           "nameEn": "Anadyr",
           "codeEn": "DYR"
         }
         ...
       ]
     }
     ...
   ]
 }
 *
 *
 *
 *
 *
 *
 * @apiSuccessExample {json} Без параметров returnPoints и cityCode:
 {
   "result": "ok",

   "destination": [
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Анадырь",
       "countryRu": "РФ",
       "codeRu": "АНЫ",
       "nameEn": "Anadyr",
       "codeEn": "DYR",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Анадырь",
           "codeRu": "АНЫ",
           "nameEn": "Anadyr",
           "codeEn": "DYR"
         }
       ]
     }
   ],
*
*
*
*
*
*
*
*/




