
/**
 * @api {post} /json/search-variants-mono-brand-cartesian
 * доступные сегменты
 * @apiName get available segments
 * @apiGroup segments
 *
 * @apiParam {string} segmentsCount Кол-во пассажиров
   @apiParam {string}  date[0] Дата вылета
   @apiParam {string} origin-city-code[0] IATA код аэропорта вылета
   @apiParam {string} destination-city-code[0] NSK
   @apiParam {string} date[1]: 10.09.2018
   @apiParam {string} origin-city-code[1] NSK
   @apiParam {string} destination-city-code[1] MOW
   @apiParam {string} count-aaa 2
 *
 * @apiSuccessExample {json} success:
 *
 {
   "result": "ok",
   "availabilityInfoDates": [
     {
       "date": "23.08.2018",
       "available": true
     },
     {
       "date": "24.08.2018",
       "available": true
     },
     ...
   ]
 }
 *
 *
 */
