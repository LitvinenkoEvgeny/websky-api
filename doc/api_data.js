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
          "content": "\n\n\n{\n  \"result\": \"ok\",\n  \"destination\": [\n    {\n      \"countryNameRu\": \"Российская Федерация\",\n      \"countryEn\": \"RU\",\n      \"nameRu\": \"Анадырь\",\n      \"countryRu\": \"РФ\",\n      \"codeRu\": \"АНЫ\",\n      \"nameEn\": \"Anadyr\",\n      \"codeEn\": \"DYR\",\n      \"countryNameEn\": \"Russian Federation\",\n      \"airports\": [\n        {\n          \"nameRu\": \"Анадырь\",\n          \"codeRu\": \"АНЫ\",\n          \"nameEn\": \"Anadyr\",\n          \"codeEn\": \"DYR\"\n        }\n        ...\n      ]\n    }\n      ...\n  ],\n  \"origin\": [\n    {\n      \"countryNameRu\": \"Российская Федерация\",\n      \"countryEn\": \"RU\",\n      \"nameRu\": \"Анадырь\",\n      \"countryRu\": \"РФ\",\n      \"codeRu\": \"АНЫ\",\n      \"nameEn\": \"Anadyr\",\n      \"codeEn\": \"DYR\",\n      \"countryNameEn\": \"Russian Federation\",\n      \"airports\": [\n        {\n          \"nameRu\": \"Анадырь\",\n          \"codeRu\": \"АНЫ\",\n          \"nameEn\": \"Anadyr\",\n          \"codeEn\": \"DYR\"\n        }\n        ...\n      ]\n    }\n    ...\n  ]\n}",
          "type": "json"
        },
        {
          "title": "Без параметров returnPoints и cityCode:",
          "content": "{\n  \"result\": \"ok\",\n\n  \"destination\": [\n    {\n      \"countryNameRu\": \"Российская Федерация\",\n      \"countryEn\": \"RU\",\n      \"nameRu\": \"Анадырь\",\n      \"countryRu\": \"РФ\",\n      \"codeRu\": \"АНЫ\",\n      \"nameEn\": \"Anadyr\",\n      \"codeEn\": \"DYR\",\n      \"countryNameEn\": \"Russian Federation\",\n      \"airports\": [\n        {\n          \"nameRu\": \"Анадырь\",\n          \"codeRu\": \"АНЫ\",\n          \"nameEn\": \"Anadyr\",\n          \"codeEn\": \"DYR\"\n        }\n      ]\n    }\n  ],",
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
            "type": "string",
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
            "type": "string",
            "optional": false,
            "field": "documentNumber[n]",
            "description": "<p>Номер документа</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
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
    "filename": "api description/passengers-add.js",
    "groupTitle": "Order"
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
          "content": "\n{\n  \"result\": \"ok\",\n  \"availabilityInfoDates\": [\n    {\n      \"date\": \"23.08.2018\",\n      \"available\": true\n    },\n    {\n      \"date\": \"24.08.2018\",\n      \"available\": true\n    },\n    ...\n  ]\n}",
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
          "content": "\n\n\n\n\n\n\n\n{\n  \"result\": \"ok\",\n  \"flights\": [\n    {\n      \"chainId\": \"1\",\n      \"flights\": [\n        {\n          \"id\": 1,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"103\",\n          \"departuredate\": \"23.08.2018\",\n          \"date\": \"23.08.2018\",\n          \"departuretime\": \"22:10\",\n          \"arrivaldate\": \"24.08.2018\",\n          \"arrivaltime\": \"06:15\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"NSK\",\n          \"destinationportName\": \"Норильск Алыкель\",\n          \"destinationcity\": \"NSK\",\n          \"destinationcityName\": \"Норильск\",\n          \"originport\": \"DME\",\n          \"originportName\": \"Домодедово\",\n          \"origincity\": \"MOW\",\n          \"origincityName\": \"Москва\",\n          \"flighttime\": \"4:05\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 0,\n          \"arrivaldayshift\": 1,\n          \"landings\": []\n        }\n      ],\n      \"connections\": [],\n      \"flightTime\": \"04:05\"\n    },\n    {\n      \"chainId\": \"2\",\n      \"flights\": [\n        {\n          \"id\": 2,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"3333\",\n          \"departuredate\": \"10.09.2018\",\n          \"date\": \"10.09.2018\",\n          \"departuretime\": \"10:00\",\n          \"arrivaldate\": \"10.09.2018\",\n          \"arrivaltime\": \"11:30\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"DME\",\n          \"destinationportName\": \"Домодедово\",\n          \"destinationcity\": \"MOW\",\n          \"destinationcityName\": \"Москва\",\n          \"originport\": \"NSK\",\n          \"originportName\": \"Норильск Алыкель\",\n          \"origincity\": \"NSK\",\n          \"origincityName\": \"Норильск\",\n          \"flighttime\": \"5:30\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 0,\n          \"arrivaldayshift\": 0,\n          \"landings\": []\n        }\n      ],\n      \"connections\": [],\n      \"flightTime\": \"05:30\"\n    },\n    {\n      \"chainId\": \"3-4\",\n      \"flights\": [\n        {\n          \"id\": 3,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"4443\",\n          \"departuredate\": \"10.09.2018\",\n          \"date\": \"10.09.2018\",\n          \"departuretime\": \"18:00\",\n          \"arrivaldate\": \"10.09.2018\",\n          \"arrivaltime\": \"20:30\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"KJA\",\n          \"destinationportName\": \"Емельяново\",\n          \"destinationcity\": \"KJA\",\n          \"destinationcityName\": \"Красноярск\",\n          \"originport\": \"NSK\",\n          \"originportName\": \"Норильск Алыкель\",\n          \"origincity\": \"NSK\",\n          \"origincityName\": \"Норильск\",\n          \"destinationTerminal\": \"1\",\n          \"flighttime\": \"2:30\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 0,\n          \"arrivaldayshift\": 0,\n          \"landings\": []\n        },\n        {\n          \"id\": 4,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"119\",\n          \"departuredate\": \"10.09.2018\",\n          \"date\": \"10.09.2018\",\n          \"departuretime\": \"23:30\",\n          \"arrivaldate\": \"11.09.2018\",\n          \"arrivaltime\": \"00:25\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"DME\",\n          \"destinationportName\": \"Домодедово\",\n          \"destinationcity\": \"MOW\",\n          \"destinationcityName\": \"Москва\",\n          \"originport\": \"KJA\",\n          \"originportName\": \"Емельяново\",\n          \"origincity\": \"KJA\",\n          \"origincityName\": \"Красноярск\",\n          \"originTerminal\": \"2\",\n          \"flighttime\": \"4:55\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 0,\n          \"arrivaldayshift\": 1,\n          \"landings\": []\n        }\n      ],\n      \"connections\": [\n        {\n          \"city\": \"KJA\",\n          \"cityName\": \"Красноярск\",\n          \"previousAirport\": \"KJA\",\n          \"previousAirportName\": \"Емельяново\",\n          \"nextAirport\": \"KJA\",\n          \"nextAirportName\": \"Емельяново\",\n          \"previousTerminal\": \"1\",\n          \"nextTerminal\": \"2\",\n          \"time\": \"03:00\"\n        }\n      ],\n      \"flightTime\": \"10:25\"\n    },\n    {\n      \"chainId\": \"3-5\",\n      \"flights\": [\n        {\n          \"id\": 3,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"4443\",\n          \"departuredate\": \"10.09.2018\",\n          \"date\": \"10.09.2018\",\n          \"departuretime\": \"18:00\",\n          \"arrivaldate\": \"10.09.2018\",\n          \"arrivaltime\": \"20:30\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"KJA\",\n          \"destinationportName\": \"Емельяново\",\n          \"destinationcity\": \"KJA\",\n          \"destinationcityName\": \"Красноярск\",\n          \"originport\": \"NSK\",\n          \"originportName\": \"Норильск Алыкель\",\n          \"origincity\": \"NSK\",\n          \"origincityName\": \"Норильск\",\n          \"destinationTerminal\": \"1\",\n          \"flighttime\": \"2:30\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 0,\n          \"arrivaldayshift\": 0,\n          \"landings\": []\n        },\n        {\n          \"id\": 5,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"118\",\n          \"departuredate\": \"11.09.2018\",\n          \"date\": \"11.09.2018\",\n          \"departuretime\": \"12:00\",\n          \"arrivaldate\": \"11.09.2018\",\n          \"arrivaltime\": \"17:30\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"DME\",\n          \"destinationportName\": \"Домодедово\",\n          \"destinationcity\": \"MOW\",\n          \"destinationcityName\": \"Москва\",\n          \"originport\": \"KJA\",\n          \"originportName\": \"Емельяново\",\n          \"origincity\": \"KJA\",\n          \"origincityName\": \"Красноярск\",\n          \"originTerminal\": \"2\",\n          \"flighttime\": \"9:30\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 1,\n          \"arrivaldayshift\": 1,\n          \"landings\": []\n        }\n      ],\n      \"connections\": [\n        {\n          \"city\": \"KJA\",\n          \"cityName\": \"Красноярск\",\n          \"previousAirport\": \"KJA\",\n          \"previousAirportName\": \"Емельяново\",\n          \"nextAirport\": \"KJA\",\n          \"nextAirportName\": \"Емельяново\",\n          \"previousTerminal\": \"1\",\n          \"nextTerminal\": \"2\",\n          \"time\": \"15:30\"\n        }\n      ],\n      \"flightTime\": \"27:30\"\n    },\n    {\n      \"chainId\": \"6-5\",\n      \"flights\": [\n        {\n          \"id\": 6,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"4444\",\n          \"departuredate\": \"10.09.2018\",\n          \"date\": \"10.09.2018\",\n          \"departuretime\": \"23:00\",\n          \"arrivaldate\": \"11.09.2018\",\n          \"arrivaltime\": \"02:30\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"KJA\",\n          \"destinationportName\": \"Емельяново\",\n          \"destinationcity\": \"KJA\",\n          \"destinationcityName\": \"Красноярск\",\n          \"originport\": \"NSK\",\n          \"originportName\": \"Норильск Алыкель\",\n          \"origincity\": \"NSK\",\n          \"origincityName\": \"Норильск\",\n          \"destinationTerminal\": \"1\",\n          \"flighttime\": \"3:30\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 0,\n          \"arrivaldayshift\": 1,\n          \"landings\": []\n        },\n        {\n          \"id\": 5,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"118\",\n          \"departuredate\": \"11.09.2018\",\n          \"date\": \"11.09.2018\",\n          \"departuretime\": \"12:00\",\n          \"arrivaldate\": \"11.09.2018\",\n          \"arrivaltime\": \"17:30\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"DME\",\n          \"destinationportName\": \"Домодедово\",\n          \"destinationcity\": \"MOW\",\n          \"destinationcityName\": \"Москва\",\n          \"originport\": \"KJA\",\n          \"originportName\": \"Емельяново\",\n          \"origincity\": \"KJA\",\n          \"origincityName\": \"Красноярск\",\n          \"originTerminal\": \"2\",\n          \"flighttime\": \"9:30\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 1,\n          \"arrivaldayshift\": 1,\n          \"landings\": []\n        }\n      ],\n      \"connections\": [\n        {\n          \"city\": \"KJA\",\n          \"cityName\": \"Красноярск\",\n          \"previousAirport\": \"KJA\",\n          \"previousAirportName\": \"Емельяново\",\n          \"nextAirport\": \"KJA\",\n          \"nextAirportName\": \"Емельяново\",\n          \"previousTerminal\": \"1\",\n          \"nextTerminal\": \"2\",\n          \"time\": \"09:30\"\n        }\n      ],\n      \"flightTime\": \"22:30\"\n    },\n    {\n      \"chainId\": \"7-5\",\n      \"flights\": [\n        {\n          \"id\": 7,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"4445\",\n          \"departuredate\": \"10.09.2018\",\n          \"date\": \"10.09.2018\",\n          \"departuretime\": \"23:00\",\n          \"arrivaldate\": \"11.09.2018\",\n          \"arrivaltime\": \"02:30\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"KJA\",\n          \"destinationportName\": \"Емельяново\",\n          \"destinationcity\": \"KJA\",\n          \"destinationcityName\": \"Красноярск\",\n          \"originport\": \"NSK\",\n          \"originportName\": \"Норильск Алыкель\",\n          \"origincity\": \"NSK\",\n          \"origincityName\": \"Норильск\",\n          \"destinationTerminal\": \"1\",\n          \"flighttime\": \"3:30\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 0,\n          \"arrivaldayshift\": 1,\n          \"landings\": []\n        },\n        {\n          \"id\": 5,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"118\",\n          \"departuredate\": \"11.09.2018\",\n          \"date\": \"11.09.2018\",\n          \"departuretime\": \"12:00\",\n          \"arrivaldate\": \"11.09.2018\",\n          \"arrivaltime\": \"17:30\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"DME\",\n          \"destinationportName\": \"Домодедово\",\n          \"destinationcity\": \"MOW\",\n          \"destinationcityName\": \"Москва\",\n          \"originport\": \"KJA\",\n          \"originportName\": \"Емельяново\",\n          \"origincity\": \"KJA\",\n          \"origincityName\": \"Красноярск\",\n          \"originTerminal\": \"2\",\n          \"flighttime\": \"9:30\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 1,\n          \"arrivaldayshift\": 1,\n          \"landings\": []\n        }\n      ],\n      \"connections\": [\n        {\n          \"city\": \"KJA\",\n          \"cityName\": \"Красноярск\",\n          \"previousAirport\": \"KJA\",\n          \"previousAirportName\": \"Емельяново\",\n          \"nextAirport\": \"KJA\",\n          \"nextAirportName\": \"Емельяново\",\n          \"previousTerminal\": \"1\",\n          \"nextTerminal\": \"2\",\n          \"time\": \"09:30\"\n        }\n      ],\n      \"flightTime\": \"22:30\"\n    },\n    {\n      \"chainId\": \"7-8\",\n      \"flights\": [\n        {\n          \"id\": 7,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"4445\",\n          \"departuredate\": \"10.09.2018\",\n          \"date\": \"10.09.2018\",\n          \"departuretime\": \"23:00\",\n          \"arrivaldate\": \"11.09.2018\",\n          \"arrivaltime\": \"02:30\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"KJA\",\n          \"destinationportName\": \"Емельяново\",\n          \"destinationcity\": \"KJA\",\n          \"destinationcityName\": \"Красноярск\",\n          \"originport\": \"NSK\",\n          \"originportName\": \"Норильск Алыкель\",\n          \"origincity\": \"NSK\",\n          \"origincityName\": \"Норильск\",\n          \"destinationTerminal\": \"1\",\n          \"flighttime\": \"3:30\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 0,\n          \"arrivaldayshift\": 1,\n          \"landings\": []\n        },\n        {\n          \"id\": 8,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"119\",\n          \"departuredate\": \"11.09.2018\",\n          \"date\": \"11.09.2018\",\n          \"departuretime\": \"23:30\",\n          \"arrivaldate\": \"12.09.2018\",\n          \"arrivaltime\": \"00:25\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"DME\",\n          \"destinationportName\": \"Домодедово\",\n          \"destinationcity\": \"MOW\",\n          \"destinationcityName\": \"Москва\",\n          \"originport\": \"KJA\",\n          \"originportName\": \"Емельяново\",\n          \"origincity\": \"KJA\",\n          \"origincityName\": \"Красноярск\",\n          \"originTerminal\": \"2\",\n          \"flighttime\": \"4:55\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 1,\n          \"arrivaldayshift\": 2,\n          \"landings\": []\n        }\n      ],\n      \"connections\": [\n        {\n          \"city\": \"KJA\",\n          \"cityName\": \"Красноярск\",\n          \"previousAirport\": \"KJA\",\n          \"previousAirportName\": \"Емельяново\",\n          \"nextAirport\": \"KJA\",\n          \"nextAirportName\": \"Емельяново\",\n          \"previousTerminal\": \"1\",\n          \"nextTerminal\": \"2\",\n          \"time\": \"21:00\"\n        }\n      ],\n      \"flightTime\": \"29:25\"\n    },\n    {\n      \"chainId\": \"6-8\",\n      \"flights\": [\n        {\n          \"id\": 6,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"4444\",\n          \"departuredate\": \"10.09.2018\",\n          \"date\": \"10.09.2018\",\n          \"departuretime\": \"23:00\",\n          \"arrivaldate\": \"11.09.2018\",\n          \"arrivaltime\": \"02:30\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"KJA\",\n          \"destinationportName\": \"Емельяново\",\n          \"destinationcity\": \"KJA\",\n          \"destinationcityName\": \"Красноярск\",\n          \"originport\": \"NSK\",\n          \"originportName\": \"Норильск Алыкель\",\n          \"origincity\": \"NSK\",\n          \"origincityName\": \"Норильск\",\n          \"destinationTerminal\": \"1\",\n          \"flighttime\": \"3:30\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 0,\n          \"arrivaldayshift\": 1,\n          \"landings\": []\n        },\n        {\n          \"id\": 8,\n          \"company\": {\n            \"code_en\": \"Y7\",\n            \"name_en\": \"ЮТЭЙР\",\n            \"code\": \"Y7\",\n            \"name\": \"ЮТЭЙР\"\n          },\n          \"carrier\": \"Y7\",\n          \"racenumber\": \"119\",\n          \"departuredate\": \"11.09.2018\",\n          \"date\": \"11.09.2018\",\n          \"departuretime\": \"23:30\",\n          \"arrivaldate\": \"12.09.2018\",\n          \"arrivaltime\": \"00:25\",\n          \"airplane\": \"БОИНГ 737-800\",\n          \"airplaneName\": \"БОИНГ 737-800\",\n          \"vehicleCodeEn\": \"738\",\n          \"destinationport\": \"DME\",\n          \"destinationportName\": \"Домодедово\",\n          \"destinationcity\": \"MOW\",\n          \"destinationcityName\": \"Москва\",\n          \"originport\": \"KJA\",\n          \"originportName\": \"Емельяново\",\n          \"origincity\": \"KJA\",\n          \"origincityName\": \"Красноярск\",\n          \"originTerminal\": \"2\",\n          \"flighttime\": \"4:55\",\n          \"delaydays\": 0,\n          \"departuredayshift\": 1,\n          \"arrivaldayshift\": 2,\n          \"landings\": []\n        }\n      ],\n      \"connections\": [\n        {\n          \"city\": \"KJA\",\n          \"cityName\": \"Красноярск\",\n          \"previousAirport\": \"KJA\",\n          \"previousAirportName\": \"Емельяново\",\n          \"nextAirport\": \"KJA\",\n          \"nextAirportName\": \"Емельяново\",\n          \"previousTerminal\": \"1\",\n          \"nextTerminal\": \"2\",\n          \"time\": \"21:00\"\n        }\n      ],\n      \"flightTime\": \"29:25\"\n    }\n  ],\n  \"prices\": [\n    {\n      \"1\": [\n        {\n          \"clientId\": 7604,\n          \"price\": \"30126.00\",\n          \"originalPrice\": \"30126.00\",\n          \"currency\": \"RUB\",\n          \"brand\": \"Y7.Y7.Y.2.СТАНДАРТ\",\n          \"requestedBrands\": \"СТАНДАРТ\",\n          \"available\": 6\n        },\n        {\n          \"clientId\": 7604,\n          \"price\": \"70026.00\",\n          \"originalPrice\": \"70026.00\",\n          \"currency\": \"RUB\",\n          \"brand\": \"Y7.Y7.C.3.ЛАЙТ\",\n          \"requestedBrands\": \"ЛАЙТ\",\n          \"available\": 4\n        }\n      ]\n    },\n    {\n      \"6-8\": [\n        {\n          \"clientId\": 7604,\n          \"price\": \"32440.00\",\n          \"originalPrice\": \"32440.00\",\n          \"currency\": \"RUB\",\n          \"brand\": \"Y7.Y7.Y.1.ЛАЙТ\",\n          \"requestedBrands\": \"ЛАЙТ\",\n          \"available\": 6\n        }\n      ],\n      \"2\": [\n        {\n          \"clientId\": 7604,\n          \"price\": \"30800.00\",\n          \"originalPrice\": \"30800.00\",\n          \"currency\": \"RUB\",\n          \"brand\": \"Y7.Y7.Y.2.СТАНДАРТ\",\n          \"requestedBrands\": \"СТАНДАРТ\",\n          \"available\": 6\n        },\n        {\n          \"clientId\": 7604,\n          \"price\": \"70700.00\",\n          \"originalPrice\": \"70700.00\",\n          \"currency\": \"RUB\",\n          \"brand\": \"Y7.Y7.C.3.ЛАЙТ\",\n          \"requestedBrands\": \"ЛАЙТ\",\n          \"available\": 4\n        }\n      ],\n      \"7-8\": [\n        {\n          \"clientId\": 7604,\n          \"price\": \"32440.00\",\n          \"originalPrice\": \"32440.00\",\n          \"currency\": \"RUB\",\n          \"brand\": \"Y7.Y7.Y.1.ЛАЙТ\",\n          \"requestedBrands\": \"ЛАЙТ\",\n          \"available\": 6\n        }\n      ],\n      \"3-4\": [\n        {\n          \"clientId\": 7604,\n          \"price\": \"32440.00\",\n          \"originalPrice\": \"32440.00\",\n          \"currency\": \"RUB\",\n          \"brand\": \"Y7.Y7.Y.1.ЛАЙТ\",\n          \"requestedBrands\": \"ЛАЙТ\",\n          \"available\": 6\n        }\n      ],\n      \"3-5\": [\n        {\n          \"clientId\": 7604,\n          \"price\": \"32440.00\",\n          \"originalPrice\": \"32440.00\",\n          \"currency\": \"RUB\",\n          \"brand\": \"Y7.Y7.Y.1.ЛАЙТ\",\n          \"requestedBrands\": \"ЛАЙТ\",\n          \"available\": 6\n        }\n      ],\n      \"6-5\": [\n        {\n          \"clientId\": 7604,\n          \"price\": \"32440.00\",\n          \"originalPrice\": \"32440.00\",\n          \"currency\": \"RUB\",\n          \"brand\": \"Y7.Y7.Y.1.ЛАЙТ\",\n          \"requestedBrands\": \"ЛАЙТ\",\n          \"available\": 6\n        }\n      ],\n      \"7-5\": [\n        {\n          \"clientId\": 7604,\n          \"price\": \"32440.00\",\n          \"originalPrice\": \"32440.00\",\n          \"currency\": \"RUB\",\n          \"brand\": \"Y7.Y7.Y.1.ЛАЙТ\",\n          \"requestedBrands\": \"ЛАЙТ\",\n          \"available\": 6\n        }\n      ]\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api description/search-variants-mono-brand-cartesian.js",
    "groupTitle": "segments"
  }
] });
