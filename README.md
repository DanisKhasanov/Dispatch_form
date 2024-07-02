# React Delivery Widget

## Обзор

Этот проект представляет собой интерактивный виджет для управления деталями доставки, созданный на базе React. Включает функционал для ввода информации о получателе, адресах отправителя и получателя, методах доставки, а также деталях упаковки. Дополнительно содержит интерактивную карту для выбора пунктов выдачи заказов (ПВЗ) с отображением актуальной информации.

## Технологии и инструменты

- **_React JS_**: для построения пользовательского интерфейса.
- **_Redux_**: для управления состоянием приложения.
- **_JavaScript (ES6)_**: для написания логики приложения.

- **_CSS_**: для стилизации компонентов.
- **_Яндекс Доставка Виджет ПВЗ_**: для интеграции карты с пунктами выдачи заказов.
- **_REST API_**: для отправки данных на сервер.

## Для запуска проекта выполните следующие шаги:

1. Клонирование репозитория:
   ```
   git clone
   ```
2. Установите зависимости:
   ```
   npm install
   ```
3. Сборка:
   ```
   npm build
   ```
4. Запуск:
   ```
   npm run preview
   ```

## Валидация и обработка ошибок
- Предусмотрена валидация вводимых данных перед отправкой на сервер.
- Реализована обработка и отображение ошибок сервера пользователю.
