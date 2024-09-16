#!/bin/bash
psql  "postgres://$POSTGRES_USER:$POSTGRES_PASSWORD@$POSTGRES_HOST/$POSTGRES_DB?sslmode=disable" <<-EOSQL
create schema if not exists keycloak;
create schema if not exists happycamp;
EOSQL