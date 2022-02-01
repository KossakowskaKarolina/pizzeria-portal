# Dashboard

- `/` strona główna
  - statystyki dzisiejszych zamówień (zdalne i lokalne)
  - lista rezerwacji i eventów zaplanowanych na dzisiaj

# Logowanie

- `/login`
  - pola na login i hasło
  - guzik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- `/tables` dostępność wszystkich stolików
  - wybór daty i godziny
  - tabela z listą rezerwacji oraz wydarzeń
    - każda kolumna = 1 stolik
    - każdy wiersz = 30 minut
    - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są różne stoliki
    - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów

- `/tables/booking/:id` informacja o konkretnej rezerwacji
  - zawiera wszystkie informacje dotyczące rezerwacji
  - umożliwia edycję i zapisanie zmian

- `/tables/booking/new` nowa rezerwacja
  - jw., ale bez początkowych informacji

- `/tables/events/:id` - jak w bookingu
- `/tables/events/new` - jak w bookingu

# Widok kelnera

- `/waiter` ogólny widok kelnera (lista stolików i ich status)
  - tabela
    - w wierszach stoliki
    - w kolumnach różne rodzaje informacji (m.in. status, czas od ostatniej aktywności)
    - w ostatniej kolumnie dostępne akcje dla danego stolika

- `/waiter/order/new` nowe zamówienie
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówione produkty z opcjami i ceną)
  - kwota zamówienia

- `/waiter/order/:id` informacja o konkretnym zamówieniu
  - jw.

# Widok kuchni

- `/kitchen`
  - wyświetla listę zamówień w kolejności ich złożenia
  - lista musi zawierać
    - numer stolika (lub zamówienia zdalnego)
    - pełne informacje dot. zamówionych dań
  - lista musi zawierać możliwość oznaczenia zamówienia jako zrealizowane
