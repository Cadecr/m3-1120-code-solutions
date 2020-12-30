select "a"."line1",
       "a"."district",
       "ct"."name"
  from "addresses" as "a"
  join "cities" as "ct" using ("cityId");
