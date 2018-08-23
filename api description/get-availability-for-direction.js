
/**
 * @api {post} /json/get-availability-for-direction.js
 * Получить даты на которые доступны перелеты из origin-city-code в destination-city-code
 * @apiName get available dates
 * @apiGroup dates
 *
 * @apiParam {string} origin-city-code IATA код аэропорта вылета
 * @apiParam {string} destination-city-code  IATA код аэропорта прилета
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
