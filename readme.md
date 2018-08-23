- запрос на получение доступных аэропортов




    ?returnPoints

    ?cityCode - IATA код

    если в теле запроса передан параметр cityCode,
    возвращаются аэропорты доступные в качестве пункта назначения

    ```
        {
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
                }...
              ]
            }
          }
        ]

    ```