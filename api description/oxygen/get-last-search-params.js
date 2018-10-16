/**
 @api {get} /json/get-last-search-params
 Получить информацию о последнем поиске пользователя.
 @apiDescription
 {result: "empty"}
 либо
 см. success
 @apiName get application constants
 @apiGroup Oxygen

 @apiSuccessExample {json} success:
 {
   "rvgCount": 0,
   "directOnly": false,
   "destinationCodes": [
     "LED",
     "MOW"
   ],
   "aaaCount": 1,
   "mlaCount": 0,
   "rmgCount": 0,
   "rbgCount": 0,
   "dates": [
     "17.10.2018",
     "01.11.2018"
   ],
   "pensionerCount": 0,
   "segmentsCount": 2,
   "originCodes": [
     "MOW",
     "LED"
   ]
 }
 */
