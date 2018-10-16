### Работа с движком websky в пределах одной сессии

#### Инициализация
- сначала происходит [запрос](https://litvinenkoevgeny.github.io/websky-api/#api-Oxygen-get_aliases) получения языковых переменных для всего движка
- после [запрашиваем](http://tst.sirena-travel.ru/websky-ut/json/aliases-declaration.json) языковые переменные для конкретной авиакомпании
- происходит [запрос](https://litvinenkoevgeny.github.io/websky-api/#api-Oxygen-get_params) на получение параметров
- а так же [параметров](https://litvinenkoevgeny.github.io/websky-api/#api-Oxygen-get_session_params) сессии
- далее, [запрашиваем](https://litvinenkoevgeny.github.io/websky-api/#api-Oxygen-get_application_constants) константы
- [получаем](https://litvinenkoevgeny.github.io/websky-api/#api-Oxygen-get_application_constants) список городов
- и [стран](https://litvinenkoevgeny.github.io/websky-api/#api-Oxygen-countries)
- пытаемся восстановить предыдущий поиск

#### Поиск
- [поиск доступных перелетов на неделю](https://litvinenkoevgeny.github.io/websky-api/#api-Oxygen-PostJsonCartesianSearchPeriod)
- [поиск доступных перелетов в выбранный день](https://litvinenkoevgeny.github.io/websky-api/#api-Oxygen-get_available_segments)
- [запрос на получение вариантов и суммы оплаты](https://litvinenkoevgeny.github.io/websky-api/#api-Oxygen-pricing_variant)

#### Ввод информации о пассажире
- [если пользователь авторизован, запросить сохранненых пассажиров]()
- [инициализировать order](https://litvinenkoevgeny.github.io/websky-api/#api-Order-order_info)

#### Переход к выбору доп. услуг
- [добавить пассажира к заказу](https://litvinenkoevgeny.github.io/websky-api/#api-Order-add_passengers)
- [получить список доступных доп. услуг](https://litvinenkoevgeny.github.io/websky-api/#api-Order-extra_services_new)
- [добавить выбранные элементы к заказу](https://litvinenkoevgeny.github.io/websky-api/#api-Order-modify_service)
- [запросить доступные формы оплаты](https://litvinenkoevgeny.github.io/websky-api/#api-Order-get_saved_passengers)
- [зарегистрировать заказ](https://litvinenkoevgeny.github.io/websky-api/#api-Order-register_order) и перейти к оплате



## Возможности ЛК
пока не описаны.
ЛК позволяет:
 - [авторизовать пассажира](https://litvinenkoevgeny.github.io/websky-api/#api-Oxygen-get_passenger_info_rules)
 - [просмотреть все заказы](https://litvinenkoevgeny.github.io/websky-api/#api-Private-get_orders)
 - создать пассажира для автозаполнения
 - скинуть пароль



