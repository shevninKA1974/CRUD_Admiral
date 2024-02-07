
<h3>Это CreateReadUpdateDelete модуль с Web-интерфейсом и базой данных на Postgress</h3>
База данных описана в ./src/main/resources/db.properties
<br>
Единственная необходимая таблица разворачиывается DDL:
<br><code>
  create table person (
    c_tab_num varchar(16) not null  constraint firstkey  primary key,
    c_name    varchar(40) not null,
    c_fname   varchar(40),
    c_sname   varchar(40) not null
);
alter table person owner to postgres;
</code><br>

после развёртывания в терминале выполняется:  
<br><code>
cd frontend
<br>
npm install
<br>
npm run watch
</code>
<br>
<br>

После этого можно стартовать через Spring Boot класс ru.kshevnin.CRUD_Admiral под JAVA 11
<br>
Работа с приложением по адресу http://localhost:8080
