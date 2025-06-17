const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const fs = require("fs");

// Crear la base de datos SQLite
const dbPath = path.join(__dirname, "src/data", "geotransbd.sqlite");

// Asegurar que existe el directorio
if (!fs.existsSync(path.dirname(dbPath))) {
  fs.mkdirSync(path.dirname(dbPath), { recursive: true });
}

const db = new sqlite3.Database(dbPath);

// Función para ejecutar comandos SQL de forma secuencial
function runSQL(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(this);
      }
    });
  });
}

async function createDatabase() {
  try {
    console.log("🚀 Iniciando creación de base de datos SQLite...");

    // Paso 1: Eliminar tablas existentes
    await runSQL(`DROP TABLE IF EXISTS area`);
    await runSQL(`DROP TABLE IF EXISTS producto`);
    await runSQL(`DROP TABLE IF EXISTS servicio`);
    await runSQL(`DROP TABLE IF EXISTS generadorproducto`);
    await runSQL(`DROP TABLE IF EXISTS generadorservicio`);
    console.log("✓ Tablas anteriores eliminadas");

    // Paso 2: Crear esquema de tablas
    console.log("📋 Creando esquema de tablas...");

    await runSQL(`CREATE TABLE area (
      codarea INTEGER PRIMARY KEY,
      NAMEENG TEXT,
      NAMEESP TEXT
    )`);
    console.log("✓ Tabla area creada");

    await runSQL(`CREATE TABLE generadorproducto (
      codproductorr INTEGER PRIMARY KEY,
      NAMEESP TEXT,
      NAMEENG TEXT
    )`);
    console.log("✓ Tabla generadorproducto creada");

    await runSQL(`CREATE TABLE generadorservicio (
      codservidor INTEGER PRIMARY KEY,
      NAMEENG TEXT,
      NAMEESP TEXT
    )`);
    console.log("✓ Tabla generadorservicio creada");

    await runSQL(`CREATE TABLE producto (
      codproducto INTEGER PRIMARY KEY,
      NAMEESP TEXT,
      NAMEENG TEXT,
      DESCRIPCIONESP TEXT,
      DESCRIPCIONENG TEXT,
      CODPRODUCTORR INTEGER,
      CODAREA INTEGER
    )`);
    console.log("✓ Tabla producto creada");

    await runSQL(`CREATE TABLE servicio (
      codservicio INTEGER PRIMARY KEY,
      CODAREA INTEGER,
      CODSERVIDOR INTEGER,
      DESCRIPCIONENG TEXT,
      DESCRIPCIONESP TEXT,
      NAMEENG TEXT,
      NAMEESP TEXT,
      PRECIO REAL
    )`);
    console.log("✓ Tabla servicio creada");

    console.log("📝 Esquema completado. Insertando datos de prueba...");

    // Paso 3: Insertar datos de prueba

    // Areas
    await runSQL(
      `INSERT INTO area (codarea, NAMEENG, NAMEESP) VALUES (?, ?, ?)`,
      [1, "Technology", "Tecnología"]
    );
    await runSQL(
      `INSERT INTO area (codarea, NAMEENG, NAMEESP) VALUES (?, ?, ?)`,
      [2, "Health", "Salud"]
    );
    await runSQL(
      `INSERT INTO area (codarea, NAMEENG, NAMEESP) VALUES (?, ?, ?)`,
      [3, "Education", "Educación"]
    );
    console.log("✓ Datos insertados en tabla area");

    // Productores
    await runSQL(
      `INSERT INTO generadorproducto (codproductorr, NAMEESP, NAMEENG) VALUES (?, ?, ?)`,
      [1, "Productor Uno", "Producer One"]
    );
    await runSQL(
      `INSERT INTO generadorproducto (codproductorr, NAMEESP, NAMEENG) VALUES (?, ?, ?)`,
      [2, "Productor Dos", "Producer Two"]
    );
    await runSQL(
      `INSERT INTO generadorproducto (codproductorr, NAMEESP, NAMEENG) VALUES (?, ?, ?)`,
      [3, "Productor Tres", "Producer Three"]
    );
    console.log("✓ Datos insertados en tabla generadorproducto");

    // Servidores
    await runSQL(
      `INSERT INTO generadorservicio (codservidor, NAMEENG, NAMEESP) VALUES (?, ?, ?)`,
      [1, "Server One", "Servidor Uno"]
    );
    await runSQL(
      `INSERT INTO generadorservicio (codservidor, NAMEENG, NAMEESP) VALUES (?, ?, ?)`,
      [2, "Server Two", "Servidor Dos"]
    );
    await runSQL(
      `INSERT INTO generadorservicio (codservidor, NAMEENG, NAMEESP) VALUES (?, ?, ?)`,
      [3, "Server Three", "Servidor Tres"]
    );
    console.log("✓ Datos insertados en tabla generadorservicio");

    // Productos
    await runSQL(
      `INSERT INTO producto (codproducto, NAMEESP, NAMEENG, DESCRIPCIONESP, DESCRIPCIONENG, CODPRODUCTORR, CODAREA) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        1,
        "Producto A",
        "Product A",
        "Descripción del producto A",
        "Description of product A",
        1,
        1,
      ]
    );
    await runSQL(
      `INSERT INTO producto (codproducto, NAMEESP, NAMEENG, DESCRIPCIONESP, DESCRIPCIONENG, CODPRODUCTORR, CODAREA) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        2,
        "Producto B",
        "Product B",
        "Descripción del producto B",
        "Description of product B",
        2,
        2,
      ]
    );
    await runSQL(
      `INSERT INTO producto (codproducto, NAMEESP, NAMEENG, DESCRIPCIONESP, DESCRIPCIONENG, CODPRODUCTORR, CODAREA) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        3,
        "Producto C",
        "Product C",
        "Descripción del producto C",
        "Description of product C",
        3,
        3,
      ]
    );
    console.log("✓ Datos insertados en tabla producto");

    // Servicios
    await runSQL(
      `INSERT INTO servicio (codservicio, CODAREA, CODSERVIDOR, DESCRIPCIONENG, DESCRIPCIONESP, NAMEENG, NAMEESP, PRECIO) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        1,
        1,
        1,
        "Tech service description",
        "Descripción servicio tecnológico",
        "Tech Service",
        "Servicio Tecnológico",
        100.5,
      ]
    );
    await runSQL(
      `INSERT INTO servicio (codservicio, CODAREA, CODSERVIDOR, DESCRIPCIONENG, DESCRIPCIONESP, NAMEENG, NAMEESP, PRECIO) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        2,
        2,
        2,
        "Health service description",
        "Descripción servicio salud",
        "Health Service",
        "Servicio Salud",
        200.75,
      ]
    );
    await runSQL(
      `INSERT INTO servicio (codservicio, CODAREA, CODSERVIDOR, DESCRIPCIONENG, DESCRIPCIONESP, NAMEENG, NAMEESP, PRECIO) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        3,
        3,
        3,
        "Education service description",
        "Descripción servicio educativo",
        "Education Service",
        "Servicio Educativo",
        150.25,
      ]
    );
    console.log("✓ Datos insertados en tabla servicio");

    console.log("🎉 Base de datos SQLite completamente configurada!");
    console.log(`📁 Archivo creado en: ${dbPath}`);
  } catch (error) {
    console.error("❌ Error:", error.message);
  } finally {
    // Cerrar la base de datos al final
    db.close((err) => {
      if (err) {
        console.error("Error cerrando la base de datos:", err.message);
      } else {
        console.log("✅ Base de datos cerrada correctamente");
      }
    });
  }
}

// Ejecutar la función
createDatabase();

module.exports = { dbPath };
