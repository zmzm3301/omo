USE host;

CREATE TABLE if not exists person (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(20) NULL DEFAULT NULL,
	job VARCHAR(20) NULL DEFAULT NULL,
	PRIMARY KEY (id) USING btree
);

INSERT INTO person (NAME, job) VALUES ("kim", "sales");
INSERT INTO person (NAME, job) VALUES ("lee", "player");
COMMIT;

SELECT * FROM person;