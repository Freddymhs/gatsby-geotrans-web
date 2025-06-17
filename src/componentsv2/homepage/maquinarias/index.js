import React from "react";
import { useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Separador, SeparadorGrande } from "../../shared/Separador";
import AllCards from "./AllCards";
import {
  PresentacionPagina,
  TextoEncuadrado,
  TituloDePagina,
} from "@/componentsv2/shared/Texts";
import Maquinaria from "../../shared/ClasesPageGlobal";
import { useTranslation } from "react-i18next";

const Maquinarias = ({ imgOptimizedTrucks }) => {
  const { t } = useTranslation();

  const images = useMemo(() => {
    const [batea, aljibe, porter, pluma, tolva, retro] = imgOptimizedTrucks;
    return {
      batea: batea?.childImageSharp?.fluid,
      aljibe: aljibe?.childImageSharp?.fluid,
      porter: porter?.childImageSharp?.fluid,
      pluma: pluma?.childImageSharp?.fluid,
      tolva: tolva?.childImageSharp?.fluid,
      retro: retro?.childImageSharp?.fluid,
    };
  }, [imgOptimizedTrucks]);

  const maquinarias = useMemo(() => {
    const createMaquinaria = (type, imageKey) => {
      return new Maquinaria(
        t(`${type}.patente1.nombre`),
        images[imageKey],
        [
          t(`${type}.patente1.descripciones.basico`),
          t(`${type}.patente1.descripciones.basico2`),
        ],
        getAreasTrabajoByType(type, t),
        getServiciosByType(type, t)
      );
    };

    return {
      aljibe: createMaquinaria("aljibes", "aljibe"),
      qt: createMaquinaria("qt", "porter"),
      pluma: createMaquinaria("plumas", "pluma"),
      batea: createMaquinaria("bateas", "batea"),
      tolva: createMaquinaria("tolvas", "tolva"),
      porter: createMaquinaria("porters", "porter"),
      retroexcavadora: createMaquinaria("retroexcavadoras", "retro"),
    };
  }, [t, images]);

  const listaMaquinarias = useMemo(() => {
    const lista = [];

    // Agregar propiedades específicas para cada tipo
    lista.geoPluma = [maquinarias.pluma];
    lista.geoBatea = [maquinarias.batea];
    lista.geoTolvas = [maquinarias.tolva];
    lista.geoPorter = [maquinarias.porter];
    lista.geoRetros = [maquinarias.retroexcavadora];
    lista.geoAljibe = [maquinarias.aljibe];

    return lista;
  }, [maquinarias]);

  return (
    <div className="container-fluid h-100 w-100">
      <SeparadorGrande />
      <MaquinariasTop />
      <AllCards ListaMaquinarias={listaMaquinarias} />
    </div>
  );
};

const MaquinariasTop = () => {
  const { t } = useTranslation();

  return (
    <>
      <Row>
        <Col className="col-12 col-md-4">
          <TextoEncuadrado>{t("Maquinarias.lemaA")}</TextoEncuadrado>
        </Col>
      </Row>
      <Separador />
      <Row>
        <Col className="col-12 col-md-3"></Col>
        <Col className="offset-md-1 my-auto text-center">
          <TituloDePagina>{t("Maquinarias.tituloA")}</TituloDePagina>
        </Col>
      </Row>
      <Row>
        <Col className="col-12 col-md-8 offset-md-4">
          <PresentacionPagina>{t("Maquinarias.lemaB")}</PresentacionPagina>
        </Col>
      </Row>
    </>
  );
};

const getAreasTrabajoByType = (type, t) => {
  const areasMap = {
    aljibes: [
      t("aljibes.patente1.areastrabajo.area1"),
      t("aljibes.patente1.areastrabajo.area2"),
    ],
    qt: [
      t("qt.patente1.areastrabajo.area1"),
      t("qt.patente1.areastrabajo.area2"),
    ],
    plumas: [
      t("plumas.patente1.areastrabajo.area1"),
      t("plumas.patente1.areastrabajo.area2"),
    ],
    bateas: [
      t("bateas.patente1.areastrabajo.area1"),
      t("bateas.patente1.areastrabajo.area2"),
      t("bateas.patente1.areastrabajo.area3"),
    ],
    tolvas: [
      t("tolvas.patente1.areastrabajo.area1"),
      t("tolvas.patente1.areastrabajo.area2"),
    ],
    porters: [
      t("porters.patente1.areastrabajo.area1"),
      t("porters.patente1.areastrabajo.area2"),
    ],
    retroexcavadoras: [t("retroexcavadoras.patente1.areastrabajo.area1")],
  };

  return areasMap[type] || [];
};

const getServiciosByType = (type, t) => {
  const serviciosMap = {
    aljibes: [
      t("aljibes.patente1.serviciosentregados.s1.nombre"),
      t("aljibes.patente1.serviciosentregados.s2.nombre"),
      t("aljibes.patente1.serviciosentregados.s3.nombre"),
      t("aljibes.patente1.serviciosentregados.s4.nombre"),
    ],
    qt: [
      t("qt.patente1.serviciosentregados.s1.nombre"),
      t("qt.patente1.serviciosentregados.s2.nombre"),
      t("qt.patente1.serviciosentregados.s3.nombre"),
      t("qt.patente1.serviciosentregados.s4.nombre"),
    ],
    plumas: [
      t("plumas.patente1.serviciosentregados.s1.nombre"),
      t("plumas.patente1.serviciosentregados.s2.nombre"),
      t("plumas.patente1.serviciosentregados.s3.nombre"),
      t("plumas.patente1.serviciosentregados.s4.nombre"),
      t("plumas.patente1.serviciosentregados.s5.nombre"),
    ],
    bateas: [
      t("bateas.patente1.serviciosentregados.s1.nombre"),
      t("bateas.patente1.serviciosentregados.s2.nombre"),
      t("bateas.patente1.serviciosentregados.s3.nombre"),
    ],
    tolvas: [
      t("tolvas.patente1.serviciosentregados.s1.nombre"),
      t("tolvas.patente1.serviciosentregados.s2.nombre"),
      t("tolvas.patente1.serviciosentregados.s3.nombre"),
    ],
    porters: [t("porters.patente1.serviciosentregados.s1.nombre")],
    retroexcavadoras: [
      t("retroexcavadoras.patente1.serviciosentregados.s1.nombre"),
      t("retroexcavadoras.patente1.serviciosentregados.s2.nombre"),
      t("retroexcavadoras.patente1.serviciosentregados.s3.nombre"),
      t("retroexcavadoras.patente1.serviciosentregados.s4.nombre"),
      t("retroexcavadoras.patente1.serviciosentregados.s5.nombre"),
      t("retroexcavadoras.patente1.serviciosentregados.s6.nombre"),
      t("retroexcavadoras.patente1.serviciosentregados.s7.nombre"),
      t("retroexcavadoras.patente1.serviciosentregados.s8.nombre"),
    ],
  };

  return serviciosMap[type] || [];
};

export default Maquinarias;
