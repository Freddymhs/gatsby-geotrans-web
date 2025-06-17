class Maquinarias {
  /**
   * @param {string} nombre - Nombre de la maquinaria
   * @param {string} media - Ruta de imagen o recurso multimedia
   * @param {Array} descripccion - Descripción detallada (espera 2 arrays)
   * @param {Array} areas - Áreas de uso (espera 3 arrays)
   * @param {Array} servicio - Datos del servicio (arrays múltiples)
   */
  constructor(nombre, media, descripccion, areas, servicio) {
    this.nombre = nombre;
    this.media = media;
    this.descripccion = descripccion;
    this.areas = areas;
    this.servicio = servicio;
  }
}

export default Maquinarias;
