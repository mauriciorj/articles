-- Table: public.blogs

-- DROP TABLE public.blogs;

CREATE TABLE public.blogs
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    uuid text COLLATE pg_catalog."default" NOT NULL,
    source text COLLATE pg_catalog."default" NOT NULL,
    title text COLLATE pg_catalog."default" NOT NULL,
    link text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT blogs_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.blogs
    OWNER to postgres;