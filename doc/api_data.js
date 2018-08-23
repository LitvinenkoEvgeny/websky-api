define({ "api": [
  {
    "type": "get, post",
    "url": "/json/dependence-cities",
    "title": "Получить IATA коды доступных городов",
    "name": "get_Cities",
    "group": "Cities",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "cityCode",
            "description": "<p>IATA код аэропорта вылета, если передан, вернется только {destination: [...]}</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "returnPoints",
            "description": "<p>Возвращать только аэропорты назначения или вернуть объект origin</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "isBooking",
            "description": "<p>???</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Без параметра returnPoints и cityCode:",
          "content": "{\n  \"result\": \"ok\",\n  \"destination\": [\n    {\n      \"countryNameRu\": \"Российская Федерация\",\n      \"countryEn\": \"RU\",\n      \"nameRu\": \"Анадырь\",\n      \"countryRu\": \"РФ\",\n      \"codeRu\": \"АНЫ\",\n      \"nameEn\": \"Anadyr\",\n      \"codeEn\": \"DYR\",\n      \"countryNameEn\": \"Russian Federation\",\n      \"airports\": [\n        {\n          \"nameRu\": \"Анадырь\",\n          \"codeRu\": \"АНЫ\",\n          \"nameEn\": \"Anadyr\",\n          \"codeEn\": \"DYR\"\n        }\n        ...\n      ]\n    }\n      ...\n  ],\n  \"origin\": [\n    {\n      \"countryNameRu\": \"Российская Федерация\",\n      \"countryEn\": \"RU\",\n      \"nameRu\": \"Анадырь\",\n      \"countryRu\": \"РФ\",\n      \"codeRu\": \"АНЫ\",\n      \"nameEn\": \"Anadyr\",\n      \"codeEn\": \"DYR\",\n      \"countryNameEn\": \"Russian Federation\",\n      \"airports\": [\n        {\n          \"nameRu\": \"Анадырь\",\n          \"codeRu\": \"АНЫ\",\n          \"nameEn\": \"Anadyr\",\n          \"codeEn\": \"DYR\"\n        }\n        ...\n      ]\n    }\n    ...\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Без параметров returnPoints и cityCode:",
          "content": "{\n  \"result\": \"ok\",\n\n  \"destination\": [\n    {\n      \"countryNameRu\": \"Российская Федерация\",\n      \"countryEn\": \"RU\",\n      \"nameRu\": \"Анадырь\",\n      \"countryRu\": \"РФ\",\n      \"codeRu\": \"АНЫ\",\n      \"nameEn\": \"Anadyr\",\n      \"codeEn\": \"DYR\",\n      \"countryNameEn\": \"Russian Federation\",\n      \"airports\": [\n        {\n          \"nameRu\": \"Анадырь\",\n          \"codeRu\": \"АНЫ\",\n          \"nameEn\": \"Anadyr\",\n          \"codeEn\": \"DYR\"\n        }\n      ]\n    }\n  ],***",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api description/dependence-cities.js",
    "groupTitle": "Cities"
  },
  {
    "type": "post",
    "url": "/json/dependence-cities",
    "title": "Добавить пассажиров к заказу",
    "description": "<p>Поскольку может быть несколько пассажиров поля могут дублироваться как firstName[1], firstName[2] etc.</p>",
    "name": "add_passengers",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "categoryCode[n]",
            "description": "<p>???</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName[n]",
            "description": "<p>Имя пассажира</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName[n]",
            "description": "<p>Фамилия пассажра</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "gender[n]",
            "description": "<p>Пол</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "dateOfBirth[n]",
            "description": "<p>Дата рождения</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nationality[n]",
            "description": "<p>Код страны, указанной в графе национальность</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "documentType[n]",
            "description": "<p>Тип документа</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "documentNumber[n]",
            "description": "<p>Номер документа</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "documentDate[n]",
            "description": "<p>Дата, по которую документ действительный</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "phone[n]",
            "description": "<p>Номер телефона</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email[n]",
            "description": "<p>email</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success:",
          "content": "{\"result\":\"ok\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api description/order/passengers-add.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/json/extra-services-new",
    "title": "запросить список доступных доп. услуг",
    "name": "extra_services_new",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "success:",
          "content": "[\n{\n  \"code\": \"insurance\",\n  \"type\": \"insurance\",\n  \"items\": [\n    {\n      \"insurance\": \"250000.00\",\n      \"luggage\": null,\n      \"luggage_premium\": null,\n      \"currency\": \"RUB\",\n      \"tins\": \"TM\",\n      \"insurance_premium\": \"500.00\",\n      \"ins\": \"A\"\n    }\n  ]\n},\n{\n  \"defaultSelected\": true,\n  \"bulkAdd\": false,\n  \"passengers\": [\n    {\n      \"id\": 1,\n      \"segments\": [\n        {\n          \"id\": 1,\n          \"availableExtraServices\": [\n            [\n              {\n                \"serviceType\": \"F\",\n                \"rfisc\": \"0LQ\",\n                \"shouldSelectByDefault\": false,\n                \"price\": \"300.00\",\n                \"limit\": 2,\n                \"affectedSegmentIds\": [],\n                \"description\": \"Описание\",\n                \"currency\": \"RUB\",\n                \"title\": \"Холодное блюдо\"\n              }\n            ],\n            [\n              {\n                \"serviceType\": \"F\",\n                \"rfisc\": \"0LP\",\n                \"shouldSelectByDefault\": false,\n                \"price\": \"300.00\",\n                \"limit\": 2,\n                \"affectedSegmentIds\": [],\n                \"description\": \" \",\n                \"currency\": \"RUB\",\n                \"title\": \"web.extraServices.0LP.F.ALL.title\"\n              }\n            ]\n          ],\n          \"empty\": false\n        },\n        {\n          \"id\": 2,\n          \"availableExtraServices\": [\n            [\n              {\n                \"serviceType\": \"F\",\n                \"rfisc\": \"0LQ\",\n                \"shouldSelectByDefault\": false,\n                \"price\": \"300.00\",\n                \"limit\": 2,\n                \"affectedSegmentIds\": [],\n                \"description\": \"Описание\",\n                \"currency\": \"RUB\",\n                \"title\": \"Холодное блюдо\"\n              }\n            ],\n            [\n              {\n                \"serviceType\": \"F\",\n                \"rfisc\": \"0LP\",\n                \"shouldSelectByDefault\": false,\n                \"price\": \"300.00\",\n                \"limit\": 2,\n                \"affectedSegmentIds\": [],\n                \"description\": \" \",\n                \"currency\": \"RUB\",\n                \"title\": \"web.extraServices.0LP.F.ALL.title\"\n              }\n            ]\n          ],\n          \"empty\": false\n        }\n      ]\n    },\n    {\n      \"id\": 2,\n      \"segments\": [\n        {\n          \"id\": 1,\n          \"availableExtraServices\": [\n            [\n              {\n                \"serviceType\": \"F\",\n                \"rfisc\": \"0LQ\",\n                \"shouldSelectByDefault\": false,\n                \"price\": \"300.00\",\n                \"limit\": 2,\n                \"affectedSegmentIds\": [],\n                \"description\": \"Описание\",\n                \"currency\": \"RUB\",\n                \"title\": \"Холодное блюдо\"\n              }\n            ],\n            [\n              {\n                \"serviceType\": \"F\",\n                \"rfisc\": \"0LP\",\n                \"shouldSelectByDefault\": false,\n                \"price\": \"300.00\",\n                \"limit\": 2,\n                \"affectedSegmentIds\": [],\n                \"description\": \" \",\n                \"currency\": \"RUB\",\n                \"title\": \"web.extraServices.0LP.F.ALL.title\"\n              }\n            ]\n          ],\n          \"empty\": false\n        },\n        {\n          \"id\": 2,\n          \"availableExtraServices\": [\n            [\n              {\n                \"serviceType\": \"F\",\n                \"rfisc\": \"0LQ\",\n                \"shouldSelectByDefault\": false,\n                \"price\": \"300.00\",\n                \"limit\": 2,\n                \"affectedSegmentIds\": [],\n                \"description\": \"Описание\",\n                \"currency\": \"RUB\",\n                \"title\": \"Холодное блюдо\"\n              }\n            ],\n            [\n              {\n                \"serviceType\": \"F\",\n                \"rfisc\": \"0LP\",\n                \"shouldSelectByDefault\": false,\n                \"price\": \"300.00\",\n                \"limit\": 2,\n                \"affectedSegmentIds\": [],\n                \"description\": \" \",\n                \"currency\": \"RUB\",\n                \"title\": \"web.extraServices.0LP.F.ALL.title\"\n              }\n            ]\n          ],\n          \"empty\": false\n        }\n      ]\n    }\n  ],\n  \"code\": \"meal\",\n  \"iconCode\": null,\n  \"title\": \"Питание\",\n  \"showMinPrice\": false,\n  \"autoExpand\": false,\n  \"structure\": {\n    \"subgroups\": [\n      {\n        \"code\": \"cold\",\n        \"title\": \"Холодные\",\n        \"type\": \"MULTIPLE_SELECT\"\n      },\n      {\n        \"code\": \"special\",\n        \"title\": \"Специальные\",\n        \"type\": \"MULTIPLE_SELECT\"\n      }\n    ]\n  },\n  \"empty\": false\n},\n{\n  \"defaultSelected\": false,\n  \"bulkAdd\": false,\n  \"passengers\": [\n    {\n      \"id\": 1,\n      \"segments\": [\n        {\n          \"id\": 1,\n          \"availableExtraServices\": [\n            [\n              {\n                \"serviceType\": \"F\",\n                \"rfisc\": \"CMF\",\n                \"shouldSelectByDefault\": false,\n                \"price\": \"300.00\",\n                \"limit\": 1,\n                \"affectedSegmentIds\": [],\n                \"description\": \"web.extraServices.CMF.F.ALL.description\",\n                \"currency\": \"RUB\",\n                \"title\": \"web.extraServices.CMF.F.ALL.title\"\n              }\n            ]\n          ],\n          \"empty\": false\n        },\n        {\n          \"id\": 2,\n          \"availableExtraServices\": [\n            [\n              {\n                \"serviceType\": \"F\",\n                \"rfisc\": \"CMF\",\n                \"shouldSelectByDefault\": false,\n                \"price\": \"300.00\",\n                \"limit\": 1,\n                \"affectedSegmentIds\": [],\n                \"description\": \"web.extraServices.CMF.F.ALL.description\",\n                \"currency\": \"RUB\",\n                \"title\": \"web.extraServices.CMF.F.ALL.title\"\n              }\n            ]\n          ],\n          \"empty\": false\n        }\n      ]\n    },\n    {\n      \"id\": 2,\n      \"segments\": [\n        {\n          \"id\": 1,\n          \"availableExtraServices\": [\n            [\n              {\n                \"serviceType\": \"F\",\n                \"rfisc\": \"CMF\",\n                \"shouldSelectByDefault\": false,\n                \"price\": \"300.00\",\n                \"limit\": 1,\n                \"affectedSegmentIds\": [],\n                \"description\": \"web.extraServices.CMF.F.ALL.description\",\n                \"currency\": \"RUB\",\n                \"title\": \"web.extraServices.CMF.F.ALL.title\"\n              }\n            ]\n          ],\n          \"empty\": false\n        },\n        {\n          \"id\": 2,\n          \"availableExtraServices\": [\n            [\n              {\n                \"serviceType\": \"F\",\n                \"rfisc\": \"CMF\",\n                \"shouldSelectByDefault\": false,\n                \"price\": \"300.00\",\n                \"limit\": 1,\n                \"affectedSegmentIds\": [],\n                \"description\": \"web.extraServices.CMF.F.ALL.description\",\n                \"currency\": \"RUB\",\n                \"title\": \"web.extraServices.CMF.F.ALL.title\"\n              }\n            ]\n          ],\n          \"empty\": false\n        }\n      ]\n    }\n  ],\n  \"code\": \"seat\",\n  \"iconCode\": null,\n  \"title\": \"Выбор места\",\n  \"showMinPrice\": false,\n  \"autoExpand\": false,\n  \"structure\": {\n    \"subgroups\": [\n      {\n        \"code\": \"common\",\n        \"title\": \"Выбор места\",\n        \"type\": \"EXACT_VALUE\"\n      }\n    ]\n  },\n  \"empty\": false\n},\n{\n  \"defaultSelected\": false,\n  \"bulkAdd\": false,\n  \"passengers\": [\n    {\n      \"id\": 1,\n      \"segments\": [\n        {\n          \"id\": 1,\n          \"availableExtraServices\": [\n            [\n              {\n                \"serviceType\": \"P\",\n                \"rfisc\": \"0AA\",\n                \"shouldSelectByDefault\": false,\n                \"price\": \"450.00\",\n                \"limit\": 30,\n                \"affectedSegmentIds\": [],\n                \"description\": \"web.extraServices.0AA.P.ALL.description\",\n                \"currency\": \"RUB\",\n                \"title\": \"Багаж\"\n              }\n            ]\n          ],\n          \"empty\": false\n        },\n        {\n          \"id\": 2,\n          \"availableExtraServices\": [\n            [\n              {\n                \"serviceType\": \"P\",\n                \"rfisc\": \"0AA\",\n                \"shouldSelectByDefault\": false,\n                \"price\": \"450.00\",\n                \"limit\": 30,\n                \"affectedSegmentIds\": [],\n                \"description\": \"web.extraServices.0AA.P.ALL.description\",\n                \"currency\": \"RUB\",\n                \"title\": \"Багаж\"\n              }\n            ]\n          ],\n          \"empty\": false\n        }\n      ]\n    },\n    {\n      \"id\": 2,\n      \"segments\": [\n        {\n          \"id\": 1,\n          \"availableExtraServices\": [\n            [\n              {\n                \"serviceType\": \"P\",\n                \"rfisc\": \"0AA\",\n                \"shouldSelectByDefault\": false,\n                \"price\": \"450.00\",\n                \"limit\": 30,\n                \"affectedSegmentIds\": [],\n                \"description\": \"web.extraServices.0AA.P.ALL.description\",\n                \"currency\": \"RUB\",\n                \"title\": \"Багаж\"\n              }\n            ]\n          ],\n          \"empty\": false\n        },\n        {\n          \"id\": 2,\n          \"availableExtraServices\": [\n            [\n              {\n                \"serviceType\": \"P\",\n                \"rfisc\": \"0AA\",\n                \"shouldSelectByDefault\": false,\n                \"price\": \"450.00\",\n                \"limit\": 30,\n                \"affectedSegmentIds\": [],\n                \"description\": \"web.extraServices.0AA.P.ALL.description\",\n                \"currency\": \"RUB\",\n                \"title\": \"Багаж\"\n              }\n            ]\n          ],\n          \"empty\": false\n        }\n      ]\n    }\n  ],\n  \"code\": \"baggage\",\n  \"iconCode\": null,\n  \"title\": \"Багаж\",\n  \"showMinPrice\": false,\n  \"autoExpand\": false,\n  \"structure\": {\n    \"subgroups\": [\n      {\n        \"code\": \"common\",\n        \"title\": \"Багаж\",\n        \"type\": \"COUNTABLE_MULTIPLE_SELECT\"\n      }\n    ]\n  },\n  \"empty\": false\n}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api description/order/extra-services-new.js",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/json/extra-services-modify.js",
    "title": "Добавить/удалить услугу",
    "description": "<p>в ответ либо {&quot;result&quot;: &quot;ok&quot;} либо код и описание ошибки</p>",
    "name": "modify_service",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>Код модифицируемой услуги</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "passenger_id",
            "description": "<p>id пассажира</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "segment_id",
            "description": "<p>id сегмента</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "subgroup",
            "description": "<p>код подгруппы например cold ( холодные блюда ) - подгруппа питания meal, если нужно удалить все блюда в подгруппе холодных блюд, то code будет meal subgroup cold</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "amount",
            "description": "<p>кол-во</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "service_type",
            "description": "<p>???</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "rfisc",
            "description": "<p>???</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ins",
            "description": "<p>???</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "tins",
            "description": "<p>???</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success:",
          "content": "{\"result\" : \"ok\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api description/order/extra-services-modify.js",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/json/change-payment-form",
    "title": "Изменить способ оплаты",
    "description": "<p>в ответ либо {&quot;result&quot;: &quot;ok&quot;} либо код и описание ошибки</p>",
    "name": "modify_service",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "formPay",
            "description": "<p>???</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success:",
          "content": "{\"result\" : \"ok\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api description/order/change-payment-form.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/json/extra-services-new",
    "title": "запросить инфомацию о заказе",
    "description": "<p>В ответ приходит информация о заказе со всеми ценами(totalPrice), налогами (totalTax) и пассажирами к которым относится этот заказ</p>",
    "name": "order_info",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "success:",
          "content": "\n\n{\n  \"pricesNotIssued\": {\n    \"totalTax\": \"2726.00\",\n    \"totalFare\": \"131200.00\",\n    \"totalPrice\": \"133926.00\",\n    \"taxes\": [\n      {\n        \"code\": \"RI\",\n        \"name\": \"АЭРОПОРТОВЫЙ СБОР\",\n        \"value\": \"2726.00\"\n      }\n    ],\n    \"currency\": \"RUB\",\n    \"segments\": [\n      {\n        \"aircompany\": \"Y7\",\n        \"classCode\": \"Б\",\n        \"id\": \"1\",\n        \"prices\": [\n          {\n            \"totalTax\": \"1026.00\",\n            \"fare\": \"65600.00\",\n            \"clientId\": 7604,\n            \"passengerCount\": 2,\n            \"price\": \"66626.00\",\n            \"fareCode\": \"DRT2\",\n            \"taxes\": [\n              {\n                \"code\": \"RI\",\n                \"name\": \"АЭРОПОРТОВЫЙ СБОР\",\n                \"value\": 1026\n              }\n            ],\n            \"passengerCategory\": \"AAA\",\n            \"brand\": \"Y7.Y7.C.3.ЛАЙТ\"\n          }\n        ],\n        \"racenumber\": \"103\"\n      },\n      {\n        \"aircompany\": \"Y7\",\n        \"classCode\": \"Б\",\n        \"id\": \"2\",\n        \"prices\": [\n          {\n            \"totalTax\": \"1700.00\",\n            \"fare\": \"65600.00\",\n            \"clientId\": 7604,\n            \"passengerCount\": 2,\n            \"price\": \"67300.00\",\n            \"fareCode\": \"DRT2\",\n            \"taxes\": [\n              {\n                \"code\": \"RI\",\n                \"name\": \"АЭРОПОРТОВЫЙ СБОР\",\n                \"value\": 1700\n              }\n            ],\n            \"passengerCategory\": \"AAA\",\n            \"brand\": \"Y7.Y7.C.3.ЛАЙТ\"\n          }\n        ],\n        \"racenumber\": \"3333\"\n      }\n    ]\n  },\n  \"passengers\": [\n    {\n      \"documentCode\": \"NP\",\n      \"documentDate\": \"27.11.2018\",\n      \"lastName\": \"LITVINENKO\",\n      \"hasSeats\": true,\n      \"gender\": \"male\",\n      \"documentType\": \"НАЦИОНАЛЬНЫЙ ПАСПОРТ\",\n      \"documentNumber\": \"7328742789423\",\n      \"index\": 0,\n      \"dateOfBirth\": \"27.11.1993\",\n      \"categoryCode\": \"AAA\",\n      \"eMail\": \"test@gmail.com\",\n      \"firstName\": \"EVGENY\",\n      \"nationalityCode\": \"AI\",\n      \"nationality\": \"Anguilla\",\n      \"phone\": \"79084783274\",\n      \"id\": 1\n    },\n    {\n      \"documentCode\": \"NP\",\n      \"documentDate\": \"27.11.2018\",\n      \"lastName\": \"TEST\",\n      \"hasSeats\": true,\n      \"gender\": \"male\",\n      \"documentType\": \"НАЦИОНАЛЬНЫЙ ПАСПОРТ\",\n      \"documentNumber\": \"74329874239\",\n      \"index\": 1,\n      \"dateOfBirth\": \"27.11.1993\",\n      \"categoryCode\": \"AAA\",\n      \"eMail\": \"test@gmail.com\",\n      \"firstName\": \"TEST\",\n      \"nationalityCode\": \"AI\",\n      \"nationality\": \"Anguilla\",\n      \"phone\": \"843287492372\",\n      \"id\": 2\n    }\n  ],\n  \"conditionsPath\": \"https://private.sirena-travel.ru/docs/conditions-rus-eng-tch.pdf\",\n  \"passengersWithSeatsCount\": 2,\n  \"canEnterDoco\": false,\n  \"refundAllowed\": false,\n  \"retryRegisterAllowed\": false,\n  \"addingExtraServicesAllowed\": true,\n  \"cancellationAllowed\": false,\n  \"flights\": [\n    {\n      \"date\": \"23.08.2018\",\n      \"chainId\": \"chain-1\",\n      \"flights\": [\n        {\n          \"date\": \"23.08.2018\",\n          \"originportName\": \"Домодедово\",\n          \"destinationcity\": \"NSK\",\n          \"departuredate\": \"23.08.2018\",\n          \"flightClass\": \"Б\",\n          \"delaydays\": \"0\",\n          \"flighttime\": \"4:05\",\n          \"arrivaldate\": \"24.08.2018\",\n          \"origincityName\": \"Москва\",\n          \"originport\": \"DME\",\n          \"company\": {\n            \"code\": \"Y7\",\n            \"code_en\": \"Y7\",\n            \"name\": \"НОРДСТАР\",\n            \"name_en\": \"НОРДСТАР\"\n          },\n          \"id\": 1,\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"brand\": \"Y7.Y7.C.3.ЛАЙТ\",\n          \"destinationportName\": \"Норильск Алыкель\",\n          \"destinationcityName\": \"Норильск\",\n          \"departuredayshift\": 0,\n          \"origincity\": \"MOW\",\n          \"vehicleCodeEn\": \"738\",\n          \"departuretime\": \"22:10\",\n          \"destinationport\": \"NSK\",\n          \"carrier\": \"Y7\",\n          \"arrivaldayshift\": 1,\n          \"airplane\": \"БОИНГ 737-800\",\n          \"arrivaltime\": \"06:15\",\n          \"subclass\": \"D\",\n          \"racenumber\": \"103\"\n        }\n      ]\n    },\n    {\n      \"date\": \"10.09.2018\",\n      \"chainId\": \"chain-2\",\n      \"flights\": [\n        {\n          \"date\": \"10.09.2018\",\n          \"originportName\": \"Норильск Алыкель\",\n          \"destinationcity\": \"MOW\",\n          \"departuredate\": \"10.09.2018\",\n          \"flightClass\": \"Б\",\n          \"delaydays\": \"0\",\n          \"flighttime\": \"5:30\",\n          \"arrivaldate\": \"10.09.2018\",\n          \"origincityName\": \"Норильск\",\n          \"originport\": \"NSK\",\n          \"company\": {\n            \"code\": \"Y7\",\n            \"code_en\": \"Y7\",\n            \"name\": \"НОРДСТАР\",\n            \"name_en\": \"НОРДСТАР\"\n          },\n          \"id\": 2,\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"brand\": \"Y7.Y7.C.3.ЛАЙТ\",\n          \"destinationportName\": \"Домодедово\",\n          \"destinationcityName\": \"Москва\",\n          \"departuredayshift\": 0,\n          \"origincity\": \"NSK\",\n          \"vehicleCodeEn\": \"738\",\n          \"departuretime\": \"10:00\",\n          \"destinationport\": \"DME\",\n          \"carrier\": \"Y7\",\n          \"arrivaldayshift\": 0,\n          \"airplane\": \"БОИНГ 737-800\",\n          \"arrivaltime\": \"11:30\",\n          \"subclass\": \"D\",\n          \"racenumber\": \"3333\"\n        }\n      ]\n    }\n  ],\n  \"prices\": {\n    \"totalTax\": \"2726.00\",\n    \"totalFare\": \"131200.00\",\n    \"totalPrice\": \"133926.00\",\n    \"taxes\": [\n      {\n        \"code\": \"RI\",\n        \"name\": \"АЭРОПОРТОВЫЙ СБОР\",\n        \"value\": \"2726.00\"\n      }\n    ],\n    \"currency\": \"RUB\",\n    \"segments\": [\n      {\n        \"aircompany\": \"Y7\",\n        \"classCode\": \"Б\",\n        \"id\": \"1\",\n        \"prices\": [\n          {\n            \"totalTax\": \"1026.00\",\n            \"fare\": \"65600.00\",\n            \"clientId\": 7604,\n            \"passengerCount\": 2,\n            \"price\": \"66626.00\",\n            \"fareCode\": \"DRT2\",\n            \"taxes\": [\n              {\n                \"code\": \"RI\",\n                \"name\": \"АЭРОПОРТОВЫЙ СБОР\",\n                \"value\": 1026\n              }\n            ],\n            \"passengerCategory\": \"AAA\",\n            \"brand\": \"Y7.Y7.C.3.ЛАЙТ\"\n          }\n        ],\n        \"racenumber\": \"103\"\n      },\n      {\n        \"aircompany\": \"Y7\",\n        \"classCode\": \"Б\",\n        \"id\": \"2\",\n        \"prices\": [\n          {\n            \"totalTax\": \"1700.00\",\n            \"fare\": \"65600.00\",\n            \"clientId\": 7604,\n            \"passengerCount\": 2,\n            \"price\": \"67300.00\",\n            \"fareCode\": \"DRT2\",\n            \"taxes\": [\n              {\n                \"code\": \"RI\",\n                \"name\": \"АЭРОПОРТОВЫЙ СБОР\",\n                \"value\": 1700\n              }\n            ],\n            \"passengerCategory\": \"AAA\",\n            \"brand\": \"Y7.Y7.C.3.ЛАЙТ\"\n          }\n        ],\n        \"racenumber\": \"3333\"\n      }\n    ]\n  },\n  \"brand\": \"Y7.Y7.C.3.ЛАЙТ\",\n  \"canEnterDoca\": false,\n  \"customer\": {\n    \"firstName\": \"EVGENY\",\n    \"lastName\": \"LITVINENKO\",\n    \"phone\": \"79043278432\",\n    \"eMail\": \"e.litvinenko@mute-lab.com\"\n  },\n  \"exchangeAllowed\": false,\n  \"paymentConfirmationAllowed\": \"false\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api description/order/order-info.js",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "do-booking-and-register-order",
    "title": "зарегистрировать заказ",
    "description": "<p>в ответ либо {&quot;result&quot;: &quot;ok&quot;} либо код и описание ошибки</p>",
    "name": "register_order",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "payment-form",
            "description": "<p>Способ оплаты</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "payment-type",
            "description": "<p>Тип оплаты</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "removeInsuranceAeroExpress",
            "description": "<p>???</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success:",
          "content": "\n{\n  \"result\": \"ok\",\n  \"eraseAeroexpressBecauseOfCurrency\": false,\n  \"eraseInsuranceBecauseOfCurrency\": false,\n  \"pnr\": \"1PLTK0\",\n  \"lastName\": \"LITVINENKO\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api description/order/do-booking-and-register-order.js",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/json/search-order",
    "title": "Найти заказ по pnr и фамилии пассажира",
    "description": "<p>в ответ либо {&quot;result&quot;: &quot;ok&quot;} либо код и описание ошибки</p>",
    "name": "search_order",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>Фамилия пассажира</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pnr",
            "description": "<p>Номер заказа</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success:",
          "content": "\n{\n  \"result\": \"ok\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api description/order/search-order.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/json/pricevariant",
    "title": "Запросить доступные способы оплаты",
    "description": "<p>В ответ приходит информация о всех доступных способах оплаты</p>",
    "name": "price_variant",
    "group": "Price",
    "success": {
      "examples": [
        {
          "title": "success:",
          "content": "[\n{\n  \"conflicts_with_timelimit\": \"false\",\n  \"code\": \"plastic_card\",\n  \"conflicts_with_insurance\": \"false\",\n  \"price\": \"133926.00\",\n  \"name\": \"Пластиковая карта\",\n  \"currency\": \"RUB\",\n  \"paymentTypes\": {\n    \"plastic_card\": \"Пластиковая карта\"\n  },\n  \"type\": \"online\",\n  \"conflicts_with_aeroexpress\": \"false\",\n  \"selected\": \"true\",\n  \"timelimit\": \"23.08.2018 17:58\"\n}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api description/payment/pricevariant.js",
    "groupTitle": "Price"
  },
  {
    "type": "post",
    "url": "/json/get-availability-for-direction.js",
    "title": "Получить даты на которые доступны перелеты из origin-city-code в destination-city-code",
    "name": "get_available_dates",
    "group": "dates",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "origin-city-code",
            "description": "<p>IATA код аэропорта вылета</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "destination-city-code",
            "description": "<p>IATA код аэропорта прилета</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success:",
          "content": "{\n  \"result\": \"ok\",\n  \"availabilityInfoDates\": [\n    {\n      \"date\": \"23.08.2018\",\n      \"available\": true\n    },\n    {\n      \"date\": \"24.08.2018\",\n      \"available\": true\n    },\n    ...\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api description/get-availability-for-direction.js",
    "groupTitle": "dates"
  },
  {
    "type": "post",
    "url": "/json/search-variants-mono-brand-cartesian",
    "title": "Получить доступные сегменты",
    "name": "get_available_segments",
    "group": "segments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "segmentsCount",
            "description": "<p>Кол-во пассажиров</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "date[0]",
            "description": "<p>Дата вылета</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "origin-city-code[0]",
            "description": "<p>IATA код аэропорта вылета</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "destination-city-code[0]",
            "description": "<p>NSK</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "date[1]",
            "description": "<p>10.09.2018</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "origin-city-code[1]",
            "description": "<p>NSK</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "destination-city-code[1]",
            "description": "<p>MOW</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "count-aaa",
            "description": "<p>2</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "success:",
          "content": "{\n  \"result\": \"ok\",\n  \"flights\": [\n    {\n      \"chainId\": \"1\",\n      \"flights\": [\n        {\n          \"id\": 1,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"103\",\n          \"departuredate\": \"23.08.2018\",\n          \"date\": \"23.08.2018\",\n          \"departuretime\": \"22:10\",\n          \"arrivaldate\": \"24.08.2018\",\n          \"arrivaltime\": \"06:15\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"NSK\",\n          \"destinationportName\": \"Норильск Алыкель\",\n          \"destinationcity\": \"NSK\",\n          \"destinationcityName\": \"Норильск\",\n          \"originport\": \"DME\",\n          \"originportName\": \"Домодедово\",\n          \"origincity\": \"MOW\",\n          \"origincityName\": \"Москва\",\n          \"flighttime\": \"4:05\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 0,\n          \"arrivaldayshift\": 1,\n          \"landings\": []\n        }\n      ],\n      \"connections\": [],\n      \"flightTime\": \"04:05\"\n    },\n    {\n      \"chainId\": \"2\",\n      \"flights\": [\n        {\n          \"id\": 2,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"3333\",\n          \"departuredate\": \"10.09.2018\",\n          \"date\": \"10.09.2018\",\n          \"departuretime\": \"10:00\",\n          \"arrivaldate\": \"10.09.2018\",\n          \"arrivaltime\": \"11:30\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"DME\",\n          \"destinationportName\": \"Домодедово\",\n          \"destinationcity\": \"MOW\",\n          \"destinationcityName\": \"Москва\",\n          \"originport\": \"NSK\",\n          \"originportName\": \"Норильск Алыкель\",\n          \"origincity\": \"NSK\",\n          \"origincityName\": \"Норильск\",\n          \"flighttime\": \"5:30\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 0,\n          \"arrivaldayshift\": 0,\n          \"landings\": []\n        }\n      ],\n      \"connections\": [],\n      \"flightTime\": \"05:30\"\n    },\n    {\n      \"chainId\": \"3-4\",\n      \"flights\": [\n        {\n          \"id\": 3,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"4443\",\n          \"departuredate\": \"10.09.2018\",\n          \"date\": \"10.09.2018\",\n          \"departuretime\": \"18:00\",\n          \"arrivaldate\": \"10.09.2018\",\n          \"arrivaltime\": \"20:30\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"KJA\",\n          \"destinationportName\": \"Емельяново\",\n          \"destinationcity\": \"KJA\",\n          \"destinationcityName\": \"Красноярск\",\n          \"originport\": \"NSK\",\n          \"originportName\": \"Норильск Алыкель\",\n          \"origincity\": \"NSK\",\n          \"origincityName\": \"Норильск\",\n          \"destinationTerminal\": \"1\",\n          \"flighttime\": \"2:30\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 0,\n          \"arrivaldayshift\": 0,\n          \"landings\": []\n        },\n        {\n          \"id\": 4,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"119\",\n          \"departuredate\": \"10.09.2018\",\n          \"date\": \"10.09.2018\",\n          \"departuretime\": \"23:30\",\n          \"arrivaldate\": \"11.09.2018\",\n          \"arrivaltime\": \"00:25\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"DME\",\n          \"destinationportName\": \"Домодедово\",\n          \"destinationcity\": \"MOW\",\n          \"destinationcityName\": \"Москва\",\n          \"originport\": \"KJA\",\n          \"originportName\": \"Емельяново\",\n          \"origincity\": \"KJA\",\n          \"origincityName\": \"Красноярск\",\n          \"originTerminal\": \"2\",\n          \"flighttime\": \"4:55\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 0,\n          \"arrivaldayshift\": 1,\n          \"landings\": []\n        }\n      ],\n      \"connections\": [\n        {\n          \"city\": \"KJA\",\n          \"cityName\": \"Красноярск\",\n          \"previousAirport\": \"KJA\",\n          \"previousAirportName\": \"Емельяново\",\n          \"nextAirport\": \"KJA\",\n          \"nextAirportName\": \"Емельяново\",\n          \"previousTerminal\": \"1\",\n          \"nextTerminal\": \"2\",\n          \"time\": \"03:00\"\n        }\n      ],\n      \"flightTime\": \"10:25\"\n    },\n    {\n      \"chainId\": \"3-5\",\n      \"flights\": [\n        {\n          \"id\": 3,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"4443\",\n          \"departuredate\": \"10.09.2018\",\n          \"date\": \"10.09.2018\",\n          \"departuretime\": \"18:00\",\n          \"arrivaldate\": \"10.09.2018\",\n          \"arrivaltime\": \"20:30\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"KJA\",\n          \"destinationportName\": \"Емельяново\",\n          \"destinationcity\": \"KJA\",\n          \"destinationcityName\": \"Красноярск\",\n          \"originport\": \"NSK\",\n          \"originportName\": \"Норильск Алыкель\",\n          \"origincity\": \"NSK\",\n          \"origincityName\": \"Норильск\",\n          \"destinationTerminal\": \"1\",\n          \"flighttime\": \"2:30\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 0,\n          \"arrivaldayshift\": 0,\n          \"landings\": []\n        },\n        {\n          \"id\": 5,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"118\",\n          \"departuredate\": \"11.09.2018\",\n          \"date\": \"11.09.2018\",\n          \"departuretime\": \"12:00\",\n          \"arrivaldate\": \"11.09.2018\",\n          \"arrivaltime\": \"17:30\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"DME\",\n          \"destinationportName\": \"Домодедово\",\n          \"destinationcity\": \"MOW\",\n          \"destinationcityName\": \"Москва\",\n          \"originport\": \"KJA\",\n          \"originportName\": \"Емельяново\",\n          \"origincity\": \"KJA\",\n          \"origincityName\": \"Красноярск\",\n          \"originTerminal\": \"2\",\n          \"flighttime\": \"9:30\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 1,\n          \"arrivaldayshift\": 1,\n          \"landings\": []\n        }\n      ],\n      \"connections\": [\n        {\n          \"city\": \"KJA\",\n          \"cityName\": \"Красноярск\",\n          \"previousAirport\": \"KJA\",\n          \"previousAirportName\": \"Емельяново\",\n          \"nextAirport\": \"KJA\",\n          \"nextAirportName\": \"Емельяново\",\n          \"previousTerminal\": \"1\",\n          \"nextTerminal\": \"2\",\n          \"time\": \"15:30\"\n        }\n      ],\n      \"flightTime\": \"27:30\"\n    },\n    {\n      \"chainId\": \"6-5\",\n      \"flights\": [\n        {\n          \"id\": 6,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"4444\",\n          \"departuredate\": \"10.09.2018\",\n          \"date\": \"10.09.2018\",\n          \"departuretime\": \"23:00\",\n          \"arrivaldate\": \"11.09.2018\",\n          \"arrivaltime\": \"02:30\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"KJA\",\n          \"destinationportName\": \"Емельяново\",\n          \"destinationcity\": \"KJA\",\n          \"destinationcityName\": \"Красноярск\",\n          \"originport\": \"NSK\",\n          \"originportName\": \"Норильск Алыкель\",\n          \"origincity\": \"NSK\",\n          \"origincityName\": \"Норильск\",\n          \"destinationTerminal\": \"1\",\n          \"flighttime\": \"3:30\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 0,\n          \"arrivaldayshift\": 1,\n          \"landings\": []\n        },\n        {\n          \"id\": 5,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"118\",\n          \"departuredate\": \"11.09.2018\",\n          \"date\": \"11.09.2018\",\n          \"departuretime\": \"12:00\",\n          \"arrivaldate\": \"11.09.2018\",\n          \"arrivaltime\": \"17:30\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"DME\",\n          \"destinationportName\": \"Домодедово\",\n          \"destinationcity\": \"MOW\",\n          \"destinationcityName\": \"Москва\",\n          \"originport\": \"KJA\",\n          \"originportName\": \"Емельяново\",\n          \"origincity\": \"KJA\",\n          \"origincityName\": \"Красноярск\",\n          \"originTerminal\": \"2\",\n          \"flighttime\": \"9:30\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 1,\n          \"arrivaldayshift\": 1,\n          \"landings\": []\n        }\n      ],\n      \"connections\": [\n        {\n          \"city\": \"KJA\",\n          \"cityName\": \"Красноярск\",\n          \"previousAirport\": \"KJA\",\n          \"previousAirportName\": \"Емельяново\",\n          \"nextAirport\": \"KJA\",\n          \"nextAirportName\": \"Емельяново\",\n          \"previousTerminal\": \"1\",\n          \"nextTerminal\": \"2\",\n          \"time\": \"09:30\"\n        }\n      ],\n      \"flightTime\": \"22:30\"\n    },\n    {\n      \"chainId\": \"7-5\",\n      \"flights\": [\n        {\n          \"id\": 7,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"4445\",\n          \"departuredate\": \"10.09.2018\",\n          \"date\": \"10.09.2018\",\n          \"departuretime\": \"23:00\",\n          \"arrivaldate\": \"11.09.2018\",\n          \"arrivaltime\": \"02:30\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"KJA\",\n          \"destinationportName\": \"Емельяново\",\n          \"destinationcity\": \"KJA\",\n          \"destinationcityName\": \"Красноярск\",\n          \"originport\": \"NSK\",\n          \"originportName\": \"Норильск Алыкель\",\n          \"origincity\": \"NSK\",\n          \"origincityName\": \"Норильск\",\n          \"destinationTerminal\": \"1\",\n          \"flighttime\": \"3:30\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 0,\n          \"arrivaldayshift\": 1,\n          \"landings\": []\n        },\n        {\n          \"id\": 5,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"118\",\n          \"departuredate\": \"11.09.2018\",\n          \"date\": \"11.09.2018\",\n          \"departuretime\": \"12:00\",\n          \"arrivaldate\": \"11.09.2018\",\n          \"arrivaltime\": \"17:30\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"DME\",\n          \"destinationportName\": \"Домодедово\",\n          \"destinationcity\": \"MOW\",\n          \"destinationcityName\": \"Москва\",\n          \"originport\": \"KJA\",\n          \"originportName\": \"Емельяново\",\n          \"origincity\": \"KJA\",\n          \"origincityName\": \"Красноярск\",\n          \"originTerminal\": \"2\",\n          \"flighttime\": \"9:30\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 1,\n          \"arrivaldayshift\": 1,\n          \"landings\": []\n        }\n      ],\n      \"connections\": [\n        {\n          \"city\": \"KJA\",\n          \"cityName\": \"Красноярск\",\n          \"previousAirport\": \"KJA\",\n          \"previousAirportName\": \"Емельяново\",\n          \"nextAirport\": \"KJA\",\n          \"nextAirportName\": \"Емельяново\",\n          \"previousTerminal\": \"1\",\n          \"nextTerminal\": \"2\",\n          \"time\": \"09:30\"\n        }\n      ],\n      \"flightTime\": \"22:30\"\n    },\n    {\n      \"chainId\": \"7-8\",\n      \"flights\": [\n        {\n          \"id\": 7,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"4445\",\n          \"departuredate\": \"10.09.2018\",\n          \"date\": \"10.09.2018\",\n          \"departuretime\": \"23:00\",\n          \"arrivaldate\": \"11.09.2018\",\n          \"arrivaltime\": \"02:30\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"KJA\",\n          \"destinationportName\": \"Емельяново\",\n          \"destinationcity\": \"KJA\",\n          \"destinationcityName\": \"Красноярск\",\n          \"originport\": \"NSK\",\n          \"originportName\": \"Норильск Алыкель\",\n          \"origincity\": \"NSK\",\n          \"origincityName\": \"Норильск\",\n          \"destinationTerminal\": \"1\",\n          \"flighttime\": \"3:30\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 0,\n          \"arrivaldayshift\": 1,\n          \"landings\": []\n        },\n        {\n          \"id\": 8,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"119\",\n          \"departuredate\": \"11.09.2018\",\n          \"date\": \"11.09.2018\",\n          \"departuretime\": \"23:30\",\n          \"arrivaldate\": \"12.09.2018\",\n          \"arrivaltime\": \"00:25\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"DME\",\n          \"destinationportName\": \"Домодедово\",\n          \"destinationcity\": \"MOW\",\n          \"destinationcityName\": \"Москва\",\n          \"originport\": \"KJA\",\n          \"originportName\": \"Емельяново\",\n          \"origincity\": \"KJA\",\n          \"origincityName\": \"Красноярск\",\n          \"originTerminal\": \"2\",\n          \"flighttime\": \"4:55\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 1,\n          \"arrivaldayshift\": 2,\n          \"landings\": []\n        }\n      ],\n      \"connections\": [\n        {\n          \"city\": \"KJA\",\n          \"cityName\": \"Красноярск\",\n          \"previousAirport\": \"KJA\",\n          \"previousAirportName\": \"Емельяново\",\n          \"nextAirport\": \"KJA\",\n          \"nextAirportName\": \"Емельяново\",\n          \"previousTerminal\": \"1\",\n          \"nextTerminal\": \"2\",\n          \"time\": \"21:00\"\n        }\n      ],\n      \"flightTime\": \"29:25\"\n    },\n    {\n      \"chainId\": \"6-8\",\n      \"flights\": [\n        {\n          \"id\": 6,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"4444\",\n          \"departuredate\": \"10.09.2018\",\n          \"date\": \"10.09.2018\",\n          \"departuretime\": \"23:00\",\n          \"arrivaldate\": \"11.09.2018\",\n          \"arrivaltime\": \"02:30\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"KJA\",\n          \"destinationportName\": \"Емельяново\",\n          \"destinationcity\": \"KJA\",\n          \"destinationcityName\": \"Красноярск\",\n          \"originport\": \"NSK\",\n          \"originportName\": \"Норильск Алыкель\",\n          \"origincity\": \"NSK\",\n          \"origincityName\": \"Норильск\",\n          \"destinationTerminal\": \"1\",\n          \"flighttime\": \"3:30\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 0,\n          \"arrivaldayshift\": 1,\n          \"landings\": []\n        },\n        {\n          \"id\": 8,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"119\",\n          \"departuredate\": \"11.09.2018\",\n          \"date\": \"11.09.2018\",\n          \"departuretime\": \"23:30\",\n          \"arrivaldate\": \"12.09.2018\",\n          \"arrivaltime\": \"00:25\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"DME\",\n          \"destinationportName\": \"Домодедово\",\n          \"destinationcity\": \"MOW\",\n          \"destinationcityName\": \"Москва\",\n          \"originport\": \"KJA\",\n          \"originportName\": \"Емельяново\",\n          \"origincity\": \"KJA\",\n          \"origincityName\": \"Красноярск\",\n          \"originTerminal\": \"2\",\n          \"flighttime\": \"4:55\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 1,\n          \"arrivaldayshift\": 2,\n          \"landings\": []\n        }\n      ],\n      \"connections\": [\n        {\n          \"city\": \"KJA\",\n          \"cityName\": \"Красноярск\",\n          \"previousAirport\": \"KJA\",\n          \"previousAirportName\": \"Емельяново\",\n          \"nextAirport\": \"KJA\",\n          \"nextAirportName\": \"Емельяново\",\n          \"previousTerminal\": \"1\",\n          \"nextTerminal\": \"2\",\n          \"time\": \"21:00\"\n        }\n      ],\n      \"flightTime\": \"29:25\"\n    }\n  ],\n  \"prices\": [\n    {\n      \"1\": [\n        {\n          \"clientId\": 7604,\n          \"price\": \"30126.00\",\n          \"originalPrice\": \"30126.00\",\n          \"currency\": \"RUB\",\n          \"brand\": \"Y7.Y7.Y.2.СТАНДАРТ\",\n          \"requestedBrands\": \"СТАНДАРТ\",\n          \"available\": 6\n        },\n        {\n          \"clientId\": 7604,\n          \"price\": \"70026.00\",\n          \"originalPrice\": \"70026.00\",\n          \"currency\": \"RUB\",\n          \"brand\": \"Y7.Y7.C.3.ЛАЙТ\",\n          \"requestedBrands\": \"ЛАЙТ\",\n          \"available\": 4\n        }\n      ]\n    },\n    {\n      \"6-8\": [\n        {\n          \"clientId\": 7604,\n          \"price\": \"32440.00\",\n          \"originalPrice\": \"32440.00\",\n          \"currency\": \"RUB\",\n          \"brand\": \"Y7.Y7.Y.1.ЛАЙТ\",\n          \"requestedBrands\": \"ЛАЙТ\",\n          \"available\": 6\n        }\n      ],\n      \"2\": [\n        {\n          \"clientId\": 7604,\n          \"price\": \"30800.00\",\n          \"originalPrice\": \"30800.00\",\n          \"currency\": \"RUB\",\n          \"brand\": \"Y7.Y7.Y.2.СТАНДАРТ\",\n          \"requestedBrands\": \"СТАНДАРТ\",\n          \"available\": 6\n        },\n        {\n          \"clientId\": 7604,\n          \"price\": \"70700.00\",\n          \"originalPrice\": \"70700.00\",\n          \"currency\": \"RUB\",\n          \"brand\": \"Y7.Y7.C.3.ЛАЙТ\",\n          \"requestedBrands\": \"ЛАЙТ\",\n          \"available\": 4\n        }\n      ],\n      \"7-8\": [\n        {\n          \"clientId\": 7604,\n          \"price\": \"32440.00\",\n          \"originalPrice\": \"32440.00\",\n          \"currency\": \"RUB\",\n          \"brand\": \"Y7.Y7.Y.1.ЛАЙТ\",\n          \"requestedBrands\": \"ЛАЙТ\",\n          \"available\": 6\n        }\n      ],\n      \"3-4\": [\n        {\n          \"clientId\": 7604,\n          \"price\": \"32440.00\",\n          \"originalPrice\": \"32440.00\",\n          \"currency\": \"RUB\",\n          \"brand\": \"Y7.Y7.Y.1.ЛАЙТ\",\n          \"requestedBrands\": \"ЛАЙТ\",\n          \"available\": 6\n        }\n      ],\n      \"3-5\": [\n        {\n          \"clientId\": 7604,\n          \"price\": \"32440.00\",\n          \"originalPrice\": \"32440.00\",\n          \"currency\": \"RUB\",\n          \"brand\": \"Y7.Y7.Y.1.ЛАЙТ\",\n          \"requestedBrands\": \"ЛАЙТ\",\n          \"available\": 6\n        }\n      ],\n      \"6-5\": [\n        {\n          \"clientId\": 7604,\n          \"price\": \"32440.00\",\n          \"originalPrice\": \"32440.00\",\n          \"currency\": \"RUB\",\n          \"brand\": \"Y7.Y7.Y.1.ЛАЙТ\",\n          \"requestedBrands\": \"ЛАЙТ\",\n          \"available\": 6\n        }\n      ],\n      \"7-5\": [\n        {\n          \"clientId\": 7604,\n          \"price\": \"32440.00\",\n          \"originalPrice\": \"32440.00\",\n          \"currency\": \"RUB\",\n          \"brand\": \"Y7.Y7.Y.1.ЛАЙТ\",\n          \"requestedBrands\": \"ЛАЙТ\",\n          \"available\": 6\n        }\n      ]\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api description/search-variants-mono-brand-cartesian.js",
    "groupTitle": "segments"
  }
] });
