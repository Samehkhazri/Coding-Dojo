SELECT * FROM dojos;
SELECT * FROM ninjas;
INSERT INTO   dojos (name) VALUES ("sameh"),("elee"), ("aziz");
   
   DELETE FROM dojos WHERE id =1;
   DELETE FROM dojos WHERE id =2;
   DELETE FROM dojos WHERE id =3;
   
   INSERT INTO   dojos (name) VALUES ("sameh"),("elee"), ("aziz");
SET SQL_SAFE_UPDATES=0;   
INSERT INTO ninjas (first_name,last_name,age,dojos_id) VALUES ('anis','rouis',28 ,4),
 ('john','max',30 ,4),('mark','gomiz',40 ,4);
 
 INSERT INTO ninjas (first_name,last_name,age,dojos_id) VALUES ('jullie','radues',18 ,5),
 ('emile','doe',50 ,5),('manuel','doen',20 ,5);
 
  INSERT INTO ninjas (first_name,last_name,age,dojos_id) VALUES ('sam','jlassi',25 ,6),
 ('amelie','mathod',50 ,6),('manel','zbidi',29 ,6);
 
 SELECT * FROM ninjas join dojos on ninjas.dojos_id = dojos.id and ninjas.id=20;
 
 SELECT * FROM ninjas join dojos on ninjas.dojos_id = dojos.id;