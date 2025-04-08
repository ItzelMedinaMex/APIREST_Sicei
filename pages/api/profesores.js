export default function handler(req, res) {
  if (req.method === "GET") {
    const profesores = [
      { nombre: "Dr. Rodríguez", numeroEmpleado: "P001" },
      { nombre: "Mtra. González", numeroEmpleado: "P002" },
      { nombre: "Ing. Fernández", numeroEmpleado: "P003" },
      { nombre: "Lic. Ramírez", numeroEmpleado: "P004" }
    ];
    res.status(200).json(profesores);
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}
