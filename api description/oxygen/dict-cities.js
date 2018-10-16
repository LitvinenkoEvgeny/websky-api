/**
 @api {get} /json/dict-cities
 Получить список городов и их IATA коды
 @apiDescription
 В ответе будет находится массив объектов, с названием города (ru|en), страны в котором расположен (ru|en)
 @apiName get cities
 @apiGroup Oxygen

 @apiSuccessExample {json} success:
 [
 {
   "countryNameRu": "Республика Узбекистан",
   "countryEn": "UZ",
   "nameRu": "Самарканд",
   "countryRu": "УЗ",
   "codeRu": "СКД",
   "nameEn": "Samarkand",
   "codeEn": "SKD",
   "countryNameEn": "Uzbekistan Republic"
 },
 {
   "countryNameRu": "Российская Федерация",
   "countryEn": "RU",
   "nameRu": "Сеймчан",
   "countryRu": "РФ",
   "codeRu": "СМЧ",
   "nameEn": "Seimchan",
   "codeEn": "СМЧ",
   "countryNameEn": "Russian Federation"
 },
 {
   "countryNameRu": "Российская Федерация",
   "countryEn": "RU",
   "nameRu": "Оленек",
   "countryRu": "РФ",
   "codeRu": "ОЛН",
   "nameEn": "Olenyok",
   "codeEn": "ONK",
   "countryNameEn": "Russian Federation"
 },
 {
   "countryNameRu": "Российская Федерация",
   "countryEn": "RU",
   "nameRu": "Ямбург",
   "countryRu": "РФ",
   "codeRu": "ЯМБ",
   "nameEn": "Yamburg",
   "codeEn": "ЯМБ",
   "countryNameEn": "Russian Federation"
 },
 {
   "countryNameRu": "Российская Федерация",
   "countryEn": "RU",
   "nameRu": "Нюрба",
   "countryRu": "РФ",
   "codeRu": "НЮР",
   "nameEn": "Nyurba",
   "codeEn": "NYR",
   "countryNameEn": "Russian Federation"
 },
 {
   "countryNameRu": "Латвия",
   "countryEn": "LV",
   "nameRu": "Лиепая",
   "countryRu": "ЛВ",
   "codeRu": "ЛИЕ",
   "nameEn": "Liepaya",
   "codeEn": "LPX",
   "countryNameEn": "Latvia"
 },
 {
   "countryNameRu": "Литва",
   "countryEn": "LT",
   "nameRu": "Вильнюс",
   "countryRu": "ЛТ",
   "codeRu": "ВИЛ",
   "nameEn": "Vilnius",
   "codeEn": "VNO",
   "countryNameEn": "Lithuania"
 },
 {
   "countryNameRu": "Республика Узбекистан",
   "countryEn": "UZ",
   "nameRu": "Навои",
   "countryRu": "УЗ",
   "codeRu": "НВИ",
   "nameEn": "Navoi",
   "codeEn": "NVI",
   "countryNameEn": "Uzbekistan Republic"
 },
 {
   "countryNameRu": "Российская Федерация",
   "countryEn": "RU",
   "nameRu": "Советская Гавань",
   "countryRu": "РФ",
   "codeRu": "СОГ",
   "nameEn": "Sovetskaya Gavan",
   "codeEn": "GVN",
   "countryNameEn": "Russian Federation"
 },
 {
   "countryNameRu": "Российская Федерация",
   "countryEn": "RU",
   "nameRu": "Сунтар",
   "countryRu": "РФ",
   "codeRu": "СУН",
   "nameEn": "Suntar",
   "codeEn": "SUY",
   "countryNameEn": "Russian Federation"
 },
 {
   "countryNameRu": "Российская Федерация",
   "countryEn": "RU",
   "nameRu": "Светлогорск",
   "countryRu": "РФ",
   "codeRu": "СЕГ",
   "nameEn": "Svetlogorsk",
   "codeEn": "СЕГ",
   "countryNameEn": "Russian Federation"
 },
 {
   "countryNameRu": "Российская Федерация",
   "countryEn": "RU",
   "nameRu": "Курейка",
   "countryRu": "РФ",
   "codeRu": "КЕЙ",
   "nameEn": "Kureika",
   "codeEn": "КЕЙ",
   "countryNameEn": "Russian Federation"
 }
 ]

 */
