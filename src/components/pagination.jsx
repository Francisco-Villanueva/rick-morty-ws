import React from "react";
import { useSearchParams } from "react-router-dom";
import "../styles/pagination.css";

// Este componente maneja la paginación para una lista de elementos
// Recibe el número total de páginas como prop y permite navegar entre ellas
export function Pagination({ totalPages }) {
  // Utiliza useSearchParams para manejar los parámetros de la URL
  const [searchParams, setSearchParams] = useSearchParams();
  // Obtiene la página actual de los parámetros de la URL, o usa 1 como valor predeterminado
  const currentPage = Number(searchParams.get("page")) || 1;

  // Función para manejar el cambio de página
  const handlePageChange = (newPage) => {
    // Verifica que la nueva página esté dentro del rango válido
    if (newPage >= 1 && newPage <= totalPages) {
      // Actualiza los parámetros de la URL con la nueva página
      setSearchParams({ page: newPage.toString() });
    }
  };

  // Renderiza los controles de paginación
  return (
    <div className="pagination">
      {/* Botón para ir a la página anterior */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {/* Muestra la página actual y el total de páginas */}
      <span>{`Page ${currentPage} of ${totalPages}`}</span>
      {/* Botón para ir a la página siguiente */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
