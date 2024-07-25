if [ $(psql -XtAc "SELECT count(*) FROM pg_catalog.pg_database" -d postgres -U postgres) -ge 10 ];
then
  exit 0;
else
  exit 1;
fi;