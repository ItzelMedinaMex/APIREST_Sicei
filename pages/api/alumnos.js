export default function handler(req, res) {
  if (req.method === "GET") {
    const alumnos = [
      { nombre: "Juan Pérez", matricula: "A001" },
      { nombre: "María López", matricula: "A002" },
      { nombre: "Carlos Hernández", matricula: "A003" },
      { nombre: "Ana Torres", matricula: "A004" }
    ];
    res.status(200).json(alumnos);
  } else {
    res.status(405).json({ message: "Método no permitido" });
  }
}
