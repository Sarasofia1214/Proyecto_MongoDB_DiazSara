# Consultas en la base de datos hospitalaria

// 1.  Número total de hospitales por tipo de institución:

db.Hospitales.aggregate([ { $group: { _id: "$tipo_institucion", total_hospitales: { $sum: 1 } } }] )
[
  { _id: 'Pública Departamental', total_hospitales: 1 },
  { _id: 'Privada', total_hospitales: 1 },
  { _id: 'Pública Universitaria', total_hospitales: 1 }
]
// 2.  Número de hospitales por nivel de complejidad

db.Hospitales.aggregate([ { $group: { _id: "$nivel_complejidad", total_hospitales: { $sum: 1 } } }] )
[
  { _id: 'Mediana y Alta Complejidad', total_hospitales: 1 },
  { _id: 'Alta Complejidad', total_hospitales: 2 }
]


3.  Medicamentos con más stock por hospital 

db.Inventario.find({ id_hospital: ObjectId("6887ea5f0be2cd6239fe6b01") }).sort({ stock: -1 }).limit(5) 
[
  {
    _id: ObjectId('688818df0be2cd6239fe6c25'),
    id_hospital: ObjectId('6887ea5f0be2cd6239fe6b01'),
    id_medicamento: ObjectId('6600000000000000000000a1'),
    stock: 500,
    fecha_ultima_actualizacion: ISODate('2025-07-27T10:00:00.000Z')
  },
  {
    _id: ObjectId('688818df0be2cd6239fe6c26'),
    id_hospital: ObjectId('6887ea5f0be2cd6239fe6b01'),
    id_medicamento: ObjectId('6600000000000000000000a2'),
    stock: 350,
    fecha_ultima_actualizacion: ISODate('2025-07-27T11:30:00.000Z')
  },
  {
    _id: ObjectId('688818df0be2cd6239fe6c27'),
    id_hospital: ObjectId('6887ea5f0be2cd6239fe6b01'),
    id_medicamento: ObjectId('6600000000000000000000a3'),
    stock: 200,
    fecha_ultima_actualizacion: ISODate('2025-07-26T15:00:00.000Z')
  }
]

// 1. Cantidad total de médicos por hospital
db.Medicos.aggregate([
  { $group: { _id: "$id_hospital", total_medicos: { $sum: 1 } } }
])

[
  { _id: 'hos003', total_medicos: 50 },
  { _id: 'hos001', total_medicos: 50 },
  { _id: 'hos002', total_medicos: 46 }
]



// 2. Cantidad total de enfermeros por hospital
db.Enfermeros.aggregate([
  { $group: { _id: "$id_hospital", total_enfermeros: { $sum: 1 } } }
])

[
  { _id: 'hosp002', total_enfermeros: 70 },
  { _id: 'hosp003', total_enfermeros: 70 },
  { _id: 'hosp001', total_enfermeros: 70 }
]



// 3. Total de áreas especializadas por hospital
db.AreaEspecializacion.aggregate([
  { $group: { _id: "$id_hospital", total_areas: { $sum: 1 } } }
])

[
  { _id: ObjectId('6887ea5f0be2cd6239fe6b02'), total_areas: 10 },
  { _id: ObjectId('6887ea5f0be2cd6239fe6b03'), total_areas: 10 },
  { _id: ObjectId('6887ea5f0be2cd6239fe6b01'), total_areas: 10 }
]


// 4. Listar médicos por hospital
db.Medicos.find({}, { nombre: 1, especialidad: 1, id_hospital: 1 })

[
  {
    _id: 'med021',
    nombre: 'Dr. Carlos Alberto Vélez Restrepo',
    id_hospital: 'hos001'
  },
  {
    _id: 'med022',
    nombre: 'Dra. Sofía Andrea Moncada Duque',
    id_hospital: 'hos001'
  },
  {
    _id: 'med023',
    nombre: 'Dr. Miguel Ángel Sierra Bermúdez',
    id_hospital: 'hos001'
  },
  {
    _id: 'med024',
    nombre: 'Dra. Daniela Carolina Quintero Díaz',
    id_hospital: 'hos001'
  },
  {
    _id: 'med025',
    nombre: 'Dr. Jorge Eduardo Patiño Giraldo',
    id_hospital: 'hos001'
  },
  {
    _id: 'med026',
    nombre: 'Dra. María Paula Londoño Mesa',
    id_hospital: 'hos001'
  },
  {
    _id: 'med027',
    nombre: 'Dr. Fabián Andrés Restrepo Morales',
    id_hospital: 'hos001'
  },
  {
    _id: 'med028',
    nombre: 'Dra. Valeria Sofía Bedoya Cárdenas',
    id_hospital: 'hos001'
  },
  {
    _id: 'med029',
    nombre: 'Dr. Cristian David Muñoz Vargas',
    id_hospital: 'hos001'
  },
  {
    _id: 'med030',
    nombre: 'Dra. Luisa Fernanda Ordoñez Blanco',
    id_hospital: 'hos001'
  },
  {
    _id: 'med031',
    nombre: 'Dr. Camilo Andrés Londoño Cortés',
    id_hospital: 'hos001'
  },
  {
    _id: 'med032',
    nombre: 'Dra. Andrea Catalina Betancur Ortiz',
    id_hospital: 'hos001'
  },
  {
    _id: 'med033',
    nombre: 'Dr. Juan Camilo Salazar Mesa',
    id_hospital: 'hos001'
  },
  {
    _id: 'med034',
    nombre: 'Dra. Laura Sofía Jiménez Bernal',
    id_hospital: 'hos001'
  },
  {
    _id: 'med035',
    nombre: 'Dr. Daniel Felipe Rico Patiño',
    id_hospital: 'hos001'
  },
  {
    _id: 'med036',
    nombre: 'Dra. María José Parra Soto',
    id_hospital: 'hos001'
  },
  {
    _id: 'med037',
    nombre: 'Dr. Andrés Felipe Quintero Ríos',
    id_hospital: 'hos001'
  },
  {
    _id: 'med038',
    nombre: 'Dra. Carolina Isabel Vélez Restrepo',
    id_hospital: 'hos001'
  },
  {
    _id: 'med039',
    nombre: 'Dr. Juan José Herrera Soto',
    id_hospital: 'hos001'
  },
  {
    _id: 'med040',
    nombre: 'Dra. Sofía Camila Arango Castro',
    id_hospital: 'hos001'
  }

  {
    _id: 'med041',
    nombre: 'Dr. Nicolás Felipe Botero Zuluaga',
    id_hospital: 'hos001'
  },
  {
    _id: 'med042',
    nombre: 'Dra. Gabriela Isabel Ortiz Patiño',
    id_hospital: 'hos001'
  },
  {
    _id: 'med043',
    nombre: 'Dr. Santiago Andrés Cifuentes Vélez',
    id_hospital: 'hos001'
  },
  {
    _id: 'med044',
    nombre: 'Dra. Laura Ximena Bedoya Cárdenas',
    id_hospital: 'hos001'
  },
  {
    _id: 'med045',
    nombre: 'Dr. Daniel Esteban Caro Rojas',
    id_hospital: 'hos001'
  },
  {
    _id: 'med046',
    nombre: 'Dra. Andrea Catalina Rivera Prada',
    id_hospital: 'hos001'
  },
  {
    _id: 'med047',
    nombre: 'Dr. Felipe Santiago Escobar López',
    id_hospital: 'hos001'
  },
  {
    _id: 'med048',
    nombre: 'Dra. María Camila Vargas Betancur',
    id_hospital: 'hos001'
  },
  {
    _id: 'med049',
    nombre: 'Dr. Julián David García Herrera',
    id_hospital: 'hos001'
  },
  {
    _id: 'med050',
    nombre: 'Dra. Valeria Alejandra Molina Ospina',
    id_hospital: 'hos001'
  },
  {
    _id: 'med051',
    nombre: 'Dr. Pedro Juan Martínez Cárdenas',
    id_hospital: 'hos002'
  },
  {
    _id: 'med052',
    nombre: 'Dra. Estefanía Sofía Rincón Sierra',
    id_hospital: 'hos002'
  },
  {
    _id: 'med053',
    nombre: 'Dr. Andrés Camilo Giraldo Duque',
    id_hospital: 'hos002'
  },
  {
    _id: 'med054',
    nombre: 'Dra. Natalia Andrea Pinto Acosta',
    id_hospital: 'hos002'
  },
  {
    _id: 'med055',
    nombre: 'Dr. Felipe Andrés Moreno Vargas',
    id_hospital: 'hos002'
  },
  {
    _id: 'med056',
    nombre: 'Dra. Carolina Alexandra Salazar Mesa',
    id_hospital: 'hos002'
  },
  {
    _id: 'med057',
    nombre: 'Dr. Santiago José Herrera Ospina',
    id_hospital: 'hos002'
  },
  {
    _id: 'med058',
    nombre: 'Dra. Camila Andrea Díaz Castro',
    id_hospital: 'hos002'
  },
  {
    _id: 'med059',
    nombre: 'Dr. Juan Sebastián Soto Prieto',
    id_hospital: 'hos002'
  },
  {
    _id: 'med060',
    nombre: 'Dra. Sofía Valentina Rico García',
    id_hospital: 'hos002'
  }
]


// 5. Listar enfermeros por hospital
db.Enfermeros.find({}, { nombre: 1, id_hospital: 1 })

[
  {
    _id: 'enf141',
    nombre: 'Laura Patricia Ramírez Vargas',
    id_hospital: 'hosp003'
  },
  {
    _id: 'enf142',
    nombre: 'Jorge Enrique Torres Méndez',
    id_hospital: 'hosp003'
  },
  {
    _id: 'enf143',
    nombre: 'Sandra Liliana Herrera Castro',
    id_hospital: 'hosp003'
  },
  {
    _id: 'enf144',
    nombre: 'Diego Alejandro Mendoza Rojas',
    id_hospital: 'hosp003'
  },
  {
    _id: 'enf145',
    nombre: 'Paola Andrea Núñez Guzmán',
    id_hospital: 'hosp003'
  },
  {
    _id: 'enf146',
    nombre: 'Oscar Javier Romero Pineda',
    id_hospital: 'hosp003'
  },
  {
    _id: 'enf147',
    nombre: 'Luisa Fernanda Castro Ríos',
    id_hospital: 'hosp003'
  },
  {
    _id: 'enf148',
    nombre: 'Andrés Felipe Rojas Paredes',
    id_hospital: 'hosp003'
  },
  {
    _id: 'enf149',
    nombre: 'Carolina Estefanía Mendoza Vásquez',
    id_hospital: 'hosp003'
  },
  {
    _id: 'enf150',
    nombre: 'Diego Armando Guzmán Soto',
    id_hospital: 'hosp003'
  },
  {
    _id: 'enf151',
    nombre: 'Paula Andrea Restrepo Londoño',
    id_hospital: 'hosp003'
  },
  {
    _id: 'enf152',
    nombre: 'Mauricio Alejandro Parra Jiménez',
    id_hospital: 'hosp003'
  },
  {
    _id: 'enf153',
    nombre: 'Diana Marcela Ospina Valencia',
    id_hospital: 'hosp003'
  },
  {
    _id: 'enf154',
    nombre: 'Julio César Peña Arango',
    id_hospital: 'hosp003'
  },
  {
    _id: 'enf155',
    nombre: 'Sandra Milena Quintero Zapata',
    id_hospital: 'hosp003'
  },
  {
    _id: 'enf156',
    nombre: 'Rafael Antonio Mejía Cardona',
    id_hospital: 'hosp003'
  },
  {
    _id: 'enf157',
    nombre: 'Gloria Stella Arias Betancur',
    id_hospital: 'hosp003'
  },
  {
    _id: 'enf158',
    nombre: 'Álvaro Javier Giraldo Osorio',
    id_hospital: 'hosp003'
  },
  {
    _id: 'enf159',
    nombre: 'Mónica Liliana Cárdenas Franco',
    id_hospital: 'hosp003'
  },
  {
    _id: 'enf160',
    nombre: 'Jairo Alonso Montoya Restrepo',
    id_hospital: 'hosp003'
  }
]


// 6. Mostrar hospitales con más de 10 médicos
db.Medicos.aggregate([
  { $group: { _id: "$id_hospital", total: { $sum: 1 } } },
  { $match: { total: { $gt: 10 } } }
])

[
  { _id: 'hos002', total: 46 },
  { _id: 'hos003', total: 50 },
  { _id: 'hos001', total: 50 }
]


// 8. Mostrar hospitales que tienen laboratorio clínico
db.Horario.find({ horario_tipo: /Laboratorio/ })

[
  {
    _id: ObjectId('6887deba0be2cd6239fe691f'),
    horario_tipo: 'Laboratorio Clínico - Mañana',
    dias: 'Lunes a Sábado'
  },
  {
    _id: ObjectId('6887deba0be2cd6239fe6920'),
    horario_tipo: 'Laboratorio Clínico - Tarde',
    dias: 'Lunes a Viernes'
  }
]


// 9. Listar hospitales con tipo de institución "Privado"
db.Hospitales.find({ tipo_institucion: "Privada" })
[
{
  _id: ObjectId('6887ea5f0be2cd6239fe6b03'),
  hospital_id: 'hos003',
  nombre: 'Clínica Materno Infantil San Luis',
  direccion: 'Cra. 26 #48-56',
  telefono: '(607) 6430026',
  codigo_habilitacion: '6800100201-01',
  tipo_institucion: 'Privada',
  nivel_complejidad: 'Alta Complejidad'
}
]


// 10. Mostrar hospitales por nivel de complejidad
db.Hospital.aggregate([
  { $group: { _id: "$nivel_complejidad", total: { $sum: 1 } } }
])

// 11. Mostrar nombre y áreas de cada hospital
db.Areas.find({}, { descripcion: 1, id_hospital: 1 })

// 12. Mostrar cuántas áreas asistenciales hay por hospital
db.Areas.aggregate([
  { $match: { tipo_area: "Área Asistencial" } },
  { $group: { _id: "$id_hospital", total: { $sum: 1 } } }
])

// 13. Mostrar cuántas áreas generales por hospital
db.Areas.aggregate([
  { $match: { tipo_area: "Área General" } },
  { $group: { _id: "$id_hospital", total: { $sum: 1 } } }
])

// 14. Listar todos los hospitales ordenados por nombre
db.Hospital.find().sort({ nombre: 1 })

// 15. Buscar hospital por código de habilitación
db.Hospital.find({ codigo_habilitacion: "H12345" })

// 16. Mostrar teléfonos de contacto de todos los hospitales
db.Hospital.find({}, { nombre: 1, telefono: 1 })

// 17. Listar todos los hospitales que tienen más de 3 áreas
db.Areas.aggregate([
  { $group: { _id: "$id_hospital", total_areas: { $sum: 1 } } },
  { $match: { total_areas: { $gt: 3 } } }
])

// 18. Mostrar qué hospitales tienen Imagenología
db.Horario.find({ horario_tipo: /Imagenología/ })

// 19. Mostrar hospitales con servicio de urgencias 24/7
db.Horario.find({ horario_tipo: /Urgencias/ })

// 20. Mostrar cuántos administrativos hay por hospital
db.Administrativos.aggregate([
  { $group: { _id: "$id_hospital", total: { $sum: 1 } } }
])

---

### 💊 2. Inventarios de medicamentos (15 consultas)

// 21. Mostrar todos los medicamentos
db.Medicamentos.find()

// 22. Mostrar medicamentos disponibles
db.Medicamentos.find({ disponibilidad: "Disponible" })

// 23. Mostrar medicamentos agotados
db.Medicamentos.find({ disponibilidad: "Agotado" })

// 24. Contar medicamentos por tipo
db.Medicamentos.aggregate([
  { $group: { _id: "$tipo", total: { $sum: 1 } } }
])

// 25. Listar medicamentos por proveedor
db.Medicamentos.find({}, { nombre: 1, proveedor: 1 })

// 26. Buscar medicamento por nombre
db.Medicamentos.find({ nombre: /aspirina/i })

// 27. Medicamentos con existencia menor a 10 unidades
db.Medicamentos.find({ cantidad: { $lt: 10 } })

// 28. Total de medicamentos por hospital
db.Medicamentos.aggregate([
  { $group: { _id: "$id_hospital", total: { $sum: 1 } } }
])

// 29. Medicamentos vencidos
db.Medicamentos.find({ fecha_vencimiento: { $lt: new Date() } })

// 30. Medicamentos que vencen este mes
const now = new Date()
const end = new Date(now.getFullYear(), now.getMonth() + 1, 0)
db.Medicamentos.find({
  fecha_vencimiento: {
    $gte: now,
    $lte: end
  }
})

// 31. Listar medicamentos ordenados por cantidad
db.Medicamentos.find().sort({ cantidad: -1 })

// 32. Medicamentos que requieren refrigeración
db.Medicamentos.find({ requiere_refrigeracion: true })

// 33. Medicamentos de uso controlado
db.Medicamentos.find({ tipo: "Controlado" })

// 34. Mostrar el proveedor con más medicamentos entregados
db.Medicamentos.aggregate([
  { $group: { _id: "$proveedor", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
])

// 35. Mostrar disponibilidad por tipo
db.Medicamentos.aggregate([
  { $group: { _id: { tipo: "$tipo", disponibilidad: "$disponibilidad" }, total: { $sum: 1 } } }
])

---

### 🧾 3. Historiales clínicos (15 consultas)

// 36. Historial por paciente
db.HistoriaClinica.find({ id_paciente: ObjectId("...") })

// 37. Diagnósticos más frecuentes
db.HistoriaClinica.aggregate([
  { $group: { _id: "$diagnostico", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
])

// 38. Tratamientos más comunes
db.HistoriaClinica.aggregate([
  { $unwind: "$tratamientos" },
  { $group: { _id: "$tratamientos.nombre", total: { $sum: 1 } } }
])

// 39. Mostrar diagnósticos por área médica
db.HistoriaClinica.aggregate([
  { $group: { _id: "$area_medica", total: { $sum: 1 } } }
])

// 40. Buscar historial por fecha
db.HistoriaClinica.find({ fecha: { $gte: ISODate("2024-01-01") } })

// 41. Buscar pacientes diagnosticados con "Diabetes"
db.HistoriaClinica.find({ diagnostico: /diabetes/i })

// 42. Pacientes con más de 3 tratamientos
db.HistoriaClinica.aggregate([
  { $project: { id_paciente: 1, tratamientos: 1, total: { $size: "$tratamientos" } } },
  { $match: { total: { $gt: 3 } } }
])

// 43. Pacientes que repiten tratamiento
db.HistoriaClinica.aggregate([
  { $unwind: "$tratamientos" },
  { $group: { _id: { paciente: "$id_paciente", tratamiento: "$tratamientos.nombre" }, total: { $sum: 1 } } },
  { $match: { total: { $gt: 1 } } }
])

// 44. Tratamientos por especialidad
db.HistoriaClinica.aggregate([
  { $group: { _id: "$especialidad", total: { $sum: 1 } } }
])

// 45. Historiales por mes
db.HistoriaClinica.aggregate([
  { $group: { _id: { $month: "$fecha" }, total: { $sum: 1 } } }
])

// 46. Últimos tratamientos por paciente
db.HistoriaClinica.find().sort({ fecha: -1 }).limit(10)

// 47. Pacientes con evolución satisfactoria
db.HistoriaClinica.find({ evolucion: "Satisfactoria" })

// 48. Consultas por médico
db.HistoriaClinica.aggregate([
  { $group: { _id: "$id_medico", total: { $sum: 1 } } }
])

// 49. Consultas por día
db.HistoriaClinica.aggregate([
  { $group: { _id: { $dayOfWeek: "$fecha" }, total: { $sum: 1 } } }
])

// 50. Pacientes que no volvieron
db.Pacientes.find({ ultima_visita: { $lt: ISODate("2024-01-01") } })

---

### 🧑‍⚕️ 4. Actividades del personal (15 consultas)

// 51. Personal por área
db.Administrativos.aggregate([
  { $group: { _id: "$area", total: { $sum: 1 } } }
])

// 52. Personal por rol
db.Administrativos.aggregate([
  { $group: { _id: "$rol", total: { $sum: 1 } } }
])

// 53. Enfermeros por turno
db.Horario.find({ horario_tipo: /Tarde|Noche|Mañana/ })

// 54. Personal con jornada rotativa
db.Horario.find({ horario_tipo: /Rotativo/ })

// 55. Personal activo por hospital
db.Administrativos.aggregate([
  { $match: { estado: "Activo" } },
  { $group: { _id: "$id_hospital", total: { $sum: 1 } } }
])

// 56. Médicos por especialidad
db.Medicos.aggregate([
  { $group: { _id: "$especialidad", total: { $sum: 1 } } }
])

// 57. Personal nocturno
db.Horario.find({ horario_tipo: /Nocturno/ })

// 58. Médicos que trabajan fines de semana
db.Horario.find({ dias: /Sábado|Domingo/ })

// 59. Mostrar todos los tipos de personal
db.TiposPersonal.find()

// 60. Personal con asignación múltiple
db.AreaEspecializacion.aggregate([
  { $group: { _id: "$id_personal", total: { $sum: 1 } } },
  { $match: { total: { $gt: 1 } } }
])

// 61. Personal con cargo de jefatura
db.Administrativos.find({ rol: /Jefe|Coordinador/ })

// 62. Personal por género
db.Administrativos.aggregate([
  { $group: { _id: "$genero", total: { $sum: 1 } } }
])

// 63. Personal por fecha de ingreso
db.Administrativos.aggregate([
  { $group: { _id: { $year: "$fecha_ingreso" }, total: { $sum: 1 } } }
])

// 64. Médicos con disponibilidad 24/7
db.Horario.find({ horario_tipo: /24\/7/ })

// 65. Personal con más de 5 años
// Suponiendo que hay campo `fecha_ingreso`
const hace5 = new Date()
hace5.setFullYear(hace5.getFullYear() - 5)
db.Administrativos.find({ fecha_ingreso: { $lte: hace5 } })

---

### 📅 5. Visitas médicas y estadísticas (15 consultas)

// 66. Total de visitas por paciente
db.VisitasMedicas.aggregate([
  { $group: { _id: "$id_paciente", total: { $sum: 1 } } }
])

// 67. Visitas por fecha
db.VisitasMedicas.aggregate([
  { $group: { _id: "$fecha", total: { $sum: 1 } } }
])

// 68. Visitas por médico
db.VisitasMedicas.aggregate([
  { $group: { _id: "$id_medico", total: { $sum: 1 } } }
])

// 69. Enfermedades más comunes
db.Enfermedades.aggregate([
  { $group: { _id: "$nombre", total: { $sum: 1 } } }
])

// 70. Visitas por especialidad
db.VisitasMedicas.aggregate([
  { $group: { _id: "$especialidad", total: { $sum: 1 } } }
])

// 71. Pacientes más recurrentes
db.VisitasMedicas.aggregate([
  { $group: { _id: "$id_paciente", total: { $sum: 1 } } },
  { $sort: { total: -1 } },
  { $limit: 10 }
])

// 72. Promedio de visitas por día
db.VisitasMedicas.aggregate([
  { $group: { _id: { $dateToString: { format: "%Y-%m-%d", date: "$fecha" } }, total: { $sum: 1 } } }
])

// 73. Enfermedades por edad del paciente
db.Enfermedades.aggregate([
  { $group: { _id: "$edad_paciente", total: { $sum: 1 } } }
])

// 74. Visitas por mes
db.VisitasMedicas.aggregate([
  { $group: { _id: { $month: "$fecha" }, total: { $sum: 1 } } }
])

// 75. Visitas por hospital
db.VisitasMedicas.aggregate([
  { $group: { _id: "$id_hospital", total: { $sum: 1 } } }
])

// 76. Visitas en horario nocturno
db.Horario.find({ horario_tipo: /Nocturno/ })

// 77. Pacientes con enfermedades crónicas
db.Enfermedades.find({ tipo: "Crónica" })

// 78. Visitas por síntomas
db.Sintomas.aggregate([
  { $group: { _id: "$nombre", total: { $sum: 1 } } }
])

// 79. Visitas que terminaron en hospitalización
db.VisitasMedicas.find({ resultado: "Hospitalización" })

// 80. Número total de visitas médicas
db.VisitasMedicas.countDocuments()














































## Consultas generales de hospitales y personal
1. **Estado actual de hospitales**: cantidad de médicos, enfermeras y áreas especializadas por hospital.
2. **Número total de hospitales** por tipo de institución (público, privado, etc.).
3. **Número de hospitales** por nivel de complejidad (alta, media, baja).
4. **Total de administradores** por hospital y su rol.
5. **Médicos activos** en un hospital específico, por especialidad.
6. **Enfermeras** por estado de actividad (activo, inactivo) en un hospital.
7. **Número de áreas especializadas** por hospital.
8. Listado de **hospitales con el mayor número de personal médico**.
9. **Total de personal de mantenimiento** por hospital.
10. **Médicos por hospital** y especialidad asignada.

## Consultas de inventarios y medicamentos
11. **Inventario total de medicamentos** por hospital.
12. **Inventario de medicamentos** por tipo y disponibilidad (disponibles y agotados).
13. **Medicamentos más utilizados** en cada hospital.
14. **Medicamentos que requieren reabastecimiento urgente**.
15. **Número de medicamentos por tipo de presentación** (tabletas, inyecciones, etc.).
16. **Historial de actualizaciones de stock** en el inventario.
17. **Proveedores de medicamentos** con más entregas registradas.
18. **Medicamentos con mayor frecuencia de aplicación** en tratamientos.
19. **Total de stock de medicamentos** por tipo.
20. **Medicamentos con más solicitudes de compra** por hospital.

## Consultas de pacientes y tratamientos
21. **Pacientes registrados** por hospital y estado (activo, inactivo).
22. **Pacientes por tipo de identificación** (CC, TI, PASAPORTE).
23. **Número de pacientes con seguro de salud** por hospital.
24. **Pacientes atendidos** por tipo de atención (consulta externa, hospitalización).
25. **Historial de tratamientos realizados** a un paciente específico.
26. **Tratamientos más comunes** para enfermedades específicas.
27. **Número de visitas médicas** realizadas a pacientes por médico.
28. **Pacientes con tratamiento específico** y su evolución.
29. **Tratamientos más costosos** realizados a pacientes.
30. **Tratamientos con mayor número de visitas asociadas**.
31. **Pacientes con diagnóstico de enfermedades comunes** (gripe, resfriado, etc.).
32. **Pacientes con tratamiento activo** por tipo de enfermedad.
33. **Pacientes dados de alta** en los últimos 30 días por hospital.
34. **Pacientes con enfermedades crónicas** y su seguimiento.
35. **Tratamientos de rehabilitación** realizados a pacientes.
36. **Historial de consultas médicas** por paciente y tipo de consulta.
37. **Pacientes que requieren visitas médicas adicionales** por tratamiento.
38. **Diagnóstico médico más frecuente** por hospital.
39. **Número de pacientes atendidos** por cada médico.
40. **Pacientes con patologías asociadas** a enfermedades respiratorias.

## Consultas de visitas médicas y enfermedades
41. **Total de visitas médicas** por hospital y especialidad.
42. **Visitas médicas realizadas** en un periodo de tiempo específico (por ejemplo, este mes).
43. **Visitas médicas por tipo de visita** (de urgencia, programada, seguimiento).
44. **Visitas médicas realizadas** por médico y su estado (finalizada, pendiente, cancelada).
45. **Número de visitas médicas** realizadas a pacientes con diagnóstico de gripe.
46. **Visitas médicas realizadas** por paciente en un año.
47. **Número de visitas médicas por síntoma asociado** (fiebre, tos, dolor de cabeza).
48. **Promedio de visitas médicas** por paciente al mes.
49. **Porcentaje de visitas médicas completadas** por tipo de tratamiento.
50. **Enfermedades más frecuentes** diagnosticadas en pacientes.
51. **Estadísticas de enfermedades respiratorias** diagnosticadas por hospital.
52. **Enfermedades diagnosticadas más comunes** por paciente.
53. **Tratamientos asociados a enfermedades respiratorias**.
54. **Enfermedades crónicas más comunes** en hospitales.
55. **Análisis de enfermedades contagiosas** por hospital y su propagación.
56. **Promedio de tiempo de espera** entre diagnóstico y tratamiento para pacientes.
57. **Número de pacientes diagnosticados con enfermedades raras**.
58. **Análisis de enfermedades relacionadas con el clima** (gripe, alergias).
59. **Enfermedades diagnosticadas más frecuentes** en la última semana.
60. **Tratamientos realizados por tipo de enfermedad** en el último año.

## Consultas de horarios y personal
61. **Horarios de trabajo por tipo de personal** (médico, enfermero, administrativo).
62. **Médicos con más horas de trabajo** registradas en el mes.
63. **Horarios más comunes de trabajo** en un hospital.
64. **Total de horas trabajadas por personal administrativo** en un hospital.
65. **Horarios asignados a personal de mantenimiento** por hospital.
66. Listado de **médicos y enfermeras asignados a turno nocturno**.
67. **Horarios de atención para pacientes** por tipo de especialidad.
68. **Horarios de visitas para familiares de pacientes hospitalizados**.
69. **Horarios de consulta médica más frecuentes** por tipo de enfermedad.
70. **Estadísticas de cumplimiento de horarios de trabajo** del personal médico.

## Consultas sobre enfermedades y síntomas
71. **Síntomas más comunes** asociados a una enfermedad específica.
72. **Porcentaje de pacientes con fiebre diagnosticados con gripe**.
73. **Síntomas reportados con mayor frecuencia** en las visitas médicas.
74. **Síntomas más comunes diagnosticados por médicos** en los últimos 6 meses.
75. **Enfermedades diagnosticadas asociadas a ciertos síntomas**.
76. **Enfermedades tratadas con la mayor cantidad de medicamentos**.
77. **Análisis de relación entre síntomas y enfermedades crónicas**.
78. Listado de **enfermedades asociadas a síntomas respiratorios**.
79. **Tiempo promedio entre la aparición de síntomas y diagnóstico**.
80. **Estadísticas de enfermedades diagnosticadas por síntomas reportados** en consultas.
