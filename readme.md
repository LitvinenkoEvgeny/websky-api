### Работа с движком websky в пределах одной сессии

- сначала происходит [запрос][https://litvinenkoevgeny.github.io/websky-api/#api-Oxygen-get_aliases] получения языковых переменных для всего движка
- после [запрашиваем][http://tst.sirena-travel.ru/websky-ut/json/aliases-declaration.json
] языковые переменные для конкретной авиакомпании
- происходит [запрос][https://litvinenkoevgeny.github.io/websky-api/#api-Oxygen-get_params] на получение параметров
- а так же [параметров][https://litvinenkoevgeny.github.io/websky-api/#api-Oxygen-get_session_params] сессии
- далее, [запрашиваем][https://litvinenkoevgeny.github.io/websky-api/#api-Oxygen-get_application_constants] константы
- [получаем][https://litvinenkoevgeny.github.io/websky-api/#api-Oxygen-get_application_constants] список городов
- и [стран][https://litvinenkoevgeny.github.io/websky-api/#api-Oxygen-countries]
- пытаемся восстановить [предыдущий поиск][]

