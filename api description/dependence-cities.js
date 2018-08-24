/**
 @api {get, post} /json/dependence-cities Получить IATA коды доступных городов
 @apiName get Cities
 @apiGroup Cities
 @apiParam {string} [cityCode] IATA код аэропорта вылета, если передан, вернется только {destination: [...]}
 @apiParam {string} [returnPoints]  Возвращать только аэропорты назначения или вернуть объект origin
 @apiSuccessExample {json} Без параметра returnPoints и cityCode:

 {
   "origin": [
     {
       "countryNameRu": "Великобритания",
       "countryEn": "GB",
       "nameRu": "Абердин",
       "countryRu": "ГБ",
       "codeRu": "ABZ",
       "nameEn": "Aberdeen",
       "codeEn": "ABZ",
       "countryNameEn": "United Kingdom"
     },
     {
       "countryNameRu": "Объединенные Арабские Эми",
       "countryEn": "AE",
       "nameRu": "Абу Даби",
       "countryRu": "АЕ",
       "codeRu": "АУХ",
       "nameEn": "Abu Dhabi",
       "codeEn": "AUH",
       "countryNameEn": "United Arab Emirates"
     },
     {
       "countryNameRu": "Республика Казахстан",
       "countryEn": "KZ",
       "nameRu": "Актау",
       "countryRu": "КЗ",
       "codeRu": "ААУ",
       "nameEn": "Aktau",
       "codeEn": "SCO",
       "countryNameEn": "Kazakhstan Republic"
     },
     {
       "countryNameRu": "Республика Казахстан",
       "countryEn": "KZ",
       "nameRu": "Алматы",
       "countryRu": "КЗ",
       "codeRu": "АЛА",
       "nameEn": "Almaty",
       "codeEn": "ALA",
       "countryNameEn": "Kazakhstan Republic"
     },
     {
       "countryNameRu": "Нидерланды",
       "countryEn": "NL",
       "nameRu": "Амстердам",
       "countryRu": "НЛ",
       "codeRu": "АМС",
       "nameEn": "Amsterdam",
       "codeEn": "AMS",
       "countryNameEn": "Netherlands"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Анадырь",
       "countryRu": "РФ",
       "direct": true,
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
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Анапа",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "АНА",
       "nameEn": "Anapa",
       "codeEn": "AAQ",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Анапа Витязево",
           "codeRu": "АНА",
           "nameEn": "Anapa",
           "codeEn": "AAQ"
         }
       ]
     },
     {
       "countryNameRu": "Турция",
       "countryEn": "TR",
       "nameRu": "Анталья",
       "countryRu": "ТР",
       "direct": true,
       "codeRu": "АЯТ",
       "nameEn": "Antalya",
       "codeEn": "AYT",
       "countryNameEn": "Turkey"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Архангельск",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "АРХ",
       "nameEn": "Arkhangelsk",
       "codeEn": "ARH",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Талаги",
           "codeRu": "АХГ",
           "nameEn": "Talagi",
           "codeEn": "ARH"
         }
       ]
     },
     {
       "countryNameRu": "Республика Казахстан",
       "countryEn": "KZ",
       "nameRu": "Астана",
       "countryRu": "КЗ",
       "codeRu": "АКЛ",
       "nameEn": "Astana",
       "codeEn": "TSE",
       "countryNameEn": "Kazakhstan Republic"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Астрахань",
       "countryRu": "РФ",
       "codeRu": "АСР",
       "nameEn": "Astrakhan",
       "codeEn": "ASF",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Греция",
       "countryEn": "GR",
       "nameRu": "Афины",
       "countryRu": "ГЦ",
       "codeRu": "АТХ",
       "nameEn": "Athens",
       "codeEn": "ATH",
       "countryNameEn": "Greece"
     },
     {
       "countryNameRu": "Туркменистан",
       "countryEn": "TM",
       "nameRu": "Ашгабад",
       "countryRu": "ТМ",
       "codeRu": "АШХ",
       "nameEn": "Ashgabat",
       "codeEn": "ASB",
       "countryNameEn": "Turkmenistan"
     },
     {
       "countryNameRu": "Республика Казахстан",
       "countryEn": "KZ",
       "nameRu": "Байконур",
       "countryRu": "КЗ",
       "codeRu": "ЛНЙ",
       "nameEn": "Baykonur",
       "codeEn": "BXY",
       "countryNameEn": "Kazakhstan Republic"
     },
     {
       "countryNameRu": "Азербайджанская Республик",
       "countryEn": "AZ",
       "nameRu": "Баку",
       "countryRu": "АЗ",
       "direct": true,
       "codeRu": "БАК",
       "nameEn": "Baku",
       "codeEn": "BAK",
       "countryNameEn": "Azerbaijan",
       "airports": [
         {
           "nameRu": "Ап Гейдар Алиев",
           "codeRu": "БАК",
           "nameEn": "Heydar Aliyev",
           "codeEn": "GYD"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Барнаул",
       "countryRu": "РФ",
       "codeRu": "БАН",
       "nameEn": "Barnaul",
       "codeEn": "BAX",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Испания и Канарские Остро",
       "countryEn": "ES",
       "nameRu": "Барселона",
       "countryRu": "ЕК",
       "codeRu": "БЦН",
       "nameEn": "Barcelona",
       "codeEn": "BCN",
       "countryNameEn": "Spain And Canary Islands"
     },
     {
       "countryNameRu": "Республика Грузия",
       "countryEn": "GE",
       "nameRu": "Батуми",
       "countryRu": "ГР",
       "codeRu": "БУИ",
       "nameEn": "Batumi",
       "codeEn": "BUS",
       "countryNameEn": "Georgia Republic"
     },
     {
       "countryNameRu": "Ливан",
       "countryEn": "LB",
       "nameRu": "Бейрут",
       "countryRu": "ЛБ",
       "codeRu": "БЕУ",
       "nameEn": "Beirut",
       "codeEn": "BEY",
       "countryNameEn": "Lebanon"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Белгород",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "БЕД",
       "nameEn": "Belgorod",
       "codeEn": "EGO",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Сербия",
       "countryEn": "RS",
       "nameRu": "Белград",
       "countryRu": "РС",
       "codeRu": "БГА",
       "nameEn": "Belgrade",
       "codeEn": "BEG",
       "countryNameEn": "Serbia"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Белоярский",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "БЛР",
       "nameEn": "Beloyarsky",
       "codeEn": "EYK",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Березово",
       "countryRu": "РФ",
       "codeRu": "БЕР",
       "nameEn": "Berezovo",
       "codeEn": "EZV",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Германия",
       "countryEn": "DE",
       "nameRu": "Берлин",
       "countryRu": "ДЕ",
       "direct": true,
       "codeRu": "БРЛ",
       "nameEn": "Berlin",
       "codeEn": "BER",
       "countryNameEn": "Germany Republic",
       "airports": [
         {
           "nameRu": "Тегель",
           "codeRu": "TXL",
           "nameEn": "Berlin Tegel Apt",
           "codeEn": "TXL"
         }
       ]
     },
     {
       "countryNameRu": "Дания",
       "countryEn": "DK",
       "nameRu": "Биллунд",
       "countryRu": "ДК",
       "codeRu": "БЛЛ",
       "nameEn": "Billund",
       "codeEn": "BLL",
       "countryNameEn": "Denmark"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Бодайбо",
       "countryRu": "РФ",
       "codeRu": "БДБ",
       "nameEn": "Bodaybo",
       "codeEn": "ODO",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Республика Беларусь",
       "countryEn": "BY",
       "nameRu": "Брест",
       "countryRu": "БЛ",
       "codeRu": "БРТ",
       "nameEn": "Brest",
       "codeEn": "BQT",
       "countryNameEn": "Belarus"
     },
     {
       "countryNameRu": "Бельгия",
       "countryEn": "BE",
       "nameRu": "Брюссель",
       "countryRu": "БЕ",
       "codeRu": "БРЮ",
       "nameEn": "Brussels",
       "codeEn": "BRU",
       "countryNameEn": "Belgium"
     },
     {
       "countryNameRu": "Венгрия",
       "countryEn": "HU",
       "nameRu": "Будапешт",
       "countryRu": "ХУ",
       "codeRu": "БУД",
       "nameEn": "Budapest",
       "codeEn": "BUD",
       "countryNameEn": "Hungary"
     },
     {
       "countryNameRu": "Республика Узбекистан",
       "countryEn": "UZ",
       "nameRu": "Бухара",
       "countryRu": "УЗ",
       "direct": true,
       "codeRu": "БУА",
       "nameEn": "Bukhara",
       "codeEn": "BHK",
       "countryNameEn": "Uzbekistan Republic"
     },
     {
       "countryNameRu": "Польша",
       "countryEn": "PL",
       "nameRu": "Варшава",
       "countryRu": "ПЛ",
       "codeRu": "ВАВ",
       "nameEn": "Warsaw",
       "codeEn": "WAW",
       "countryNameEn": "Poland"
     },
     {
       "countryNameRu": "Австрия",
       "countryEn": "AT",
       "nameRu": "Вена",
       "countryRu": "АТ",
       "direct": true,
       "codeRu": "ВЕН",
       "nameEn": "Vienna",
       "codeEn": "VIE",
       "countryNameEn": "Austria",
       "airports": [
         {
           "nameRu": "Вена Международный",
           "codeRu": "ВЕН",
           "nameEn": "Vienna Intl",
           "codeEn": "VIE"
         }
       ]
     },
     {
       "countryNameRu": "Италия",
       "countryEn": "IT",
       "nameRu": "Венеция",
       "countryRu": "ИТ",
       "codeRu": "ВЕЦ",
       "nameEn": "Venice",
       "codeEn": "VCE",
       "countryNameEn": "Italy"
     },
     {
       "countryNameRu": "Италия",
       "countryEn": "IT",
       "nameRu": "Верона",
       "countryRu": "ИТ",
       "codeRu": "ВЕР",
       "nameEn": "Verona",
       "codeEn": "VRN",
       "countryNameEn": "Italy"
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
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Владикавказ",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ВЛА",
       "nameEn": "Vladikavkaz",
       "codeEn": "OGZ",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Волгоград",
       "countryRu": "РФ",
       "codeRu": "ВГГ",
       "nameEn": "Volgograd",
       "codeEn": "VOG",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Воркута",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ВКТ",
       "nameEn": "Vorkuta",
       "codeEn": "VKT",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Воронеж",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ВРН",
       "nameEn": "Voronezh",
       "codeEn": "VOZ",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Германия",
       "countryEn": "DE",
       "nameRu": "Гамбург",
       "countryRu": "ДЕ",
       "codeRu": "ГАМ",
       "nameEn": "Hamburg",
       "codeEn": "HAM",
       "countryNameEn": "Germany Republic"
     },
     {
       "countryNameRu": "Германия",
       "countryEn": "DE",
       "nameRu": "Ганновер",
       "countryRu": "ДЕ",
       "codeRu": "ХАЙ",
       "nameEn": "Hanover",
       "codeEn": "HAJ",
       "countryNameEn": "Germany Republic"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Геленджик",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ГДЖ",
       "nameEn": "Gelendzik",
       "codeEn": "GDZ",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Швеция",
       "countryEn": "SE",
       "nameRu": "Гетеборг",
       "countryRu": "СЕ",
       "codeRu": "GOT",
       "nameEn": "Gothenburg",
       "codeEn": "GOT",
       "countryNameEn": "Sweden"
     },
     {
       "countryNameRu": "Республика Беларусь",
       "countryEn": "BY",
       "nameRu": "Гродно",
       "countryRu": "БЛ",
       "codeRu": "ГРД",
       "nameEn": "Grodno",
       "codeEn": "GNA",
       "countryNameEn": "Belarus"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Грозный",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ГРН",
       "nameEn": "Groznyj",
       "codeEn": "GRV",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Азербайджанская Республик",
       "countryEn": "AZ",
       "nameRu": "Гянджа",
       "countryRu": "АЗ",
       "direct": true,
       "codeRu": "ГНЖ",
       "nameEn": "Gyandzha",
       "codeEn": "KVD",
       "countryNameEn": "Azerbaijan"
     },
     {
       "countryNameRu": "Хорватия",
       "countryEn": "HR",
       "nameRu": "Дубровник",
       "countryRu": "ХР",
       "codeRu": "ДБИ",
       "nameEn": "Dubrovnik",
       "codeEn": "DBV",
       "countryNameEn": "Croatia"
     },
     {
       "countryNameRu": "Республика Таджикистан",
       "countryEn": "TJ",
       "nameRu": "Душанбе",
       "countryRu": "ТД",
       "direct": true,
       "codeRu": "ДШБ",
       "nameEn": "Dushanbe",
       "codeEn": "DYU",
       "countryNameEn": "Tajikistan Republic"
     },
     {
       "countryNameRu": "Германия",
       "countryEn": "DE",
       "nameRu": "Дюссельдорф",
       "countryRu": "ДЕ",
       "codeRu": "ДУС",
       "nameEn": "Dusseldorf",
       "codeEn": "DUS",
       "countryNameEn": "Germany Republic"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Екатеринбург",
       "countryRu": "РФ",
       "codeRu": "ЕКБ",
       "nameEn": "Ekaterinburg",
       "codeEn": "SVX",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Кольцово",
           "codeRu": "ЕКБ",
           "nameEn": "Koltsovo",
           "codeEn": "SVX"
         }
       ]
     },
     {
       "countryNameRu": "Республика Армения",
       "countryEn": "AM",
       "nameRu": "Ереван",
       "countryRu": "АМ",
       "direct": true,
       "codeRu": "ЕВН",
       "nameEn": "Yerevan",
       "codeEn": "EVN",
       "countryNameEn": "Armenian Republic",
       "airports": [
         {
           "nameRu": "Звартноц",
           "codeRu": "ЗВР",
           "nameEn": "Zvartnots",
           "codeEn": "EVN"
         }
       ]
     },
     {
       "countryNameRu": "Швейцария",
       "countryEn": "CH",
       "nameRu": "Женева",
       "countryRu": "ЦХ",
       "codeRu": "ГЖА",
       "nameEn": "Geneva",
       "codeEn": "GVA",
       "countryNameEn": "Switzerland"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Жуковский",
       "countryRu": "РФ",
       "codeRu": "ЖУК",
       "nameEn": "Zhukovsky",
       "codeEn": "ZIA",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Австрия",
       "countryEn": "AT",
       "nameRu": "Зальцбург",
       "countryRu": "АТ",
       "codeRu": "ЗЦГ",
       "nameEn": "Salzburg",
       "codeEn": "SZG",
       "countryNameEn": "Austria"
     },
     {
       "countryNameRu": "Украина",
       "countryEn": "UA",
       "nameRu": "Запорожье",
       "countryRu": "УА",
       "codeRu": "ЗПЖ",
       "nameEn": "Zaporozhye",
       "codeEn": "OZH",
       "countryNameEn": "Ukraine"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Иваново",
       "countryRu": "РФ",
       "codeRu": "ИВВ",
       "nameEn": "Ivanovo",
       "codeEn": "IWA",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Игрим",
       "countryRu": "РФ",
       "codeRu": "ИРМ",
       "nameEn": "Igrim",
       "codeEn": "IRM",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Ижевск",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ИЖВ",
       "nameEn": "Izhevsk",
       "codeEn": "IJK",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Иркутск",
       "countryRu": "РФ",
       "codeRu": "ИКТ",
       "nameEn": "Irkutsk",
       "codeEn": "IKT",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Иркутск",
           "codeRu": "ИКТ",
           "nameEn": "Irkutsk",
           "codeEn": "IKT"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Казань",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "КЗН",
       "nameEn": "Kazan",
       "codeEn": "KZN",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Казань Основной",
           "codeRu": "ККЗ",
           "nameEn": "Kazan Basics",
           "codeEn": "KZN"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Калининград",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "КЛД",
       "nameEn": "Kaliningrad",
       "codeEn": "KGD",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Калуга",
       "countryRu": "РФ",
       "codeRu": "КЛГ",
       "nameEn": "Kaluga",
       "codeEn": "KLF",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Республика Казахстан",
       "countryEn": "KZ",
       "nameRu": "Караганда",
       "countryRu": "КЗ",
       "codeRu": "КГД",
       "nameEn": "Karaganda",
       "codeEn": "KGF",
       "countryNameEn": "Kazakhstan Republic"
     },
     {
       "countryNameRu": "Италия",
       "countryEn": "IT",
       "nameRu": "Катания",
       "countryRu": "ИТ",
       "codeRu": "CTA",
       "nameEn": "Catania",
       "codeEn": "CTA",
       "countryNameEn": "Italy"
     },
     {
       "countryNameRu": "Литва",
       "countryEn": "LT",
       "nameRu": "Каунас",
       "countryRu": "ЛТ",
       "codeRu": "KUN",
       "nameEn": "Kaunas",
       "codeEn": "KUN",
       "countryNameEn": "Lithuania"
     },
     {
       "countryNameRu": "Греция",
       "countryEn": "GR",
       "nameRu": "Керкира",
       "countryRu": "ГЦ",
       "codeRu": "CFU",
       "nameEn": "Kerkyra",
       "codeEn": "CFU",
       "countryNameEn": "Greece"
     },
     {
       "countryNameRu": "Украина",
       "countryEn": "UA",
       "nameRu": "Киев",
       "countryRu": "УА",
       "codeRu": "ИЕВ",
       "nameEn": "Kiev",
       "codeEn": "IEV",
       "countryNameEn": "Ukraine"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Киров",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "КИО",
       "nameEn": "Kirov",
       "codeEn": "KVX",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Республика Молдова",
       "countryEn": "MD",
       "nameRu": "Кишинев",
       "countryRu": "МД",
       "codeRu": "КШН",
       "nameEn": "Chisinau",
       "codeEn": "KIV",
       "countryNameEn": "Moldavian Republic"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Когалым",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "КОГ",
       "nameEn": "Kogalym",
       "codeEn": "KGP",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Дания",
       "countryEn": "DK",
       "nameRu": "Копенгаген",
       "countryRu": "ДК",
       "codeRu": "ЦПХ",
       "nameEn": "Copenhagen",
       "codeEn": "CPH",
       "countryNameEn": "Denmark"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Краснодар",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "КРР",
       "nameEn": "Krasnodar",
       "codeEn": "KRR",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Пашковский",
           "codeRu": "КПА",
           "nameEn": "Pashkovskiy",
           "codeEn": "KRR"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Красноярск",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "КЯА",
       "nameEn": "Krasnoyarsk",
       "codeEn": "KJA",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Емельяново",
           "codeRu": "ЕМВ",
           "nameEn": "Emelianovo",
           "codeEn": "KJA"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Курган",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "КГН",
       "nameEn": "Kurgan",
       "codeEn": "KRO",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Курск",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "КУС",
       "nameEn": "Kursk",
       "codeEn": "URS",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Кипр",
       "countryEn": "CY",
       "nameRu": "Ларнака",
       "countryRu": "ЦЫ",
       "codeRu": "ЛРК",
       "nameEn": "Larnaca",
       "codeEn": "LCA",
       "countryNameEn": "Cyprus"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Ленск",
       "countryRu": "РФ",
       "codeRu": "ЛСК",
       "nameEn": "Lensk",
       "codeEn": "ULK",
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
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Липецк",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ЛИП",
       "nameEn": "Lipetsk",
       "codeEn": "LPK",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Великобритания",
       "countryEn": "GB",
       "nameRu": "Лондон",
       "countryRu": "ГБ",
       "codeRu": "ЛОД",
       "nameEn": "London",
       "codeEn": "LON",
       "countryNameEn": "United Kingdom"
     },
     {
       "countryNameRu": "Украина",
       "countryEn": "UA",
       "nameRu": "Львов",
       "countryRu": "УА",
       "codeRu": "ЛВО",
       "nameEn": "Lviv",
       "codeEn": "LWO",
       "countryNameEn": "Ukraine"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Магнитогорск",
       "countryRu": "РФ",
       "codeRu": "МГС",
       "nameEn": "Magnitogorsk",
       "codeEn": "MQF",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Испания и Канарские Остро",
       "countryEn": "ES",
       "nameRu": "Мадрид",
       "countryRu": "ЕК",
       "codeRu": "МАД",
       "nameEn": "Madrid",
       "codeEn": "MAD",
       "countryNameEn": "Spain And Canary Islands"
     },
     {
       "countryNameRu": "Мальта",
       "countryEn": "MT",
       "nameRu": "Мальта",
       "countryRu": "МТ",
       "codeRu": "МАТ",
       "nameEn": "Malta",
       "codeEn": "MLA",
       "countryNameEn": "Malta"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Махачкала",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "МХЛ",
       "nameEn": "Makhachkala",
       "codeEn": "MCX",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Италия",
       "countryEn": "IT",
       "nameRu": "Милан",
       "countryRu": "ИТ",
       "direct": true,
       "codeRu": "МИА",
       "nameEn": "Milan",
       "codeEn": "MIL",
       "countryNameEn": "Italy",
       "airports": [
         {
           "nameRu": "Мальпенса",
           "codeRu": "МИМ",
           "nameEn": "Malpensa Apt",
           "codeEn": "MXP"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Минеральные Воды",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "МРВ",
       "nameEn": "Mineralnye Vody",
       "codeEn": "MRV",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Республика Беларусь",
       "countryEn": "BY",
       "nameRu": "Минск",
       "countryRu": "БЛ",
       "direct": true,
       "codeRu": "МСК",
       "nameEn": "Minsk",
       "codeEn": "MSQ",
       "countryNameEn": "Belarus",
       "airports": [
         {
           "nameRu": "Интернэйшнл",
           "codeRu": "МИК",
           "nameEn": "International",
           "codeEn": "MSQ"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Москва",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "МОВ",
       "nameEn": "Moscow",
       "codeEn": "MOW",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Домодедово",
           "codeRu": "ДМД",
           "nameEn": "Domodedovo",
           "codeEn": "DME"
         },
         {
           "nameRu": "Внуково",
           "codeRu": "ВНК",
           "nameEn": "Vnukovo",
           "codeEn": "VKO"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Мурманск",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "МУН",
       "nameEn": "Murmansk",
       "codeEn": "MMK",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Германия",
       "countryEn": "DE",
       "nameRu": "Мюнхен",
       "countryRu": "ДЕ",
       "direct": true,
       "codeRu": "МЮН",
       "nameEn": "Munich",
       "codeEn": "MUC",
       "countryNameEn": "Germany Republic",
       "airports": [
         {
           "nameRu": "Франц Жозеф Штраусс",
           "codeRu": "МЮН",
           "nameEn": "Munich International Airp",
           "codeEn": "MUC"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Надым",
       "countryRu": "РФ",
       "codeRu": "НДМ",
       "nameEn": "Nadym",
       "codeEn": "NYM",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Назрань",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ИНШ",
       "nameEn": "Nazran",
       "codeEn": "IGT",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Назрань Магас Слепцовская",
           "codeRu": "ИНШ",
           "nameEn": "Nazran Sleptsovskaya",
           "codeEn": "IGT"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Нальчик",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "НЧК",
       "nameEn": "Nalchik",
       "codeEn": "NAL",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Нарьян-Мар",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ННР",
       "nameEn": "Naryan-Mar",
       "codeEn": "NNM",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Азербайджанская Республик",
       "countryEn": "AZ",
       "nameRu": "Нахичевань",
       "countryRu": "АЗ",
       "direct": true,
       "codeRu": "НХЧ",
       "nameEn": "Nakchivan",
       "codeEn": "NAJ",
       "countryNameEn": "Azerbaijan"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Нижневартовск",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "НЖВ",
       "nameEn": "Nizhnevartovsk",
       "codeEn": "NJC",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Нижнекамск",
       "countryRu": "РФ",
       "codeRu": "НЖК",
       "nameEn": "Nizhnekamsk",
       "codeEn": "NBC",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Нижний Новгород",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "НЖС",
       "nameEn": "Nizhniy Novgorod",
       "codeEn": "GOJ",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Франция",
       "countryEn": "FR",
       "nameRu": "Ницца",
       "countryRu": "ФР",
       "codeRu": "НЦЕ",
       "nameEn": "Nice",
       "codeEn": "NCE",
       "countryNameEn": "France"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Новосибирск",
       "countryRu": "РФ",
       "codeRu": "ОВБ",
       "nameEn": "Novosibirsk",
       "codeEn": "OVB",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Толмачево",
           "codeRu": "ТЛЧ",
           "nameEn": "Tolmachevo",
           "codeEn": "OVB"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Новый Уренгой",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "НУР",
       "nameEn": "Novy Urengoy",
       "codeEn": "NUX",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Ноябрьск",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "НОЯ",
       "nameEn": "Noyabrsk",
       "codeEn": "NOJ",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Нягань",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "НЯГ",
       "nameEn": "Nyagan",
       "codeEn": "NYA",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Украина",
       "countryEn": "UA",
       "nameRu": "Одесса",
       "countryRu": "УА",
       "codeRu": "ОДС",
       "nameEn": "Odessa",
       "codeEn": "ODS",
       "countryNameEn": "Ukraine"
     },
     {
       "countryNameRu": "Италия",
       "countryEn": "IT",
       "nameRu": "Олбия",
       "countryRu": "ИТ",
       "codeRu": "OLB",
       "nameEn": "Olbia",
       "codeEn": "OLB",
       "countryNameEn": "Italy"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Омск",
       "countryRu": "РФ",
       "codeRu": "ОМС",
       "nameEn": "Omsk",
       "codeEn": "OMS",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Омск",
           "codeRu": "ОМС",
           "nameEn": "Omsk",
           "codeEn": "OMS"
         }
       ]
     },
     {
       "countryNameRu": "Норвегия",
       "countryEn": "NO",
       "nameRu": "Осло",
       "countryRu": "НО",
       "codeRu": "ОСЛ",
       "nameEn": "Oslo",
       "codeEn": "OSL",
       "countryNameEn": "Norway"
     },
     {
       "countryNameRu": "Республика Казахстан",
       "countryEn": "KZ",
       "nameRu": "Павлодар",
       "countryRu": "КЗ",
       "codeRu": "ПВЛ",
       "nameEn": "Pavlodar",
       "codeEn": "PWQ",
       "countryNameEn": "Kazakhstan Republic"
     },
     {
       "countryNameRu": "Литва",
       "countryEn": "LT",
       "nameRu": "Паланга-Клайпеда",
       "countryRu": "ЛТ",
       "direct": true,
       "codeRu": "ПЛГ",
       "nameEn": "Klaipeda/Palanga",
       "codeEn": "PLQ",
       "countryNameEn": "Lithuania"
     },
     {
       "countryNameRu": "Испания и Канарские Остро",
       "countryEn": "ES",
       "nameRu": "Пальма Мальорка",
       "countryRu": "ЕК",
       "codeRu": "ПМИ",
       "nameEn": "Palma Mallorca",
       "codeEn": "PMI",
       "countryNameEn": "Spain And Canary Islands"
     },
     {
       "countryNameRu": "Франция",
       "countryEn": "FR",
       "nameRu": "Париж",
       "countryRu": "ФР",
       "codeRu": "ПАЖ",
       "nameEn": "Paris",
       "codeEn": "PAR",
       "countryNameEn": "France"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Пенза",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ПНА",
       "nameEn": "Penza",
       "codeEn": "PEZ",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Пермь",
       "countryRu": "РФ",
       "codeRu": "ПРМ",
       "nameEn": "Perm",
       "codeEn": "PEE",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Большое Савино",
           "codeRu": "ПРЬ",
           "nameEn": "Big Savino",
           "codeEn": "PEE"
         }
       ]
     },
     {
       "countryNameRu": "Словакия",
       "countryEn": "SK",
       "nameRu": "Попрад Татры",
       "countryRu": "СЧ",
       "codeRu": "ТАТ",
       "nameEn": "Poprad/Tatry",
       "codeEn": "TAT",
       "countryNameEn": "Slovakia"
     },
     {
       "countryNameRu": "Чешская Республика",
       "countryEn": "CZ",
       "nameRu": "Прага",
       "countryRu": "ЦЗ",
       "codeRu": "ПРХ",
       "nameEn": "Prague",
       "codeEn": "PRG",
       "countryNameEn": "Czech Republic"
     },
     {
       "countryNameRu": "Исландия",
       "countryEn": "IS",
       "nameRu": "Рейкьявик",
       "countryRu": "ИС",
       "codeRu": "REK",
       "nameEn": "Reykjavik",
       "codeEn": "REK",
       "countryNameEn": "Iceland"
     },
     {
       "countryNameRu": "Латвия",
       "countryEn": "LV",
       "nameRu": "Рига",
       "countryRu": "ЛВ",
       "direct": true,
       "codeRu": "РИХ",
       "nameEn": "Riga",
       "codeEn": "RIX",
       "countryNameEn": "Latvia"
     },
     {
       "countryNameRu": "Хорватия",
       "countryEn": "HR",
       "nameRu": "Риека",
       "countryRu": "ХР",
       "codeRu": "RJK",
       "nameEn": "Rijeka",
       "codeEn": "RJK",
       "countryNameEn": "Croatia"
     },
     {
       "countryNameRu": "Италия",
       "countryEn": "IT",
       "nameRu": "Рим",
       "countryRu": "ИТ",
       "codeRu": "РОМ",
       "nameEn": "Rome",
       "codeEn": "ROM",
       "countryNameEn": "Italy"
     },
     {
       "countryNameRu": "Греция",
       "countryEn": "GR",
       "nameRu": "Родос",
       "countryRu": "ГЦ",
       "codeRu": "RHO",
       "nameEn": "Rhodes",
       "codeEn": "RHO",
       "countryNameEn": "Greece"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Ростов-на-Дону",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "РОВ",
       "nameEn": "Rostov",
       "codeEn": "ROV",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Платов",
           "codeRu": "РОВ",
           "nameEn": "Platov",
           "codeEn": "ROV"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Сабетта",
       "countryRu": "РФ",
       "codeRu": "СБТ",
       "nameEn": "Sabetta",
       "codeEn": "SBT",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Греция",
       "countryEn": "GR",
       "nameRu": "Салоники",
       "countryRu": "ГЦ",
       "direct": true,
       "codeRu": "СКГ",
       "nameEn": "Thessaloniki",
       "codeEn": "SKG",
       "countryNameEn": "Greece"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Самара",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "СМШ",
       "nameEn": "Samara",
       "codeEn": "KUF",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Курумоч",
           "codeRu": "СКЧ",
           "nameEn": "Kurumoch",
           "codeEn": "KUF"
         }
       ]
     },
     {
       "countryNameRu": "Республика Узбекистан",
       "countryEn": "UZ",
       "nameRu": "Самарканд",
       "countryRu": "УЗ",
       "direct": true,
       "codeRu": "СКД",
       "nameEn": "Samarkand",
       "codeEn": "SKD",
       "countryNameEn": "Uzbekistan Republic"
     },
     {
       "countryNameRu": "Турция",
       "countryEn": "TR",
       "nameRu": "Самсун",
       "countryRu": "ТР",
       "codeRu": "SZF",
       "nameEn": "Samsun",
       "codeEn": "SZF",
       "countryNameEn": "Turkey",
       "airports": [
         {
           "nameRu": "Samsun Carsamba Airport",
           "codeRu": "SZF",
           "nameEn": "Samsun Carsamba Airport",
           "codeEn": "SZF"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Санкт-Петербург",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "СПТ",
       "nameEn": "St Petersburg",
       "codeEn": "LED",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Пулково",
           "codeRu": "ПЛК",
           "nameEn": "Pulkovo",
           "codeEn": "LED"
         }
       ]
     },
     {
       "countryNameRu": "Китай",
       "countryEn": "CN",
       "nameRu": "Санья",
       "countryRu": "ЦН",
       "direct": true,
       "codeRu": "СЬЯ",
       "nameEn": "Sanya",
       "codeEn": "SYX",
       "countryNameEn": "China"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Саратов",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "СРО",
       "nameEn": "Saratov",
       "codeEn": "RTW",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Советский",
       "countryRu": "РФ",
       "codeRu": "СОЙ",
       "nameEn": "Sovetsky",
       "codeEn": "OVS",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Сочи",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "СОЧ",
       "nameEn": "Sochi",
       "codeEn": "AER",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Норвегия",
       "countryEn": "NO",
       "nameRu": "Ставангер",
       "countryRu": "НО",
       "codeRu": "SVG",
       "nameEn": "Stavanger",
       "codeEn": "SVG",
       "countryNameEn": "Norway"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Ставрополь",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "СТВ",
       "nameEn": "Stavropol",
       "codeEn": "STW",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Турция",
       "countryEn": "TR",
       "nameRu": "Стамбул",
       "countryRu": "ТР",
       "direct": true,
       "codeRu": "ИСТ",
       "nameEn": "Istanbul",
       "codeEn": "IST",
       "countryNameEn": "Turkey",
       "airports": [
         {
           "nameRu": "Ататурк",
           "codeRu": "ИСТ",
           "nameEn": "Istanbul Ataturk Airport",
           "codeEn": "IST"
         }
       ]
     },
     {
       "countryNameRu": "Швеция",
       "countryEn": "SE",
       "nameRu": "Стокгольм",
       "countryRu": "СЕ",
       "codeRu": "СТО",
       "nameEn": "Stockholm",
       "codeEn": "STO",
       "countryNameEn": "Sweden"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Сургут",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "СУР",
       "nameEn": "Surgut",
       "codeEn": "SGC",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Сыктывкар",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "СЫВ",
       "nameEn": "Syktyvkar",
       "codeEn": "SCW",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Талакан",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ТЛК",
       "nameEn": "Talakan",
       "codeEn": "TLK",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Эстония",
       "countryEn": "EE",
       "nameRu": "Таллинн",
       "countryRu": "ЕЕ",
       "codeRu": "TLL",
       "nameEn": "Tallinn",
       "codeEn": "TLL",
       "countryNameEn": "Estonia"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Тамбов",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ТМБ",
       "nameEn": "Tambov",
       "codeEn": "TBW",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Финляндия",
       "countryEn": "FI",
       "nameRu": "Тампере",
       "countryRu": "ФИ",
       "codeRu": "ТПР",
       "nameEn": "Tampere",
       "codeEn": "TMP",
       "countryNameEn": "Finland"
     },
     {
       "countryNameRu": "Республика Узбекистан",
       "countryEn": "UZ",
       "nameRu": "Ташкент",
       "countryRu": "УЗ",
       "direct": true,
       "codeRu": "ТАС",
       "nameEn": "Tashkent",
       "codeEn": "TAS",
       "countryNameEn": "Uzbekistan Republic",
       "airports": [
         {
           "nameRu": "Ташкент Интернэйшнл",
           "codeRu": "ТАС",
           "nameEn": "International",
           "codeEn": "TAS"
         }
       ]
     },
     {
       "countryNameRu": "Республика Грузия",
       "countryEn": "GE",
       "nameRu": "Тбилиси",
       "countryRu": "ГР",
       "codeRu": "ТБС",
       "nameEn": "Tbilisi",
       "codeEn": "TBS",
       "countryNameEn": "Georgia Republic"
     },
     {
       "countryNameRu": "Израиль",
       "countryEn": "IL",
       "nameRu": "Тель-Авив",
       "countryRu": "ИЛ",
       "codeRu": "ТЛЯ",
       "nameEn": "Tel Aviv",
       "codeEn": "TLV",
       "countryNameEn": "Israel"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Томск",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ТСК",
       "nameEn": "Tomsk",
       "codeEn": "TOF",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Финляндия",
       "countryEn": "FI",
       "nameRu": "Турку",
       "countryRu": "ФИ",
       "codeRu": "TKU",
       "nameEn": "Turku",
       "codeEn": "TKU",
       "countryNameEn": "Finland"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Тюмень",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ТЮМ",
       "nameEn": "Tyumen",
       "codeEn": "TJM",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Рощино",
           "codeRu": "РЩН",
           "nameEn": "Roschino",
           "codeEn": "TJM"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Ульяновск",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "УЛК",
       "nameEn": "Ulyanovsk",
       "codeEn": "ULY",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Ульяновск Баратаевка",
           "codeRu": "УЛК",
           "nameEn": "Ulianovsk Barataevka",
           "codeEn": "ULV"
         },
         {
           "nameRu": "Восточный",
           "codeRu": "УЛС",
           "nameEn": "Vostochniy",
           "codeEn": "ULY"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Урай",
       "countryRu": "РФ",
       "codeRu": "УРА",
       "nameEn": "Uraj",
       "codeEn": "URJ",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Усинск",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "УСН",
       "nameEn": "Usinsk",
       "codeEn": "USK",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Усть Кут",
       "countryRu": "РФ",
       "codeRu": "УСК",
       "nameEn": "Ust-Kut",
       "codeEn": "UKX",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Уфа",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "УФА",
       "nameEn": "Ufa",
       "codeEn": "UFA",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Уфа",
           "codeRu": "УФА",
           "nameEn": "Ufa",
           "codeEn": "UFA"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Ухта",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "УХТ",
       "nameEn": "Ukhta",
       "codeEn": "UCT",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Республика Узбекистан",
       "countryEn": "UZ",
       "nameRu": "Фергана",
       "countryRu": "УЗ",
       "direct": true,
       "codeRu": "ФГН",
       "nameEn": "Fergana",
       "codeEn": "FEG",
       "countryNameEn": "Uzbekistan Republic"
     },
     {
       "countryNameRu": "Германия",
       "countryEn": "DE",
       "nameRu": "Франкфурт-на-Майне",
       "countryRu": "ДЕ",
       "codeRu": "ФРА",
       "nameEn": "Frankfurt",
       "codeEn": "FRA",
       "countryNameEn": "Germany Republic"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Ханты-Мансийск",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ХАС",
       "nameEn": "Khanty-Mansiysk",
       "codeEn": "HMA",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Украина",
       "countryEn": "UA",
       "nameRu": "Харьков",
       "countryRu": "УА",
       "codeRu": "ХРК",
       "nameEn": "Kharkiv",
       "codeEn": "HRK",
       "countryNameEn": "Ukraine"
     },
     {
       "countryNameRu": "Финляндия",
       "countryEn": "FI",
       "nameRu": "Хельсинки",
       "countryRu": "ФИ",
       "codeRu": "ХЕЛ",
       "nameEn": "Helsinki",
       "codeEn": "HEL",
       "countryNameEn": "Finland"
     },
     {
       "countryNameRu": "Республика Таджикистан",
       "countryEn": "TJ",
       "nameRu": "Худжанд",
       "countryRu": "ТД",
       "codeRu": "ХДТ",
       "nameEn": "Khudzhand",
       "codeEn": "LBD",
       "countryNameEn": "Tajikistan Republic"
     },
     {
       "countryNameRu": "Швейцария",
       "countryEn": "CH",
       "nameRu": "Цюрих",
       "countryRu": "ЦХ",
       "codeRu": "ЦРХ",
       "nameEn": "Zurich",
       "codeEn": "ZRH",
       "countryNameEn": "Switzerland"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Чебоксары",
       "countryRu": "РФ",
       "codeRu": "ЧБЕ",
       "nameEn": "Cheboksary",
       "codeEn": "CSY",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Республика Казахстан",
       "countryEn": "KZ",
       "nameRu": "Шымкент",
       "countryRu": "КЗ",
       "codeRu": "ШМТ",
       "nameEn": "Shymkent",
       "codeEn": "CIT",
       "countryNameEn": "Kazakhstan Republic"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Элиста",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ЭЛИ",
       "nameEn": "Elista",
       "codeEn": "ESL",
       "countryNameEn": "Russian Federation"
     }
   ],
   "destination": [
     {
       "countryNameRu": "Великобритания",
       "countryEn": "GB",
       "nameRu": "Абердин",
       "countryRu": "ГБ",
       "codeRu": "ABZ",
       "nameEn": "Aberdeen",
       "codeEn": "ABZ",
       "countryNameEn": "United Kingdom"
     },
     {
       "countryNameRu": "Объединенные Арабские Эми",
       "countryEn": "AE",
       "nameRu": "Абу Даби",
       "countryRu": "АЕ",
       "codeRu": "АУХ",
       "nameEn": "Abu Dhabi",
       "codeEn": "AUH",
       "countryNameEn": "United Arab Emirates"
     },
     {
       "countryNameRu": "Республика Казахстан",
       "countryEn": "KZ",
       "nameRu": "Актау",
       "countryRu": "КЗ",
       "codeRu": "ААУ",
       "nameEn": "Aktau",
       "codeEn": "SCO",
       "countryNameEn": "Kazakhstan Republic"
     },
     {
       "countryNameRu": "Республика Казахстан",
       "countryEn": "KZ",
       "nameRu": "Алматы",
       "countryRu": "КЗ",
       "codeRu": "АЛА",
       "nameEn": "Almaty",
       "codeEn": "ALA",
       "countryNameEn": "Kazakhstan Republic"
     },
     {
       "countryNameRu": "Нидерланды",
       "countryEn": "NL",
       "nameRu": "Амстердам",
       "countryRu": "НЛ",
       "codeRu": "АМС",
       "nameEn": "Amsterdam",
       "codeEn": "AMS",
       "countryNameEn": "Netherlands"
     },
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
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Анапа",
       "countryRu": "РФ",
       "codeRu": "АНА",
       "nameEn": "Anapa",
       "codeEn": "AAQ",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Анапа Витязево",
           "codeRu": "АНА",
           "nameEn": "Anapa",
           "codeEn": "AAQ"
         }
       ]
     },
     {
       "countryNameRu": "Турция",
       "countryEn": "TR",
       "nameRu": "Анталья",
       "countryRu": "ТР",
       "codeRu": "АЯТ",
       "nameEn": "Antalya",
       "codeEn": "AYT",
       "countryNameEn": "Turkey"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Архангельск",
       "countryRu": "РФ",
       "codeRu": "АРХ",
       "nameEn": "Arkhangelsk",
       "codeEn": "ARH",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Талаги",
           "codeRu": "АХГ",
           "nameEn": "Talagi",
           "codeEn": "ARH"
         }
       ]
     },
     {
       "countryNameRu": "Республика Казахстан",
       "countryEn": "KZ",
       "nameRu": "Астана",
       "countryRu": "КЗ",
       "codeRu": "АКЛ",
       "nameEn": "Astana",
       "codeEn": "TSE",
       "countryNameEn": "Kazakhstan Republic"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Астрахань",
       "countryRu": "РФ",
       "codeRu": "АСР",
       "nameEn": "Astrakhan",
       "codeEn": "ASF",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Греция",
       "countryEn": "GR",
       "nameRu": "Афины",
       "countryRu": "ГЦ",
       "codeRu": "АТХ",
       "nameEn": "Athens",
       "codeEn": "ATH",
       "countryNameEn": "Greece"
     },
     {
       "countryNameRu": "Туркменистан",
       "countryEn": "TM",
       "nameRu": "Ашгабад",
       "countryRu": "ТМ",
       "codeRu": "АШХ",
       "nameEn": "Ashgabat",
       "codeEn": "ASB",
       "countryNameEn": "Turkmenistan"
     },
     {
       "countryNameRu": "Республика Казахстан",
       "countryEn": "KZ",
       "nameRu": "Байконур",
       "countryRu": "КЗ",
       "codeRu": "ЛНЙ",
       "nameEn": "Baykonur",
       "codeEn": "BXY",
       "countryNameEn": "Kazakhstan Republic"
     },
     {
       "countryNameRu": "Азербайджанская Республик",
       "countryEn": "AZ",
       "nameRu": "Баку",
       "countryRu": "АЗ",
       "codeRu": "БАК",
       "nameEn": "Baku",
       "codeEn": "BAK",
       "countryNameEn": "Azerbaijan",
       "airports": [
         {
           "nameRu": "Ап Гейдар Алиев",
           "codeRu": "БАК",
           "nameEn": "Heydar Aliyev",
           "codeEn": "GYD"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Барнаул",
       "countryRu": "РФ",
       "codeRu": "БАН",
       "nameEn": "Barnaul",
       "codeEn": "BAX",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Испания и Канарские Остро",
       "countryEn": "ES",
       "nameRu": "Барселона",
       "countryRu": "ЕК",
       "codeRu": "БЦН",
       "nameEn": "Barcelona",
       "codeEn": "BCN",
       "countryNameEn": "Spain And Canary Islands"
     },
     {
       "countryNameRu": "Республика Грузия",
       "countryEn": "GE",
       "nameRu": "Батуми",
       "countryRu": "ГР",
       "codeRu": "БУИ",
       "nameEn": "Batumi",
       "codeEn": "BUS",
       "countryNameEn": "Georgia Republic"
     },
     {
       "countryNameRu": "Ливан",
       "countryEn": "LB",
       "nameRu": "Бейрут",
       "countryRu": "ЛБ",
       "codeRu": "БЕУ",
       "nameEn": "Beirut",
       "codeEn": "BEY",
       "countryNameEn": "Lebanon"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Белгород",
       "countryRu": "РФ",
       "codeRu": "БЕД",
       "nameEn": "Belgorod",
       "codeEn": "EGO",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Сербия",
       "countryEn": "RS",
       "nameRu": "Белград",
       "countryRu": "РС",
       "codeRu": "БГА",
       "nameEn": "Belgrade",
       "codeEn": "BEG",
       "countryNameEn": "Serbia"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Белоярский",
       "countryRu": "РФ",
       "codeRu": "БЛР",
       "nameEn": "Beloyarsky",
       "codeEn": "EYK",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Березово",
       "countryRu": "РФ",
       "codeRu": "БЕР",
       "nameEn": "Berezovo",
       "codeEn": "EZV",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Германия",
       "countryEn": "DE",
       "nameRu": "Берлин",
       "countryRu": "ДЕ",
       "codeRu": "БРЛ",
       "nameEn": "Berlin",
       "codeEn": "BER",
       "countryNameEn": "Germany Republic",
       "airports": [
         {
           "nameRu": "Тегель",
           "codeRu": "TXL",
           "nameEn": "Berlin Tegel Apt",
           "codeEn": "TXL"
         }
       ]
     },
     {
       "countryNameRu": "Дания",
       "countryEn": "DK",
       "nameRu": "Биллунд",
       "countryRu": "ДК",
       "codeRu": "БЛЛ",
       "nameEn": "Billund",
       "codeEn": "BLL",
       "countryNameEn": "Denmark"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Бодайбо",
       "countryRu": "РФ",
       "codeRu": "БДБ",
       "nameEn": "Bodaybo",
       "codeEn": "ODO",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Республика Беларусь",
       "countryEn": "BY",
       "nameRu": "Брест",
       "countryRu": "БЛ",
       "codeRu": "БРТ",
       "nameEn": "Brest",
       "codeEn": "BQT",
       "countryNameEn": "Belarus"
     },
     {
       "countryNameRu": "Бельгия",
       "countryEn": "BE",
       "nameRu": "Брюссель",
       "countryRu": "БЕ",
       "codeRu": "БРЮ",
       "nameEn": "Brussels",
       "codeEn": "BRU",
       "countryNameEn": "Belgium"
     },
     {
       "countryNameRu": "Венгрия",
       "countryEn": "HU",
       "nameRu": "Будапешт",
       "countryRu": "ХУ",
       "codeRu": "БУД",
       "nameEn": "Budapest",
       "codeEn": "BUD",
       "countryNameEn": "Hungary"
     },
     {
       "countryNameRu": "Республика Узбекистан",
       "countryEn": "UZ",
       "nameRu": "Бухара",
       "countryRu": "УЗ",
       "codeRu": "БУА",
       "nameEn": "Bukhara",
       "codeEn": "BHK",
       "countryNameEn": "Uzbekistan Republic"
     },
     {
       "countryNameRu": "Польша",
       "countryEn": "PL",
       "nameRu": "Варшава",
       "countryRu": "ПЛ",
       "codeRu": "ВАВ",
       "nameEn": "Warsaw",
       "codeEn": "WAW",
       "countryNameEn": "Poland"
     },
     {
       "countryNameRu": "Австрия",
       "countryEn": "AT",
       "nameRu": "Вена",
       "countryRu": "АТ",
       "direct": true,
       "codeRu": "ВЕН",
       "nameEn": "Vienna",
       "codeEn": "VIE",
       "countryNameEn": "Austria",
       "airports": [
         {
           "nameRu": "Вена Международный",
           "codeRu": "ВЕН",
           "nameEn": "Vienna Intl",
           "codeEn": "VIE"
         }
       ]
     },
     {
       "countryNameRu": "Италия",
       "countryEn": "IT",
       "nameRu": "Венеция",
       "countryRu": "ИТ",
       "codeRu": "ВЕЦ",
       "nameEn": "Venice",
       "codeEn": "VCE",
       "countryNameEn": "Italy"
     },
     {
       "countryNameRu": "Италия",
       "countryEn": "IT",
       "nameRu": "Верона",
       "countryRu": "ИТ",
       "codeRu": "ВЕР",
       "nameEn": "Verona",
       "codeEn": "VRN",
       "countryNameEn": "Italy"
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
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Владикавказ",
       "countryRu": "РФ",
       "codeRu": "ВЛА",
       "nameEn": "Vladikavkaz",
       "codeEn": "OGZ",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Волгоград",
       "countryRu": "РФ",
       "codeRu": "ВГГ",
       "nameEn": "Volgograd",
       "codeEn": "VOG",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Воркута",
       "countryRu": "РФ",
       "codeRu": "ВКТ",
       "nameEn": "Vorkuta",
       "codeEn": "VKT",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Воронеж",
       "countryRu": "РФ",
       "codeRu": "ВРН",
       "nameEn": "Voronezh",
       "codeEn": "VOZ",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Германия",
       "countryEn": "DE",
       "nameRu": "Гамбург",
       "countryRu": "ДЕ",
       "codeRu": "ГАМ",
       "nameEn": "Hamburg",
       "codeEn": "HAM",
       "countryNameEn": "Germany Republic"
     },
     {
       "countryNameRu": "Германия",
       "countryEn": "DE",
       "nameRu": "Ганновер",
       "countryRu": "ДЕ",
       "codeRu": "ХАЙ",
       "nameEn": "Hanover",
       "codeEn": "HAJ",
       "countryNameEn": "Germany Republic"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Геленджик",
       "countryRu": "РФ",
       "codeRu": "ГДЖ",
       "nameEn": "Gelendzik",
       "codeEn": "GDZ",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Швеция",
       "countryEn": "SE",
       "nameRu": "Гетеборг",
       "countryRu": "СЕ",
       "codeRu": "GOT",
       "nameEn": "Gothenburg",
       "codeEn": "GOT",
       "countryNameEn": "Sweden"
     },
     {
       "countryNameRu": "Республика Беларусь",
       "countryEn": "BY",
       "nameRu": "Гродно",
       "countryRu": "БЛ",
       "codeRu": "ГРД",
       "nameEn": "Grodno",
       "codeEn": "GNA",
       "countryNameEn": "Belarus"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Грозный",
       "countryRu": "РФ",
       "codeRu": "ГРН",
       "nameEn": "Groznyj",
       "codeEn": "GRV",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Азербайджанская Республик",
       "countryEn": "AZ",
       "nameRu": "Гянджа",
       "countryRu": "АЗ",
       "direct": true,
       "codeRu": "ГНЖ",
       "nameEn": "Gyandzha",
       "codeEn": "KVD",
       "countryNameEn": "Azerbaijan"
     },
     {
       "countryNameRu": "Хорватия",
       "countryEn": "HR",
       "nameRu": "Дубровник",
       "countryRu": "ХР",
       "codeRu": "ДБИ",
       "nameEn": "Dubrovnik",
       "codeEn": "DBV",
       "countryNameEn": "Croatia"
     },
     {
       "countryNameRu": "Республика Таджикистан",
       "countryEn": "TJ",
       "nameRu": "Душанбе",
       "countryRu": "ТД",
       "codeRu": "ДШБ",
       "nameEn": "Dushanbe",
       "codeEn": "DYU",
       "countryNameEn": "Tajikistan Republic"
     },
     {
       "countryNameRu": "Германия",
       "countryEn": "DE",
       "nameRu": "Дюссельдорф",
       "countryRu": "ДЕ",
       "codeRu": "ДУС",
       "nameEn": "Dusseldorf",
       "codeEn": "DUS",
       "countryNameEn": "Germany Republic"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Екатеринбург",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ЕКБ",
       "nameEn": "Ekaterinburg",
       "codeEn": "SVX",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Кольцово",
           "codeRu": "ЕКБ",
           "nameEn": "Koltsovo",
           "codeEn": "SVX"
         }
       ]
     },
     {
       "countryNameRu": "Республика Армения",
       "countryEn": "AM",
       "nameRu": "Ереван",
       "countryRu": "АМ",
       "codeRu": "ЕВН",
       "nameEn": "Yerevan",
       "codeEn": "EVN",
       "countryNameEn": "Armenian Republic",
       "airports": [
         {
           "nameRu": "Звартноц",
           "codeRu": "ЗВР",
           "nameEn": "Zvartnots",
           "codeEn": "EVN"
         }
       ]
     },
     {
       "countryNameRu": "Швейцария",
       "countryEn": "CH",
       "nameRu": "Женева",
       "countryRu": "ЦХ",
       "codeRu": "ГЖА",
       "nameEn": "Geneva",
       "codeEn": "GVA",
       "countryNameEn": "Switzerland"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Жуковский",
       "countryRu": "РФ",
       "codeRu": "ЖУК",
       "nameEn": "Zhukovsky",
       "codeEn": "ZIA",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Австрия",
       "countryEn": "AT",
       "nameRu": "Зальцбург",
       "countryRu": "АТ",
       "codeRu": "ЗЦГ",
       "nameEn": "Salzburg",
       "codeEn": "SZG",
       "countryNameEn": "Austria"
     },
     {
       "countryNameRu": "Украина",
       "countryEn": "UA",
       "nameRu": "Запорожье",
       "countryRu": "УА",
       "codeRu": "ЗПЖ",
       "nameEn": "Zaporozhye",
       "codeEn": "OZH",
       "countryNameEn": "Ukraine"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Иваново",
       "countryRu": "РФ",
       "codeRu": "ИВВ",
       "nameEn": "Ivanovo",
       "codeEn": "IWA",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Игрим",
       "countryRu": "РФ",
       "codeRu": "ИРМ",
       "nameEn": "Igrim",
       "codeEn": "IRM",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Ижевск",
       "countryRu": "РФ",
       "codeRu": "ИЖВ",
       "nameEn": "Izhevsk",
       "codeEn": "IJK",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Иркутск",
       "countryRu": "РФ",
       "codeRu": "ИКТ",
       "nameEn": "Irkutsk",
       "codeEn": "IKT",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Иркутск",
           "codeRu": "ИКТ",
           "nameEn": "Irkutsk",
           "codeEn": "IKT"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Казань",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "КЗН",
       "nameEn": "Kazan",
       "codeEn": "KZN",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Казань Основной",
           "codeRu": "ККЗ",
           "nameEn": "Kazan Basics",
           "codeEn": "KZN"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Калининград",
       "countryRu": "РФ",
       "codeRu": "КЛД",
       "nameEn": "Kaliningrad",
       "codeEn": "KGD",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Калуга",
       "countryRu": "РФ",
       "codeRu": "КЛГ",
       "nameEn": "Kaluga",
       "codeEn": "KLF",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Республика Казахстан",
       "countryEn": "KZ",
       "nameRu": "Караганда",
       "countryRu": "КЗ",
       "codeRu": "КГД",
       "nameEn": "Karaganda",
       "codeEn": "KGF",
       "countryNameEn": "Kazakhstan Republic"
     },
     {
       "countryNameRu": "Италия",
       "countryEn": "IT",
       "nameRu": "Катания",
       "countryRu": "ИТ",
       "codeRu": "CTA",
       "nameEn": "Catania",
       "codeEn": "CTA",
       "countryNameEn": "Italy"
     },
     {
       "countryNameRu": "Литва",
       "countryEn": "LT",
       "nameRu": "Каунас",
       "countryRu": "ЛТ",
       "codeRu": "KUN",
       "nameEn": "Kaunas",
       "codeEn": "KUN",
       "countryNameEn": "Lithuania"
     },
     {
       "countryNameRu": "Греция",
       "countryEn": "GR",
       "nameRu": "Керкира",
       "countryRu": "ГЦ",
       "codeRu": "CFU",
       "nameEn": "Kerkyra",
       "codeEn": "CFU",
       "countryNameEn": "Greece"
     },
     {
       "countryNameRu": "Украина",
       "countryEn": "UA",
       "nameRu": "Киев",
       "countryRu": "УА",
       "codeRu": "ИЕВ",
       "nameEn": "Kiev",
       "codeEn": "IEV",
       "countryNameEn": "Ukraine"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Киров",
       "countryRu": "РФ",
       "codeRu": "КИО",
       "nameEn": "Kirov",
       "codeEn": "KVX",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Республика Молдова",
       "countryEn": "MD",
       "nameRu": "Кишинев",
       "countryRu": "МД",
       "codeRu": "КШН",
       "nameEn": "Chisinau",
       "codeEn": "KIV",
       "countryNameEn": "Moldavian Republic"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Когалым",
       "countryRu": "РФ",
       "codeRu": "КОГ",
       "nameEn": "Kogalym",
       "codeEn": "KGP",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Дания",
       "countryEn": "DK",
       "nameRu": "Копенгаген",
       "countryRu": "ДК",
       "codeRu": "ЦПХ",
       "nameEn": "Copenhagen",
       "codeEn": "CPH",
       "countryNameEn": "Denmark"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Краснодар",
       "countryRu": "РФ",
       "codeRu": "КРР",
       "nameEn": "Krasnodar",
       "codeEn": "KRR",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Пашковский",
           "codeRu": "КПА",
           "nameEn": "Pashkovskiy",
           "codeEn": "KRR"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Красноярск",
       "countryRu": "РФ",
       "codeRu": "КЯА",
       "nameEn": "Krasnoyarsk",
       "codeEn": "KJA",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Емельяново",
           "codeRu": "ЕМВ",
           "nameEn": "Emelianovo",
           "codeEn": "KJA"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Курган",
       "countryRu": "РФ",
       "codeRu": "КГН",
       "nameEn": "Kurgan",
       "codeEn": "KRO",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Курск",
       "countryRu": "РФ",
       "codeRu": "КУС",
       "nameEn": "Kursk",
       "codeEn": "URS",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Кипр",
       "countryEn": "CY",
       "nameRu": "Ларнака",
       "countryRu": "ЦЫ",
       "codeRu": "ЛРК",
       "nameEn": "Larnaca",
       "codeEn": "LCA",
       "countryNameEn": "Cyprus"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Ленск",
       "countryRu": "РФ",
       "codeRu": "ЛСК",
       "nameEn": "Lensk",
       "codeEn": "ULK",
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
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Липецк",
       "countryRu": "РФ",
       "codeRu": "ЛИП",
       "nameEn": "Lipetsk",
       "codeEn": "LPK",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Великобритания",
       "countryEn": "GB",
       "nameRu": "Лондон",
       "countryRu": "ГБ",
       "codeRu": "ЛОД",
       "nameEn": "London",
       "codeEn": "LON",
       "countryNameEn": "United Kingdom"
     },
     {
       "countryNameRu": "Украина",
       "countryEn": "UA",
       "nameRu": "Львов",
       "countryRu": "УА",
       "codeRu": "ЛВО",
       "nameEn": "Lviv",
       "codeEn": "LWO",
       "countryNameEn": "Ukraine"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Магнитогорск",
       "countryRu": "РФ",
       "codeRu": "МГС",
       "nameEn": "Magnitogorsk",
       "codeEn": "MQF",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Испания и Канарские Остро",
       "countryEn": "ES",
       "nameRu": "Мадрид",
       "countryRu": "ЕК",
       "codeRu": "МАД",
       "nameEn": "Madrid",
       "codeEn": "MAD",
       "countryNameEn": "Spain And Canary Islands"
     },
     {
       "countryNameRu": "Мальта",
       "countryEn": "MT",
       "nameRu": "Мальта",
       "countryRu": "МТ",
       "codeRu": "МАТ",
       "nameEn": "Malta",
       "codeEn": "MLA",
       "countryNameEn": "Malta"
     },
     {
       "countryNameRu": "Великобритания",
       "countryEn": "GB",
       "nameRu": "Манчестер",
       "countryRu": "ГБ",
       "codeRu": "МНЧ",
       "nameEn": "Manchester",
       "codeEn": "MAN",
       "countryNameEn": "United Kingdom"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Махачкала",
       "countryRu": "РФ",
       "codeRu": "МХЛ",
       "nameEn": "Makhachkala",
       "codeEn": "MCX",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Италия",
       "countryEn": "IT",
       "nameRu": "Милан",
       "countryRu": "ИТ",
       "codeRu": "МИА",
       "nameEn": "Milan",
       "codeEn": "MIL",
       "countryNameEn": "Italy",
       "airports": [
         {
           "nameRu": "Мальпенса",
           "codeRu": "МИМ",
           "nameEn": "Malpensa Apt",
           "codeEn": "MXP"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Минеральные Воды",
       "countryRu": "РФ",
       "codeRu": "МРВ",
       "nameEn": "Mineralnye Vody",
       "codeEn": "MRV",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Республика Беларусь",
       "countryEn": "BY",
       "nameRu": "Минск",
       "countryRu": "БЛ",
       "codeRu": "МСК",
       "nameEn": "Minsk",
       "codeEn": "MSQ",
       "countryNameEn": "Belarus",
       "airports": [
         {
           "nameRu": "Интернэйшнл",
           "codeRu": "МИК",
           "nameEn": "International",
           "codeEn": "MSQ"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Москва",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "МОВ",
       "nameEn": "Moscow",
       "codeEn": "MOW",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Домодедово",
           "codeRu": "ДМД",
           "nameEn": "Domodedovo",
           "codeEn": "DME"
         },
         {
           "nameRu": "Внуково",
           "codeRu": "ВНК",
           "nameEn": "Vnukovo",
           "codeEn": "VKO"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Мурманск",
       "countryRu": "РФ",
       "codeRu": "МУН",
       "nameEn": "Murmansk",
       "codeEn": "MMK",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Германия",
       "countryEn": "DE",
       "nameRu": "Мюнхен",
       "countryRu": "ДЕ",
       "codeRu": "МЮН",
       "nameEn": "Munich",
       "codeEn": "MUC",
       "countryNameEn": "Germany Republic",
       "airports": [
         {
           "nameRu": "Франц Жозеф Штраусс",
           "codeRu": "МЮН",
           "nameEn": "Munich International Airp",
           "codeEn": "MUC"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Надым",
       "countryRu": "РФ",
       "codeRu": "НДМ",
       "nameEn": "Nadym",
       "codeEn": "NYM",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Назрань",
       "countryRu": "РФ",
       "codeRu": "ИНШ",
       "nameEn": "Nazran",
       "codeEn": "IGT",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Назрань Магас Слепцовская",
           "codeRu": "ИНШ",
           "nameEn": "Nazran Sleptsovskaya",
           "codeEn": "IGT"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Нальчик",
       "countryRu": "РФ",
       "codeRu": "НЧК",
       "nameEn": "Nalchik",
       "codeEn": "NAL",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Нарьян-Мар",
       "countryRu": "РФ",
       "codeRu": "ННР",
       "nameEn": "Naryan-Mar",
       "codeEn": "NNM",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Азербайджанская Республик",
       "countryEn": "AZ",
       "nameRu": "Нахичевань",
       "countryRu": "АЗ",
       "codeRu": "НХЧ",
       "nameEn": "Nakchivan",
       "codeEn": "NAJ",
       "countryNameEn": "Azerbaijan"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Нижневартовск",
       "countryRu": "РФ",
       "codeRu": "НЖВ",
       "nameEn": "Nizhnevartovsk",
       "codeEn": "NJC",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Нижнекамск",
       "countryRu": "РФ",
       "codeRu": "НЖК",
       "nameEn": "Nizhnekamsk",
       "codeEn": "NBC",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Нижний Новгород",
       "countryRu": "РФ",
       "codeRu": "НЖС",
       "nameEn": "Nizhniy Novgorod",
       "codeEn": "GOJ",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Франция",
       "countryEn": "FR",
       "nameRu": "Ницца",
       "countryRu": "ФР",
       "codeRu": "НЦЕ",
       "nameEn": "Nice",
       "codeEn": "NCE",
       "countryNameEn": "France"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Новосибирск",
       "countryRu": "РФ",
       "codeRu": "ОВБ",
       "nameEn": "Novosibirsk",
       "codeEn": "OVB",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Толмачево",
           "codeRu": "ТЛЧ",
           "nameEn": "Tolmachevo",
           "codeEn": "OVB"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Новый Уренгой",
       "countryRu": "РФ",
       "codeRu": "НУР",
       "nameEn": "Novy Urengoy",
       "codeEn": "NUX",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Ноябрьск",
       "countryRu": "РФ",
       "codeRu": "НОЯ",
       "nameEn": "Noyabrsk",
       "codeEn": "NOJ",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Нягань",
       "countryRu": "РФ",
       "codeRu": "НЯГ",
       "nameEn": "Nyagan",
       "codeEn": "NYA",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Украина",
       "countryEn": "UA",
       "nameRu": "Одесса",
       "countryRu": "УА",
       "codeRu": "ОДС",
       "nameEn": "Odessa",
       "codeEn": "ODS",
       "countryNameEn": "Ukraine"
     },
     {
       "countryNameRu": "Италия",
       "countryEn": "IT",
       "nameRu": "Олбия",
       "countryRu": "ИТ",
       "codeRu": "OLB",
       "nameEn": "Olbia",
       "codeEn": "OLB",
       "countryNameEn": "Italy"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Омск",
       "countryRu": "РФ",
       "codeRu": "ОМС",
       "nameEn": "Omsk",
       "codeEn": "OMS",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Омск",
           "codeRu": "ОМС",
           "nameEn": "Omsk",
           "codeEn": "OMS"
         }
       ]
     },
     {
       "countryNameRu": "Норвегия",
       "countryEn": "NO",
       "nameRu": "Осло",
       "countryRu": "НО",
       "codeRu": "ОСЛ",
       "nameEn": "Oslo",
       "codeEn": "OSL",
       "countryNameEn": "Norway"
     },
     {
       "countryNameRu": "Республика Казахстан",
       "countryEn": "KZ",
       "nameRu": "Павлодар",
       "countryRu": "КЗ",
       "codeRu": "ПВЛ",
       "nameEn": "Pavlodar",
       "codeEn": "PWQ",
       "countryNameEn": "Kazakhstan Republic"
     },
     {
       "countryNameRu": "Литва",
       "countryEn": "LT",
       "nameRu": "Паланга-Клайпеда",
       "countryRu": "ЛТ",
       "codeRu": "ПЛГ",
       "nameEn": "Klaipeda/Palanga",
       "codeEn": "PLQ",
       "countryNameEn": "Lithuania"
     },
     {
       "countryNameRu": "Испания и Канарские Остро",
       "countryEn": "ES",
       "nameRu": "Пальма Мальорка",
       "countryRu": "ЕК",
       "codeRu": "ПМИ",
       "nameEn": "Palma Mallorca",
       "codeEn": "PMI",
       "countryNameEn": "Spain And Canary Islands"
     },
     {
       "countryNameRu": "Франция",
       "countryEn": "FR",
       "nameRu": "Париж",
       "countryRu": "ФР",
       "codeRu": "ПАЖ",
       "nameEn": "Paris",
       "codeEn": "PAR",
       "countryNameEn": "France"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Пенза",
       "countryRu": "РФ",
       "codeRu": "ПНА",
       "nameEn": "Penza",
       "codeEn": "PEZ",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Пермь",
       "countryRu": "РФ",
       "codeRu": "ПРМ",
       "nameEn": "Perm",
       "codeEn": "PEE",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Большое Савино",
           "codeRu": "ПРЬ",
           "nameEn": "Big Savino",
           "codeEn": "PEE"
         }
       ]
     },
     {
       "countryNameRu": "Словакия",
       "countryEn": "SK",
       "nameRu": "Попрад Татры",
       "countryRu": "СЧ",
       "codeRu": "ТАТ",
       "nameEn": "Poprad/Tatry",
       "codeEn": "TAT",
       "countryNameEn": "Slovakia"
     },
     {
       "countryNameRu": "Чешская Республика",
       "countryEn": "CZ",
       "nameRu": "Прага",
       "countryRu": "ЦЗ",
       "codeRu": "ПРХ",
       "nameEn": "Prague",
       "codeEn": "PRG",
       "countryNameEn": "Czech Republic"
     },
     {
       "countryNameRu": "Исландия",
       "countryEn": "IS",
       "nameRu": "Рейкьявик",
       "countryRu": "ИС",
       "codeRu": "REK",
       "nameEn": "Reykjavik",
       "codeEn": "REK",
       "countryNameEn": "Iceland"
     },
     {
       "countryNameRu": "Латвия",
       "countryEn": "LV",
       "nameRu": "Рига",
       "countryRu": "ЛВ",
       "codeRu": "РИХ",
       "nameEn": "Riga",
       "codeEn": "RIX",
       "countryNameEn": "Latvia"
     },
     {
       "countryNameRu": "Хорватия",
       "countryEn": "HR",
       "nameRu": "Риека",
       "countryRu": "ХР",
       "codeRu": "RJK",
       "nameEn": "Rijeka",
       "codeEn": "RJK",
       "countryNameEn": "Croatia"
     },
     {
       "countryNameRu": "Италия",
       "countryEn": "IT",
       "nameRu": "Рим",
       "countryRu": "ИТ",
       "codeRu": "РОМ",
       "nameEn": "Rome",
       "codeEn": "ROM",
       "countryNameEn": "Italy"
     },
     {
       "countryNameRu": "Греция",
       "countryEn": "GR",
       "nameRu": "Родос",
       "countryRu": "ГЦ",
       "codeRu": "RHO",
       "nameEn": "Rhodes",
       "codeEn": "RHO",
       "countryNameEn": "Greece"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Ростов-на-Дону",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "РОВ",
       "nameEn": "Rostov",
       "codeEn": "ROV",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Платов",
           "codeRu": "РОВ",
           "nameEn": "Platov",
           "codeEn": "ROV"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Сабетта",
       "countryRu": "РФ",
       "codeRu": "СБТ",
       "nameEn": "Sabetta",
       "codeEn": "SBT",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Греция",
       "countryEn": "GR",
       "nameRu": "Салоники",
       "countryRu": "ГЦ",
       "codeRu": "СКГ",
       "nameEn": "Thessaloniki",
       "codeEn": "SKG",
       "countryNameEn": "Greece"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Самара",
       "countryRu": "РФ",
       "codeRu": "СМШ",
       "nameEn": "Samara",
       "codeEn": "KUF",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Курумоч",
           "codeRu": "СКЧ",
           "nameEn": "Kurumoch",
           "codeEn": "KUF"
         }
       ]
     },
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
       "countryNameRu": "Турция",
       "countryEn": "TR",
       "nameRu": "Самсун",
       "countryRu": "ТР",
       "codeRu": "SZF",
       "nameEn": "Samsun",
       "codeEn": "SZF",
       "countryNameEn": "Turkey",
       "airports": [
         {
           "nameRu": "Samsun Carsamba Airport",
           "codeRu": "SZF",
           "nameEn": "Samsun Carsamba Airport",
           "codeEn": "SZF"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Санкт-Петербург",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "СПТ",
       "nameEn": "St Petersburg",
       "codeEn": "LED",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Пулково",
           "codeRu": "ПЛК",
           "nameEn": "Pulkovo",
           "codeEn": "LED"
         }
       ]
     },
     {
       "countryNameRu": "Китай",
       "countryEn": "CN",
       "nameRu": "Санья",
       "countryRu": "ЦН",
       "codeRu": "СЬЯ",
       "nameEn": "Sanya",
       "codeEn": "SYX",
       "countryNameEn": "China"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Саратов",
       "countryRu": "РФ",
       "codeRu": "СРО",
       "nameEn": "Saratov",
       "codeEn": "RTW",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Советский",
       "countryRu": "РФ",
       "codeRu": "СОЙ",
       "nameEn": "Sovetsky",
       "codeEn": "OVS",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Сочи",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "СОЧ",
       "nameEn": "Sochi",
       "codeEn": "AER",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Норвегия",
       "countryEn": "NO",
       "nameRu": "Ставангер",
       "countryRu": "НО",
       "codeRu": "SVG",
       "nameEn": "Stavanger",
       "codeEn": "SVG",
       "countryNameEn": "Norway"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Ставрополь",
       "countryRu": "РФ",
       "codeRu": "СТВ",
       "nameEn": "Stavropol",
       "codeEn": "STW",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Турция",
       "countryEn": "TR",
       "nameRu": "Стамбул",
       "countryRu": "ТР",
       "direct": true,
       "codeRu": "ИСТ",
       "nameEn": "Istanbul",
       "codeEn": "IST",
       "countryNameEn": "Turkey",
       "airports": [
         {
           "nameRu": "Ататурк",
           "codeRu": "ИСТ",
           "nameEn": "Istanbul Ataturk Airport",
           "codeEn": "IST"
         }
       ]
     },
     {
       "countryNameRu": "Швеция",
       "countryEn": "SE",
       "nameRu": "Стокгольм",
       "countryRu": "СЕ",
       "codeRu": "СТО",
       "nameEn": "Stockholm",
       "codeEn": "STO",
       "countryNameEn": "Sweden"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Сургут",
       "countryRu": "РФ",
       "codeRu": "СУР",
       "nameEn": "Surgut",
       "codeEn": "SGC",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Сыктывкар",
       "countryRu": "РФ",
       "codeRu": "СЫВ",
       "nameEn": "Syktyvkar",
       "codeEn": "SCW",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Талакан",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ТЛК",
       "nameEn": "Talakan",
       "codeEn": "TLK",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Эстония",
       "countryEn": "EE",
       "nameRu": "Таллинн",
       "countryRu": "ЕЕ",
       "codeRu": "TLL",
       "nameEn": "Tallinn",
       "codeEn": "TLL",
       "countryNameEn": "Estonia"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Тамбов",
       "countryRu": "РФ",
       "codeRu": "ТМБ",
       "nameEn": "Tambov",
       "codeEn": "TBW",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Финляндия",
       "countryEn": "FI",
       "nameRu": "Тампере",
       "countryRu": "ФИ",
       "codeRu": "ТПР",
       "nameEn": "Tampere",
       "codeEn": "TMP",
       "countryNameEn": "Finland"
     },
     {
       "countryNameRu": "Республика Узбекистан",
       "countryEn": "UZ",
       "nameRu": "Ташкент",
       "countryRu": "УЗ",
       "codeRu": "ТАС",
       "nameEn": "Tashkent",
       "codeEn": "TAS",
       "countryNameEn": "Uzbekistan Republic",
       "airports": [
         {
           "nameRu": "Ташкент Интернэйшнл",
           "codeRu": "ТАС",
           "nameEn": "International",
           "codeEn": "TAS"
         }
       ]
     },
     {
       "countryNameRu": "Республика Грузия",
       "countryEn": "GE",
       "nameRu": "Тбилиси",
       "countryRu": "ГР",
       "codeRu": "ТБС",
       "nameEn": "Tbilisi",
       "codeEn": "TBS",
       "countryNameEn": "Georgia Republic"
     },
     {
       "countryNameRu": "Израиль",
       "countryEn": "IL",
       "nameRu": "Тель-Авив",
       "countryRu": "ИЛ",
       "codeRu": "ТЛЯ",
       "nameEn": "Tel Aviv",
       "codeEn": "TLV",
       "countryNameEn": "Israel"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Томск",
       "countryRu": "РФ",
       "codeRu": "ТСК",
       "nameEn": "Tomsk",
       "codeEn": "TOF",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Финляндия",
       "countryEn": "FI",
       "nameRu": "Турку",
       "countryRu": "ФИ",
       "codeRu": "TKU",
       "nameEn": "Turku",
       "codeEn": "TKU",
       "countryNameEn": "Finland"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Тюмень",
       "countryRu": "РФ",
       "codeRu": "ТЮМ",
       "nameEn": "Tyumen",
       "codeEn": "TJM",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Рощино",
           "codeRu": "РЩН",
           "nameEn": "Roschino",
           "codeEn": "TJM"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Улан-Удэ",
       "countryRu": "РФ",
       "codeRu": "УЛЭ",
       "nameEn": "Ulan-Ude",
       "codeEn": "UUD",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Ульяновск",
       "countryRu": "РФ",
       "codeRu": "УЛК",
       "nameEn": "Ulyanovsk",
       "codeEn": "ULY",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Ульяновск Баратаевка",
           "codeRu": "УЛК",
           "nameEn": "Ulianovsk Barataevka",
           "codeEn": "ULV"
         },
         {
           "nameRu": "Восточный",
           "codeRu": "УЛС",
           "nameEn": "Vostochniy",
           "codeEn": "ULY"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Урай",
       "countryRu": "РФ",
       "codeRu": "УРА",
       "nameEn": "Uraj",
       "codeEn": "URJ",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Усинск",
       "countryRu": "РФ",
       "codeRu": "УСН",
       "nameEn": "Usinsk",
       "codeEn": "USK",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Усть Кут",
       "countryRu": "РФ",
       "codeRu": "УСК",
       "nameEn": "Ust-Kut",
       "codeEn": "UKX",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Уфа",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "УФА",
       "nameEn": "Ufa",
       "codeEn": "UFA",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Уфа",
           "codeRu": "УФА",
           "nameEn": "Ufa",
           "codeEn": "UFA"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Ухта",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "УХТ",
       "nameEn": "Ukhta",
       "codeEn": "UCT",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Республика Узбекистан",
       "countryEn": "UZ",
       "nameRu": "Фергана",
       "countryRu": "УЗ",
       "codeRu": "ФГН",
       "nameEn": "Fergana",
       "codeEn": "FEG",
       "countryNameEn": "Uzbekistan Republic"
     },
     {
       "countryNameRu": "Германия",
       "countryEn": "DE",
       "nameRu": "Франкфурт-на-Майне",
       "countryRu": "ДЕ",
       "codeRu": "ФРА",
       "nameEn": "Frankfurt",
       "codeEn": "FRA",
       "countryNameEn": "Germany Republic"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Ханты-Мансийск",
       "countryRu": "РФ",
       "codeRu": "ХАС",
       "nameEn": "Khanty-Mansiysk",
       "codeEn": "HMA",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Украина",
       "countryEn": "UA",
       "nameRu": "Харьков",
       "countryRu": "УА",
       "codeRu": "ХРК",
       "nameEn": "Kharkiv",
       "codeEn": "HRK",
       "countryNameEn": "Ukraine"
     },
     {
       "countryNameRu": "Финляндия",
       "countryEn": "FI",
       "nameRu": "Хельсинки",
       "countryRu": "ФИ",
       "codeRu": "ХЕЛ",
       "nameEn": "Helsinki",
       "codeEn": "HEL",
       "countryNameEn": "Finland"
     },
     {
       "countryNameRu": "Республика Таджикистан",
       "countryEn": "TJ",
       "nameRu": "Худжанд",
       "countryRu": "ТД",
       "codeRu": "ХДТ",
       "nameEn": "Khudzhand",
       "codeEn": "LBD",
       "countryNameEn": "Tajikistan Republic"
     },
     {
       "countryNameRu": "Швейцария",
       "countryEn": "CH",
       "nameRu": "Цюрих",
       "countryRu": "ЦХ",
       "codeRu": "ЦРХ",
       "nameEn": "Zurich",
       "codeEn": "ZRH",
       "countryNameEn": "Switzerland"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Чебоксары",
       "countryRu": "РФ",
       "codeRu": "ЧБЕ",
       "nameEn": "Cheboksary",
       "codeEn": "CSY",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Республика Казахстан",
       "countryEn": "KZ",
       "nameRu": "Шымкент",
       "countryRu": "КЗ",
       "codeRu": "ШМТ",
       "nameEn": "Shymkent",
       "codeEn": "CIT",
       "countryNameEn": "Kazakhstan Republic"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Элиста",
       "countryRu": "РФ",
       "codeRu": "ЭЛИ",
       "nameEn": "Elista",
       "codeEn": "ESL",
       "countryNameEn": "Russian Federation"
     }
   ]
 }
 @apiSuccessExample {json} С параметрами {"returnPoints": "destintaion", "cityCode": "MOW", "isBooking": "true"}:
 {
   "destination": [
     {
       "countryNameRu": "Великобритания",
       "countryEn": "GB",
       "nameRu": "Абердин",
       "countryRu": "ГБ",
       "codeRu": "ABZ",
       "nameEn": "Aberdeen",
       "codeEn": "ABZ",
       "countryNameEn": "United Kingdom"
     },
     {
       "countryNameRu": "Объединенные Арабские Эми",
       "countryEn": "AE",
       "nameRu": "Абу Даби",
       "countryRu": "АЕ",
       "codeRu": "АУХ",
       "nameEn": "Abu Dhabi",
       "codeEn": "AUH",
       "countryNameEn": "United Arab Emirates"
     },
     {
       "countryNameRu": "Республика Казахстан",
       "countryEn": "KZ",
       "nameRu": "Актау",
       "countryRu": "КЗ",
       "codeRu": "ААУ",
       "nameEn": "Aktau",
       "codeEn": "SCO",
       "countryNameEn": "Kazakhstan Republic"
     },
     {
       "countryNameRu": "Республика Казахстан",
       "countryEn": "KZ",
       "nameRu": "Алматы",
       "countryRu": "КЗ",
       "codeRu": "АЛА",
       "nameEn": "Almaty",
       "codeEn": "ALA",
       "countryNameEn": "Kazakhstan Republic"
     },
     {
       "countryNameRu": "Нидерланды",
       "countryEn": "NL",
       "nameRu": "Амстердам",
       "countryRu": "НЛ",
       "codeRu": "АМС",
       "nameEn": "Amsterdam",
       "codeEn": "AMS",
       "countryNameEn": "Netherlands"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Анадырь",
       "countryRu": "РФ",
       "direct": true,
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
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Анапа",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "АНА",
       "nameEn": "Anapa",
       "codeEn": "AAQ",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Анапа Витязево",
           "codeRu": "АНА",
           "nameEn": "Anapa",
           "codeEn": "AAQ"
         }
       ]
     },
     {
       "countryNameRu": "Турция",
       "countryEn": "TR",
       "nameRu": "Анталья",
       "countryRu": "ТР",
       "direct": true,
       "codeRu": "АЯТ",
       "nameEn": "Antalya",
       "codeEn": "AYT",
       "countryNameEn": "Turkey"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Архангельск",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "АРХ",
       "nameEn": "Arkhangelsk",
       "codeEn": "ARH",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Талаги",
           "codeRu": "АХГ",
           "nameEn": "Talagi",
           "codeEn": "ARH"
         }
       ]
     },
     {
       "countryNameRu": "Республика Казахстан",
       "countryEn": "KZ",
       "nameRu": "Астана",
       "countryRu": "КЗ",
       "codeRu": "АКЛ",
       "nameEn": "Astana",
       "codeEn": "TSE",
       "countryNameEn": "Kazakhstan Republic"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Астрахань",
       "countryRu": "РФ",
       "codeRu": "АСР",
       "nameEn": "Astrakhan",
       "codeEn": "ASF",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Греция",
       "countryEn": "GR",
       "nameRu": "Афины",
       "countryRu": "ГЦ",
       "codeRu": "АТХ",
       "nameEn": "Athens",
       "codeEn": "ATH",
       "countryNameEn": "Greece"
     },
     {
       "countryNameRu": "Туркменистан",
       "countryEn": "TM",
       "nameRu": "Ашгабад",
       "countryRu": "ТМ",
       "codeRu": "АШХ",
       "nameEn": "Ashgabat",
       "codeEn": "ASB",
       "countryNameEn": "Turkmenistan"
     },
     {
       "countryNameRu": "Азербайджанская Республик",
       "countryEn": "AZ",
       "nameRu": "Баку",
       "countryRu": "АЗ",
       "direct": true,
       "codeRu": "БАК",
       "nameEn": "Baku",
       "codeEn": "BAK",
       "countryNameEn": "Azerbaijan",
       "airports": [
         {
           "nameRu": "Ап Гейдар Алиев",
           "codeRu": "БАК",
           "nameEn": "Heydar Aliyev",
           "codeEn": "GYD"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Барнаул",
       "countryRu": "РФ",
       "codeRu": "БАН",
       "nameEn": "Barnaul",
       "codeEn": "BAX",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Испания и Канарские Остро",
       "countryEn": "ES",
       "nameRu": "Барселона",
       "countryRu": "ЕК",
       "codeRu": "БЦН",
       "nameEn": "Barcelona",
       "codeEn": "BCN",
       "countryNameEn": "Spain And Canary Islands"
     },
     {
       "countryNameRu": "Республика Грузия",
       "countryEn": "GE",
       "nameRu": "Батуми",
       "countryRu": "ГР",
       "codeRu": "БУИ",
       "nameEn": "Batumi",
       "codeEn": "BUS",
       "countryNameEn": "Georgia Republic"
     },
     {
       "countryNameRu": "Ливан",
       "countryEn": "LB",
       "nameRu": "Бейрут",
       "countryRu": "ЛБ",
       "codeRu": "БЕУ",
       "nameEn": "Beirut",
       "codeEn": "BEY",
       "countryNameEn": "Lebanon"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Белгород",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "БЕД",
       "nameEn": "Belgorod",
       "codeEn": "EGO",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Сербия",
       "countryEn": "RS",
       "nameRu": "Белград",
       "countryRu": "РС",
       "codeRu": "БГА",
       "nameEn": "Belgrade",
       "codeEn": "BEG",
       "countryNameEn": "Serbia"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Белоярский",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "БЛР",
       "nameEn": "Beloyarsky",
       "codeEn": "EYK",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Березово",
       "countryRu": "РФ",
       "codeRu": "БЕР",
       "nameEn": "Berezovo",
       "codeEn": "EZV",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Германия",
       "countryEn": "DE",
       "nameRu": "Берлин",
       "countryRu": "ДЕ",
       "direct": true,
       "codeRu": "БРЛ",
       "nameEn": "Berlin",
       "codeEn": "BER",
       "countryNameEn": "Germany Republic",
       "airports": [
         {
           "nameRu": "Тегель",
           "codeRu": "TXL",
           "nameEn": "Berlin Tegel Apt",
           "codeEn": "TXL"
         }
       ]
     },
     {
       "countryNameRu": "Дания",
       "countryEn": "DK",
       "nameRu": "Биллунд",
       "countryRu": "ДК",
       "codeRu": "БЛЛ",
       "nameEn": "Billund",
       "codeEn": "BLL",
       "countryNameEn": "Denmark"
     },
     {
       "countryNameRu": "Республика Беларусь",
       "countryEn": "BY",
       "nameRu": "Брест",
       "countryRu": "БЛ",
       "codeRu": "БРТ",
       "nameEn": "Brest",
       "codeEn": "BQT",
       "countryNameEn": "Belarus"
     },
     {
       "countryNameRu": "Бельгия",
       "countryEn": "BE",
       "nameRu": "Брюссель",
       "countryRu": "БЕ",
       "codeRu": "БРЮ",
       "nameEn": "Brussels",
       "codeEn": "BRU",
       "countryNameEn": "Belgium"
     },
     {
       "countryNameRu": "Венгрия",
       "countryEn": "HU",
       "nameRu": "Будапешт",
       "countryRu": "ХУ",
       "codeRu": "БУД",
       "nameEn": "Budapest",
       "codeEn": "BUD",
       "countryNameEn": "Hungary"
     },
     {
       "countryNameRu": "Республика Узбекистан",
       "countryEn": "UZ",
       "nameRu": "Бухара",
       "countryRu": "УЗ",
       "direct": true,
       "codeRu": "БУА",
       "nameEn": "Bukhara",
       "codeEn": "BHK",
       "countryNameEn": "Uzbekistan Republic"
     },
     {
       "countryNameRu": "Польша",
       "countryEn": "PL",
       "nameRu": "Варшава",
       "countryRu": "ПЛ",
       "codeRu": "ВАВ",
       "nameEn": "Warsaw",
       "codeEn": "WAW",
       "countryNameEn": "Poland"
     },
     {
       "countryNameRu": "Австрия",
       "countryEn": "AT",
       "nameRu": "Вена",
       "countryRu": "АТ",
       "direct": true,
       "codeRu": "ВЕН",
       "nameEn": "Vienna",
       "codeEn": "VIE",
       "countryNameEn": "Austria",
       "airports": [
         {
           "nameRu": "Вена Международный",
           "codeRu": "ВЕН",
           "nameEn": "Vienna Intl",
           "codeEn": "VIE"
         }
       ]
     },
     {
       "countryNameRu": "Италия",
       "countryEn": "IT",
       "nameRu": "Венеция",
       "countryRu": "ИТ",
       "codeRu": "ВЕЦ",
       "nameEn": "Venice",
       "codeEn": "VCE",
       "countryNameEn": "Italy"
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
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Владикавказ",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ВЛА",
       "nameEn": "Vladikavkaz",
       "codeEn": "OGZ",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Волгоград",
       "countryRu": "РФ",
       "codeRu": "ВГГ",
       "nameEn": "Volgograd",
       "codeEn": "VOG",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Воркута",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ВКТ",
       "nameEn": "Vorkuta",
       "codeEn": "VKT",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Воронеж",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ВРН",
       "nameEn": "Voronezh",
       "codeEn": "VOZ",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Германия",
       "countryEn": "DE",
       "nameRu": "Гамбург",
       "countryRu": "ДЕ",
       "codeRu": "ГАМ",
       "nameEn": "Hamburg",
       "codeEn": "HAM",
       "countryNameEn": "Germany Republic"
     },
     {
       "countryNameRu": "Германия",
       "countryEn": "DE",
       "nameRu": "Ганновер",
       "countryRu": "ДЕ",
       "codeRu": "ХАЙ",
       "nameEn": "Hanover",
       "codeEn": "HAJ",
       "countryNameEn": "Germany Republic"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Геленджик",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ГДЖ",
       "nameEn": "Gelendzik",
       "codeEn": "GDZ",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Швеция",
       "countryEn": "SE",
       "nameRu": "Гетеборг",
       "countryRu": "СЕ",
       "codeRu": "GOT",
       "nameEn": "Gothenburg",
       "codeEn": "GOT",
       "countryNameEn": "Sweden"
     },
     {
       "countryNameRu": "Республика Беларусь",
       "countryEn": "BY",
       "nameRu": "Гродно",
       "countryRu": "БЛ",
       "codeRu": "ГРД",
       "nameEn": "Grodno",
       "codeEn": "GNA",
       "countryNameEn": "Belarus"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Грозный",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ГРН",
       "nameEn": "Groznyj",
       "codeEn": "GRV",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Азербайджанская Республик",
       "countryEn": "AZ",
       "nameRu": "Гянджа",
       "countryRu": "АЗ",
       "direct": true,
       "codeRu": "ГНЖ",
       "nameEn": "Gyandzha",
       "codeEn": "KVD",
       "countryNameEn": "Azerbaijan"
     },
     {
       "countryNameRu": "Хорватия",
       "countryEn": "HR",
       "nameRu": "Дубровник",
       "countryRu": "ХР",
       "codeRu": "ДБИ",
       "nameEn": "Dubrovnik",
       "codeEn": "DBV",
       "countryNameEn": "Croatia"
     },
     {
       "countryNameRu": "Республика Таджикистан",
       "countryEn": "TJ",
       "nameRu": "Душанбе",
       "countryRu": "ТД",
       "direct": true,
       "codeRu": "ДШБ",
       "nameEn": "Dushanbe",
       "codeEn": "DYU",
       "countryNameEn": "Tajikistan Republic"
     },
     {
       "countryNameRu": "Германия",
       "countryEn": "DE",
       "nameRu": "Дюссельдорф",
       "countryRu": "ДЕ",
       "codeRu": "ДУС",
       "nameEn": "Dusseldorf",
       "codeEn": "DUS",
       "countryNameEn": "Germany Republic"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Екатеринбург",
       "countryRu": "РФ",
       "codeRu": "ЕКБ",
       "nameEn": "Ekaterinburg",
       "codeEn": "SVX",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Кольцово",
           "codeRu": "ЕКБ",
           "nameEn": "Koltsovo",
           "codeEn": "SVX"
         }
       ]
     },
     {
       "countryNameRu": "Республика Армения",
       "countryEn": "AM",
       "nameRu": "Ереван",
       "countryRu": "АМ",
       "direct": true,
       "codeRu": "ЕВН",
       "nameEn": "Yerevan",
       "codeEn": "EVN",
       "countryNameEn": "Armenian Republic",
       "airports": [
         {
           "nameRu": "Звартноц",
           "codeRu": "ЗВР",
           "nameEn": "Zvartnots",
           "codeEn": "EVN"
         }
       ]
     },
     {
       "countryNameRu": "Швейцария",
       "countryEn": "CH",
       "nameRu": "Женева",
       "countryRu": "ЦХ",
       "codeRu": "ГЖА",
       "nameEn": "Geneva",
       "codeEn": "GVA",
       "countryNameEn": "Switzerland"
     },
     {
       "countryNameRu": "Австрия",
       "countryEn": "AT",
       "nameRu": "Зальцбург",
       "countryRu": "АТ",
       "codeRu": "ЗЦГ",
       "nameEn": "Salzburg",
       "codeEn": "SZG",
       "countryNameEn": "Austria"
     },
     {
       "countryNameRu": "Украина",
       "countryEn": "UA",
       "nameRu": "Запорожье",
       "countryRu": "УА",
       "codeRu": "ЗПЖ",
       "nameEn": "Zaporozhye",
       "codeEn": "OZH",
       "countryNameEn": "Ukraine"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Иваново",
       "countryRu": "РФ",
       "codeRu": "ИВВ",
       "nameEn": "Ivanovo",
       "codeEn": "IWA",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Игрим",
       "countryRu": "РФ",
       "codeRu": "ИРМ",
       "nameEn": "Igrim",
       "codeEn": "IRM",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Ижевск",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ИЖВ",
       "nameEn": "Izhevsk",
       "codeEn": "IJK",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Иркутск",
       "countryRu": "РФ",
       "codeRu": "ИКТ",
       "nameEn": "Irkutsk",
       "codeEn": "IKT",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Иркутск",
           "codeRu": "ИКТ",
           "nameEn": "Irkutsk",
           "codeEn": "IKT"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Казань",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "КЗН",
       "nameEn": "Kazan",
       "codeEn": "KZN",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Казань Основной",
           "codeRu": "ККЗ",
           "nameEn": "Kazan Basics",
           "codeEn": "KZN"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Калининград",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "КЛД",
       "nameEn": "Kaliningrad",
       "codeEn": "KGD",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Республика Казахстан",
       "countryEn": "KZ",
       "nameRu": "Караганда",
       "countryRu": "КЗ",
       "codeRu": "КГД",
       "nameEn": "Karaganda",
       "codeEn": "KGF",
       "countryNameEn": "Kazakhstan Republic"
     },
     {
       "countryNameRu": "Италия",
       "countryEn": "IT",
       "nameRu": "Катания",
       "countryRu": "ИТ",
       "codeRu": "CTA",
       "nameEn": "Catania",
       "codeEn": "CTA",
       "countryNameEn": "Italy"
     },
     {
       "countryNameRu": "Литва",
       "countryEn": "LT",
       "nameRu": "Каунас",
       "countryRu": "ЛТ",
       "codeRu": "KUN",
       "nameEn": "Kaunas",
       "codeEn": "KUN",
       "countryNameEn": "Lithuania"
     },
     {
       "countryNameRu": "Украина",
       "countryEn": "UA",
       "nameRu": "Киев",
       "countryRu": "УА",
       "codeRu": "ИЕВ",
       "nameEn": "Kiev",
       "codeEn": "IEV",
       "countryNameEn": "Ukraine"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Киров",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "КИО",
       "nameEn": "Kirov",
       "codeEn": "KVX",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Когалым",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "КОГ",
       "nameEn": "Kogalym",
       "codeEn": "KGP",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Дания",
       "countryEn": "DK",
       "nameRu": "Копенгаген",
       "countryRu": "ДК",
       "codeRu": "ЦПХ",
       "nameEn": "Copenhagen",
       "codeEn": "CPH",
       "countryNameEn": "Denmark"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Краснодар",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "КРР",
       "nameEn": "Krasnodar",
       "codeEn": "KRR",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Пашковский",
           "codeRu": "КПА",
           "nameEn": "Pashkovskiy",
           "codeEn": "KRR"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Красноярск",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "КЯА",
       "nameEn": "Krasnoyarsk",
       "codeEn": "KJA",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Емельяново",
           "codeRu": "ЕМВ",
           "nameEn": "Emelianovo",
           "codeEn": "KJA"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Курган",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "КГН",
       "nameEn": "Kurgan",
       "codeEn": "KRO",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Курск",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "КУС",
       "nameEn": "Kursk",
       "codeEn": "URS",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Кипр",
       "countryEn": "CY",
       "nameRu": "Ларнака",
       "countryRu": "ЦЫ",
       "codeRu": "ЛРК",
       "nameEn": "Larnaca",
       "codeEn": "LCA",
       "countryNameEn": "Cyprus"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Ленск",
       "countryRu": "РФ",
       "codeRu": "ЛСК",
       "nameEn": "Lensk",
       "codeEn": "ULK",
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
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Липецк",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ЛИП",
       "nameEn": "Lipetsk",
       "codeEn": "LPK",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Великобритания",
       "countryEn": "GB",
       "nameRu": "Лондон",
       "countryRu": "ГБ",
       "codeRu": "ЛОД",
       "nameEn": "London",
       "codeEn": "LON",
       "countryNameEn": "United Kingdom"
     },
     {
       "countryNameRu": "Украина",
       "countryEn": "UA",
       "nameRu": "Львов",
       "countryRu": "УА",
       "codeRu": "ЛВО",
       "nameEn": "Lviv",
       "codeEn": "LWO",
       "countryNameEn": "Ukraine"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Магнитогорск",
       "countryRu": "РФ",
       "codeRu": "МГС",
       "nameEn": "Magnitogorsk",
       "codeEn": "MQF",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Испания и Канарские Остро",
       "countryEn": "ES",
       "nameRu": "Мадрид",
       "countryRu": "ЕК",
       "codeRu": "МАД",
       "nameEn": "Madrid",
       "codeEn": "MAD",
       "countryNameEn": "Spain And Canary Islands"
     },
     {
       "countryNameRu": "Мальта",
       "countryEn": "MT",
       "nameRu": "Мальта",
       "countryRu": "МТ",
       "codeRu": "МАТ",
       "nameEn": "Malta",
       "codeEn": "MLA",
       "countryNameEn": "Malta"
     },
     {
       "countryNameRu": "Великобритания",
       "countryEn": "GB",
       "nameRu": "Манчестер",
       "countryRu": "ГБ",
       "codeRu": "МНЧ",
       "nameEn": "Manchester",
       "codeEn": "MAN",
       "countryNameEn": "United Kingdom"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Махачкала",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "МХЛ",
       "nameEn": "Makhachkala",
       "codeEn": "MCX",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Италия",
       "countryEn": "IT",
       "nameRu": "Милан",
       "countryRu": "ИТ",
       "direct": true,
       "codeRu": "МИА",
       "nameEn": "Milan",
       "codeEn": "MIL",
       "countryNameEn": "Italy",
       "airports": [
         {
           "nameRu": "Мальпенса",
           "codeRu": "МИМ",
           "nameEn": "Malpensa Apt",
           "codeEn": "MXP"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Минеральные Воды",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "МРВ",
       "nameEn": "Mineralnye Vody",
       "codeEn": "MRV",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Республика Беларусь",
       "countryEn": "BY",
       "nameRu": "Минск",
       "countryRu": "БЛ",
       "direct": true,
       "codeRu": "МСК",
       "nameEn": "Minsk",
       "codeEn": "MSQ",
       "countryNameEn": "Belarus",
       "airports": [
         {
           "nameRu": "Интернэйшнл",
           "codeRu": "МИК",
           "nameEn": "International",
           "codeEn": "MSQ"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Мурманск",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "МУН",
       "nameEn": "Murmansk",
       "codeEn": "MMK",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Германия",
       "countryEn": "DE",
       "nameRu": "Мюнхен",
       "countryRu": "ДЕ",
       "direct": true,
       "codeRu": "МЮН",
       "nameEn": "Munich",
       "codeEn": "MUC",
       "countryNameEn": "Germany Republic",
       "airports": [
         {
           "nameRu": "Франц Жозеф Штраусс",
           "codeRu": "МЮН",
           "nameEn": "Munich International Airp",
           "codeEn": "MUC"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Назрань",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ИНШ",
       "nameEn": "Nazran",
       "codeEn": "IGT",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Назрань Магас Слепцовская",
           "codeRu": "ИНШ",
           "nameEn": "Nazran Sleptsovskaya",
           "codeEn": "IGT"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Нальчик",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "НЧК",
       "nameEn": "Nalchik",
       "codeEn": "NAL",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Нарьян-Мар",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ННР",
       "nameEn": "Naryan-Mar",
       "codeEn": "NNM",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Азербайджанская Республик",
       "countryEn": "AZ",
       "nameRu": "Нахичевань",
       "countryRu": "АЗ",
       "direct": true,
       "codeRu": "НХЧ",
       "nameEn": "Nakchivan",
       "codeEn": "NAJ",
       "countryNameEn": "Azerbaijan"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Нижневартовск",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "НЖВ",
       "nameEn": "Nizhnevartovsk",
       "codeEn": "NJC",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Нижнекамск",
       "countryRu": "РФ",
       "codeRu": "НЖК",
       "nameEn": "Nizhnekamsk",
       "codeEn": "NBC",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Нижний Новгород",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "НЖС",
       "nameEn": "Nizhniy Novgorod",
       "codeEn": "GOJ",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Франция",
       "countryEn": "FR",
       "nameRu": "Ницца",
       "countryRu": "ФР",
       "codeRu": "НЦЕ",
       "nameEn": "Nice",
       "codeEn": "NCE",
       "countryNameEn": "France"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Новосибирск",
       "countryRu": "РФ",
       "codeRu": "ОВБ",
       "nameEn": "Novosibirsk",
       "codeEn": "OVB",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Толмачево",
           "codeRu": "ТЛЧ",
           "nameEn": "Tolmachevo",
           "codeEn": "OVB"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Новый Уренгой",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "НУР",
       "nameEn": "Novy Urengoy",
       "codeEn": "NUX",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Ноябрьск",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "НОЯ",
       "nameEn": "Noyabrsk",
       "codeEn": "NOJ",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Нягань",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "НЯГ",
       "nameEn": "Nyagan",
       "codeEn": "NYA",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Украина",
       "countryEn": "UA",
       "nameRu": "Одесса",
       "countryRu": "УА",
       "codeRu": "ОДС",
       "nameEn": "Odessa",
       "codeEn": "ODS",
       "countryNameEn": "Ukraine"
     },
     {
       "countryNameRu": "Италия",
       "countryEn": "IT",
       "nameRu": "Олбия",
       "countryRu": "ИТ",
       "codeRu": "OLB",
       "nameEn": "Olbia",
       "codeEn": "OLB",
       "countryNameEn": "Italy"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Омск",
       "countryRu": "РФ",
       "codeRu": "ОМС",
       "nameEn": "Omsk",
       "codeEn": "OMS",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Омск",
           "codeRu": "ОМС",
           "nameEn": "Omsk",
           "codeEn": "OMS"
         }
       ]
     },
     {
       "countryNameRu": "Норвегия",
       "countryEn": "NO",
       "nameRu": "Осло",
       "countryRu": "НО",
       "codeRu": "ОСЛ",
       "nameEn": "Oslo",
       "codeEn": "OSL",
       "countryNameEn": "Norway"
     },
     {
       "countryNameRu": "Республика Казахстан",
       "countryEn": "KZ",
       "nameRu": "Павлодар",
       "countryRu": "КЗ",
       "codeRu": "ПВЛ",
       "nameEn": "Pavlodar",
       "codeEn": "PWQ",
       "countryNameEn": "Kazakhstan Republic"
     },
     {
       "countryNameRu": "Литва",
       "countryEn": "LT",
       "nameRu": "Паланга-Клайпеда",
       "countryRu": "ЛТ",
       "direct": true,
       "codeRu": "ПЛГ",
       "nameEn": "Klaipeda/Palanga",
       "codeEn": "PLQ",
       "countryNameEn": "Lithuania"
     },
     {
       "countryNameRu": "Испания и Канарские Остро",
       "countryEn": "ES",
       "nameRu": "Пальма Мальорка",
       "countryRu": "ЕК",
       "codeRu": "ПМИ",
       "nameEn": "Palma Mallorca",
       "codeEn": "PMI",
       "countryNameEn": "Spain And Canary Islands"
     },
     {
       "countryNameRu": "Франция",
       "countryEn": "FR",
       "nameRu": "Париж",
       "countryRu": "ФР",
       "codeRu": "ПАЖ",
       "nameEn": "Paris",
       "codeEn": "PAR",
       "countryNameEn": "France"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Пенза",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ПНА",
       "nameEn": "Penza",
       "codeEn": "PEZ",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Пермь",
       "countryRu": "РФ",
       "codeRu": "ПРМ",
       "nameEn": "Perm",
       "codeEn": "PEE",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Большое Савино",
           "codeRu": "ПРЬ",
           "nameEn": "Big Savino",
           "codeEn": "PEE"
         }
       ]
     },
     {
       "countryNameRu": "Чешская Республика",
       "countryEn": "CZ",
       "nameRu": "Прага",
       "countryRu": "ЦЗ",
       "codeRu": "ПРХ",
       "nameEn": "Prague",
       "codeEn": "PRG",
       "countryNameEn": "Czech Republic"
     },
     {
       "countryNameRu": "Исландия",
       "countryEn": "IS",
       "nameRu": "Рейкьявик",
       "countryRu": "ИС",
       "codeRu": "REK",
       "nameEn": "Reykjavik",
       "codeEn": "REK",
       "countryNameEn": "Iceland"
     },
     {
       "countryNameRu": "Латвия",
       "countryEn": "LV",
       "nameRu": "Рига",
       "countryRu": "ЛВ",
       "direct": true,
       "codeRu": "РИХ",
       "nameEn": "Riga",
       "codeEn": "RIX",
       "countryNameEn": "Latvia"
     },
     {
       "countryNameRu": "Хорватия",
       "countryEn": "HR",
       "nameRu": "Риека",
       "countryRu": "ХР",
       "codeRu": "RJK",
       "nameEn": "Rijeka",
       "codeEn": "RJK",
       "countryNameEn": "Croatia"
     },
     {
       "countryNameRu": "Италия",
       "countryEn": "IT",
       "nameRu": "Рим",
       "countryRu": "ИТ",
       "codeRu": "РОМ",
       "nameEn": "Rome",
       "codeEn": "ROM",
       "countryNameEn": "Italy"
     },
     {
       "countryNameRu": "Греция",
       "countryEn": "GR",
       "nameRu": "Родос",
       "countryRu": "ГЦ",
       "codeRu": "RHO",
       "nameEn": "Rhodes",
       "codeEn": "RHO",
       "countryNameEn": "Greece"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Ростов-на-Дону",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "РОВ",
       "nameEn": "Rostov",
       "codeEn": "ROV",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Платов",
           "codeRu": "РОВ",
           "nameEn": "Platov",
           "codeEn": "ROV"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Сабетта",
       "countryRu": "РФ",
       "codeRu": "СБТ",
       "nameEn": "Sabetta",
       "codeEn": "SBT",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Греция",
       "countryEn": "GR",
       "nameRu": "Салоники",
       "countryRu": "ГЦ",
       "direct": true,
       "codeRu": "СКГ",
       "nameEn": "Thessaloniki",
       "codeEn": "SKG",
       "countryNameEn": "Greece"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Самара",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "СМШ",
       "nameEn": "Samara",
       "codeEn": "KUF",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Курумоч",
           "codeRu": "СКЧ",
           "nameEn": "Kurumoch",
           "codeEn": "KUF"
         }
       ]
     },
     {
       "countryNameRu": "Республика Узбекистан",
       "countryEn": "UZ",
       "nameRu": "Самарканд",
       "countryRu": "УЗ",
       "direct": true,
       "codeRu": "СКД",
       "nameEn": "Samarkand",
       "codeEn": "SKD",
       "countryNameEn": "Uzbekistan Republic"
     },
     {
       "countryNameRu": "Турция",
       "countryEn": "TR",
       "nameRu": "Самсун",
       "countryRu": "ТР",
       "codeRu": "SZF",
       "nameEn": "Samsun",
       "codeEn": "SZF",
       "countryNameEn": "Turkey",
       "airports": [
         {
           "nameRu": "Samsun Carsamba Airport",
           "codeRu": "SZF",
           "nameEn": "Samsun Carsamba Airport",
           "codeEn": "SZF"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Санкт-Петербург",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "СПТ",
       "nameEn": "St Petersburg",
       "codeEn": "LED",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Пулково",
           "codeRu": "ПЛК",
           "nameEn": "Pulkovo",
           "codeEn": "LED"
         }
       ]
     },
     {
       "countryNameRu": "Китай",
       "countryEn": "CN",
       "nameRu": "Санья",
       "countryRu": "ЦН",
       "direct": true,
       "codeRu": "СЬЯ",
       "nameEn": "Sanya",
       "codeEn": "SYX",
       "countryNameEn": "China"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Саратов",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "СРО",
       "nameEn": "Saratov",
       "codeEn": "RTW",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Советский",
       "countryRu": "РФ",
       "codeRu": "СОЙ",
       "nameEn": "Sovetsky",
       "codeEn": "OVS",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Сочи",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "СОЧ",
       "nameEn": "Sochi",
       "codeEn": "AER",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Норвегия",
       "countryEn": "NO",
       "nameRu": "Ставангер",
       "countryRu": "НО",
       "codeRu": "SVG",
       "nameEn": "Stavanger",
       "codeEn": "SVG",
       "countryNameEn": "Norway"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Ставрополь",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "СТВ",
       "nameEn": "Stavropol",
       "codeEn": "STW",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Турция",
       "countryEn": "TR",
       "nameRu": "Стамбул",
       "countryRu": "ТР",
       "direct": true,
       "codeRu": "ИСТ",
       "nameEn": "Istanbul",
       "codeEn": "IST",
       "countryNameEn": "Turkey",
       "airports": [
         {
           "nameRu": "Ататурк",
           "codeRu": "ИСТ",
           "nameEn": "Istanbul Ataturk Airport",
           "codeEn": "IST"
         }
       ]
     },
     {
       "countryNameRu": "Швеция",
       "countryEn": "SE",
       "nameRu": "Стокгольм",
       "countryRu": "СЕ",
       "codeRu": "СТО",
       "nameEn": "Stockholm",
       "codeEn": "STO",
       "countryNameEn": "Sweden"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Сургут",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "СУР",
       "nameEn": "Surgut",
       "codeEn": "SGC",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Сыктывкар",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "СЫВ",
       "nameEn": "Syktyvkar",
       "codeEn": "SCW",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Эстония",
       "countryEn": "EE",
       "nameRu": "Таллинн",
       "countryRu": "ЕЕ",
       "codeRu": "TLL",
       "nameEn": "Tallinn",
       "codeEn": "TLL",
       "countryNameEn": "Estonia"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Тамбов",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ТМБ",
       "nameEn": "Tambov",
       "codeEn": "TBW",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Финляндия",
       "countryEn": "FI",
       "nameRu": "Тампере",
       "countryRu": "ФИ",
       "codeRu": "ТПР",
       "nameEn": "Tampere",
       "codeEn": "TMP",
       "countryNameEn": "Finland"
     },
     {
       "countryNameRu": "Республика Узбекистан",
       "countryEn": "UZ",
       "nameRu": "Ташкент",
       "countryRu": "УЗ",
       "direct": true,
       "codeRu": "ТАС",
       "nameEn": "Tashkent",
       "codeEn": "TAS",
       "countryNameEn": "Uzbekistan Republic",
       "airports": [
         {
           "nameRu": "Ташкент Интернэйшнл",
           "codeRu": "ТАС",
           "nameEn": "International",
           "codeEn": "TAS"
         }
       ]
     },
     {
       "countryNameRu": "Республика Грузия",
       "countryEn": "GE",
       "nameRu": "Тбилиси",
       "countryRu": "ГР",
       "codeRu": "ТБС",
       "nameEn": "Tbilisi",
       "codeEn": "TBS",
       "countryNameEn": "Georgia Republic"
     },
     {
       "countryNameRu": "Израиль",
       "countryEn": "IL",
       "nameRu": "Тель-Авив",
       "countryRu": "ИЛ",
       "codeRu": "ТЛЯ",
       "nameEn": "Tel Aviv",
       "codeEn": "TLV",
       "countryNameEn": "Israel"
     },
     {
       "countryNameRu": "Финляндия",
       "countryEn": "FI",
       "nameRu": "Турку",
       "countryRu": "ФИ",
       "codeRu": "TKU",
       "nameEn": "Turku",
       "codeEn": "TKU",
       "countryNameEn": "Finland"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Тюмень",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ТЮМ",
       "nameEn": "Tyumen",
       "codeEn": "TJM",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Рощино",
           "codeRu": "РЩН",
           "nameEn": "Roschino",
           "codeEn": "TJM"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Ульяновск",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "УЛК",
       "nameEn": "Ulyanovsk",
       "codeEn": "ULY",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Ульяновск Баратаевка",
           "codeRu": "УЛК",
           "nameEn": "Ulianovsk Barataevka",
           "codeEn": "ULV"
         },
         {
           "nameRu": "Восточный",
           "codeRu": "УЛС",
           "nameEn": "Vostochniy",
           "codeEn": "ULY"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Урай",
       "countryRu": "РФ",
       "codeRu": "УРА",
       "nameEn": "Uraj",
       "codeEn": "URJ",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Усинск",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "УСН",
       "nameEn": "Usinsk",
       "codeEn": "USK",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Усть Кут",
       "countryRu": "РФ",
       "codeRu": "УСК",
       "nameEn": "Ust-Kut",
       "codeEn": "UKX",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Уфа",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "УФА",
       "nameEn": "Ufa",
       "codeEn": "UFA",
       "countryNameEn": "Russian Federation",
       "airports": [
         {
           "nameRu": "Уфа",
           "codeRu": "УФА",
           "nameEn": "Ufa",
           "codeEn": "UFA"
         }
       ]
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Ухта",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "УХТ",
       "nameEn": "Ukhta",
       "codeEn": "UCT",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Республика Узбекистан",
       "countryEn": "UZ",
       "nameRu": "Фергана",
       "countryRu": "УЗ",
       "direct": true,
       "codeRu": "ФГН",
       "nameEn": "Fergana",
       "codeEn": "FEG",
       "countryNameEn": "Uzbekistan Republic"
     },
     {
       "countryNameRu": "Германия",
       "countryEn": "DE",
       "nameRu": "Франкфурт-на-Майне",
       "countryRu": "ДЕ",
       "codeRu": "ФРА",
       "nameEn": "Frankfurt",
       "codeEn": "FRA",
       "countryNameEn": "Germany Republic"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Ханты-Мансийск",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ХАС",
       "nameEn": "Khanty-Mansiysk",
       "codeEn": "HMA",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Украина",
       "countryEn": "UA",
       "nameRu": "Харьков",
       "countryRu": "УА",
       "codeRu": "ХРК",
       "nameEn": "Kharkiv",
       "codeEn": "HRK",
       "countryNameEn": "Ukraine"
     },
     {
       "countryNameRu": "Финляндия",
       "countryEn": "FI",
       "nameRu": "Хельсинки",
       "countryRu": "ФИ",
       "codeRu": "ХЕЛ",
       "nameEn": "Helsinki",
       "codeEn": "HEL",
       "countryNameEn": "Finland"
     },
     {
       "countryNameRu": "Республика Таджикистан",
       "countryEn": "TJ",
       "nameRu": "Худжанд",
       "countryRu": "ТД",
       "codeRu": "ХДТ",
       "nameEn": "Khudzhand",
       "codeEn": "LBD",
       "countryNameEn": "Tajikistan Republic"
     },
     {
       "countryNameRu": "Швейцария",
       "countryEn": "CH",
       "nameRu": "Цюрих",
       "countryRu": "ЦХ",
       "codeRu": "ЦРХ",
       "nameEn": "Zurich",
       "codeEn": "ZRH",
       "countryNameEn": "Switzerland"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Чебоксары",
       "countryRu": "РФ",
       "codeRu": "ЧБЕ",
       "nameEn": "Cheboksary",
       "codeEn": "CSY",
       "countryNameEn": "Russian Federation"
     },
     {
       "countryNameRu": "Российская Федерация",
       "countryEn": "RU",
       "nameRu": "Элиста",
       "countryRu": "РФ",
       "direct": true,
       "codeRu": "ЭЛИ",
       "nameEn": "Elista",
       "codeEn": "ESL",
       "countryNameEn": "Russian Federation"
     }
   ]
 }

   */




