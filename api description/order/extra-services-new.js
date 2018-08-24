/**
 @api {get} /json/extra-services-new
 запросить список доступных доп. услуг
 @apiName extra services new
 @apiGroup Order
 @apiSuccessExample {json} success:

 [
 {
   "defaultSelected": false,
   "bulkAdd": false,
   "passengers": [
     {
       "id": 1,
       "segments": [
         {
           "id": 3,
           "availableExtraServices": [
             [
               {
                 "serviceType": "F",
                 "rfisc": "ML1",
                 "shouldSelectByDefault": false,
                 "price": "699.00",
                 "limit": 1,
                 "affectedSegmentIds": [],
                 "description": "Поло Эль Форно",
                 "currency": "RUB",
                 "title": "Поло Эль Форно"
               },
               {
                 "serviceType": "F",
                 "rfisc": "ML2",
                 "shouldSelectByDefault": false,
                 "price": "699.00",
                 "limit": 1,
                 "affectedSegmentIds": [],
                 "description": "Паста Карбонара",
                 "currency": "RUB",
                 "title": "Паста Карбонара"
               },
               {
                 "serviceType": "F",
                 "rfisc": "ML3",
                 "shouldSelectByDefault": false,
                 "price": "749.00",
                 "limit": 1,
                 "affectedSegmentIds": [],
                 "description": "Салмоне кон фомоджио",
                 "currency": "RUB",
                 "title": "Салмоне кон фомоджио"
               }
             ]
           ],
           "empty": false
         }
       ]
     }
   ],
   "code": "meal",
   "iconCode": null,
   "title": "Питание",
   "showMinPrice": false,
   "autoExpand": false,
   "structure": {
     "subgroups": [
       {
         "code": "hot",
         "title": "Горячие",
         "type": "SELECT"
       }
     ]
   },
   "empty": false
 },
 {
   "defaultSelected": false,
   "bulkAdd": false,
   "passengers": [
     {
       "id": 1,
       "segments": [
         {
           "id": 1,
           "availableExtraServices": [
             [
               {
                 "serviceType": "P",
                 "rfisc": "0GP",
                 "shouldSelectByDefault": false,
                 "price": "4000.00",
                 "limit": 9,
                 "affectedSegmentIds": [
                   1,
                   2
                 ],
                 "description": "web.extraServices.0GP.P.ALL.description",
                 "currency": "RUB",
                 "title": "Багаж до 23кг"
               },
               {
                 "serviceType": "P",
                 "rfisc": "0M6",
                 "shouldSelectByDefault": false,
                 "price": "8000.00",
                 "limit": 9,
                 "affectedSegmentIds": [
                   1,
                   2
                 ],
                 "description": "web.extraServices.0M6.P.ALL.description",
                 "currency": "RUB",
                 "title": "Багаж от 24кг до 30кг"
               }
             ]
           ],
           "empty": false
         },
         {
           "id": 3,
           "availableExtraServices": [
             [
               {
                 "serviceType": "P",
                 "rfisc": "0GP",
                 "shouldSelectByDefault": false,
                 "price": "2000.00",
                 "limit": 9,
                 "affectedSegmentIds": [],
                 "description": "web.extraServices.0GP.P.ALL.description",
                 "currency": "RUB",
                 "title": "Багаж до 23кг"
               },
               {
                 "serviceType": "P",
                 "rfisc": "0M6",
                 "shouldSelectByDefault": false,
                 "price": "4000.00",
                 "limit": 9,
                 "affectedSegmentIds": [],
                 "description": "web.extraServices.0M6.P.ALL.description",
                 "currency": "RUB",
                 "title": "Багаж от 24кг до 30кг"
               }
             ]
           ],
           "empty": false
         }
       ]
     }
   ],
   "code": "baggage",
   "iconCode": null,
   "title": "Багаж",
   "showMinPrice": false,
   "autoExpand": false,
   "structure": {
     "subgroups": [
       {
         "code": "common",
         "title": "Багаж",
         "type": "COUNTABLE_MULTIPLE_SELECT"
       }
     ]
   },
   "empty": false
 },
 {
   "defaultSelected": false,
   "bulkAdd": false,
   "passengers": [
     {
       "id": 1,
       "segments": [
         {
           "id": 3,
           "availableExtraServices": [
             [
               {
                 "serviceType": "F",
                 "rfisc": "BAS",
                 "shouldSelectByDefault": false,
                 "price": "300.00",
                 "limit": 1,
                 "affectedSegmentIds": [],
                 "description": "web.extraServices.BAS.F.ALL.description",
                 "currency": "RUB",
                 "title": "web.extraServices.BAS.F.ALL.title"
               },
               {
                 "serviceType": "F",
                 "rfisc": "CMF",
                 "shouldSelectByDefault": false,
                 "price": "1000.00",
                 "limit": 1,
                 "affectedSegmentIds": [],
                 "description": "web.extraServices.CMF.F.ALL.description",
                 "currency": "RUB",
                 "title": "web.extraServices.CMF.F.ALL.title"
               }
             ]
           ],
           "empty": false
         }
       ]
     }
   ],
   "code": "seat",
   "iconCode": null,
   "title": "Выбор места",
   "showMinPrice": false,
   "autoExpand": false,
   "structure": {
     "subgroups": [
       {
         "code": "common",
         "title": "Выбор места",
         "type": "EXACT_VALUE"
       }
     ]
   },
   "empty": false
 }
 ]

 */
