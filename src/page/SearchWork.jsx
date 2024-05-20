import { useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import "./searchWork.css";
import swal from "sweetalert"
export default function SearchWork() {
  const [works] = useState([
    {
      id: "12",
      title: "Consultor SAP",
      empresa: "Empresa L",
      ubicacion: "Medellín",
      descripcion:
        "Se necesita un ingeniero de sistemas para brindar consultoría en SAP.",
      requisitos:
        "Experiencia en SAP, conocimientos en módulos específicos de la plataforma.",
    },
    {
      id: "13",
      title: "Desarrollador full stack",
      empresa: "Empresa M",
      ubicacion: "Cali",
      descripcion:
        "Se busca un ingeniero de sistemas para el desarrollo de aplicaciones completas.",
      requisitos:
        "Conocimientos en lenguajes de programación front-end y back-end, bases de datos.",
    },
    {
      id: "14",
      title: "Ingeniero de ciberseguridad",
      empresa: "Empresa N",
      ubicacion: "Barranquilla",
      descripcion:
        "Se requiere un ingeniero de sistemas para la protección de la información.",
      requisitos:
        "Experiencia en ciberseguridad, conocimientos en hacking ético y protección de datos.",
    },
    {
      id: "15",
      title: "Analista funcional",
      empresa: "Empresa O",
      ubicacion: "Cartagena",
      descripcion:
        "Se solicita un ingeniero de sistemas para el análisis de requerimientos funcionales.",
      requisitos:
        "Conocimientos en análisis de sistemas, experiencia en documentación de procesos.",
    },
    {
      id: "16",
      title: "Ingeniero de soporte",
      empresa: "Empresa P",
      ubicacion: "Bogotá",
      descripcion:
        "Se necesita un ingeniero de sistemas para brindar soporte técnico.",
      requisitos: "Conocimientos en hardware, software y atención al cliente.",
    },
    {
      id: "17",
      title: "Desarrollador de juegos",
      empresa: "Empresa Q",
      ubicacion: "Medellín",
      descripcion:
        "Se busca un ingeniero de sistemas para el desarrollo de videojuegos.",
      requisitos:
        "Experiencia en diseño de juegos, conocimientos en motores de desarrollo.",
    },
    {
      id: "18",
      title: "Ingeniero de virtualización",
      empresa: "Empresa R",
      ubicacion: "Cali",
      descripcion:
        "Se requiere un ingeniero de sistemas para la administración de plataformas virtuales.",
      requisitos:
        "Conocimientos en virtualización, experiencia en plataformas como VMware.",
    },
    {
      id: "19",
      title: "Analista de seguridad informática",
      empresa: "Empresa S",
      ubicacion: "Barranquilla",
      descripcion:
        "Se solicita un ingeniero de sistemas para el análisis y protección de la información.",
      requisitos:
        "Experiencia en seguridad informática, conocimientos en auditoría y gestión de riesgos.",
    },
    {
      id: "20",
      title: "Desarrollador de inteligencia artificial",
      empresa: "Empresa T",
      ubicacion: "Cartagena",
      descripcion:
        "Se busca un ingeniero de sistemas para el desarrollo de soluciones de IA.",
      requisitos:
        "Conocimientos en IA, experiencia en algoritmos y modelos de aprendizaje automático.",
    },
  ]);
  const mostrarAler=()=>{
    swal({
      title: "Postulación exitosa",
      icon: "success",
      buttons: "Aceptar"
    })
  }
  return (
    <div>
      <Header />
      <div className="search">
        <div className="cards">
          {works.map((work) => (
            <Card
              city={work.ubicacion}
              description={work.descripcion}
              title={work.title}
              key={work.id}
              alert={mostrarAler}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
