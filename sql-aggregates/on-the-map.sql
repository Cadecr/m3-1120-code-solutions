select "cou"."name" as "countries",
       count("cit".*) as "totalCities"
  from "countries" as "cou"
  join "cities" as "cit" using ("countryId")
  group by "cou"."countryId";
