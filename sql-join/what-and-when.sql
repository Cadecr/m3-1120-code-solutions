select "f"."title",
       "f"."releaseYear",
       "c"."name"
    from "filmCategory"
    join "films" as "f" using ("filmId")
    join "categories" as "c" using ("categoryId")
    where "f"."title" = 'Boogie Amelie';
