su postgres

createdb jobhunterapp

CREATE TABLE jobhunts (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    link VARCHAR(200) NOT NULL,
    description VARCHAR(500),
    status VARCHAR(30),
    date timestamp NOT NULL DEFAULT NOW()
);

INSERT INTO jobhunts (title, link, description, status) VALUES ('diego', 'diego@diego.com', 'diego99', 'Ended');
