import React from "react";

import Layout from "../componentsv2/layout/layout";
import SEO from "../componentsv2/shared/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Pagina no encontrada</h1>
    <p>no encontramos contenido aqui</p>
  </Layout>
);

export default NotFoundPage;
