FROM postgres

ENV POSTGRES_DB motorcycles
ENV POSTGRES_USER user
ENV POSTGRES_PASSWORD strongPassword

COPY init.sql /docker-entrypoint-initdb.d/