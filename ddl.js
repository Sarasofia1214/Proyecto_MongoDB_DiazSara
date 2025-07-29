// Para la creacion de la base de datos

use Sistemahospitalario;

// Para la creacion d ela coleccion con su respectiva validacion dependiendo de los requerimientos de la coleccion

db.createCollection( "nombre_de_la_coleccion", {
  validator: { <validador> },
  validationLevel: "off" | "moderate" | "strict",
  validationAction: "warn" | "error"
})

// Al insertar la data en estas colecciones, usando el comando:

db.namecolecction.insertMany([])

//Esctructura de las colecciones:

// Hospital
{
  "_id": "ObjectId()",               // ObjectId
  "nombre": "string",
  "direccion": "string",
  "telefono": "string",
  "codigo_habilitacion": "string",
  "tipo_institucion": "string",
  "nivel_complejidad": "string"
}

// Administrativos
{
  "_id": "ObjectId()",               // ObjectId
  "nombre": "string",
  "telefono": "string",
  "correo": "string",
  "rol": "string",
  "horario": "ObjectId()",           // referencia a Horario
  "id_tipo_personal": "ObjectId()"   // FK a TiposPersonal
}


// AdministrativoHospital
{
  "_id": "ObjectId()",               // ObjectId
  "id_administrativo": "ObjectId()",// FK a Administrativos
  "id_hospital": "ObjectId()"        // FK a Hospital
}


// Medicos
{
  "_id": "ObjectId()",               // ObjectId
  "rol": "string",
  "fecha_ingreso": "ISODate()",      // fecha
  "correo": "string",
  "telefono": "string",
  "numero_colegiatura": "string",
  "area_asignada": "string",
  "hospital_id": "ObjectId()",       // FK a Hospital
  "estado": "string",
  "id_horario": "ObjectId()",        // FK a Horario
  "id_tipo_personal": "ObjectId()"   // FK a TiposPersonal
}


// Enfermeros
{
  "_id": "ObjectId()",               // ObjectId
  "nombre": "string",
  "rol": "string",
  "id_tipo_personal": "ObjectId()", // FK a TiposPersonal
  "fecha_ingreso": "ISODate()",
  "numero_colegiatura": "string",
  "correo": "string",
  "telefono": "string",
  "area_asignada": "string",
  "hospital_id": "ObjectId()",       // FK a Hospital
  "estado": "string",
  "horario": "ObjectId()"            // FK a Horario
}


// Mantenimiento
{
  "_id": "ObjectId()",               // ObjectId
  "nombre": "string",
  "correo": "string",
  "telefono": "string",
  "servicios": "ObjectId()",         // FK a ServiciosMantenimiento
  "hospital_id": "ObjectId()",       // FK a Hospital
  "fecha_ingreso": "ISODate()",
  "estado": "string",
  "horario": "ObjectId()",           // FK a Horario
  "id_tipo_personal": "ObjectId()"   // FK a TiposPersonal
}


// Pacientes
{
  "_id": "ObjectId()",               // ObjectId
  "hospital_registro_id": "ObjectId()", // FK a Hospital
  "nombre": "string",
  "tipo_identificacion": "string",
  "numero_identificacion": "string",
  "fecha_nacimiento": "ISODate()",
  "genero": "string",
  "direccion": "string",
  "telefono_contacto": "string",
  "fecha_registro": "ISODate()",
  "estado_paciente": "string",
  "nivel_atencion": "string",
  "id_eps": "ObjectId()",            // FK a EPS
  "id_seguro": "ObjectId()"          // FK a Seguros
}



// VisitasMedicas
{
  "_id": "ObjectId()",               // ObjectId
  "fecha_visita": "ISODate()",
  "id_tratamiento": "ObjectId()",    // FK a Tratamientos
  "id_medico": "ObjectId()",         // FK a Medicos
  "id_paciente": "ObjectId()",       // FK a Pacientes
  "tipo_visita": "string",
  "estado_visita": "string",
  "observaciones": "string"
}

// Tratamientos
{
  "_id": "ObjectId()",               // ObjectId
  "nombre": "string",
  "descripcion": "string",
  "costo": "decimal",
  "duracion": "string",
  "area_relacionada": "ObjectId()",  // FK a Areas
  "via_administracion": "string",
  "FrecuenciaAplicacion": "int"
}

// HistoriaClinica
{
  "_id": "ObjectId()",               // ObjectId
  "paciente": "ObjectId()",          // FK a Pacientes
  "tratamiento": "ObjectId()"        // FK a Tratamientos
}

// EPS
{
  "_id": "ObjectId()",               // ObjectId
  "nombre": "string",
  "nit": "string",
  "tipo": "string",
  "nivel": "string",
  "telefono": "string",
  "correo": "string"
}


// Seguros
{
  "_id": "ObjectId()",               // ObjectId
  "nombre": "string",
  "compañia": "string",
  "tipo": "string",
  "nivel_cobertura": "string",
  "plan": "string",
  "telefono": "string"
}


// Enfermedades
{
  "_id": "ObjectId()",               // ObjectId
  "nombre": "string",
  "tipo": "string",
  "clasificacion": "string",
  "id_sintoma": "ObjectId()"         // FK a Sintomas
}



// Sintomas
{
  "_id": "ObjectId()",               // ObjectId
  "descripcion": "string",
  "observaciones": "string",
  "fecha_encontrada": "ISODate()"
}


// Beneficios
{
  "_id": "ObjectId()",               // ObjectId
  "descripcion": "string",
  "id_tratamiento": "ObjectId()"     // FK a Tratamientos
}


// Requerimientos
{
  "_id": "ObjectId()",               // ObjectId
  "descripcion": "string",
  "id_tratamiento": "ObjectId()"     // FK a Tratamientos
}


// Medicamentos
{
  "_id": "ObjectId()",               // ObjectId
  "nombre": "string",
  "principio_activo": "string",
  "concentracion": "string",
  "tipo": "string",
  "lote": "string",
  "disponibilidad": "boolean",
  "fabricante": "string"
}


// Presentaciones
{
  "_id": "ObjectId()",               // ObjectId
  "tipo_presentacion": "string",
  "id_medicamento": "ObjectId()"     // FK a Medicamentos
}


// Inventario
{
  "_id": "ObjectId()",               // ObjectId
  "id_hospital": "ObjectId()",       // FK a Hospital
  "id_medicamento": "ObjectId()",    // FK a Medicamentos
  "stock": "int",
  "fecha_ultima_actualizacion": "ISODate()"
}


// Proveedores
{
  "_id": "ObjectId()",               // ObjectId
  "nombre_empresa": "string",
  "nit": "string",
  "tipo": "string",
  "fecha": "ISODate()",
  "terminos_pago": "string"
}


// ServiciosMantenimiento
{
  "_id": "ObjectId()",               // ObjectId
  "tipo_ambiente": "string",
  "nombre_servicio": "string"
}


// Horario
{
  "_id": "ObjectId()",               // ObjectId
  "horario_tipo": "string",
  "dias": "string"
}


// TiposPersonal
{
  "_id": "ObjectId()",               // ObjectId
  "codigo": "string",
  "nombre": "string",
  "descripcion": "string",
  "salario_base": "decimal"
}


// Areas
{
  "_id": "ObjectId()",               // ObjectId
  "tipo_area": "string",
  "descripcion": "string",
  "estado": "string",
  "id_hospital": "ObjectId()"        // FK a Hospital
}


// AreaEspecializacion
{
  "_id": "ObjectId()",               // ObjectId
  "id_area": "ObjectId()",            // FK a Areas
  "fecha_asignacion": "ISODate()",
  "id_hospital": "ObjectId()",        // FK a Hospital
  "estado": "string"
}


// Subareas
{
  "_id": "ObjectId()",               // ObjectId
  "nombre_subarea": "string",
  "id_area": "ObjectId()",            // FK a Areas
  "descripcion": "string",
  "estado": "string",
  "tipo": "string"
}


// Creaccion de usuarios