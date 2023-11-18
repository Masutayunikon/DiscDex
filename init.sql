-- set sql dialect
\set sql_mode=POSTGRESQL;

-- Users Table
CREATE TABLE Users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  join_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  last_active_date TIMESTAMP WITH TIME ZONE
);

-- Pokemon Table
CREATE TABLE Pokemons (
  pokemon_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255),
  base_stats JSONB,
  sprite_url VARCHAR(255)
);

-- Caught Pokemon Table
CREATE TABLE CaughtPokemons (
  caught_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES Users(user_id),
  pokemon_id INTEGER REFERENCES Pokemons(pokemon_id),
  catch_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  nickname VARCHAR(255)
);

-- Inventory Table
CREATE TABLE Inventories (
  inventory_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES Users(user_id),
  item_id INTEGER,
  quantity INTEGER
);

-- Items Table
CREATE TABLE Items (
  item_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  effect VARCHAR(255)
);

-- Trades Table
CREATE TABLE Trades (
  trade_id SERIAL PRIMARY KEY,
  user_id_sender INTEGER REFERENCES Users(user_id),
  user_id_receiver INTEGER REFERENCES Users(user_id),
  pokemon_id INTEGER REFERENCES Pokemons(pokemon_id),
  trade_date TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(255) CHECK (status IN ('pending', 'completed', 'cancelled')) DEFAULT 'pending'
);

-- Pokedex Table
CREATE TABLE PokedexEntries (
  pokedex_entry_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES Users(user_id),
  pokemon_id INTEGER REFERENCES Pokemons(pokemon_id),
  seen BOOLEAN NOT NULL,
  caught BOOLEAN NOT NULL
);