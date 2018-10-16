/**
 @api {post} /json/cartesian-search-period
 получение доступных перелетов на неделю

 @apiDescription
 Получить доступные сегменты. отличается от search-variants-mono-brand-cartesian
 тем что второй ищет сегменты на день
 @apiGroup Oxygen


 @apiParam {string} segmentsCount Кол-во пассажиров
 @apiParam {string} date[0] Дата вылета
 @apiParam {string} origin-city-code[0] IATA код аэропорта вылета
 @apiParam {string} destination-city-code[0] NSK
 @apiParam {string} date[1] 10.09.2018
 @apiParam {string} origin-city-code[1] NSK
 @apiParam {string} destination-city-code[1] MOW
 @apiParam {string} count-aaa 2
 @apiParam {string} lang 2
 @apiParam {string} currency 2


 @apiSuccessExample {json} пример для {"segmentsCount": 2, "date[0]": "24.08.2018", "origin-city-code[0]": "MOW", "destination-city-code[1]": "MRV"}:


 {
   "result": "ok",
   "segmentsCalendar": [
     [
       {
         "date": "24.08.2018",
         "summ": "7785.00",
         "currency": "RUB"
       },
       {
         "date": "25.08.2018",
         "summ": "4485.00",
         "currency": "RUB"
       },
       {
         "date": "26.08.2018",
         "summ": "3485.00",
         "currency": "RUB"
       },
       {
         "date": "27.08.2018",
         "summ": "2985.00",
         "currency": "RUB"
       }
     ],
     [
       {
         "date": "07.09.2018",
         "summ": "3785.00",
         "currency": "RUB"
       },
       {
         "date": "08.09.2018",
         "summ": "3485.00",
         "currency": "RUB"
       },
       {
         "date": "09.09.2018",
         "summ": "3285.00",
         "currency": "RUB"
       },
       {
         "date": "10.09.2018",
         "summ": "3285.00",
         "currency": "RUB"
       },
       {
         "date": "11.09.2018",
         "summ": "3285.00",
         "currency": "RUB"
       },
       {
         "date": "12.09.2018",
         "summ": "3285.00",
         "currency": "RUB"
       },
       {
         "date": "13.09.2018",
         "summ": "3285.00",
         "currency": "RUB"
       }
     ]
   ]
 }





 */
