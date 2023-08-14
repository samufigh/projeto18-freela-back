--
-- PostgreSQL database dump
--

-- Dumped from database version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: models; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.models (
    id integer NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    picture text NOT NULL,
    available boolean DEFAULT true NOT NULL,
    "userId" integer NOT NULL,
    "pictureUserPet" text
);


--
-- Name: models_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.models_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: models_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.models_id_seq OWNED BY public.models.id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token text NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    cpf character varying(11) NOT NULL,
    email text NOT NULL,
    telephone text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    description text,
    picture text
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: models id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.models ALTER COLUMN id SET DEFAULT nextval('public.models_id_seq'::regclass);


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: models; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.models VALUES (25, 'aaaab', 'https://qph.cf2.quoracdn.net/main-qimg-d2c4f2cd47bc0ca93cc8b4840552c761-pjlq', 'https://animemotivation.com/wp-content/uploads/2021/08/ino-yamanaka-wallpaper-sexy-e1629060673394.jpg', false, 6, 'saasas');
INSERT INTO public.models VALUES (26, 'aloooooo', 'https://qph.cf2.quoracdn.net/main-qimg-d2c4f2cd47bc0ca93cc8b4840552c761-pjlq', 'https://images6.alphacoders.com/104/1041145.jpg', false, 6, 'asssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss');
INSERT INTO public.models VALUES (13, 'bicho da hinata', 'essa é a invocação da hinata, bbbbbbbbbbbbbbbbbbbbbbbbb', 'https://static.wikia.nocookie.net/naruto/images/7/73/Kamatari_%28Render%29.png/revision/latest/scale-to-width-down/350?cb=20170423180425&path-prefix=pt-br', false, 4, NULL);
INSERT INTO public.models VALUES (24, 'aaaa', 'https://qph.cf2.quoracdn.net/main-qimg-d2c4f2cd47bc0ca93cc8b4840552c761-pjlq', 'https://animemotivation.com/wp-content/uploads/2021/08/ino-yamanaka-wallpaper-sexy-e1629060673394.jpg', false, 6, 'saasas');
INSERT INTO public.models VALUES (28, '22222', 'idecsccccscdsdfaaaaaaaaaaaaa', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnaruto.fandom.com%2Fpt-br%2Fwiki%2FIno_Yamanaka&psig=AOvVaw1PPMAgg8ooNZ9km2S7LTuQ&ust=1692066679358000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICzndyN24ADFQAAAAAdAAAAABAE', false, 6, 'https://e1.pxfuel.com/desktop-wallpaper/33/92/desktop-wallpaper-yamanaka-ino-naruto-and-ino.jpg');
INSERT INTO public.models VALUES (11, 'bicho2 da temari', 'essa é a invocação da temari, aaaaaaaaaaaaaaaaaaaaaaaaaaa', 'https://static.wikia.nocookie.net/naruto/images/7/73/Kamatari_%28Render%29.png/revision/latest/scale-to-width-down/350?cb=20170423180425&path-prefix=pt-br', false, 3, NULL);
INSERT INTO public.models VALUES (15, 'bicho da ino 22222', 'https://e1.pxfuel.com/desktop-wallpaper/33/92/desktop-wallpaper-yamanaka-ino-naruto-and-ino.jpg', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnaruto.fandom.com%2Fpt-br%2Fwiki%2FIno_Yamanaka&psig=AOvVaw1PPMAgg8ooNZ9km2S7LTuQ&ust=1692066679358000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICzndyN24ADFQAAAAAdAAAAABAE', false, 6, 'inoooooooooo yamanakaaaaaaaaaaaaaaaaaaa');
INSERT INTO public.models VALUES (19, 'Fulane de Silve', 'https://criticalhits.com.br/wp-content/uploads/2021/12/Ino-2.jpg', 'https://pm1.aminoapps.com/6866/4b9397694d5d045b3831eacdcb4da7d8f06be7e6r1-733-1089v2_hq.jpg', false, 6, 'tesrteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
INSERT INTO public.models VALUES (12, 'bicho3 da temari', 'essa é a invocação da temari, aaaaaaaaaaaaaaaaaaaaaaaaaaa', 'https://static.wikia.nocookie.net/naruto/images/7/73/Kamatari_%28Render%29.png/revision/latest/scale-to-width-down/350?cb=20170423180425&path-prefix=pt-br', false, 3, NULL);
INSERT INTO public.models VALUES (18, 'sakura2', 'https://qph.cf2.quoracdn.net/main-qimg-d2c4f2cd47bc0ca93cc8b4840552c761-pjlq', 'https://qph.cf2.quoracdn.net/main-qimg-d2c4f2cd47bc0ca93cc8b4840552c761-pjlq', false, 6, 'teste');
INSERT INTO public.models VALUES (10, 'bicho da temari', 'essa é a invocação da temari, aaaaaaaaaaaaaaaaaaaaaaaaaaa', 'https://static.wikia.nocookie.net/naruto/images/7/73/Kamatari_%28Render%29.png/revision/latest/scale-to-width-down/350?cb=20170423180425&path-prefix=pt-br', false, 3, NULL);
INSERT INTO public.models VALUES (16, 'aaaaaaaaaa', 'https://cdn.anime-planet.com/characters/primary/ino-yamanaka-1.webp?t=1648650018', 'https://cdn.anime-planet.com/characters/primary/ino-yamanaka-1.webp?t=1648650018', false, 6, 'bbbbbbbbbbbbbbbbbb');
INSERT INTO public.models VALUES (20, 'sakura 2', 'https://animemotivation.com/wp-content/uploads/2021/08/ino-yamanaka-wallpaper-sexy-e1629060673394.jpg', 'https://animemotivation.com/wp-content/uploads/2021/08/ino-yamanaka-wallpaper-sexy-e1629060673394.jpg', false, 6, 'dsfsfs');
INSERT INTO public.models VALUES (23, 'JDISMÇÇKDA', 'https://qph.cf2.quoracdn.net/main-qimg-d2c4f2cd47bc0ca93cc8b4840552c761-pjlq', 'https://images6.alphacoders.com/104/1041145.jpg', false, 6, 'aaaa');
INSERT INTO public.models VALUES (22, 'sakurassa', 'https://animemotivation.com/wp-content/uploads/2021/08/ino-yamanaka-wallpaper-sexy-e1629060673394.jpg', 'http://animemotivation.com/wp-content/uploads/2021/08/ino-yamanaka-wallpaper-sexy-e1629060673394.jpg', false, 6, 'a');
INSERT INTO public.models VALUES (27, 'ino 22222', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnaruto.fandom.com%2Fpt-br%2Fwiki%2FIno_Yamanaka&psig=AOvVaw1PPMAgg8ooNZ9km2S7LTuQ&ust=1692066679358000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICzndyN24ADFQAAAAAdAAAAABAE', 'https://e1.pxfuel.com/desktop-wallpaper/33/92/desktop-wallpaper-yamanaka-ino-naruto-and-ino.jpg', false, 6, 'inoooggggggggggggkaaaaaaaaaaaaaaaaaaa');
INSERT INTO public.models VALUES (29, 'teste', 'testeeeeeeeeeeeeeeee', 'https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png', false, 6, 'https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png');
INSERT INTO public.models VALUES (31, 'z\xzx\', 'teeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeessssssssssssssssssssssssssss', 'https://images6.alphacoders.com/104/1041145.jpg', false, 6, 'https://qph.cf2.quoracdn.net/main-qimg-d2c4f2cd47bc0ca93cc8b4840552c761-pjlq');
INSERT INTO public.models VALUES (30, 'teste2', 'teste22222222', 'https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=2000', false, 6, 'https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png');
INSERT INTO public.models VALUES (32, 'agrvaaaai', 'odi dsjcndsjk dsjfsd dskdb bdjksbjk djksbjksn dbsjdj  kjsdjkns ldkjf d skflmlksd ldksfnksld dsklnflkdsn', 'https://animemotivation.com/wp-content/uploads/2021/08/ino-yamanaka-wallpaper-sexy-e1629060673394.jpg', false, 6, 'https://animemotivation.com/wp-content/uploads/2021/08/ino-yamanaka-wallpaper-sexy-e1629060673394.jpg');
INSERT INTO public.models VALUES (14, 'bicho da ino', 'inoooooooooo yamanakaaaaaaaaaaaaaaaaaaa', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnaruto.fandom.com%2Fpt-br%2Fwiki%2FIno_Yamanaka&psig=AOvVaw1PPMAgg8ooNZ9km2S7LTuQ&ust=1692066679358000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICzndyN24ADFQAAAAAdAAAAABAE', false, 6, 'https://e1.pxfuel.com/desktop-wallpaper/33/92/desktop-wallpaper-yamanaka-ino-naruto-and-ino.jpg');
INSERT INTO public.models VALUES (17, 'sakura', 'https://qph.cf2.quoracdn.net/main-qimg-d2c4f2cd47bc0ca93cc8b4840552c761-pjlq', 'https://qph.cf2.quoracdn.net/main-qimg-d2c4f2cd47bc0ca93cc8b4840552c761-pjlq', false, 6, 'teste');
INSERT INTO public.models VALUES (21, 'sakurass', 'https://animemotivation.com/wp-content/uploads/2021/08/ino-yamanaka-wallpaper-sexy-e1629060673394.jpg', 'https://animemotivation.com/wp-content/uploads/2021/08/ino-yamanaka-wallpaper-sexy-e1629060673394.jpg', false, 6, 'a');


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 2, '117a9c30-0074-43f7-a1ad-3dd78c471cf5');
INSERT INTO public.sessions VALUES (19, 4, 'd38014e8-6bf8-4f9a-9906-dbf98f6745bb');
INSERT INTO public.sessions VALUES (21, 3, '613b6960-d1e2-4f38-88d0-f6566fb93174');
INSERT INTO public.sessions VALUES (30, 6, '3b832aa8-e882-478d-ba35-9c7b3e0ea195');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'teste', '12345678910', 'teste@gmail.com', '19994330867', 'teste123', '2023-08-09 14:37:47.867591', NULL, NULL);
INSERT INTO public.users VALUES (2, 'temari', '12345678911', 'temari2@gmail.com', '0000000001', '$2b$10$6MlQ6WL5kZ8eiSyU27RDz.9BPGS/1TVJwhzYe9QHy6Qi0/jLrxBCm', '2023-08-09 14:38:24.07581', NULL, NULL);
INSERT INTO public.users VALUES (3, 'temari', '12345678912', 'temari@gmail.com', '1111111111', '$2b$10$5eR3YHE7yFfEJA4Dy3rU/OXu5BOv6M1O0Yd7cCS3JCdcwpSi4V3bq', '2023-08-09 14:40:59.020394', NULL, NULL);
INSERT INTO public.users VALUES (5, 'Ino', '33333333333', 'ino@gmail.com', '11111111111', '$2b$10$vCzdFRBpqmxKfIYOA3URK.axHfOaIyhMTshvI2B6scc8p5FYKx3my', '2023-08-13 09:12:06.379642', NULL, NULL);
INSERT INTO public.users VALUES (6, 'ino', '12389467520', 'inoo@gmail.com', '2283222222', '$2b$10$1tajpuqcAC7lmOJDmUdJOuwt2DwAZEnNAwSUmebUv8kKF3boOBJ7q', '2023-08-13 23:29:44.430188', 'teste de descrição d', 'https://images6.alphacoders.com/104/1041145.jpg');
INSERT INTO public.users VALUES (4, 'sakura', '12345678913', 'sakura@gmail.com', '9999999999', '$2b$10$kShRNDcO7bU9yI9ujbjwFew9E0MONTBSQ2EDYYW0Fq7XJiWnuEj.2', '2023-08-09 16:14:05.01643', '', '');


--
-- Name: models_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.models_id_seq', 32, true);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 30, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 6, true);


--
-- Name: models models_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.models
    ADD CONSTRAINT models_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: users users_cpf_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_cpf_key UNIQUE (cpf);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_telephone_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_telephone_key UNIQUE (telephone);


--
-- Name: models models_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.models
    ADD CONSTRAINT models_fk0 FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: sessions sessions_fk0; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_fk0 FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

