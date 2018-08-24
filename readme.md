- [запрос](https://litvinenkoevgeny.github.io/websky-api/) на получение доступных аэропортов
- после выбора первого города, повторный [запрос](https://litvinenkoevgeny.github.io/websky-api/#api-Cities-get_Cities) с параметром cityCode(в котором передается IATA код города вылета)
- [получение](https://litvinenkoevgeny.github.io/websky-api/#api-dates-get_available_dates) дат доступных перелетов
- [получение](https://litvinenkoevgeny.github.io/websky-api/#api-segments-get_available_segments) доступных сегментов для выбранных дат
#### Далее происходит работа с заказом, доступные методы:
- [добавление](https://litvinenkoevgeny.github.io/websky-api/#api-Order-add_passengers) информации о пассажирах к заказу
- [получение](https://litvinenkoevgeny.github.io/websky-api/#api-Order-extra_services_new) списка доступных услуг
- [добавление/модификация](https://litvinenkoevgeny.github.io/websky-api/#api-Order-modify_service) доп. услуг в выбранном заказе
- [регистрация заказа](https://litvinenkoevgeny.github.io/websky-api/#api-Order-register_order) после обращения к этому эндпоинту, заказ переходит в статус "ожидает оплаты"
  в объекте order появляется поле paymentRedirectTo
- становится доступен [поиск](https://litvinenkoevgeny.github.io/websky-api/#api-Order-search_order) заказа по фамилии пассажира и номеру заказа
