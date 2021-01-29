select "cus"."firstName",
       "cus"."lastName",
       sum("p"."amount") as "total"
    from "customers" as "cus"
    join "payments" as "p" using ("customerId")
    group by "cus"."customerId"
    order by "total" desc;
