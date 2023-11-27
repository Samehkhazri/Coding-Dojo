SELECT * FROM users.users;
INSERT INTO users (first_name, last_name, email )VALUES ("sameh","khazri" ,"@sameh01"),
                                                        ("aala","ezdine","@aala02"),
                                                        ("anis","laghmani","@anis02");
SELECT * FROM users


WHERE email = '@sameh';

SELECT * FROM users
WHERE id = 3;

UPDATE users SET last_name = "Pancakes"
WHERE users.id = 3;


DELETE FROM users
WHERE users.id = 2;

SELECT * FROM users
ORDER BY first_name DESC