create table products(
    id int not null auto_increment primary key,
    name varchar(50) not null,
    modelnumber varchar(15) not null,
    series varchar(30) not null
);

insert into products(name,modelnumber,series) 
values('Eric Clpaton stratocaster','0117602806','Artist');

insert into products(name,modelnumber,series) 
values('Jeff Beck Stratocaster','01122223333','Artist');

insert into products(name,modelnumber,series) 
values('American deluxe Stratocaster','0113334444','American Deluxe');

insert into products(name,modelnumber,series) 
values('American deluxe Tele','01155556666','American Deluxe');