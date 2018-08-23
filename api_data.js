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
    "title": "доступные сегменты",
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
            "description": "<p>: 10.09.2018</p>"
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
          "content": "\n{\n  \"result\": \"ok\",\n  \"availabilityInfoDates\": [\n    {\n      \"date\": \"23.08.2018\",\n      \"available\": true\n    },\n    {\n      \"date\": \"24.08.2018\",\n      \"available\": true\n    },\n    ...\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "api description/search-variants-mono-brand-cartesian.js",
    "groupTitle": "segments"
  }
] });
