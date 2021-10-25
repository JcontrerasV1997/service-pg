/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {

    pgm.sql(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        bio VARCHAR(400),
        username VARCHAR(30) not null
    )
    `)
};

exports.down = pgm => {
    pgm.sql(`DROP TABLE users;`)
};

// set DATABASE_URL=postgres://postgres:pass@localhost:5432/SOCIAL_NETWORK_MG&&npm run migrate up
