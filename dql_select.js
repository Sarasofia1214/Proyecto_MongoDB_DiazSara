// Consultas en la base de datos hospitalaria

// Número total de hospitales por tipo de institución:
// Esta consulta agrupa los hospitales por tipo de institución y cuenta cuántos hay de cada tipo.

db.Hospitales.aggregate([ { $group: { _id: "$tipo_institucion", total_hospitales: { $sum: 1 } } }] )
[
  { _id: 'Pública Departamental', total_hospitales: 1 },
  { _id: 'Privada', total_hospitales: 1 },
  { _id: 'Pública Universitaria', total_hospitales: 1 }
]

//  Número de hospitales por nivel de complejidad
// Agrupa los hospitales según su nivel de complejidad y calcula el total por cada nivel.

db.Hospitales.aggregate([ { $group: { _id: "$nivel_complejidad", total_hospitales: { $sum: 1 } } }] )
[
  { _id: 'Mediana y Alta Complejidad', total_hospitales: 1 },
  { _id: 'Alta Complejidad', total_hospitales: 2 }
]

// Medicamentos con más stock por hospital 
// Devuelve los 5 medicamentos con mayor stock de un hospital específico, ordenados de mayor a menor.

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

// Cantidad total de médicos por hospital
// Agrupa a los médicos según el hospital al que pertenecen y muestra el total por hospital.
db.Medicos.aggregate([
  { $group: { _id: "$id_hospital", total_medicos: { $sum: 1 } } }
])

[
  { _id: 'hos003', total_medicos: 50 },
  { _id: 'hos001', total_medicos: 50 },
  { _id: 'hos002', total_medicos: 46 }
]


//  Cantidad total de enfermeros por hospital
// Similar a la anterior, esta consulta muestra la cantidad total de enfermeros por hospital.
db.Enfermeros.aggregate([
  { $group: { _id: "$id_hospital", total_enfermeros: { $sum: 1 } } }
])

[
  { _id: 'hosp002', total_enfermeros: 70 },
  { _id: 'hosp003', total_enfermeros: 70 },
  { _id: 'hosp001', total_enfermeros: 70 }
]



//  Total de áreas especializadas por hospital
db.AreaEspecializacion.aggregate([
  { $group: { _id: "$id_hospital", total_areas: { $sum: 1 } } }
])

[
  { _id: ObjectId('6887ea5f0be2cd6239fe6b02'), total_areas: 10 },
  { _id: ObjectId('6887ea5f0be2cd6239fe6b03'), total_areas: 10 },
  { _id: ObjectId('6887ea5f0be2cd6239fe6b01'), total_areas: 10 }
]


//  Listar médicos por hospital
db.Medicos.find({}, { nombre: 1, especialidad: 1, id_hospital: 1 })

[
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
  }
]


//  Listar enfermeros por hospital
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


//  Mostrar hospitales con más de 10 médicos
db.Medicos.aggregate([
  { $group: { _id: "$id_hospital", total: { $sum: 1 } } },
  { $match: { total: { $gt: 10 } } }
])

[
  { _id: 'hos002', total: 46 },
  { _id: 'hos003', total: 50 },
  { _id: 'hos001', total: 50 }
]


// Mostrar hospitales que tienen laboratorio clínico
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


//  Listar hospitales con tipo de institución "Privado"
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


//  Mostrar hospitales por nivel de complejidad
db.Hospitales.aggregate([{ $group: { _id: "$nivel_complejidad", total: { $sum: 1 } } }])
  [
    { _id: 'Mediana y Alta Complejidad', total: 1 },
    { _id: 'Alta Complejidad', total: 2 }
  ]
  

//  Mostrar nombre y áreas de cada hospital
db.Areas.find({}, { descripcion: 1, id_hospital: 1 })

[
  {
    _id: ObjectId('6887eace0be2cd6239fe6b24'),
    descripcion: 'Servicios ambulatorios generales',
    id_hospital: 'hos001'
  },
  {
    _id: ObjectId('6887eace0be2cd6239fe6b25'),
    descripcion: 'Servicios de urgencias',
    id_hospital: 'hos001'
  },
  {
    _id: ObjectId('6887eace0be2cd6239fe6b26'),
    descripcion: 'Laboratorio clínico para diagnósticos',
    id_hospital: 'hos001'
  },
  {
    _id: ObjectId('6887eace0be2cd6239fe6b27'),
    descripcion: 'Banco de sangre para transfusiones',
    id_hospital: 'hos001'
  },
  {
    _id: ObjectId('6887eace0be2cd6239fe6b28'),
    descripcion: 'Radiología e imágenes diagnósticas',
    id_hospital: 'hos001'
  },
  {
    _id: ObjectId('6887eace0be2cd6239fe6b29'),
    descripcion: 'Farmacia hospitalaria',
    id_hospital: 'hos001'
  },
  {
    _id: ObjectId('6887eace0be2cd6239fe6b2a'),
    descripcion: 'Cirugía general',
    id_hospital: 'hos001'
  },
  {
    _id: ObjectId('6887eace0be2cd6239fe6b2b'),
    descripcion: 'Obstetricia',
    id_hospital: 'hos001'
  },
  {
    _id: ObjectId('6887eace0be2cd6239fe6b2c'),
    descripcion: 'Hospitalización general',
    id_hospital: 'hos001'
  },
  {
    _id: ObjectId('6887eace0be2cd6239fe6b2d'),
    descripcion: 'Cuidados Intensivos',
    id_hospital: 'hos001'
  },
  {
    _id: ObjectId('6887eace0be2cd6239fe6b2e'),
    descripcion: 'Cocina del hospital',
    id_hospital: 'hos001'
  },
  {
    _id: ObjectId('6887eace0be2cd6239fe6b2f'),
    descripcion: 'Lavandería del hospital',
    id_hospital: 'hos001'
  },
  {
    _id: ObjectId('6887eace0be2cd6239fe6b30'),
    descripcion: 'Servicios ambulatorios especializados',
    id_hospital: 'hos002'
  },
  {
    _id: ObjectId('6887eace0be2cd6239fe6b31'),
    descripcion: 'Urgencias pediátricas',
    id_hospital: 'hos002'
  },
  {
    _id: ObjectId('6887eace0be2cd6239fe6b32'),
    descripcion: 'Hemodinamia',
    id_hospital: 'hos002'
  },
  {
    _id: ObjectId('6887eace0be2cd6239fe6b33'),
    descripcion: 'Gastroenterología y endoscopia diagnóstica',
    id_hospital: 'hos002'
  },
  {
    _id: ObjectId('6887eace0be2cd6239fe6b34'),
    descripcion: 'Laboratorio de patología',
    id_hospital: 'hos002'
  },
  {
    _id: ObjectId('6887eace0be2cd6239fe6b35'),
    descripcion: 'Nutrición y dietética',
    id_hospital: 'hos002'
  },
  {
    _id: ObjectId('6887eace0be2cd6239fe6b36'),
    descripcion: 'Cirugía ambulatoria',
    id_hospital: 'hos002'
  },
  {
    _id: ObjectId('6887eace0be2cd6239fe6b37'),
    descripcion: 'Central de esterilización',
    id_hospital: 'hos002'
  }
]


//  Mostrar cuántas áreas generales por hospital
db.Areas.aggregate([ { $match: { tipo_area: "Asistencial" } }, { $group: { _id: "$id_hospital", total: { $sum: 1 } } }] )
[
  { _id: 'hos003', total: 2 },
  { _id: 'hos001', total: 2 },
  { _id: 'hos002', total: 2 }
]

// Mostrar cuantos areas apoyo hay por hospital

db.Areas.aggregate([ { $match: { tipo_area: "Apoyo" } }, { $group: { _id: "$id_hospital", total: { $sum: 1 } } }] )
[
  { _id: 'hos001', total: 4 },
  { _id: 'hos002', total: 4 },
  { _id: 'hos003', total: 4 }
]


//  Listar todos los hospitales ordenados por nombre
db.Hospitales.find().sort({ nombre: 1 })
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
  },
  {
    _id: ObjectId('6887ea5f0be2cd6239fe6b01'),
    hospital_id: 'hos001',
    nombre: 'Hospital Universitario de Santander (HUS)',
    direccion: 'Cra. 33 #28-126',
    telefono: '(607) 6912010',
    codigo_habilitacion: '6800100792-01',
    tipo_institucion: 'Pública Departamental',
    nivel_complejidad: 'Mediana y Alta Complejidad'
  },
  {
    _id: ObjectId('6887ea5f0be2cd6239fe6b02'),
    hospital_id: 'hos002',
    nombre: 'Los Comuneros Hospital Universitario de Bucaramanga',
    direccion: 'Ak 27 #30 -15',
    telefono: '(607) 6343536',
    codigo_habilitacion: '900240018',
    tipo_institucion: 'Pública Universitaria',
    nivel_complejidad: 'Alta Complejidad'
  }
]


//  Buscar hospital por código de habilitación
db.Hospitales.find({ codigo_habilitacion: "6800100792-01" })

[
  {
    _id: ObjectId('6887ea5f0be2cd6239fe6b01'),
    hospital_id: 'hos001',
    nombre: 'Hospital Universitario de Santander (HUS)',
    direccion: 'Cra. 33 #28-126',
    telefono: '(607) 6912010',
    codigo_habilitacion: '6800100792-01',
    tipo_institucion: 'Pública Departamental',
    nivel_complejidad: 'Mediana y Alta Complejidad'
  }
]


//  Mostrar teléfonos de contacto de todos los hospitales
db.Hospitales.find({}, { nombre: 1, telefono: 1 })

[
  {
    _id: ObjectId('6887ea5f0be2cd6239fe6b01'),
    nombre: 'Hospital Universitario de Santander (HUS)',
    telefono: '(607) 6912010'
  },
  {
    _id: ObjectId('6887ea5f0be2cd6239fe6b02'),
    nombre: 'Los Comuneros Hospital Universitario de Bucaramanga',
    telefono: '(607) 6343536'
  },
  {
    _id: ObjectId('6887ea5f0be2cd6239fe6b03'),
    nombre: 'Clínica Materno Infantil San Luis',
    telefono: '(607) 6430026'
  }
]

//  Listar todos los hospitales que tienen más de 3 áreas

db.Areas.aggregate([
  { $group: { _id: "$id_hospital", total_areas: { $sum: 1 } } },
  { $match: { total_areas: { $gt: 3 } } }
])

[
  { _id: 'hos003', total_areas: 8 },
  { _id: 'hos001', total_areas: 12 },
  { _id: 'hos002', total_areas: 12 }
]


//  Mostrar qué hospitales tienen Imagenología
db.Horario.find({ horario_tipo: /Imagenología/ })

[
  {
    _id: ObjectId('6887deba0be2cd6239fe6921'),
    horario_tipo: 'Imagenología/Administrativo - Diurno',
    dias: 'Lunes a Viernes'
  }
]

// Mostrar hospitales con servicio de urgencias 24/7
db.Horario.find({ horario_tipo: /Urgencias/ })

[
  {
    _id: ObjectId('6887deba0be2cd6239fe691c'),
    horario_tipo: 'Urgencias - 24/7',
    dias: 'Todos los días'
  }
]

//  Mostrar cuántos administrativos hay por hospital
db.Administrativos.aggregate([
  { $group: { _id: "$_id", total: { $sum: 1 } } }
])

[
  { _id: 'adm014', total: 1 },
  { _id: 'adm022', total: 1 },
  { _id: 'adm013', total: 1 },
  { _id: 'adm012', total: 1 },
  { _id: 'adm019', total: 1 },
  { _id: 'adm002', total: 1 },
  { _id: 'adm009', total: 1 },
  { _id: 'adm016', total: 1 },
  { _id: 'adm021', total: 1 },
  { _id: 'adm017', total: 1 },
  { _id: 'adm005', total: 1 },
  { _id: 'adm007', total: 1 },
  { _id: 'adm010', total: 1 },
  { _id: 'adm011', total: 1 },
  { _id: 'adm020', total: 1 },
  { _id: 'adm018', total: 1 },
  { _id: 'adm003', total: 1 },
  { _id: 'adm015', total: 1 },
  { _id: 'adm006', total: 1 },
  { _id: 'adm004', total: 1 }
]


// Mostrar todos los medicamentos
db.Medicamentos.find()

[
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a11'),
    medicamento_id: 'med001',
    nombre: 'Acetaminofén',
    principio_activo: 'Paracetamol',
    concentracion: '500 mg',
    tipo: 'Analgésico / Antipirético',
    lote: 'LOTE2024001',
    disponibilidad: true,
    fabricante: 'Laboratorios Genericos S.A.'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a12'),
    medicamento_id: 'med002',
    nombre: 'Ibuprofeno',
    principio_activo: 'Ibuprofeno',
    concentracion: '400 mg',
    tipo: 'AINE / Analgésico',
    lote: 'LOTE2024002',
    disponibilidad: true,
    fabricante: 'Farmacéutica Global Ltda.'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a13'),
    medicamento_id: 'med003',
    nombre: 'Amoxicilina',
    principio_activo: 'Amoxicilina',
    concentracion: '500 mg',
    tipo: 'Antibiótico',
    lote: 'LOTE2024003',
    disponibilidad: true,
    fabricante: 'MediPharma Corp.'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a14'),
    medicamento_id: 'med004',
    nombre: 'Ceftriaxona',
    principio_activo: 'Ceftriaxona',
    concentracion: '1 g',
    tipo: 'Antibiótico',
    lote: 'LOTE2024004',
    disponibilidad: true,
    fabricante: 'BioGen Laboratorios'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a15'),
    medicamento_id: 'med005',
    nombre: 'Omeprazol',
    principio_activo: 'Omeprazol',
    concentracion: '20 mg',
    tipo: 'Inhibidor Bomba Protones',
    lote: 'LOTE2024005',
    disponibilidad: true,
    fabricante: 'Química Saludable'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a16'),
    medicamento_id: 'med006',
    nombre: 'Salbutamol',
    principio_activo: 'Salbutamol',
    concentracion: '100 mcg/dosis',
    tipo: 'Broncodilatador',
    lote: 'LOTE2024006',
    disponibilidad: true,
    fabricante: 'RespiCare Labs'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a17'),
    medicamento_id: 'med007',
    nombre: 'Losartán',
    principio_activo: 'Losartán Potásico',
    concentracion: '50 mg',
    tipo: 'Antihipertensivo',
    lote: 'LOTE2024007',
    disponibilidad: true,
    fabricante: 'CardioFarm'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a18'),
    medicamento_id: 'med008',
    nombre: 'Metformina',
    principio_activo: 'Metformina Clorhidrato',
    concentracion: '850 mg',
    tipo: 'Antidiabético Oral',
    lote: 'LOTE2024008',
    disponibilidad: true,
    fabricante: 'EndoMed'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a19'),
    medicamento_id: 'med009',
    nombre: 'Atorvastatina',
    principio_activo: 'Atorvastatina Cálcica',
    concentracion: '20 mg',
    tipo: 'Hipolipemiante',
    lote: 'LOTE2024009',
    disponibilidad: true,
    fabricante: 'HealthyLife Pharma'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a1a'),
    medicamento_id: 'med010',
    nombre: 'Morfina',
    principio_activo: 'Morfina Sulfato',
    concentracion: '10 mg/ml',
    tipo: 'Analgésico Opioide',
    lote: 'LOTE2024010',
    disponibilidad: true,
    fabricante: 'FarmaDolor S.A.'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a1b'),
    medicamento_id: 'med011',
    nombre: 'Diazepam',
    principio_activo: 'Diazepam',
    concentracion: '10 mg',
    tipo: 'Ansiolítico / Sedante',
    lote: 'LOTE2024011',
    disponibilidad: true,
    fabricante: 'NeuroCare Labs'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a1c'),
    medicamento_id: 'med012',
    nombre: 'Heparina',
    principio_activo: 'Heparina Sódica',
    concentracion: '5000 UI/ml',
    tipo: 'Anticoagulante',
    lote: 'LOTE2024012',
    disponibilidad: true,
    fabricante: 'CoagulaPharm'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a1d'),
    medicamento_id: 'med013',
    nombre: 'Dexametasona',
    principio_activo: 'Dexametasona',
    concentracion: '4 mg/ml',
    tipo: 'Corticoide / Antiinflamatorio',
    lote: 'LOTE2024013',
    disponibilidad: true,
    fabricante: 'Steroidix'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a1e'),
    medicamento_id: 'med014',
    nombre: 'Insulina Glargina',
    principio_activo: 'Insulina Glargina',
    concentracion: '100 UI/ml',
    tipo: 'Insulina',
    lote: 'LOTE2024014',
    disponibilidad: true,
    fabricante: 'DiabCare'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a1f'),
    medicamento_id: 'med015',
    nombre: 'Ranitidina',
    principio_activo: 'Ranitidina Clorhidrato',
    concentracion: '150 mg',
    tipo: 'Antiácido / Antiulceroso',
    lote: 'LOTE2024015',
    disponibilidad: true,
    fabricante: 'GastroFarm'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a20'),
    medicamento_id: 'med016',
    nombre: 'Clopidogrel',
    principio_activo: 'Clopidogrel Bisulfato',
    concentracion: '75 mg',
    tipo: 'Antiagregante Plaquetario',
    lote: 'LOTE2024016',
    disponibilidad: true,
    fabricante: 'CardioPrevent'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a21'),
    medicamento_id: 'med017',
    nombre: 'Digoxina',
    principio_activo: 'Digoxina',
    concentracion: '0.25 mg',
    tipo: 'Cardiotónico',
    lote: 'LOTE2024017',
    disponibilidad: true,
    fabricante: 'HeartBeat Labs'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a22'),
    medicamento_id: 'med018',
    nombre: 'Furosemida',
    principio_activo: 'Furosemida',
    concentracion: '40 mg',
    tipo: 'Diurético',
    lote: 'LOTE2024018',
    disponibilidad: true,
    fabricante: 'HydroPharm'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a23'),
    medicamento_id: 'med019',
    nombre: 'Ciprofloxacino',
    principio_activo: 'Ciprofloxacino',
    concentracion: '500 mg',
    tipo: 'Antibiótico',
    lote: 'LOTE2024019',
    disponibilidad: true,
    fabricante: 'InfectioCare'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a24'),
    medicamento_id: 'med020',
    nombre: 'Vancomicina',
    principio_activo: 'Vancomicina',
    concentracion: '500 mg',
    tipo: 'Antibiótico',
    lote: 'LOTE2024020',
    disponibilidad: true,
    fabricante: 'GramPositive Labs'
  }
]

// Mostrar medicamentos disponibles

db.Medicamentos.find({ disponibilidad: true })
[
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a11'),
    medicamento_id: 'med001',
    nombre: 'Acetaminofén',
    principio_activo: 'Paracetamol',
    concentracion: '500 mg',
    tipo: 'Analgésico / Antipirético',
    lote: 'LOTE2024001',
    disponibilidad: true,
    fabricante: 'Laboratorios Genericos S.A.'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a12'),
    medicamento_id: 'med002',
    nombre: 'Ibuprofeno',
    principio_activo: 'Ibuprofeno',
    concentracion: '400 mg',
    tipo: 'AINE / Analgésico',
    lote: 'LOTE2024002',
    disponibilidad: true,
    fabricante: 'Farmacéutica Global Ltda.'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a13'),
    medicamento_id: 'med003',
    nombre: 'Amoxicilina',
    principio_activo: 'Amoxicilina',
    concentracion: '500 mg',
    tipo: 'Antibiótico',
    lote: 'LOTE2024003',
    disponibilidad: true,
    fabricante: 'MediPharma Corp.'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a14'),
    medicamento_id: 'med004',
    nombre: 'Ceftriaxona',
    principio_activo: 'Ceftriaxona',
    concentracion: '1 g',
    tipo: 'Antibiótico',
    lote: 'LOTE2024004',
    disponibilidad: true,
    fabricante: 'BioGen Laboratorios'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a15'),
    medicamento_id: 'med005',
    nombre: 'Omeprazol',
    principio_activo: 'Omeprazol',
    concentracion: '20 mg',
    tipo: 'Inhibidor Bomba Protones',
    lote: 'LOTE2024005',
    disponibilidad: true,
    fabricante: 'Química Saludable'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a16'),
    medicamento_id: 'med006',
    nombre: 'Salbutamol',
    principio_activo: 'Salbutamol',
    concentracion: '100 mcg/dosis',
    tipo: 'Broncodilatador',
    lote: 'LOTE2024006',
    disponibilidad: true,
    fabricante: 'RespiCare Labs'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a17'),
    medicamento_id: 'med007',
    nombre: 'Losartán',
    principio_activo: 'Losartán Potásico',
    concentracion: '50 mg',
    tipo: 'Antihipertensivo',
    lote: 'LOTE2024007',
    disponibilidad: true,
    fabricante: 'CardioFarm'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a18'),
    medicamento_id: 'med008',
    nombre: 'Metformina',
    principio_activo: 'Metformina Clorhidrato',
    concentracion: '850 mg',
    tipo: 'Antidiabético Oral',
    lote: 'LOTE2024008',
    disponibilidad: true,
    fabricante: 'EndoMed'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a19'),
    medicamento_id: 'med009',
    nombre: 'Atorvastatina',
    principio_activo: 'Atorvastatina Cálcica',
    concentracion: '20 mg',
    tipo: 'Hipolipemiante',
    lote: 'LOTE2024009',
    disponibilidad: true,
    fabricante: 'HealthyLife Pharma'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a1a'),
    medicamento_id: 'med010',
    nombre: 'Morfina',
    principio_activo: 'Morfina Sulfato',
    concentracion: '10 mg/ml',
    tipo: 'Analgésico Opioide',
    lote: 'LOTE2024010',
    disponibilidad: true,
    fabricante: 'FarmaDolor S.A.'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a1b'),
    medicamento_id: 'med011',
    nombre: 'Diazepam',
    principio_activo: 'Diazepam',
    concentracion: '10 mg',
    tipo: 'Ansiolítico / Sedante',
    lote: 'LOTE2024011',
    disponibilidad: true,
    fabricante: 'NeuroCare Labs'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a1c'),
    medicamento_id: 'med012',
    nombre: 'Heparina',
    principio_activo: 'Heparina Sódica',
    concentracion: '5000 UI/ml',
    tipo: 'Anticoagulante',
    lote: 'LOTE2024012',
    disponibilidad: true,
    fabricante: 'CoagulaPharm'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a1d'),
    medicamento_id: 'med013',
    nombre: 'Dexametasona',
    principio_activo: 'Dexametasona',
    concentracion: '4 mg/ml',
    tipo: 'Corticoide / Antiinflamatorio',
    lote: 'LOTE2024013',
    disponibilidad: true,
    fabricante: 'Steroidix'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a1e'),
    medicamento_id: 'med014',
    nombre: 'Insulina Glargina',
    principio_activo: 'Insulina Glargina',
    concentracion: '100 UI/ml',
    tipo: 'Insulina',
    lote: 'LOTE2024014',
    disponibilidad: true,
    fabricante: 'DiabCare'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a1f'),
    medicamento_id: 'med015',
    nombre: 'Ranitidina',
    principio_activo: 'Ranitidina Clorhidrato',
    concentracion: '150 mg',
    tipo: 'Antiácido / Antiulceroso',
    lote: 'LOTE2024015',
    disponibilidad: true,
    fabricante: 'GastroFarm'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a20'),
    medicamento_id: 'med016',
    nombre: 'Clopidogrel',
    principio_activo: 'Clopidogrel Bisulfato',
    concentracion: '75 mg',
    tipo: 'Antiagregante Plaquetario',
    lote: 'LOTE2024016',
    disponibilidad: true,
    fabricante: 'CardioPrevent'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a21'),
    medicamento_id: 'med017',
    nombre: 'Digoxina',
    principio_activo: 'Digoxina',
    concentracion: '0.25 mg',
    tipo: 'Cardiotónico',
    lote: 'LOTE2024017',
    disponibilidad: true,
    fabricante: 'HeartBeat Labs'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a22'),
    medicamento_id: 'med018',
    nombre: 'Furosemida',
    principio_activo: 'Furosemida',
    concentracion: '40 mg',
    tipo: 'Diurético',
    lote: 'LOTE2024018',
    disponibilidad: true,
    fabricante: 'HydroPharm'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a23'),
    medicamento_id: 'med019',
    nombre: 'Ciprofloxacino',
    principio_activo: 'Ciprofloxacino',
    concentracion: '500 mg',
    tipo: 'Antibiótico',
    lote: 'LOTE2024019',
    disponibilidad: true,
    fabricante: 'InfectioCare'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a24'),
    medicamento_id: 'med020',
    nombre: 'Vancomicina',
    principio_activo: 'Vancomicina',
    concentracion: '500 mg',
    tipo: 'Antibiótico',
    lote: 'LOTE2024020',
    disponibilidad: true,
    fabricante: 'GramPositive Labs'
  }
]

// Contar medicamentos por tipo
db.Medicamentos.aggregate([
  { $group: { _id: "$tipo", total: { $sum: 1 } } }
])

[
  { _id: 'Anticolinérgico / Emergencia', total: 1 },
  { _id: 'Antiespasmódico', total: 1 },
  { _id: 'Antihistamínico', total: 1 },
  { _id: 'Antiácido / Antiulceroso', total: 1 },
  { _id: 'Uterotónico', total: 1 },
  { _id: 'Antibiótico / Antiparasitario', total: 1 },
  { _id: 'Anticoagulante', total: 1 },
  { _id: 'Solución Intravenosa', total: 1 },
  { _id: 'Solución Intravenosa / Nutrición', total: 1 },
  { _id: 'Vasopresor', total: 1 },
  { _id: 'Diurético Tiazídico', total: 1 },
  { _id: 'Antidepresivo ISRS', total: 1 },
  { _id: 'Analgésico / Antipirético', total: 1 },
  { _id: 'Vitamina / Coagulante', total: 1 },
  { _id: 'Vitamina', total: 1 },
  { _id: 'Inhibidor Bomba Protones', total: 1 },
  { _id: 'IECA / Antihipertensivo', total: 1 },
  { _id: 'Estimulante Adrenérgico / Emergencia', total: 1 },
  { _id: 'Antidiabético Oral', total: 1 },
  { _id: 'Corticoide / Antiinflamatorio', total: 1 }
]


// Listar medicamentos por proveedor
db.Medicamentos.find({}, { nombre: 1, proveedor: 1 })

[
  { _id: ObjectId('6887e83d0be2cd6239fe6a11'), nombre: 'Acetaminofén' },
  { _id: ObjectId('6887e83d0be2cd6239fe6a12'), nombre: 'Ibuprofeno' },
  { _id: ObjectId('6887e83d0be2cd6239fe6a13'), nombre: 'Amoxicilina' },
  { _id: ObjectId('6887e83d0be2cd6239fe6a14'), nombre: 'Ceftriaxona' },
  { _id: ObjectId('6887e83d0be2cd6239fe6a15'), nombre: 'Omeprazol' },
  { _id: ObjectId('6887e83d0be2cd6239fe6a16'), nombre: 'Salbutamol' },
  { _id: ObjectId('6887e83d0be2cd6239fe6a17'), nombre: 'Losartán' },
  { _id: ObjectId('6887e83d0be2cd6239fe6a18'), nombre: 'Metformina' },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a19'),
    nombre: 'Atorvastatina'
  },
  { _id: ObjectId('6887e83d0be2cd6239fe6a1a'), nombre: 'Morfina' },
  { _id: ObjectId('6887e83d0be2cd6239fe6a1b'), nombre: 'Diazepam' },
  { _id: ObjectId('6887e83d0be2cd6239fe6a1c'), nombre: 'Heparina' },
  { _id: ObjectId('6887e83d0be2cd6239fe6a1d'), nombre: 'Dexametasona' },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a1e'),
    nombre: 'Insulina Glargina'
  },
  { _id: ObjectId('6887e83d0be2cd6239fe6a1f'), nombre: 'Ranitidina' },
  { _id: ObjectId('6887e83d0be2cd6239fe6a20'), nombre: 'Clopidogrel' },
  { _id: ObjectId('6887e83d0be2cd6239fe6a21'), nombre: 'Digoxina' },
  { _id: ObjectId('6887e83d0be2cd6239fe6a22'), nombre: 'Furosemida' },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a23'),
    nombre: 'Ciprofloxacino'
  },
  { _id: ObjectId('6887e83d0be2cd6239fe6a24'), nombre: 'Vancomicina' }
]

// Buscar medicamento por nombre
db.Medicamentos.find({ nombre: /ceftriaxona/i })
[
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a14'),
    medicamento_id: 'med004',
    nombre: 'Ceftriaxona',
    principio_activo: 'Ceftriaxona',
    concentracion: '1 g',
    tipo: 'Antibiótico',
    lote: 'LOTE2024004',
    disponibilidad: true,
    fabricante: 'BioGen Laboratorios'
  }
]

// Medicamentos con lote menor a LOTE2024004

db.Medicamentos.find({ lote: { $lt: "LOTE2024004" } })
[
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a11'),
    medicamento_id: 'med001',
    nombre: 'Acetaminofén',
    principio_activo: 'Paracetamol',
    concentracion: '500 mg',
    tipo: 'Analgésico / Antipirético',
    lote: 'LOTE2024001',
    disponibilidad: true,
    fabricante: 'Laboratorios Genericos S.A.'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a12'),
    medicamento_id: 'med002',
    nombre: 'Ibuprofeno',
    principio_activo: 'Ibuprofeno',
    concentracion: '400 mg',
    tipo: 'AINE / Analgésico',
    lote: 'LOTE2024002',
    disponibilidad: true,
    fabricante: 'Farmacéutica Global Ltda.'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a13'),
    medicamento_id: 'med003',
    nombre: 'Amoxicilina',
    principio_activo: 'Amoxicilina',
    concentracion: '500 mg',
    tipo: 'Antibiótico',
    lote: 'LOTE2024003',
    disponibilidad: true,
    fabricante: 'MediPharma Corp.'
  }
]

// Listar medicamentos ordenados por cantidad
db.Medicamentos.find().sort({ cantidad: -1 })

[
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a3e'),
    medicamento_id: 'med046',
    nombre: 'Fentanilo',
    principio_activo: 'Fentanilo Citrato',
    concentracion: '50 mcg/ml',
    tipo: 'Analgésico Opioide / Anestésico',
    lote: 'LOTE2024046',
    disponibilidad: true,
    fabricante: 'PainRelief Strong'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a30'),
    medicamento_id: 'med032',
    nombre: 'Simvastatina',
    principio_activo: 'Simvastatina',
    concentracion: '20 mg',
    tipo: 'Hipolipemiante',
    lote: 'LOTE2024032',
    disponibilidad: true,
    fabricante: 'Colesterol Control'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a31'),
    medicamento_id: 'med033',
    nombre: 'Warfarina',
    principio_activo: 'Warfarina Sódica',
    concentracion: '5 mg',
    tipo: 'Anticoagulante Oral',
    lote: 'LOTE2024033',
    disponibilidad: true,
    fabricante: 'CoagulaSafe'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a32'),
    medicamento_id: 'med034',
    nombre: 'Levofloxacino',
    principio_activo: 'Levofloxacino',
    concentracion: '500 mg',
    tipo: 'Antibiótico',
    lote: 'LOTE2024034',
    disponibilidad: true,
    fabricante: 'RespiraPharma'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a33'),
    medicamento_id: 'med035',
    nombre: 'Metronidazol',
    principio_activo: 'Metronidazol',
    concentracion: '500 mg',
    tipo: 'Antibiótico / Antiparasitario',
    lote: 'LOTE2024035',
    disponibilidad: true,
    fabricante: 'GastroGuard'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a34'),
    medicamento_id: 'med036',
    nombre: 'Fluconazol',
    principio_activo: 'Fluconazol',
    concentracion: '150 mg',
    tipo: 'Antifúngico',
    lote: 'LOTE2024036',
    disponibilidad: true,
    fabricante: 'FungoStop'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a35'),
    medicamento_id: 'med037',
    nombre: 'Aciclovir',
    principio_activo: 'Aciclovir',
    concentracion: '200 mg',
    tipo: 'Antiviral',
    lote: 'LOTE2024037',
    disponibilidad: true,
    fabricante: 'VirusShield'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a36'),
    medicamento_id: 'med038',
    nombre: 'Gabapentina',
    principio_activo: 'Gabapentina',
    concentracion: '300 mg',
    tipo: 'Anticonvulsivante / Neuropático',
    lote: 'LOTE2024038',
    disponibilidad: true,
    fabricante: 'NeuroRelief'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a37'),
    medicamento_id: 'med039',
    nombre: 'Pregabalina',
    principio_activo: 'Pregabalina',
    concentracion: '75 mg',
    tipo: 'Anticonvulsivante / Neuropático',
    lote: 'LOTE2024039',
    disponibilidad: true,
    fabricante: 'NerveCalm'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a38'),
    medicamento_id: 'med040',
    nombre: 'Escopolamina (Butilbromuro)',
    principio_activo: 'Butilbromuro de Escopolamina',
    concentracion: '20 mg',
    tipo: 'Antiespasmódico',
    lote: 'LOTE2024040',
    disponibilidad: true,
    fabricante: 'SpasmoFree'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a39'),
    medicamento_id: 'med041',
    nombre: 'Tramadol + Paracetamol',
    principio_activo: 'Tramadol Clorhidrato + Paracetamol',
    concentracion: '37.5 mg / 325 mg',
    tipo: 'Analgésico Combinado',
    lote: 'LOTE2024041',
    disponibilidad: true,
    fabricante: 'DolorTotal'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a3a'),
    medicamento_id: 'med042',
    nombre: 'Vitamina K',
    principio_activo: 'Fitomenadiona',
    concentracion: '10 mg/ml',
    tipo: 'Vitamina / Coagulante',
    lote: 'LOTE2024042',
    disponibilidad: true,
    fabricante: 'Vitaminex'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a3b'),
    medicamento_id: 'med043',
    nombre: 'Sulfato de Magnesio',
    principio_activo: 'Sulfato de Magnesio',
    concentracion: '20%',
    tipo: 'Electrolito / Anticonvulsivante',
    lote: 'LOTE2024043',
    disponibilidad: true,
    fabricante: 'MineralBalance'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a3c'),
    medicamento_id: 'med044',
    nombre: 'Dopamina',
    principio_activo: 'Dopamina Clorhidrato',
    concentracion: '40 mg/ml',
    tipo: 'Vasopresor / Inotrópico',
    lote: 'LOTE2024044',
    disponibilidad: true,
    fabricante: 'CriticalCare Pharma'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a3d'),
    medicamento_id: 'med045',
    nombre: 'Norepinefrina',
    principio_activo: 'Norepinefrina Bitartrato',
    concentracion: '4 mg/4ml',
    tipo: 'Vasopresor',
    lote: 'LOTE2024045',
    disponibilidad: true,
    fabricante: 'LifeSupport Labs'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a2f'),
    medicamento_id: 'med031',
    nombre: 'Amlodipino',
    principio_activo: 'Amlodipino Besilato',
    concentracion: '5 mg',
    tipo: 'Antihipertensivo',
    lote: 'LOTE2024031',
    disponibilidad: true,
    fabricante: 'TensioMed'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a3f'),
    medicamento_id: 'med047',
    nombre: 'Remifentanilo',
    principio_activo: 'Remifentanilo Clorhidrato',
    concentracion: '2 mg',
    tipo: 'Analgésico Opioide / Anestésico',
    lote: 'LOTE2024047',
    disponibilidad: true,
    fabricante: 'UltraFast Anesthesia'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a40'),
    medicamento_id: 'med048',
    nombre: 'Rocuronio',
    principio_activo: 'Rocuronio Bromuro',
    concentracion: '10 mg/ml',
    tipo: 'Relajante Muscular',
    lote: 'LOTE2024048',
    disponibilidad: true,
    fabricante: 'MuscleControl Pharma'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a41'),
    medicamento_id: 'med049',
    nombre: 'Succinoilcolina',
    principio_activo: 'Cloruro de Succinilcolina',
    concentracion: '100 mg',
    tipo: 'Relajante Muscular (Despolarizante)',
    lote: 'LOTE2024049',
    disponibilidad: true,
    fabricante: 'EmergencyRelax'
  },
  {
    _id: ObjectId('6887e83d0be2cd6239fe6a42'),
    medicamento_id: 'med050',
    nombre: 'Lidocaína',
    principio_activo: 'Lidocaína Clorhidrato',
    concentracion: '2%',
    tipo: 'Anestésico Local / Antiarrítmico',
    lote: 'LOTE2024050',
    disponibilidad: true,
    fabricante: 'NumbSense Labs'
  }
]

//  Mostrar disponibilidad por tipo
db.Medicamentos.aggregate([
  { $group: { _id: { tipo: "$tipo", disponibilidad: "$disponibilidad" }, total: { $sum: 1 } } }
])

[
  { _id: { tipo: 'Antihipertensivo', disponibilidad: true }, total: 2 },
  {
    _id: { tipo: 'Antiácido / Antiulceroso', disponibilidad: true },
    total: 1
  },
  {
    _id: { tipo: 'Antidiabético Oral', disponibilidad: true },
    total: 1
  },
  {
    _id: { tipo: 'Procinético / Antiemético', disponibilidad: true },
    total: 1
  },
  { _id: { tipo: 'Antipsicótico', disponibilidad: true }, total: 1 },
  {
    _id: {
      tipo: 'Estimulante Adrenérgico / Emergencia',
      disponibilidad: true
    },
    total: 1
  },
  {
    _id: {
      tipo: 'Relajante Muscular (Despolarizante)',
      disponibilidad: true
    },
    total: 1
  },
  {
    _id: { tipo: 'AINE / Analgésico', disponibilidad: true },
    total: 1
  },
  { _id: { tipo: 'Vitamina', disponibilidad: true }, total: 1 },
  { _id: { tipo: 'Anestésico Local', disponibilidad: true }, total: 1 },
  {
    _id: { tipo: 'Analgésico / Antipirético', disponibilidad: true },
    total: 1
  },
  {
    _id: { tipo: 'Antiagregante Plaquetario', disponibilidad: true },
    total: 1
  },
  {
    _id: { tipo: 'Antidepresivo ISRS', disponibilidad: true },
    total: 1
  },
  {
    _id: { tipo: 'Anestésico Intravenoso', disponibilidad: true },
    total: 1
  },
  {
    _id: { tipo: 'Anticoagulante Oral', disponibilidad: true },
    total: 1
  },
  {
    _id: { tipo: 'Corticoide / Antiinflamatorio', disponibilidad: true },
    total: 1
  },
  { _id: { tipo: 'Insulina', disponibilidad: true }, total: 1 },
  {
    _id: { tipo: 'Anticolinérgico / Emergencia', disponibilidad: true },
    total: 1
  },
  { _id: { tipo: 'Antiemético', disponibilidad: true }, total: 1 },
  {
    _id: { tipo: 'Solución Intravenosa / Nutrición', disponibilidad: true },
    total: 1
  }
]

// Historial por paciente --32 ******************************************************************************************************************************

db.HistoriaClinica.find({ paciente: ObjectId('be2d259697cd42fc99d36162') })
[
  {
    _id: ObjectId('688824670be2cd6239fe6c2e'),
    paciente: ObjectId('be2d259697cd42fc99d36162'),
    tratamiento: ObjectId('6887ee060be2cd6239fe6bbc')
  },
  {
    _id: ObjectId('6888bca9c8a16e0939fe6961'),
    paciente: ObjectId('be2d259697cd42fc99d36162'),
    tratamiento: ObjectId('6887ee060be2cd6239fe6bbc')
  }
]

//  Buscar historial por tratamiento
db.HistoriaClinica.find({ tratamiento: ObjectId('6887ee060be2cd6239fe6bbd')})
[
{
  _id: ObjectId('688824670be2cd6239fe6c2f'),
  paciente: ObjectId('bc63b5c2331d4fcdb26c517c'),
  tratamiento: ObjectId('6887ee060be2cd6239fe6bbd')
},
{
  _id: ObjectId('688824670be2cd6239fe6c43'),
  paciente: ObjectId('5cfd89f776cf4a7eaab02319'),
  tratamiento: ObjectId('6887ee060be2cd6239fe6bbd')
},
{
  _id: ObjectId('688824670be2cd6239fe6c57'),
  paciente: ObjectId('4e4994187c7f41c39315a6a4'),
  tratamiento: ObjectId('6887ee060be2cd6239fe6bbd')
},
{
  _id: ObjectId('688824670be2cd6239fe6c6b'),
  paciente: ObjectId('9704959231fb4ff2b9b548b3'),
  tratamiento: ObjectId('6887ee060be2cd6239fe6bbd')
},
{
  _id: ObjectId('688824670be2cd6239fe6c7f'),
  paciente: ObjectId('1a76bf8abf60491d860b3306'),
  tratamiento: ObjectId('6887ee060be2cd6239fe6bbd')
},
{
  _id: ObjectId('688824670be2cd6239fe6c93'),
  paciente: ObjectId('6313070bc3634e8694175f22'),
  tratamiento: ObjectId('6887ee060be2cd6239fe6bbd')
},
{
  _id: ObjectId('688824670be2cd6239fe6ca7'),
  paciente: ObjectId('301a531cbd614944a6a1445f'),
  tratamiento: ObjectId('6887ee060be2cd6239fe6bbd')
},
{
  _id: ObjectId('688824670be2cd6239fe6cbb'),
  paciente: ObjectId('7de16aa11ef64441881e8afc'),
  tratamiento: ObjectId('6887ee060be2cd6239fe6bbd')
},
{
  _id: ObjectId('688824670be2cd6239fe6ccf'),
  paciente: ObjectId('fdad6026193541e38df55755'),
  tratamiento: ObjectId('6887ee060be2cd6239fe6bbd')
},
{
  _id: ObjectId('688824670be2cd6239fe6ce3'),
  paciente: ObjectId('85a62cd514424ac89e0efde7'),
  tratamiento: ObjectId('6887ee060be2cd6239fe6bbd')
},
{
  _id: ObjectId('688824670be2cd6239fe6cf7'),
  paciente: ObjectId('3c922c6865934f009e579dfa'),
  tratamiento: ObjectId('6887ee060be2cd6239fe6bbd')
},
{
  _id: ObjectId('688824670be2cd6239fe6d0b'),
  paciente: ObjectId('5738121b2ff84ded80c51ca8'),
  tratamiento: ObjectId('6887ee060be2cd6239fe6bbd')
},
{
  _id: ObjectId('688824670be2cd6239fe6d1f'),
  paciente: ObjectId('43f8441aa49843189d8eecef'),
  tratamiento: ObjectId('6887ee060be2cd6239fe6bbd')
},
{
  _id: ObjectId('688824670be2cd6239fe6d33'),
  paciente: ObjectId('cb147bdf8a4b4ef49f138c5b'),
  tratamiento: ObjectId('6887ee060be2cd6239fe6bbd')
},
{
  _id: ObjectId('6888bca9c8a16e0939fe6962'),
  paciente: ObjectId('bc63b5c2331d4fcdb26c517c'),
  tratamiento: ObjectId('6887ee060be2cd6239fe6bbd')
},
{
  _id: ObjectId('6888bca9c8a16e0939fe6976'),
  paciente: ObjectId('5cfd89f776cf4a7eaab02319'),
  tratamiento: ObjectId('6887ee060be2cd6239fe6bbd')
},
{
  _id: ObjectId('6888bca9c8a16e0939fe698a'),
  paciente: ObjectId('4e4994187c7f41c39315a6a4'),
  tratamiento: ObjectId('6887ee060be2cd6239fe6bbd')
},
{
  _id: ObjectId('6888bca9c8a16e0939fe699e'),
  paciente: ObjectId('9704959231fb4ff2b9b548b3'),
  tratamiento: ObjectId('6887ee060be2cd6239fe6bbd')
},
{
  _id: ObjectId('6888bca9c8a16e0939fe69b2'),
  paciente: ObjectId('1a76bf8abf60491d860b3306'),
  tratamiento: ObjectId('6887ee060be2cd6239fe6bbd')
}
]



// Listar pacientes con su EPS (join con SegurosMedicos)

db.Pacientes.aggregate([
  {
    $lookup: {
      from: "SegurosMedicos",
      localField: "seguro_id",
      foreignField: "_id",
      as: "seguro"
    }
  },
  { $unwind: "$seguro" },
  {
    $project: {
      nombre: 1,
      genero: 1,
      "seguro.nombre": 1,
      "seguro.estado": 1
    }
  }
])


[
  {
    _id: ObjectId('be2d259697cd42fc99d36162'),
    nombre: 'Maria Lopez',
    genero: 'Femenino',
    seguro: { nombre: 'Plan Vital' }
  },
  {
    _id: ObjectId('bc63b5c2331d4fcdb26c517c'),
    nombre: 'Andres Lopez',
    genero: 'Masculino',
    seguro: { nombre: 'Plan de Salud Global' }
  },
  {
    _id: ObjectId('be5639854e484337a5f7fd40'),
    nombre: 'Juan Torres',
    genero: 'Otro',
    seguro: { nombre: 'Plan de Salud Global' }
  },
  {
    _id: ObjectId('65dc333014f4439ea1da0e34'),
    nombre: 'Valeria Perez',
    genero: 'Femenino',
    seguro: { nombre: 'Plan de Salud Global' }
  },
  {
    _id: ObjectId('048f014687e34335a6a79477'),
    nombre: 'Valeria Martinez',
    genero: 'Otro',
    seguro: { nombre: 'Plan Vital' }
  },
  {
    _id: ObjectId('ec7e983507f34fada5a4501e'),
    nombre: 'Andres Martinez',
    genero: 'Masculino',
    seguro: { nombre: 'Plan Vital' }
  },
  {
    _id: ObjectId('3524f8a2f3414c1d98fcd28e'),
    nombre: 'Andres Torres',
    genero: 'Masculino',
    seguro: { nombre: 'Plan Vital' }
  },
  {
    _id: ObjectId('8d89f735a02543188d6a7d43'),
    nombre: 'Valeria Sanchez',
    genero: 'Femenino',
    seguro: { nombre: 'Plan Preferencial' }
  },
  {
    _id: ObjectId('066bd5575f2f407ab17240af'),
    nombre: 'Juan Sanchez',
    genero: 'Masculino',
    seguro: { nombre: 'Plan Preferencial' }
  },
  {
    _id: ObjectId('ba5eb1c2ad2b4f6d8d084ce5'),
    nombre: 'Isabella Sanchez',
    genero: 'Femenino',
    seguro: { nombre: 'Plan de Salud Global' }
  },
  {
    _id: ObjectId('f48a3c0baf544bcc867f790c'),
    nombre: 'Andres Hernandez',
    genero: 'Masculino',
    seguro: { nombre: 'Plan Esencial' }
  },
  {
    _id: ObjectId('85e612ca3f234b9493005ab9'),
    nombre: 'Juan Martinez',
    genero: 'Masculino',
    seguro: { nombre: 'Plan Vital' }
  },
  {
    _id: ObjectId('f5e7d20c635d4575ab41b4e6'),
    nombre: 'Miguel Torres',
    genero: 'Otro',
    seguro: { nombre: 'Plan Vital' }
  },
  {
    _id: ObjectId('fca35a6dea3f4cc082275df5'),
    nombre: 'Maria Rodriguez',
    genero: 'Femenino',
    seguro: { nombre: 'Plan de Salud Global' }
  },
  {
    _id: ObjectId('f9d0b158dadc4667a34d451c'),
    nombre: 'Isabella Martinez',
    genero: 'Femenino',
    seguro: { nombre: 'Plan Esencial' }
  },
  {
    _id: ObjectId('bb00acc6e59e4979a884d61e'),
    nombre: 'Javier Gonzalez',
    genero: 'Otro',
    seguro: { nombre: 'Plan Vital' }
  },
  {
    _id: ObjectId('5cec787741d54b4b92beb29c'),
    nombre: 'Valeria Perez',
    genero: 'Femenino',
    seguro: { nombre: 'Plan Vital' }
  },
  {
    _id: ObjectId('9b6606b94359493a9210b8e0'),
    nombre: 'Andres Hernandez',
    genero: 'Masculino',
    seguro: { nombre: 'Plan de Salud Global' }
  },
  {
    _id: ObjectId('4f93178bf13c4a1fb79c758a'),
    nombre: 'Ricardo Lopez',
    genero: 'Masculino',
    seguro: { nombre: 'Plan Esencial' }
  },
  {
    _id: ObjectId('c428a1233cfd4a8d934fb460'),
    nombre: 'Carolina Ramirez',
    genero: 'Femenino',
    seguro: { nombre: 'Plan Preferencial' }
  }
]


// Agrupar total por genero de pacientes

db.Pacientes.aggregate([
  {
    $group: {
      _id: { hospital: "$hospital_id", genero: "$genero" },
      total: { $sum: 1 }
    }
  }
])

[
  {
    _id: { hospital: ObjectId('6887ea5f0be2cd6239fe6b03'), genero: 'Otro' },
    total: 13
  },
  {
    _id: {
      hospital: ObjectId('6887ea5f0be2cd6239fe6b01'),
      genero: 'Masculino'
    },
    total: 43
  },
  {
    _id: {
      hospital: ObjectId('6887ea5f0be2cd6239fe6b03'),
      genero: 'Femenino'
    },
    total: 13
  },
  {
    _id: {
      hospital: ObjectId('6887ea5f0be2cd6239fe6b03'),
      genero: 'Masculino'
    },
    total: 17
  },
  {
    _id: {
      hospital: ObjectId('6887ea5f0be2cd6239fe6b02'),
      genero: 'Masculino'
    },
    total: 30
  },
  {
    _id: {
      hospital: ObjectId('6887ea5f0be2cd6239fe6b01'),
      genero: 'Femenino'
    },
    total: 34
  },
  {
    _id: { hospital: ObjectId('6887ea5f0be2cd6239fe6b02'), genero: 'Otro' },
    total: 34
  },
  {
    _id: {
      hospital: ObjectId('6887ea5f0be2cd6239fe6b02'),
      genero: 'Femenino'
    },
    total: 36
  },
  {
    _id: { hospital: ObjectId('6887ea5f0be2cd6239fe6b01'), genero: 'Otro' },
    total: 23
  }
]


// Subarea por area y cantidad
db.Subareas.aggregate([
  {
    $group: {
      _id: "$id_area",
      cantidad_subareas: { $sum: 1 }
    }
  }
])
[
  { _id: ObjectId('6887eace0be2cd6239fe6b24'), cantidad_subareas: 16 },
  { _id: ObjectId('6887eace0be2cd6239fe6b26'), cantidad_subareas: 7 },
  { _id: ObjectId('6887eace0be2cd6239fe6b2e'), cantidad_subareas: 11 },
  { _id: ObjectId('6887eace0be2cd6239fe6b37'), cantidad_subareas: 9 }
]

// Proveedores por tipo:

db.Proveedores.aggregate([
  {
    $group: {
      _id: "$tipo",
      cantidad: { $sum: 1 }
    }
  }
])

[
  { _id: 'Medicamentos genéricos', cantidad: 1 },
  { _id: 'Mantenimiento y repuestos', cantidad: 1 },
  { _id: 'Materiales de laboratorio', cantidad: 1 },
  { _id: 'Reactivos y químicos', cantidad: 1 },
  { _id: 'Suministros textiles', cantidad: 1 },
  { _id: 'Soluciones intravenosas', cantidad: 1 },
  { _id: 'Productos farmacéuticos', cantidad: 7 },
  { _id: 'Diagnósticos y dispositivos', cantidad: 1 },
  { _id: 'Farmacéuticos y OTC', cantidad: 1 },
  { _id: 'Equipos médicos', cantidad: 1 },
  { _id: 'Productos de higiene y desinfección', cantidad: 1 },
  { _id: 'Productos de limpieza', cantidad: 2 },
  { _id: 'Servicios de tecnología', cantidad: 1 },
  { _id: 'Químicos industriales', cantidad: 1 },
  { _id: 'Material de oficina', cantidad: 1 },
  { _id: 'Gases medicinales', cantidad: 1 },
  { _id: 'Insumos de aseo', cantidad: 1 }
]

//  Ultimas 5 visitas medicas

db.VisitasMedicas.aggregate([
  { $sort: { fecha: -1 } },
  { $limit: 5 }
])

[
  {
    _id: ObjectId('6888b54dc8a16e0939fe6914'),
    fecha_visita: ISODate('2024-01-18T11:45:00.000Z'),
    id_tratamiento: ObjectId('65dc333014f4439ea1da0e34'),
    id_medico: 'med004',
    id_paciente: '66667855c5204841b0a174cf',
    tipo_visita: 'Consulta especializada',
    estado_visita: 'Completada',
    observaciones: 'Evaluación cardiológica completa. Se ajusta medicación antihipertensiva.'
  },
  {
    _id: ObjectId('6888b54dc8a16e0939fe6915'),
    fecha_visita: ISODate('2024-01-19T08:30:00.000Z'),
    id_tratamiento: ObjectId('048f014687e34335a6a79477'),
    id_medico: 'med005',
    id_paciente: '4f9ce3a8b8534deba71ca321',
    tipo_visita: 'Control rutinario',
    estado_visita: 'Completada',
    observaciones: 'Paciente diabético con niveles de glucosa estables. Continuar con dieta y ejercicio.'
  },
  {
    _id: ObjectId('6888b54dc8a16e0939fe6912'),
    fecha_visita: ISODate('2024-01-16T14:00:00.000Z'),
    id_tratamiento: ObjectId('bc63b5c2331d4fcdb26c517c'),
    id_medico: 'med002',
    id_paciente: '6313070bc3634e8694175f22',
    tipo_visita: 'Control postoperatorio',
    estado_visita: 'Completada',
    observaciones: 'Herida quirúrgica cicatrizando correctamente. Sin signos de infección.'
  },
  {
    _id: ObjectId('6888b54dc8a16e0939fe6911'),
    fecha_visita: ISODate('2024-01-15T09:30:00.000Z'),
    id_tratamiento: ObjectId('be2d259697cd42fc99d36162'),
    id_medico: 'med001',
    id_paciente: '44827dbe77d340ae975ec45c',
    tipo_visita: 'Consulta general',
    estado_visita: 'Completada',
    observaciones: 'Paciente presenta mejoría en síntomas iniciales. Se recomienda continuar tratamiento.'
  },
  {
    _id: ObjectId('6888b54dc8a16e0939fe6913'),
    fecha_visita: ISODate('2024-01-17T10:15:00.000Z'),
    id_tratamiento: ObjectId('be5639854e484337a5f7fd40'),
    id_medico: 'med003',
    id_paciente: '8ae0a42a2f354a45861708d5',
    tipo_visita: 'Urgencia',
    estado_visita: 'Completada',
    observaciones: 'Paciente atendido por dolor abdominal agudo. Se realizaron estudios complementarios.'
  }
]

// Pacientes ocn seguro medico en niver básico
db.Pacientes.aggregate([
  {
    $lookup: {
      from: "SegurosMedicos",
      localField: "seguro_id",
      foreignField: "_id",
      as: "seguro"
    }
  },
  { $unwind: "$seguro" },
  { $match: { "seguro.nivel_cobertura" :"Básico"} },
  {
    $project: {
      nombre: 1,
      correo: 1,
      "seguro.nombre": 1
    }
  }
])

[
  {
    _id: ObjectId('be2d259697cd42fc99d36162'),
    nombre: 'Maria Lopez',
    correo: 'maria.lopez746@example.com',
    seguro: { nombre: 'Plan Vital' }
  },
  {
    _id: ObjectId('048f014687e34335a6a79477'),
    nombre: 'Valeria Martinez',
    correo: 'valeria.martinez664@example.com',
    seguro: { nombre: 'Plan Vital' }
  },
  {
    _id: ObjectId('ec7e983507f34fada5a4501e'),
    nombre: 'Andres Martinez',
    correo: 'andres.martinez547@example.com',
    seguro: { nombre: 'Plan Vital' }
  },
  {
    _id: ObjectId('3524f8a2f3414c1d98fcd28e'),
    nombre: 'Andres Torres',
    correo: 'andres.torres28@example.com',
    seguro: { nombre: 'Plan Vital' }
  },
  {
    _id: ObjectId('85e612ca3f234b9493005ab9'),
    nombre: 'Juan Martinez',
    correo: 'juan.martinez129@example.com',
    seguro: { nombre: 'Plan Vital' }
  },
  {
    _id: ObjectId('f5e7d20c635d4575ab41b4e6'),
    nombre: 'Miguel Torres',
    correo: 'miguel.torres414@example.com',
    seguro: { nombre: 'Plan Vital' }
  },
  {
    _id: ObjectId('bb00acc6e59e4979a884d61e'),
    nombre: 'Javier Gonzalez',
    correo: 'javier.gonzalez905@example.com',
    seguro: { nombre: 'Plan Vital' }
  },
  {
    _id: ObjectId('5cec787741d54b4b92beb29c'),
    nombre: 'Valeria Perez',
    correo: 'valeria.perez171@example.com',
    seguro: { nombre: 'Plan Vital' }
  },
  {
    _id: ObjectId('93e2f21cd1b044539246e749'),
    nombre: 'Diego Martinez',
    correo: 'diego.martinez489@example.com',
    seguro: { nombre: 'Plan de Salud Clásico' }
  },
  {
    _id: ObjectId('cb4a253860604a9f9da41c33'),
    nombre: 'Ricardo Gonzalez',
    correo: 'ricardo.gonzalez167@example.com',
    seguro: { nombre: 'Plan de Salud Clásico' }
  },
  {
    _id: ObjectId('745460e515dc4304951ddcea'),
    nombre: 'Fernando Gomez',
    correo: 'fernando.gomez503@example.com',
    seguro: { nombre: 'Plan Vital' }
  },
  {
    _id: ObjectId('d031f50cb7a644058400fc20'),
    nombre: 'Fernando Martinez',
    correo: 'fernando.martinez158@example.com',
    seguro: { nombre: 'Plan de Salud Clásico' }
  },
  {
    _id: ObjectId('2b4c0443bb0446c89955b637'),
    nombre: 'Maria Perez',
    correo: 'maria.perez398@example.com',
    seguro: { nombre: 'Plan Vital' }
  },
  {
    _id: ObjectId('6a6b574e72ec4bbfad7d8ba2'),
    nombre: 'Diego Hernandez',
    correo: 'diego.hernandez121@example.com',
    seguro: { nombre: 'Plan de Salud Clásico' }
  },
  {
    _id: ObjectId('166b32fac8db4e13a013c63f'),
    nombre: 'Sofia Torres',
    correo: 'sofia.torres610@example.com',
    seguro: { nombre: 'Plan de Salud Clásico' }
  },
  {
    _id: ObjectId('b259d5fcc0f34f3bb1f94e4b'),
    nombre: 'Gabriela Sanchez',
    correo: 'gabriela.sanchez611@example.com',
    seguro: { nombre: 'Plan Vital' }
  },
  {
    _id: ObjectId('6c6bca45cde646a39bf39578'),
    nombre: 'Javier Perez',
    correo: 'javier.perez86@example.com',
    seguro: { nombre: 'Plan de Salud Clásico' }
  },
  {
    _id: ObjectId('1c4d89dd7b104ab495c4ab49'),
    nombre: 'Diego Torres',
    correo: 'diego.torres729@example.com',
    seguro: { nombre: 'Plan de Salud Clásico' }
  },
  {
    _id: ObjectId('76651b9f4bdc4124bf50117c'),
    nombre: 'Ricardo Torres',
    correo: 'ricardo.torres552@example.com',
    seguro: { nombre: 'Plan de Salud Clásico' }
  },
  {
    _id: ObjectId('06d62b3720304e6abb4cc577'),
    nombre: 'Diego Sanchez',
    correo: 'diego.sanchez696@example.com',
    seguro: { nombre: 'Plan de Salud Clásico' }
  }
]

// Pacientes con seguro de compañia en AXA Colpatria - 40********************************************************

db.Pacientes.aggregate([
  {
    $lookup: {
      from: "SegurosMedicos",
      localField: "seguro_id",
      foreignField: "_id",
      as: "seguro"
    }
  },
  { $unwind: "$seguro" },
  { $match: { "seguro.plan": "Plan Oro"} },
  {
    $project: {
      nombre: 1,
      correo: 1,
      "seguro.nombre": 1
    }
  }
])

// Listado de seguron con total de pacientes inscritos

db.Pacientes.aggregate([
     {
       $lookup: {
         from: "SegurosMedicos",
         localField: "seguro_id",
         foreignField: "_id",
         as: "seguro"
       }
     },
     { $unwind: "$seguro" },
     {
       $group: {
         _id: "$seguro.plan",
         total_pacientes: { $sum: 1 }
       }
     }
   ])
  [
    { _id: 'Plan de Salud Clásico', total_pacientes: 47 },
    { _id: 'Plan Vital', total_pacientes: 55 },
    { _id: 'Plan de Salud Global', total_pacientes: 48 },
    { _id: 'Plan Preferencial', total_pacientes: 47 },
    { _id: 'Plan Esencial', total_pacientes: 46 }
  ]
  


// Pacientes con numeor de visitas

db.VisitasMedicas.aggregate([
     {
       $group: {
         _id: "$id_paciente",
         visitas: { $sum: 1 }
       }
     },
     {
       $sort: { visitas: -1 }
     },
     { $limit: 10 }
   ])
  [
    { _id: '657055c99b474d9e96f5f314', visitas: 2 },
    { _id: 'ab2671eb0e354741861a5804', visitas: 2 },
    { _id: 'fdad6026193541e38df55755', visitas: 2 },
    { _id: '0745a05c307843c284440288', visitas: 2 },
    { _id: 'a36d36f944fa4a6bbc9b1108', visitas: 2 },
    { _id: 'fbf4213d9d54484c9bc0164e', visitas: 2 },
    { _id: 'fa6caa4ffb2348b391a29d12', visitas: 2 },
    { _id: 'c192a7ca8b59495db860aba7', visitas: 2 },
    { _id: 'a93baf82c485424cb0a1139d', visitas: 2 },
    { _id: 'fe23b8906e104c288e08b9d1', visitas: 2 }
  ]
  
// Trataminetos con promedio de tiempo en duracion

db.Tratamientos.aggregate([
     {
       $group: {
         _id: "$tipo_tratamiento",
         total: { $sum: 1 },
         promedio_duracion: { $avg: "$duracion_dias" }
       }
     }
   ])
  [ { _id: null, total: 20, promedio_duracion: null } ]
  

// Total visitas al año

db.VisitasMedicas.aggregate([
     {
       $group: {
         _id: { $year: "$fecha" },
         total_visitas: { $sum: 1 }
       }
     },
     { $sort: { "_id": 1 } }
   ])
  [ { _id: null, total_visitas: 127 } ]
  
// Buscar tipo personal por nombre 

db.TiposPersonal.find({ nombre: "Médico Especialista" })
[
  {
    _id: ObjectId('6887e1600be2cd6239fe6930'),
    codigo: '002',
    nombre: 'Médico Especialista',
    descripcion: 'Atiende pacientes, realiza diagnósticos, prescribe tratamientos y lleva a cabo procedimientos en su área de especialización.',
    salario_base: Decimal128('8000000.00')
  }
]

// Buscar personal que gane mas de 5000000 de salario

db.TiposPersonal.find({ salario_base: { $gt: 5000000 } })
[
  {
    _id: ObjectId('6887e1600be2cd6239fe692f'),
    codigo: '001',
    nombre: 'Director General',
    descripcion: 'Gestión general, estratégica y operativa del hospital. Responsable de la dirección y el cumplimiento de objetivos institucionales.',
    salario_base: Decimal128('15000000.00')
  },
  {
    _id: ObjectId('6887e1600be2cd6239fe6930'),
    codigo: '002',
    nombre: 'Médico Especialista',
    descripcion: 'Atiende pacientes, realiza diagnósticos, prescribe tratamientos y lleva a cabo procedimientos en su área de especialización.',
    salario_base: Decimal128('8000000.00')
  }
]

// Filtrar por salario base entre 3 y 10 millones

db.TiposPersonal.find({
  salario_base: { $gte: 3000000, $lte: 10000000 }
})

[
  {
    _id: ObjectId('6887e1600be2cd6239fe6930'),
    codigo: '002',
    nombre: 'Médico Especialista',
    descripcion: 'Atiende pacientes, realiza diagnósticos, prescribe tratamientos y lleva a cabo procedimientos en su área de especialización.',
    salario_base: Decimal128('8000000.00')
  },
  {
    _id: ObjectId('6887e1600be2cd6239fe6931'),
    codigo: '003',
    nombre: 'Enfermero/a',
    descripcion: 'Asiste a médicos, administra medicamentos, cuida y monitorea a los pacientes, y educa sobre prácticas de salud.',
    salario_base: Decimal128('3500000.00')
  }
]

// Buscar tipos de personal que no sean administrativos
db.TiposPersonal.find({
  nombre: { $ne: "Personal Administrativo" }
})

[
  {
    _id: ObjectId('6887e1600be2cd6239fe692f'),
    codigo: '001',
    nombre: 'Director General',
    descripcion: 'Gestión general, estratégica y operativa del hospital. Responsable de la dirección y el cumplimiento de objetivos institucionales.',
    salario_base: Decimal128('15000000.00')
  },
  {
    _id: ObjectId('6887e1600be2cd6239fe6930'),
    codigo: '002',
    nombre: 'Médico Especialista',
    descripcion: 'Atiende pacientes, realiza diagnósticos, prescribe tratamientos y lleva a cabo procedimientos en su área de especialización.',
    salario_base: Decimal128('8000000.00')
  },
  {
    _id: ObjectId('6887e1600be2cd6239fe6931'),
    codigo: '003',
    nombre: 'Enfermero/a',
    descripcion: 'Asiste a médicos, administra medicamentos, cuida y monitorea a los pacientes, y educa sobre prácticas de salud.',
    salario_base: Decimal128('3500000.00')
  },
  {
    _id: ObjectId('6887e1600be2cd6239fe6933'),
    codigo: '005',
    nombre: 'Personal de Mantenimiento',
    descripcion: 'Realiza el mantenimiento preventivo y correctivo de las instalaciones, equipos y asegura la limpieza y salubridad del entorno.',
    salario_base: Decimal128('1500000.00')
  }
]

// Salario base organizado de mayor a menor
db.TiposPersonal.find().sort({ salario_base: -1 })
[
  {
    _id: ObjectId('6887e1600be2cd6239fe692f'),
    codigo: '001',
    nombre: 'Director General',
    descripcion: 'Gestión general, estratégica y operativa del hospital. Responsable de la dirección y el cumplimiento de objetivos institucionales.',
    salario_base: Decimal128('15000000.00')
  },
  {
    _id: ObjectId('6887e1600be2cd6239fe6930'),
    codigo: '002',
    nombre: 'Médico Especialista',
    descripcion: 'Atiende pacientes, realiza diagnósticos, prescribe tratamientos y lleva a cabo procedimientos en su área de especialización.',
    salario_base: Decimal128('8000000.00')
  },
  {
    _id: ObjectId('6887e1600be2cd6239fe6931'),
    codigo: '003',
    nombre: 'Enfermero/a',
    descripcion: 'Asiste a médicos, administra medicamentos, cuida y monitorea a los pacientes, y educa sobre prácticas de salud.',
    salario_base: Decimal128('3500000.00')
  },
  {
    _id: ObjectId('6887e1600be2cd6239fe6932'),
    codigo: '004',
    nombre: 'Personal Administrativo',
    descripcion: 'Gestiona recursos, coordina citas, maneja la documentación, la facturación y la logística hospitalaria.',
    salario_base: Decimal128('2200000.00')
  },
  {
    _id: ObjectId('6887e1600be2cd6239fe6933'),
    codigo: '005',
    nombre: 'Personal de Mantenimiento',
    descripcion: 'Realiza el mantenimiento preventivo y correctivo de las instalaciones, equipos y asegura la limpieza y salubridad del entorno.',
    salario_base: Decimal128('1500000.00')
  }
]


// Buscar medico especialista ocn fragmento de palabra 50*************************************************************

db.TiposPersonal.find({ nombre: /médico/i })
[
  {
    _id: ObjectId('6887e1600be2cd6239fe6930'),
    codigo: '002',
    nombre: 'Médico Especialista',
    descripcion: 'Atiende pacientes, realiza diagnósticos, prescribe tratamientos y lleva a cabo procedimientos en su área de especialización.',
    salario_base: Decimal128('8000000.00')
  }
]

// Busqueda por codigo

db.TiposPersonal.find({ codigo: "003" })
[
  {
    _id: ObjectId('6887e1600be2cd6239fe6931'),
    codigo: '003',
    nombre: 'Enfermero/a',
    descripcion: 'Asiste a médicos, administra medicamentos, cuida y monitorea a los pacientes, y educa sobre prácticas de salud.',
    salario_base: Decimal128('3500000.00')
  }
]


// Contar cuántos tipos de personal existen
db.TiposPersonal.countDocuments()
5

// Busqueda con fragmento 'mantenimineto' en la descripción

db.TiposPersonal.find({ descripcion: /mantenimiento/i })

[
  {
    _id: ObjectId('6887e1600be2cd6239fe6933'),
    codigo: '005',
    nombre: 'Personal de Mantenimiento',
    descripcion: 'Realiza el mantenimiento preventivo y correctivo de las instalaciones, equipos y asegura la limpieza y salubridad del entorno.',
    salario_base: Decimal128('1500000.00')
  }
]

// Buscar personal con salario inferior a 4 millones y que no sea enfermera
db.TiposPersonal.find({
  salario_base: { $lt: 4000000 },
  nombre: { $ne: "Enfermero/a" }
})

[
  {
    _id: ObjectId('6887e1600be2cd6239fe6932'),
    codigo: '004',
    nombre: 'Personal Administrativo',
    descripcion: 'Gestiona recursos, coordina citas, maneja la documentación, la facturación y la logística hospitalaria.',
    salario_base: Decimal128('2200000.00')
  },
  {
    _id: ObjectId('6887e1600be2cd6239fe6933'),
    codigo: '005',
    nombre: 'Personal de Mantenimiento',
    descripcion: 'Realiza el mantenimiento preventivo y correctivo de las instalaciones, equipos y asegura la limpieza y salubridad del entorno.',
    salario_base: Decimal128('1500000.00')
  }
]


// db.TiposPersonal.find({ nombre: /^P/ })

[
  {
    _id: ObjectId('6887e1600be2cd6239fe6932'),
    codigo: '004',
    nombre: 'Personal Administrativo',
    descripcion: 'Gestiona recursos, coordina citas, maneja la documentación, la facturación y la logística hospitalaria.',
    salario_base: Decimal128('2200000.00')
  },
  {
    _id: ObjectId('6887e1600be2cd6239fe6933'),
    codigo: '005',
    nombre: 'Personal de Mantenimiento',
    descripcion: 'Realiza el mantenimiento preventivo y correctivo de las instalaciones, equipos y asegura la limpieza y salubridad del entorno.',
    salario_base: Decimal128('1500000.00')
  }
]


// Buscar usando `$or` entre dos roles
db.TiposPersonal.find({
   $or: [
       { nombre: "Director General" },
       { nombre: "Enfermero/a" }
     ]
   })
  [
    {
      _id: ObjectId('6887e1600be2cd6239fe692f'),
      codigo: '001',
      nombre: 'Director General',
      descripcion: 'Gestión general, estratégica y operativa del hospital. Responsable de la dirección y el cumplimiento de objetivos institucionales.',
      salario_base: Decimal128('15000000.00')
    },
    {
      _id: ObjectId('6887e1600be2cd6239fe6931'),
      codigo: '003',
      nombre: 'Enfermero/a',
      descripcion: 'Asiste a médicos, administra medicamentos, cuida y monitorea a los pacientes, y educa sobre prácticas de salud.',
      salario_base: Decimal128('3500000.00')
    }
  ]
  
// Salario base de 8000000 

db.TiposPersonal.find({ salario_base: 8000000 })
[
  {
    _id: ObjectId('6887e1600be2cd6239fe6930'),
    codigo: '002',
    nombre: 'Médico Especialista',
    descripcion: 'Atiende pacientes, realiza diagnósticos, prescribe tratamientos y lleva a cabo procedimientos en su área de especialización.',
    salario_base: Decimal128('8000000.00')
  }
]

// 19. Mostrar cargos cuyo nombre contenga la palabra "General"

db.TiposPersonal.aggregate([
  { $match: { nombre: /General/i } },
  { $project: { nombre: 1, salario_base: 1 } }
])

[
  {
    _id: ObjectId('6887e1600be2cd6239fe692f'),
    nombre: 'Director General',
    salario_base: Decimal128('15000000.00')
  }
]

// Clasificacion de categoria por salario base

db.TiposPersonal.aggregate([
     {
       $addFields: {
         categoria_salario: {
           $switch: {
             branches: [
               { case: { $gte: ["$salario_base", 10000000] }, then: "Alto" },
               { case: { $gte: ["$salario_base", 5000000] }, then: "Medio" }
             ],
             default: "Bajo"
           }
         }
       }
     },
     { $project: { nombre: 1, salario_base: 1, categoria_salario: 1 } }
   ])
  [
    {
      _id: ObjectId('6887e1600be2cd6239fe692f'),
      nombre: 'Director General',
      salario_base: Decimal128('15000000.00'),
      categoria_salario: 'Alto'
    },
    {
      _id: ObjectId('6887e1600be2cd6239fe6930'),
      nombre: 'Médico Especialista',
      salario_base: Decimal128('8000000.00'),
      categoria_salario: 'Medio'
    },
    {
      _id: ObjectId('6887e1600be2cd6239fe6931'),
      nombre: 'Enfermero/a',
      salario_base: Decimal128('3500000.00'),
      categoria_salario: 'Bajo'
    },
    {
      _id: ObjectId('6887e1600be2cd6239fe6932'),
      nombre: 'Personal Administrativo',
      salario_base: Decimal128('2200000.00'),
      categoria_salario: 'Bajo'
    },
    {
      _id: ObjectId('6887e1600be2cd6239fe6933'),
      nombre: 'Personal de Mantenimiento',
      salario_base: Decimal128('1500000.00'),
      categoria_salario: 'Bajo'
    }
  ]
  

//  Buscar enfermedades con clasificación que contenga "Inflamatoria" (regex)
db.Enfermedades.find({
  clasificacion: /Inflamatoria/i
})

[
  {
    _id: ObjectId('6888c06bc8a16e0939fe69e5'),
    nombre: 'Bronquitis Aguda',
    tipo: 'Respiratoria',
    clasificacion: 'Inflamatoria',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe696c')
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69e9'),
    nombre: 'Gastritis',
    tipo: 'Digestiva',
    clasificacion: 'Inflamatoria',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6970')
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69f4'),
    nombre: 'Sinusitis',
    tipo: 'Respiratoria',
    clasificacion: 'Inflamatoria',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe697b')
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69fa'),
    nombre: 'Gota',
    tipo: 'Metabólica',
    clasificacion: 'Inflamatoria',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6981')
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe6a02'),
    nombre: 'Colitis Ulcerosa',
    tipo: 'Digestiva',
    clasificacion: 'Inflamatoria',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6989')
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe6a12'),
    nombre: 'Úlcera Péptica',
    tipo: 'Digestiva',
    clasificacion: 'Inflamatoria',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe696a')
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe6a14'),
    nombre: 'Apendicitis',
    tipo: 'Digestiva',
    clasificacion: 'Inflamatoria aguda',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe696c')
  }
]


// Tratamientos por especialidad 60************************
db.HistoriaClinica.aggregate([
  { $group: { _id: "$especialidad", total: { $sum: 1 } } }
])

[ { _id: null, total: 380 } ]


// Proyeccion de enfermedades

db.Enfermedades.find({}, { nombre: 1, clasificacion: 1, _id: 0 })
[
  { nombre: 'Gripe Común', clasificacion: 'Viral' },
  { nombre: 'Migraña', clasificacion: 'Crónica' },
  { nombre: 'Bronquitis Aguda', clasificacion: 'Inflamatoria' },
  { nombre: 'Diabetes Tipo 2', clasificacion: 'Crónica' },
  { nombre: 'Dermatitis Atópica', clasificacion: 'Autoinmune' },
  { nombre: 'Hipertensión', clasificacion: 'Crónica' },
  { nombre: 'Gastritis', clasificacion: 'Inflamatoria' },
  { nombre: 'Artritis Reumatoide', clasificacion: 'Crónica' },
  { nombre: 'Conjuntivitis', clasificacion: 'Infecciosa' },
  { nombre: 'Anemia Ferropénica', clasificacion: 'Deficiencia' },
  { nombre: 'Asma', clasificacion: 'Crónica' },
  { nombre: 'Tiña', clasificacion: 'Fúngica' },
  { nombre: 'Cálculos Renales', clasificacion: 'Metabólica' },
  { nombre: 'Depresión', clasificacion: 'Trastorno del ánimo' },
  { nombre: 'Hepatitis A', clasificacion: 'Viral' },
  { nombre: 'Osteoporosis', clasificacion: 'Degenerativa' },
  { nombre: 'Reflujo Gastroesofágico', clasificacion: 'Funcional' },
  { nombre: 'Sinusitis', clasificacion: 'Inflamatoria' },
  { nombre: 'Varicela', clasificacion: 'Viral' },
  { nombre: 'Cáncer de Piel', clasificacion: 'Neoplasia' }
]


//  Enfermedades del tipo "Cutánea" con clasificación "Autoinmune"
db.Enfermedades.find({ 
     tipo: "Cutánea",
     clasificacion: "Autoinmune"
   })
  [
    {
      _id: ObjectId('6888c06bc8a16e0939fe69e7'),
      nombre: 'Dermatitis Atópica',
      tipo: 'Cutánea',
      clasificacion: 'Autoinmune',
      id_sintoma: ObjectId('6887e4cc0be2cd6239fe696e')
    },
    {
      _id: ObjectId('6888c06bc8a16e0939fe6a0c'),
      nombre: 'Psoriasis',
      tipo: 'Cutánea',
      clasificacion: 'Autoinmune',
      id_sintoma: ObjectId('6887e4cc0be2cd6239fe6993')
    }
  ]
  


//  Buscar enfermedades de tipo "Neurológica" o clasificación "Viral"
db.Enfermedades.find({
  $or: [
    { tipo: "Neurológica" },
    { clasificacion: "Viral" }
  ]
})

[
  {
    _id: ObjectId('6888c06bc8a16e0939fe69e3'),
    nombre: 'Gripe Común',
    tipo: 'Infecciosa',
    clasificacion: 'Viral',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe696a')
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69e4'),
    nombre: 'Migraña',
    tipo: 'Neurológica',
    clasificacion: 'Crónica',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe696b')
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69f1'),
    nombre: 'Hepatitis A',
    tipo: 'Infecciosa',
    clasificacion: 'Viral',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6978')
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69f5'),
    nombre: 'Varicela',
    tipo: 'Infecciosa',
    clasificacion: 'Viral',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe697c')
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69f7'),
    nombre: 'Resfriado Común',
    tipo: 'Infecciosa',
    clasificacion: 'Viral',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe697e')
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69ff'),
    nombre: 'Neuralgia del Trigémino',
    tipo: 'Neurológica',
    clasificacion: 'Dolor crónico',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6986')
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe6a01'),
    nombre: 'Herpes Labial',
    tipo: 'Infecciosa',
    clasificacion: 'Viral',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6988')
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe6a03'),
    nombre: 'Esclerosis Múltiple',
    tipo: 'Neurológica',
    clasificacion: 'Autoinmune',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe698a')
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe6a06'),
    nombre: 'Mononucleosis',
    tipo: 'Infecciosa',
    clasificacion: 'Viral',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe698d')
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe6a0d'),
    nombre: 'Síndrome de Fatiga Crónica',
    tipo: 'Neurológica',
    clasificacion: 'Crónica',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6994')
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe6a0f'),
    nombre: 'VIH/SIDA',
    tipo: 'Infecciosa',
    clasificacion: 'Viral',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6996')
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe6a11'),
    nombre: 'Parkinson',
    tipo: 'Neurológica',
    clasificacion: 'Neurodegenerativa',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6998')
  }
]


//  Enfermedades con tipo distinto a "Infecciosa" y clasificación "Crónica"
db.Enfermedades.find({
  tipo: { $ne: "Infecciosa" },
  clasificacion: "Crónica"
})

[
  {
    _id: ObjectId('6888c06bc8a16e0939fe69e4'),
    nombre: 'Migraña',
    tipo: 'Neurológica',
    clasificacion: 'Crónica',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe696b')
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69e6'),
    nombre: 'Diabetes Tipo 2',
    tipo: 'Metabólica',
    clasificacion: 'Crónica',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe696d')
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69e8'),
    nombre: 'Hipertensión',
    tipo: 'Cardiovascular',
    clasificacion: 'Crónica',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe696f')
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69ea'),
    nombre: 'Artritis Reumatoide',
    tipo: 'Autoinmune',
    clasificacion: 'Crónica',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6971')
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69ed'),
    nombre: 'Asma',
    tipo: 'Respiratoria',
    clasificacion: 'Crónica',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6974')
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe6a00'),
    nombre: 'Endometriosis',
    tipo: 'Ginecológica',
    clasificacion: 'Crónica',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6987')
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe6a09'),
    nombre: 'Glaucoma',
    tipo: 'Ocular',
    clasificacion: 'Crónica',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6990')
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe6a0d'),
    nombre: 'Síndrome de Fatiga Crónica',
    tipo: 'Neurológica',
    clasificacion: 'Crónica',
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6994')
  }
]


//  Relacionar enfermedades con sus síntomas
db.Enfermedades.aggregate([
  {
    $lookup: {
      from: "Sintomas",
      localField: "id_sintoma",
      foreignField: "_id",
      as: "sintoma"
    }
  },
  { $unwind: "$sintoma" },
  {
    $project: {
      nombre: 1,
      tipo: 1,
      clasificacion: 1,
      "sintoma.nombre": 1
    }
  }
])

[
  {
    _id: ObjectId('6888c06bc8a16e0939fe69e3'),
    nombre: 'Gripe Común',
    tipo: 'Infecciosa',
    clasificacion: 'Viral',
    sintoma: {}
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69e4'),
    nombre: 'Migraña',
    tipo: 'Neurológica',
    clasificacion: 'Crónica',
    sintoma: {}
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69e5'),
    nombre: 'Bronquitis Aguda',
    tipo: 'Respiratoria',
    clasificacion: 'Inflamatoria',
    sintoma: {}
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69e6'),
    nombre: 'Diabetes Tipo 2',
    tipo: 'Metabólica',
    clasificacion: 'Crónica',
    sintoma: {}
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69e7'),
    nombre: 'Dermatitis Atópica',
    tipo: 'Cutánea',
    clasificacion: 'Autoinmune',
    sintoma: {}
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69e8'),
    nombre: 'Hipertensión',
    tipo: 'Cardiovascular',
    clasificacion: 'Crónica',
    sintoma: {}
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69e9'),
    nombre: 'Gastritis',
    tipo: 'Digestiva',
    clasificacion: 'Inflamatoria',
    sintoma: {}
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69ea'),
    nombre: 'Artritis Reumatoide',
    tipo: 'Autoinmune',
    clasificacion: 'Crónica',
    sintoma: {}
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69eb'),
    nombre: 'Conjuntivitis',
    tipo: 'Ocular',
    clasificacion: 'Infecciosa',
    sintoma: {}
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69ec'),
    nombre: 'Anemia Ferropénica',
    tipo: 'Sanguínea',
    clasificacion: 'Deficiencia',
    sintoma: {}
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69ed'),
    nombre: 'Asma',
    tipo: 'Respiratoria',
    clasificacion: 'Crónica',
    sintoma: {}
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69ee'),
    nombre: 'Tiña',
    tipo: 'Cutánea',
    clasificacion: 'Fúngica',
    sintoma: {}
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69ef'),
    nombre: 'Cálculos Renales',
    tipo: 'Urológica',
    clasificacion: 'Metabólica',
    sintoma: {}
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69f0'),
    nombre: 'Depresión',
    tipo: 'Mental',
    clasificacion: 'Trastorno del ánimo',
    sintoma: {}
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69f1'),
    nombre: 'Hepatitis A',
    tipo: 'Infecciosa',
    clasificacion: 'Viral',
    sintoma: {}
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69f2'),
    nombre: 'Osteoporosis',
    tipo: 'Ósea',
    clasificacion: 'Degenerativa',
    sintoma: {}
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69f3'),
    nombre: 'Reflujo Gastroesofágico',
    tipo: 'Digestiva',
    clasificacion: 'Funcional',
    sintoma: {}
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69f4'),
    nombre: 'Sinusitis',
    tipo: 'Respiratoria',
    clasificacion: 'Inflamatoria',
    sintoma: {}
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69f5'),
    nombre: 'Varicela',
    tipo: 'Infecciosa',
    clasificacion: 'Viral',
    sintoma: {}
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69f6'),
    nombre: 'Cáncer de Piel',
    tipo: 'Oncológica',
    clasificacion: 'Neoplasia',
    sintoma: {}
  }
]


// Clasificar enfermedades por severidad simulada (ficticia)
db.Enfermedades.aggregate([
  {
    $addFields: {
      nivel: {
        $switch: {
          branches: [
            { case: { $eq: ["$clasificacion", "Viral"] }, then: "Leve" },
            { case: { $eq: ["$clasificacion", "Crónica"] }, then: "Moderada" },
            { case: { $eq: ["$clasificacion", "Autoinmune"] }, then: "Severa" }
          ],
          default: "Indefinido"
        }
      }
    }
  },
  { $project: { nombre: 1, clasificacion: 1, nivel: 1 } }
])

[
  {
    _id: ObjectId('6888c06bc8a16e0939fe69e3'),
    nombre: 'Gripe Común',
    clasificacion: 'Viral',
    nivel: 'Leve'
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69e4'),
    nombre: 'Migraña',
    clasificacion: 'Crónica',
    nivel: 'Moderada'
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69e5'),
    nombre: 'Bronquitis Aguda',
    clasificacion: 'Inflamatoria',
    nivel: 'Indefinido'
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69e6'),
    nombre: 'Diabetes Tipo 2',
    clasificacion: 'Crónica',
    nivel: 'Moderada'
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69e7'),
    nombre: 'Dermatitis Atópica',
    clasificacion: 'Autoinmune',
    nivel: 'Severa'
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69e8'),
    nombre: 'Hipertensión',
    clasificacion: 'Crónica',
    nivel: 'Moderada'
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69e9'),
    nombre: 'Gastritis',
    clasificacion: 'Inflamatoria',
    nivel: 'Indefinido'
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69ea'),
    nombre: 'Artritis Reumatoide',
    clasificacion: 'Crónica',
    nivel: 'Moderada'
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69eb'),
    nombre: 'Conjuntivitis',
    clasificacion: 'Infecciosa',
    nivel: 'Indefinido'
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69ec'),
    nombre: 'Anemia Ferropénica',
    clasificacion: 'Deficiencia',
    nivel: 'Indefinido'
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69ed'),
    nombre: 'Asma',
    clasificacion: 'Crónica',
    nivel: 'Moderada'
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69ee'),
    nombre: 'Tiña',
    clasificacion: 'Fúngica',
    nivel: 'Indefinido'
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69ef'),
    nombre: 'Cálculos Renales',
    clasificacion: 'Metabólica',
    nivel: 'Indefinido'
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69f0'),
    nombre: 'Depresión',
    clasificacion: 'Trastorno del ánimo',
    nivel: 'Indefinido'
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69f1'),
    nombre: 'Hepatitis A',
    clasificacion: 'Viral',
    nivel: 'Leve'
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69f2'),
    nombre: 'Osteoporosis',
    clasificacion: 'Degenerativa',
    nivel: 'Indefinido'
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69f3'),
    nombre: 'Reflujo Gastroesofágico',
    clasificacion: 'Funcional',
    nivel: 'Indefinido'
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69f4'),
    nombre: 'Sinusitis',
    clasificacion: 'Inflamatoria',
    nivel: 'Indefinido'
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69f5'),
    nombre: 'Varicela',
    clasificacion: 'Viral',
    nivel: 'Leve'
  },
  {
    _id: ObjectId('6888c06bc8a16e0939fe69f6'),
    nombre: 'Cáncer de Piel',
    clasificacion: 'Neoplasia',
    nivel: 'Indefinido'
  }
]


// Enfermedades con clasificación que contenga la letra "o" agrupadas por tipo
db.Enfermedades.aggregate([
  {
    $match: { clasificacion: /o/i }
  },
  {
    $group: {
      _id: "$tipo",
      total: { $sum: 1 },
      enfermedades: { $push: "$nombre" }
    }
  }
])

[
  {
    _id: 'Otorrinolaringológica',
    total: 1,
    enfermedades: [ 'Otitis Media' ]
  },
  {
    _id: 'Digestiva',
    total: 7,
    enfermedades: [
      'Gastritis',
      'Reflujo Gastroesofágico',
      'Colitis Ulcerosa',
      'Síndrome de Colon Irritable',
      'Enfermedad de Crohn',
      'Úlcera Péptica',
      'Apendicitis'
    ]
  },
  {
    _id: 'Cutánea',
    total: 2,
    enfermedades: [ 'Dermatitis Atópica', 'Psoriasis' ]
  },
  { _id: 'Endocrina', total: 1, enfermedades: [ 'Hipotiroidismo' ] },
  { _id: 'Urológica', total: 1, enfermedades: [ 'Cistitis' ] },
  {
    _id: 'Neurológica',
    total: 3,
    enfermedades: [ 'Neuralgia del Trigémino', 'Esclerosis Múltiple', 'Parkinson' ]
  },
  { _id: 'Ocular', total: 1, enfermedades: [ 'Conjuntivitis' ] },
  {
    _id: 'Mental',
    total: 2,
    enfermedades: [ 'Depresión', 'Anorexia Nerviosa' ]
  },
  {
    _id: 'Musculoesquelética',
    total: 2,
    enfermedades: [ 'Dolor de Espalda Crónico', 'Fibromialgia' ]
  },
  {
    _id: 'Respiratoria',
    total: 2,
    enfermedades: [ 'Bronquitis Aguda', 'Sinusitis' ]
  },
  { _id: 'Oncológica', total: 1, enfermedades: [ 'Cáncer de Piel' ] },
  { _id: 'Metabólica', total: 1, enfermedades: [ 'Gota' ] }
]


//  Filtrar por estado "Activo"
db.Mantenimiento.find({ estado: "Activo" })

[
  {
    _id: 'mantPers001',
    nombre: 'Carlos Alberto Ríos López',
    correo: 'carlos.rios@hus.com',
    telefono: '3001234567',
    id_servicio_asignado: 'servm001',
    id_hospital: 'hos001',
    fecha_ingreso: ISODate('2020-03-10T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor006',
    id_tipo_personal: 'tipop005'
  },
  {
    _id: 'mantPers002',
    nombre: 'Ana María Patiño Morales',
    correo: 'ana.patino@hus.com',
    telefono: '3102345678',
    id_servicio_asignado: 'servm002',
    id_hospital: 'hos001',
    fecha_ingreso: ISODate('2021-06-20T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor006',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'mantPers003',
    nombre: 'Jorge Esteban Castro Restrepo',
    correo: 'jorge.castro@hus.com',
    telefono: '3203456789',
    id_servicio_asignado: 'servm005',
    id_hospital: 'hos001',
    fecha_ingreso: ISODate('2019-11-01T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor008',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'mantPers004',
    nombre: 'Laura Sofía Vargas Díaz',
    correo: 'laura.vargas@hus.com',
    telefono: '3154567890',
    id_servicio_asignado: 'servm004',
    id_hospital: 'hos001',
    fecha_ingreso: ISODate('2022-01-15T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor006',
    id_tipo_personal: 'tipop005'
  },
  {
    _id: 'mantPers005',
    nombre: 'Andrés Felipe Quintero López',
    correo: 'andres.quintero@hus.com',
    telefono: '3015678901',
    id_servicio_asignado: 'servm006',
    id_hospital: 'hos001',
    fecha_ingreso: ISODate('2023-04-01T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor006',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'mantPers006',
    nombre: 'María Paula Durán Mesa',
    correo: 'maria.duran@comuneros.com',
    telefono: '3106789012',
    id_servicio_asignado: 'servm001',
    id_hospital: 'hos002',
    fecha_ingreso: ISODate('2018-08-22T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor006',
    id_tipo_personal: 'tipop005'
  },
  {
    _id: 'mantPers007',
    nombre: 'Fabio Andrés Ortiz Pardo',
    correo: 'fabio.ortiz@comuneros.com',
    telefono: '3007890123',
    id_servicio_asignado: 'servm002',
    id_hospital: 'hos002',
    fecha_ingreso: ISODate('2020-01-05T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor006',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'mantPers008',
    nombre: 'Sofía Valentina Bernal Sánchez',
    correo: 'sofia.bernal@comuneros.com',
    telefono: '3208901234',
    id_servicio_asignado: 'servm005',
    id_hospital: 'hos002',
    fecha_ingreso: ISODate('2022-09-10T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor008',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'mantPers009',
    nombre: 'Julián David Sierra Rojas',
    correo: 'julian.sierra@comuneros.com',
    telefono: '3159012345',
    id_servicio_asignado: 'servm004',
    id_hospital: 'hos002',
    fecha_ingreso: ISODate('2021-03-01T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor006',
    id_tipo_personal: 'tipop005'
  },
  {
    _id: 'mantPers010',
    nombre: 'Andrea Carolina Vélez Díaz',
    correo: 'andrea.velez@comuneros.com',
    telefono: '3010123456',
    id_servicio_asignado: 'servm006',
    id_hospital: 'hos002',
    fecha_ingreso: ISODate('2023-07-18T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor006',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'mantPers011',
    nombre: 'Roberto Carlos Gómez Pérez',
    correo: 'roberto.gomez@sanluis.com',
    telefono: '3101234567',
    id_servicio_asignado: 'servm001',
    id_hospital: 'hos003',
    fecha_ingreso: ISODate('2017-02-05T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor006',
    id_tipo_personal: 'tipop005'
  },
  {
    _id: 'mantPers012',
    nombre: 'Diana Marcela Londoño Rincón',
    correo: 'diana.londono@sanluis.com',
    telefono: '3002345678',
    id_servicio_asignado: 'servm002',
    id_hospital: 'hos003',
    fecha_ingreso: ISODate('2019-09-12T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor006',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'mantPers013',
    nombre: 'Miguel Ángel Herrera Soto',
    correo: 'miguel.herrera@sanluis.com',
    telefono: '3203456789',
    id_servicio_asignado: 'servm005',
    id_hospital: 'hos003',
    fecha_ingreso: ISODate('2020-05-30T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor008',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'mantPers014',
    nombre: 'Valeria Alejandra Restrepo Quintero',
    correo: 'valeria.restrepo@sanluis.com',
    telefono: '3154567890',
    id_servicio_asignado: 'servm004',
    id_hospital: 'hos003',
    fecha_ingreso: ISODate('2022-11-08T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor006',
    id_tipo_personal: 'tipop005'
  },
  {
    _id: 'mantPers015',
    nombre: 'Juan Pablo Duque Morales',
    correo: 'juan.duque@sanluis.com',
    telefono: '3015678901',
    id_servicio_asignado: 'servm006',
    id_hospital: 'hos003',
    fecha_ingreso: ISODate('2023-02-25T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor006',
    id_tipo_personal: 'tipop004'
  }
]

// Buscar por correo electrónico
db.Mantenimiento.find({ correo: "carlos.rios@hus.com" })

[
  {
    _id: 'mantPers001',
    nombre: 'Carlos Alberto Ríos López',
    correo: 'carlos.rios@hus.com',
    telefono: '3001234567',
    id_servicio_asignado: 'servm001',
    id_hospital: 'hos001',
    fecha_ingreso: ISODate('2020-03-10T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor006',
    id_tipo_personal: 'tipop005'
  }
]


//  Servicios 5 de mantenimiento   70********************************
db.Mantenimiento.find({ id_servicio_asignado: "servm005" })

[
  {
    _id: 'mantPers003',
    nombre: 'Jorge Esteban Castro Restrepo',
    correo: 'jorge.castro@hus.com',
    telefono: '3203456789',
    id_servicio_asignado: 'servm005',
    id_hospital: 'hos001',
    fecha_ingreso: ISODate('2019-11-01T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor008',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'mantPers008',
    nombre: 'Sofía Valentina Bernal Sánchez',
    correo: 'sofia.bernal@comuneros.com',
    telefono: '3208901234',
    id_servicio_asignado: 'servm005',
    id_hospital: 'hos002',
    fecha_ingreso: ISODate('2022-09-10T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor008',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'mantPers013',
    nombre: 'Miguel Ángel Herrera Soto',
    correo: 'miguel.herrera@sanluis.com',
    telefono: '3203456789',
    id_servicio_asignado: 'servm005',
    id_hospital: 'hos003',
    fecha_ingreso: ISODate('2020-05-30T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor008',
    id_tipo_personal: 'tipop004'
  }
]


//  Personal por área
db.Administrativos.aggregate([
  { $group: { _id: "$area", total: { $sum: 1 } } }
])

[ { _id: null, total: 21 } ]


//  Personal por rol
db.Administrativos.aggregate([
  { $group: { _id: "$rol", total: { $sum: 1 } } }
])

[
  { _id: 'Jefe de Sistemas e Informática', total: 1 },
  { _id: 'Coordinador de Talento Humano', total: 1 },
  { _id: 'Coordinador de Estadística', total: 1 },
  { _id: 'Asistente de Dirección General', total: 1 },
  { _id: 'Jefe de Desarrollo de Servicios', total: 1 },
  { _id: 'Subgerente Administrativa', total: 1 },
  { _id: 'Asistente de Compras', total: 1 },
  { _id: 'Coordinadora de Mercadeo y Publicaciones', total: 1 },
  { _id: 'Coordinador Financiero', total: 1 },
  { _id: 'Jefe de Oficina Jurídica', total: 1 },
  { _id: 'Coordinador de Bienestar Social', total: 1 },
  { _id: 'Secretario de Recepción Principal', total: 1 },
  { _id: 'Coordinadora de Atención al Usuario', total: 1 },
  { _id: 'Jefe de Educación Médica', total: 1 },
  { _id: 'Jefe de Tesorería y Caja', total: 1 },
  { _id: 'Coordinadora de Control Interno', total: 1 },
  { _id: 'Jefe de Archivo General y Historias Clínicas', total: 1 },
  { _id: 'Subgerente de Servicios de Salud', total: 1 },
  { _id: 'Jefe de Facturación y Cartera', total: 1 },
  { _id: 'Jefe de Auditoría Médica', total: 1 }
]


// Enfermeros por turno
db.Horario.find({ horario_tipo: /Tarde|Noche|Mañana/ })

[
  {
    _id: ObjectId('6887deba0be2cd6239fe691d'),
    horario_tipo: 'Visitas - Mañana',
    dias: 'Todos los días'
  },
  {
    _id: ObjectId('6887deba0be2cd6239fe691e'),
    horario_tipo: 'Visitas - Tarde/Noche',
    dias: 'Todos los días'
  },
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


// Personal con jornada rotativa
db.Horario.find({ horario_tipo: /Rotativo/ })

[
  {
    _id: ObjectId('6887deba0be2cd6239fe6922'),
    horario_tipo: 'Rotativo - Personal',
    dias: 'Todos los días'
  }
]

// Personal nocturno
db.Horario.find({ horario_tipo: /Nocturno/ })

[
  {
    _id: ObjectId('6887deba0be2cd6239fe6923'),
    horario_tipo: 'Nocturno - Personal',
    dias: 'Todos los días'
  }
]


// Médicos que trabajan fines de semana
db.Horario.find({ dias: /Sábado|Domingo/ })

[
  {
    _id: ObjectId('6887deba0be2cd6239fe691f'),
    horario_tipo: 'Laboratorio Clínico - Mañana',
    dias: 'Lunes a Sábado'
  },
  {
    _id: ObjectId('6887deba0be2cd6239fe6924'),
    horario_tipo: 'Fin de Semana - Personal',
    dias: 'Sábado y Domingo'
  }
]


// Personal con asignación múltiple
db.AreaEspecializacion.aggregate([
  { $group: { _id: "$id_personal", total: { $sum: 1 } } },
  { $match: { total: { $gt: 1 } } }
])

[ { _id: null, total: 30 } ]


//  Personal con cargo de jefatura
db.Administrativos.find({ rol: /Jefe|Coordinador/ })

[
  {
    _id: 'adm004',
    nombre: 'Juan Pablo Sánchez Duque',
    telefono: '3154443322',
    correo: 'juan.sanchez@hospital.com',
    rol: 'Coordinador de Talento Humano',
    horario: 'hor007',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'adm005',
    nombre: 'María Fernanda López Rojas',
    telefono: '3017778899',
    correo: 'maria.lopez@hospital.com',
    rol: 'Jefe de Facturación y Cartera',
    horario: 'hor007',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'adm006',
    nombre: 'Andrés Felipe Martínez Giraldo',
    telefono: '3182223344',
    correo: 'andres.martinez@hospital.com',
    rol: 'Jefe de Sistemas e Informática',
    horario: 'hor007',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'adm007',
    nombre: 'Sofía Valentina Díaz Morales',
    telefono: '3049990011',
    correo: 'sofia.diaz@hospital.com',
    rol: 'Coordinadora de Atención al Usuario',
    horario: 'hor007',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'adm008',
    nombre: 'Ricardo José Herrera Ospina',
    telefono: '3176667788',
    correo: 'ricardo.herrera@hospital.com',
    rol: 'Jefe de Archivo General y Historias Clínicas',
    horario: 'hor007',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'adm010',
    nombre: 'Daniel Esteban Castillo Vega',
    telefono: '3135556677',
    correo: 'daniel.castillo@hospital.com',
    rol: 'Coordinador de Estadística',
    horario: 'hor007',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'adm012',
    nombre: 'Fabián Eduardo Gómez Rojas',
    telefono: '3161112233',
    correo: 'fabian.gomez@hospital.com',
    rol: 'Jefe de Oficina Jurídica',
    horario: 'hor007',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'adm013',
    nombre: 'Camila Victoria Salazar Mesa',
    telefono: '3015556677',
    correo: 'camila.salazar@hospital.com',
    rol: 'Coordinadora de Control Interno',
    horario: 'hor007',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'adm014',
    nombre: 'Alejandro José Buitrago Pérez',
    telefono: '3178889900',
    correo: 'alejandro.buitrago@hospital.com',
    rol: 'Jefe de Desarrollo de Servicios',
    horario: 'hor007',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'adm015',
    nombre: 'Paola Andrea Cifuentes Ruiz',
    telefono: '3042223344',
    correo: 'paola.cifuentes@hospital.com',
    rol: 'Coordinadora de Mercadeo y Publicaciones',
    horario: 'hor007',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'adm016',
    nombre: 'Diego Fernando Vargas León',
    telefono: '3189990011',
    correo: 'diego.vargas@hospital.com',
    rol: 'Jefe de Auditoría Médica',
    horario: 'hor007',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'adm018',
    nombre: 'Óscar David Pinzón Mesa',
    telefono: '3151234567',
    correo: 'oscar.pinzon@hospital.com',
    rol: 'Jefe de Educación Médica',
    horario: 'hor007',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'adm020',
    nombre: 'Mauricio Andrés Rojas Pérez',
    telefono: '3162345678',
    correo: 'mauricio.rojas@hospital.com',
    rol: 'Coordinador Financiero',
    horario: 'hor007',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'adm021',
    nombre: 'Viviana Isabel Suárez Gómez',
    telefono: '3008765432',
    correo: 'viviana.suarez@hospital.com',
    rol: 'Jefe de Tesorería y Caja',
    horario: 'hor007',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'adm022',
    nombre: 'Luis Fernando Quintero Díaz',
    telefono: '3173456789',
    correo: 'luis.quintero@hospital.com',
    rol: 'Coordinador de Bienestar Social',
    horario: 'hor007',
    id_tipo_personal: 'tipop004'
  }
]


// 69. Enfermedades más comunes
db.Enfermedades.aggregate([
  { $group: { _id: "$nombre", total: { $sum: 1 } } }
])

[
  { _id: 'Depresión', total: 1 },
  { _id: 'Gripe Común', total: 1 },
  { _id: 'Varicela', total: 1 },
  { _id: 'Alergia Estacional', total: 1 },
  { _id: 'Conjuntivitis Alérgica', total: 1 },
  { _id: 'Anorexia Nerviosa', total: 1 },
  { _id: 'Cálculos Renales', total: 1 },
  { _id: 'Cataratas', total: 1 },
  { _id: 'Otitis Media', total: 1 },
  { _id: 'Fibromialgia', total: 1 },
  { _id: 'Psoriasis', total: 1 },
  { _id: 'Asma', total: 1 },
  { _id: 'Migraña', total: 1 },
  { _id: 'Cistitis', total: 1 },
  { _id: 'Tiña', total: 1 },
  { _id: 'Bronquitis Aguda', total: 1 },
  { _id: 'Resfriado Común', total: 1 },
  { _id: 'Mononucleosis', total: 1 },
  { _id: 'Gastritis', total: 1 },
  { _id: 'Sinusitis', total: 1 }
]


//  Visitas por especialidad 80*******************************************
db.VisitasMedicas.aggregate([
  { $group: { _id: "$especialidad", total: { $sum: 1 } } }
])

[ { _id: null, total: 127 } ]


// Personal ingresado entre 2019 y 2021
db.Mantenimiento.find({
  fecha_ingreso: {
    $gte: ISODate("2019-01-01T00:00:00Z"),
    $lte: ISODate("2021-12-31T23:59:59Z")
  }
})

[
  {
    _id: 'mantPers001',
    nombre: 'Carlos Alberto Ríos López',
    correo: 'carlos.rios@hus.com',
    telefono: '3001234567',
    id_servicio_asignado: 'servm001',
    id_hospital: 'hos001',
    fecha_ingreso: ISODate('2020-03-10T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor006',
    id_tipo_personal: 'tipop005'
  },
  {
    _id: 'mantPers002',
    nombre: 'Ana María Patiño Morales',
    correo: 'ana.patino@hus.com',
    telefono: '3102345678',
    id_servicio_asignado: 'servm002',
    id_hospital: 'hos001',
    fecha_ingreso: ISODate('2021-06-20T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor006',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'mantPers003',
    nombre: 'Jorge Esteban Castro Restrepo',
    correo: 'jorge.castro@hus.com',
    telefono: '3203456789',
    id_servicio_asignado: 'servm005',
    id_hospital: 'hos001',
    fecha_ingreso: ISODate('2019-11-01T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor008',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'mantPers007',
    nombre: 'Fabio Andrés Ortiz Pardo',
    correo: 'fabio.ortiz@comuneros.com',
    telefono: '3007890123',
    id_servicio_asignado: 'servm002',
    id_hospital: 'hos002',
    fecha_ingreso: ISODate('2020-01-05T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor006',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'mantPers009',
    nombre: 'Julián David Sierra Rojas',
    correo: 'julian.sierra@comuneros.com',
    telefono: '3159012345',
    id_servicio_asignado: 'servm004',
    id_hospital: 'hos002',
    fecha_ingreso: ISODate('2021-03-01T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor006',
    id_tipo_personal: 'tipop005'
  },
  {
    _id: 'mantPers012',
    nombre: 'Diana Marcela Londoño Rincón',
    correo: 'diana.londono@sanluis.com',
    telefono: '3002345678',
    id_servicio_asignado: 'servm002',
    id_hospital: 'hos003',
    fecha_ingreso: ISODate('2019-09-12T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor006',
    id_tipo_personal: 'tipop004'
  },
  {
    _id: 'mantPers013',
    nombre: 'Miguel Ángel Herrera Soto',
    correo: 'miguel.herrera@sanluis.com',
    telefono: '3203456789',
    id_servicio_asignado: 'servm005',
    id_hospital: 'hos003',
    fecha_ingreso: ISODate('2020-05-30T00:00:00.000Z'),
    estado: 'Activo',
    id_horario: 'hor008',
    id_tipo_personal: 'tipop004'
  }
]

// Agrupar por hospital y obtener promedio de antigüedad

db.Mantenimiento.aggregate([
  {
    $group: {
      _id: "$id_hospital",
      fecha_mas_antigua: { $min: "$fecha_ingreso" },
      total: { $sum: 1 }
    }
  }
])

[
  {
    _id: 'hos001',
    fecha_mas_antigua: ISODate('2019-11-01T00:00:00.000Z'),
    total: 5
  },
  {
    _id: 'hos002',
    fecha_mas_antigua: ISODate('2018-08-22T00:00:00.000Z'),
    total: 5
  },
  {
    _id: 'hos003',
    fecha_mas_antigua: ISODate('2017-02-05T00:00:00.000Z'),
    total: 5
  }
]

// Obtener lista de correos electrónicos únicos
db.Mantenimiento.distinct("correo")

[
  'ana.patino@hus.com',
  'andrea.velez@comuneros.com',
  'andres.quintero@hus.com',
  'carlos.rios@hus.com',
  'diana.londono@sanluis.com',
  'fabio.ortiz@comuneros.com',
  'jorge.castro@hus.com',
  'juan.duque@sanluis.com',
  'julian.sierra@comuneros.com',
  'laura.vargas@hus.com',
  'maria.duran@comuneros.com',
  'miguel.herrera@sanluis.com',
  'roberto.gomez@sanluis.com',
  'sofia.bernal@comuneros.com',
  'valeria.restrepo@sanluis.com'
]

// // 4. Buscar beneficios que mencionen "presión"
db.Beneficios.find({
  descripcion: /mejora/i
})

[
  {
    _id: ObjectId('6888c1e6c8a16e0939fe6a29'),
    descripcion: 'Alivio significativo del dolor y mejora de la movilidad.',
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbc')
  },
  {
    _id: ObjectId('6888c1e6c8a16e0939fe6a2b'),
    descripcion: 'Mejora en la función respiratoria y menos episodios de asma.',
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbe')
  },
  {
    _id: ObjectId('6888c1e6c8a16e0939fe6a30'),
    descripcion: 'Mejora en la calidad del sueño y reducción de la fatiga.',
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc3')
  },
  {
    _id: ObjectId('6888c1e6c8a16e0939fe6a32'),
    descripcion: 'Aumento de los niveles de energía y mejora general del bienestar.',
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc5')
  },
  {
    _id: ObjectId('6888c1e6c8a16e0939fe6a35'),
    descripcion: 'Mejora del estado de ánimo y reducción de la ansiedad.',
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc8')
  },
  {
    _id: ObjectId('6888c1e6c8a16e0939fe6a36'),
    descripcion: 'Desintoxicación del organismo y mejora de la función hepática.',
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc9')
  },
  {
    _id: ObjectId('6888c1e6c8a16e0939fe6a38'),
    descripcion: 'Mejora de la digestión y regularidad intestinal.',
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bcb')
  },
  {
    _id: ObjectId('6888c1e6c8a16e0939fe6a3c'),
    descripcion: 'Mejora de la circulación sanguínea y reducción de hinchazón.',
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bcf')
  },
  {
    _id: ObjectId('6888c1e6c8a16e0939fe6a3f'),
    descripcion: 'Mejora de la postura y reducción de dolores crónicos.',
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbe')
  },
  {
    _id: ObjectId('6888c1e6c8a16e0939fe6a42'),
    descripcion: 'Mejora de la función cognitiva y memoria.',
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc1')
  },
  {
    _id: ObjectId('6888c1e6c8a16e0939fe6a46'),
    descripcion: 'Mejora de la audición y reducción de zumbidos.',
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc5')
  },
  {
    _id: ObjectId('6888c1e6c8a16e0939fe6a4b'),
    descripcion: 'Mejora del equilibrio y coordinación.',
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bca')
  },
  {
    _id: ObjectId('6888c1e6c8a16e0939fe6a4f'),
    descripcion: 'Regulación hormonal y mejora del bienestar general.',
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bce')
  },
  {
    _id: ObjectId('6888c1e6c8a16e0939fe6a50'),
    descripcion: 'Mejora de la función renal y desintoxicación.',
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bcf')
  },
  {
    _id: ObjectId('6888c1e6c8a16e0939fe6a52'),
    descripcion: 'Mejora del tránsito intestinal y alivio del estreñimiento.',
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbd')
  },
  {
    _id: ObjectId('6888c1e6c8a16e0939fe6a56'),
    descripcion: 'Alivio del dolor articular y mejora de la movilidad.',
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc1')
  },
  {
    _id: ObjectId('6888c1e6c8a16e0939fe6a57'),
    descripcion: 'Mejora en la cicatrización de heridas.',
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc2')
  }
]


// Contar cuántos beneficios están asociados a un tratamiento
db.Beneficios.countDocuments({
  id_tratamiento: ObjectId("6887ee060be2cd6239fe6bbd")
})
3

// // 11. Agrupar beneficios por tratamiento
db.Beneficios.aggregate([
  {
    $group: {
      _id: "$id_tratamiento",
      total_beneficios: { $sum: 1 },
      descripciones: { $push: "$descripcion" }
    }
  }
])

[
  {
    _id: ObjectId('6887ee060be2cd6239fe6bbc'),
    total_beneficios: 3,
    descripciones: [
      'Alivio significativo del dolor y mejora de la movilidad.',
      'Restauración de la vitalidad y energía general.',
      'Reducción de la tensión muscular y espasmos.'
    ]
  },
  {
    _id: ObjectId('6887ee060be2cd6239fe6bc5'),
    total_beneficios: 3,
    descripciones: [
      'Aumento de los niveles de energía y mejora general del bienestar.',
      'Mejora de la audición y reducción de zumbidos.',
      'Regulación del ciclo del sueño.'
    ]
  },
  {
    _id: ObjectId('6887ee060be2cd6239fe6bbe'),
    total_beneficios: 3,
    descripciones: [
      'Mejora en la función respiratoria y menos episodios de asma.',
      'Mejora de la postura y reducción de dolores crónicos.',
      'Piel hidratada y reducción de la sequedad.'
    ]
  },
  {
    _id: ObjectId('6887ee060be2cd6239fe6bc7'),
    total_beneficios: 2,
    descripciones: [
      'Crecimiento de cabello y uñas más saludables.',
      'Refuerzo del sistema cardiovascular.'
    ]
  },
  {
    _id: ObjectId('6887ee060be2cd6239fe6bc8'),
    total_beneficios: 2,
    descripciones: [
      'Mejora del estado de ánimo y reducción de la ansiedad.',
      'Disminución de la sensibilidad dental.'
    ]
  },
  {
    _id: ObjectId('6887ee060be2cd6239fe6bc4'),
    total_beneficios: 3,
    descripciones: [
      'Recuperación de la visión y prevención de futuros problemas oculares.',
      'Recuperación rápida de lesiones deportivas.',
      'Reducción del cansancio ocular.'
    ]
  },
  {
    _id: ObjectId('6887ee060be2cd6239fe6bcb'),
    total_beneficios: 2,
    descripciones: [
      'Mejora de la digestión y regularidad intestinal.',
      'Alivio de los síntomas del síndrome premenstrual.'
    ]
  },
  {
    _id: ObjectId('6887ee060be2cd6239fe6bcf'),
    total_beneficios: 2,
    descripciones: [
      'Mejora de la circulación sanguínea y reducción de hinchazón.',
      'Mejora de la función renal y desintoxicación.'
    ]
  },
  {
    _id: ObjectId('6887ee060be2cd6239fe6bc9'),
    total_beneficios: 2,
    descripciones: [
      'Desintoxicación del organismo y mejora de la función hepática.',
      'Reducción de la retención de líquidos.'
    ]
  },
  {
    _id: ObjectId('6887ee060be2cd6239fe6bbd'),
    total_beneficios: 3,
    descripciones: [
      'Reducción de la inflamación y recuperación más rápida.',
      'Eliminación de toxinas y purificación del cuerpo.',
      'Mejora del tránsito intestinal y alivio del estreñimiento.'
    ]
  },
  {
    _id: ObjectId('6887ee060be2cd6239fe6bc0'),
    total_beneficios: 3,
    descripciones: [
      'Piel más sana y reducción de brotes de dermatitis.',
      'Reducción del estrés y promoción de la calma.',
      'Fortalecimiento de los huesos y prevención de la osteoporosis.'
    ]
  },
  {
    _id: ObjectId('6887ee060be2cd6239fe6bc6'),
    total_beneficios: 2,
    descripciones: [
      'Fortalecimiento del sistema inmunológico y menor susceptibilidad a infecciones.',
      'Aumento de la flexibilidad y rango de movimiento.'
    ]
  },
  {
    _id: ObjectId('6887ee060be2cd6239fe6bc3'),
    total_beneficios: 3,
    descripciones: [
      'Mejora en la calidad del sueño y reducción de la fatiga.',
      'Piel más luminosa y reducción de imperfecciones.',
      'Refuerzo de la función pulmonar.'
    ]
  },
  {
    _id: ObjectId('6887ee060be2cd6239fe6bcd'),
    total_beneficios: 2,
    descripciones: [
      'Recuperación de la masa ósea y prevención de fracturas.',
      'Mayor resistencia física y menos fatiga muscular.'
    ]
  },
  {
    _id: ObjectId('6887ee060be2cd6239fe6bce'),
    total_beneficios: 2,
    descripciones: [
      'Ciclos menstruales más regulares y menos dolorosos.',
      'Regulación hormonal y mejora del bienestar general.'
    ]
  },
  {
    _id: ObjectId('6887ee060be2cd6239fe6bc1'),
    total_beneficios: 3,
    descripciones: [
      'Normalización de la presión arterial y menor riesgo cardiovascular.',
      'Mejora de la función cognitiva y memoria.',
      'Alivio del dolor articular y mejora de la movilidad.'
    ]
  },
  {
    _id: ObjectId('6887ee060be2cd6239fe6bbf'),
    total_beneficios: 3,
    descripciones: [
      'Control efectivo de los niveles de azúcar en sangre.',
      'Fortalecimiento de articulaciones y ligamentos.',
      'Reducción de la caída del cabello y fomento del crecimiento.'
    ]
  },
  {
    _id: ObjectId('6887ee060be2cd6239fe6bc2'),
    total_beneficios: 3,
    descripciones: [
      'Disminución de la acidez estomacal y alivio de la indigestión.',
      'Regulación del apetito y promoción de un peso saludable.',
      'Mejora en la cicatrización de heridas.'
    ]
  },
  {
    _id: ObjectId('6887ee060be2cd6239fe6bca'),
    total_beneficios: 2,
    descripciones: [
      'Reducción de la frecuencia e intensidad de los dolores de cabeza.',
      'Mejora del equilibrio y coordinación.'
    ]
  },
  {
    _id: ObjectId('6887ee060be2cd6239fe6bcc'),
    total_beneficios: 2,
    descripciones: [
      'Aumento de la concentración y claridad mental.',
      'Fortalecimiento del cabello y reducción de su caída.'
    ]
  }
]

// Listar todos los tratamientos únicos asociados

db.Beneficios.distinct("id_tratamiento")
[
ObjectId('6887ee060be2cd6239fe6bbc'),
ObjectId('6887ee060be2cd6239fe6bbd'),
ObjectId('6887ee060be2cd6239fe6bbe'),
ObjectId('6887ee060be2cd6239fe6bbf'),
ObjectId('6887ee060be2cd6239fe6bc0'),
ObjectId('6887ee060be2cd6239fe6bc1'),
ObjectId('6887ee060be2cd6239fe6bc2'),
ObjectId('6887ee060be2cd6239fe6bc3'),
ObjectId('6887ee060be2cd6239fe6bc4'),
ObjectId('6887ee060be2cd6239fe6bc5'),
ObjectId('6887ee060be2cd6239fe6bc6'),
ObjectId('6887ee060be2cd6239fe6bc7'),
ObjectId('6887ee060be2cd6239fe6bc8'),
ObjectId('6887ee060be2cd6239fe6bc9'),
ObjectId('6887ee060be2cd6239fe6bca'),
ObjectId('6887ee060be2cd6239fe6bcb'),
ObjectId('6887ee060be2cd6239fe6bcc'),
ObjectId('6887ee060be2cd6239fe6bcd'),
ObjectId('6887ee060be2cd6239fe6bce'),
ObjectId('6887ee060be2cd6239fe6bcf')
]

// Buscar visitas atendidas por un médico específico
db.VisitasMedicas.find({
  id_medico: "med002"
})

[
  {
    _id: ObjectId('6888b54dc8a16e0939fe6912'),
    fecha_visita: ISODate('2024-01-16T14:00:00.000Z'),
    id_tratamiento: ObjectId('bc63b5c2331d4fcdb26c517c'),
    id_medico: 'med002',
    id_paciente: '6313070bc3634e8694175f22',
    tipo_visita: 'Control postoperatorio',
    estado_visita: 'Completada',
    observaciones: 'Herida quirúrgica cicatrizando correctamente. Sin signos de infección.'
  },
  {
    _id: ObjectId('6888b8bcc8a16e0939fe693a'),
    fecha_visita: ISODate('2024-01-16T14:00:00.000Z'),
    id_tratamiento: ObjectId('bc63b5c2331d4fcdb26c517c'),
    id_medico: 'med002',
    id_paciente: '6313070bc3634e8694175f22',
    tipo_visita: 'Control postoperatorio',
    estado_visita: 'Completada',
    observaciones: 'Herida quirúrgica cicatrizando correctamente. Sin signos de infección.'
  }
]


// Mostrar observaciones de todas las visitas 
db.VisitasMedicas.find({}, { _id: 0, observaciones: 1})

[
  {
    observaciones: 'Paciente presenta mejoría en síntomas iniciales. Se recomienda continuar tratamiento.'
  },
  {
    observaciones: 'Herida quirúrgica cicatrizando correctamente. Sin signos de infección.'
  },
  {
    observaciones: 'Paciente atendido por dolor abdominal agudo. Se realizaron estudios complementarios.'
  },
  {
    observaciones: 'Evaluación cardiológica completa. Se ajusta medicación antihipertensiva.'
  },
  {
    observaciones: 'Paciente diabético con niveles de glucosa estables. Continuar con dieta y ejercicio.'
  },
  {
    observaciones: 'Sesión de fisioterapia completada. Paciente muestra progreso en movilidad.'
  },
  {
    observaciones: 'Chequeo anual completo. Todos los parámetros dentro de rangos normales.'
  },
  {
    observaciones: 'Evaluación neurológica. Se solicitan estudios complementarios.'
  },
  {
    observaciones: 'Atención por crisis asmática. Paciente estabilizado y dado de alta.'
  },
  {
    observaciones: 'Primera consulta postoperatoria. Evolución favorable sin complicaciones.'
  },
  {
    observaciones: 'Paciente refiere dolor en articulaciones. Se inicia tratamiento antiinflamatorio.'
  },
  {
    observaciones: 'Continúa programa de rehabilitación cardíaca. Tolerancia al ejercicio mejorada.'
  },
  {
    observaciones: 'Evaluación dermatológica completa. Se detecta lesión que requiere biopsia.'
  },
  {
    observaciones: 'Control de hipertensión arterial. Presión arterial controlada con medicación actual.'
  },
  {
    observaciones: 'Traumatismo en extremidad inferior. Se realiza radiografía, sin fracturas evidentes.'
  },
  {
    observaciones: 'Síntomas gripales. Se indica tratamiento sintomático y reposo.'
  },
  {
    observaciones: 'Segunda evaluación postoperatoria. Herida limpia, retiro de puntos programado.'
  },
  {
    observaciones: 'Evaluación oftalmológica. Se prescribe nueva graduación para lentes.'
  },
  {
    observaciones: 'Terapia ocupacional. Paciente muestra mejora en coordinación motora fina.'
  },
  {
    observaciones: 'Control de rutina. Se solicitan exámenes de laboratorio para próxima cita.'
  }
]

// Agrupar visitas por médico y contar cuántas ha realizado
db.VisitasMedicas.aggregate([
  {
    $group: {
      _id: "$id_medico",
      total_visitas: { $sum: 1 }
    }
  }
])

[
  { _id: 'med009', total_visitas: 2 },
  { _id: 'med010', total_visitas: 2 },
  { _id: 'med029', total_visitas: 4 },
  { _id: 'med052', total_visitas: 2 },
  { _id: 'med013', total_visitas: 4 },
  { _id: 'med026', total_visitas: 2 },
  { _id: 'med024', total_visitas: 4 },
  { _id: 'med041', total_visitas: 2 },
  { _id: 'med015', total_visitas: 2 },
  { _id: 'med028', total_visitas: 2 },
  { _id: 'med034', total_visitas: 2 },
  { _id: 'med008', total_visitas: 4 },
  { _id: 'med001', total_visitas: 3 },
  { _id: 'med002', total_visitas: 2 },
  { _id: 'med035', total_visitas: 4 },
  { _id: 'med038', total_visitas: 3 },
  { _id: 'med025', total_visitas: 3 },
  { _id: 'med005', total_visitas: 3 },
  { _id: 'med033', total_visitas: 2 },
  { _id: 'med004', total_visitas: 3 }
]


// // 14. Contar visitas por estado 

db.VisitasMedicas.aggregate([{ $group: { _id: "$estado_visita", total: { $sum: 1 }  } }])

  [
    { _id: 'Cancelada', total: 1 },
    { _id: 'En progreso', total: 14 },
    { _id: 'Completada', total: 111 },
    { _id: 'Pendiente', total: 1 }
  ]
  

// // 15. Obtener visitas con tratamientos que generan beneficios relacionados con “dolor”
db.VisitasMedicas.aggregate([
  {
    $lookup: {
      from: "Beneficios",
      localField: "id_tratamiento",
      foreignField: "id_tratamiento",
      as: "beneficios"
    }
  },
  {
    $match: {
      "beneficios.descripcion": { $regex: /dolor/i }
    }
  },
  {
    $project: {
      fecha_visita: 1,
      tipo_visita: 1,
      beneficios: 1
    }
  }
])

[
  {
    _id: ObjectId('6888bf1bc8a16e0939fe69d9'),
    fecha_visita: ISODate('2024-03-10T09:30:00.000Z'),
    tipo_visita: 'Consulta general',
    beneficios: [
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a29'),
        descripcion: 'Alivio significativo del dolor y mejora de la movilidad.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbc')
      },
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a3d'),
        descripcion: 'Restauración de la vitalidad y energía general.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbc')
      },
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a51'),
        descripcion: 'Reducción de la tensión muscular y espasmos.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbc')
      }
    ]
  },
  {
    _id: ObjectId('6888bf1bc8a16e0939fe69db'),
    fecha_visita: ISODate('2024-03-20T11:00:00.000Z'),
    tipo_visita: 'Control rutinario',
    beneficios: [
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a2b'),
        descripcion: 'Mejora en la función respiratoria y menos episodios de asma.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbe')
      },
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a3f'),
        descripcion: 'Mejora de la postura y reducción de dolores crónicos.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbe')
      },
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a53'),
        descripcion: 'Piel hidratada y reducción de la sequedad.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbe')
      }
    ]
  },
  {
    _id: ObjectId('6888bf1bc8a16e0939fe69de'),
    fecha_visita: ISODate('2024-04-02T13:30:00.000Z'),
    tipo_visita: 'Control rutinario',
    beneficios: [
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a2e'),
        descripcion: 'Normalización de la presión arterial y menor riesgo cardiovascular.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc1')
      },
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a42'),
        descripcion: 'Mejora de la función cognitiva y memoria.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc1')
      },
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a56'),
        descripcion: 'Alivio del dolor articular y mejora de la movilidad.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc1')
      }
    ]
  },
  {
    _id: ObjectId('6888c17fc8a16e0939fe6a15'),
    fecha_visita: ISODate('2024-09-05T10:15:00.000Z'),
    tipo_visita: 'Consulta general',
    beneficios: [
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a29'),
        descripcion: 'Alivio significativo del dolor y mejora de la movilidad.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbc')
      },
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a3d'),
        descripcion: 'Restauración de la vitalidad y energía general.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbc')
      },
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a51'),
        descripcion: 'Reducción de la tensión muscular y espasmos.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbc')
      }
    ]
  },
  {
    _id: ObjectId('6888c17fc8a16e0939fe6a17'),
    fecha_visita: ISODate('2024-09-12T11:45:00.000Z'),
    tipo_visita: 'Consulta especializada',
    beneficios: [
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a2b'),
        descripcion: 'Mejora en la función respiratoria y menos episodios de asma.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbe')
      },
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a3f'),
        descripcion: 'Mejora de la postura y reducción de dolores crónicos.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbe')
      },
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a53'),
        descripcion: 'Piel hidratada y reducción de la sequedad.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbe')
      }
    ]
  },
  {
    _id: ObjectId('6888c17fc8a16e0939fe6a1a'),
    fecha_visita: ISODate('2024-09-22T13:25:00.000Z'),
    tipo_visita: 'Seguimiento',
    beneficios: [
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a2e'),
        descripcion: 'Normalización de la presión arterial y menor riesgo cardiovascular.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc1')
      },
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a42'),
        descripcion: 'Mejora de la función cognitiva y memoria.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc1')
      },
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a56'),
        descripcion: 'Alivio del dolor articular y mejora de la movilidad.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc1')
      }
    ]
  },
  {
    _id: ObjectId('6888c17fc8a16e0939fe6a23'),
    fecha_visita: ISODate('2024-10-22T08:50:00.000Z'),
    tipo_visita: 'Seguimiento',
    beneficios: [
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a37'),
        descripcion: 'Reducción de la frecuencia e intensidad de los dolores de cabeza.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bca')
      },
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a4b'),
        descripcion: 'Mejora del equilibrio y coordinación.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bca')
      }
    ]
  },
  {
    _id: ObjectId('6888c3b4c8a16e0939fe6a5b'),
    fecha_visita: ISODate('2024-09-05T10:15:00.000Z'),
    tipo_visita: 'Consulta general',
    beneficios: [
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a29'),
        descripcion: 'Alivio significativo del dolor y mejora de la movilidad.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbc')
      },
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a3d'),
        descripcion: 'Restauración de la vitalidad y energía general.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbc')
      },
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a51'),
        descripcion: 'Reducción de la tensión muscular y espasmos.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbc')
      }
    ]
  },
  {
    _id: ObjectId('6888c3b4c8a16e0939fe6a5d'),
    fecha_visita: ISODate('2024-09-12T11:45:00.000Z'),
    tipo_visita: 'Consulta especializada',
    beneficios: [
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a2b'),
        descripcion: 'Mejora en la función respiratoria y menos episodios de asma.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbe')
      },
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a3f'),
        descripcion: 'Mejora de la postura y reducción de dolores crónicos.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbe')
      },
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a53'),
        descripcion: 'Piel hidratada y reducción de la sequedad.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbe')
      }
    ]
  },
  {
    _id: ObjectId('6888c3b4c8a16e0939fe6a60'),
    fecha_visita: ISODate('2024-09-22T13:25:00.000Z'),
    tipo_visita: 'Seguimiento',
    beneficios: [
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a2e'),
        descripcion: 'Normalización de la presión arterial y menor riesgo cardiovascular.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc1')
      },
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a42'),
        descripcion: 'Mejora de la función cognitiva y memoria.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc1')
      },
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a56'),
        descripcion: 'Alivio del dolor articular y mejora de la movilidad.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc1')
      }
    ]
  },
  {
    _id: ObjectId('6888c3b4c8a16e0939fe6a69'),
    fecha_visita: ISODate('2024-10-22T08:50:00.000Z'),
    tipo_visita: 'Seguimiento',
    beneficios: [
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a37'),
        descripcion: 'Reducción de la frecuencia e intensidad de los dolores de cabeza.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bca')
      },
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a4b'),
        descripcion: 'Mejora del equilibrio y coordinación.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bca')
      }
    ]
  },
  {
    _id: ObjectId('6888c3b4c8a16e0939fe6a6d'),
    fecha_visita: ISODate('2024-11-05T14:50:00.000Z'),
    tipo_visita: 'Rehabilitación',
    beneficios: [
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a3b'),
        descripcion: 'Ciclos menstruales más regulares y menos dolorosos.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bce')
      },
      {
        _id: ObjectId('6888c1e6c8a16e0939fe6a4f'),
        descripcion: 'Regulación hormonal y mejora del bienestar general.',
        id_tratamiento: ObjectId('6887ee060be2cd6239fe6bce')
      }
    ]
  }
]

//  Contar cuántos hospitales tiene asignado cada administrativo
db.AdministrativoHospital.aggregate([
  {
    $group: {
      _id: "$id_administrativo",
      total_hospitales: { $sum: 1 }
    }
  }
])

[ { _id: 'adm001', total_hospitales: 3 } ]

// Servicios de mantenimineto e infraestructura

db.ServiciosMantenimiento.find({})
[
  {
    _id: ObjectId('6887e24b0be2cd6239fe6946'),
    tipo_ambiente: 'Servicios Generales',
    nombre_servicio: 'Cocina'
  },
  {
    _id: ObjectId('6887e24b0be2cd6239fe6947'),
    tipo_ambiente: 'Servicios Generales',
    nombre_servicio: 'Lavandería'
  },
  {
    _id: ObjectId('6887e24b0be2cd6239fe6948'),
    tipo_ambiente: 'Servicios Generales',
    nombre_servicio: 'Almacén'
  },
  {
    _id: ObjectId('6887e24b0be2cd6239fe6949'),
    tipo_ambiente: 'Servicios Generales',
    nombre_servicio: 'Mantenimiento General'
  },
  {
    _id: ObjectId('6887e24b0be2cd6239fe694a'),
    tipo_ambiente: 'Servicios Generales',
    nombre_servicio: 'Maquinas'
  },
  {
    _id: ObjectId('6887e24b0be2cd6239fe694b'),
    tipo_ambiente: 'Servicios Generales',
    nombre_servicio: 'Vestuarios'
  },
  {
    _id: ObjectId('6887e24b0be2cd6239fe694c'),
    tipo_ambiente: 'Administrativo',
    nombre_servicio: 'Oficina de Coordinación'
  },
  {
    _id: ObjectId('6887e24b0be2cd6239fe694d'),
    tipo_ambiente: 'Administrativo',
    nombre_servicio: 'Recepción secretaría WC'
  },
  {
    _id: ObjectId('6887e24b0be2cd6239fe694e'),
    tipo_ambiente: 'Talleres',
    nombre_servicio: 'Depósito de herramientas y equipos'
  },
  {
    _id: ObjectId('6887e24b0be2cd6239fe694f'),
    tipo_ambiente: 'Talleres',
    nombre_servicio: 'Taller mecánico'
  },
  {
    _id: ObjectId('6887e24b0be2cd6239fe6950'),
    tipo_ambiente: 'Talleres',
    nombre_servicio: 'Taller plomería'
  },
  {
    _id: ObjectId('6887e24b0be2cd6239fe6951'),
    tipo_ambiente: 'Talleres',
    nombre_servicio: 'Taller electricidad'
  },
  {
    _id: ObjectId('6887e24b0be2cd6239fe6952'),
    tipo_ambiente: 'Talleres',
    nombre_servicio: 'Taller pintura'
  },
  {
    _id: ObjectId('6887e24b0be2cd6239fe6953'),
    tipo_ambiente: 'Talleres',
    nombre_servicio: 'Taller carpintería'
  },
  {
    _id: ObjectId('6887e24b0be2cd6239fe6954'),
    tipo_ambiente: 'Exteriores',
    nombre_servicio: 'Depósito jardinería'
  },
  {
    _id: ObjectId('6887e24b0be2cd6239fe6955'),
    tipo_ambiente: 'Servicios Generales',
    nombre_servicio: 'Vestuario personal Hombres y Mujeres (WC ducha)'
  },
  {
    _id: ObjectId('6887e24b0be2cd6239fe6956'),
    tipo_ambiente: 'Servicios Generales',
    nombre_servicio: 'Aseo'
  },
  {
    _id: ObjectId('6887e24b0be2cd6239fe6957'),
    tipo_ambiente: 'Servicios Generales',
    nombre_servicio: 'Basuras'
  }
]

//  Agrupar y contar cuántos servicios hay por tipo de ambiente
db.ServiciosMantenimiento.aggregate([ {$group: {_id: "$tipo_ambiente",  total_servicios: { $sum: 1 } } }])

[  
  { _id: 'Administrativo', total_servicios: 2 },
  { _id: 'Exteriores', total_servicios: 1 },
  { _id: 'Servicios Generales', total_servicios: 9 },
  { _id: 'Talleres', total_servicios: 6 }
]

//  Verificar si hay servicios que no tengan definido el tipo de ambiente
db.ServiciosMantenimiento.find({
  tipo_ambiente: { $exists: true }
})


// Buscar servicios cuyo nombre tenga tilde (acentos)
db.ServiciosMantenimiento.find({
  nombre_servicio: { $regex: /[áéíóúÁÉÍÓÚ]/ }
})

[
  {
    _id: ObjectId('6887e24b0be2cd6239fe6947'),
    tipo_ambiente: 'Servicios Generales',
    nombre_servicio: 'Lavandería'
  },
  {
    _id: ObjectId('6887e24b0be2cd6239fe6948'),
    tipo_ambiente: 'Servicios Generales',
    nombre_servicio: 'Almacén'
  },
  {
    _id: ObjectId('6887e24b0be2cd6239fe694c'),
    tipo_ambiente: 'Administrativo',
    nombre_servicio: 'Oficina de Coordinación'
  },
  {
    _id: ObjectId('6887e24b0be2cd6239fe694d'),
    tipo_ambiente: 'Administrativo',
    nombre_servicio: 'Recepción secretaría WC'
  },
  {
    _id: ObjectId('6887e24b0be2cd6239fe694e'),
    tipo_ambiente: 'Talleres',
    nombre_servicio: 'Depósito de herramientas y equipos'
  },
  {
    _id: ObjectId('6887e24b0be2cd6239fe694f'),
    tipo_ambiente: 'Talleres',
    nombre_servicio: 'Taller mecánico'
  },
  {
    _id: ObjectId('6887e24b0be2cd6239fe6950'),
    tipo_ambiente: 'Talleres',
    nombre_servicio: 'Taller plomería'
  },
  {
    _id: ObjectId('6887e24b0be2cd6239fe6953'),
    tipo_ambiente: 'Talleres',
    nombre_servicio: 'Taller carpintería'
  },
  {
    _id: ObjectId('6887e24b0be2cd6239fe6954'),
    tipo_ambiente: 'Exteriores',
    nombre_servicio: 'Depósito jardinería'
  }
]

//  Servicios generales por ambiente

db.ServiciosMantenimiento.aggregate([
   {
       $group: {
         _id: "$tipo_ambiente",
         total_servicios: { $sum: 1 }
       }
     },
     {
       $sort: { total_servicios: -1 }
     }
   ])
  [
    { _id: 'Servicios Generales', total_servicios: 9 },
    { _id: 'Talleres', total_servicios: 6 },
    { _id: 'Administrativo', total_servicios: 2 },
    { _id: 'Exteriores', total_servicios: 1 }
  ]
  

// Listas servicios y mostrar la cantidad de estos
db.ServiciosMantenimiento.aggregate([
     {
       $group: {
         _id: "$nombre_servicio",
         cantidad: { $sum: 1 }
       }
     },
     {
       $sort: { cantidad: -1 }
     }
   ])
  [
    { _id: 'Depósito jardinería', cantidad: 1 },
    { _id: 'Taller plomería', cantidad: 1 },
    { _id: 'Maquinas', cantidad: 1 },
    { _id: 'Mantenimiento General', cantidad: 1 },
    { _id: 'Almacén', cantidad: 1 },
    { _id: 'Cocina', cantidad: 1 },
    { _id: 'Taller mecánico', cantidad: 1 },
    { _id: 'Depósito de herramientas y equipos', cantidad: 1 },
    { _id: 'Recepción secretaría WC', cantidad: 1 },
    { _id: 'Lavandería', cantidad: 1 },
    {
      _id: 'Vestuario personal Hombres y Mujeres (WC ducha)',
      cantidad: 1
    },
    { _id: 'Taller carpintería', cantidad: 1 },
    { _id: 'Oficina de Coordinación', cantidad: 1 },
    { _id: 'Aseo', cantidad: 1 },
    { _id: 'Taller pintura', cantidad: 1 },
    { _id: 'Taller electricidad', cantidad: 1 },
    { _id: 'Vestuarios', cantidad: 1 },
    { _id: 'Basuras', cantidad: 1 }
  ]
  

//  Mostrar los correos de los medicos del hospital 1
db.Medicos.find(
     { id_hospital: "hos001" },
     { nombre: 1, correo: 1, _id: 0 }
   )
  [
    {
      nombre: 'Dr. Andrés Felipe Rojas Castro',
      correo: 'andres.rojas.hus@hospital.com'
    },
    {
      nombre: 'Dra. Laura Marcela Gómez Pérez',
      correo: 'laura.gomez.hus@hospital.com'
    },
    {
      nombre: 'Dr. Javier Mauricio Soto Restrepo',
      correo: 'javier.soto.hus@hospital.com'
    },
    {
      nombre: 'Dra. Carolina Andrea Díaz Morales',
      correo: 'carolina.diaz.hus@hospital.com'
    },
    {
      nombre: 'Dr. Ricardo José Quintero Vargas',
      correo: 'ricardo.quintero.hus@hospital.com'
    },
    {
      nombre: 'Dra. Ana María Botero Ospina',
      correo: 'ana.botero.hus@hospital.com'
    },
    {
      nombre: 'Dr. Juan Pablo Ortiz Pardo',
      correo: 'juan.ortiz.hus@hospital.com'
    },
    {
      nombre: 'Dra. Sofía Valentina Guerrero Solano',
      correo: 'sofia.guerrero.hus@hospital.com'
    },
    {
      nombre: 'Dr. Daniel Esteban Cifuentes Ruiz',
      correo: 'daniel.cifuentes.hus@hospital.com'
    },
    {
      nombre: 'Dra. María Fernanda Rueda Suárez',
      correo: 'maria.rueda.hus@hospital.com'
    },
    {
      nombre: 'Dr. Camilo Ernesto Sierra Bermúdez',
      correo: 'camilo.sierra.hus@hospital.com'
    },
    {
      nombre: 'Dra. Natalia Andrea Vélez Rojas',
      correo: 'natalia.velez.hus@hospital.com'
    },
    {
      nombre: 'Dr. Sebastián Alejandro Muñoz Colorado',
      correo: 'sebastian.munoz.hus@hospital.com'
    },
    {
      nombre: 'Dra. Valentina Andrea Herrera Morales',
      correo: 'valentina.herrera.hus@hospital.com'
    },
    {
      nombre: 'Dr. Andrés Felipe Marín Rueda',
      correo: 'andres.marin.hus@hospital.com'
    },
    {
      nombre: 'Dra. Juliana Carolina Ramírez Duque',
      correo: 'juliana.ramirez.hus@hospital.com'
    },
    {
      nombre: 'Dr. Fernando José Osorio Cifuentes',
      correo: 'fernando.osorio.hus@hospital.com'
    },
    {
      nombre: 'Dra. Alejandra Fernanda Soto Quintero',
      correo: 'alejandra.soto.hus@hospital.com'
    },
    {
      nombre: 'Dr. Sergio Andrés Lozano Bernal',
      correo: 'sergio.lozano.hus@hospital.com'
    },
    {
      nombre: 'Dra. Laura Camila Reyes Acosta',
      correo: 'laura.reyes.hus@hospital.com'
    }
  ]
  
