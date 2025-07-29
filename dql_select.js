// Consultas en la base de datos hospitalaria

// Número total de hospitales por tipo de institución:

db.Hospitales.aggregate([ { $group: { _id: "$tipo_institucion", total_hospitales: { $sum: 1 } } }] )
[
  { _id: 'Pública Departamental', total_hospitales: 1 },
  { _id: 'Privada', total_hospitales: 1 },
  { _id: 'Pública Universitaria', total_hospitales: 1 }
]
//  Número de hospitales por nivel de complejidad

db.Hospitales.aggregate([ { $group: { _id: "$nivel_complejidad", total_hospitales: { $sum: 1 } } }] )
[
  { _id: 'Mediana y Alta Complejidad', total_hospitales: 1 },
  { _id: 'Alta Complejidad', total_hospitales: 2 }
]


// Medicamentos con más stock por hospital 

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
db.Medicos.aggregate([
  { $group: { _id: "$id_hospital", total_medicos: { $sum: 1 } } }
])

[
  { _id: 'hos003', total_medicos: 50 },
  { _id: 'hos001', total_medicos: 50 },
  { _id: 'hos002', total_medicos: 46 }
]



//  Cantidad total de enfermeros por hospital
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


// 15. Buscar hospital por código de habilitación
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


// Inventarios de medicamentos 

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

// Historial por paciente

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


//  Diagnósticos más frecuentes
db.HistoriaClinica.aggregate([
  { $group: { _id: "$diagnostico", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
])

//  Tratamientos más comunes
db.Tratamientos.aggregate([
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
