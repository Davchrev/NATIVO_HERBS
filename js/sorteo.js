/* ==========================================================================
   Formulario del sorteo. Por ahora solo evita el envío real (no hay backend);
   aquí se conectaría el guardado de la participación cuando exista.
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("sorteoForm");
  if(!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // TODO: enviar los datos al backend / servicio de sorteo.
  });
});
