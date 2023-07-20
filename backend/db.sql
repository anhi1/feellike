

​INSERT INTO `backend_nest_casas`.`category` (`id`, `name`, `description`, `icono`) VALUES ('1', 'Playa', 'Situada en jhhfj', 'fgg');
INSERT INTO `backend_nest_casas`.`category` (`id`, `name`, `description`, `icono`) VALUES ('2', 'Domo', 'Se caracteriza por jjd', 'fgg');
INSERT INTO `backend_nest_casas`.`category` (`id`, `name`, `description`, `icono`) VALUES ('3', 'Camping', 'Se caracteriza por jjd', 'fgg');
INSERT INTO `backend_nest_casas`.`category` (`id`, `name`, `description`, `icono`) VALUES ('4', 'Diseño', 'Diseñadas por jjd', 'fgg');

INSERT INTO `backend_nest_casas`.`casa` (`id`, `title`, `bedrooms`, `bathrooms`, `squarefeet`, `description`, `available`, `country`, `city`, `cp`, `price`, `comodidad`, `photo`, `images`, `id_user`, `id_category`) VALUES ('1', 'Casa Playa', '2', '4', '4887', 'velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit', '1', 'España', 'Madrid', '06175', '787', 'Tennis court', 'https://img.freepik.com/foto-gratis/piscina_74190-2104.jpg', 'https://img.freepik.com/foto-gratis/silla-azul-centro-turistico-tropical-relajarse_1203-5076.jpg,https://img.freepik.com/foto-gratis/piscina_74190-2104.jpg,https://img.freepik.com/foto-gratis/silla-azul-centro-turistico-tropical-relajarse_1203-5076.jpg,https://img.freepik.com/foto-gratis/hermosa-playa-tropical-mar_74190-6732.jpg,https://img.freepik.com/foto-gratis/sombrilla-tumbona-alrededor-piscina_1203-2409.jpg', '1', '1');
INSERT INTO `backend_nest_casas`.`casa` (`id`, `title`, `bedrooms`, `bathrooms`, `squarefeet`, `description`, `available`, `country`, `city`, `cp`, `price`, `comodidad`, `photo`, `images`, `id_user`, `id_category`) VALUES ('2', 'Casa Domo', '2', '5', '7835', 'tempus sit amet sem fusce consequat nulla nisl nunc nisl duis', '1', 'España', 'Madrid', '25481', ' 821', 'Sauna', 'https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=1440','https://a0.muscache.com/im/pictures/b7756897-ef31-4080-b881-c4c7b9ec0df7.jpg?im_w=1440,https://a0.muscache.com/im/pictures/9b5e2eff-ca68-4f22-adb0-029a33e466aa.jpg?im_w=1200,https://a0.muscache.com/im/pictures/a41678d9-cb0c-44dc-b79d-dfbd3aaa435a.jpg?im_w=1440,https://a0.muscache.com/im/pictures/fdceadd1-ac47-4278-8ca9-a11ecf85dc6f.jpg?im_w=1440,https://a0.muscache.com/im/pictures/9b5e2eff-ca68-4f22-adb0-029a33e466aa.jpg?im_w=1200', '2', '2');
INSERT INTO `backend_nest_casas`.`casa` (`id`, `title`, `bedrooms`, `bathrooms`, `squarefeet`, `description`, `available`, `country`, `city`, `cp`, `price`, `comodidad`, `photo`, `images`, `id_user`, `id_category`) VALUES ('3', 'Casa Camping', '2', '5', '7835', 'tempus sit amet sem fusce consequat nulla nisl nunc nisl duis', '1', 'España', 'Murcia', '2746', ' 850', 'Piscina', 'https://a0.muscache.com/im/pictures/miso/Hosting-872254228905543887/original/2d5f7155-7458-4eb9-a7d3-753863d9eb45.jpeg?im_w=1200','https://a0.muscache.com/im/pictures/miso/Hosting-872172907512159892/original/e513bd84-89c4-4fd0-8af8-36809e35996c.jpeg,https://a0.muscache.com/im/pictures/miso/Hosting-872254228905543887/original/90818109-959a-4e42-b59a-7a14a0c717b1.jpeg,https://a0.muscache.com/im/pictures/miso/Hosting-872254228905543887/original/5286ea80-9435-428f-92eb-3798b6c2f13d.jpeg,https://a0.muscache.com/im/pictures/miso/Hosting-872254228905543887/original/2d5f7155-7458-4eb9-a7d3-753863d9eb45.jpeg?im_w=1200,https://a0.muscache.com/im/pictures/miso/Hosting-872254228905543887/original/824dd21c-ae68-4232-94be-26cf579a0cd9.jpeg', '3', '3');
INSERT INTO `backend_nest_casas`.`casa` (`id`, `title`, `bedrooms`, `bathrooms`, `squarefeet`, `description`, `available`, `country`, `city`, `cp`, `price`, `comodidad`, `photo`, `images`, `id_user`, `id_category`) VALUES ('4', 'Casa Diseño', '5', '9', '230', 'ante nulla justo aliquam quis turpis eget elit', '1', 'España', 'Valencia', '28002', '750', 'Car wash', 'https://a0.muscache.com/im/pictures/ad41d55c-656d-4dd6-868c-cec0b5af4246.jpg?im_w=1200', 'https://a0.muscache.com/im/pictures/ce95ff7b-c45a-488d-b7ec-1e363db5ef22.jpg?im_w=1440,https://a0.muscache.com/im/pictures/965162d2-9740-4e11-bbdb-ef74c77b4396.jpg?im_w=1440,https://a0.muscache.com/im/pictures/61117c9e-6f0f-41d7-b787-acde3991e3de.jpg?im_w=1440,https://a0.muscache.com/im/pictures/cb20b95d-b0d5-4369-8c03-fb2ba3c72de1.jpg?im_w=1440,https://a0.muscache.com/im/pictures/f7c85dc6-ef5b-43a8-95f6-6020b9819e9c.jpg?im_w=1440', '4', '4');

INSERT INTO `backend_nest_casas`.`comment` (`id`, `description`, `rating`, `id_user`, `id_casa`) VALUES ('1', 'Buen clima', '8', '1', '1');
INSERT INTO `backend_nest_casas`.`comment` (`id`, `description`, `rating`, `id_user`, `id_casa`) VALUES ('2', 'Agradable', '9', '2', '1');
INSERT INTO `backend_nest_casas`.`comment` (`id`, `description`, `rating`, `id_user`, `id_casa`) VALUES ('3', 'Maravilloso lugar', '7', '3', '1');


INSERT INTO `backend_nest_casas`.`category` (`id`, `name`, `description`, `icono`) VALUES ('1', 'Playa', 'Situada en jhhfj', 'fgg');
INSERT INTO `backend_nest_casas`.`category` (`id`, `name`, `description`, `icono`) VALUES ('2', 'Domo', 'Se caracteriza por jjd', 'fgg');
INSERT INTO `backend_nest_casas`.`category` (`id`, `name`, `description`, `icono`) VALUES ('3', 'Camping', 'Se caracteriza por jjd', 'fgg');
INSERT INTO `backend_nest_casas`.`category` (`id`, `name`, `description`, `icono`) VALUES ('4', 'Diseño', 'Diseñadas por jjd', 'fgg');

INSERT INTO `backend_nest_casas`.`comment` (`id`, `description`, `rating`, `id_user`, `id_casa`) VALUES ('1', 'Buen clima', '8', '1', '1');
INSERT INTO `backend_nest_casas`.`comment` (`id`, `description`, `rating`, `id_user`, `id_casa`) VALUES ('2', 'Agradable', '9', '2', '1');
INSERT INTO `backend_nest_casas`.`comment` (`id`, `description`, `rating`, `id_user`, `id_casa`) VALUES ('3', 'Maravilloso lugar', '7', '3', '1');

INSERT INTO `backend_nest_casas`.`reserva` (`id`, `price`, `id_user`, `id_casa`) VALUES ('1', '700', '1', '1');
INSERT INTO `backend_nest_casas`.`reserva` (`id`, `price`, `id_user`, `id_casa`) VALUES ('2', '500', '2', '2');
INSERT INTO `backend_nest_casas`.`reserva` (`id`, `price`, `id_user`, `id_casa`) VALUES ('3', '900', '3', '3');
INSERT INTO `backend_nest_casas`.`reserva` (`id`, `price`, `id_user`, `id_casa`) VALUES ('4', '800', '4', '4');

INSERT INTO `backend_nest_casas`.`user` (`id`, `fullName`, `email`, `bio`, `phone`, `idioma`, `code`, `city`, `street`, `role`, `photo`, `password`) VALUES ('1', 'user1', 'fgdf', 'fgd', 'dfg', 'df', 'dfg', 'dfg', 'dfg', 'fdg', 'dfg', '1234');



