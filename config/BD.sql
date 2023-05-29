drop database if exists libreria;
create database libreria;
use libreria;

drop table if exists Usuario;
create table Usuario (
	u_id_usuario int unsigned not null auto_increment,
    u_nombre varchar(60) not null,
    u_correo varchar(40) not null,
    u_telefono int unsigned,
    u_tipo_usuario enum('cliente','admin') not null,
    u_contrasena varchar(80) not null,
    u_direcion varchar(70) not null,
    u_eliminado boolean not null,
    u_token  varchar(70),
    primary key (u_id_usuario),
    check (u_nombre regexp '^([:alpha:]+[:SPACE:]*[:alpha:]+)+$' and char_length(u_nombre)>=8 ),
    check (u_correo like '%___@___%.___%' and char_length(u_correo)>=11),
    check (u_tipo_usuario regexp 'cliente|admin'),
    check ( char_length(u_contrasena)>=7),
    check (u_direcion regexp '^([:alnum:]*(.|,|;|-|_|#|$)*[:SPACE:]*(.|,|;|-|_|#|$)*[:alnum:]*)+$' and char_length(u_direcion)>=10 )
);

use libreria;
drop table if exists Libro;
create table Libro (
	l_id_libro int unsigned not null auto_increment,
    l_nombre varchar(70) not null,
    l_cantidad int  not null,
    l_precio float(6,2)  not null,
    l_autor varchar(70) not null,
    l_fecha_pub date not null,
    l_genero enum('Terror','Fantasia','Misterio','Ciencia Ficcion','Romance','Drama','Suspenso','Erotico','Belico') not null,
    l_tipo enum('Libro','Comic','Manga') not null,
    l_descripcion varchar(500) not null,
    l_eliminado boolean not null,
    l_portada  varchar(200) ,
    primary key (l_id_libro),
    check (l_nombre regexp '^([:alnum:](-||#|$)*[:SPACE:]*[:alnum:]*(-||#|$)*)+$' and char_length(l_nombre)>=3 ),
    check (l_cantidad >= 0),
    check (l_precio >= 1),
    check (l_autor regexp '^([:alpha:]+(.)*[:SPACE:]*[:alpha:]+(.)*)+$' and char_length(l_autor)>=8 ),
    check (l_genero regexp 'Terror|Fantasia|Misterio|Ciencia Ficcion|Romance|Drama|Suspenso|Erotico|Belico' and char_length(l_genero)>=5 ),
    check (l_tipo regexp 'Libro|Comic|Manga' and char_length(l_tipo)=5 ),
    check (l_descripcion regexp '^([:alnum:]*(.|,|;|#|$)*[:SPACE:]*(.|,|;|#|$)*[:alnum:]*)+$' and char_length(l_descripcion)>=50 )
);
/*
set global log_bin_trust_function_creators= 1;
DROP function IF EXISTS esAdmin;
DELIMITER $$
CREATE function esAdmin(id int) RETURNS bool
BEGIN
  DECLARE resultado VARCHAR(20);
  SET resultado = (select u_tipo_usuario from Usuario where u_id_usuario = id);
    -- select u_tipo_usuario from Usuario where u_id_usuario = id);
	if resultado = 'admin' then 
     -- call resultado;
		return true;
	end if ;
  return false;
END$$
DELIMITER ;

*/
drop table if exists Compra;
create table Compra (
	c_id_compra int unsigned not null auto_increment,
    c_precio_total float(8,2) unsigned not null,
    c_id_admin int unsigned not null,
    c_fecha date not null,
    c_eliminar boolean not null,
    primary key (c_id_compra),
    foreign key (c_id_admin) references Usuario (u_id_usuario) on update cascade on delete cascade
);



drop table if exists Detalle_Compra;
create table Detalle_Compra (
	dc_id_detcom int unsigned not null auto_increment,
    dc_id_compra int unsigned not null,
    dc_id_libro int unsigned not null,
    dc_subtotal float(8,2 ) unsigned not null,
    dc_pzs_compra int unsigned not null,
    dc_eliminar boolean not null,
    primary key (dc_id_detcom),
    foreign key (dc_id_compra) references Compra (c_id_compra) on update cascade on delete cascade,
    foreign key (dc_id_libro) references Libro (l_id_libro) on update cascade on delete cascade
);



drop table if exists Venta;
create table Venta (
	v_id_venta int unsigned not null auto_increment,
    v_id_cliente int unsigned not null,
    v_monto_total float(8,2) unsigned not null,
    v_fecha_venta date not null,
    v_eliminado boolean not null,
    primary key (v_id_venta),
    foreign key (v_id_cliente) references Usuario (u_id_usuario) on update cascade on delete cascade
);




drop table if exists Detalle_Venta;
create table Detalle_Venta (
	dv_id_detvent int unsigned not null auto_increment,
    dv_id_vent int unsigned not null,
    dv_id_libro int unsigned not null,
    dv_subtotal float(8,2) unsigned not null,
    dv_pzs_venta int unsigned not null,
    dv_eliminado boolean not null,
    primary key (dv_id_detvent),
    foreign key (dv_id_vent) references Venta (v_id_venta) on update cascade on delete cascade,
    foreign key (dv_id_libro) references Libro (l_id_libro) on update cascade on delete cascade
);



drop table if exists Favorito;
create table Favorito (
	f_id_favorito int unsigned not null auto_increment,
    f_id_cliente int unsigned not null,
    f_id_libro int unsigned not null,
    f_eliminar boolean not null,
    primary key (f_id_favorito),
    foreign key (f_id_cliente) references Usuario (u_id_usuario) on update cascade on delete cascade,
    foreign key (f_id_libro) references Libro (l_id_libro) on update cascade on delete cascade
);




drop table if exists Resenia;
create table Resenia (
	r_id_resena int unsigned not null auto_increment,
    r_id_cliente int unsigned not null,
    r_id_libro int unsigned not null,
    r_res_cli varchar(500) not null,
    r_fecha date not null,
    r_eliminado bool not null,
    primary key (r_id_resena),
    foreign key (r_id_cliente) references Usuario (u_id_usuario) on update cascade on delete cascade,
	foreign key (r_id_libro) references Libro (l_id_libro) on update cascade on delete cascade,
    check (r_res_cli regexp '^([:alnum:]*(.|,|;|#|$)*[:SPACE:]*(.|,|;|#|$)*[:alnum:]*)+$' and char_length(r_res_cli)>=4 )
    
);

