SELECT * FROM libreria.Usuario;
SELECT * FROM libreria.Libro;
SELECT * FROM libreria.Venta;
SELECT * FROM libreria.Detalle_Venta;
SELECT * FROM libreria.Resenia;

use libreria;

insert into libreria.Libro(l_id_libro,l_nombre,l_cantidad,l_precio,l_autor,l_fecha_pub,l_genero,l_tipo, l_descripcion, l_eliminado) 
values (1,"Don Quijote de la mancha",4,200.00,"Miguel de Cervantes",'1995-10-05','Drama','Libro',
"El ingenioso hidalgo don Quijote de la Mancha narra las aventuras de Alonso Quijano, un hidalgo pobre que de tanto leer novelas de 
caballería acaba enloqueciendo y creyendo ser un caballero andante, nombrándose a sí mismo como don Quijote de la Mancha.",0);

UPDATE Libro
SET l_cantidad = -1
WHERE l_id_libro =1;


Insert into Resenia( r_id_cliente, r_id_libro, r_res_cli, r_fecha, r_eliminado)
values(1,2,'reseña 1','2023-02-23',false);

Insert into Resenia( r_id_cliente, r_id_libro, r_res_cli, r_fecha, r_eliminado)
values(3,2,'reseña 2','2023-02-23',false);

Insert into Resenia( r_id_cliente, r_id_libro, r_res_cli, r_fecha, r_eliminado)
values(9,2,'reseña 3','2023-02-23',false);


Insert into Resenia( r_id_cliente, r_id_libro, r_res_cli, r_fecha, r_eliminado)
values(7,2,'reseña 4','2023-02-23',false);


Insert into Resenia( r_id_cliente, r_id_libro, r_res_cli, r_fecha, r_eliminado)
values(5,2,'reseña 5','2023-02-23',false);

Insert into Resenia( r_id_cliente, r_id_libro, r_res_cli, r_fecha, r_eliminado)
values(11,2,'reseña 6','2023-02-23',false);

Insert into Resenia( r_id_cliente, r_id_libro, r_res_cli, r_fecha, r_eliminado)
values(15,3,'reseña 7','2023-02-23',false);

Insert into Resenia( r_id_cliente, r_id_libro, r_res_cli, r_fecha, r_eliminado)
values(13,5,'reseña 8','2023-02-23',false);

Insert into Resenia( r_id_cliente, r_id_libro, r_res_cli, r_fecha, r_eliminado)
values(1,3,'reseña 9','2023-02-23',false);

Insert into Resenia( r_id_cliente, r_id_libro, r_res_cli, r_fecha, r_eliminado)
values(6,4,'reseña 10','2023-02-23',false);

Insert into Resenia( r_id_cliente, r_id_libro, r_res_cli, r_fecha, r_eliminado)
values(8,2,'reseña 11','2023-02-23',false);














insert into Libro(l_id_libro,l_nombre,l_cantidad,l_precio,l_autor,l_fecha_pub,l_genero,l_tipo, l_descripcion, l_eliminado) 
values (12,"Juego de tronos",70,1466.99 ,"George RR Martin",'1987-05-10','Fantasia','Libro',
"En el legendario mundo de los Siete Reinos, lord Stark y su familia 
se encuentran en el centro de un conflicto que desatará todas las pasiones y la más mortal de las batallas.",0);


insert into Libro(l_id_libro,l_nombre,l_cantidad,l_precio,l_autor,l_fecha_pub,l_genero,l_tipo, l_descripcion, l_eliminado) 
values (13,"Choque de reyes",70,473.00 ,"George RR Martin",'1987-05-10','Fantasia','Libro',
"Choque de reyes es el segundo volumen de Canción de hielo y fuego, la monumental saga de fantasía épica del escritor George R. R. Martin 
que ha vendido más de 20 millones de ejemplares en todo el mundo.",0);



insert into Libro(l_id_libro,l_nombre,l_cantidad,l_precio,l_autor,l_fecha_pub,l_genero,l_tipo, l_descripcion, l_eliminado) 
values (14,"Tormenta de espadas",70,396.97 ,"George RR Martin",'1987-05-10','Fantasia','Libro',
"Mientras empeoran la violencia y el clima en los Siete Reinos, otra fuerza armada surge desde más allá del Muro de Hielo: se trata 
de los Otros, un ejército sobrenatural de muertos vivientes cuyos cuerpos inertes no podrán ser detenidos.",0);



insert into Libro(l_id_libro,l_nombre,l_cantidad,l_precio,l_autor,l_fecha_pub,l_genero,l_tipo, l_descripcion, l_eliminado) 
values (15,"Festin de cuervos",70,409.00 ,"George RR Martin",'1987-05-10','Fantasia','Libro',
"Luego de siglos de guerras descarnadas, los siete poderes que dividen la tierra han alcanzado una difícil tregua. Pero no pasa 
mucho tiempo antes de que los sobrevivientes, los proscritos, los renegados y los carroñeros de los Siete Reinos se reúnan.",0);


insert into Libro(l_id_libro,l_nombre,l_cantidad,l_precio,l_autor,l_fecha_pub,l_genero,l_tipo, l_descripcion, l_eliminado) 
values (16,"Danza de dragones",70,409.00 ,"George RR Martin",'1987-05-10','Fantasia','Libro',
"Después de una colosal batalla; el futuro de los Siete Reinos pende de un hilo, acuciado por nuevas amenazas que cobran 
brío en todos sus rincones. Danza de dragones es el quinto volumen de Canción de hielo y fuego",0);





insert into Libro(l_nombre,l_cantidad,l_precio,l_autor,l_fecha_pub,l_genero,l_tipo, l_descripcion, l_eliminado) 
values ("El Resplandor",50, 246.05  ,"Stephen King",'2013-06-10','Terror','Libro',
"REDRUM Esa es la palabra que Danny había visto en el espejo. Y, aunque no sabía leer, entendió que era un 
mensaje de horror. Danny tenía cinco años, y a esa edad poco niños saben que los espejos invierten las imágenes y menos aún saben diferenciar entre realidad y fantasía.",0);



