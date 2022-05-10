export default function handler(req, res) {
  return res.json([
    { nombre: "Kevin", apellido: "Efraim", edad: 19, premium: true },
    { nombre: "Brian", apellido: "Efraim", edad: 20, premium: false },
    { nombre: "Lucas", apellido: "Efraim", edad: 10, premium: true },
  ]);
}
