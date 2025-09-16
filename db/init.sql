CREATE TABLE IF NOT EXISTS motorcycles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  engine_cc INT NOT NULL,
  type VARCHAR(15) NOT NULL,
  image_path VARCHAR(255)  
);

-- Dummy data
INSERT INTO motorcycles (name, engine_cc, type, image_path) VALUES
('Ducati 959 Panigale', 955, 'Sport', '/media/ducati.png'),
('Honda CBR600RR', 599, 'Sport', '/media/honda.png'),
('Kawasaki Ninja ZX-10R', 998, 'Sport', '/media/kawasaki.png'),
('Suzuki GSX-R1000', 999, 'Sport', '/media/suzuki.png');

