

CREATE TABLE public.roles (
	role_id bigserial NOT NULL,
	"name" varchar NOT NULL,
	CONSTRAINT roles_pk PRIMARY KEY (role_id)
);

CREATE TABLE public.products (
	product_id bigserial NOT NULL,
	"cost" int8 NOT NULL,
	manufacturer varchar NULL,
	"name" varchar NULL,
	CONSTRAINT products_pk PRIMARY KEY (product_id)
);


CREATE TABLE public.users (
	user_id bigserial NOT NULL,
	login varchar NOT NULL,
	"password" varchar NOT NULL,
	role_id int8 NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY (user_id),
	CONSTRAINT users_un UNIQUE (login),
	CONSTRAINT users_fk FOREIGN KEY (role_id) REFERENCES public.roles(role_id)
);



CREATE TABLE public.videocards (
	videocard_id bigserial NOT NULL,
	performance numeric NULL,
	frequency int4 NULL,
	cors int4 NULL,
	memory_type varchar NULL,
	product_id int8 NULL,
	CONSTRAINT videocards_pk PRIMARY KEY (videocard_id),
	CONSTRAINT videocards_fk FOREIGN KEY (product_id) REFERENCES public.products(product_id)
);



CREATE TABLE public.processor (
	processor_id bigserial NOT NULL,
	cors int4 NULL,
	frequency int4 NULL,
	"cache" int4 NULL,
	product_id int8 NULL,
	CONSTRAINT processor_pk PRIMARY KEY (processor_id),
	CONSTRAINT processor_fk FOREIGN KEY (product_id) REFERENCES public.products(product_id)
);


CREATE TABLE public.ram (
	ram_id bigserial NOT NULL,
	"type" varchar NULL,
	capacity int4 NULL,
	timings varchar NULL,
	product_id int8 NULL,
	CONSTRAINT ram_pk PRIMARY KEY (ram_id),
	CONSTRAINT ram_fk FOREIGN KEY (product_id) REFERENCES public.products(product_id)
);



CREATE TABLE public.cart_items (
	item_id bigserial NOT NULL,
	product_id int8 NULL,
	user_id int8 NULL,
	CONSTRAINT cart_item_pk PRIMARY KEY (item_id),
	CONSTRAINT cart_item_fk FOREIGN KEY (user_id) REFERENCES public.users(user_id),
	CONSTRAINT cart_item_fk_1 FOREIGN KEY (product_id) REFERENCES public.products(product_id)
);
