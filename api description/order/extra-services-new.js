/**
 * @api {get} /json/extra-services-new
 * запросить список доступных доп. услуг
 * @apiName extra services new
 * @apiGroup Order
 *
 *
 *
 *
 * @apiSuccessExample {json} success:
     [
         {
           "code": "insurance",
           "type": "insurance",
           "items": [
             {
               "insurance": "250000.00",
               "luggage": null,
               "luggage_premium": null,
               "currency": "RUB",
               "tins": "TM",
               "insurance_premium": "500.00",
               "ins": "A"
             }
           ]
         },
         {
           "defaultSelected": true,
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
                         "serviceType": "F",
                         "rfisc": "0LQ",
                         "shouldSelectByDefault": false,
                         "price": "300.00",
                         "limit": 2,
                         "affectedSegmentIds": [],
                         "description": "Описание",
                         "currency": "RUB",
                         "title": "Холодное блюдо"
                       }
                     ],
                     [
                       {
                         "serviceType": "F",
                         "rfisc": "0LP",
                         "shouldSelectByDefault": false,
                         "price": "300.00",
                         "limit": 2,
                         "affectedSegmentIds": [],
                         "description": " ",
                         "currency": "RUB",
                         "title": "web.extraServices.0LP.F.ALL.title"
                       }
                     ]
                   ],
                   "empty": false
                 },
                 {
                   "id": 2,
                   "availableExtraServices": [
                     [
                       {
                         "serviceType": "F",
                         "rfisc": "0LQ",
                         "shouldSelectByDefault": false,
                         "price": "300.00",
                         "limit": 2,
                         "affectedSegmentIds": [],
                         "description": "Описание",
                         "currency": "RUB",
                         "title": "Холодное блюдо"
                       }
                     ],
                     [
                       {
                         "serviceType": "F",
                         "rfisc": "0LP",
                         "shouldSelectByDefault": false,
                         "price": "300.00",
                         "limit": 2,
                         "affectedSegmentIds": [],
                         "description": " ",
                         "currency": "RUB",
                         "title": "web.extraServices.0LP.F.ALL.title"
                       }
                     ]
                   ],
                   "empty": false
                 }
               ]
             },
             {
               "id": 2,
               "segments": [
                 {
                   "id": 1,
                   "availableExtraServices": [
                     [
                       {
                         "serviceType": "F",
                         "rfisc": "0LQ",
                         "shouldSelectByDefault": false,
                         "price": "300.00",
                         "limit": 2,
                         "affectedSegmentIds": [],
                         "description": "Описание",
                         "currency": "RUB",
                         "title": "Холодное блюдо"
                       }
                     ],
                     [
                       {
                         "serviceType": "F",
                         "rfisc": "0LP",
                         "shouldSelectByDefault": false,
                         "price": "300.00",
                         "limit": 2,
                         "affectedSegmentIds": [],
                         "description": " ",
                         "currency": "RUB",
                         "title": "web.extraServices.0LP.F.ALL.title"
                       }
                     ]
                   ],
                   "empty": false
                 },
                 {
                   "id": 2,
                   "availableExtraServices": [
                     [
                       {
                         "serviceType": "F",
                         "rfisc": "0LQ",
                         "shouldSelectByDefault": false,
                         "price": "300.00",
                         "limit": 2,
                         "affectedSegmentIds": [],
                         "description": "Описание",
                         "currency": "RUB",
                         "title": "Холодное блюдо"
                       }
                     ],
                     [
                       {
                         "serviceType": "F",
                         "rfisc": "0LP",
                         "shouldSelectByDefault": false,
                         "price": "300.00",
                         "limit": 2,
                         "affectedSegmentIds": [],
                         "description": " ",
                         "currency": "RUB",
                         "title": "web.extraServices.0LP.F.ALL.title"
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
                 "code": "cold",
                 "title": "Холодные",
                 "type": "MULTIPLE_SELECT"
               },
               {
                 "code": "special",
                 "title": "Специальные",
                 "type": "MULTIPLE_SELECT"
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
                         "serviceType": "F",
                         "rfisc": "CMF",
                         "shouldSelectByDefault": false,
                         "price": "300.00",
                         "limit": 1,
                         "affectedSegmentIds": [],
                         "description": "web.extraServices.CMF.F.ALL.description",
                         "currency": "RUB",
                         "title": "web.extraServices.CMF.F.ALL.title"
                       }
                     ]
                   ],
                   "empty": false
                 },
                 {
                   "id": 2,
                   "availableExtraServices": [
                     [
                       {
                         "serviceType": "F",
                         "rfisc": "CMF",
                         "shouldSelectByDefault": false,
                         "price": "300.00",
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
             },
             {
               "id": 2,
               "segments": [
                 {
                   "id": 1,
                   "availableExtraServices": [
                     [
                       {
                         "serviceType": "F",
                         "rfisc": "CMF",
                         "shouldSelectByDefault": false,
                         "price": "300.00",
                         "limit": 1,
                         "affectedSegmentIds": [],
                         "description": "web.extraServices.CMF.F.ALL.description",
                         "currency": "RUB",
                         "title": "web.extraServices.CMF.F.ALL.title"
                       }
                     ]
                   ],
                   "empty": false
                 },
                 {
                   "id": 2,
                   "availableExtraServices": [
                     [
                       {
                         "serviceType": "F",
                         "rfisc": "CMF",
                         "shouldSelectByDefault": false,
                         "price": "300.00",
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
                         "rfisc": "0AA",
                         "shouldSelectByDefault": false,
                         "price": "450.00",
                         "limit": 30,
                         "affectedSegmentIds": [],
                         "description": "web.extraServices.0AA.P.ALL.description",
                         "currency": "RUB",
                         "title": "Багаж"
                       }
                     ]
                   ],
                   "empty": false
                 },
                 {
                   "id": 2,
                   "availableExtraServices": [
                     [
                       {
                         "serviceType": "P",
                         "rfisc": "0AA",
                         "shouldSelectByDefault": false,
                         "price": "450.00",
                         "limit": 30,
                         "affectedSegmentIds": [],
                         "description": "web.extraServices.0AA.P.ALL.description",
                         "currency": "RUB",
                         "title": "Багаж"
                       }
                     ]
                   ],
                   "empty": false
                 }
               ]
             },
             {
               "id": 2,
               "segments": [
                 {
                   "id": 1,
                   "availableExtraServices": [
                     [
                       {
                         "serviceType": "P",
                         "rfisc": "0AA",
                         "shouldSelectByDefault": false,
                         "price": "450.00",
                         "limit": 30,
                         "affectedSegmentIds": [],
                         "description": "web.extraServices.0AA.P.ALL.description",
                         "currency": "RUB",
                         "title": "Багаж"
                       }
                     ]
                   ],
                   "empty": false
                 },
                 {
                   "id": 2,
                   "availableExtraServices": [
                     [
                       {
                         "serviceType": "P",
                         "rfisc": "0AA",
                         "shouldSelectByDefault": false,
                         "price": "450.00",
                         "limit": 30,
                         "affectedSegmentIds": [],
                         "description": "web.extraServices.0AA.P.ALL.description",
                         "currency": "RUB",
                         "title": "Багаж"
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
         }
     ]


 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */
