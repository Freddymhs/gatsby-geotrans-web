import React from "react";
import Layout from "../componentsv2/layout/layout";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <div
      style={{
        color: "#fff",
        backgroundColor: "#000",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>404</h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
        Esta página se desvió del camino...
      </p>
      <Link
        to="/"
        style={{
          color: "#000",
          backgroundColor: "#fff",
          padding: "0.75rem 1.5rem",
          textDecoration: "none",
          borderRadius: "4px",
          fontWeight: "bold",
        }}
      >
        Volver al inicio
      </Link>
    </div>
  </Layout>
);

export default NotFoundPage;
