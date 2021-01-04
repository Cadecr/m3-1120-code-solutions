select "cat"."name" as "filmCategory",
       count("cM"."actorId") as "films"
    from "categories" as "cat"
    join "filmCategory" using ("categoryId")
    join "castMembers" as "cM" using ("filmId")
    join "actors" as "act" using ("actorId")
    where "act"."firstName" = 'Lisa'
    and "act"."lastName" = 'Monroe'
    group by "cat"."categoryId";
