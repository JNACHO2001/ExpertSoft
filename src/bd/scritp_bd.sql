create database  pd_jose_gomez_tayrona;
use pd_jose_gomez_tayrona;
drop database pd_jose_gomez_tayrona;

create table users (
id int primary key auto_increment,
name_user varchar(50),
identiti int unique,
addres varchar(100),
phone varchar(100),
email varchar(100),
plataform varchar(20)
);


create table transactions  (
id varchar(20) primary key,
date_time datetime,
amount float(10,2),
status enum('completada','pendiente','fallida'),
tipe varchar(100)

);

create table facturs (
id int auto_increment primary key,
number_facture varchar(20) unique,
period varchar(20),
amount_facture float(10,2),
amount_paid  float(10,2),
id_user int,
id_transaction varchar(20),
foreign key (id_user) references users(id),
foreign key (id_transaction) references transactions(id)

);
show tables ;
select *from users;
select *from transactions;
select * from facturs;
