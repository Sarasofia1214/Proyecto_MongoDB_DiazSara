// Validación Hospital

db.createCollection("Hospital", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "nombre",
        "direccion",
        "codigo_habilitacion",
        "tipo_institucion",
        "nivel_complejidad",
      ],
      properties: {
        _id: {
          bsonType: "objectId"
        },
        nombre: {
          bsonType: "string",
          minLength: 1,
          maxLength: 255,
          pattern: "^[a-zA-Z0-9\\s.,'-]*$",
          description: "Debe ser un string no vacío, máximo 255 caracteres, y contener solo caracteres alfanuméricos, espacios, puntos, comas, guiones y apóstrofes."
        },
        direccion: {
          bsonType: "string",
          minLength: 1,
          maxLength: 255,
          pattern: "^[a-zA-Z0-9\\s.,'#-]*$",
          description: "Debe ser un string no vacío, máximo 255 caracteres, y contener solo caracteres alfanuméricos, espacios, puntos, comas, guiones y numerales."
        },
        telefono: {
          bsonType: ["string", "null"],
          pattern: "^\\+?\\d{7,15}$",
          description: "Debe ser un string (si está presente) con un formato de teléfono válido (opcionalmente iniciando con '+', seguido de 7 a 15 dígitos)."
        },
        codigo_habilitacion: {
          bsonType: "string",
          minLength: 1,
          maxLength: 50,
          pattern: "^[A-Z0-9]{5,20}$",
          description: "Debe ser un string no vacío, máximo 50 caracteres, y seguir el formato específico (ej. 5 a 20 caracteres alfanuméricos en mayúscula)."
        },
        tipo_institucion: {
          bsonType: "string",
          enum: ["Público", "Privado", "Mixto"],
          description: "Debe ser un string de la lista predefinida: 'Público', 'Privado' o 'Mixto'."
        },
        nivel_complejidad: {
          bsonType: "string",
          enum: ["Bajo", "Medio", "Alto", "Especializado"],
          description: "Debe ser un string de la lista predefinida: 'Bajo', 'Medio', 'Alto' o 'Especializado'."
        },
      },
    },
  },
  validationLevel: "strict",
  validationAction: "error",
});


  // Validacion Horario

  db.createCollection("Horario", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "horario_tipo",
          "dias"
        ],
        properties: {
          _id: {
            bsonType: "objectId"
          },
          horario_tipo: {
            bsonType: "string",
            minLength: 1,
            maxLength: 100,
            // La lista 'enum' ahora incluye todos los valores necesarios
            enum: [
              "Jornada Completa",
              "Medio Tiempo",
              "Turno Mañana",
              "Turno Tarde",
              "Turno Noche",
              "Fines de Semana",
              "Flexible",
              "Consulta Externa - Diurno",
              "Urgencias - 24/7",
              "Visitas - Mañana",
              "Visitas - Tarde/Noche",
              "Laboratorio Clínico - Mañana",
              "Laboratorio Clínico - Tarde",
              "Imagenología/Administrativo - Diurno",
              "Rotativo - Personal",
              "Nocturno - Personal",
              "Fin de Semana - Personal"
            ]
          },
          dias: {
            bsonType: "string",
            minLength: 1,
            maxLength: 255
          }
        }
      }
    },
    validationLevel: "strict",
    validationAction: "error"
  });


// Coleccion horario

[
    {
      "horario_tipo": "Consulta Externa - Diurno",
      "dias": "Lunes a Viernes"
    },
    {
      "horario_tipo": "Urgencias - 24/7",
      "dias": "Todos los días"
    },
    {
      "horario_tipo": "Visitas - Mañana",
      "dias": "Todos los días"
    },
    {
      "horario_tipo": "Visitas - Tarde/Noche",
      "dias": "Todos los días"
    },
    {
      "horario_tipo": "Laboratorio Clínico - Mañana",
      "dias": "Lunes a Sábado"
    },
    {
      "horario_tipo": "Laboratorio Clínico - Tarde",
      "dias": "Lunes a Viernes"
    },
    {
      "horario_tipo": "Imagenología/Administrativo - Diurno",
      "dias": "Lunes a Viernes"
    },
    {
      "horario_tipo": "Rotativo - Personal",
      "dias": "Todos los días"
    },
    {
      "horario_tipo": "Nocturno - Personal",
      "dias": "Todos los días"
    },
    {
      "horario_tipo": "Fin de Semana - Personal",
      "dias": "Sábado y Domingo"
    }
  ]


    // Validacion Tipospersonal

    db.createCollection("TiposPersonal", {
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: [
            "codigo",
            "nombre",
            "descripcion",
            "salario_base"
          ],
          properties: {
            _id: {
              bsonType: "objectId"
            },
            codigo: {
              bsonType: "string",
              minLength: 1,
              maxLength: 50
            },
            nombre: {
              bsonType: "string",
              minLength: 1,
              maxLength: 100
            },
            descripcion: {
              bsonType: "string",
              maxLength: 500
            },
            salario_base: {
              bsonType: ["double", "decimal"],
              minimum: 0
            }
          }
        }
      },
      validationLevel: "strict",
      validationAction: "error"
    });
  


  // Coleccion Tipo Personal

  db.TiposPersonal.insertMany([
    {
      "codigo": "001",
      "nombre": "Director General",
      "descripcion": "Gestión general, estratégica y operativa del hospital. Responsable de la dirección y el cumplimiento de objetivos institucionales.",
      "salario_base": Decimal128("15000000.00")
    },
    {
      "codigo": "002",
      "nombre": "Médico Especialista",
      "descripcion": "Atiende pacientes, realiza diagnósticos, prescribe tratamientos y lleva a cabo procedimientos en su área de especialización.",
      "salario_base": Decimal128("8000000.00")
    },
    {
      "codigo": "003",
      "nombre": "Enfermero/a",
      "descripcion": "Asiste a médicos, administra medicamentos, cuida y monitorea a los pacientes, y educa sobre prácticas de salud.",
      "salario_base": Decimal128("3500000.00")
    },
    {
      "codigo": "004",
      "nombre": "Personal Administrativo",
      "descripcion": "Gestiona recursos, coordina citas, maneja la documentación, la facturación y la logística hospitalaria.",
      "salario_base": Decimal128("2200000.00")
    },
    {
      "codigo": "005",
      "nombre": "Personal de Mantenimiento",
      "descripcion": "Realiza el mantenimiento preventivo y correctivo de las instalaciones, equipos y asegura la limpieza y salubridad del entorno.",
      "salario_base": Decimal128("1500000.00")
    }
  ]);



// Validacion Servicio mantenimiento

db.createCollection("ServiciosMantenimiento", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "tipo_ambiente",
        "nombre_servicio"
      ],
      properties: {
        _id: {
          bsonType: "objectId"
        },
        tipo_ambiente: {
          bsonType: "string",
          // La lista 'enum' ahora incluye todos los valores que has proporcionado
          enum: [
            "Áreas Comunes",
            "Quirófanos",
            "UCI",
            "Habitaciones",
            "Laboratorios",
            "Oficinas",
            "Exteriores",
            "Servicios Generales",
            "Administrativo",
            "Talleres"
          ]
        },
        nombre_servicio: {
          bsonType: "string",
          minLength: 1,
          maxLength: 255
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});



  // Coleccion Servicios Mantenimiento

  [
    {
      "tipo_ambiente": "Servicios Generales",
      "nombre_servicio": "Cocina"
    },
    {
      "tipo_ambiente": "Servicios Generales",
      "nombre_servicio": "Lavandería"
    },
    {
      "tipo_ambiente": "Servicios Generales",
      "nombre_servicio": "Almacén"
    },
    {
      "tipo_ambiente": "Servicios Generales",
      "nombre_servicio": "Mantenimiento General"
    },
    {
      "tipo_ambiente": "Servicios Generales",
      "nombre_servicio": "Maquinas"
    },
    {
      "tipo_ambiente": "Servicios Generales",
      "nombre_servicio": "Vestuarios"
    },
    {
      "tipo_ambiente": "Administrativo",
      "nombre_servicio": "Oficina de Coordinación"
    },
    {
      "tipo_ambiente": "Administrativo",
      "nombre_servicio": "Recepción secretaría WC"
    },
    {
      "tipo_ambiente": "Talleres",
      "nombre_servicio": "Depósito de herramientas y equipos"
    },
    {
      "tipo_ambiente": "Talleres",
      "nombre_servicio": "Taller mecánico"
    },
    {
      "tipo_ambiente": "Talleres",
      "nombre_servicio": "Taller plomería"
    },
    {
      "tipo_ambiente": "Talleres",
      "nombre_servicio": "Taller electricidad"
    },
    {
      "tipo_ambiente": "Talleres",
      "nombre_servicio": "Taller pintura"
    },
    {
      "tipo_ambiente": "Talleres",
      "nombre_servicio": "Taller carpintería"
    },
    {
      "tipo_ambiente": "Exteriores",
      "nombre_servicio": "Depósito jardinería"
    },
    {
      "tipo_ambiente": "Servicios Generales",
      "nombre_servicio": "Vestuario personal Hombres y Mujeres (WC ducha)"
    },
    {
      "tipo_ambiente": "Servicios Generales",
      "nombre_servicio": "Aseo"
    },
    {
      "tipo_ambiente": "Servicios Generales",
      "nombre_servicio": "Basuras"
    }
  ]



  // Validacion EPS

  db.createCollection("EPS", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "nombre",
          "nit",
          "tipo",
          "nivel",
          "telefono",
          "correo"
        ],
        properties: {
          _id: {
            bsonType: "objectId"
          },
          nombre: {
            bsonType: "string",
            minLength: 1,
            maxLength: 255
          },
          nit: {
            bsonType: "string",
            minLength: 9,
            maxLength: 15,
            pattern: "^[0-9]{9,15}[-]{0,1}[0-9]$"
          },
          tipo: {
            bsonType: "string",
            enum: ["Contributivo", "Subsidiado"]
          },
          nivel: {
            bsonType: "string",
            enum: ["Nacional", "Departamental", "Municipal"]
          },
          telefono: {
            bsonType: "string",
            minLength: 7,
            maxLength: 15,
            pattern: "^\\+?\\d{7,15}$"
          },
          correo: {
            bsonType: "string",
            pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
          }
        }
      }
    },
    validationLevel: "strict",
    validationAction: "error"
  });


  // Coleccion EPS
  [
    {
      "nombre": "Nueva EPS",
      "nit": "900222128-1",
      "tipo": "Contributivo",
      "nivel": "Nacional",
      "telefono": "018000954400",
      "correo": "servicioalcliente@nuevaeps.com.co"
    },
    {
      "nombre": "Nueva EPS",
      "nit": "900222128-1",
      "tipo": "Subsidiado",
      "nivel": "Nacional",
      "telefono": "018000954400",
      "correo": "servicioalcliente@nuevaeps.com.co"
    },
    {
      "nombre": "EPS Sanitas",
      "nit": "860503109-1",
      "tipo": "Contributivo",
      "nivel": "Nacional",
      "telefono": "018000919100",
      "correo": "servicioalcliente@epssanitas.com"
    },
    {
      "nombre": "Salud Total EPS",
      "nit": "800007854-2",
      "tipo": "Contributivo",
      "nivel": "Nacional",
      "telefono": "018000114524",
      "correo": "atencionalusuario@saludtotal.com.co"
    },
    {
      "nombre": "Coosalud EPS",
      "nit": "800231332-6",
      "tipo": "Subsidiado",
      "nivel": "Nacional",
      "telefono": "018000515600",
      "correo": "atencionalafiliado@coosalud.com"
    }
  ]


  // Validacion Seguros


  db.createCollection("Seguros", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "nombre",
          "compania",
          "tipo",
          "nivel_cobertura",
          "plan",
          "telefono"
        ],
        properties: {
          _id: {
            bsonType: "objectId"
          },
          nombre: {
            bsonType: "string",
            minLength: 1,
            maxLength: 255
          },
          compania: {
            bsonType: "string",
            minLength: 1,
            maxLength: 255
          },
          tipo: {
            bsonType: "string",
            enum: ["Salud", "Vida", "Accidentes Personales", "Servicios Funerarios"]
          },
          nivel_cobertura: {
            bsonType: "string",
            enum: ["Básico", "Intermedio", "Completo", "Premium"]
          },
          plan: {
            bsonType: "string",
            minLength: 1,
            maxLength: 100
          },
          telefono: {
            bsonType: "string",
            minLength: 7,
            maxLength: 15,
            pattern: "^\\+?\\d{7,15}$"
          }
        }
      }
    },
    validationLevel: "strict",
    validationAction: "error"
  });

  // Seguros 
  [
    {
      "nombre": "Plan Vital",
      "compañia": "Colsanitas S.A. (Keralty)",
      "tipo": "Medicina Prepagada",
      "nivel_cobertura": "Básico",
      "plan": "Plan Vital",
      "telefono": "018000979020"
    },
    {
      "nombre": "Plan Esencial",
      "compañia": "Colsanitas S.A. (Keralty)",
      "tipo": "Medicina Prepagada",
      "nivel_cobertura": "Intermedio",
      "plan": "Plan Esencial",
      "telefono": "018000979020"
    },
    {
      "nombre": "Plan Preferencial",
      "compañia": "Colsanitas S.A. (Keralty)",
      "tipo": "Medicina Prepagada",
      "nivel_cobertura": "Premium",
      "plan": "Plan Preferencial",
      "telefono": "018000979020"
    },
    {
      "nombre": "Plan de Salud Clásico",
      "compañia": "Suramericana S.A. (Seguros Sura)",
      "tipo": "Póliza de Salud",
      "nivel_cobertura": "Básico",
      "plan": "Plan de Salud Clásico",
      "telefono": "018000518888"
    },
    {
      "nombre": "Plan de Salud Global",
      "compañia": "Suramericana S.A. (Seguros Sura)",
      "tipo": "Póliza de Salud",
      "nivel_cobertura": "Completo",
      "plan": "Plan de Salud Global",
      "telefono": "018000518888"
    },
    {
      "nombre": "Plan Oro",
      "compañia": "AXA Colpatria",
      "tipo": "Medicina Prepagada",
      "nivel_cobertura": "Premium",
      "plan": "Plan Oro",
      "telefono": "018000512620"
    },
    {
      "nombre": "Plan Plata",
      "compañia": "AXA Colpatria",
      "tipo": "Medicina Prepagada",
      "nivel_cobertura": "Intermedio",
      "plan": "Plan Plata",
      "telefono": "018000512620"
    },
    {
      "nombre": "Póliza de Hospitalización y Cirugía",
      "compañia": "Allianz Colombia",
      "tipo": "Póliza de Salud",
      "nivel_cobertura": "Básico",
      "plan": "Póliza de Hospitalización y Cirugía",
      "telefono": "018000513300"
    }
  ]

   // Validacion Sintomas

   db.createCollection("Sintomas", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "descripcion"
        ],
        properties: {
          _id: {
            bsonType: "objectId"
          },
          descripcion: {
            bsonType: "string",
            minLength: 1,
            maxLength: 255
          },
          observaciones: {
            bsonType: "string",
            maxLength: 500
          },
          fecha_encontrada: {
            bsonType: ["date", "null"] 
          }
        }
      }
    },
    validationLevel: "strict",
    validationAction: "error"
  });


  // Coleccion Sintomas

  [
    {
      "descripcion": "Dolor de cabeza",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Fiebre",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Tos",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Dificultad para respirar (Disnea)",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Dolor abdominal",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Náuseas",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Vómitos",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Diarrea",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Fatiga / Cansancio",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Dolor en el pecho",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Mareos / Vértigo",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Erupción cutánea",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Hinchazón (Edema)",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Dolor de garganta",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Congestión nasal / Rinorrea",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Pérdida de apetito",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Debilidad muscular",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Cambios en el estado de ánimo",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Insomnio",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Sangrado inusual",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Visión borrosa",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Dolor articular",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Entumecimiento / Hormigueo",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Pérdida de peso inexplicable",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Aumento de la sed (Polidipsia)",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Aumento de la micción (Poliuria)",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Ictericia (Coloración amarillenta de piel y ojos)",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Confusión / Desorientación",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Convulsiones",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Parálisis o debilidad en un lado del cuerpo",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Dolor al orinar (Disuria)",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Orina con sangre (Hematuria)",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Estreñimiento",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Hemorroides",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Dolor de espalda",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Dolor de cuello",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Hinchazón de ganglios linfáticos",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Úlceras en la boca",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Pérdida de audición",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Zumbido en los oídos (Tinnitus)",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Dolor de muelas",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Sensibilidad a la luz (Fotofobia)",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Escalofríos",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Sudoración excesiva",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Cambios en el color de la piel",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Vómito con sangre (Hematemesis)",
      "observaciones": "",
      "fecha_encontrada": null
    },
    {
      "descripcion": "Heces negras o con sangre (Melena/Hematoquecia)",
      "observaciones": "",
      "fecha_encontrada": null
    }
  ]


  // Validacion Medicamentos
 
  db.createCollection("Medicamentos", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "medicamento_id", // New: custom ID field
          "nombre",
          "principio_activo",
          "concentracion",
          "tipo",
          "lote",
          "disponibilidad",
          "fabricante"
        ],
        properties: {
          _id: {
            bsonType: "objectId" // MongoDB's auto-generated ObjectId
          },
          medicamento_id: {
            bsonType: "string", // Your custom ID (e.g., "med001")
            minLength: 1,
            maxLength: 50
          },
          nombre: {
            bsonType: "string",
            minLength: 1,
            maxLength: 150
          },
          principio_activo: {
            bsonType: "string",
            minLength: 1,
            maxLength: 150
          },
          concentracion: {
            bsonType: "string",
            minLength: 1,
            maxLength: 100
          },
          tipo: {
            bsonType: "string",
            minLength: 1,
            maxLength: 100
          },
          lote: {
            bsonType: "string",
            minLength: 1,
            maxLength: 100
          },
          disponibilidad: {
            bsonType: "bool"
          },
          fabricante: {
            bsonType: "string",
            minLength: 1,
            maxLength: 200
          }
        }
      }
    },
    validationLevel: "strict",
    validationAction: "error"
  });


  // Coleccion Medicamentos

  db.Medicamentos.insertMany([
    {
      "medicamento_id": "med001",
      "nombre": "Acetaminofén",
      "principio_activo": "Paracetamol",
      "concentracion": "500 mg",
      "tipo": "Analgésico / Antipirético",
      "lote": "LOTE2024001",
      "disponibilidad": true,
      "fabricante": "Laboratorios Genericos S.A."
    },
    {
      "medicamento_id": "med002",
      "nombre": "Ibuprofeno",
      "principio_activo": "Ibuprofeno",
      "concentracion": "400 mg",
      "tipo": "AINE / Analgésico",
      "lote": "LOTE2024002",
      "disponibilidad": true,
      "fabricante": "Farmacéutica Global Ltda."
    },
    {
      "medicamento_id": "med003",
      "nombre": "Amoxicilina",
      "principio_activo": "Amoxicilina",
      "concentracion": "500 mg",
      "tipo": "Antibiótico",
      "lote": "LOTE2024003",
      "disponibilidad": true,
      "fabricante": "MediPharma Corp."
    },
    {
      "medicamento_id": "med004",
      "nombre": "Ceftriaxona",
      "principio_activo": "Ceftriaxona",
      "concentracion": "1 g",
      "tipo": "Antibiótico",
      "lote": "LOTE2024004",
      "disponibilidad": true,
      "fabricante": "BioGen Laboratorios"
    },
    {
      "medicamento_id": "med005",
      "nombre": "Omeprazol",
      "principio_activo": "Omeprazol",
      "concentracion": "20 mg",
      "tipo": "Inhibidor Bomba Protones",
      "lote": "LOTE2024005",
      "disponibilidad": true,
      "fabricante": "Química Saludable"
    },
    {
      "medicamento_id": "med006",
      "nombre": "Salbutamol",
      "principio_activo": "Salbutamol",
      "concentracion": "100 mcg/dosis",
      "tipo": "Broncodilatador",
      "lote": "LOTE2024006",
      "disponibilidad": true,
      "fabricante": "RespiCare Labs"
    },
    {
      "medicamento_id": "med007",
      "nombre": "Losartán",
      "principio_activo": "Losartán Potásico",
      "concentracion": "50 mg",
      "tipo": "Antihipertensivo",
      "lote": "LOTE2024007",
      "disponibilidad": true,
      "fabricante": "CardioFarm"
    },
    {
      "medicamento_id": "med008",
      "nombre": "Metformina",
      "principio_activo": "Metformina Clorhidrato",
      "concentracion": "850 mg",
      "tipo": "Antidiabético Oral",
      "lote": "LOTE2024008",
      "disponibilidad": true,
      "fabricante": "EndoMed"
    },
    {
      "medicamento_id": "med009",
      "nombre": "Atorvastatina",
      "principio_activo": "Atorvastatina Cálcica",
      "concentracion": "20 mg",
      "tipo": "Hipolipemiante",
      "lote": "LOTE2024009",
      "disponibilidad": true,
      "fabricante": "HealthyLife Pharma"
    },
    {
      "medicamento_id": "med010",
      "nombre": "Morfina",
      "principio_activo": "Morfina Sulfato",
      "concentracion": "10 mg/ml",
      "tipo": "Analgésico Opioide",
      "lote": "LOTE2024010",
      "disponibilidad": true,
      "fabricante": "FarmaDolor S.A."
    },
    {
      "medicamento_id": "med011",
      "nombre": "Diazepam",
      "principio_activo": "Diazepam",
      "concentracion": "10 mg",
      "tipo": "Ansiolítico / Sedante",
      "lote": "LOTE2024011",
      "disponibilidad": true,
      "fabricante": "NeuroCare Labs"
    },
    {
      "medicamento_id": "med012",
      "nombre": "Heparina",
      "principio_activo": "Heparina Sódica",
      "concentracion": "5000 UI/ml",
      "tipo": "Anticoagulante",
      "lote": "LOTE2024012",
      "disponibilidad": true,
      "fabricante": "CoagulaPharm"
    },
    {
      "medicamento_id": "med013",
      "nombre": "Dexametasona",
      "principio_activo": "Dexametasona",
      "concentracion": "4 mg/ml",
      "tipo": "Corticoide / Antiinflamatorio",
      "lote": "LOTE2024013",
      "disponibilidad": true,
      "fabricante": "Steroidix"
    },
    {
      "medicamento_id": "med014",
      "nombre": "Insulina Glargina",
      "principio_activo": "Insulina Glargina",
      "concentracion": "100 UI/ml",
      "tipo": "Insulina",
      "lote": "LOTE2024014",
      "disponibilidad": true,
      "fabricante": "DiabCare"
    },
    {
      "medicamento_id": "med015",
      "nombre": "Ranitidina",
      "principio_activo": "Ranitidina Clorhidrato",
      "concentracion": "150 mg",
      "tipo": "Antiácido / Antiulceroso",
      "lote": "LOTE2024015",
      "disponibilidad": true,
      "fabricante": "GastroFarm"
    },
    {
      "medicamento_id": "med016",
      "nombre": "Clopidogrel",
      "principio_activo": "Clopidogrel Bisulfato",
      "concentracion": "75 mg",
      "tipo": "Antiagregante Plaquetario",
      "lote": "LOTE2024016",
      "disponibilidad": true,
      "fabricante": "CardioPrevent"
    },
    {
      "medicamento_id": "med017",
      "nombre": "Digoxina",
      "principio_activo": "Digoxina",
      "concentracion": "0.25 mg",
      "tipo": "Cardiotónico",
      "lote": "LOTE2024017",
      "disponibilidad": true,
      "fabricante": "HeartBeat Labs"
    },
    {
      "medicamento_id": "med018",
      "nombre": "Furosemida",
      "principio_activo": "Furosemida",
      "concentracion": "40 mg",
      "tipo": "Diurético",
      "lote": "LOTE2024018",
      "disponibilidad": true,
      "fabricante": "HydroPharm"
    },
    {
      "medicamento_id": "med019",
      "nombre": "Ciprofloxacino",
      "principio_activo": "Ciprofloxacino",
      "concentracion": "500 mg",
      "tipo": "Antibiótico",
      "lote": "LOTE2024019",
      "disponibilidad": true,
      "fabricante": "InfectioCare"
    },
    {
      "medicamento_id": "med020",
      "nombre": "Vancomicina",
      "principio_activo": "Vancomicina",
      "concentracion": "500 mg",
      "tipo": "Antibiótico",
      "lote": "LOTE2024020",
      "disponibilidad": true,
      "fabricante": "GramPositive Labs"
    },
    {
      "medicamento_id": "med021",
      "nombre": "Ondansetrón",
      "principio_activo": "Ondansetrón",
      "concentracion": "8 mg",
      "tipo": "Antiemético",
      "lote": "LOTE2024021",
      "disponibilidad": true,
      "fabricante": "VomitStop Pharma"
    },
    {
      "medicamento_id": "med022",
      "nombre": "Tramadol",
      "principio_activo": "Tramadol Clorhidrato",
      "concentracion": "50 mg",
      "tipo": "Analgésico Opioide",
      "lote": "LOTE2024022",
      "disponibilidad": true,
      "fabricante": "DolorControl"
    },
    {
      "medicamento_id": "med023",
      "nombre": "Propofol",
      "principio_activo": "Propofol",
      "concentracion": "10 mg/ml",
      "tipo": "Anestésico Intravenoso",
      "lote": "LOTE2024023",
      "disponibilidad": true,
      "fabricante": "Anestesia Segura S.A."
    },
    {
      "medicamento_id": "med024",
      "nombre": "Midazolam",
      "principio_activo": "Midazolam",
      "concentracion": "5 mg/ml",
      "tipo": "Sedante / Ansiolítico",
      "lote": "LOTE2024024",
      "disponibilidad": true,
      "fabricante": "Sedation Pharma"
    },
    {
      "medicamento_id": "med025",
      "nombre": "Sodio Cloruro 0.9%",
      "principio_activo": "Cloruro de Sodio",
      "concentracion": "0.9%",
      "tipo": "Solución Intravenosa",
      "lote": "LOTE2024025",
      "disponibilidad": true,
      "fabricante": "FluidLife Solutions"
    },
    {
      "medicamento_id": "med026",
      "nombre": "Glucosa 5%",
      "principio_activo": "Dextrosa",
      "concentracion": "5%",
      "tipo": "Solución Intravenosa / Nutrición",
      "lote": "LOTE2024026",
      "disponibilidad": true,
      "fabricante": "NutriMed"
    },
    {
      "medicamento_id": "med027",
      "nombre": "Potasio Cloruro",
      "principio_activo": "Cloruro de Potasio",
      "concentracion": "20 mEq/10ml",
      "tipo": "Electrolito",
      "lote": "LOTE2024027",
      "disponibilidad": true,
      "fabricante": "Electrolyte Plus"
    },
    {
      "medicamento_id": "med028",
      "nombre": "Adrenalina",
      "principio_activo": "Epinefrina",
      "concentracion": "1 mg/ml",
      "tipo": "Estimulante Adrenérgico / Emergencia",
      "lote": "LOTE2024028",
      "disponibilidad": true,
      "fabricante": "EmergenCare"
    },
    {
      "medicamento_id": "med029",
      "nombre": "Atropina",
      "principio_activo": "Atropina Sulfato",
      "concentracion": "1 mg/ml",
      "tipo": "Anticolinérgico / Emergencia",
      "lote": "LOTE2024029",
      "disponibilidad": true,
      "fabricante": "VitaMedic"
    },
    {
      "medicamento_id": "med030",
      "nombre": "Verapamilo",
      "principio_activo": "Verapamilo",
      "concentracion": "80 mg",
      "tipo": "Antiarrítmico / Antihipertensivo",
      "lote": "LOTE2024030",
      "disponibilidad": true,
      "fabricante": "RhythmCare"
    },
    {
      "medicamento_id": "med031",
      "nombre": "Amlodipino",
      "principio_activo": "Amlodipino Besilato",
      "concentracion": "5 mg",
      "tipo": "Antihipertensivo",
      "lote": "LOTE2024031",
      "disponibilidad": true,
      "fabricante": "TensioMed"
    },
    {
      "medicamento_id": "med032",
      "nombre": "Simvastatina",
      "principio_activo": "Simvastatina",
      "concentracion": "20 mg",
      "tipo": "Hipolipemiante",
      "lote": "LOTE2024032",
      "disponibilidad": true,
      "fabricante": "Colesterol Control"
    },
    {
      "medicamento_id": "med033",
      "nombre": "Warfarina",
      "principio_activo": "Warfarina Sódica",
      "concentracion": "5 mg",
      "tipo": "Anticoagulante Oral",
      "lote": "LOTE2024033",
      "disponibilidad": true,
      "fabricante": "CoagulaSafe"
    },
    {
      "medicamento_id": "med034",
      "nombre": "Levofloxacino",
      "principio_activo": "Levofloxacino",
      "concentracion": "500 mg",
      "tipo": "Antibiótico",
      "lote": "LOTE2024034",
      "disponibilidad": true,
      "fabricante": "RespiraPharma"
    },
    {
      "medicamento_id": "med035",
      "nombre": "Metronidazol",
      "principio_activo": "Metronidazol",
      "concentracion": "500 mg",
      "tipo": "Antibiótico / Antiparasitario",
      "lote": "LOTE2024035",
      "disponibilidad": true,
      "fabricante": "GastroGuard"
    },
    {
      "medicamento_id": "med036",
      "nombre": "Fluconazol",
      "principio_activo": "Fluconazol",
      "concentracion": "150 mg",
      "tipo": "Antifúngico",
      "lote": "LOTE2024036",
      "disponibilidad": true,
      "fabricante": "FungoStop"
    },
    {
      "medicamento_id": "med037",
      "nombre": "Aciclovir",
      "principio_activo": "Aciclovir",
      "concentracion": "200 mg",
      "tipo": "Antiviral",
      "lote": "LOTE2024037",
      "disponibilidad": true,
      "fabricante": "VirusShield"
    },
    {
      "medicamento_id": "med038",
      "nombre": "Gabapentina",
      "principio_activo": "Gabapentina",
      "concentracion": "300 mg",
      "tipo": "Anticonvulsivante / Neuropático",
      "lote": "LOTE2024038",
      "disponibilidad": true,
      "fabricante": "NeuroRelief"
    },
    {
      "medicamento_id": "med039",
      "nombre": "Pregabalina",
      "principio_activo": "Pregabalina",
      "concentracion": "75 mg",
      "tipo": "Anticonvulsivante / Neuropático",
      "lote": "LOTE2024039",
      "disponibilidad": true,
      "fabricante": "NerveCalm"
    },
    {
      "medicamento_id": "med040",
      "nombre": "Escopolamina (Butilbromuro)",
      "principio_activo": "Butilbromuro de Escopolamina",
      "concentracion": "20 mg",
      "tipo": "Antiespasmódico",
      "lote": "LOTE2024040",
      "disponibilidad": true,
      "fabricante": "SpasmoFree"
    },
    {
      "medicamento_id": "med041",
      "nombre": "Tramadol + Paracetamol",
      "principio_activo": "Tramadol Clorhidrato + Paracetamol",
      "concentracion": "37.5 mg / 325 mg",
      "tipo": "Analgésico Combinado",
      "lote": "LOTE2024041",
      "disponibilidad": true,
      "fabricante": "DolorTotal"
    },
    {
      "medicamento_id": "med042",
      "nombre": "Vitamina K",
      "principio_activo": "Fitomenadiona",
      "concentracion": "10 mg/ml",
      "tipo": "Vitamina / Coagulante",
      "lote": "LOTE2024042",
      "disponibilidad": true,
      "fabricante": "Vitaminex"
    },
    {
      "medicamento_id": "med043",
      "nombre": "Sulfato de Magnesio",
      "principio_activo": "Sulfato de Magnesio",
      "concentracion": "20%",
      "tipo": "Electrolito / Anticonvulsivante",
      "lote": "LOTE2024043",
      "disponibilidad": true,
      "fabricante": "MineralBalance"
    },
    {
      "medicamento_id": "med044",
      "nombre": "Dopamina",
      "principio_activo": "Dopamina Clorhidrato",
      "concentracion": "40 mg/ml",
      "tipo": "Vasopresor / Inotrópico",
      "lote": "LOTE2024044",
      "disponibilidad": true,
      "fabricante": "CriticalCare Pharma"
    },
    {
      "medicamento_id": "med045",
      "nombre": "Norepinefrina",
      "principio_activo": "Norepinefrina Bitartrato",
      "concentracion": "4 mg/4ml",
      "tipo": "Vasopresor",
      "lote": "LOTE2024045",
      "disponibilidad": true,
      "fabricante": "LifeSupport Labs"
    },
    {
      "medicamento_id": "med046",
      "nombre": "Fentanilo",
      "principio_activo": "Fentanilo Citrato",
      "concentracion": "50 mcg/ml",
      "tipo": "Analgésico Opioide / Anestésico",
      "lote": "LOTE2024046",
      "disponibilidad": true,
      "fabricante": "PainRelief Strong"
    },
    {
      "medicamento_id": "med047",
      "nombre": "Remifentanilo",
      "principio_activo": "Remifentanilo Clorhidrato",
      "concentracion": "2 mg",
      "tipo": "Analgésico Opioide / Anestésico",
      "lote": "LOTE2024047",
      "disponibilidad": true,
      "fabricante": "UltraFast Anesthesia"
    },
    {
      "medicamento_id": "med048",
      "nombre": "Rocuronio",
      "principio_activo": "Rocuronio Bromuro",
      "concentracion": "10 mg/ml",
      "tipo": "Relajante Muscular",
      "lote": "LOTE2024048",
      "disponibilidad": true,
      "fabricante": "MuscleControl Pharma"
    },
    {
      "medicamento_id": "med049",
      "nombre": "Succinoilcolina",
      "principio_activo": "Cloruro de Succinilcolina",
      "concentracion": "100 mg",
      "tipo": "Relajante Muscular (Despolarizante)",
      "lote": "LOTE2024049",
      "disponibilidad": true,
      "fabricante": "EmergencyRelax"
    },
    {
      "medicamento_id": "med050",
      "nombre": "Lidocaína",
      "principio_activo": "Lidocaína Clorhidrato",
      "concentracion": "2%",
      "tipo": "Anestésico Local / Antiarrítmico",
      "lote": "LOTE2024050",
      "disponibilidad": true,
      "fabricante": "NumbSense Labs"
    },
    {
      "medicamento_id": "med051",
      "nombre": "Bupivacaína",
      "principio_activo": "Bupivacaína Clorhidrato",
      "concentracion": "0.5%",
      "tipo": "Anestésico Local",
      "lote": "LOTE2024051",
      "disponibilidad": true,
      "fabricante": "RegionalBlock Pharma"
    },
    {
      "medicamento_id": "med052",
      "nombre": "Oxitocina",
      "principio_activo": "Oxitocina",
      "concentracion": "10 UI/ml",
      "tipo": "Uterotónico",
      "lote": "LOTE2024052",
      "disponibilidad": true,
      "fabricante": "ObGyn Meds"
    },
    {
      "medicamento_id": "med053",
      "nombre": "Misoprostol",
      "principio_activo": "Misoprostol",
      "concentracion": "200 mcg",
      "tipo": "Uterotónico / Protector Gástrico",
      "lote": "LOTE2024053",
      "disponibilidad": true,
      "fabricante": "Maternity Care"
    },
    {
      "medicamento_id": "med054",
      "nombre": "Vitamina C",
      "principio_activo": "Ácido Ascórbico",
      "concentracion": "500 mg",
      "tipo": "Vitamina",
      "lote": "LOTE2024054",
      "disponibilidad": true,
      "fabricante": "VitaSupplements"
    },
    {
      "medicamento_id": "med055",
      "nombre": "Clorfenamina",
      "principio_activo": "Clorfenamina Maleato",
      "concentracion": "4 mg",
      "tipo": "Antihistamínico",
      "lote": "LOTE2024055",
      "disponibilidad": true,
      "fabricante": "Allergy Relief"
    },
    {
      "medicamento_id": "med056",
      "nombre": "Enalapril",
      "principio_activo": "Enalapril Maleato",
      "concentracion": "10 mg",
      "tipo": "IECA / Antihipertensivo",
      "lote": "LOTE2024056",
      "disponibilidad": true,
      "fabricante": "BloodPressure Pharma"
    },
    {
      "medicamento_id": "med057",
      "nombre": "Hidroclorotiazida",
      "principio_activo": "Hidroclorotiazida",
      "concentracion": "25 mg",
      "tipo": "Diurético Tiazídico",
      "lote": "LOTE2024057",
      "disponibilidad": true,
      "fabricante": "WaterBalance Labs"
    },
    {
      "medicamento_id": "med058",
      "nombre": "Sertralina",
      "principio_activo": "Sertralina Clorhidrato",
      "concentracion": "50 mg",
      "tipo": "Antidepresivo ISRS",
      "lote": "LOTE2024058",
      "disponibilidad": true,
      "fabricante": "MoodPlus Pharma"
    },
    {
      "medicamento_id": "med059",
      "nombre": "Quetiapina",
      "principio_activo": "Quetiapina Fumarato",
      "concentracion": "100 mg",
      "tipo": "Antipsicótico",
      "lote": "LOTE2024059",
      "disponibilidad": true,
      "fabricante": "MindClear Labs"
    },
    {
      "medicamento_id": "med060",
      "nombre": "Metoclopramida",
      "principio_activo": "Metoclopramida Clorhidrato",
      "concentracion": "10 mg",
      "tipo": "Procinético / Antiemético",
      "lote": "LOTE2024060",
      "disponibilidad": true,
      "fabricante": "Digestive Aid"
    }
  ]);


  // Validacion Presentacion 

  db.createCollection("Presentaciones", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "tipo_presentacion",
          "id_medicamento"
        ],
        properties: {
          _id: {
            bsonType: "objectId" // MongoDB will auto-generate this
          },
          tipo_presentacion: {
            bsonType: "string",
            minLength: 1,
            maxLength: 100
          },
          id_medicamento: {
            bsonType: "string", // Changed to string to match medicamento_id
            description: "Referencia al campo 'medicamento_id' del medicamento en la colección Medicamentos."
          }
        }
      }
    },
    validationLevel: "strict",
    validationAction: "error"
  });


  // Coleccion Presentacion:
  db.Presentaciones.insertMany([
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med001"
    },
    {
      "tipo_presentacion": "Solución oral",
      "id_medicamento": "med001"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med002"
    },
    {
      "tipo_presentacion": "Cápsula",
      "id_medicamento": "med003"
    },
    {
      "tipo_presentacion": "Polvo para solución inyectable",
      "id_medicamento": "med004"
    },
    {
      "tipo_presentacion": "Cápsula",
      "id_medicamento": "med005"
    },
    {
      "tipo_presentacion": "Solución para nebulizar",
      "id_medicamento": "med006"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med007"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med008"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med009"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med010"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med011"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med012"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med013"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med014"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med015"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med016"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med017"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med018"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med018"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med019"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med019"
    },
    {
      "tipo_presentacion": "Polvo para solución inyectable",
      "id_medicamento": "med020"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med021"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med021"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med022"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med023"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med024"
    },
    {
      "tipo_presentacion": "Solución intravenosa",
      "id_medicamento": "med025"
    },
    {
      "tipo_presentacion": "Solución intravenosa",
      "id_medicamento": "med026"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med027"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med028"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med029"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med030"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med031"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med032"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med033"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med034"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med034"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med035"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med035"
    },
    {
      "tipo_presentacion": "Cápsula",
      "id_medicamento": "med036"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med037"
    },
    {
      "tipo_presentacion": "Cápsula",
      "id_medicamento": "med038"
    },
    {
      "tipo_presentacion": "Cápsula",
      "id_medicamento": "med039"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med040"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med041"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med042"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med043"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med044"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med045"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med046"
    },
    {
      "tipo_presentacion": "Parche transdérmico",
      "id_medicamento": "med046"
    },
    {
      "tipo_presentacion": "Polvo para reconstituir a solución inyectable",
      "id_medicamento": "med047"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med048"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med049"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med050"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med051"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med052"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med053"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med054"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med055"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med056"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med057"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med058"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med059"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med060"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med010"
    },
    {
      "tipo_presentacion": "Tableta sublingual",
      "id_medicamento": "med011"
    },
    {
      "tipo_presentacion": "Jarabe",
      "id_medicamento": "med011"
    },
    {
      "tipo_presentacion": "Tableta",
      "id_medicamento": "med012"
    },
    {
      "tipo_presentacion": "Parche transdérmico",
      "id_medicamento": "med046"
    },
    {
      "tipo_presentacion": "Solución inyectable",
      "id_medicamento": "med046"
    },
    {
      "tipo_presentacion": "Cápsula dura",
      "id_medicamento": "med058"
    },
    {
      "tipo_presentacion": "Tableta de liberación prolongada",
      "id_medicamento": "med058"
    },
    {
      "tipo_presentacion": "Polvo para reconstituir a solución inyectable",
      "id_medicamento": "med047"
    },
    {
      "tipo_presentacion": "Tableta de liberación modificada",
      "id_medicamento": "med008"
    },
    {
      "tipo_presentacion": "Cápsula de liberación modificada",
      "id_medicamento": "med008"
    }
]);

// Validacion Proovedores

db.createCollection("Proveedores", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "proveedor_id",
          "nombre_empresa",
          "nit",
          "tipo",
          "fecha",
          "terminos_pago"
        ],
        properties: {
          _id: {
            bsonType: "objectId" // MongoDB will auto-generate this
          },
          proveedor_id: {
            bsonType: "string", // Your custom ID (e.g., "prov001")
            minLength: 1,
            maxLength: 50
          },
          nombre_empresa: {
            bsonType: "string",
            minLength: 1,
            maxLength: 200
          },
          nit: {
            bsonType: "string", // NITs can contain non-numeric characters, so string is best
            minLength: 5,
            maxLength: 20
          },
          tipo: {
            bsonType: "string",
            minLength: 1,
            maxLength: 100
          },
          fecha: {
            bsonType: "date", // Stores as an ISODate object
            description: "Fecha de inicio de relación con el proveedor"
          },
          terminos_pago: {
            bsonType: "string",
            minLength: 1,
            maxLength: 100
          }
        }
      }
    },
    validationLevel: "strict",
    validationAction: "error"
  });


  //Colecciones Proveedores

  db.Proveedores.insertMany([
    {
      "proveedor_id": "prov001",
      "nombre_empresa": "Enka de Colombia S.A.",
      "nit": "890903474",
      "tipo": "Suministros textiles",
      "fecha": ISODate("2023-01-15T00:00:00Z"),
      "terminos_pago": "Neto 30 días"
    },
    {
      "proveedor_id": "prov002",
      "nombre_empresa": "Bayer Cropscience S.A.",
      "nit": "800243792",
      "tipo": "Materiales de laboratorio",
      "fecha": ISODate("2023-02-20T00:00:00Z"),
      "terminos_pago": "Neto 45 días"
    },
    {
      "proveedor_id": "prov003",
      "nombre_empresa": "Laboratorios Baxter S.A.",
      "nit": "890300292",
      "tipo": "Soluciones intravenosas",
      "fecha": ISODate("2023-03-10T00:00:00Z"),
      "terminos_pago": "Neto 60 días"
    },
    {
      "proveedor_id": "prov004",
      "nombre_empresa": "Abbott Laboratorios de Colombia S.A.",
      "nit": "860002134",
      "tipo": "Diagnósticos y dispositivos",
      "fecha": ISODate("2023-04-05T00:00:00Z"),
      "terminos_pago": "Neto 30 días"
    },
    {
      "proveedor_id": "prov005",
      "nombre_empresa": "Dow Química de Colombia S.A.",
      "nit": "860014659",
      "tipo": "Productos de limpieza",
      "fecha": ISODate("2023-05-12T00:00:00Z"),
      "terminos_pago": "Neto 45 días"
    },
    {
      "proveedor_id": "prov006",
      "nombre_empresa": "Schering Colombiana S.A.",
      "nit": "860003220",
      "tipo": "Productos farmacéuticos",
      "fecha": ISODate("2023-06-18T00:00:00Z"),
      "terminos_pago": "Neto 60 días"
    },
    {
      "proveedor_id": "prov007",
      "nombre_empresa": "Bayer S.A.",
      "nit": "860001942",
      "tipo": "Farmacéuticos y OTC",
      "fecha": ISODate("2023-07-22T00:00:00Z"),
      "terminos_pago": "Neto 30 días"
    },
    {
      "proveedor_id": "prov008",
      "nombre_empresa": "Glaxosmithkline Colombia S.A.",
      "nit": "830012969",
      "tipo": "Productos farmacéuticos",
      "fecha": ISODate("2023-08-01T00:00:00Z"),
      "terminos_pago": "Neto 45 días"
    },
    {
      "proveedor_id": "prov009",
      "nombre_empresa": "Pro Nova Ltda S.A.",
      "nit": "800077380",
      "tipo": "Servicios de tecnología",
      "fecha": ISODate("2023-09-09T00:00:00Z"),
      "terminos_pago": "Neto 30 días"
    },
    {
      "proveedor_id": "prov010",
      "nombre_empresa": "Schering Plough S.A.",
      "nit": "860002392",
      "tipo": "Productos farmacéuticos",
      "fecha": ISODate("2023-10-14T00:00:00Z"),
      "terminos_pago": "Neto 60 días"
    },
    {
      "proveedor_id": "prov011",
      "nombre_empresa": "Griffin de Colombia S.A.",
      "nit": "802006840",
      "tipo": "Material de oficina",
      "fecha": ISODate("2023-11-25T00:00:00Z"),
      "terminos_pago": "Neto 30 días"
    },
    {
      "proveedor_id": "prov012",
      "nombre_empresa": "Procaps S.A.",
      "nit": "890106527",
      "tipo": "Productos farmacéuticos",
      "fecha": ISODate("2023-12-01T00:00:00Z"),
      "terminos_pago": "Neto 45 días"
    },
    {
      "proveedor_id": "prov013",
      "nombre_empresa": "W-L Llc S.A.",
      "nit": "860005096",
      "tipo": "Equipos médicos",
      "fecha": ISODate("2024-01-08T00:00:00Z"),
      "terminos_pago": "Neto 30 días"
    },
    {
      "proveedor_id": "prov014",
      "nombre_empresa": "Dupont de Colombia S.A.",
      "nit": "890100454",
      "tipo": "Químicos industriales",
      "fecha": ISODate("2024-02-19T00:00:00Z"),
      "terminos_pago": "Neto 60 días"
    },
    {
      "proveedor_id": "prov015",
      "nombre_empresa": "Flexo Spring S.A.",
      "nit": "800218958",
      "tipo": "Mantenimiento y repuestos",
      "fecha": ISODate("2024-03-03T00:00:00Z"),
      "terminos_pago": "Neto 30 días"
    },
    {
      "proveedor_id": "prov016",
      "nombre_empresa": "Boehringer Ingelheim S.A.",
      "nit": "860000753",
      "tipo": "Productos farmacéuticos",
      "fecha": ISODate("2024-04-16T00:00:00Z"),
      "terminos_pago": "Neto 45 días"
    },
    {
      "proveedor_id": "prov017",
      "nombre_empresa": "Laboratorios Genéricos Farmacéuticos S.A.",
      "nit": "860022139",
      "tipo": "Medicamentos genéricos",
      "fecha": ISODate("2024-05-21T00:00:00Z"),
      "terminos_pago": "Neto 30 días"
    },
    {
      "proveedor_id": "prov018",
      "nombre_empresa": "Aga Fano Fabrica Nacional de Oxigeno S.A.",
      "nit": "860005114",
      "tipo": "Gases medicinales",
      "fecha": ISODate("2024-06-01T00:00:00Z"),
      "terminos_pago": "Neto 30 días"
    },
    {
      "proveedor_id": "prov019",
      "nombre_empresa": "Merck S.A.",
      "nit": "860000580",
      "tipo": "Reactivos y químicos",
      "fecha": ISODate("2024-07-07T00:00:00Z"),
      "terminos_pago": "Neto 45 días"
    },
    {
      "proveedor_id": "prov020",
      "nombre_empresa": "Firmenich S.A.",
      "nit": "860030605",
      "tipo": "Insumos de aseo",
      "fecha": ISODate("2024-08-11T00:00:00Z"),
      "terminos_pago": "Neto 30 días"
    },
    {
      "proveedor_id": "prov021",
      "nombre_empresa": "Henkel Colombiana S.A.",
      "nit": "860000751",
      "tipo": "Productos de limpieza",
      "fecha": ISODate("2024-09-02T00:00:00Z"),
      "terminos_pago": "Neto 30 días"
    },
    {
      "proveedor_id": "prov022",
      "nombre_empresa": "Aventis Pharma S.A.",
      "nit": "830010337",
      "tipo": "Productos farmacéuticos",
      "fecha": ISODate("2024-10-10T00:00:00Z"),
      "terminos_pago": "Neto 60 días"
    },
    {
      "proveedor_id": "prov023",
      "nombre_empresa": "Sanofi Synthelabo de Colombia S.A.",
      "nit": "800246382",
      "tipo": "Productos farmacéuticos",
      "fecha": ISODate("2024-11-15T00:00:00Z"),
      "terminos_pago": "Neto 45 días"
    },
    {
      "proveedor_id": "prov024",
      "nombre_empresa": "Reckitt Benckiser Colombia S.A.",
      "nit": "890300684",
      "tipo": "Productos de higiene y desinfección",
      "fecha": ISODate("2024-12-20T00:00:00Z"),
      "terminos_pago": "Neto 30 días"
    }
]);

  // Coleccion hospitales:
  db.Hospitales.insertMany([
    {
      "hospital_id": "hos001",
      "nombre": "Hospital Universitario de Santander (HUS)",
      "direccion": "Cra. 33 #28-126",
      "telefono": "(607) 6912010",
      "codigo_habilitacion": "6800100792-01",
      "tipo_institucion": "Pública Departamental",
      "nivel_complejidad": "Mediana y Alta Complejidad"
    },
    {
      "hospital_id": "hos002",
      "nombre": "Los Comuneros Hospital Universitario de Bucaramanga",
      "direccion": "Ak 27 #30 -15",
      "telefono": "(607) 6343536",
      "codigo_habilitacion": "900240018",
      "tipo_institucion": "Pública Universitaria",
      "nivel_complejidad": "Alta Complejidad"
    },
    {
      "hospital_id": "hos003",
      "nombre": "Clínica Materno Infantil San Luis",
      "direccion": "Cra. 26 #48-56",
      "telefono": "(607) 6430026",
      "codigo_habilitacion": "6800100201-01",
      "tipo_institucion": "Privada",
      "nivel_complejidad": "Alta Complejidad"
    }
]);



  // Validacion Areas

  db.createCollection("Areas", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "area_id",
          "tipo_area",
          "descripcion",
          "estado",
          "id_hospital"
        ],
        properties: {
          _id: {
            bsonType: "objectId" 
          },
          area_id: {
            bsonType: "string", 
            minLength: 1,
            maxLength: 50
          },
          tipo_area: {
            bsonType: "string",
            enum: ["Asistencial", "Apoyo", "Quirúrgico y Obstétrico", "Hospitalización", "General"], 
            description: "Tipo de área funcional del hospital"
          },
          descripcion: {
            bsonType: "string",
            minLength: 1,
            maxLength: 255
          },
          estado: {
            bsonType: "string",
            enum: ["Activo", "Inactivo", "Mantenimiento"], 
            description: "Estado actual del área"
          },
          id_hospital: {
            bsonType: "string", 
            description: "Referencia al campo 'hospital_id' del hospital al que pertenece el área."
          }
        }
      }
    },
    validationLevel: "strict",
    validationAction: "error"
  });


  // Coleccion Areas

  db.Areas.insertMany([
    {
      "area_id": "area001",
      "tipo_area": "Asistencial",
      "descripcion": "Servicios ambulatorios generales",
      "estado": "Activo",
      "id_hospital": "hos001"
    },
    {
      "area_id": "area002",
      "tipo_area": "Asistencial",
      "descripcion": "Servicios de urgencias",
      "estado": "Activo",
      "id_hospital": "hos001"
    },
    {
      "area_id": "area003",
      "tipo_area": "Apoyo",
      "descripcion": "Laboratorio clínico para diagnósticos",
      "estado": "Activo",
      "id_hospital": "hos001"
    },
    {
      "area_id": "area004",
      "tipo_area": "Apoyo",
      "descripcion": "Banco de sangre para transfusiones",
      "estado": "Activo",
      "id_hospital": "hos001"
    },
    {
      "area_id": "area005",
      "tipo_area": "Apoyo",
      "descripcion": "Radiología e imágenes diagnósticas",
      "estado": "Activo",
      "id_hospital": "hos001"
    },
    {
      "area_id": "area006",
      "tipo_area": "Apoyo",
      "descripcion": "Farmacia hospitalaria",
      "estado": "Activo",
      "id_hospital": "hos001"
    },
    {
      "area_id": "area007",
      "tipo_area": "Quirúrgico y Obstétrico",
      "descripcion": "Cirugía general",
      "estado": "Activo",
      "id_hospital": "hos001"
    },
    {
      "area_id": "area008",
      "tipo_area": "Quirúrgico y Obstétrico",
      "descripcion": "Obstetricia",
      "estado": "Activo",
      "id_hospital": "hos001"
    },
    {
      "area_id": "area009",
      "tipo_area": "Hospitalización",
      "descripcion": "Hospitalización general",
      "estado": "Activo",
      "id_hospital": "hos001"
    },
    {
      "area_id": "area010",
      "tipo_area": "Hospitalización",
      "descripcion": "Cuidados Intensivos",
      "estado": "Activo",
      "id_hospital": "hos001"
    },
    {
      "area_id": "area011",
      "tipo_area": "General",
      "descripcion": "Cocina del hospital",
      "estado": "Activo",
      "id_hospital": "hos001"
    },
    {
      "area_id": "area012",
      "tipo_area": "General",
      "descripcion": "Lavandería del hospital",
      "estado": "Activo",
      "id_hospital": "hos001"
    },
    {
      "area_id": "area013",
      "tipo_area": "Asistencial",
      "descripcion": "Servicios ambulatorios especializados",
      "estado": "Activo",
      "id_hospital": "hos002"
    },
    {
      "area_id": "area014",
      "tipo_area": "Asistencial",
      "descripcion": "Urgencias pediátricas",
      "estado": "Activo",
      "id_hospital": "hos002"
    },
    {
      "area_id": "area015",
      "tipo_area": "Apoyo",
      "descripcion": "Hemodinamia",
      "estado": "Activo",
      "id_hospital": "hos002"
    },
    {
      "area_id": "area016",
      "tipo_area": "Apoyo",
      "descripcion": "Gastroenterología y endoscopia diagnóstica",
      "estado": "Activo",
      "id_hospital": "hos002"
    },
    {
      "area_id": "area017",
      "tipo_area": "Apoyo",
      "descripcion": "Laboratorio de patología",
      "estado": "Activo",
      "id_hospital": "hos002"
    },
    {
      "area_id": "area018",
      "tipo_area": "Apoyo",
      "descripcion": "Nutrición y dietética",
      "estado": "Activo",
      "id_hospital": "hos002"
    },
    {
      "area_id": "area019",
      "tipo_area": "Quirúrgico y Obstétrico",
      "descripcion": "Cirugía ambulatoria",
      "estado": "Activo",
      "id_hospital": "hos002"
    },
    {
      "area_id": "area020",
      "tipo_area": "Quirúrgico y Obstétrico",
      "descripcion": "Central de esterilización",
      "estado": "Activo",
      "id_hospital": "hos002"
    },
    {
      "area_id": "area021",
      "tipo_area": "Hospitalización",
      "descripcion": "Cuidado neonatal - perinatal",
      "estado": "Activo",
      "id_hospital": "hos002"
    },
    {
      "area_id": "area022",
      "tipo_area": "Hospitalización",
      "descripcion": "Cuidados Intensivos Pediátricos",
      "estado": "Activo",
      "id_hospital": "hos002"
    },
    {
      "area_id": "area023",
      "tipo_area": "General",
      "descripcion": "Almacén general",
      "estado": "Activo",
      "id_hospital": "hos002"
    },
    {
      "area_id": "area024",
      "tipo_area": "General",
      "descripcion": "Mantenimiento general",
      "estado": "Activo",
      "id_hospital": "hos002"
    },
    {
      "area_id": "area025",
      "tipo_area": "Asistencial",
      "descripcion": "Consulta externa",
      "estado": "Activo",
      "id_hospital": "hos003"
    },
    {
      "area_id": "area026",
      "tipo_area": "Asistencial",
      "descripcion": "Urgencias ginecológicas",
      "estado": "Activo",
      "id_hospital": "hos003"
    },
    {
      "area_id": "area027",
      "tipo_area": "Apoyo",
      "descripcion": "Archivo de historias clínicas",
      "estado": "Activo",
      "id_hospital": "hos003"
    },
    {
      "area_id": "area028",
      "tipo_area": "Apoyo",
      "descripcion": "Comunicaciones",
      "estado": "Activo",
      "id_hospital": "hos003"
    },
    {
      "area_id": "area029",
      "tipo_area": "Apoyo",
      "descripcion": "Terapias y rehabilitación",
      "estado": "Activo",
      "id_hospital": "hos003"
    },
    {
      "area_id": "area030",
      "tipo_area": "Apoyo",
      "descripcion": "Unidad Renal",
      "estado": "Activo",
      "id_hospital": "hos003"
    },
    {
      "area_id": "area031",
      "tipo_area": "Hospitalización",
      "descripcion": "Cuidados intermedios",
      "estado": "Activo",
      "id_hospital": "hos003"
    },
    {
      "area_id": "area032",
      "tipo_area": "General",
      "descripcion": "Vestuarios del personal",
      "estado": "Activo",
      "id_hospital": "hos003"
    }
]);




// Validacion Tratamientos

db.createCollection("Tratamientos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "tratamiento_id",
        "nombre",
        "descripcion",
        "costo",
        "duracion",
        "area_relacionada",
        "via_administracion",
        "FrecuenciaAplicacion"
      ],
      properties: {
        tratamiento_id: {
          bsonType: "string",
          description: "identificador único para el tratamiento y es requerido"
        },
        nombre: {
          bsonType: "string",
          description: "nombre del tratamiento y es requerido"
        },
        descripcion: {
          bsonType: "string",
          description: "descripción del tratamiento y es requerido"
        },
        costo: {
          bsonType: ["double", "int"], // ¡Este es el cambio clave para aceptar ambos tipos!
          description: "costo del tratamiento y es requerido"
        },
        duracion: {
          bsonType: "string",
          description: "duración estimada del tratamiento y es requerido"
        },
        area_relacionada: {
          bsonType: "string",
          description: "ID del área relacionada y es requerido"
        },
        via_administracion: {
          bsonType: "string",
          description: "vía de administración del tratamiento y es requerido"
        },
        FrecuenciaAplicacion: {
          bsonType: "int",
          description: "frecuencia de aplicación del tratamiento y es requerido"
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});



  // coleccion trataminetos

  db.Tratamientos.insertMany([
    {
      "tratamiento_id": "trat021",
      "nombre": "Manejo de Cetoacidosis Diabética",
      "descripcion": "Rehidratación intravenosa, insulinoterapia y corrección de desequilibrios electrolíticos en UCI.",
      "costo": 1800.00, // O incluso 1800 si tu driver lo envía como int
      "duracion": "2-5 días",
      "area_relacionada": "area010",
      "via_administracion": "Intravenosa",
      "FrecuenciaAplicacion": 24
    },
    {
      "tratamiento_id": "trat022",
      "nombre": "Colecistectomía Laparoscópica",
      "descripcion": "Extirpación de la vesícula biliar mediante cirugía mínimamente invasiva.",
      "costo": 2800.00,
      "duracion": "1-2 horas",
      "area_relacionada": "area007",
      "via_administracion": "N/A",
      "FrecuenciaAplicacion": 1
    },
    {
      "tratamiento_id": "trat023",
      "nombre": "Manejo de Sepsis y Choque Séptico",
      "descripcion": "Administración de antibióticos de amplio espectro, fluidos y vasopresores en UCI.",
      "costo": 4500.00,
      "duracion": "5-10 días",
      "area_relacionada": "area010",
      "via_administracion": "Intravenosa",
      "FrecuenciaAplicacion": 24
    },
    {
      "tratamiento_id": "trat024",
      "nombre": "Terapia de Reemplazo Renal Continua (CRRT)",
      "descripcion": "Procedimiento de diálisis lento y continuo para pacientes críticamente enfermos con falla renal aguda.",
      "costo": 3500.00,
      "duracion": "Variable (días)",
      "area_relacionada": "area010",
      "via_administracion": "Intravenosa",
      "FrecuenciaAplicacion": 1
    },
    {
      "tratamiento_id": "trat025",
      "nombre": "Broncoscopia Diagnóstica y Terapéutica",
      "descripcion": "Examen endoscópico de las vías respiratorias para diagnóstico o eliminación de cuerpos extraños.",
      "costo": 700.00,
      "duracion": "30-60 minutos",
      "area_relacionada": "area005",
      "via_administracion": "N/A",
      "FrecuenciaAplicacion": 1
    },
    {
      "tratamiento_id": "trat026",
      "nombre": "Manejo de Infarto Agudo de Miocardio",
      "descripcion": "Reperfusión coronaria (angioplastia o fibrinolisis) y manejo de complicaciones cardíacas.",
      "costo": 5000.00,
      "duracion": "3-7 días",
      "area_relacionada": "area015",
      "via_administracion": "Intravenosa/Intraarterial",
      "FrecuenciaAplicacion": 1
    },
    {
      "tratamiento_id": "trat027",
      "nombre": "Cirugía de Cataratas (Facoemulsificación)",
      "descripcion": "Extracción del cristalino opaco y reemplazo por lente intraocular.",
      "costo": 1500.00,
      "duracion": "30-45 minutos",
      "area_relacionada": "area019",
      "via_administracion": "N/A",
      "FrecuenciaAplicacion": 1
    },
    {
      "tratamiento_id": "trat028",
      "nombre": "Tratamiento de Glaucoma (Farmacológico)",
      "descripcion": "Uso de gotas oftálmicas para reducir la presión intraocular y prevenir daño al nervio óptico.",
      "costo": 50.00,
      "duracion": "Crónico",
      "area_relacionada": "area025",
      "via_administracion": "Tópica Oftálmica",
      "FrecuenciaAplicacion": 2
    },
    {
      "tratamiento_id": "trat029",
      "nombre": "Manejo de Esclerosis Múltiple (Modificadores de Enfermedad)",
      "descripcion": "Terapias que alteran el curso de la enfermedad para reducir recaídas y progresión.",
      "costo": 3000.00,
      "duracion": "Crónico",
      "area_relacionada": "area013",
      "via_administracion": "Subcutánea/Intravenosa",
      "FrecuenciaAplicacion": 1
    },
    {
      "tratamiento_id": "trat030",
      "nombre": "Fisioterapia Post-Quirúrgica",
      "descripcion": "Ejercicios y técnicas para restaurar la movilidad y fuerza después de una cirugía.",
      "costo": 70.00,
      "duracion": "2-12 semanas",
      "area_relacionada": "area029",
      "via_administracion": "N/A",
      "FrecuenciaAplicacion": 3
    },
    {
      "tratamiento_id": "trat031",
      "nombre": "Manejo de Convulsiones Refractarias",
      "descripcion": "Administración de anticonvulsivantes intravenosos y monitoreo continuo en UCI.",
      "costo": 1200.00,
      "duracion": "Variable (días)",
      "area_relacionada": "area010",
      "via_administracion": "Intravenosa",
      "FrecuenciaAplicacion": 24
    },
    {
      "tratamiento_id": "trat032",
      "nombre": "Endoscopia Digestiva Superior",
      "descripcion": "Examen del esófago, estómago y duodeno para diagnóstico de úlceras, gastritis, etc.",
      "costo": 450.00,
      "duracion": "20-30 minutos",
      "area_relacionada": "area016",
      "via_administracion": "N/A",
      "FrecuenciaAplicacion": 1
    },
    {
      "tratamiento_id": "trat033",
      "nombre": "Manejo de Quemaduras de Segundo Grado",
      "descripcion": "Limpieza de heridas, aplicación de apósitos especiales y manejo del dolor.",
      "costo": 300.00,
      "duracion": "1-3 semanas",
      "area_relacionada": "area002",
      "via_administracion": "Tópica/Oral",
      "FrecuenciaAplicacion": 2
    },
    {
      "tratamiento_id": "trat034",
      "nombre": "Terapia Ocupacional Pediátrica",
      "descripcion": "Intervenciones para mejorar habilidades motoras finas, juego y autonomía en niños.",
      "costo": 85.00,
      "duracion": "Meses",
      "area_relacionada": "area029",
      "via_administracion": "N/A",
      "FrecuenciaAplicacion": 2
    },
    {
      "tratamiento_id": "trat035",
      "nombre": "Manejo de Apnea del Sueño (CPAP)",
      "descripcion": "Uso de presión positiva continua en la vía aérea para mantenerla abierta durante el sueño.",
      "costo": 100.00,
      "duracion": "Crónico",
      "area_relacionada": "area001",
      "via_administracion": "N/A",
      "FrecuenciaAplicacion": 1
    },
    {
      "tratamiento_id": "trat036",
      "nombre": "Cirugía de Hernia Inguinal",
      "descripcion": "Reparación quirúrgica de una hernia en la región inguinal.",
      "costo": 1500.00,
      "duracion": "1-2 horas",
      "area_relacionada": "area007",
      "via_administracion": "N/A",
      "FrecuenciaAplicacion": 1
    },
    {
      "tratamiento_id": "trat037",
      "nombre": "Manejo de Insuficiencia Renal Aguda",
      "descripcion": "Soporte renal, manejo de líquidos y electrolitos, y tratamiento de la causa subyacente.",
      "costo": 1000.00,
      "duracion": "Variable (días/semanas)",
      "area_relacionada": "area010",
      "via_administracion": "Intravenosa",
      "FrecuenciaAplicacion": 24
    },
    {
      "tratamiento_id": "trat038",
      "nombre": "Tratamiento de Migraña Crónica",
      "descripcion": "Combinación de fármacos preventivos y abortivos, y terapias complementarias.",
      "costo": 110.00,
      "duracion": "Crónico",
      "area_relacionada": "area013",
      "via_administracion": "Oral/Subcutánea",
      "FrecuenciaAplicacion": 1
    },
    {
      "tratamiento_id": "trat039",
      "nombre": "Manejo de Varices con Escleroterapia",
      "descripcion": "Inyección de una solución para cerrar venas varicosas pequeñas y medianas.",
      "costo": 200.00,
      "duracion": "30-60 minutos",
      "area_relacionada": "area025",
      "via_administracion": "Inyectable",
      "FrecuenciaAplicacion": 1
    },
    {
      "tratamiento_id": "trat040",
      "nombre": "Terapia de Rehidratación Oral para Gastroenteritis",
      "descripcion": "Administración de soluciones de sales y azúcares para prevenir o tratar la deshidratación.",
      "costo": 15.00,
      "duracion": "1-3 días",
      "area_relacionada": "area002",
      "via_administracion": "Oral",
      "FrecuenciaAplicacion": 8
    }
]);




  // Validacion Administrativos
  db.createCollection("Administrativos", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "nombre",
          "telefono",
          "correo",
          "rol",
          "horario",
          "id_tipo_personal"
        ],
        properties: {
          _id: {
            bsonType: "string", // Definimos _id como string para tus IDs personalizados
            description: "identificador único para el administrativo (admXXX)"
          },
          nombre: {
            bsonType: "string",
            description: "nombre completo del personal administrativo"
          },
          telefono: {
            bsonType: "string",
            pattern: "^[0-9]{10}$", // Ejemplo: patrón para 10 dígitos numéricos
            description: "número de teléfono del administrativo"
          },
          correo: {
            bsonType: "string",
            pattern: "^.+@.+\\..+$", // Ejemplo: patrón básico para correo electrónico
            description: "dirección de correo electrónico del administrativo"
          },
          rol: {
            bsonType: "string",
            description: "rol o cargo del administrativo"
          },
          horario: {
            bsonType: "string", // Referencia al ID de horario (ej. 'hor007')
            description: "ID del horario asignado al administrativo"
          },
          id_tipo_personal: {
            bsonType: "string", // Referencia al ID del tipo de personal (ej. 'tipop001')
            description: "ID del tipo de personal administrativo"
          }
        }
      }
    },
    validationLevel: "strict",
    validationAction: "error"
  });


  // Coleccion Administrativos

  db.Administrativos.insertMany([
    {
      "_id": "adm001",
      "nombre": "Ana María Gómez Restrepo",
      "telefono": "3101234567",
      "correo": "ana.gomez@hospital.com",
      "rol": "Director General",
      "horario": "hor007",
      "id_tipo_personal": "tipop001"
    },
    {
      "_id": "adm002",
      "nombre": "Carlos Alberto Ramírez Vargas",
      "telefono": "3009876543",
      "correo": "carlos.ramirez@hospital.com",
      "rol": "Secretario de Recepción Principal",
      "horario": "hor007",
      "id_tipo_personal": "tipop004"
    },
    {
      "_id": "adm003",
      "nombre": "Laura Sofía Pérez Castro",
      "telefono": "3205551122",
      "correo": "laura.perez@hospital.com",
      "rol": "Asistente Contable Senior",
      "horario": "hor007",
      "id_tipo_personal": "tipop004"
    },
    {
      "_id": "adm004",
      "nombre": "Juan Pablo Sánchez Duque",
      "telefono": "3154443322",
      "correo": "juan.sanchez@hospital.com",
      "rol": "Coordinador de Talento Humano",
      "horario": "hor007",
      "id_tipo_personal": "tipop004"
    },
    {
      "_id": "adm005",
      "nombre": "María Fernanda López Rojas",
      "telefono": "3017778899",
      "correo": "maria.lopez@hospital.com",
      "rol": "Jefe de Facturación y Cartera",
      "horario": "hor007",
      "id_tipo_personal": "tipop004"
    },
    {
      "_id": "adm006",
      "nombre": "Andrés Felipe Martínez Giraldo",
      "telefono": "3182223344",
      "correo": "andres.martinez@hospital.com",
      "rol": "Jefe de Sistemas e Informática",
      "horario": "hor007",
      "id_tipo_personal": "tipop004"
    },
    {
      "_id": "adm007",
      "nombre": "Sofía Valentina Díaz Morales",
      "telefono": "3049990011",
      "correo": "sofia.diaz@hospital.com",
      "rol": "Coordinadora de Atención al Usuario",
      "horario": "hor007",
      "id_tipo_personal": "tipop004"
    },
    {
      "_id": "adm008",
      "nombre": "Ricardo José Herrera Ospina",
      "telefono": "3176667788",
      "correo": "ricardo.herrera@hospital.com",
      "rol": "Jefe de Archivo General y Historias Clínicas",
      "horario": "hor007",
      "id_tipo_personal": "tipop004"
    },
    {
      "_id": "adm009",
      "nombre": "Valeria Alejandra Gutiérrez Rojas",
      "telefono": "3021112233",
      "correo": "valeria.gutierrez@hospital.com",
      "rol": "Asistente de Compras",
      "horario": "hor007",
      "id_tipo_personal": "tipop004"
    },
    {
      "_id": "adm010",
      "nombre": "Daniel Esteban Castillo Vega",
      "telefono": "3135556677",
      "correo": "daniel.castillo@hospital.com",
      "rol": "Coordinador de Estadística",
      "horario": "hor007",
      "id_tipo_personal": "tipop004"
    },
    {
      "_id": "adm011",
      "nombre": "Gabriela Andrea Pineda Ríos",
      "telefono": "3004445566",
      "correo": "gabriela.pineda@hospital.com",
      "rol": "Asistente de Dirección General",
      "horario": "hor007",
      "id_tipo_personal": "tipop004"
    },
    {
      "_id": "adm012",
      "nombre": "Fabián Eduardo Gómez Rojas",
      "telefono": "3161112233",
      "correo": "fabian.gomez@hospital.com",
      "rol": "Jefe de Oficina Jurídica",
      "horario": "hor007",
      "id_tipo_personal": "tipop004"
    },
    {
      "_id": "adm013",
      "nombre": "Camila Victoria Salazar Mesa",
      "telefono": "3015556677",
      "correo": "camila.salazar@hospital.com",
      "rol": "Coordinadora de Control Interno",
      "horario": "hor007",
      "id_tipo_personal": "tipop004"
    },
    {
      "_id": "adm014",
      "nombre": "Alejandro José Buitrago Pérez",
      "telefono": "3178889900",
      "correo": "alejandro.buitrago@hospital.com",
      "rol": "Jefe de Desarrollo de Servicios",
      "horario": "hor007",
      "id_tipo_personal": "tipop004"
    },
    {
      "_id": "adm015",
      "nombre": "Paola Andrea Cifuentes Ruiz",
      "telefono": "3042223344",
      "correo": "paola.cifuentes@hospital.com",
      "rol": "Coordinadora de Mercadeo y Publicaciones",
      "horario": "hor007",
      "id_tipo_personal": "tipop004"
    },
    {
      "_id": "adm016",
      "nombre": "Diego Fernando Vargas León",
      "telefono": "3189990011",
      "correo": "diego.vargas@hospital.com",
      "rol": "Jefe de Auditoría Médica",
      "horario": "hor007",
      "id_tipo_personal": "tipop004"
    },
    {
      "_id": "adm017",
      "nombre": "Sandra Milena Herrera Dávila",
      "telefono": "3006667788",
      "correo": "sandra.herrera@hospital.com",
      "rol": "Subgerente de Servicios de Salud",
      "horario": "hor007",
      "id_tipo_personal": "tipop004"
    },
    {
      "_id": "adm018",
      "nombre": "Óscar David Pinzón Mesa",
      "telefono": "3151234567",
      "correo": "oscar.pinzon@hospital.com",
      "rol": "Jefe de Educación Médica",
      "horario": "hor007",
      "id_tipo_personal": "tipop004"
    },
    {
      "_id": "adm019",
      "nombre": "Natalia Sofía Rico García",
      "telefono": "3047890123",
      "correo": "natalia.rico@hospital.com",
      "rol": "Subgerente Administrativa",
      "horario": "hor007",
      "id_tipo_personal": "tipop004"
    },
    {
      "_id": "adm020",
      "nombre": "Mauricio Andrés Rojas Pérez",
      "telefono": "3162345678",
      "correo": "mauricio.rojas@hospital.com",
      "rol": "Coordinador Financiero",
      "horario": "hor007",
      "id_tipo_personal": "tipop004"
    },
    {
      "_id": "adm021",
      "nombre": "Viviana Isabel Suárez Gómez",
      "telefono": "3008765432",
      "correo": "viviana.suarez@hospital.com",
      "rol": "Jefe de Tesorería y Caja",
      "horario": "hor007",
      "id_tipo_personal": "tipop004"
    },
    {
      "_id": "adm022",
      "nombre": "Luis Fernando Quintero Díaz",
      "telefono": "3173456789",
      "correo": "luis.quintero@hospital.com",
      "rol": "Coordinador de Bienestar Social",
      "horario": "hor007",
      "id_tipo_personal": "tipop004"
    }
]);



  // Validacion Enfermeros
  
  db.createCollection("Enfermeros", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "nombre",
          "telefono",
          "correo",
          "rol",
          "horario",
          "id_tipo_personal",
          "id_hospital"
        ],
        properties: {
          _id: {
            bsonType: "string",
            description: "identificador único para el enfermero (enfXXX)"
          },
          nombre: {
            bsonType: "string",
            description: "nombre completo del enfermero"
          },
          telefono: {
            bsonType: "string",
            pattern: "^[0-9]{10}$", 
            description: "número de teléfono del enfermero"
          },
          correo: {
            bsonType: "string",
            pattern: "^.+@.+\\..+$", 
            description: "dirección de correo electrónico del enfermero"
          },
          rol: {
            bsonType: "string",
            description: "rol o especialidad del enfermero"
          },
          horario: {
            bsonType: "string", 
            description: "ID del horario asignado al enfermero"
          },
          id_tipo_personal: {
            bsonType: "string", 
            description: "ID del tipo de personal (enfermero)"
          },
          id_hospital: {
            bsonType: "string", 
            description: "ID del hospital al que pertenece el enfermero"
          }
        }
      }
    },
    validationLevel: "strict",
    validationAction: "error"
  });
  



  // Coleccion Enfermeros
  db.Enfermeros.insertMany(
  [
    {
      "_id": "ObjectId('enf001')",
      "nombre": "Isabel Cristina Rojas Soto",
      "telefono": "3112223344",
      "correo": "isabel.rojas@hospital.com",
      "rol": "Enfermera Jefe UCI",
      "horario": "ObjectId('hor002')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf002')",
      "nombre": "Pedro Antonio Vargas Luna",
      "telefono": "3001112233",
      "correo": "pedro.vargas@hospital.com",
      "rol": "Enfermero de Urgencias",
      "horario": "ObjectId('hor002')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf003')",
      "nombre": "Andrea Carolina Méndez Gil",
      "telefono": "3204445566",
      "correo": "andrea.mendez@hospital.com",
      "rol": "Enfermera de Hospitalización General",
      "horario": "ObjectId('hor008')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf004')",
      "nombre": "Jorge Andrés Castro Blanco",
      "telefono": "3167778899",
      "correo": "jorge.castro@hospital.com",
      "rol": "Enfermero de Cuidados Intensivos Pediátricos",
      "horario": "ObjectId('hor009')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf005')",
      "nombre": "Diana Marcela Ortiz Pardo",
      "telefono": "3058889900",
      "correo": "diana.ortiz@hospital.com",
      "rol": "Enfermera de Consulta Externa",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf006')",
      "nombre": "Felipe Andrés Guerrero Solano",
      "telefono": "3145556677",
      "correo": "felipe.guerrero@hospital.com",
      "rol": "Enfermero de Laboratorio Clínico",
      "horario": "ObjectId('hor005')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf007')",
      "nombre": "Carolina Andrea Naranjo Sierra",
      "telefono": "3013334455",
      "correo": "carolina.naranjo@hospital.com",
      "rol": "Enfermera de Quirófano",
      "horario": "ObjectId('hor008')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf008')",
      "nombre": "Roberto Carlos Quintero Vargas",
      "telefono": "3196667788",
      "correo": "roberto.quintero@hospital.com",
      "rol": "Enfermero de Banco de Sangre",
      "horario": "ObjectId('hor005')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf009')",
      "nombre": "Laura Ximena Bedoya Cárdenas",
      "telefono": "3029990011",
      "correo": "laura.bedoya@hospital.com",
      "rol": "Enfermera de Maternidad",
      "horario": "ObjectId('hor008')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf010')",
      "nombre": "Miguel Ángel Rueda Suárez",
      "telefono": "3171112233",
      "correo": "miguel.rueda@hospital.com",
      "rol": "Enfermero de Unidad Renal",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf011')",
      "nombre": "Paola Andrea Vélez Rojas",
      "telefono": "3105554433",
      "correo": "paola.velez@hospital.com",
      "rol": "Enfermera de Pediatría",
      "horario": "ObjectId('hor008')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf012')",
      "nombre": "Juan Sebastián Guzmán Prieto",
      "telefono": "3007776655",
      "correo": "juan.guzman@hospital.com",
      "rol": "Enfermero de Salud Mental",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf013')",
      "nombre": "Sandra Liliana Rincón Duque",
      "telefono": "3201112233",
      "correo": "sandra.rincon@hospital.com",
      "rol": "Enfermera de Salud Pública",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf014')",
      "nombre": "Camilo Ernesto Sierra Bermúdez",
      "telefono": "3164445566",
      "correo": "camilo.sierra@hospital.com",
      "rol": "Enfermero de Medicina Interna",
      "horario": "ObjectId('hor008')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf015')",
      "nombre": "Marcela Fernanda Prada Solano",
      "telefono": "3019998877",
      "correo": "marcela.prada@hospital.com",
      "rol": "Enfermera de Geriatría",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf016')",
      "nombre": "Fernando José Osorio Cifuentes",
      "telefono": "3132233445",
      "correo": "fernando.osorio@hospital.com",
      "rol": "Enfermero de Oncología",
      "horario": "ObjectId('hor008')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf017')",
      "nombre": "Valeria Sofía Herrera Morales",
      "telefono": "3023344556",
      "correo": "valeria.herrera@hospital.com",
      "rol": "Enfermera de Nefrología",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf018')",
      "nombre": "Esteban David Pinzón Torres",
      "telefono": "3104455667",
      "correo": "esteban.pinzon@hospital.com",
      "rol": "Enfermero de Cardiología",
      "horario": "ObjectId('hor008')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf019')",
      "nombre": "Andrea Catalina Bustamante Ríos",
      "telefono": "3175566778",
      "correo": "andrea.bustamante@hospital.com",
      "rol": "Enfermera de Neurología",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf020')",
      "nombre": "Luis Alejandro Medina Delgado",
      "telefono": "3046677889",
      "correo": "luis.medina@hospital.com",
      "rol": "Enfermero de Gastroenterología",
      "horario": "ObjectId('hor008')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf021')",
      "nombre": "Natalia Margarita Pérez Vega",
      "telefono": "3187788990",
      "correo": "natalia.perez@hospital.com",
      "rol": "Enfermera de Endocrinología",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf022')",
      "nombre": "Javier Mauricio Sánchez Ruiz",
      "telefono": "3008899001",
      "correo": "javier.sanchez@hospital.com",
      "rol": "Enfermero de Reumatología",
      "horario": "ObjectId('hor008')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf023')",
      "nombre": "Mariana Isabella Castro Giraldo",
      "telefono": "3159900112",
      "correo": "mariana.castro@hospital.com",
      "rol": "Enfermera de Dermatología",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf024')",
      "nombre": "Ricardo Andrés Moncada Duque",
      "telefono": "3010011223",
      "correo": "ricardo.moncada@hospital.com",
      "rol": "Enfermero de Urología",
      "horario": "ObjectId('hor008')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf025')",
      "nombre": "Alejandra Fernanda Soto Quintero",
      "telefono": "3101122334",
      "correo": "alejandra.soto@hospital.com",
      "rol": "Enfermera de Oftalmología",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf026')",
      "nombre": "Sergio Andrés Lozano Bernal",
      "telefono": "3112233445",
      "correo": "sergio.lozano@hospital.com",
      "rol": "Enfermero de Otorrinolaringología",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf027')",
      "nombre": "Laura Camila Reyes Acosta",
      "telefono": "3003344556",
      "correo": "laura.reyes@hospital.com",
      "rol": "Enfermera de Cirugía General",
      "horario": "ObjectId('hor008')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf028')",
      "nombre": "Juan Felipe Giraldo Díaz",
      "telefono": "3204455667",
      "correo": "juan.giraldo@hospital.com",
      "rol": "Enfermero de Traumatología y Ortopedia",
      "horario": "ObjectId('hor008')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf029')",
      "nombre": "Daniela Carolina Muñoz Colorado",
      "telefono": "3165566778",
      "correo": "daniela.munoz@hospital.com",
      "rol": "Enfermera de Ginecología y Obstetricia",
      "horario": "ObjectId('hor008')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf030')",
      "nombre": "Miguel Ángel Restrepo Morales",
      "telefono": "3056677889",
      "correo": "miguel.restrepo@hospital.com",
      "rol": "Enfermero de Pediatría de Urgencias",
      "horario": "ObjectId('hor002')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf031')",
      "nombre": "Valeria Sofia Mendoza Rojas",
      "telefono": "3147788990",
      "correo": "valeria.mendoza@hospital.com",
      "rol": "Enfermera de Unidad de Quemados",
      "horario": "ObjectId('hor002')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf032')",
      "nombre": "Andrés Camilo Díaz Rincón",
      "telefono": "3018899001",
      "correo": "andres.diaz@hospital.com",
      "rol": "Enfermero de Cuidados Paliativos",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf033')",
      "nombre": "Camila Andrea Moreno Vargas",
      "telefono": "3199900112",
      "correo": "camila.moreno@hospital.com",
      "rol": "Enfermera de Unidad de Trasplantes",
      "horario": "ObjectId('hor008')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf034')",
      "nombre": "Sebastián Alejandro Cárdenas Gil",
      "telefono": "3020011223",
      "correo": "sebastian.cardenas@hospital.com",
      "rol": "Enfermero de Rehabilitación",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf035')",
      "nombre": "Luisa Fernanda Ordoñez Blanco",
      "telefono": "3101122334",
      "correo": "luisa.ordonez@hospital.com",
      "rol": "Enfermera de Neumología",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf036')",
      "nombre": "Óscar David Londoño Cortés",
      "telefono": "3112233445",
      "correo": "oscar.londono@hospital.com",
      "rol": "Enfermero de Infectología",
      "horario": "ObjectId('hor008')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf037')",
      "nombre": "Carolina Andrea Betancur Ortiz",
      "telefono": "3003344556",
      "correo": "carolina.betancur@hospital.com",
      "rol": "Enfermera de Nutrición y Dietética",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf038')",
      "nombre": "Juan Camilo Salazar Mesa",
      "telefono": "3204455667",
      "correo": "juan.salazar@hospital.com",
      "rol": "Enfermero de Farmacia Hospitalaria",
      "horario": "ObjectId('hor005')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf039')",
      "nombre": "Laura Sofía Jiménez Bernal",
      "telefono": "3165566778",
      "correo": "laura.jimenez@hospital.com",
      "rol": "Enfermera de Imagenología",
      "horario": "ObjectId('hor007')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf040')",
      "nombre": "Daniel Felipe Rico Patiño",
      "telefono": "3056677889",
      "correo": "daniel.rico@hospital.com",
      "rol": "Enfermero de Endoscopia",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf041')",
      "nombre": "María José Parra Soto",
      "telefono": "3147788990",
      "correo": "maria.parra@hospital.com",
      "rol": "Enfermera de Electrofisiología",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf042')",
      "nombre": "Andrés Felipe Quintero Ríos",
      "telefono": "3018899001",
      "correo": "andres.quintero@hospital.com",
      "rol": "Enfermero de Sala de Yesos",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf043')",
      "nombre": "Valentina Andrea Arias Giraldo",
      "telefono": "3199900112",
      "correo": "valentina.arias@hospital.com",
      "rol": "Enfermera de Terapia Respiratoria",
      "horario": "ObjectId('hor008')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf044')",
      "nombre": "Carlos Enrique Bernal Pardo",
      "telefono": "3020011223",
      "correo": "carlos.bernal@hospital.com",
      "rol": "Enfermero de Patología",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf045')",
      "nombre": "Juliana Carolina Rojas Cortés",
      "telefono": "3101122334",
      "correo": "juliana.rojas@hospital.com",
      "rol": "Enfermera de Radioterapia",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf046')",
      "nombre": "Ricardo Javier Soto Prieto",
      "telefono": "3112233445",
      "correo": "ricardo.soto@hospital.com",
      "rol": "Enfermero de Hemodiálisis",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf047')",
      "nombre": "Paola Sofía Mesa Giraldo",
      "telefono": "3003344556",
      "correo": "paola.mesa@hospital.com",
      "rol": "Enfermera de Esterilización",
      "horario": "ObjectId('hor007')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf048')",
      "nombre": "Juan Pablo Duque Ramírez",
      "telefono": "3204455667",
      "correo": "juan.duque@hospital.com",
      "rol": "Enfermero de Centro de Salud Rural",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf049')",
      "nombre": "María Alejandra Londoño Vélez",
      "telefono": "3165566778",
      "correo": "maria.londono@hospital.com",
      "rol": "Enfermera de Vacunación",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf050')",
      "nombre": "Diego Andrés Marín Rueda",
      "telefono": "3056677889",
      "correo": "diego.marin@hospital.com",
      "rol": "Enfermero de Telemedicina",
      "horario": "ObjectId('hor007')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf051')",
      "nombre": "Gabriela Isabel Ortiz Patiño",
      "telefono": "3147788990",
      "correo": "gabriela.ortiz@hospital.com",
      "rol": "Enfermera de Unidad de Cuidados Crónicos",
      "horario": "ObjectId('hor008')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf052')",
      "nombre": "Nicolás Felipe Botero Zuluaga",
      "telefono": "3018899001",
      "correo": "nicolas.botero@hospital.com",
      "rol": "Enfermero de Salud Ocupacional",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf053')",
      "nombre": "Sofía Camila Arango Castro",
      "telefono": "3199900112",
      "correo": "sofia.arango@hospital.com",
      "rol": "Enfermera de Banco de Leche Humana",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf054')",
      "nombre": "Santiago Andrés Cifuentes Vélez",
      "telefono": "3020011223",
      "correo": "santiago.cifuentes@hospital.com",
      "rol": "Enfermero de Epidemiología",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf055')",
      "nombre": "Laura Ximena Bedoya Cárdenas",
      "telefono": "3101122334",
      "correo": "laura.bedoya.c@hospital.com",
      "rol": "Enfermera de Hemato-Oncología Pediátrica",
      "horario": "ObjectId('hor008')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf056')",
      "nombre": "Daniel Esteban Caro Rojas",
      "telefono": "3112233445",
      "correo": "daniel.caro@hospital.com",
      "rol": "Enfermero de Shock Trauma",
      "horario": "ObjectId('hor002')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf057')",
      "nombre": "Andrea Catalina Rivera Prada",
      "telefono": "3003344556",
      "correo": "andrea.rivera@hospital.com",
      "rol": "Enfermera de Soporte Vital Básico",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf058')",
      "nombre": "Felipe Santiago Escobar López",
      "telefono": "3204455667",
      "correo": "felipe.escobar@hospital.com",
      "rol": "Enfermero de Salud Escolar",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf059')",
      "nombre": "María Camila Vargas Betancur",
      "telefono": "3165566778",
      "correo": "maria.vargas.b@hospital.com",
      "rol": "Enfermera de Salud Reproductiva",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf060')",
      "nombre": "Julián David García Herrera",
      "telefono": "3056677889",
      "correo": "julian.garcia@hospital.com",
      "rol": "Enfermero de Medicina Familiar y Comunitaria",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf061')",
      "nombre": "Valeria Alejandra Molina Ospina",
      "telefono": "3147788990",
      "correo": "valeria.molina@hospital.com",
      "rol": "Enfermera de Cuidados Domiciliarios",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf062')",
      "nombre": "Cristian Camilo Soto González",
      "telefono": "3018899001",
      "correo": "cristian.soto@hospital.com",
      "rol": "Enfermero de Teleasistencia",
      "horario": "ObjectId('hor007')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf063')",
      "nombre": "Laura Sofía Gómez Patiño",
      "telefono": "3199900112",
      "correo": "laura.gomez.p@hospital.com",
      "rol": "Enfermera de Investigación Clínica",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf064')",
      "nombre": "Andrés Felipe Sierra Romero",
      "telefono": "3020011223",
      "correo": "andres.sierra@hospital.com",
      "rol": "Enfermero de Soporte Nutricional",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf065')",
      "nombre": "Natalia Andrea Jaramillo Vélez",
      "telefono": "3101122334",
      "correo": "natalia.jaramillo@hospital.com",
      "rol": "Enfermera de Salud Mental Infantil",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf066')",
      "nombre": "Fabián Camilo Quintero Duque",
      "telefono": "3112233445",
      "correo": "fabian.quintero@hospital.com",
      "rol": "Enfermero de Trasplante de Médula Ósea",
      "horario": "ObjectId('hor008')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf067')",
      "nombre": "María Clara Betancur Ríos",
      "telefono": "3003344556",
      "correo": "maria.betancur@hospital.com",
      "rol": "Enfermera de Cuidados Intensivos Neonatales",
      "horario": "ObjectId('hor002')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf068')",
      "nombre": "Santiago David López Martínez",
      "telefono": "3204455667",
      "correo": "santiago.lopez@hospital.com",
      "rol": "Enfermero de Unidad de Dolor",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },
    {
      "_id": "ObjectId('enf069')",
      "nombre": "Carolina Isabel Vélez Restrepo",
      "telefono": "3165566778",
      "correo": "carolina.velez@hospital.com",
      "rol": "Enfermera de Medicina Nuclear",
      "horario": "ObjectId('hor001')",
      "id_tipo_personal": "ObjectId('tipop003')",
      "id_hospital": "ObjectId('hosp001')"
    },  {
      "_id": "enf071",
      "nombre": "Paola Andrea Núñez Guzmán",
      "telefono": "3018899010",
      "correo": "paola.nunez@hospital.com",
      "rol": "Enfermera de Cardiología",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf072",
      "nombre": "Oscar Javier Romero Pineda",
      "telefono": "3018899011",
      "correo": "oscar.romero@hospital.com",
      "rol": "Enfermero de Rehabilitación",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf073",
      "nombre": "Luisa Fernanda Castro Ríos",
      "telefono": "3018899012",
      "correo": "luisa.castro@hospital.com",
      "rol": "Enfermera de Oncología",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf074",
      "nombre": "Andrés Felipe Rojas Paredes",
      "telefono": "3018899013",
      "correo": "andres.rojas@hospital.com",
      "rol": "Enfermero de Psiquiatría",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf075",
      "nombre": "Carolina Estefanía Mendoza Vásquez",
      "telefono": "3018899014",
      "correo": "carolina.mendoza@hospital.com",
      "rol": "Enfermera de Endocrinología",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf076",
      "nombre": "Diego Armando Guzmán Soto",
      "telefono": "3018899015",
      "correo": "diego.guzman@hospital.com",
      "rol": "Enfermero de Geriatría",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf077",
      "nombre": "Paula Andrea Restrepo Londoño",
      "telefono": "3018899016",
      "correo": "paula.restrepo@hospital.com",
      "rol": "Enfermera de Nefrología",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf078",
      "nombre": "Mauricio Alejandro Parra Jiménez",
      "telefono": "3018899017",
      "correo": "mauricio.parra@hospital.com",
      "rol": "Enfermero de Neumología",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf079",
      "nombre": "Diana Marcela Ospina Valencia",
      "telefono": "3018899018",
      "correo": "diana.ospina@hospital.com",
      "rol": "Enfermera de Gastroenterología",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf080",
      "nombre": "Julio César Peña Arango",
      "telefono": "3018899019",
      "correo": "julio.pena@hospital.com",
      "rol": "Enfermero de Hematología",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf081",
      "nombre": "Sandra Milena Quintero Zapata",
      "telefono": "3018899020",
      "correo": "sandra.quintero@hospital.com",
      "rol": "Enfermera de Infectología",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf082",
      "nombre": "Rafael Antonio Mejía Cardona",
      "telefono": "3018899021",
      "correo": "rafael.mejia@hospital.com",
      "rol": "Enfermero de Alergología",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf083",
      "nombre": "Gloria Stella Arias Betancur",
      "telefono": "3018899022",
      "correo": "gloria.arias@hospital.com",
      "rol": "Enfermera de Medicina Interna",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf084",
      "nombre": "Álvaro Javier Giraldo Osorio",
      "telefono": "3018899023",
      "correo": "alvaro.giraldo@hospital.com",
      "rol": "Enfermero de Cirugía General",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf085",
      "nombre": "Mónica Liliana Cárdenas Franco",
      "telefono": "3018899024",
      "correo": "monica.cardenas@hospital.com",
      "rol": "Enfermera de Cirugía Plástica",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf086",
      "nombre": "Jairo Alonso Montoya Restrepo",
      "telefono": "3018899025",
      "correo": "jairo.montoya@hospital.com",
      "rol": "Enfermero de UCI",
      "horario": "hor002",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf087",
      "nombre": "Claudia Patricia Marín Escobar",
      "telefono": "3018899026",
      "correo": "claudia.marin@hospital.com",
      "rol": "Enfermera de UCI Neonatal",
      "horario": "hor002",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf088",
      "nombre": "Wilson Eduardo Agudelo Velásquez",
      "telefono": "3018899027",
      "correo": "wilson.agudelo@hospital.com",
      "rol": "Enfermero de UCI Pediátrica",
      "horario": "hor002",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf089",
      "nombre": "Ángela María Correa Henao",
      "telefono": "3018899028",
      "correo": "angela.correa@hospital.com",
      "rol": "Enfermera de UCI Cardiológica",
      "horario": "hor002",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf090",
      "nombre": "Hugo Armando Zapata Londoño",
      "telefono": "3018899029",
      "correo": "hugo.zapata@hospital.com",
      "rol": "Enfermero de UCI Neurológica",
      "horario": "hor002",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf091",
      "nombre": "Liliana Patricia Uribe Sosa",
      "telefono": "3018899030",
      "correo": "liliana.uribe@hospital.com",
      "rol": "Enfermera de UCI Quirúrgica",
      "horario": "hor002",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf092",
      "nombre": "Óscar Darío Carmona Arcila",
      "telefono": "3018899031",
      "correo": "oscar.carmona@hospital.com",
      "rol": "Enfermero de Hemodiálisis",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf093",
      "nombre": "Martha Cecilia Velásquez Mesa",
      "telefono": "3018899032",
      "correo": "martha.velasquez@hospital.com",
      "rol": "Enfermera de Quemados",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf094",
      "nombre": "Guillermo León Arango Vélez",
      "telefono": "3018899033",
      "correo": "guillermo.arango@hospital.com",
      "rol": "Enfermero de Trasplantes",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf095",
      "nombre": "Beatriz Elena Franco Gutiérrez",
      "telefono": "3018899034",
      "correo": "beatriz.franco@hospital.com",
      "rol": "Enfermera de Cuidados Paliativos",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf096",
      "nombre": "Ricardo Emilio Palacio Ceballos",
      "telefono": "3018899035",
      "correo": "ricardo.palacio@hospital.com",
      "rol": "Enfermero de Salud Ocupacional",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf097",
      "nombre": "Adriana Lucía Ramírez Castro",
      "telefono": "3018899036",
      "correo": "adriana.ramirez@hospital.com",
      "rol": "Enfermera de Salud Pública",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf098",
      "nombre": "Gabriel Esteban Torres Mendoza",
      "telefono": "3018899037",
      "correo": "gabriel.torres@hospital.com",
      "rol": "Enfermero de Epidemiología",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf099",
      "nombre": "Natalia Andrea Vargas Rojas",
      "telefono": "3018899038",
      "correo": "natalia.vargas@hospital.com",
      "rol": "Enfermera de Vacunación",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf100",
      "nombre": "Sergio Iván Herrera Guzmán",
      "telefono": "3018899039",
      "correo": "sergio.herrera@hospital.com",
      "rol": "Enfermero de Triage",
      "horario": "hor002",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf101",
      "nombre": "Marcela Alejandra Silva Fuentes",
      "telefono": "3018899040",
      "correo": "marcela.silva@hospital.com",
      "rol": "Enfermera de Admisión",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf102",
      "nombre": "Jorge Luis Morales Duarte",
      "telefono": "3018899041",
      "correo": "jorge.morales@hospital.com",
      "rol": "Enfermero de Esterilización",
      "horario": "hor008",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf103",
      "nombre": "Luisa Fernanda Castro Ríos",
      "telefono": "3018899042",
      "correo": "luisa.castro@hospital.com",
      "rol": "Enfermera de Central de Equipos",
      "horario": "hor008",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf104",
      "nombre": "Felipe Andrés Rojas Paredes",
      "telefono": "3018899043",
      "correo": "felipe.rojas@hospital.com",
      "rol": "Enfermero de Banco de Sangre",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf105",
      "nombre": "Carolina Estefanía Mendoza Vásquez",
      "telefono": "3018899044",
      "correo": "carolina.mendoza@hospital.com",
      "rol": "Enfermera de Laboratorio",
      "horario": "hor005",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf106",
      "nombre": "Diego Armando Guzmán Soto",
      "telefono": "3018899045",
      "correo": "diego.guzman@hospital.com",
      "rol": "Enfermero de Imagenología",
      "horario": "hor006",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf107",
      "nombre": "Paula Andrea Restrepo Londoño",
      "telefono": "3018899046",
      "correo": "paula.restrepo@hospital.com",
      "rol": "Enfermera de Farmacia",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf108",
      "nombre": "Mauricio Alejandro Parra Jiménez",
      "telefono": "3018899047",
      "correo": "mauricio.parra@hospital.com",
      "rol": "Enfermero de Nutrición",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf109",
      "nombre": "Diana Marcela Ospina Valencia",
      "telefono": "3018899048",
      "correo": "diana.ospina@hospital.com",
      "rol": "Enfermera de Terapia Respiratoria",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf110",
      "nombre": "Julio César Peña Arango",
      "telefono": "3018899049",
      "correo": "julio.pena@hospital.com",
      "rol": "Enfermero de Terapia Física",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf111",
      "nombre": "Sandra Milena Quintero Zapata",
      "telefono": "3018899050",
      "correo": "sandra.quintero@hospital.com",
      "rol": "Enfermera de Terapia Ocupacional",
      "horario": "hor001",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf112",
      "nombre": "Rafael Antonio Mejía Cardona",
      "telefono": "3018899051",
      "correo": "rafael.mejia@hospital.com",
      "rol": "Enfermero de Cuidados Domiciliarios",
      "horario": "hor007",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf113",
      "nombre": "Gloria Stella Arias Betancur",
      "telefono": "3018899052",
      "correo": "gloria.arias@hospital.com",
      "rol": "Enfermera de Cuidados Paliativos Domiciliarios",
      "horario": "hor007",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf114",
      "nombre": "Álvaro Javier Giraldo Osorio",
      "telefono": "3018899053",
      "correo": "alvaro.giraldo@hospital.com",
      "rol": "Enfermero de Atención Domiciliaria",
      "horario": "hor007",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf115",
      "nombre": "Mónica Liliana Cárdenas Franco",
      "telefono": "3018899054",
      "correo": "monica.cardenas@hospital.com",
      "rol": "Enfermera de Salud Mental Comunitaria",
      "horario": "hor007",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf116",
      "nombre": "Jairo Alonso Montoya Restrepo",
      "telefono": "3018899055",
      "correo": "jairo.montoya@hospital.com",
      "rol": "Enfermero de Atención Primaria",
      "horario": "hor007",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf117",
      "nombre": "Claudia Patricia Marín Escobar",
      "telefono": "3018899056",
      "correo": "claudia.marin@hospital.com",
      "rol": "Enfermera de Promoción y Prevención",
      "horario": "hor007",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf118",
      "nombre": "Wilson Eduardo Agudelo Velásquez",
      "telefono": "3018899057",
      "correo": "wilson.agudelo@hospital.com",
      "rol": "Enfermero de Vigilancia Epidemiológica",
      "horario": "hor007",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf119",
      "nombre": "Ángela María Correa Henao",
      "telefono": "3018899058",
      "correo": "angela.correa@hospital.com",
      "rol": "Enfermera de Salud Sexual y Reproductiva",
      "horario": "hor007",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf120",
      "nombre": "Hugo Armando Zapata Londoño",
      "telefono": "3018899059",
      "correo": "hugo.zapata@hospital.com",
      "rol": "Enfermero de Crecimiento y Desarrollo",
      "horario": "hor007",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf121",
      "nombre": "Liliana Patricia Uribe Sosa",
      "telefono": "3018899060",
      "correo": "liliana.uribe@hospital.com",
      "rol": "Enfermera de Control Prenatal",
      "horario": "hor007",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf122",
      "nombre": "Óscar Darío Carmona Arcila",
      "telefono": "3018899061",
      "correo": "oscar.carmona@hospital.com",
      "rol": "Enfermero de Planificación Familiar",
      "horario": "hor007",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf123",
      "nombre": "Martha Cecilia Velásquez Mesa",
      "telefono": "3018899062",
      "correo": "martha.velasquez@hospital.com",
      "rol": "Enfermera de Lactancia Materna",
      "horario": "hor007",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf124",
      "nombre": "Guillermo León Arango Vélez",
      "telefono": "3018899063",
      "correo": "guillermo.arango@hospital.com",
      "rol": "Enfermero de Inmunizaciones",
      "horario": "hor007",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf125",
      "nombre": "Beatriz Elena Franco Gutiérrez",
      "telefono": "3018899064",
      "correo": "beatriz.franco@hospital.com",
      "rol": "Enfermera de Control del Niño Sano",
      "horario": "hor007",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf126",
      "nombre": "Ricardo Emilio Palacio Ceballos",
      "telefono": "3018899065",
      "correo": "ricardo.palacio@hospital.com",
      "rol": "Enfermero de Atención al Adulto Mayor",
      "horario": "hor007",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf127",
      "nombre": "Adriana Lucía Ramírez Castro",
      "telefono": "3018899066",
      "correo": "adriana.ramirez@hospital.com",
      "rol": "Enfermera de Atención a Crónicos",
      "horario": "hor007",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf128",
      "nombre": "Gabriel Esteban Torres Mendoza",
      "telefono": "3018899067",
      "correo": "gabriel.torres@hospital.com",
      "rol": "Enfermero de Atención a Discapacitados",
      "horario": "hor007",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf129",
      "nombre": "Natalia Andrea Vargas Rojas",
      "telefono": "3018899068",
      "correo": "natalia.vargas@hospital.com",
      "rol": "Enfermera de Cuidados Paliativos Pediátricos",
      "horario": "hor007",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf130",
      "nombre": "Sergio Iván Herrera Guzmán",
      "telefono": "3018899069",
      "correo": "sergio.herrera@hospital.com",
      "rol": "Enfermero de Cuidados Intensivos Neonatales",
      "horario": "hor002",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf131",
      "nombre": "Marcela Alejandra Silva Fuentes",
      "telefono": "3018899070",
      "correo": "marcela.silva@hospital.com",
      "rol": "Enfermera de Cuidados Intensivos Pediátricos",
      "horario": "hor002",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf132",
      "nombre": "Jorge Luis Morales Duarte",
      "telefono": "3018899071",
      "correo": "jorge.morales@hospital.com",
      "rol": "Enfermero de Emergencias Pediátricas",
      "horario": "hor002",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf133",
      "nombre": "Luisa Fernanda Castro Ríos",
      "telefono": "3018899072",
      "correo": "luisa.castro2@hospital.com",
      "rol": "Enfermera de Emergencias Adultos",
      "horario": "hor002",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf134",
      "nombre": "Felipe Andrés Rojas Paredes",
      "telefono": "3018899073",
      "correo": "felipe.rojas2@hospital.com",
      "rol": "Enfermero de Emergencias Trauma",
      "horario": "hor002",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf135",
      "nombre": "Carolina Estefanía Mendoza Vásquez",
      "telefono": "3018899074",
      "correo": "carolina.mendoza2@hospital.com",
      "rol": "Enfermera de Emergencias Cardiológicas",
      "horario": "hor002",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf136",
      "nombre": "Diego Armando Guzmán Soto",
      "telefono": "3018899075",
      "correo": "diego.guzman2@hospital.com",
      "rol": "Enfermero de Emergencias Neurológicas",
      "horario": "hor002",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf137",
      "nombre": "Paula Andrea Restrepo Londoño",
      "telefono": "3018899076",
      "correo": "paula.restrepo2@hospital.com",
      "rol": "Enfermera de Emergencias Respiratorias",
      "horario": "hor002",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf138",
      "nombre": "Mauricio Alejandro Parra Jiménez",
      "telefono": "3018899077",
      "correo": "mauricio.parra2@hospital.com",
      "rol": "Enfermero de Emergencias Quirúrgicas",
      "horario": "hor002",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf139",
      "nombre": "Diana Marcela Ospina Valencia",
      "telefono": "3018899078",
      "correo": "diana.ospina2@hospital.com",
      "rol": "Enfermera de Emergencias Obstétricas",
      "horario": "hor002",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
    {
      "_id": "enf140",
      "nombre": "Julio César Peña Arango",
      "telefono": "3018899079",
      "correo": "julio.pena2@hospital.com",
      "rol": "Enfermero de Emergencias Psiquiátricas",
      "horario": "hor002",
      "id_tipo_personal": "tipop003",
      "id_hospital": "hosp002"
    },
      {
        "_id": "enf141",
        "nombre": "Laura Patricia Ramírez Vargas",
        "telefono": "3028899001",
        "correo": "laura.ramirez@hospital.com",
        "rol": "Enfermera de Cuidados Intensivos",
        "horario": "hor002",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf142",
        "nombre": "Jorge Enrique Torres Méndez",
        "telefono": "3028899002",
        "correo": "jorge.torres@hospital.com",
        "rol": "Enfermero de Hospitalización",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf143",
        "nombre": "Sandra Liliana Herrera Castro",
        "telefono": "3028899003",
        "correo": "sandra.herrera@hospital.com",
        "rol": "Enfermera de Neonatología",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf144",
        "nombre": "Diego Alejandro Mendoza Rojas",
        "telefono": "3028899004",
        "correo": "diego.mendoza@hospital.com",
        "rol": "Enfermero de Emergencias",
        "horario": "hor002",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf145",
        "nombre": "Paola Andrea Núñez Guzmán",
        "telefono": "3028899005",
        "correo": "paola.nunez@hospital.com",
        "rol": "Enfermera de Cardiología",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf146",
        "nombre": "Oscar Javier Romero Pineda",
        "telefono": "3028899006",
        "correo": "oscar.romero@hospital.com",
        "rol": "Enfermero de Rehabilitación",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf147",
        "nombre": "Luisa Fernanda Castro Ríos",
        "telefono": "3028899007",
        "correo": "luisa.castro@hospital.com",
        "rol": "Enfermera de Oncología",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf148",
        "nombre": "Andrés Felipe Rojas Paredes",
        "telefono": "3028899008",
        "correo": "andres.rojas@hospital.com",
        "rol": "Enfermero de Psiquiatría",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf149",
        "nombre": "Carolina Estefanía Mendoza Vásquez",
        "telefono": "3028899009",
        "correo": "carolina.mendoza@hospital.com",
        "rol": "Enfermera de Endocrinología",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf150",
        "nombre": "Diego Armando Guzmán Soto",
        "telefono": "3028899010",
        "correo": "diego.guzman@hospital.com",
        "rol": "Enfermero de Geriatría",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf151",
        "nombre": "Paula Andrea Restrepo Londoño",
        "telefono": "3028899011",
        "correo": "paula.restrepo@hospital.com",
        "rol": "Enfermera de Nefrología",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf152",
        "nombre": "Mauricio Alejandro Parra Jiménez",
        "telefono": "3028899012",
        "correo": "mauricio.parra@hospital.com",
        "rol": "Enfermero de Neumología",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf153",
        "nombre": "Diana Marcela Ospina Valencia",
        "telefono": "3028899013",
        "correo": "diana.ospina@hospital.com",
        "rol": "Enfermera de Gastroenterología",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf154",
        "nombre": "Julio César Peña Arango",
        "telefono": "3028899014",
        "correo": "julio.pena@hospital.com",
        "rol": "Enfermero de Hematología",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf155",
        "nombre": "Sandra Milena Quintero Zapata",
        "telefono": "3028899015",
        "correo": "sandra.quintero@hospital.com",
        "rol": "Enfermera de Infectología",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf156",
        "nombre": "Rafael Antonio Mejía Cardona",
        "telefono": "3028899016",
        "correo": "rafael.mejia@hospital.com",
        "rol": "Enfermero de Alergología",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf157",
        "nombre": "Gloria Stella Arias Betancur",
        "telefono": "3028899017",
        "correo": "gloria.arias@hospital.com",
        "rol": "Enfermera de Medicina Interna",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf158",
        "nombre": "Álvaro Javier Giraldo Osorio",
        "telefono": "3028899018",
        "correo": "alvaro.giraldo@hospital.com",
        "rol": "Enfermero de Cirugía General",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf159",
        "nombre": "Mónica Liliana Cárdenas Franco",
        "telefono": "3028899019",
        "correo": "monica.cardenas@hospital.com",
        "rol": "Enfermera de Cirugía Plástica",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf160",
        "nombre": "Jairo Alonso Montoya Restrepo",
        "telefono": "3028899020",
        "correo": "jairo.montoya@hospital.com",
        "rol": "Enfermero de UCI",
        "horario": "hor002",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf161",
        "nombre": "Claudia Patricia Marín Escobar",
        "telefono": "3028899021",
        "correo": "claudia.marin@hospital.com",
        "rol": "Enfermera de UCI Neonatal",
        "horario": "hor002",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf162",
        "nombre": "Wilson Eduardo Agudelo Velásquez",
        "telefono": "3028899022",
        "correo": "wilson.agudelo@hospital.com",
        "rol": "Enfermero de UCI Pediátrica",
        "horario": "hor002",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf163",
        "nombre": "Ángela María Correa Henao",
        "telefono": "3028899023",
        "correo": "angela.correa@hospital.com",
        "rol": "Enfermera de UCI Cardiológica",
        "horario": "hor002",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf164",
        "nombre": "Hugo Armando Zapata Londoño",
        "telefono": "3028899024",
        "correo": "hugo.zapata@hospital.com",
        "rol": "Enfermero de UCI Neurológica",
        "horario": "hor002",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf165",
        "nombre": "Liliana Patricia Uribe Sosa",
        "telefono": "3028899025",
        "correo": "liliana.uribe@hospital.com",
        "rol": "Enfermera de UCI Quirúrgica",
        "horario": "hor002",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf166",
        "nombre": "Óscar Darío Carmona Arcila",
        "telefono": "3028899026",
        "correo": "oscar.carmona@hospital.com",
        "rol": "Enfermero de Hemodiálisis",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf167",
        "nombre": "Martha Cecilia Velásquez Mesa",
        "telefono": "3028899027",
        "correo": "martha.velasquez@hospital.com",
        "rol": "Enfermera de Quemados",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf168",
        "nombre": "Guillermo León Arango Vélez",
        "telefono": "3028899028",
        "correo": "guillermo.arango@hospital.com",
        "rol": "Enfermero de Trasplantes",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf169",
        "nombre": "Beatriz Elena Franco Gutiérrez",
        "telefono": "3028899029",
        "correo": "beatriz.franco@hospital.com",
        "rol": "Enfermera de Cuidados Paliativos",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf170",
        "nombre": "Ricardo Emilio Palacio Ceballos",
        "telefono": "3028899030",
        "correo": "ricardo.palacio@hospital.com",
        "rol": "Enfermero de Salud Ocupacional",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf171",
        "nombre": "Adriana Lucía Ramírez Castro",
        "telefono": "3028899031",
        "correo": "adriana.ramirez@hospital.com",
        "rol": "Enfermera de Salud Pública",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf172",
        "nombre": "Gabriel Esteban Torres Mendoza",
        "telefono": "3028899032",
        "correo": "gabriel.torres@hospital.com",
        "rol": "Enfermero de Epidemiología",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf173",
        "nombre": "Natalia Andrea Vargas Rojas",
        "telefono": "3028899033",
        "correo": "natalia.vargas@hospital.com",
        "rol": "Enfermera de Vacunación",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf174",
        "nombre": "Sergio Iván Herrera Guzmán",
        "telefono": "3028899034",
        "correo": "sergio.herrera@hospital.com",
        "rol": "Enfermero de Triage",
        "horario": "hor002",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf175",
        "nombre": "Marcela Alejandra Silva Fuentes",
        "telefono": "3028899035",
        "correo": "marcela.silva@hospital.com",
        "rol": "Enfermera de Admisión",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf176",
        "nombre": "Jorge Luis Morales Duarte",
        "telefono": "3028899036",
        "correo": "jorge.morales@hospital.com",
        "rol": "Enfermero de Esterilización",
        "horario": "hor008",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf177",
        "nombre": "Luisa Fernanda Castro Ríos",
        "telefono": "3028899037",
        "correo": "luisa.castro@hospital.com",
        "rol": "Enfermera de Central de Equipos",
        "horario": "hor008",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf178",
        "nombre": "Felipe Andrés Rojas Paredes",
        "telefono": "3028899038",
        "correo": "felipe.rojas@hospital.com",
        "rol": "Enfermero de Banco de Sangre",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf179",
        "nombre": "Carolina Estefanía Mendoza Vásquez",
        "telefono": "3028899039",
        "correo": "carolina.mendoza@hospital.com",
        "rol": "Enfermera de Laboratorio",
        "horario": "hor005",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf180",
        "nombre": "Diego Armando Guzmán Soto",
        "telefono": "3028899040",
        "correo": "diego.guzman@hospital.com",
        "rol": "Enfermero de Imagenología",
        "horario": "hor006",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf181",
        "nombre": "Paula Andrea Restrepo Londoño",
        "telefono": "3028899041",
        "correo": "paula.restrepo@hospital.com",
        "rol": "Enfermera de Farmacia",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf182",
        "nombre": "Mauricio Alejandro Parra Jiménez",
        "telefono": "3028899042",
        "correo": "mauricio.parra@hospital.com",
        "rol": "Enfermero de Nutrición",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf183",
        "nombre": "Diana Marcela Ospina Valencia",
        "telefono": "3028899043",
        "correo": "diana.ospina@hospital.com",
        "rol": "Enfermera de Terapia Respiratoria",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf184",
        "nombre": "Julio César Peña Arango",
        "telefono": "3028899044",
        "correo": "julio.pena@hospital.com",
        "rol": "Enfermero de Terapia Física",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf185",
        "nombre": "Sandra Milena Quintero Zapata",
        "telefono": "3028899045",
        "correo": "sandra.quintero@hospital.com",
        "rol": "Enfermera de Terapia Ocupacional",
        "horario": "hor001",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf186",
        "nombre": "Rafael Antonio Mejía Cardona",
        "telefono": "3028899046",
        "correo": "rafael.mejia@hospital.com",
        "rol": "Enfermero de Cuidados Domiciliarios",
        "horario": "hor007",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf187",
        "nombre": "Gloria Stella Arias Betancur",
        "telefono": "3028899047",
        "correo": "gloria.arias@hospital.com",
        "rol": "Enfermera de Cuidados Paliativos Domiciliarios",
        "horario": "hor007",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf188",
        "nombre": "Álvaro Javier Giraldo Osorio",
        "telefono": "3028899048",
        "correo": "alvaro.giraldo@hospital.com",
        "rol": "Enfermero de Atención Domiciliaria",
        "horario": "hor007",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf189",
        "nombre": "Mónica Liliana Cárdenas Franco",
        "telefono": "3028899049",
        "correo": "monica.cardenas@hospital.com",
        "rol": "Enfermera de Salud Mental Comunitaria",
        "horario": "hor007",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf190",
        "nombre": "Jairo Alonso Montoya Restrepo",
        "telefono": "3028899050",
        "correo": "jairo.montoya@hospital.com",
        "rol": "Enfermero de Atención Primaria",
        "horario": "hor007",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf191",
        "nombre": "Claudia Patricia Marín Escobar",
        "telefono": "3028899051",
        "correo": "claudia.marin@hospital.com",
        "rol": "Enfermera de Promoción y Prevención",
        "horario": "hor007",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf192",
        "nombre": "Wilson Eduardo Agudelo Velásquez",
        "telefono": "3028899052",
        "correo": "wilson.agudelo@hospital.com",
        "rol": "Enfermero de Vigilancia Epidemiológica",
        "horario": "hor007",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf193",
        "nombre": "Ángela María Correa Henao",
        "telefono": "3028899053",
        "correo": "angela.correa@hospital.com",
        "rol": "Enfermera de Salud Sexual y Reproductiva",
        "horario": "hor007",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf194",
        "nombre": "Hugo Armando Zapata Londoño",
        "telefono": "3028899054",
        "correo": "hugo.zapata@hospital.com",
        "rol": "Enfermero de Crecimiento y Desarrollo",
        "horario": "hor007",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf195",
        "nombre": "Liliana Patricia Uribe Sosa",
        "telefono": "3028899055",
        "correo": "liliana.uribe@hospital.com",
        "rol": "Enfermera de Control Prenatal",
        "horario": "hor007",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf196",
        "nombre": "Óscar Darío Carmona Arcila",
        "telefono": "3028899056",
        "correo": "oscar.carmona@hospital.com",
        "rol": "Enfermero de Planificación Familiar",
        "horario": "hor007",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf197",
        "nombre": "Martha Cecilia Velásquez Mesa",
        "telefono": "3028899057",
        "correo": "martha.velasquez@hospital.com",
        "rol": "Enfermera de Lactancia Materna",
        "horario": "hor007",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf198",
        "nombre": "Guillermo León Arango Vélez",
        "telefono": "3028899058",
        "correo": "guillermo.arango@hospital.com",
        "rol": "Enfermero de Inmunizaciones",
        "horario": "hor007",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf199",
        "nombre": "Beatriz Elena Franco Gutiérrez",
        "telefono": "3028899059",
        "correo": "beatriz.franco@hospital.com",
        "rol": "Enfermera de Control del Niño Sano",
        "horario": "hor007",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf200",
        "nombre": "Ricardo Emilio Palacio Ceballos",
        "telefono": "3028899060",
        "correo": "ricardo.palacio@hospital.com",
        "rol": "Enfermero de Atención al Adulto Mayor",
        "horario": "hor007",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf201",
        "nombre": "Adriana Lucía Ramírez Castro",
        "telefono": "3028899061",
        "correo": "adriana.ramirez@hospital.com",
        "rol": "Enfermera de Atención a Crónicos",
        "horario": "hor007",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf202",
        "nombre": "Gabriel Esteban Torres Mendoza",
        "telefono": "3028899062",
        "correo": "gabriel.torres@hospital.com",
        "rol": "Enfermero de Atención a Discapacitados",
        "horario": "hor007",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf203",
        "nombre": "Natalia Andrea Vargas Rojas",
        "telefono": "3028899063",
        "correo": "natalia.vargas@hospital.com",
        "rol": "Enfermera de Cuidados Paliativos Pediátricos",
        "horario": "hor007",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf204",
        "nombre": "Sergio Iván Herrera Guzmán",
        "telefono": "3028899064",
        "correo": "sergio.herrera@hospital.com",
        "rol": "Enfermero de Cuidados Intensivos Neonatales",
        "horario": "hor002",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf205",
        "nombre": "Marcela Alejandra Silva Fuentes",
        "telefono": "3028899065",
        "correo": "marcela.silva@hospital.com",
        "rol": "Enfermera de Cuidados Intensivos Pediátricos",
        "horario": "hor002",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf206",
        "nombre": "Jorge Luis Morales Duarte",
        "telefono": "3028899066",
        "correo": "jorge.morales@hospital.com",
        "rol": "Enfermero de Emergencias Pediátricas",
        "horario": "hor002",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf207",
        "nombre": "Luisa Fernanda Castro Ríos",
        "telefono": "3028899067",
        "correo": "luisa.castro2@hospital.com",
        "rol": "Enfermera de Emergencias Adultos",
        "horario": "hor002",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf208",
        "nombre": "Felipe Andrés Rojas Paredes",
        "telefono": "3028899068",
        "correo": "felipe.rojas2@hospital.com",
        "rol": "Enfermero de Emergencias Trauma",
        "horario": "hor002",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf209",
        "nombre": "Carolina Estefanía Mendoza Vásquez",
        "telefono": "3028899069",
        "correo": "carolina.mendoza2@hospital.com",
        "rol": "Enfermera de Emergencias Cardiológicas",
        "horario": "hor002",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      },
      {
        "_id": "enf210",
        "nombre": "Diego Armando Guzmán Soto",
        "telefono": "3028899070",
        "correo": "diego.guzman2@hospital.com",
        "rol": "Enfermero de Emergencias Neurológicas",
        "horario": "hor002",
        "id_tipo_personal": "tipop003",
        "id_hospital": "hosp003"
      }
    ]);



// Validacion Medicos

  db.createCollection("Medicos", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "nombre",
          "telefono",
          "correo",
          "rol",
          "horario",
          "id_tipo_personal",
          "id_hospital"
        ],
        properties: {
          _id: {
            bsonType: "string", // Definimos _id como string para tus IDs personalizados (ej. 'med001')
            description: "identificador único para el médico (medXXX)"
          },
          nombre: {
            bsonType: "string",
            description: "nombre completo del médico"
          },
          telefono: {
            bsonType: "string",
            pattern: "^[0-9]{10}$", // Ejemplo: patrón para 10 dígitos numéricos
            description: "número de teléfono del médico"
          },
          correo: {
            bsonType: "string",
            pattern: "^.+@.+\\..+$", // Ejemplo: patrón básico para correo electrónico
            description: "dirección de correo electrónico del médico"
          },
          rol: {
            bsonType: "string",
            description: "rol o especialidad del médico"
          },
          horario: {
            bsonType: "string", // Referencia al ID del horario (ej. 'hor001')
            description: "ID del horario asignado al médico"
          },
          id_tipo_personal: {
            bsonType: "string", // Referencia al ID del tipo de personal (ej. 'tipop002')
            description: "ID del tipo de personal (médico)"
          },
          id_hospital: {
            bsonType: "string", // Referencia al ID del hospital (ej. 'hos001')
            description: "ID del hospital al que pertenece el médico"
          }
        }
      }
    },
    validationLevel: "strict",
    validationAction: "error"
  });




// Coleccion de Medicos

db.Medicos.insertMany([

  {
    "_id": "med001",
    "nombre": "Dr. Andrés Felipe Rojas Castro",
    "telefono": "3101112233",
    "correo": "andres.rojas.hus@hospital.com",
    "rol": "Cardiólogo",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med002",
    "nombre": "Dra. Laura Marcela Gómez Pérez",
    "telefono": "3002223344",
    "correo": "laura.gomez.hus@hospital.com",
    "rol": "Pediatra",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med003",
    "nombre": "Dr. Javier Mauricio Soto Restrepo",
    "telefono": "3203334455",
    "correo": "javier.soto.hus@hospital.com",
    "rol": "Cirujano General",
    "horario": "hor003",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med004",
    "nombre": "Dra. Carolina Andrea Díaz Morales",
    "telefono": "3154445566",
    "correo": "carolina.diaz.hus@hospital.com",
    "rol": "Médico de Urgencias",
    "horario": "hor002",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med005",
    "nombre": "Dr. Ricardo José Quintero Vargas",
    "telefono": "3015556677",
    "correo": "ricardo.quintero.hus@hospital.com",
    "rol": "Ginecólogo y Obstetra",
    "horario": "hor008",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med006",
    "nombre": "Dra. Ana María Botero Ospina",
    "telefono": "3186667788",
    "correo": "ana.botero.hus@hospital.com",
    "rol": "Neuróloga",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med007",
    "nombre": "Dr. Juan Pablo Ortiz Pardo",
    "telefono": "3047778899",
    "correo": "juan.ortiz.hus@hospital.com",
    "rol": "Ortopedista y Traumatólogo",
    "horario": "hor003",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med008",
    "nombre": "Dra. Sofía Valentina Guerrero Solano",
    "telefono": "3178889900",
    "correo": "sofia.guerrero.hus@hospital.com",
    "rol": "Dermatóloga",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med009",
    "nombre": "Dr. Daniel Esteban Cifuentes Ruiz",
    "telefono": "3029990011",
    "correo": "daniel.cifuentes.hus@hospital.com",
    "rol": "Oftalmólogo",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med010",
    "nombre": "Dra. María Fernanda Rueda Suárez",
    "telefono": "3130001122",
    "correo": "maria.rueda.hus@hospital.com",
    "rol": "Otorrinolaringóloga",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med011",
    "nombre": "Dr. Camilo Ernesto Sierra Bermúdez",
    "telefono": "3161112233",
    "correo": "camilo.sierra.hus@hospital.com",
    "rol": "Urólogo",
    "horario": "hor003",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med012",
    "nombre": "Dra. Natalia Andrea Vélez Rojas",
    "telefono": "3004445566",
    "correo": "natalia.velez.hus@hospital.com",
    "rol": "Endocrinóloga",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med013",
    "nombre": "Dr. Sebastián Alejandro Muñoz Colorado",
    "telefono": "3205556677",
    "correo": "sebastian.munoz.hus@hospital.com",
    "rol": "Gastroenterólogo",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med014",
    "nombre": "Dra. Valentina Andrea Herrera Morales",
    "telefono": "3156667788",
    "correo": "valentina.herrera.hus@hospital.com",
    "rol": "Reumatóloga",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med015",
    "nombre": "Dr. Andrés Felipe Marín Rueda",
    "telefono": "3017778899",
    "correo": "andres.marin.hus@hospital.com",
    "rol": "Oncólogo",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med016",
    "nombre": "Dra. Juliana Carolina Ramírez Duque",
    "telefono": "3188889900",
    "correo": "juliana.ramirez.hus@hospital.com",
    "rol": "Nefróloga",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med017",
    "nombre": "Dr. Fernando José Osorio Cifuentes",
    "telefono": "3049990011",
    "correo": "fernando.osorio.hus@hospital.com",
    "rol": "Neumólogo",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med018",
    "nombre": "Dra. Alejandra Fernanda Soto Quintero",
    "telefono": "3170001122",
    "correo": "alejandra.soto.hus@hospital.com",
    "rol": "Infectóloga",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med019",
    "nombre": "Dr. Sergio Andrés Lozano Bernal",
    "telefono": "3021112233",
    "correo": "sergio.lozano.hus@hospital.com",
    "rol": "Anestesiólogo",
    "horario": "hor003",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med020",
    "nombre": "Dra. Laura Camila Reyes Acosta",
    "telefono": "3132223344",
    "correo": "laura.reyes.hus@hospital.com",
    "rol": "Radióloga",
    "horario": "hor007",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med021",
    "nombre": "Dr. Carlos Alberto Vélez Restrepo",
    "telefono": "3103334455",
    "correo": "carlos.velez.hus@hospital.com",
    "rol": "Psiquiatra",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med022",
    "nombre": "Dra. Sofía Andrea Moncada Duque",
    "telefono": "3004445566",
    "correo": "sofia.moncada.hus@hospital.com",
    "rol": "Médico de Familia",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med023",
    "nombre": "Dr. Miguel Ángel Sierra Bermúdez",
    "telefono": "3205556677",
    "correo": "miguel.sierra.hus@hospital.com",
    "rol": "Cirujano Plástico",
    "horario": "hor003",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med024",
    "nombre": "Dra. Daniela Carolina Quintero Díaz",
    "telefono": "3156667788",
    "correo": "daniela.quintero.hus@hospital.com",
    "rol": "Medicina Interna",
    "horario": "hor008",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med025",
    "nombre": "Dr. Jorge Eduardo Patiño Giraldo",
    "telefono": "3017778899",
    "correo": "jorge.patino.hus@hospital.com",
    "rol": "Geriatra",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med026",
    "nombre": "Dra. María Paula Londoño Mesa",
    "telefono": "3188889900",
    "correo": "maria.londono.hus@hospital.com",
    "rol": "Hematóloga",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med027",
    "nombre": "Dr. Fabián Andrés Restrepo Morales",
    "telefono": "3049990011",
    "correo": "fabian.restrepo.hus@hospital.com",
    "rol": "Endoscopista",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med028",
    "nombre": "Dra. Valeria Sofía Bedoya Cárdenas",
    "telefono": "3170001122",
    "correo": "valeria.bedoya.hus@hospital.com",
    "rol": "Medicina Física y Rehabilitación",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med029",
    "nombre": "Dr. Cristian David Muñoz Vargas",
    "telefono": "3021112233",
    "correo": "cristian.munoz.hus@hospital.com",
    "rol": "Oncólogo Radioterapeuta",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med030",
    "nombre": "Dra. Luisa Fernanda Ordoñez Blanco",
    "telefono": "3132223344",
    "correo": "luisa.ordonez.hus@hospital.com",
    "rol": "Genetista",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med031",
    "nombre": "Dr. Camilo Andrés Londoño Cortés",
    "telefono": "3103334455",
    "correo": "camilo.londono.hus@hospital.com",
    "rol": "Médico Forense",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med032",
    "nombre": "Dra. Andrea Catalina Betancur Ortiz",
    "telefono": "3004445566",
    "correo": "andrea.betancur.hus@hospital.com",
    "rol": "Nutrióloga Clínica",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med033",
    "nombre": "Dr. Juan Camilo Salazar Mesa",
    "telefono": "3205556677",
    "correo": "juan.salazar.hus@hospital.com",
    "rol": "Radioterapeuta",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med034",
    "nombre": "Dra. Laura Sofía Jiménez Bernal",
    "telefono": "3156667788",
    "correo": "laura.jimenez.hus@hospital.com",
    "rol": "Patóloga",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med035",
    "nombre": "Dr. Daniel Felipe Rico Patiño",
    "telefono": "3017778899",
    "correo": "daniel.rico.hus@hospital.com",
    "rol": "Toxicólogo",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med036",
    "nombre": "Dra. María José Parra Soto",
    "telefono": "3188889900",
    "correo": "maria.parra.hus@hospital.com",
    "rol": "Alergóloga",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med037",
    "nombre": "Dr. Andrés Felipe Quintero Ríos",
    "telefono": "3049990011",
    "correo": "andres.quintero.hus@hospital.com",
    "rol": "Inmunólogo",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med038",
    "nombre": "Dra. Carolina Isabel Vélez Restrepo",
    "telefono": "3170001122",
    "correo": "carolina.velez.hus@hospital.com",
    "rol": "Anatomopatóloga",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med039",
    "nombre": "Dr. Juan José Herrera Soto",
    "telefono": "3021112233",
    "correo": "juan.herrera.hus@hospital.com",
    "rol": "Epidemiólogo",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med040",
    "nombre": "Dra. Sofía Camila Arango Castro",
    "telefono": "3132223344",
    "correo": "sofia.arango.hus@hospital.com",
    "rol": "Médico Paliativista",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med041",
    "nombre": "Dr. Nicolás Felipe Botero Zuluaga",
    "telefono": "3104445566",
    "correo": "nicolas.botero.hus@hospital.com",
    "rol": "Médico Intensivista",
    "horario": "hor002",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med042",
    "nombre": "Dra. Gabriela Isabel Ortiz Patiño",
    "telefono": "3005556677",
    "correo": "gabriela.ortiz.hus@hospital.com",
    "rol": "Medico del Deporte",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med043",
    "nombre": "Dr. Santiago Andrés Cifuentes Vélez",
    "telefono": "3206667788",
    "correo": "santiago.cifuentes.hus@hospital.com",
    "rol": "Medico Ocupacional",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med044",
    "nombre": "Dra. Laura Ximena Bedoya Cárdenas",
    "telefono": "3157778899",
    "correo": "laura.bedoya.hus@hospital.com",
    "rol": "Medico Estético",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med045",
    "nombre": "Dr. Daniel Esteban Caro Rojas",
    "telefono": "3018889900",
    "correo": "daniel.caro.hus@hospital.com",
    "rol": "Médico General Urgencias",
    "horario": "hor002",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med046",
    "nombre": "Dra. Andrea Catalina Rivera Prada",
    "telefono": "3189990011",
    "correo": "andrea.rivera.hus@hospital.com",
    "rol": "Médico General Hospitalización",
    "horario": "hor008",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med047",
    "nombre": "Dr. Felipe Santiago Escobar López",
    "telefono": "3040001122",
    "correo": "felipe.escobar.hus@hospital.com",
    "rol": "Médico de Consulta Externa",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med048",
    "nombre": "Dra. María Camila Vargas Betancur",
    "telefono": "3171112233",
    "correo": "maria.vargas.hus@hospital.com",
    "rol": "Médico de Puericultura",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med049",
    "nombre": "Dr. Julián David García Herrera",
    "telefono": "3022223344",
    "correo": "julian.garcia.hus@hospital.com",
    "rol": "Médico de Laboratorio Clínico",
    "horario": "hor005",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },
  {
    "_id": "med050",
    "nombre": "Dra. Valeria Alejandra Molina Ospina",
    "telefono": "3133334455",
    "correo": "valeria.molina.hus@hospital.com",
    "rol": "Médico de Cuidados Domiciliarios",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos001"
  },

  {
    "_id": "med051",
    "nombre": "Dr. Pedro Juan Martínez Cárdenas",
    "telefono": "3104445566",
    "correo": "pedro.martinez.comuneros@hospital.com",
    "rol": "Cardiólogo Intervencionista",
    "horario": "hor003",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med052",
    "nombre": "Dra. Estefanía Sofía Rincón Sierra",
    "telefono": "3005556677",
    "correo": "estefania.rincon.comuneros@hospital.com",
    "rol": "Pediatra Neonatóloga",
    "horario": "hor002",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med053",
    "nombre": "Dr. Andrés Camilo Giraldo Duque",
    "telefono": "3206667788",
    "correo": "andres.giraldo.comuneros@hospital.com",
    "rol": "Cirujano Vascular",
    "horario": "hor003",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med054",
    "nombre": "Dra. Natalia Andrea Pinto Acosta",
    "telefono": "3157778899",
    "correo": "natalia.pinto.comuneros@hospital.com",
    "rol": "Médico Intensivista",
    "horario": "hor002",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med055",
    "nombre": "Dr. Felipe Andrés Moreno Vargas",
    "telefono": "3018889900",
    "correo": "felipe.moreno.comuneros@hospital.com",
    "rol": "Ginecólogo Oncólogo",
    "horario": "hor003",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med056",
    "nombre": "Dra. Carolina Alexandra Salazar Mesa",
    "telefono": "3189990011",
    "correo": "carolina.salazar.comuneros@hospital.com",
    "rol": "Neurocirujana",
    "horario": "hor003",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med057",
    "nombre": "Dr. Santiago José Herrera Ospina",
    "telefono": "3040001122",
    "correo": "santiago.herrera.comuneros@hospital.com",
    "rol": "Ortopedista Pediátrico",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med058",
    "nombre": "Dra. Camila Andrea Díaz Castro",
    "telefono": "3171112233",
    "correo": "camila.diaz.comuneros@hospital.com",
    "rol": "Dermatóloga Estética",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med059",
    "nombre": "Dr. Juan Sebastián Soto Prieto",
    "telefono": "3022223344",
    "correo": "juan.soto.comuneros@hospital.com",
    "rol": "Oftalmólogo Cirujano",
    "horario": "hor003",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med060",
    "nombre": "Dra. Sofía Valentina Rico García",
    "telefono": "3133334455",
    "correo": "sofia.rico.comuneros@hospital.com",
    "rol": "Otorrinolaringóloga Pediátrica",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med061",
    "nombre": "Dr. David Alejandro Quintero Marín",
    "telefono": "3104445566",
    "correo": "david.quintero.comuneros@hospital.com",
    "rol": "Urólogo Oncólogo",
    "horario": "hor003",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med062",
    "nombre": "Dra. Paula Andrea Vélez Giraldo",
    "telefono": "3005556677",
    "correo": "paula.velez.comuneros@hospital.com",
    "rol": "Endocrinóloga Pediátrica",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med063",
    "nombre": "Dr. Juan Camilo Bustamante Ríos",
    "telefono": "3206667788",
    "correo": "juan.bustamante.comuneros@hospital.com",
    "rol": "Gastroenterólogo Pediatra",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med064",
    "nombre": "Dra. Isabella Fernanda Prada Solano",
    "telefono": "3157778899",
    "correo": "isabella.prada.comuneros@hospital.com",
    "rol": "Reumatóloga Pediátrica",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med065",
    "nombre": "Dr. Alejandro José Marín Rueda",
    "telefono": "3018889900",
    "correo": "alejandro.marin.comuneros@hospital.com",
    "rol": "Oncólogo Pediátrico",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med066",
    "nombre": "Dra. Mariana Sofía Valencia Rincón",
    "telefono": "3189990011",
    "correo": "mariana.valencia.comuneros@hospital.com",
    "rol": "Nefróloga Pediátrica",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med067",
    "nombre": "Dr. Ricardo Andrés Cárdenas Gil",
    "telefono": "3040001122",
    "correo": "ricardo.cardenas.comuneros@hospital.com",
    "rol": "Neumólogo Pediatra",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med068",
    "nombre": "Dra. Gabriela Andrea Morales Vega",
    "telefono": "3171112233",
    "correo": "gabriela.morales.comuneros@hospital.com",
    "rol": "Infectóloga Pediátrica",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med069",
    "nombre": "Dr. Cristian Camilo Díaz Gómez",
    "telefono": "3022223344",
    "correo": "cristian.diaz.comuneros@hospital.com",
    "rol": "Anestesiólogo Pediátrico",
    "horario": "hor003",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med070",
    "nombre": "Dra. Andrea Sofía Pinto Ruiz",
    "telefono": "3133334455",
    "correo": "andrea.pinto.comuneros@hospital.com",
    "rol": "Radióloga Pediátrica",
    "horario": "hor007",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med071",
    "nombre": "Dr. Oscar Julián Rangel Pardo",
    "telefono": "3104445566",
    "correo": "oscar.rangel.comuneros@hospital.com",
    "rol": "Psiquiatra Infantil",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med072",
    "nombre": "Dra. Laura Vanessa Sierra Morales",
    "telefono": "3005556677",
    "correo": "laura.sierra.comuneros@hospital.com",
    "rol": "Médico General Pediatría",
    "horario": "hor008",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med073",
    "nombre": "Dr. Juan David Gómez Restrepo",
    "telefono": "3206667788",
    "correo": "juan.gomez.comuneros@hospital.com",
    "rol": "Cirujano de Tórax",
    "horario": "hor003",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med074",
    "nombre": "Dra. Karen Dayana Ortiz López",
    "telefono": "3157778899",
    "correo": "karen.ortiz.comuneros@hospital.com",
    "rol": "Médico de Trasplantes",
    "horario": "hor008",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med075",
    "nombre": "Dr. Gustavo Adolfo Quintero Rojas",
    "telefono": "3018889900",
    "correo": "gustavo.quintero.comuneros@hospital.com",
    "rol": "Médico Deportólogo",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med076",
    "nombre": "Dra. Natalia Andrea Vélez Martínez",
    "telefono": "3189990011",
    "correo": "natalia.velez.m@hospital.com",
    "rol": "Médico de Salud Ocupacional",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med077",
    "nombre": "Dr. Felipe Andrés Muñoz Restrepo",
    "telefono": "3040001122",
    "correo": "felipe.munoz.comuneros@hospital.com",
    "rol": "Médico Genetista Clínico",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med078",
    "nombre": "Dra. Carolina Sofía Londoño Vélez",
    "telefono": "3171112233",
    "correo": "carolina.londono.comuneros@hospital.com",
    "rol": "Médico de Trasplante de Órganos",
    "horario": "hor008",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med079",
    "nombre": "Dr. Juan Camilo Patiño Giraldo",
    "telefono": "3022223344",
    "correo": "juan.patino.comuneros@hospital.com",
    "rol": "Médico de Medicina Nuclear",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med080",
    "nombre": "Dra. Laura Cristina Valencia Pérez",
    "telefono": "3133334455",
    "correo": "laura.valencia.comuneros@hospital.com",
    "rol": "Médico de Cuidados Paliativos Pediátricos",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med081",
    "nombre": "Dr. Andrés Mauricio Restrepo Díaz",
    "telefono": "3104445566",
    "correo": "andres.restrepo.comuneros@hospital.com",
    "rol": "Neurólogo Infantil",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med082",
    "nombre": "Dra. Valeria Alejandra Cárdenas Gil",
    "telefono": "3005556677",
    "correo": "valeria.cardenas.comuneros@hospital.com",
    "rol": "Infectóloga Pediátrica",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med083",
    "nombre": "Dr. Camilo Esteban Ruiz Duque",
    "telefono": "3206667788",
    "correo": "camilo.ruiz.comuneros@hospital.com",
    "rol": "Cirujano Maxilofacial",
    "horario": "hor003",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med084",
    "nombre": "Dra. Manuela Fernanda Pardo Solano",
    "telefono": "3157778899",
    "correo": "manuela.pardo.comuneros@hospital.com",
    "rol": "Reumatóloga Infantil",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med085",
    "nombre": "Dr. Daniel Santiago López Martínez",
    "telefono": "3018889900",
    "correo": "daniel.lopez.comuneros@hospital.com",
    "rol": "Médico Paliativista",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med086",
    "nombre": "Dra. Isabella Andrea Moncada López",
    "telefono": "3189990011",
    "correo": "isabella.moncada.comuneros@hospital.com",
    "rol": "Médico Internista Intensivista",
    "horario": "hor002",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med087",
    "nombre": "Dr. Juan Esteban Gómez Soto",
    "telefono": "3040001122",
    "correo": "juan.gomez.soto.comuneros@hospital.com",
    "rol": "Cardiólogo Pediátrico",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med088",
    "nombre": "Dra. Sofía Alejandra Bedoya Mesa",
    "telefono": "3171112233",
    "correo": "sofia.bedoya.comuneros@hospital.com",
    "rol": "Gastroenteróloga Infantil",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med089",
    "nombre": "Dr. Ricardo Javier Osorio Vélez",
    "telefono": "3022223344",
    "correo": "ricardo.osorio.comuneros@hospital.com",
    "rol": "Urólogo Pediátrico",
    "horario": "hor003",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med090",
    "nombre": "Dra. Andrea Nicole Martínez Giraldo",
    "telefono": "3133334455",
    "correo": "andrea.martinez.comuneros@hospital.com",
    "rol": "Oftalmóloga Pediátrica",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med091",
    "nombre": "Dr. Luis Fernando Patiño Restrepo",
    "telefono": "3104445566",
    "correo": "luis.patino.comuneros@hospital.com",
    "rol": "Otorrinolaringólogo Infantil",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med092",
    "nombre": "Dra. Catalina María Gómez Castro",
    "telefono": "3005556677",
    "correo": "catalina.gomez.comuneros@hospital.com",
    "rol": "Cirujana Pediátrica",
    "horario": "hor003",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med093",
    "nombre": "Dr. Pablo Andrés López Rojas",
    "telefono": "3206667788",
    "correo": "pablo.lopez.comuneros@hospital.com",
    "rol": "Neurofisiólogo Clínico",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med094",
    "nombre": "Dra. Laura Valentina Ruiz Díaz",
    "telefono": "3157778899",
    "correo": "laura.ruiz.comuneros@hospital.com",
    "rol": "Nefrológa Infantil",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med095",
    "nombre": "Dr. Esteban Camilo Marín Restrepo",
    "telefono": "3018889900",
    "correo": "esteban.marin.comuneros@hospital.com",
    "rol": "Rehabilitador Pediátrico",
    "horario": "hor001",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  },
  {
    "_id": "med096",
    "nombre": "Dra. Tatiana Marcela Cárdenas Sierra",
    "telefono": "3189990011",
    "correo": "tatiana.cardenas.comuneros@hospital.com",
    "rol": "Médico de Trasplante de Médula Ósea",
    "horario": "hor008",
    "id_tipo_personal": "tipop002",
    "id_hospital": "hos002"
  }
]);

 // Validacion Mantenimiento
 
 db.createCollection("Mantenimiento", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "nombre",
        "correo",
        "telefono",
        "id_servicio_asignado",
        "id_hospital",
        "fecha_ingreso",
        "estado",
        "id_horario",
        "id_tipo_personal"
      ],
      properties: {
        _id: {
          bsonType: "string", // Definimos _id como string para tus IDs personalizados (ej. 'mantPers001')
          description: "identificador único para el personal de mantenimiento (mantPersXXX)"
        },
        nombre: {
          bsonType: "string",
          description: "nombre completo del personal de mantenimiento"
        },
        correo: {
          bsonType: "string",
          pattern: "^.+@.+\\..+$", // Ejemplo: patrón básico para correo electrónico
          description: "dirección de correo electrónico del personal"
        },
        telefono: {
          bsonType: "string",
          pattern: "^[0-9]{10}$", // Ejemplo: patrón para 10 dígitos numéricos
          description: "número de teléfono del personal"
        },
        id_servicio_asignado: {
          bsonType: "string", // Referencia al ID del servicio (ej. 'servm001')
          description: "ID del servicio de mantenimiento asignado"
        },
        id_hospital: {
          bsonType: "string", // Referencia al ID del hospital (ej. 'hos001')
          description: "ID del hospital al que pertenece el personal"
        },
        fecha_ingreso: {
          bsonType: "date", // Fecha de ingreso del personal
          description: "fecha de ingreso del personal a la institución"
        },
        estado: {
          bsonType: "string",
          enum: ["Activo", "Inactivo", "Suspendido"], // Estados permitidos
          description: "estado actual del personal (Activo, Inactivo, Suspendido)"
        },
        id_horario: {
          bsonType: "string", // Referencia al ID del horario (ej. 'hor006')
          description: "ID del horario de trabajo asignado"
        },
        id_tipo_personal: {
          bsonType: "string", // Referencia al ID del tipo de personal (ej. 'tipop004', 'tipop005')
          description: "ID del tipo de personal de mantenimiento"
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});


// Coleccion Mantenimineto

db.Mantenimiento.insertMany([
  // --- Personal de Mantenimiento para Hospital Universitario de Santander (HUS) - ObjectId('hos001') ---
  {
    "_id": "mantPers001",
    "nombre": "Carlos Alberto Ríos López",
    "correo": "carlos.rios@hus.com",
    "telefono": "3001234567",
    "id_servicio_asignado": "servm001", // Mantenimiento Preventivo Equipo Médico
    "id_hospital": "hos001",
    "fecha_ingreso": ISODate("2020-03-10T00:00:00Z"),
    "estado": "Activo",
    "id_horario": "hor006",
    "id_tipo_personal": "tipop005" // Técnico Especializado
  },
  {
    "_id": "mantPers002",
    "nombre": "Ana María Patiño Morales",
    "correo": "ana.patino@hus.com",
    "telefono": "3102345678",
    "id_servicio_asignado": "servm002", // Reparación Equipo General
    "id_hospital": "hos001",
    "fecha_ingreso": ISODate("2021-06-20T00:00:00Z"),
    "estado": "Activo",
    "id_horario": "hor006",
    "id_tipo_personal": "tipop004" // Personal de Mantenimiento
  },
  {
    "_id": "mantPers003",
    "nombre": "Jorge Esteban Castro Restrepo",
    "correo": "jorge.castro@hus.com",
    "telefono": "3203456789",
    "id_servicio_asignado": "servm005", // Mantenimiento Fontanería y Sanitario
    "id_hospital": "hos001",
    "fecha_ingreso": ISODate("2019-11-01T00:00:00Z"),
    "estado": "Activo",
    "id_horario": "hor008", // Horario Rotativo
    "id_tipo_personal": "tipop004"
  },
  {
    "_id": "mantPers004",
    "nombre": "Laura Sofía Vargas Díaz",
    "correo": "laura.vargas@hus.com",
    "telefono": "3154567890",
    "id_servicio_asignado": "servm004", // Mantenimiento Sistemas Eléctricos
    "id_hospital": "hos001",
    "fecha_ingreso": ISODate("2022-01-15T00:00:00Z"),
    "estado": "Activo",
    "id_horario": "hor006",
    "id_tipo_personal": "tipop005"
  },
  {
    "_id": "mantPers005",
    "nombre": "Andrés Felipe Quintero López",
    "correo": "andres.quintero@hus.com",
    "telefono": "3015678901",
    "id_servicio_asignado": "servm006", // Limpieza y Desinfección Profunda
    "id_hospital": "hos001",
    "fecha_ingreso": ISODate("2023-04-01T00:00:00Z"),
    "estado": "Activo",
    "id_horario": "hor006",
    "id_tipo_personal": "tipop004"
  },

  // --- Personal de Mantenimiento para Los Comuneros Hospital Universitario de Bucaramanga - ObjectId('hos002') ---
  {
    "_id": "mantPers006",
    "nombre": "María Paula Durán Mesa",
    "correo": "maria.duran@comuneros.com",
    "telefono": "3106789012",
    "id_servicio_asignado": "servm001",
    "id_hospital": "hos002",
    "fecha_ingreso": ISODate("2018-08-22T00:00:00Z"),
    "estado": "Activo",
    "id_horario": "hor006",
    "id_tipo_personal": "tipop005"
  },
  {
    "_id": "mantPers007",
    "nombre": "Fabio Andrés Ortiz Pardo",
    "correo": "fabio.ortiz@comuneros.com",
    "telefono": "3007890123",
    "id_servicio_asignado": "servm002",
    "id_hospital": "hos002",
    "fecha_ingreso": ISODate("2020-01-05T00:00:00Z"),
    "estado": "Activo",
    "id_horario": "hor006",
    "id_tipo_personal": "tipop004"
  },
  {
    "_id": "mantPers008",
    "nombre": "Sofía Valentina Bernal Sánchez",
    "correo": "sofia.bernal@comuneros.com",
    "telefono": "3208901234",
    "id_servicio_asignado": "servm005",
    "id_hospital": "hos002",
    "fecha_ingreso": ISODate("2022-09-10T00:00:00Z"),
    "estado": "Activo",
    "id_horario": "hor008",
    "id_tipo_personal": "tipop004"
  },
  {
    "_id": "mantPers009",
    "nombre": "Julián David Sierra Rojas",
    "correo": "julian.sierra@comuneros.com",
    "telefono": "3159012345",
    "id_servicio_asignado": "servm004",
    "id_hospital": "hos002",
    "fecha_ingreso": ISODate("2021-03-01T00:00:00Z"),
    "estado": "Activo",
    "id_horario": "hor006",
    "id_tipo_personal": "tipop005"
  },
  {
    "_id": "mantPers010",
    "nombre": "Andrea Carolina Vélez Díaz",
    "correo": "andrea.velez@comuneros.com",
    "telefono": "3010123456",
    "id_servicio_asignado": "servm006",
    "id_hospital": "hos002",
    "fecha_ingreso": ISODate("2023-07-18T00:00:00Z"),
    "estado": "Activo",
    "id_horario": "hor006",
    "id_tipo_personal": "tipop004"
  },

  // --- Personal de Mantenimiento para Clínica Materno Infantil San Luis - ObjectId('hos003') ---
  {
    "_id": "mantPers011",
    "nombre": "Roberto Carlos Gómez Pérez",
    "correo": "roberto.gomez@sanluis.com",
    "telefono": "3101234567",
    "id_servicio_asignado": "servm001",
    "id_hospital": "hos003",
    "fecha_ingreso": ISODate("2017-02-05T00:00:00Z"),
    "estado": "Activo",
    "id_horario": "hor006",
    "id_tipo_personal": "tipop005"
  },
  {
    "_id": "mantPers012",
    "nombre": "Diana Marcela Londoño Rincón",
    "correo": "diana.londono@sanluis.com",
    "telefono": "3002345678",
    "id_servicio_asignado": "servm002",
    "id_hospital": "hos003",
    "fecha_ingreso": ISODate("2019-09-12T00:00:00Z"),
    "estado": "Activo",
    "id_horario": "hor006",
    "id_tipo_personal": "tipop004"
  },
  {
    "_id": "mantPers013",
    "nombre": "Miguel Ángel Herrera Soto",
    "correo": "miguel.herrera@sanluis.com",
    "telefono": "3203456789",
    "id_servicio_asignado": "servm005",
    "id_hospital": "hos003",
    "fecha_ingreso": ISODate("2020-05-30T00:00:00Z"),
    "estado": "Activo",
    "id_horario": "hor008",
    "id_tipo_personal": "tipop004"
  },
  {
    "_id": "mantPers014",
    "nombre": "Valeria Alejandra Restrepo Quintero",
    "correo": "valeria.restrepo@sanluis.com",
    "telefono": "3154567890",
    "id_servicio_asignado": "servm004",
    "id_hospital": "hos003",
    "fecha_ingreso": ISODate("2022-11-08T00:00:00Z"),
    "estado": "Activo",
    "id_horario": "hor006",
    "id_tipo_personal": "tipop005"
  },
  {
    "_id": "mantPers015",
    "nombre": "Juan Pablo Duque Morales",
    "correo": "juan.duque@sanluis.com",
    "telefono": "3015678901",
    "id_servicio_asignado": "servm006",
    "id_hospital": "hos003",
    "fecha_ingreso": ISODate("2023-02-25T00:00:00Z"),
    "estado": "Activo",
    "id_horario": "hor006",
    "id_tipo_personal": "tipop004"
  }
]);


  // Validados administrativohospital
  
  db.createCollection("AdministrativoHospital", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "id_administrativo",
          "id_hospital"
        ],
        properties: {
          _id: {
            bsonType: "objectId", // Keep _id as ObjectId for this collection's primary key
            description: "ID único de la relación Administrativo-Hospital."
          },
          id_administrativo: {
            bsonType: "string", // CHANGE HERE: Now it expects a string
            description: "Referencia al ID del administrativo (FK). Debe ser un string."
          },
          id_hospital: {
            bsonType: "string", // CHANGE HERE: Now it expects a string
            description: "Referencia al ID del hospital (FK). Debe ser un string."
          }
        }
      }
    },
    validationLevel: "strict",
    validationAction: "error"
  });


// Coleccion Administravitohospital

db.AdministrativoHospital.insertMany([
  {
    "_id": ObjectId(),
    "id_administrativo": 'adm001', // Now directly use the string 'adm001'
    "id_hospital": 'hos001'      // Now directly use the string 'hos001'
  },
  {
    "_id": ObjectId(),
    "id_administrativo": 'adm001',
    "id_hospital": 'hos002'
  },
  {
    "_id": ObjectId(),
    "id_administrativo": 'adm001',
    "id_hospital": 'hos003'
  }
]);


// Validacion Pacientes

db.createCollection("Pacientes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "nombre",
        "fecha_nacimiento",
        "genero",
        "direccion",
        "telefono",
        "correo",
        "hospital_id",
        "eps_id",      // Changed to _id reference
        "seguro_id"    // Changed to _id reference
      ],
      properties: {
        _id: {
          bsonType: "objectId"
        },
        nombre: {
          bsonType: "string"
        },
        fecha_nacimiento: {
          bsonType: "date"
        },
        genero: {
          bsonType: "string",
          enum: ["Masculino", "Femenino", "Otro"]
        },
        direccion: {
          bsonType: "string"
        },
        telefono: {
          bsonType: "string",
          pattern: "^[0-9]{10}$"
        },
        correo: {
          bsonType: "string",
          pattern: "^.+@.+\\..+$"
        },
        hospital_id: {
          bsonType: "objectId", // Reference to Hospitales _id
          description: "ID del hospital al que el paciente está asociado."
        },
        eps_id: {
          bsonType: "objectId", // Reference to EPS _id
          description: "ID de la Entidad Promotora de Salud (EPS) del paciente."
        },
        seguro_id: {
          bsonType: "objectId", // Reference to Seguros _id (Plan de Salud)
          description: "ID del plan de seguro de salud del paciente."
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});



// Coleccion Pacientes

db.Pacientes.insertMany([
  {
    _id: ObjectId('be2d259697cd42fc99d36162'),
    nombre: 'Maria Lopez',
    fecha_nacimiento: ISODate('1970-08-11T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Calle 110 #50-12, Santa Marta',
    telefono: '2039993046',
    correo: 'maria.lopez746@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('bc63b5c2331d4fcdb26c517c'),
    nombre: 'Andres Lopez',
    fecha_nacimiento: ISODate('1985-09-13T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Transversal 40 #58-10, Pereira',
    telefono: '8573506746',
    correo: 'andres.lopez824@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('be5639854e484337a5f7fd40'),
    nombre: 'Juan Torres',
    fecha_nacimiento: ISODate('1954-11-16T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Calle 20 #68-67, Bogota',
    telefono: '5263194206',
    correo: 'juan.torres333@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('65dc333014f4439ea1da0e34'),
    nombre: 'Valeria Perez',
    fecha_nacimiento: ISODate('1966-12-06T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 110 #43-37, Cartagena',
    telefono: '1183818933',
    correo: 'valeria.perez29@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('048f014687e34335a6a79477'),
    nombre: 'Valeria Martinez',
    fecha_nacimiento: ISODate('1960-06-04T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Transversal 93 #81-28, Barranquilla',
    telefono: '6477905473',
    correo: 'valeria.martinez664@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('ec7e983507f34fada5a4501e'),
    nombre: 'Andres Martinez',
    fecha_nacimiento: ISODate('1946-11-02T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Diagonal 25 #47-43, Bucaramanga',
    telefono: '0909314707',
    correo: 'andres.martinez547@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('3524f8a2f3414c1d98fcd28e'),
    nombre: 'Andres Torres',
    fecha_nacimiento: ISODate('1993-06-01T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Diagonal 7 #22-7, Bogota',
    telefono: '5535415208',
    correo: 'andres.torres28@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('8d89f735a02543188d6a7d43'),
    nombre: 'Valeria Sanchez',
    fecha_nacimiento: ISODate('1989-08-31T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 11 #73-24, Bogota',
    telefono: '7720662724',
    correo: 'valeria.sanchez893@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('066bd5575f2f407ab17240af'),
    nombre: 'Juan Sanchez',
    fecha_nacimiento: ISODate('2000-02-23T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Carrera 194 #68-89, Manizales',
    telefono: '1251183155',
    correo: 'juan.sanchez477@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('ba5eb1c2ad2b4f6d8d084ce5'),
    nombre: 'Isabella Sanchez',
    fecha_nacimiento: ISODate('1977-09-28T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Transversal 61 #25-26, Barranquilla',
    telefono: '5824276286',
    correo: 'isabella.sanchez773@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('f48a3c0baf544bcc867f790c'),
    nombre: 'Andres Hernandez',
    fecha_nacimiento: ISODate('1988-12-22T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Avenida 12 #53-68, Cartagena',
    telefono: '8171573253',
    correo: 'andres.hernandez72@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('85e612ca3f234b9493005ab9'),
    nombre: 'Juan Martinez',
    fecha_nacimiento: ISODate('1950-04-07T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Transversal 69 #71-86, Manizales',
    telefono: '7397083359',
    correo: 'juan.martinez129@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('f5e7d20c635d4575ab41b4e6'),
    nombre: 'Miguel Torres',
    fecha_nacimiento: ISODate('1958-08-17T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Avenida 26 #65-49, Bogota',
    telefono: '5983069183',
    correo: 'miguel.torres414@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('fca35a6dea3f4cc082275df5'),
    nombre: 'Maria Rodriguez',
    fecha_nacimiento: ISODate('1982-12-26T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Avenida 94 #17-58, Medellin',
    telefono: '7997164497',
    correo: 'maria.rodriguez765@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('f9d0b158dadc4667a34d451c'),
    nombre: 'Isabella Martinez',
    fecha_nacimiento: ISODate('1959-08-10T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Avenida 185 #43-56, Barranquilla',
    telefono: '7525404118',
    correo: 'isabella.martinez690@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('bb00acc6e59e4979a884d61e'),
    nombre: 'Javier Gonzalez',
    fecha_nacimiento: ISODate('1954-04-16T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Avenida 104 #86-7, Medellin',
    telefono: '6089056284',
    correo: 'javier.gonzalez905@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('5cec787741d54b4b92beb29c'),
    nombre: 'Valeria Perez',
    fecha_nacimiento: ISODate('1949-07-15T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 106 #20-92, Bucaramanga',
    telefono: '7664557514',
    correo: 'valeria.perez171@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('9b6606b94359493a9210b8e0'),
    nombre: 'Andres Hernandez',
    fecha_nacimiento: ISODate('1970-07-30T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Diagonal 75 #21-60, Cucuta',
    telefono: '9046474603',
    correo: 'andres.hernandez847@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('4f93178bf13c4a1fb79c758a'),
    nombre: 'Ricardo Lopez',
    fecha_nacimiento: ISODate('1989-06-01T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Avenida 43 #59-7, Medellin',
    telefono: '0072615047',
    correo: 'ricardo.lopez499@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('c428a1233cfd4a8d934fb460'),
    nombre: 'Carolina Ramirez',
    fecha_nacimiento: ISODate('1954-03-18T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 128 #46-7, Pereira',
    telefono: '0431476775',
    correo: 'carolina.ramirez949@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('b7856f0086cc491fa39f1294'),
    nombre: 'Fernando Rodriguez',
    fecha_nacimiento: ISODate('1951-12-21T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 170 #38-55, Medellin',
    telefono: '4091612114',
    correo: 'fernando.rodriguez250@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('5cfd89f776cf4a7eaab02319'),
    nombre: 'Ricardo Ramirez',
    fecha_nacimiento: ISODate('1998-02-27T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Transversal 37 #36-19, Bogota',
    telefono: '4258157354',
    correo: 'ricardo.ramirez734@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('72e124bde5d24daf9fb5265a'),
    nombre: 'Ricardo Torres',
    fecha_nacimiento: ISODate('1995-07-15T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Diagonal 148 #92-27, Cucuta',
    telefono: '4204720893',
    correo: 'ricardo.torres147@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('7775b869954f4c609cb9dc92'),
    nombre: 'Daniela Sanchez',
    fecha_nacimiento: ISODate('1965-07-04T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Avenida 91 #4-72, Manizales',
    telefono: '0572989496',
    correo: 'daniela.sanchez836@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('4e222e7e65804ccf927a0234'),
    nombre: 'Andres Gonzalez',
    fecha_nacimiento: ISODate('1951-11-01T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 23 #7-64, Medellin',
    telefono: '6865948160',
    correo: 'andres.gonzalez22@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('93e2f21cd1b044539246e749'),
    nombre: 'Diego Martinez',
    fecha_nacimiento: ISODate('1977-05-29T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Calle 89 #68-83, Santa Marta',
    telefono: '0633742598',
    correo: 'diego.martinez489@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('70db30ff717e439584dce9f3'),
    nombre: 'Ricardo Hernandez',
    fecha_nacimiento: ISODate('1971-10-17T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 46 #39-84, Manizales',
    telefono: '6997640746',
    correo: 'ricardo.hernandez589@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('cb4a253860604a9f9da41c33'),
    nombre: 'Ricardo Gonzalez',
    fecha_nacimiento: ISODate('1993-08-09T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Carrera 156 #15-66, Cali',
    telefono: '5726642059',
    correo: 'ricardo.gonzalez167@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('745460e515dc4304951ddcea'),
    nombre: 'Fernando Gomez',
    fecha_nacimiento: ISODate('1987-10-15T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Calle 2 #50-14, Bogota',
    telefono: '3903257141',
    correo: 'fernando.gomez503@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('d031f50cb7a644058400fc20'),
    nombre: 'Fernando Martinez',
    fecha_nacimiento: ISODate('1955-09-09T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Carrera 36 #66-82, Santa Marta',
    telefono: '3954142210',
    correo: 'fernando.martinez158@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('6527d68ce81b455db16bd420'),
    nombre: 'Ricardo Ramirez',
    fecha_nacimiento: ISODate('1947-03-30T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Carrera 174 #52-87, Pereira',
    telefono: '9243570762',
    correo: 'ricardo.ramirez159@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('3e2a0a03299e4be9b7aa2650'),
    nombre: 'Javier Sanchez',
    fecha_nacimiento: ISODate('2007-05-25T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Transversal 68 #29-52, Cartagena',
    telefono: '1172816674',
    correo: 'javier.sanchez605@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('2b4c0443bb0446c89955b637'),
    nombre: 'Maria Perez',
    fecha_nacimiento: ISODate('1997-12-11T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Transversal 33 #33-62, Medellin',
    telefono: '2251051757',
    correo: 'maria.perez398@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('6a6b574e72ec4bbfad7d8ba2'),
    nombre: 'Diego Hernandez',
    fecha_nacimiento: ISODate('1980-12-20T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Avenida 11 #61-91, Bogota',
    telefono: '5322913205',
    correo: 'diego.hernandez121@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('166b32fac8db4e13a013c63f'),
    nombre: 'Sofia Torres',
    fecha_nacimiento: ISODate('1995-06-03T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Carrera 41 #15-86, Cucuta',
    telefono: '7427525277',
    correo: 'sofia.torres610@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('3dfc0771329b41e7ab764d0c'),
    nombre: 'Carolina Gonzalez',
    fecha_nacimiento: ISODate('1983-04-23T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Avenida 54 #59-43, Bogota',
    telefono: '5832479980',
    correo: 'carolina.gonzalez823@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('bfa69a6e428e47b78481d345'),
    nombre: 'Ricardo Gomez',
    fecha_nacimiento: ISODate('1988-06-07T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Calle 153 #5-78, Cucuta',
    telefono: '4548096855',
    correo: 'ricardo.gomez860@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('b259d5fcc0f34f3bb1f94e4b'),
    nombre: 'Gabriela Sanchez',
    fecha_nacimiento: ISODate('1949-01-22T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Transversal 144 #84-19, Cucuta',
    telefono: '7507195198',
    correo: 'gabriela.sanchez611@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('0df5e5db9d384398af1cda01'),
    nombre: 'Sofia Ramirez',
    fecha_nacimiento: ISODate('1965-01-04T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 150 #75-4, Santa Marta',
    telefono: '7106700250',
    correo: 'sofia.ramirez438@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('961401f855dc461886f662cf'),
    nombre: 'Camila Sanchez',
    fecha_nacimiento: ISODate('1992-01-15T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Carrera 182 #32-38, Pereira',
    telefono: '0058440022',
    correo: 'camila.sanchez99@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('db38509455ea4ab793f5c52b'),
    nombre: 'Maria Gomez',
    fecha_nacimiento: ISODate('2003-01-06T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Transversal 73 #50-76, Santa Marta',
    telefono: '8380703861',
    correo: 'maria.gomez454@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('4e4994187c7f41c39315a6a4'),
    nombre: 'Juan Torres',
    fecha_nacimiento: ISODate('2002-02-15T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 138 #5-98, Barranquilla',
    telefono: '9734712069',
    correo: 'juan.torres460@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('4aad07a0aa4649e99d19c47c'),
    nombre: 'Laura Martinez',
    fecha_nacimiento: ISODate('2004-06-13T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 4 #46-17, Pereira',
    telefono: '8929738205',
    correo: 'laura.martinez159@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('d052b7a8e7f64d6eb477934e'),
    nombre: 'Valeria Lopez',
    fecha_nacimiento: ISODate('1993-06-08T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Calle 195 #10-3, Santa Marta',
    telefono: '3318625462',
    correo: 'valeria.lopez165@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('6c6bca45cde646a39bf39578'),
    nombre: 'Javier Perez',
    fecha_nacimiento: ISODate('1986-09-02T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 61 #47-39, Barranquilla',
    telefono: '4752721509',
    correo: 'javier.perez86@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('c9f3beddbd3c4a94ad39fe5d'),
    nombre: 'Carlos Martinez',
    fecha_nacimiento: ISODate('1992-09-23T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Avenida 71 #57-71, Cartagena',
    telefono: '6957490690',
    correo: 'carlos.martinez111@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('e9e69bca8b85462eb1f380eb'),
    nombre: 'Maria Perez',
    fecha_nacimiento: ISODate('1949-10-02T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Carrera 36 #31-33, Bogota',
    telefono: '9498672437',
    correo: 'maria.perez902@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('1c4d89dd7b104ab495c4ab49'),
    nombre: 'Diego Torres',
    fecha_nacimiento: ISODate('1990-06-05T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Calle 9 #10-23, Cali',
    telefono: '3851457091',
    correo: 'diego.torres729@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('76651b9f4bdc4124bf50117c'),
    nombre: 'Ricardo Torres',
    fecha_nacimiento: ISODate('1975-07-17T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 24 #32-11, Cartagena',
    telefono: '7423095563',
    correo: 'ricardo.torres552@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('0650bc4416074d2e9d0ef7c1'),
    nombre: 'Pedro Hernandez',
    fecha_nacimiento: ISODate('1962-10-14T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 129 #10-53, Bucaramanga',
    telefono: '9607634023',
    correo: 'pedro.hernandez726@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('06d62b3720304e6abb4cc577'),
    nombre: 'Diego Sanchez',
    fecha_nacimiento: ISODate('1954-11-24T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Carrera 82 #59-35, Bucaramanga',
    telefono: '5119183401',
    correo: 'diego.sanchez696@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('d6aaf7c318ac43e3adbb2e72'),
    nombre: 'Isabella Torres',
    fecha_nacimiento: ISODate('1976-01-10T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Avenida 105 #22-15, Medellin',
    telefono: '1289579473',
    correo: 'isabella.torres788@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('9c39ac00c49846d3b6c69b0a'),
    nombre: 'Valeria Sanchez',
    fecha_nacimiento: ISODate('1962-03-28T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 57 #94-30, Medellin',
    telefono: '7252240983',
    correo: 'valeria.sanchez286@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('8907215da0eb4eccad75ea57'),
    nombre: 'Juan Hernandez',
    fecha_nacimiento: ISODate('2005-12-12T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Diagonal 41 #10-33, Bogota',
    telefono: '6694667866',
    correo: 'juan.hernandez156@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('d166a5fa80444447997c8686'),
    nombre: 'Gabriela Torres',
    fecha_nacimiento: ISODate('1976-01-03T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Calle 9 #69-54, Bucaramanga',
    telefono: '3041016785',
    correo: 'gabriela.torres227@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('c693f4aa32c84bb2bfcc0330'),
    nombre: 'Gabriela Ramirez',
    fecha_nacimiento: ISODate('1984-01-09T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 130 #98-45, Bogota',
    telefono: '2040625379',
    correo: 'gabriela.ramirez71@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('b7789aec0de54189859f4f2a'),
    nombre: 'Miguel Sanchez',
    fecha_nacimiento: ISODate('1950-07-14T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Avenida 132 #65-89, Cucuta',
    telefono: '4723895889',
    correo: 'miguel.sanchez160@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('5e24042b3b4b428dbb9b29ce'),
    nombre: 'Sofia Martinez',
    fecha_nacimiento: ISODate('1961-06-23T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Carrera 93 #86-81, Bucaramanga',
    telefono: '0374208099',
    correo: 'sofia.martinez937@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('ba0fd304eb2a4f8b814221b4'),
    nombre: 'Ricardo Lopez',
    fecha_nacimiento: ISODate('1979-10-14T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Transversal 191 #74-42, Santa Marta',
    telefono: '3184091367',
    correo: 'ricardo.lopez717@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('ecfe150a67594c5ea9e6e81c'),
    nombre: 'Carlos Gonzalez',
    fecha_nacimiento: ISODate('1988-09-15T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Diagonal 129 #29-86, Pereira',
    telefono: '0282972980',
    correo: 'carlos.gonzalez219@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('2bad5b409b82480d80046bb2'),
    nombre: 'Javier Martinez',
    fecha_nacimiento: ISODate('1951-11-16T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 73 #11-94, Bucaramanga',
    telefono: '2665199232',
    correo: 'javier.martinez708@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('9704959231fb4ff2b9b548b3'),
    nombre: 'Javier Martinez',
    fecha_nacimiento: ISODate('1963-05-31T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Avenida 44 #67-73, Santa Marta',
    telefono: '2302185687',
    correo: 'javier.martinez36@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('53c735f8a8a145c1a727f656'),
    nombre: 'Luis Gonzalez',
    fecha_nacimiento: ISODate('1954-11-21T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Calle 56 #95-74, Pereira',
    telefono: '6104199037',
    correo: 'luis.gonzalez477@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('f088b7532e6947858828baac'),
    nombre: 'Luis Hernandez',
    fecha_nacimiento: ISODate('1993-10-09T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Carrera 115 #17-22, Bucaramanga',
    telefono: '0876547863',
    correo: 'luis.hernandez992@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('df812860f01649e4a4216c31'),
    nombre: 'Pedro Sanchez',
    fecha_nacimiento: ISODate('1976-04-27T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Carrera 168 #83-94, Cali',
    telefono: '7219284741',
    correo: 'pedro.sanchez659@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('33128e47aef64efcab4b7232'),
    nombre: 'Laura Ramirez',
    fecha_nacimiento: ISODate('1997-07-20T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Carrera 134 #93-28, Bucaramanga',
    telefono: '1542902129',
    correo: 'laura.ramirez179@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('14613df347ed419ba9901956'),
    nombre: 'Carolina Sanchez',
    fecha_nacimiento: ISODate('1954-01-11T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 16 #60-38, Bogota',
    telefono: '3322722522',
    correo: 'carolina.sanchez601@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('b31b50ce01194e899b4f99a3'),
    nombre: 'Pedro Gomez',
    fecha_nacimiento: ISODate('1961-02-20T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Avenida 191 #66-33, Cartagena',
    telefono: '4110788607',
    correo: 'pedro.gomez671@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('70a17c64e7e949328a1d9079'),
    nombre: 'Ana Torres',
    fecha_nacimiento: ISODate('1990-06-18T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Transversal 133 #50-62, Medellin',
    telefono: '0114635805',
    correo: 'ana.torres896@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('4f26c38e2ab44c4cadc48342'),
    nombre: 'Juan Torres',
    fecha_nacimiento: ISODate('1981-04-01T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Carrera 47 #30-1, Santa Marta',
    telefono: '9212487097',
    correo: 'juan.torres281@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('4b1eee6b3fc7432a95eb3529'),
    nombre: 'Andres Hernandez',
    fecha_nacimiento: ISODate('1977-05-06T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Transversal 135 #42-90, Pereira',
    telefono: '0508552401',
    correo: 'andres.hernandez697@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('ba93fb1f3e974c3ebb6b6abf'),
    nombre: 'Pedro Ramirez',
    fecha_nacimiento: ISODate('1946-10-02T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Calle 136 #2-99, Pereira',
    telefono: '5603986145',
    correo: 'pedro.ramirez959@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('c2b458b34b3247c4a331f2b3'),
    nombre: 'Valeria Martinez',
    fecha_nacimiento: ISODate('1946-03-05T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Transversal 115 #18-53, Bogota',
    telefono: '1555151469',
    correo: 'valeria.martinez378@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('5a40aa30461d4c4e8eee73fc'),
    nombre: 'Pedro Sanchez',
    fecha_nacimiento: ISODate('1977-11-04T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 166 #20-71, Manizales',
    telefono: '4927143178',
    correo: 'pedro.sanchez50@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('18db4a446d3b49bf9728aa4b'),
    nombre: 'Fernando Martinez',
    fecha_nacimiento: ISODate('1967-06-07T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Transversal 59 #90-93, Bogota',
    telefono: '8416711373',
    correo: 'fernando.martinez455@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('89c86340762d4df98f250d46'),
    nombre: 'Daniela Ramirez',
    fecha_nacimiento: ISODate('1992-10-08T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Transversal 197 #12-2, Manizales',
    telefono: '2867540586',
    correo: 'daniela.ramirez839@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('a0ea0e86d8cd4b43bdd2ad21'),
    nombre: 'Fernando Torres',
    fecha_nacimiento: ISODate('1994-10-21T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Avenida 179 #81-78, Bogota',
    telefono: '9842857573',
    correo: 'fernando.torres167@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('1d8b4843eeaa499daae0fb5c'),
    nombre: 'Javier Martinez',
    fecha_nacimiento: ISODate('1946-09-19T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Avenida 55 #53-97, Santa Marta',
    telefono: '9632827840',
    correo: 'javier.martinez677@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('fe70f2eead884251b086a0a6'),
    nombre: 'Daniela Ramirez',
    fecha_nacimiento: ISODate('1983-03-04T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Transversal 175 #50-94, Pereira',
    telefono: '9032940532',
    correo: 'daniela.ramirez430@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('940308efe56f4f629e4314b1'),
    nombre: 'Andres Rodriguez',
    fecha_nacimiento: ISODate('1947-03-30T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Avenida 101 #13-68, Pereira',
    telefono: '2978621173',
    correo: 'andres.rodriguez671@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('f2337c839ce64d50aaefed4c'),
    nombre: 'Diego Gonzalez',
    fecha_nacimiento: ISODate('1967-03-01T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Carrera 64 #75-28, Manizales',
    telefono: '3406367687',
    correo: 'diego.gonzalez85@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('1a76bf8abf60491d860b3306'),
    nombre: 'Diego Ramirez',
    fecha_nacimiento: ISODate('1952-04-02T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 120 #81-40, Pereira',
    telefono: '5867741228',
    correo: 'diego.ramirez194@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('c9ecca96846d4d43b1cc5d99'),
    nombre: 'Andres Gonzalez',
    fecha_nacimiento: ISODate('1984-06-08T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 32 #38-80, Medellin',
    telefono: '7460770976',
    correo: 'andres.gonzalez468@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('4a7efc467e3b457092e5b427'),
    nombre: 'Diego Hernandez',
    fecha_nacimiento: ISODate('1960-01-22T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 1 #29-28, Manizales',
    telefono: '6553169117',
    correo: 'diego.hernandez608@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('6a285ef536a34b278a394934'),
    nombre: 'Daniela Gonzalez',
    fecha_nacimiento: ISODate('1970-11-09T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Transversal 7 #16-55, Pereira',
    telefono: '1681410675',
    correo: 'daniela.gonzalez686@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('65e109eeca764296a4aecd66'),
    nombre: 'Daniela Torres',
    fecha_nacimiento: ISODate('1995-01-23T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Carrera 194 #50-64, Barranquilla',
    telefono: '7620812703',
    correo: 'daniela.torres253@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('66151c9850a14d1783dc8997'),
    nombre: 'Laura Sanchez',
    fecha_nacimiento: ISODate('1989-11-20T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Transversal 153 #12-31, Bogota',
    telefono: '6281309840',
    correo: 'laura.sanchez549@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('3b7329c58daa468491eb33a2'),
    nombre: 'Gabriela Ramirez',
    fecha_nacimiento: ISODate('1980-10-04T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Calle 113 #57-72, Bogota',
    telefono: '3581642899',
    correo: 'gabriela.ramirez804@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('e736b05407874ee783617458'),
    nombre: 'Gabriela Hernandez',
    fecha_nacimiento: ISODate('1992-12-25T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Transversal 141 #27-50, Bogota',
    telefono: '6252562021',
    correo: 'gabriela.hernandez368@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('c4d4af453241471b9bcdc79c'),
    nombre: 'Sofia Ramirez',
    fecha_nacimiento: ISODate('1957-04-15T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Calle 183 #21-47, Pereira',
    telefono: '6647315925',
    correo: 'sofia.ramirez76@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('df2f85ce0f3542d48affd3bc'),
    nombre: 'Miguel Gomez',
    fecha_nacimiento: ISODate('1992-05-09T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Carrera 66 #94-15, Manizales',
    telefono: '5268118756',
    correo: 'miguel.gomez429@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('f4220b7b18ca4834a859267b'),
    nombre: 'Daniela Ramirez',
    fecha_nacimiento: ISODate('1962-12-08T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Carrera 131 #86-55, Cali',
    telefono: '0620345259',
    correo: 'daniela.ramirez145@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('ecbac7787e1f4415b775928e'),
    nombre: 'Valeria Hernandez',
    fecha_nacimiento: ISODate('1984-10-03T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Carrera 173 #90-17, Bogota',
    telefono: '6246727117',
    correo: 'valeria.hernandez849@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('5f1526f4b9d747aaa7fa1e57'),
    nombre: 'Ricardo Rodriguez',
    fecha_nacimiento: ISODate('1987-02-22T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Transversal 125 #35-92, Santa Marta',
    telefono: '4569864377',
    correo: 'ricardo.rodriguez892@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('3e4c0b2ca9d04dc297effba0'),
    nombre: 'Carolina Rodriguez',
    fecha_nacimiento: ISODate('1987-05-28T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 182 #24-15, Bucaramanga',
    telefono: '2587923438',
    correo: 'carolina.rodriguez594@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('f72fa93c346547909d497814'),
    nombre: 'Miguel Sanchez',
    fecha_nacimiento: ISODate('1968-05-17T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Diagonal 45 #66-4, Barranquilla',
    telefono: '5522856168',
    correo: 'miguel.sanchez858@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('3a151d4c07a840f7a797f4d5'),
    nombre: 'Fernando Ramirez',
    fecha_nacimiento: ISODate('1984-05-24T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Transversal 88 #61-13, Pereira',
    telefono: '4417883149',
    correo: 'fernando.ramirez185@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('96ec498a667c4218961b2a41'),
    nombre: 'Fernando Perez',
    fecha_nacimiento: ISODate('1949-01-18T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Transversal 141 #24-14, Pereira',
    telefono: '8064189599',
    correo: 'fernando.perez580@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('59f9bf9394e2413ab45f9536'),
    nombre: 'Gabriela Perez',
    fecha_nacimiento: ISODate('1990-06-28T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Carrera 189 #10-85, Cartagena',
    telefono: '8725357925',
    correo: 'gabriela.perez670@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('e5cca94649ec488b8ccb1fc0'),
    nombre: 'Carolina Lopez',
    fecha_nacimiento: ISODate('1996-05-05T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Calle 198 #6-80, Cartagena',
    telefono: '8344858093',
    correo: 'carolina.lopez524@example.com',
    hospital_id: ObjectId('16e97a3aa44a46a8a23dd252'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('44827dbe77d340ae975ec45c'),
    nombre: 'Daniela Sanchez',
    fecha_nacimiento: ISODate('1960-05-10T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Carrera 104 #89-36, Santa Marta',
    telefono: '6464025321',
    correo: 'daniela.sanchez580@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('6313070bc3634e8694175f22'),
    nombre: 'Carolina Torres',
    fecha_nacimiento: ISODate('2004-11-13T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Transversal 134 #81-49, Cucuta',
    telefono: '9039633389',
    correo: 'carolina.torres94@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('8ae0a42a2f354a45861708d5'),
    nombre: 'Pedro Ramirez',
    fecha_nacimiento: ISODate('1983-04-25T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Diagonal 28 #34-58, Cartagena',
    telefono: '0306296080',
    correo: 'pedro.ramirez629@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('66667855c5204841b0a174cf'),
    nombre: 'Ana Sanchez',
    fecha_nacimiento: ISODate('2006-08-06T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Calle 141 #5-29, Cucuta',
    telefono: '9022497914',
    correo: 'ana.sanchez732@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('4f9ce3a8b8534deba71ca321'),
    nombre: 'Juan Gomez',
    fecha_nacimiento: ISODate('2006-12-19T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Diagonal 62 #20-58, Santa Marta',
    telefono: '6828801212',
    correo: 'juan.gomez67@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('db4dd9a5bacb438caf9fde8b'),
    nombre: 'Diego Rodriguez',
    fecha_nacimiento: ISODate('1959-08-12T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Avenida 69 #64-25, Cartagena',
    telefono: '0171151048',
    correo: 'diego.rodriguez292@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('98647a40f54c4013a2231d87'),
    nombre: 'Miguel Sanchez',
    fecha_nacimiento: ISODate('1990-11-11T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Avenida 74 #22-84, Bucaramanga',
    telefono: '1555268428',
    correo: 'miguel.sanchez216@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('fa6caa4ffb2348b391a29d12'),
    nombre: 'Ricardo Rodriguez',
    fecha_nacimiento: ISODate('1952-08-14T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Diagonal 28 #35-51, Cali',
    telefono: '4360253178',
    correo: 'ricardo.rodriguez488@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('a36d36f944fa4a6bbc9b1108'),
    nombre: 'Daniela Perez',
    fecha_nacimiento: ISODate('1956-08-25T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Calle 71 #30-13, Pereira',
    telefono: '9162867899',
    correo: 'daniela.perez141@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('87550034ec0c46fb9305eeb9'),
    nombre: 'Ricardo Sanchez',
    fecha_nacimiento: ISODate('1981-08-29T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Avenida 55 #57-12, Cartagena',
    telefono: '4232765187',
    correo: 'ricardo.sanchez963@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('789bac0123ce4f56a461478e'),
    nombre: 'Laura Rodriguez',
    fecha_nacimiento: ISODate('1982-01-11T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Carrera 28 #91-29, Bogota',
    telefono: '4814641760',
    correo: 'laura.rodriguez175@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('b287c155f2c3455f80484841'),
    nombre: 'Isabella Gonzalez',
    fecha_nacimiento: ISODate('1947-09-16T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Transversal 70 #47-83, Santa Marta',
    telefono: '7633550984',
    correo: 'isabella.gonzalez782@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('36076c4cdfb948d5a8b6f8e3'),
    nombre: 'Valeria Perez',
    fecha_nacimiento: ISODate('1956-04-01T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Transversal 127 #86-25, Cartagena',
    telefono: '9582571796',
    correo: 'valeria.perez969@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('f599cf0705884961a72d51bd'),
    nombre: 'Ricardo Gonzalez',
    fecha_nacimiento: ISODate('1991-11-18T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Carrera 97 #42-51, Pereira',
    telefono: '0448503944',
    correo: 'ricardo.gonzalez316@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('ad5006ae5a58430f8660cc11'),
    nombre: 'Juan Sanchez',
    fecha_nacimiento: ISODate('2003-11-12T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 47 #97-37, Pereira',
    telefono: '4979341073',
    correo: 'juan.sanchez288@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('a81ad550f8224abdbceb5ca7'),
    nombre: 'Miguel Lopez',
    fecha_nacimiento: ISODate('1969-06-03T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Avenida 142 #16-19, Bucaramanga',
    telefono: '5454152131',
    correo: 'miguel.lopez65@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('a93baf82c485424cb0a1139d'),
    nombre: 'Fernando Gonzalez',
    fecha_nacimiento: ISODate('1960-05-26T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Diagonal 22 #38-23, Pereira',
    telefono: '2817198754',
    correo: 'fernando.gonzalez770@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('23bb5590bca044958152cdf8'),
    nombre: 'Valeria Torres',
    fecha_nacimiento: ISODate('1975-08-11T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Transversal 146 #84-8, Bucaramanga',
    telefono: '4473041158',
    correo: 'valeria.torres617@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('69de04630e9040b092fb48ae'),
    nombre: 'Daniela Lopez',
    fecha_nacimiento: ISODate('1989-11-07T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 79 #40-57, Bogota',
    telefono: '7331240184',
    correo: 'daniela.lopez29@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('88999d504ecc4c74b718f3aa'),
    nombre: 'Maria Lopez',
    fecha_nacimiento: ISODate('1999-03-02T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Transversal 88 #90-55, Santa Marta',
    telefono: '7173890791',
    correo: 'maria.lopez34@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('cd626fd5803844369b9bbe72'),
    nombre: 'Juan Perez',
    fecha_nacimiento: ISODate('1954-09-10T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Transversal 160 #96-78, Bogota',
    telefono: '6860450585',
    correo: 'juan.perez282@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('301a531cbd614944a6a1445f'),
    nombre: 'Carolina Gomez',
    fecha_nacimiento: ISODate('1949-10-17T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Calle 37 #2-98, Cali',
    telefono: '7534610598',
    correo: 'carolina.gomez327@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('5fa0d27199ee47569b9ce5e5'),
    nombre: 'Ana Rodriguez',
    fecha_nacimiento: ISODate('1985-03-14T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Avenida 48 #29-46, Cartagena',
    telefono: '9454099781',
    correo: 'ana.rodriguez95@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('c252a79788ad4d8da0f5057d'),
    nombre: 'Maria Perez',
    fecha_nacimiento: ISODate('1976-06-29T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 155 #85-80, Santa Marta',
    telefono: '6904196080',
    correo: 'maria.perez637@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('657055c99b474d9e96f5f314'),
    nombre: 'Camila Lopez',
    fecha_nacimiento: ISODate('1981-07-09T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Avenida 2 #39-32, Bogota',
    telefono: '1651727828',
    correo: 'camila.lopez773@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('3b7d58ab9557486a9fa88b9b'),
    nombre: 'Ana Hernandez',
    fecha_nacimiento: ISODate('1977-03-26T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Carrera 109 #27-22, Manizales',
    telefono: '4841714393',
    correo: 'ana.hernandez945@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('ee6bda32f09c489d957b8cf2'),
    nombre: 'Pedro Lopez',
    fecha_nacimiento: ISODate('2003-11-06T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Transversal 200 #25-70, Medellin',
    telefono: '0116132634',
    correo: 'pedro.lopez234@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('a9ceb66826244b0997920bf0'),
    nombre: 'Andres Torres',
    fecha_nacimiento: ISODate('1963-05-05T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Diagonal 7 #22-92, Pereira',
    telefono: '5779876599',
    correo: 'andres.torres796@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('8f7b3b484aec4171925ecfd9'),
    nombre: 'Diego Sanchez',
    fecha_nacimiento: ISODate('1985-07-12T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Avenida 117 #13-83, Cali',
    telefono: '0604472916',
    correo: 'diego.sanchez927@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('93efec4840cf4f49ae82c60c'),
    nombre: 'Javier Martinez',
    fecha_nacimiento: ISODate('2003-04-11T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Carrera 23 #40-99, Bucaramanga',
    telefono: '9007935550',
    correo: 'javier.martinez42@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('cbd109c0a6cd4f6d99349647'),
    nombre: 'Sofia Lopez',
    fecha_nacimiento: ISODate('1964-10-27T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Avenida 15 #8-94, Barranquilla',
    telefono: '3618822514',
    correo: 'sofia.lopez722@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('fe23b8906e104c288e08b9d1'),
    nombre: 'Fernando Gomez',
    fecha_nacimiento: ISODate('1955-09-19T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Diagonal 31 #53-5, Pereira',
    telefono: '4098930932',
    correo: 'fernando.gomez678@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('b3e29cc380dd4fbd85a3fcac'),
    nombre: 'Juan Hernandez',
    fecha_nacimiento: ISODate('1997-05-02T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Transversal 1 #74-18, Cali',
    telefono: '4573841937',
    correo: 'juan.hernandez192@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('ab2671eb0e354741861a5804'),
    nombre: 'Daniela Gomez',
    fecha_nacimiento: ISODate('1970-05-19T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Transversal 7 #88-78, Bogota',
    telefono: '7308161815',
    correo: 'daniela.gomez651@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('9bf4441add30418ab41211ac'),
    nombre: 'Laura Gomez',
    fecha_nacimiento: ISODate('1983-07-18T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Diagonal 127 #26-81, Medellin',
    telefono: '1140537058',
    correo: 'laura.gomez452@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('d626b432e7cb41599dabc5cd'),
    nombre: 'Maria Gomez',
    fecha_nacimiento: ISODate('1973-12-24T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Avenida 35 #46-32, Cali',
    telefono: '7358816711',
    correo: 'maria.gomez49@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('c192a7ca8b59495db860aba7'),
    nombre: 'Sofia Gomez',
    fecha_nacimiento: ISODate('1992-08-28T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 24 #34-23, Bogota',
    telefono: '6680035195',
    correo: 'sofia.gomez82@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('89181af5cab54d6eb404c76a'),
    nombre: 'Juan Lopez',
    fecha_nacimiento: ISODate('1947-08-08T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Avenida 162 #95-88, Barranquilla',
    telefono: '8293359105',
    correo: 'juan.lopez659@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('63c26a8be9ca40169c166545'),
    nombre: 'Camila Ramirez',
    fecha_nacimiento: ISODate('1948-04-26T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Transversal 29 #99-87, Santa Marta',
    telefono: '5916375374',
    correo: 'camila.ramirez88@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('7dd585bd94ae48e99b5290f0'),
    nombre: 'Miguel Gonzalez',
    fecha_nacimiento: ISODate('1961-01-28T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 33 #75-87, Medellin',
    telefono: '5402552827',
    correo: 'miguel.gonzalez512@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('f39f8a0de6bb41558c572960'),
    nombre: 'Luis Ramirez',
    fecha_nacimiento: ISODate('1988-04-23T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Avenida 27 #15-57, Manizales',
    telefono: '4995824762',
    correo: 'luis.ramirez621@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('7de16aa11ef64441881e8afc'),
    nombre: 'Gabriela Martinez',
    fecha_nacimiento: ISODate('2001-11-08T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Carrera 32 #81-80, Cali',
    telefono: '9809665760',
    correo: 'gabriela.martinez812@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('65513a811af94d15817ffb19'),
    nombre: 'Ricardo Martinez',
    fecha_nacimiento: ISODate('1946-10-18T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Carrera 10 #24-87, Manizales',
    telefono: '7893585679',
    correo: 'ricardo.martinez963@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('ca1d04d3a6384ec799088359'),
    nombre: 'Laura Perez',
    fecha_nacimiento: ISODate('2003-09-10T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Avenida 89 #97-68, Pereira',
    telefono: '1826901294',
    correo: 'laura.perez858@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('1db882ee6aec4460ba013961'),
    nombre: 'Javier Gonzalez',
    fecha_nacimiento: ISODate('1997-11-01T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Diagonal 52 #45-3, Bogota',
    telefono: '4575874816',
    correo: 'javier.gonzalez887@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('48e09b852d9440b19063140b'),
    nombre: 'Sofia Sanchez',
    fecha_nacimiento: ISODate('1973-12-27T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Avenida 27 #99-9, Bogota',
    telefono: '2262300488',
    correo: 'sofia.sanchez497@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('88ed3da661d54cb082cdd6d3'),
    nombre: 'Andres Ramirez',
    fecha_nacimiento: ISODate('1980-08-12T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Calle 136 #7-12, Cali',
    telefono: '2264206936',
    correo: 'andres.ramirez474@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('c4c33f4b721f4e11b73bada1'),
    nombre: 'Diego Perez',
    fecha_nacimiento: ISODate('1995-12-03T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Diagonal 16 #59-71, Pereira',
    telefono: '7220235665',
    correo: 'diego.perez745@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('bd6f23dec1894fa0989ff0fe'),
    nombre: 'Sofia Gomez',
    fecha_nacimiento: ISODate('1970-02-20T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Transversal 101 #20-13, Cali',
    telefono: '7709128823',
    correo: 'sofia.gomez393@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('c4300bed41724d0e8e71b3bd'),
    nombre: 'Miguel Martinez',
    fecha_nacimiento: ISODate('1975-09-18T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Avenida 179 #48-10, Medellin',
    telefono: '0594739733',
    correo: 'miguel.martinez792@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('8634bc0e6692475687a3d6e6'),
    nombre: 'Pedro Sanchez',
    fecha_nacimiento: ISODate('1970-01-15T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Transversal 111 #26-11, Medellin',
    telefono: '5823558144',
    correo: 'pedro.sanchez663@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('ef70a89b53f84591a470ce8d'),
    nombre: 'Andres Ramirez',
    fecha_nacimiento: ISODate('1962-06-22T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Calle 90 #17-36, Cali',
    telefono: '0464013825',
    correo: 'andres.ramirez542@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('fbf4213d9d54484c9bc0164e'),
    nombre: 'Fernando Martinez',
    fecha_nacimiento: ISODate('1991-09-04T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Avenida 17 #31-54, Cali',
    telefono: '6041030718',
    correo: 'fernando.martinez450@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('565b6aba0fab4b8a9d939856'),
    nombre: 'Daniela Torres',
    fecha_nacimiento: ISODate('1949-10-08T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Carrera 86 #36-71, Medellin',
    telefono: '7138264791',
    correo: 'daniela.torres488@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('035d1382d23244319fb934cb'),
    nombre: 'Isabella Ramirez',
    fecha_nacimiento: ISODate('2005-01-16T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Avenida 29 #53-58, Santa Marta',
    telefono: '2992663783',
    correo: 'isabella.ramirez962@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('5bc185636aa24ce2b5800968'),
    nombre: 'Carolina Gomez',
    fecha_nacimiento: ISODate('1972-09-24T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Avenida 107 #36-76, Bucaramanga',
    telefono: '7177755340',
    correo: 'carolina.gomez156@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('78a11003bfb54abdba7a7215'),
    nombre: 'Pedro Perez',
    fecha_nacimiento: ISODate('1950-11-30T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Carrera 8 #94-5, Cartagena',
    telefono: '7104034355',
    correo: 'pedro.perez828@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('f1cad87e1a964c258cf39f0b'),
    nombre: 'Sofia Ramirez',
    fecha_nacimiento: ISODate('2002-02-13T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 153 #5-4, Bucaramanga',
    telefono: '1996661553',
    correo: 'sofia.ramirez982@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('9cf3fccf2247471288d0c60b'),
    nombre: 'Pedro Gomez',
    fecha_nacimiento: ISODate('1993-12-29T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Transversal 170 #93-67, Cali',
    telefono: '3482673628',
    correo: 'pedro.gomez204@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('6f5f2ec759074e1fae02beb1'),
    nombre: 'Camila Martinez',
    fecha_nacimiento: ISODate('1986-09-14T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Carrera 160 #95-91, Bucaramanga',
    telefono: '6987380581',
    correo: 'camila.martinez404@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('5fad35df50fa4a41a10b177d'),
    nombre: 'Daniela Martinez',
    fecha_nacimiento: ISODate('1977-10-01T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Transversal 12 #19-45, Santa Marta',
    telefono: '5119502775',
    correo: 'daniela.martinez847@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('fdad6026193541e38df55755'),
    nombre: 'Pedro Martinez',
    fecha_nacimiento: ISODate('2000-04-23T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Carrera 149 #35-15, Cali',
    telefono: '8173931800',
    correo: 'pedro.martinez241@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('9726b7134942488894089fe1'),
    nombre: 'Maria Hernandez',
    fecha_nacimiento: ISODate('1951-12-03T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Avenida 157 #54-9, Santa Marta',
    telefono: '5052553242',
    correo: 'maria.hernandez277@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('ae4a23ebdbfa4088bb49b60b'),
    nombre: 'Andres Lopez',
    fecha_nacimiento: ISODate('1973-06-25T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Carrera 144 #41-19, Pereira',
    telefono: '6654998903',
    correo: 'andres.lopez733@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('0b53d8c4945640f490005032'),
    nombre: 'Maria Perez',
    fecha_nacimiento: ISODate('1949-06-20T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Calle 137 #35-6, Bogota',
    telefono: '1930946988',
    correo: 'maria.perez685@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('8505a55a62cc4d78a3fc0be2'),
    nombre: 'Camila Gomez',
    fecha_nacimiento: ISODate('1993-04-05T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Calle 103 #14-52, Cucuta',
    telefono: '3059468319',
    correo: 'camila.gomez288@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('0745a05c307843c284440288'),
    nombre: 'Ricardo Rodriguez',
    fecha_nacimiento: ISODate('1970-03-23T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Diagonal 187 #92-26, Cali',
    telefono: '5212883891',
    correo: 'ricardo.rodriguez879@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('6b05232b1b304a0a9a5a3990'),
    nombre: 'Juan Lopez',
    fecha_nacimiento: ISODate('1980-06-22T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 42 #67-17, Cartagena',
    telefono: '6664389627',
    correo: 'juan.lopez972@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('2631f701dc604f5db2c4f320'),
    nombre: 'Gabriela Ramirez',
    fecha_nacimiento: ISODate('1976-02-10T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Avenida 137 #63-78, Santa Marta',
    telefono: '6354637300',
    correo: 'gabriela.ramirez515@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('f9b746ebd82a4f09b5b46a77'),
    nombre: 'Laura Torres',
    fecha_nacimiento: ISODate('1993-02-21T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Avenida 97 #35-41, Cartagena',
    telefono: '1965038712',
    correo: 'laura.torres969@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('d721861cc4984df4928a40d3'),
    nombre: 'Miguel Gomez',
    fecha_nacimiento: ISODate('1976-09-22T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Transversal 193 #49-77, Bucaramanga',
    telefono: '2656182207',
    correo: 'miguel.gomez112@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('6033656c1ff8402394c42daa'),
    nombre: 'Valeria Torres',
    fecha_nacimiento: ISODate('1974-06-21T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Transversal 175 #76-11, Pereira',
    telefono: '7024658565',
    correo: 'valeria.torres219@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('75e9ea42e10b4935af29c173'),
    nombre: 'Isabella Rodriguez',
    fecha_nacimiento: ISODate('1948-11-14T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Transversal 131 #22-4, Cali',
    telefono: '4176738714',
    correo: 'isabella.rodriguez12@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('076d90f1771f413da61d6459'),
    nombre: 'Andres Gomez',
    fecha_nacimiento: ISODate('1958-06-24T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Transversal 164 #48-12, Cucuta',
    telefono: '5838961842',
    correo: 'andres.gomez986@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('55353a9d61fa473383d77c19'),
    nombre: 'Gabriela Lopez',
    fecha_nacimiento: ISODate('1998-01-26T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 173 #61-75, Santa Marta',
    telefono: '2851969590',
    correo: 'gabriela.lopez345@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('67cfe9b1e9414e90b634bdbd'),
    nombre: 'Valeria Sanchez',
    fecha_nacimiento: ISODate('1982-10-19T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 197 #58-82, Cucuta',
    telefono: '5036249679',
    correo: 'valeria.sanchez337@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('87b2aa1c621745f0a66d58e5'),
    nombre: 'Laura Lopez',
    fecha_nacimiento: ISODate('1986-05-17T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Avenida 145 #27-88, Santa Marta',
    telefono: '7946817529',
    correo: 'laura.lopez601@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('c3b6555f4cbb45fbaf5aa117'),
    nombre: 'Laura Martinez',
    fecha_nacimiento: ISODate('1948-12-28T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Calle 139 #52-44, Santa Marta',
    telefono: '0440466097',
    correo: 'laura.martinez397@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('051f2979f50248338cb81208'),
    nombre: 'Miguel Gonzalez',
    fecha_nacimiento: ISODate('1990-05-23T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Diagonal 149 #80-89, Medellin',
    telefono: '9211933923',
    correo: 'miguel.gonzalez808@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('8b34655b041244fd85ae2d2e'),
    nombre: 'Gabriela Rodriguez',
    fecha_nacimiento: ISODate('1965-01-11T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Carrera 25 #95-97, Barranquilla',
    telefono: '1854517575',
    correo: 'gabriela.rodriguez71@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('1d5d90ce2d4b4a038e4cf92a'),
    nombre: 'Isabella Lopez',
    fecha_nacimiento: ISODate('2004-04-18T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Diagonal 43 #58-76, Pereira',
    telefono: '1467319336',
    correo: 'isabella.lopez277@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('85a62cd514424ac89e0efde7'),
    nombre: 'Diego Sanchez',
    fecha_nacimiento: ISODate('1992-09-08T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Carrera 180 #92-45, Cucuta',
    telefono: '9320418314',
    correo: 'diego.sanchez89@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('5ef4ca1165874289bdc14ef8'),
    nombre: 'Juan Gomez',
    fecha_nacimiento: ISODate('1996-04-20T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Transversal 48 #52-49, Medellin',
    telefono: '6720654785',
    correo: 'juan.gomez757@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('f57b5110fc5c4f22a3a44ca4'),
    nombre: 'Andres Gonzalez',
    fecha_nacimiento: ISODate('1946-08-12T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Carrera 37 #38-40, Bucaramanga',
    telefono: '2841040029',
    correo: 'andres.gonzalez117@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('b3fc2531ecc0480098c7ec17'),
    nombre: 'Luis Ramirez',
    fecha_nacimiento: ISODate('2007-04-19T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 180 #56-2, Cali',
    telefono: '9023688610',
    correo: 'luis.ramirez203@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('6a821eddd81f41218ab30490'),
    nombre: 'Maria Torres',
    fecha_nacimiento: ISODate('1955-02-27T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Avenida 82 #70-44, Bucaramanga',
    telefono: '2617639868',
    correo: 'maria.torres222@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('d1a16f6986f241cd8ac03efc'),
    nombre: 'Valeria Rodriguez',
    fecha_nacimiento: ISODate('2001-11-23T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 199 #51-68, Bogota',
    telefono: '6907611053',
    correo: 'valeria.rodriguez309@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('b39ff3cdd6fe4b90b0f258c7'),
    nombre: 'Laura Martinez',
    fecha_nacimiento: ISODate('1967-09-26T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Transversal 14 #88-41, Pereira',
    telefono: '8982965331',
    correo: 'laura.martinez420@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('3c29d8a642404c3fbab477ff'),
    nombre: 'Ricardo Torres',
    fecha_nacimiento: ISODate('1994-01-26T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Calle 54 #91-49, Bogota',
    telefono: '1277767263',
    correo: 'ricardo.torres458@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('5290f03a1bdf485d81b98694'),
    nombre: 'Luis Lopez',
    fecha_nacimiento: ISODate('1994-06-17T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Carrera 38 #88-41, Manizales',
    telefono: '9417160206',
    correo: 'luis.lopez409@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('c580493f9515432bb27008cb'),
    nombre: 'Gabriela Rodriguez',
    fecha_nacimiento: ISODate('1961-08-16T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Carrera 103 #39-55, Manizales',
    telefono: '8864699078',
    correo: 'gabriela.rodriguez557@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('52e38f79aa734e3c8e1dd637'),
    nombre: 'Carolina Perez',
    fecha_nacimiento: ISODate('1982-12-02T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 159 #54-22, Cartagena',
    telefono: '8251042242',
    correo: 'carolina.perez919@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('95bd2fe950c54eb8b5cd71ba'),
    nombre: 'Diego Rodriguez',
    fecha_nacimiento: ISODate('1979-02-14T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 52 #72-35, Cali',
    telefono: '9287273349',
    correo: 'diego.rodriguez437@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('4b4a121262b84ebcb9966241'),
    nombre: 'Fernando Lopez',
    fecha_nacimiento: ISODate('1978-09-18T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Carrera 59 #84-42, Cucuta',
    telefono: '9110464229',
    correo: 'fernando.lopez854@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('b83d5a495e1c451fa0092188'),
    nombre: 'Diego Rodriguez',
    fecha_nacimiento: ISODate('1989-10-23T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Transversal 189 #11-43, Cucuta',
    telefono: '6099253851',
    correo: 'diego.rodriguez284@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('8f344243c0d54b36ad943589'),
    nombre: 'Carolina Martinez',
    fecha_nacimiento: ISODate('1972-02-13T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Calle 82 #10-50, Cartagena',
    telefono: '5325124706',
    correo: 'carolina.martinez390@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('957a8b70b41d40efb0e48714'),
    nombre: 'Sofia Sanchez',
    fecha_nacimiento: ISODate('1955-07-07T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 6 #19-23, Barranquilla',
    telefono: '7965584240',
    correo: 'sofia.sanchez362@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('0b24871cd17f465692990b3f'),
    nombre: 'Laura Sanchez',
    fecha_nacimiento: ISODate('1988-01-09T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Transversal 146 #41-64, Santa Marta',
    telefono: '8930637358',
    correo: 'laura.sanchez537@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('63b78fdc60294db9860d6b0c'),
    nombre: 'Laura Ramirez',
    fecha_nacimiento: ISODate('1981-05-06T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 31 #90-63, Manizales',
    telefono: '0034589806',
    correo: 'laura.ramirez234@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('286221a70ed6461bb48e0f6e'),
    nombre: 'Gabriela Gomez',
    fecha_nacimiento: ISODate('1984-09-05T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 158 #53-25, Santa Marta',
    telefono: '1012688871',
    correo: 'gabriela.gomez825@example.com',
    hospital_id: ObjectId('4dfa92c6727d4a30906de891'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('fbe80e4df49c48a69cd7208d'),
    nombre: 'Carolina Lopez',
    fecha_nacimiento: ISODate('1991-07-23T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Calle 110 #98-29, Santa Marta',
    telefono: '1148886255',
    correo: 'carolina.lopez998@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('3c922c6865934f009e579dfa'),
    nombre: 'Gabriela Ramirez',
    fecha_nacimiento: ISODate('2003-02-18T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Avenida 75 #53-58, Barranquilla',
    telefono: '8001502005',
    correo: 'gabriela.ramirez681@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('23ffb84615024782847400fc'),
    nombre: 'Camila Ramirez',
    fecha_nacimiento: ISODate('1965-04-24T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Carrera 132 #53-2, Barranquilla',
    telefono: '4353495145',
    correo: 'camila.ramirez549@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('b4c82ba2150049fb9dae4427'),
    nombre: 'Daniela Ramirez',
    fecha_nacimiento: ISODate('1958-01-19T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Transversal 154 #45-16, Cucuta',
    telefono: '3377001431',
    correo: 'daniela.ramirez799@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('1ece6ab6baf14fd384e9f400'),
    nombre: 'Ana Ramirez',
    fecha_nacimiento: ISODate('1986-07-15T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Transversal 26 #46-32, Cali',
    telefono: '6333878658',
    correo: 'ana.ramirez237@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('c246a4e011314736b885a61e'),
    nombre: 'Pedro Torres',
    fecha_nacimiento: ISODate('1974-02-15T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Avenida 124 #86-96, Bucaramanga',
    telefono: '9004929885',
    correo: 'pedro.torres919@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('5313e72b7e4f43a0ab7c2bb7'),
    nombre: 'Carlos Rodriguez',
    fecha_nacimiento: ISODate('1995-07-22T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Carrera 103 #87-22, Bogota',
    telefono: '5650341108',
    correo: 'carlos.rodriguez810@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('d1580ed2a6424443b807d52c'),
    nombre: 'Diego Martinez',
    fecha_nacimiento: ISODate('1985-03-14T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Avenida 156 #19-10, Cucuta',
    telefono: '1247482429',
    correo: 'diego.martinez144@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('fd3210a8057d4df9926db2b2'),
    nombre: 'Luis Perez',
    fecha_nacimiento: ISODate('1961-04-01T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Diagonal 178 #61-41, Cartagena',
    telefono: '3841339287',
    correo: 'luis.perez333@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('91071715046a4cb2b4fc026e'),
    nombre: 'Pedro Sanchez',
    fecha_nacimiento: ISODate('1981-09-04T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Transversal 166 #28-4, Bucaramanga',
    telefono: '8548764120',
    correo: 'pedro.sanchez142@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('ef712d8e8dd04858b8c82780'),
    nombre: 'Daniela Gonzalez',
    fecha_nacimiento: ISODate('1950-08-30T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Avenida 188 #24-39, Cartagena',
    telefono: '5110705145',
    correo: 'daniela.gonzalez545@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('fe794b8588d841d3be2dea66'),
    nombre: 'Gabriela Gonzalez',
    fecha_nacimiento: ISODate('1993-03-13T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Calle 174 #6-29, Manizales',
    telefono: '6042583073',
    correo: 'gabriela.gonzalez261@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('b41bd09fbf014e1c8395f289'),
    nombre: 'Maria Lopez',
    fecha_nacimiento: ISODate('1969-01-01T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Transversal 195 #75-82, Cucuta',
    telefono: '7922286547',
    correo: 'maria.lopez653@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('fc9f502dbbea411a9aa53879'),
    nombre: 'Andres Ramirez',
    fecha_nacimiento: ISODate('1974-05-02T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Calle 20 #63-58, Bogota',
    telefono: '2659750594',
    correo: 'andres.ramirez53@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('89a3da65a76742289de5127f'),
    nombre: 'Juan Rodriguez',
    fecha_nacimiento: ISODate('1957-01-27T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Carrera 131 #52-23, Medellin',
    telefono: '3118556244',
    correo: 'juan.rodriguez248@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('171070fbcff74c94b17a2236'),
    nombre: 'Fernando Ramirez',
    fecha_nacimiento: ISODate('1987-03-14T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Carrera 46 #88-92, Cali',
    telefono: '8875874517',
    correo: 'fernando.ramirez313@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('dd301fdce7f04411a4589117'),
    nombre: 'Sofia Torres',
    fecha_nacimiento: ISODate('1986-08-02T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Avenida 173 #89-55, Cali',
    telefono: '2141523159',
    correo: 'sofia.torres685@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('dc78182e700b48f2a66f582f'),
    nombre: 'Carlos Ramirez',
    fecha_nacimiento: ISODate('1989-03-23T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Carrera 195 #80-20, Barranquilla',
    telefono: '2720488578',
    correo: 'carlos.ramirez767@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('e0b0498d0df14954bdc072ed'),
    nombre: 'Maria Perez',
    fecha_nacimiento: ISODate('1956-06-06T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Carrera 54 #27-46, Santa Marta',
    telefono: '9495484850',
    correo: 'maria.perez713@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('ad3d75c4b02b42518cc58074'),
    nombre: 'Andres Torres',
    fecha_nacimiento: ISODate('1985-05-16T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Avenida 102 #97-55, Cartagena',
    telefono: '3970715462',
    correo: 'andres.torres549@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('f9cae63bb2a34aaa9cd2c769'),
    nombre: 'Luis Torres',
    fecha_nacimiento: ISODate('1949-03-19T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Diagonal 120 #30-92, Medellin',
    telefono: '8176488594',
    correo: 'luis.torres850@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('e93e0a5c8ec94b80b88fd481'),
    nombre: 'Juan Rodriguez',
    fecha_nacimiento: ISODate('2000-01-26T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Transversal 4 #8-50, Santa Marta',
    telefono: '2532519662',
    correo: 'juan.rodriguez367@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('5738121b2ff84ded80c51ca8'),
    nombre: 'Gabriela Martinez',
    fecha_nacimiento: ISODate('1952-10-05T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 33 #75-3, Pereira',
    telefono: '0398455983',
    correo: 'gabriela.martinez331@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('81a816c7b8be4ee68dcce2a8'),
    nombre: 'Ana Torres',
    fecha_nacimiento: ISODate('1964-05-15T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Avenida 196 #1-51, Manizales',
    telefono: '9770164430',
    correo: 'ana.torres941@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('4cf440f5698f427e8a470290'),
    nombre: 'Luis Ramirez',
    fecha_nacimiento: ISODate('1980-06-08T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Carrera 52 #87-87, Bogota',
    telefono: '0900954268',
    correo: 'luis.ramirez973@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('c56406f1a8554db98f4c2138'),
    nombre: 'Camila Hernandez',
    fecha_nacimiento: ISODate('1994-08-18T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Avenida 10 #57-98, Medellin',
    telefono: '6739641003',
    correo: 'camila.hernandez52@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('82d99e803b2f49ccb10221ed'),
    nombre: 'Carolina Rodriguez',
    fecha_nacimiento: ISODate('1950-05-18T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 80 #20-91, Bucaramanga',
    telefono: '5562942331',
    correo: 'carolina.rodriguez943@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('b5724211a0c34be5990a1d7e'),
    nombre: 'Ricardo Gomez',
    fecha_nacimiento: ISODate('1950-08-08T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 130 #93-46, Santa Marta',
    telefono: '1765207806',
    correo: 'ricardo.gomez630@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('248f8a68af6542658d01d3f3'),
    nombre: 'Carolina Lopez',
    fecha_nacimiento: ISODate('1973-06-20T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Transversal 28 #43-10, Cartagena',
    telefono: '6457444263',
    correo: 'carolina.lopez958@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('6945706dee16442bb07640ea'),
    nombre: 'Ricardo Gonzalez',
    fecha_nacimiento: ISODate('1954-07-03T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Diagonal 179 #90-1, Bucaramanga',
    telefono: '5183705233',
    correo: 'ricardo.gonzalez919@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('36d0ffbe71934f398097eb83'),
    nombre: 'Ricardo Martinez',
    fecha_nacimiento: ISODate('1957-02-27T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 159 #74-86, Cartagena',
    telefono: '6823916546',
    correo: 'ricardo.martinez708@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('10a832288f204777ad78ae27'),
    nombre: 'Fernando Sanchez',
    fecha_nacimiento: ISODate('1946-05-14T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Avenida 40 #70-11, Santa Marta',
    telefono: '0225312890',
    correo: 'fernando.sanchez149@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('5c6cdae76630488282511e5b'),
    nombre: 'Juan Martinez',
    fecha_nacimiento: ISODate('1990-03-22T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 144 #89-89, Bogota',
    telefono: '2092088770',
    correo: 'juan.martinez278@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('f119aa9237534becba4bdb55'),
    nombre: 'Ricardo Sanchez',
    fecha_nacimiento: ISODate('1974-01-31T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Diagonal 30 #91-41, Pereira',
    telefono: '2953970514',
    correo: 'ricardo.sanchez145@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('911e46a8492944a7b284e2a7'),
    nombre: 'Valeria Perez',
    fecha_nacimiento: ISODate('1956-10-01T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Transversal 168 #6-57, Santa Marta',
    telefono: '2132726234',
    correo: 'valeria.perez241@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('40f1d3913b5941559d32c5df'),
    nombre: 'Gabriela Martinez',
    fecha_nacimiento: ISODate('1954-05-06T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Avenida 131 #44-7, Bucaramanga',
    telefono: '6709002703',
    correo: 'gabriela.martinez461@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('e1739353aac14ab29b26baf5'),
    nombre: 'Miguel Gomez',
    fecha_nacimiento: ISODate('1980-09-02T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Avenida 39 #8-46, Bucaramanga',
    telefono: '6074490107',
    correo: 'miguel.gomez425@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('1f9a9103b05943bfb007305a'),
    nombre: 'Carlos Gonzalez',
    fecha_nacimiento: ISODate('2004-11-14T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 130 #96-67, Santa Marta',
    telefono: '3104702004',
    correo: 'carlos.gonzalez277@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('0bbf0a211e174c58b946f9aa'),
    nombre: 'Laura Rodriguez',
    fecha_nacimiento: ISODate('1975-03-08T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Carrera 88 #75-3, Cali',
    telefono: '8051192408',
    correo: 'laura.rodriguez214@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('4b044175a70f41ddb68fb53b'),
    nombre: 'Daniela Rodriguez',
    fecha_nacimiento: ISODate('1996-12-17T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Avenida 139 #34-29, Bogota',
    telefono: '1077457409',
    correo: 'daniela.rodriguez372@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('3c17e21a2497410e95046cd3'),
    nombre: 'Ricardo Torres',
    fecha_nacimiento: ISODate('1966-07-17T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 121 #1-5, Medellin',
    telefono: '7624213267',
    correo: 'ricardo.torres754@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('44e81e8cc5f54a279831e85b'),
    nombre: 'Pedro Torres',
    fecha_nacimiento: ISODate('1954-10-03T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Transversal 121 #66-66, Santa Marta',
    telefono: '5931804704',
    correo: 'pedro.torres753@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('43f8441aa49843189d8eecef'),
    nombre: 'Camila Martinez',
    fecha_nacimiento: ISODate('1970-02-17T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 145 #27-76, Santa Marta',
    telefono: '9701972267',
    correo: 'camila.martinez879@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('e672b5afa4d44361a9755bd2'),
    nombre: 'Sofia Gonzalez',
    fecha_nacimiento: ISODate('2001-07-17T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Avenida 172 #41-57, Bucaramanga',
    telefono: '0093401080',
    correo: 'sofia.gonzalez680@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('77019c04cc234aad8959759e'),
    nombre: 'Carlos Hernandez',
    fecha_nacimiento: ISODate('1992-02-13T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Avenida 60 #81-44, Manizales',
    telefono: '1655014498',
    correo: 'carlos.hernandez676@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('fc0f5b6f72934328ad0be210'),
    nombre: 'Maria Lopez',
    fecha_nacimiento: ISODate('1991-03-26T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Diagonal 19 #50-64, Cali',
    telefono: '6948024222',
    correo: 'maria.lopez239@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('b115ac54e103495186300738'),
    nombre: 'Maria Sanchez',
    fecha_nacimiento: ISODate('1974-01-18T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Carrera 174 #68-57, Manizales',
    telefono: '2287792726',
    correo: 'maria.sanchez422@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('0680046c7dd94dddbbc53d59'),
    nombre: 'Valeria Gomez',
    fecha_nacimiento: ISODate('1991-06-08T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 71 #5-85, Cucuta',
    telefono: '3920012200',
    correo: 'valeria.gomez817@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('2ff4527fb2c9425690b8cfb1'),
    nombre: 'Diego Ramirez',
    fecha_nacimiento: ISODate('1956-09-21T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Avenida 47 #84-23, Santa Marta',
    telefono: '1265120590',
    correo: 'diego.ramirez974@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('0a6f083aeb234ca9b90eda69'),
    nombre: 'Sofia Sanchez',
    fecha_nacimiento: ISODate('1950-11-11T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Calle 145 #64-66, Bucaramanga',
    telefono: '7947303547',
    correo: 'sofia.sanchez627@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('bc51e2016f324de5bbca1dc7'),
    nombre: 'Diego Torres',
    fecha_nacimiento: ISODate('1971-01-11T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 161 #3-2, Barranquilla',
    telefono: '1031567066',
    correo: 'diego.torres567@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('a022e6c3281a4c828213c0c4'),
    nombre: 'Sofia Rodriguez',
    fecha_nacimiento: ISODate('1962-09-11T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Transversal 126 #62-79, Medellin',
    telefono: '4731507639',
    correo: 'sofia.rodriguez759@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('e7ffcd638df84127a8791d25'),
    nombre: 'Carolina Gomez',
    fecha_nacimiento: ISODate('1993-10-14T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 20 #62-59, Bucaramanga',
    telefono: '1324805908',
    correo: 'carolina.gomez765@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('b22d57220a704264a3f516cd'),
    nombre: 'Carlos Hernandez',
    fecha_nacimiento: ISODate('2004-05-30T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Diagonal 62 #88-98, Manizales',
    telefono: '4986804913',
    correo: 'carlos.hernandez858@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('397e73fed3d04ed287bec8a5'),
    nombre: 'Luis Torres',
    fecha_nacimiento: ISODate('1955-04-07T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Transversal 60 #93-26, Cali',
    telefono: '7653258815',
    correo: 'luis.torres548@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('a425a997fc264cc5a1a0951d'),
    nombre: 'Andres Sanchez',
    fecha_nacimiento: ISODate('2005-08-31T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Transversal 156 #42-56, Medellin',
    telefono: '2666103497',
    correo: 'andres.sanchez156@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('e32837690e2144b1904d5143'),
    nombre: 'Carlos Torres',
    fecha_nacimiento: ISODate('1976-11-03T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 180 #25-95, Pereira',
    telefono: '0976362958',
    correo: 'carlos.torres846@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('ba73dbf4c2dd42c495e67e34'),
    nombre: 'Gabriela Hernandez',
    fecha_nacimiento: ISODate('1953-07-13T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Calle 58 #36-74, Manizales',
    telefono: '0589166367',
    correo: 'gabriela.hernandez411@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('148ffcc06d274b828602c38d'),
    nombre: 'Fernando Gonzalez',
    fecha_nacimiento: ISODate('1976-07-19T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 129 #19-72, Medellin',
    telefono: '6538447414',
    correo: 'fernando.gonzalez554@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('f73ac4c0faa849ea84435c69'),
    nombre: 'Maria Gonzalez',
    fecha_nacimiento: ISODate('1972-08-11T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Calle 71 #99-14, Medellin',
    telefono: '9102493163',
    correo: 'maria.gonzalez317@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('c0af182c7fcb419da2d48667'),
    nombre: 'Daniela Rodriguez',
    fecha_nacimiento: ISODate('1996-09-22T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Calle 83 #35-34, Cartagena',
    telefono: '8274548888',
    correo: 'daniela.rodriguez773@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('a90a8bf83c4c4c079d786d4f'),
    nombre: 'Ricardo Hernandez',
    fecha_nacimiento: ISODate('1960-07-14T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Carrera 172 #22-93, Cartagena',
    telefono: '3477193550',
    correo: 'ricardo.hernandez510@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('cb147bdf8a4b4ef49f138c5b'),
    nombre: 'Gabriela Rodriguez',
    fecha_nacimiento: ISODate('1967-09-06T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Transversal 81 #43-85, Barranquilla',
    telefono: '4583824115',
    correo: 'gabriela.rodriguez278@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('1a80eb640a2f46218ac7acd0'),
    nombre: 'Miguel Ramirez',
    fecha_nacimiento: ISODate('1989-04-04T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Transversal 88 #81-27, Cucuta',
    telefono: '0338659073',
    correo: 'miguel.ramirez277@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('f841604d4a26422582745fd7'),
    nombre: 'Laura Ramirez',
    fecha_nacimiento: ISODate('1987-06-10T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Carrera 1 #6-29, Bucaramanga',
    telefono: '6692250987',
    correo: 'laura.ramirez193@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('f1f932e404cf45e8a54ac059'),
    nombre: 'Carolina Gonzalez',
    fecha_nacimiento: ISODate('1985-04-21T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Carrera 78 #73-29, Bucaramanga',
    telefono: '5330134982',
    correo: 'carolina.gonzalez94@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('e23aa07a0f1f44a0a9588b55'),
    nombre: 'Carolina Perez',
    fecha_nacimiento: ISODate('1976-05-11T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Transversal 53 #54-36, Bogota',
    telefono: '9433374910',
    correo: 'carolina.perez270@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('9340e83273914cbdaf66f4d9'),
    nombre: 'Valeria Torres',
    fecha_nacimiento: ISODate('1973-04-19T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Diagonal 9 #9-22, Manizales',
    telefono: '2185897657',
    correo: 'valeria.torres108@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('cf12471bda16496fb0accaba'),
    nombre: 'Gabriela Gonzalez',
    fecha_nacimiento: ISODate('1980-06-30T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Calle 37 #86-28, Santa Marta',
    telefono: '7822778895',
    correo: 'gabriela.gonzalez922@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('056086d9c3674aa99ed38a6b'),
    nombre: 'Carlos Perez',
    fecha_nacimiento: ISODate('1973-09-09T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Carrera 198 #61-8, Barranquilla',
    telefono: '7883835639',
    correo: 'carlos.perez317@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('751f7cccda174cd1bbe931dc'),
    nombre: 'Carlos Lopez',
    fecha_nacimiento: ISODate('1999-11-08T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Diagonal 104 #54-67, Cartagena',
    telefono: '9921638719',
    correo: 'carlos.lopez401@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('e29a87428d2d4aba8bdeb511'),
    nombre: 'Javier Ramirez',
    fecha_nacimiento: ISODate('1975-03-29T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Transversal 86 #95-71, Cali',
    telefono: '3986010168',
    correo: 'javier.ramirez356@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('486b166b8d404292905e2170'),
    nombre: 'Juan Lopez',
    fecha_nacimiento: ISODate('1984-10-10T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Avenida 65 #54-21, Manizales',
    telefono: '1436341703',
    correo: 'juan.lopez965@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('30961144d1ab440e96bbffe0'),
    nombre: 'Ricardo Sanchez',
    fecha_nacimiento: ISODate('1988-03-20T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Avenida 120 #70-38, Pereira',
    telefono: '3194899047',
    correo: 'ricardo.sanchez288@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6345b047273a47d5822529dd'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('ffae56d132e942b7ba6cd3fd'),
    nombre: 'Diego Ramirez',
    fecha_nacimiento: ISODate('1993-01-06T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Avenida 160 #97-76, Manizales',
    telefono: '4567139680',
    correo: 'diego.ramirez379@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('e6e4058041ba4da9a38c6bc1')
  },
  {
    _id: ObjectId('308104d5215d40f2b2fa596d'),
    nombre: 'Juan Torres',
    fecha_nacimiento: ISODate('1986-04-14T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Calle 54 #81-21, Pereira',
    telefono: '9464846008',
    correo: 'juan.torres223@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('cea6a23daa7e40f9b6b8d5a4')
  },
  {
    _id: ObjectId('461ae3de3a254cb7ab77dd6a'),
    nombre: 'Carolina Ramirez',
    fecha_nacimiento: ISODate('1998-04-05T18:10:41Z'),
    genero: 'Femenino',
    direccion: 'Transversal 150 #16-66, Santa Marta',
    telefono: '5345545536',
    correo: 'carolina.ramirez19@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('9266ed94d3aa4880af3f78b2'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('3c587cb90d524a11b41de834'),
    nombre: 'Ana Gonzalez',
    fecha_nacimiento: ISODate('1996-09-04T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Calle 168 #80-6, Cucuta',
    telefono: '5725389432',
    correo: 'ana.gonzalez106@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('da2ec9cd1a334f11abee3495')
  },
  {
    _id: ObjectId('e27e90f55597445b8da869a1'),
    nombre: 'Daniela Lopez',
    fecha_nacimiento: ISODate('1962-04-27T18:10:41Z'),
    genero: 'Otro',
    direccion: 'Transversal 176 #76-37, Manizales',
    telefono: '5018567018',
    correo: 'daniela.lopez324@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('856410b9032f4ae2b3f4f293'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  },
  {
    _id: ObjectId('1546bf0c61d04b41ad97def8'),
    nombre: 'Fernando Gonzalez',
    fecha_nacimiento: ISODate('1988-02-10T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Calle 64 #98-7, Cali',
    telefono: '1157931380',
    correo: 'fernando.gonzalez399@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('a31ae43f3f3e41bd9fe642dd'),
    seguro_id: ObjectId('e32b167170284dbbb9458818')
  },
  {
    _id: ObjectId('deff9f5659a74f15a2faed93'),
    nombre: 'Fernando Lopez',
    fecha_nacimiento: ISODate('1991-05-07T18:10:41Z'),
    genero: 'Masculino',
    direccion: 'Transversal 37 #14-31, Manizales',
    telefono: '4149389015',
    correo: 'fernando.lopez919@example.com',
    hospital_id: ObjectId('8404e05e463a417bbea37de7'),
    eps_id: ObjectId('6ab4a414cf3e4a73ac0f8c36'),
    seguro_id: ObjectId('2cae1e822dbf4a5b89a3219c')
  }])


// Validacion Historia Clinica

db.createCollection("HistoriaClinica", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "paciente",
        "tratamiento"
      ],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "ID único de la historia clínica."
        },
        paciente: {
          bsonType: "objectId",
          description: "Referencia al ID del paciente asociado a esta historia clínica (FK). Debe ser un ObjectId."
        },
        tratamiento: {
          bsonType: "objectId",
          description: "Referencia al ID del tratamiento asociado a esta historia clínica (FK). Debe ser un ObjectId."
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});



// Coleccion de Historial clinico
db.HistoriaClinica.insertMany([
  { paciente: ObjectId('be2d259697cd42fc99d36162'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbc') },
  { paciente: ObjectId('bc63b5c2331d4fcdb26c517c'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbd') },
  { paciente: ObjectId('be5639854e484337a5f7fd40'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbe') },
  { paciente: ObjectId('65dc333014f4439ea1da0e34'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbf') },
  { paciente: ObjectId('048f014687e34335a6a79477'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc0') },
  { paciente: ObjectId('ec7e983507f34fada5a4501e'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc1') },
  { paciente: ObjectId('3524f8a2f3414c1d98fcd28e'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc2') },
  { paciente: ObjectId('8d89f735a02543188d6a7d43'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc3') },
  { paciente: ObjectId('066bd5575f2f407ab17240af'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc4') },
  { paciente: ObjectId('ba5eb1c2ad2b4f6d8d084ce5'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc5') },
  { paciente: ObjectId('f48a3c0baf544bcc867f790c'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc6') },
  { paciente: ObjectId('85e612ca3f234b9493005ab9'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc7') },
  { paciente: ObjectId('f5e7d20c635d4575ab41b4e6'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc8') },
  { paciente: ObjectId('fca35a6dea3f4cc082275df5'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc9') },
  { paciente: ObjectId('f9d0b158dadc4667a34d451c'), tratamiento: ObjectId('6887ee060be2cd6239fe6bca') },
  { paciente: ObjectId('bb00acc6e59e4979a884d61e'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcb') },
  { paciente: ObjectId('5cec787741d54b4b92beb29c'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcc') },
  { paciente: ObjectId('9b6606b94359493a9210b8e0'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcd') },
  { paciente: ObjectId('4f93178bf13c4a1fb79c758a'), tratamiento: ObjectId('6887ee060be2cd6239fe6bce') },
  { paciente: ObjectId('c428a1233cfd4a8d934fb460'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcf') },
  { paciente: ObjectId('b7856f0086cc491fa39f1294'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbc') },
  { paciente: ObjectId('5cfd89f776cf4a7eaab02319'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbd') },
  { paciente: ObjectId('72e124bde5d24daf9fb5265a'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbe') },
  { paciente: ObjectId('7775b869954f4c609cb9dc92'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbf') },
  { paciente: ObjectId('4e222e7e65804ccf927a0234'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc0') },
  { paciente: ObjectId('93e2f21cd1b044539246e749'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc1') },
  { paciente: ObjectId('70db30ff717e439584dce9f3'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc2') },
  { paciente: ObjectId('cb4a253860604a9f9da41c33'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc3') },
  { paciente: ObjectId('745460e515dc4304951ddcea'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc4') },
  { paciente: ObjectId('d031f50cb7a644058400fc20'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc5') },
  { paciente: ObjectId('6527d68ce81b455db16bd420'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc6') },
  { paciente: ObjectId('3e2a0a03299e4be9b7aa2650'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc7') },
  { paciente: ObjectId('2b4c0443bb0446c89955b637'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc8') },
  { paciente: ObjectId('6a6b574e72ec4bbfad7d8ba2'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc9') },
  { paciente: ObjectId('166b32fac8db4e13a013c63f'), tratamiento: ObjectId('6887ee060be2cd6239fe6bca') },
  { paciente: ObjectId('3dfc0771329b41e7ab764d0c'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcb') },
  { paciente: ObjectId('bfa69a6e428e47b78481d345'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcc') },
  { paciente: ObjectId('b259d5fcc0f34f3bb1f94e4b'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcd') },
  { paciente: ObjectId('0df5e5db9d384398af1cda01'), tratamiento: ObjectId('6887ee060be2cd6239fe6bce') },
  { paciente: ObjectId('961401f855dc461886f662cf'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcf') },
  // Tercer ciclo de tratamientos
  { paciente: ObjectId('db38509455ea4ab793f5c52b'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbc') },
  { paciente: ObjectId('4e4994187c7f41c39315a6a4'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbd') },
  { paciente: ObjectId('4aad07a0aa4649e99d19c47c'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbe') },
  { paciente: ObjectId('d052b7a8e7f64d6eb477934e'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbf') },
  { paciente: ObjectId('6c6bca45cde646a39bf39578'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc0') },
  { paciente: ObjectId('c9f3beddbd3c4a94ad39fe5d'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc1') },
  { paciente: ObjectId('e9e69bca8b85462eb1f380eb'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc2') },
  { paciente: ObjectId('1c4d89dd7b104ab495c4ab49'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc3') },
  { paciente: ObjectId('76651b9f4bdc4124bf50117c'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc4') },
  { paciente: ObjectId('0650bc4416074d2e9d0ef7c1'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc5') },
  { paciente: ObjectId('06d62b3720304e6abb4cc577'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc6') },
  { paciente: ObjectId('d6aaf7c318ac43e3adbb2e72'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc7') },
  { paciente: ObjectId('9c39ac00c49846d3b6c69b0a'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc8') },
  { paciente: ObjectId('8907215da0eb4eccad75ea57'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc9') },
  { paciente: ObjectId('d166a5fa80444447997c8686'), tratamiento: ObjectId('6887ee060be2cd6239fe6bca') },
  { paciente: ObjectId('c693f4aa32c84bb2bfcc0330'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcb') },
  { paciente: ObjectId('b7789aec0de54189859f4f2a'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcc') },
  { paciente: ObjectId('5e24042b3b4b428dbb9b29ce'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcd') },
  { paciente: ObjectId('ba0fd304eb2a4f8b814221b4'), tratamiento: ObjectId('6887ee060be2cd6239fe6bce') },
  { paciente: ObjectId('ecfe150a67594c5ea9e6e81c'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcf') },
  // Cuarto ciclo de tratamientos
  { paciente: ObjectId('2bad5b409b82480d80046bb2'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbc') },
  { paciente: ObjectId('9704959231fb4ff2b9b548b3'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbd') },
  { paciente: ObjectId('53c735f8a8a145c1a727f656'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbe') },
  { paciente: ObjectId('f088b7532e6947858828baac'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbf') },
  { paciente: ObjectId('df812860f01649e4a4216c31'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc0') },
  { paciente: ObjectId('33128e47aef64efcab4b7232'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc1') },
  { paciente: ObjectId('14613df347ed419ba9901956'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc2') },
  { paciente: ObjectId('b31b50ce01194e899b4f99a3'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc3') },
  { paciente: ObjectId('70a17c64e7e949328a1d9079'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc4') },
  { paciente: ObjectId('4f26c38e2ab44c4cadc48342'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc5') },
  { paciente: ObjectId('4b1eee6b3fc7432a95eb3529'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc6') },
  { paciente: ObjectId('ba93fb1f3e974c3ebb6b6abf'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc7') },
  { paciente: ObjectId('c2b458b34b3247c4a331f2b3'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc8') },
  { paciente: ObjectId('5a40aa30461d4c4e8eee73fc'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc9') },
  { paciente: ObjectId('18db4a446d3b49bf9728aa4b'), tratamiento: ObjectId('6887ee060be2cd6239fe6bca') },
  { paciente: ObjectId('89c86340762d4df98f250d46'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcb') },
  { paciente: ObjectId('a0ea0e86d8cd4b43bdd2ad21'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcc') },
  { paciente: ObjectId('1d8b4843eeaa499daae0fb5c'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcd') },
  { paciente: ObjectId('fe70f2eead884251b086a0a6'), tratamiento: ObjectId('6887ee060be2cd6239fe6bce') },
  { paciente: ObjectId('940308efe56f4f629e4314b1'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcf') },
  // Quinto ciclo de tratamientos
  { paciente: ObjectId('f2337c839ce64d50aaefed4c'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbc') },
  { paciente: ObjectId('1a76bf8abf60491d860b3306'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbd') },
  { paciente: ObjectId('c9ecca96846d4d43b1cc5d99'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbe') },
  { paciente: ObjectId('4a7efc467e3b457092e5b427'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbf') },
  { paciente: ObjectId('6a285ef536a34b278a394934'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc0') },
  { paciente: ObjectId('65e109eeca764296a4aecd66'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc1') },
  { paciente: ObjectId('66151c9850a14d1783dc8997'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc2') },
  { paciente: ObjectId('3b7329c58daa468491eb33a2'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc3') },
  { paciente: ObjectId('e736b05407874ee783617458'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc4') },
  { paciente: ObjectId('c4d4af453241471b9bcdc79c'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc5') },
  { paciente: ObjectId('df2f85ce0f3542d48affd3bc'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc6') },
  { paciente: ObjectId('f4220b7b18ca4834a859267b'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc7') },
  { paciente: ObjectId('ecbac7787e1f4415b775928e'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc8') },
  { paciente: ObjectId('5f1526f4b9d747aaa7fa1e57'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc9') },
  { paciente: ObjectId('3e4c0b2ca9d04dc297effba0'), tratamiento: ObjectId('6887ee060be2cd6239fe6bca') },
  { paciente: ObjectId('f72fa93c346547909d497814'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcb') },
  { paciente: ObjectId('3a151d4c07a840f7a797f4d5'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcc') },
  { paciente: ObjectId('96ec498a667c4218961b2a41'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcd') },
  { paciente: ObjectId('59f9bf9394e2413ab45f9536'), tratamiento: ObjectId('6887ee060be2cd6239fe6bce') },
  { paciente: ObjectId('e5cca94649ec488b8ccb1fc0'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcf') },
  // Sexto ciclo de tratamientos
  { paciente: ObjectId('44827dbe77d340ae975ec45c'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbc') },
  { paciente: ObjectId('6313070bc3634e8694175f22'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbd') },
  { paciente: ObjectId('8ae0a42a2f354a45861708d5'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbe') },
  { paciente: ObjectId('66667855c5204841b0a174cf'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbf') },
  { paciente: ObjectId('4f9ce3a8b8534deba71ca321'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc0') },
  { paciente: ObjectId('db4dd9a5bacb438caf9fde8b'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc1') },
  { paciente: ObjectId('98647a40f54c4013a2231d87'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc2') },
  { paciente: ObjectId('fa6caa4ffb2348b391a29d12'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc3') },
  { paciente: ObjectId('a36d36f944fa4a6bbc9b1108'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc4') },
  { paciente: ObjectId('87550034ec0c46fb9305eeb9'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc5') },
  { paciente: ObjectId('789bac0123ce4f56a461478e'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc6') },
  { paciente: ObjectId('b287c155f2c3455f80484841'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc7') },
  { paciente: ObjectId('36076c4cdfb948d5a8b6f8e3'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc8') },
  { paciente: ObjectId('f599cf0705884961a72d51bd'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc9') },
  { paciente: ObjectId('ad5006ae5a58430f8660cc11'), tratamiento: ObjectId('6887ee060be2cd6239fe6bca') },
  { paciente: ObjectId('a81ad550f8224abdbceb5ca7'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcb') },
  { paciente: ObjectId('a93baf82c485424cb0a1139d'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcc') },
  { paciente: ObjectId('23bb5590bca044958152cdf8'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcd') },
  { paciente: ObjectId('69de04630e9040b092fb48ae'), tratamiento: ObjectId('6887ee060be2cd6239fe6bce') },
  { paciente: ObjectId('88999d504ecc4c74b718f3aa'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcf') },
  // Séptimo ciclo de tratamientos
  { paciente: ObjectId('cd626fd5803844369b9bbe72'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbc') },
  { paciente: ObjectId('301a531cbd614944a6a1445f'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbd') },
  { paciente: ObjectId('5fa0d27199ee47569b9ce5e5'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbe') },
  { paciente: ObjectId('c252a79788ad4d8da0f5057d'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbf') },
  { paciente: ObjectId('657055c99b474d9e96f5f314'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc0') },
  { paciente: ObjectId('3b7d58ab9557486a9fa88b9b'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc1') },
  { paciente: ObjectId('ee6bda32f09c489d957b8cf2'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc2') },
  { paciente: ObjectId('a9ceb66826244b0997920bf0'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc3') },
  { paciente: ObjectId('8f7b3b484aec4171925ecfd9'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc4') },
  { paciente: ObjectId('93efec4840cf4f49ae82c60c'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc5') },
  { paciente: ObjectId('cbd109c0a6cd4f6d99349647'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc6') },
  { paciente: ObjectId('fe23b8906e104c288e08b9d1'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc7') },
  { paciente: ObjectId('b3e29cc380dd4fbd85a3fcac'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc8') },
  { paciente: ObjectId('ab2671eb0e354741861a5804'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc9') },
  { paciente: ObjectId('9bf4441add30418ab41211ac'), tratamiento: ObjectId('6887ee060be2cd6239fe6bca') },
  { paciente: ObjectId('d626b432e7cb41599dabc5cd'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcb') },
  { paciente: ObjectId('c192a7ca8b59495db860aba7'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcc') },
  { paciente: ObjectId('89181af5cab54d6eb404c76a'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcd') },
  { paciente: ObjectId('63c26a8be9ca40169c166545'), tratamiento: ObjectId('6887ee060be2cd6239fe6bce') },
  { paciente: ObjectId('7dd585bd94ae48e99b5290f0'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcf') },
  // Octavo ciclo de tratamientos
  { paciente: ObjectId('f39f8a0de6bb41558c572960'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbc') },
  { paciente: ObjectId('7de16aa11ef64441881e8afc'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbd') },
  { paciente: ObjectId('65513a811af94d15817ffb19'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbe') },
  { paciente: ObjectId('ca1d04d3a6384ec799088359'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbf') },
  { paciente: ObjectId('1db882ee6aec4460ba013961'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc0') },
  { paciente: ObjectId('48e09b852d9440b19063140b'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc1') },
  { paciente: ObjectId('88ed3da661d54cb082cdd6d3'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc2') },
  { paciente: ObjectId('c4c33f4b721f4e11b73bada1'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc3') },
  { paciente: ObjectId('bd6f23dec1894fa0989ff0fe'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc4') },
  { paciente: ObjectId('c4300bed41724d0e8e71b3bd'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc5') },
  { paciente: ObjectId('8634bc0e6692475687a3d6e6'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc6') },
  { paciente: ObjectId('ef70a89b53f84591a470ce8d'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc7') },
  { paciente: ObjectId('fbf4213d9d54484c9bc0164e'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc8') },
  { paciente: ObjectId('565b6aba0fab4b8a9d939856'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc9') },
  { paciente: ObjectId('035d1382d23244319fb934cb'), tratamiento: ObjectId('6887ee060be2cd6239fe6bca') },
  { paciente: ObjectId('5bc185636aa24ce2b5800968'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcb') },
  { paciente: ObjectId('78a11003bfb54abdba7a7215'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcc') },
  { paciente: ObjectId('f1cad87e1a964c258cf39f0b'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcd') },
  { paciente: ObjectId('9cf3fccf2247471288d0c60b'), tratamiento: ObjectId('6887ee060be2cd6239fe6bce') },
  { paciente: ObjectId('6f5f2ec759074e1fae02beb1'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcf') },
  // Noveno ciclo de tratamientos
  { paciente: ObjectId('5fad35df50fa4a41a10b177d'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbc') },
  { paciente: ObjectId('fdad6026193541e38df55755'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbd') },
  { paciente: ObjectId('9726b7134942488894089fe1'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbe') },
  { paciente: ObjectId('ae4a23ebdbfa4088bb49b60b'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbf') },
  { paciente: ObjectId('0b53d8c4945640f490005032'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc0') },
  { paciente: ObjectId('8505a55a62cc4d78a3fc0be2'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc1') },
  { paciente: ObjectId('0745a05c307843c284440288'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc2') },
  { paciente: ObjectId('6b05232b1b304a0a9a5a3990'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc3') },
  { paciente: ObjectId('2631f701dc604f5db2c4f320'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc4') },
  { paciente: ObjectId('f9b746ebd82a4f09b5b46a77'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc5') },
  { paciente: ObjectId('d721861cc4984df4928a40d3'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc6') },
  { paciente: ObjectId('6033656c1ff8402394c42daa'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc7') },
  { paciente: ObjectId('75e9ea42e10b4935af29c173'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc8') },
  { paciente: ObjectId('076d90f1771f413da61d6459'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc9') },
  { paciente: ObjectId('55353a9d61fa473383d77c19'), tratamiento: ObjectId('6887ee060be2cd6239fe6bca') },
  { paciente: ObjectId('67cfe9b1e9414e90b634bdbd'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcb') },
  { paciente: ObjectId('87b2aa1c621745f0a66d58e5'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcc') },
  { paciente: ObjectId('c3b6555f4cbb45fbaf5aa117'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcd') },
  { paciente: ObjectId('051f2979f50248338cb81208'), tratamiento: ObjectId('6887ee060be2cd6239fe6bce') },
  { paciente: ObjectId('8b34655b041244fd85ae2d2e'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcf') },
  // Décimo ciclo de tratamientos
  { paciente: ObjectId('1d5d90ce2d4b4a038e4cf92a'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbc') },
  { paciente: ObjectId('85a62cd514424ac89e0efde7'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbd') },
  { paciente: ObjectId('5ef4ca1165874289bdc14ef8'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbe') },
  { paciente: ObjectId('f57b5110fc5c4f22a3a44ca4'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbf') },
  { paciente: ObjectId('b3fc2531ecc0480098c7ec17'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc0') },
  { paciente: ObjectId('6a821eddd81f41218ab30490'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc1') },
  { paciente: ObjectId('d1a16f6986f241cd8ac03efc'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc2') },
  { paciente: ObjectId('b39ff3cdd6fe4b90b0f258c7'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc3') },
  { paciente: ObjectId('3c29d8a642404c3fbab477ff'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc4') },
  { paciente: ObjectId('5290f03a1bdf485d81b98694'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc5') },
  { paciente: ObjectId('c580493f9515432bb27008cb'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc6') },
  { paciente: ObjectId('52e38f79aa734e3c8e1dd637'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc7') },
  { paciente: ObjectId('95bd2fe950c54eb8b5cd71ba'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc8') },
  { paciente: ObjectId('4b4a121262b84ebcb9966241'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc9') },
  { paciente: ObjectId('b83d5a495e1c451fa0092188'), tratamiento: ObjectId('6887ee060be2cd6239fe6bca') },
  { paciente: ObjectId('8f344243c0d54b36ad943589'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcb') },
  { paciente: ObjectId('957a8b70b41d40efb0e48714'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcc') },
  { paciente: ObjectId('0b24871cd17f465692990b3f'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcd') },
  { paciente: ObjectId('63b78fdc60294db9860d6b0c'), tratamiento: ObjectId('6887ee060be2cd6239fe6bce') },
  { paciente: ObjectId('286221a70ed6461bb48e0f6e'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcf') },
  // Undécimo ciclo de tratamientos
  { paciente: ObjectId('fbe80e4df49c48a69cd7208d'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbc') },
  { paciente: ObjectId('3c922c6865934f009e579dfa'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbd') },
  { paciente: ObjectId('b4c82ba2150049fb9dae4427'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbe') },
  { paciente: ObjectId('1ece6ab6baf14fd384e9f400'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbf') },
  { paciente: ObjectId('c246a4e011314736b885a61e'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc0') },
  { paciente: ObjectId('5313e72b7e4f43a0ab7c2bb7'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc1') },
  { paciente: ObjectId('d1580ed2a6424443b807d52c'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc2') },
  { paciente: ObjectId('fd3210a8057d4df9926db2b2'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc3') },
  { paciente: ObjectId('91071715046a4cb2b4fc026e'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc4') },
  { paciente: ObjectId('ef712d8e8dd04858b8c82780'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc5') },
  { paciente: ObjectId('fe794b8588d841d3be2dea66'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc6') },
  { paciente: ObjectId('b41bd09fbf014e1c8395f289'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc7') },
  { paciente: ObjectId('fc9f502dbbea411a9aa53879'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc8') },
  { paciente: ObjectId('89a3da65a76742289de5127f'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc9') },
  { paciente: ObjectId('171070fbcff74c94b17a2236'), tratamiento: ObjectId('6887ee060be2cd6239fe6bca') },
  { paciente: ObjectId('dd301fdce7f04411a4589117'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcb') },
  { paciente: ObjectId('dc78182e700b48f2a66f582f'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcc') },
  { paciente: ObjectId('e0b0498d0df14954bdc072ed'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcd') },
  { paciente: ObjectId('ad3d75c4b02b42518cc58074'), tratamiento: ObjectId('6887ee060be2cd6239fe6bce') },
  { paciente: ObjectId('f9cae63bb2a34aaa9cd2c769'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcf') },
  // Duodécimo ciclo de tratamientos
  { paciente: ObjectId('e93e0a5c8ec94b80b88fd481'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbc') },
  { paciente: ObjectId('5738121b2ff84ded80c51ca8'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbd') },
  { paciente: ObjectId('81a816c7b8be4ee68dcce2a8'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbe') },
  { paciente: ObjectId('4cf440f5698f427e8a470290'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbf') },
  { paciente: ObjectId('c56406f1a8554db98f4c2138'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc0') },
  { paciente: ObjectId('82d99e803b2f49ccb10221ed'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc1') },
  { paciente: ObjectId('b5724211a0c34be5990a1d7e'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc2') },
  { paciente: ObjectId('248f8a68af6542658d01d3f3'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc3') },
  { paciente: ObjectId('6945706dee16442bb07640ea'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc4') },
  { paciente: ObjectId('36d0ffbe71934f398097eb83'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc5') },
  { paciente: ObjectId('10a832288f204777ad78ae27'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc6') },
  { paciente: ObjectId('5c6cdae76630488282511e5b'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc7') },
  { paciente: ObjectId('f119aa9237534becba4bdb55'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc8') },
  { paciente: ObjectId('911e46a8492944a7b284e2a7'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc9') },
  { paciente: ObjectId('40f1d3913b5941559d32c5df'), tratamiento: ObjectId('6887ee060be2cd6239fe6bca') },
  { paciente: ObjectId('e1739353aac14ab29b26baf5'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcb') },
  { paciente: ObjectId('1f9a9103b05943bfb007305a'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcc') },
  { paciente: ObjectId('0bbf0a211e174c58b946f9aa'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcd') },
  { paciente: ObjectId('4b044175a70f41ddb68fb53b'), tratamiento: ObjectId('6887ee060be2cd6239fe6bce') },
  { paciente: ObjectId('3c17e21a2497410e95046cd3'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcf') },
  // Decimotercer ciclo de tratamientos
  { paciente: ObjectId('44e81e8cc5f54a279831e85b'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbc') },
  { paciente: ObjectId('43f8441aa49843189d8eecef'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbd') },
  { paciente: ObjectId('e672b5afa4d44361a9755bd2'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbe') },
  { paciente: ObjectId('77019c04cc234aad8959759e'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbf') },
  { paciente: ObjectId('fc0f5b6f72934328ad0be210'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc0') },
  { paciente: ObjectId('b115ac54e103495186300738'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc1') },
  { paciente: ObjectId('0680046c7dd94dddbbc53d59'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc2') },
  { paciente: ObjectId('2ff4527fb2c9425690b8cfb1'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc3') },
  { paciente: ObjectId('0a6f083aeb234ca9b90eda69'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc4') },
  { paciente: ObjectId('bc51e2016f324de5bbca1dc7'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc5') },
  { paciente: ObjectId('a022e6c3281a4c828213c0c4'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc6') },
  { paciente: ObjectId('e7ffcd638df84127a8791d25'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc7') },
  { paciente: ObjectId('b22d57220a704264a3f516cd'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc8') },
  { paciente: ObjectId('397e73fed3d04ed287bec8a5'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc9') },
  { paciente: ObjectId('a425a997fc264cc5a1a0951d'), tratamiento: ObjectId('6887ee060be2cd6239fe6bca') },
  { paciente: ObjectId('e32837690e2144b1904d5143'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcb') },
  { paciente: ObjectId('ba73dbf4c2dd42c495e67e34'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcc') },
  { paciente: ObjectId('148ffcc06d274b828602c38d'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcd') },
  { paciente: ObjectId('f73ac4c0faa849ea84435c69'), tratamiento: ObjectId('6887ee060be2cd6239fe6bce') },
  { paciente: ObjectId('c0af182c7fcb419da2d48667'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcf') },
  { paciente: ObjectId('a90a8bf83c4c4c079d786d4f'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbc') },
  { paciente: ObjectId('cb147bdf8a4b4ef49f138c5b'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbd') },
  { paciente: ObjectId('1a80eb640a2f46218ac7acd0'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbe') },
  { paciente: ObjectId('f841604d4a26422582745fd7'), tratamiento: ObjectId('6887ee060be2cd6239fe6bbf') },
  { paciente: ObjectId('f1f932e404cf45e8a54ac059'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc0') },
  { paciente: ObjectId('e23aa07a0f1f44a0a9588b55'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc1') },
  { paciente: ObjectId('9340e83273914cbdaf66f4d9'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc2') },
  { paciente: ObjectId('cf12471bda16496fb0accaba'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc3') },
  { paciente: ObjectId('056086d9c3674aa99ed38a6b'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc4') },
  { paciente: ObjectId('751f7cccda174cd1bbe931dc'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc5') },
  { paciente: ObjectId('e29a87428d2d4aba8bdeb511'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc6') },
  { paciente: ObjectId('486b166b8d404292905e2170'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc7') },
  { paciente: ObjectId('30961144d1ab440e96bbffe0'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc8') },
  { paciente: ObjectId('ffae56d132e942b7ba6cd3fd'), tratamiento: ObjectId('6887ee060be2cd6239fe6bc9') },
  { paciente: ObjectId('308104d5215d40f2b2fa596d'), tratamiento: ObjectId('6887ee060be2cd6239fe6bca') },
  { paciente: ObjectId('461ae3de3a254cb7ab77dd6a'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcb') },
  { paciente: ObjectId('3c587cb90d524a11b41de834'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcc') },
  { paciente: ObjectId('e27e90f55597445b8da869a1'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcd') },
  { paciente: ObjectId('1546bf0c61d04b41ad97def8'), tratamiento: ObjectId('6887ee060be2cd6239fe6bce') },
  { paciente: ObjectId('deff9f5659a74f15a2faed93'), tratamiento: ObjectId('6887ee060be2cd6239fe6bcf') }
]);




  // Validacion AreaEspecializacion 

  db.createCollection("AreaEspecializacion", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "id_area",
          "fecha_asignacion",
          "id_hospital",
          "estado"
        ],
        properties: {
          _id: {
            bsonType: "objectId"
          },
          id_area: {
            bsonType: "objectId",
            description: "Referencia al ID del área (FK). Debe ser un ObjectId."
          },
          fecha_asignacion: {
            bsonType: "date",
            description: "Fecha en la que se asignó la especialización o el personal al área. Debe ser un tipo Date."
          },
          id_hospital: {
            bsonType: "objectId",
            description: "Referencia al ID del hospital al que pertenece esta área de especialización (FK). Debe ser un ObjectId."
          },
          estado: {
            bsonType: "string",
            enum: ["Activa", "Inactiva", "En Mantenimiento", "Pendiente de Activación"],
            description: "Estado actual de la especialización o asignación del área. Debe ser uno de los valores predefinidos."
          }
        }
      }
    },
    validationLevel: "strict",
    validationAction: "error"
  });


// Coleccion AreaEspecializacion

  db.AreaEspecializacion.insertMany([
    {
      // Hospital Universitario de Santander (HUS)
      id_hospital: ObjectId('6887ea5f0be2cd6239fe6b01'),
      // Ejemplo de ID de un área en HUS (e.g., "Urgencias")
      id_area: ObjectId('660000000000000000000001'),
      nombre_especializacion: "Triage de Emergencias",
      descripcion: "Especialización en la clasificación y priorización de pacientes en el área de urgencias."
    },
    {
      // Hospital Universitario de Santander (HUS)
      id_hospital: ObjectId('6887ea5f0be2cd6239fe6b01'),
      // Ejemplo de ID de un área en HUS (e.g., "Cardiología")
      id_area: ObjectId('660000000000000000000002'),
      nombre_especializacion: "Cardiología Intervencionista",
      descripcion: "Procedimientos diagnósticos y terapéuticos invasivos del corazón y vasos sanguíneos."
    },
    {
      // Los Comuneros Hospital Universitario de Bucaramanga
      id_hospital: ObjectId('6887ea5f0be2cd6239fe6b02'),
      // Ejemplo de ID de un área en Los Comuneros (e.g., "Pediatría")
      id_area: ObjectId('660000000000000000000003'),
      nombre_especializacion: "Neonatología",
      descripcion: "Atención especializada a recién nacidos, especialmente prematuros o con problemas de salud."
    },
    {
      // Los Comuneros Hospital Universitario de Bucaramanga
      id_hospital: ObjectId('6887ea5f0be2cd6239fe6b02'),
      // Ejemplo de ID de un área en Los Comuneros (e.g., "Cirugía General")
      id_area: ObjectId('660000000000000000000004'),
      nombre_especializacion: "Cirugía Laparoscópica",
      descripcion: "Técnicas quirúrgicas mínimamente invasivas utilizando pequeñas incisiones."
    },
    {
      // Clínica Materno Infantil San Luis
      id_hospital: ObjectId('6887ea5f0be2cd6239fe6b03'),
      // Ejemplo de ID de un área en San Luis (e.g., "Ginecología y Obstetricia")
      id_area: ObjectId('660000000000000000000005'),
      nombre_especializacion: "Salud Materna Perinatal",
      descripcion: "Cuidado integral de la mujer durante el embarazo, parto y puerperio."
    },
    {
      // Clínica Materno Infantil San Luis
      id_hospital: ObjectId('6887ea5f0be2cd6239fe6b03'),
      // Ejemplo de ID de un área en San Luis (e.g., "Pediatría")
      id_area: ObjectId('660000000000000000000006'),
      nombre_especializacion: "Desarrollo Infantil",
      descripcion: "Evaluación y seguimiento del crecimiento y desarrollo de niños y adolescentes."
    }
  ]);



  // Validacion Subareas




  // Validacion Subareas

  db.createCollection("Subareas", {
      validator: {
       $jsonSchema: {
           bsonType: "object",
          required: [
            "id_area",
            "nombre_subarea",
             "descripcion"
           ],
           properties: {
             _id: {
               bsonType: "objectId",
               description: "ID único de la subárea."
             },
             id_area: {
               bsonType: "objectId",
               description: "Referencia al ID del área a la que pertenece esta subárea (FK). Debe ser un ObjectId."
             },
             nombre_subarea: {
               bsonType: "string",
               description: "Nombre de la subárea. Debe ser un string."
             },
             descripcion: {
               bsonType: "string",
               maxLength: 500,
               description: "Descripción detallada de la subárea. Debe ser un string, máximo 500 caracteres."
             }
           }
         }
       },
       validationLevel: "strict",
       validationAction: "error"
     });


// Coleccion Subareas
db.Subareas.insertMany([
  // Subáreas para 'Cocina del hospital' (area011 - hos001) - Basado en image_103202.png
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b2e'), // area011: Cocina del hospital
    nombre_subarea: "Administración del Servicio (Economato)",
    descripcion: "Gestión administrativa y económica del servicio de cocina."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b2e'), // area011: Cocina del hospital
    nombre_subarea: "Recepción de Mercancía",
    descripcion: "Área para la recepción y verificación de productos alimenticios."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b2e'), // area011: Cocina del hospital
    nombre_subarea: "Despensa General",
    descripcion: "Almacenamiento principal de alimentos no perecederos."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b2e'), // area011: Cocina del hospital
    nombre_subarea: "Cuartos Fríos (Verduras, Frutas, Lácteos)",
    descripcion: "Almacenamiento refrigerado de productos frescos."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b2e'), // area011: Cocina del hospital
    nombre_subarea: "Cuartos Fríos (Carnes)",
    descripcion: "Almacenamiento refrigerado específico para carnes."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b2e'), // area011: Cocina del hospital
    nombre_subarea: "Preparación de Alimentos",
    descripcion: "Área donde se manipulan y preparan los ingredientes."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b2e'), // area011: Cocina del hospital
    nombre_subarea: "Cocción",
    descripcion: "Zona destinada a la cocción de alimentos."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b2e'), // area011: Cocina del hospital
    nombre_subarea: "Ensamble y Distribución",
    descripcion: "Área para el emplatado y organización de comidas para su distribución."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b2e'), // area011: Cocina del hospital
    nombre_subarea: "Lavado de Vajillas y Ollas",
    descripcion: "Zona de limpieza y depósito de utensilios de cocina."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b2e'), // area011: Cocina del hospital
    nombre_subarea: "Oficina Dietista",
    descripcion: "Oficina para la planificación dietética y nutricional."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b2e'), // area011: Cocina del hospital
    nombre_subarea: "Comedor Empleados",
    descripcion: "Área de alimentación para el personal del hospital."
  },

  // Subáreas para 'Central de esterilización' (area020 - hos002) - Basado en image_102f19.png
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b37'), // area020: Central de esterilización
    nombre_subarea: "Oficina de Coordinación (Esterilización)",
    descripcion: "Gestión y planificación de los procesos de esterilización."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b37'), // area020: Central de esterilización
    nombre_subarea: "Recepción de Material (Esterilización)",
    descripcion: "Área para recibir material sucio o no estéril."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b37'), // area020: Central de esterilización
    nombre_subarea: "Lavado de Material (Esterilización)",
    descripcion: "Proceso inicial de limpieza del material."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b37'), // area020: Central de esterilización
    nombre_subarea: "Preparación y Empaque de Material",
    descripcion: "Clasificación, preparación y empaque del material para esterilización."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b37'), // area020: Central de esterilización
    nombre_subarea: "Autoclaves (Esterilización)",
    descripcion: "Equipos para la esterilización por vapor."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b37'), // area020: Central de esterilización
    nombre_subarea: "Autoclaves Óxido de Etileno (Esterilización)",
    descripcion: "Equipos para la esterilización con óxido de etileno."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b37'), // area020: Central de esterilización
    nombre_subarea: "Depósito Material Sin Esterilizar",
    descripcion: "Almacenamiento de material a la espera de ser procesado."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b37'), // area020: Central de esterilización
    nombre_subarea: "Depósito Material Estéril",
    descripcion: "Almacenamiento de material ya esterilizado."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b37'), // area020: Central de esterilización
    nombre_subarea: "Entrega de Material Estéril",
    descripcion: "Punto de entrega de material estéril a otras áreas."
  },

  // Subáreas para 'Servicios ambulatorios generales' (area001 - hos001) - Basado en image_102b18.png
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b24'), // area001: Servicios ambulatorios generales
    nombre_subarea: "Jefatura y Secretaría (Consulta Médica)",
    descripcion: "Oficina de gestión y administración para la consulta médica."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b24'), // area001: Servicios ambulatorios generales
    nombre_subarea: "Consultorios Especializados (Médica)",
    descripcion: "Salas para consultas con médicos especialistas."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b24'), // area001: Servicios ambulatorios generales
    nombre_subarea: "Fonoaudiología",
    descripcion: "Área para terapias y evaluaciones fonoaudiológicas."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b24'), // area001: Servicios ambulatorios generales
    nombre_subarea: "Sala para Retirar Yesos",
    descripcion: "Espacio dedicado a la remoción de inmovilizaciones."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b24'), // area001: Servicios ambulatorios generales
    nombre_subarea: "Inyectología y Vacunación",
    descripcion: "Punto para la administración de inyecciones y vacunas."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b24'), // area001: Servicios ambulatorios generales
    nombre_subarea: "Salas de Procedimientos (Médica)",
    descripcion: "Espacios para la realización de procedimientos menores."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b24'), // area001: Servicios ambulatorios generales
    nombre_subarea: "Consultorio Maxilofacial (Odontológica)",
    descripcion: "Consultorio especializado en cirugía maxilofacial."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b24'), // area001: Servicios ambulatorios generales
    nombre_subarea: "Laboratorio Odontología",
    descripcion: "Laboratorio de apoyo para procedimientos odontológicos."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b24'), // area001: Servicios ambulatorios generales
    nombre_subarea: "Sala de Rayos X (Odontológica)",
    descripcion: "Área para la toma de radiografías dentales."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b24'), // area001: Servicios ambulatorios generales
    nombre_subarea: "Recepción e Información General",
    descripcion: "Punto de atención al usuario para información y orientación."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b24'), // area001: Servicios ambulatorios generales
    nombre_subarea: "Citas Médicas y Admisiones",
    descripcion: "Área para la gestión de citas y procesos de admisión."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b24'), // area001: Servicios ambulatorios generales
    nombre_subarea: "Cajas",
    descripcion: "Punto de pago y gestión financiera."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b24'), // area001: Servicios ambulatorios generales
    nombre_subarea: "Trabajo Social y Entrevistas",
    descripcion: "Espacio para la atención y apoyo social a pacientes y familiares."
  },


  {
    id_area: ObjectId('6887eace0be2cd6239fe6b26'), // area003: Laboratorio clínico para diagnósticos
    nombre_subarea: "Toma de Muestras (Donantes)",
    descripcion: "Área para la extracción de muestras de donantes."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b26'), // area003: Laboratorio clínico para diagnósticos
    nombre_subarea: "Consultorio de Valoración (Laboratorio)",
    descripcion: "Consultorio para la evaluación previa a la toma de muestras."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b26'), // area003: Laboratorio clínico para diagnósticos
    nombre_subarea: "Laboratorio de Procesamiento de Sangre",
    descripcion: "Área para el procesamiento y análisis de muestras de sangre."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b26'), // area003: Laboratorio clínico para diagnósticos
    nombre_subarea: "Laboratorio de Agentes Infecciosos",
    descripcion: "Laboratorio especializado en el manejo de muestras con agentes infecciosos."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b26'), // area003: Laboratorio clínico para diagnósticos
    nombre_subarea: "Lavado de Material (Laboratorio)",
    descripcion: "Zona para la limpieza de material de laboratorio."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b26'), // area003: Laboratorio clínico para diagnósticos
    nombre_subarea: "Depósito de Reactivos",
    descripcion: "Almacenamiento de sustancias químicas y reactivos de laboratorio."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b26'), // area003: Laboratorio clínico para diagnósticos
    nombre_subarea: "Depósito de Sangre (Neveras)",
    descripcion: "Almacenamiento refrigerado de unidades de sangre."
  },


  {
    id_area: ObjectId('6887eace0be2cd6239fe6b24'), // area001: Servicios ambulatorios generales (como área general para administración)
    nombre_subarea: "Oficina Jefe (Administrativa)",
    descripcion: "Oficina del jefe de área administrativa."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b24'), // area001: Servicios ambulatorios generales
    nombre_subarea: "Recepción (Administrativa)",
    descripcion: "Punto de recepción y atención general."
  },
  {
    id_area: ObjectId('6887eace0be2cd6239fe6b24'), // area001: Servicios ambulatorios generales
    nombre_subarea: "Sala de Espera (Administrativa)",
    descripcion: "Espacio de espera común para servicios administrativos."
  }
]);

  // Validacion Inventrio 

db.createCollection("Inventario", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "id_hospital",
        "id_medicamento",
        "stock",
        "fecha_ultima_actualizacion"
      ],
      properties: {
        _id: {
          bsonType: "objectId"
        },
        id_hospital: {
          bsonType: "objectId",
          description: "Reference to the ID of the hospital where the inventory is located (FK)."
        },
        id_medicamento: {
          bsonType: "objectId",
          description: "Reference to the ID of the medicine in this inventory record (FK)."
        },
        stock: {
          bsonType: "int",
          minimum: 0,
          description: "Current stock quantity of the medicine. Must be an integer greater than or equal to 0."
        },
        fecha_ultima_actualizacion: {
          bsonType: "date",
          description: "Date of the last inventory update. Must be a Date type."
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});

// Coleccion Inventario

db.Inventario.insertMany([
  {
    id_hospital: ObjectId('6887ea5f0be2cd6239fe6b01'),
    id_medicamento: ObjectId('6600000000000000000000A1'),
    stock: 500,
    fecha_ultima_actualizacion: new Date("2025-07-27T10:00:00Z")
  },
  {
    id_hospital: ObjectId('6887ea5f0be2cd6239fe6b01'),
    id_medicamento: ObjectId('6600000000000000000000A2'),
    stock: 350,
    fecha_ultima_actualizacion: new Date("2025-07-27T11:30:00Z")
  },
  {
    id_hospital: ObjectId('6887ea5f0be2cd6239fe6b01'),
    id_medicamento: ObjectId('6600000000000000000000A3'),
    stock: 200,
    fecha_ultima_actualizacion: new Date("2025-07-26T15:00:00Z")
  },
  {
    id_hospital: ObjectId('6887ea5f0be2cd6239fe6b02'),
    id_medicamento: ObjectId('6600000000000000000000A1'),
    stock: 400,
    fecha_ultima_actualizacion: new Date("2025-07-27T09:00:00Z")
  },
  {
    id_hospital: ObjectId('6887ea5f0be2cd6239fe6b02'),
    id_medicamento: ObjectId('6600000000000000000000A4'),
    stock: 150,
    fecha_ultima_actualizacion: new Date("2025-07-27T14:00:00Z")
  },
  {
    id_hospital: ObjectId('6887ea5f0be2cd6239fe6b02'),
    id_medicamento: ObjectId('6600000000000000000000A5'),
    stock: 80,
    fecha_ultima_actualizacion: new Date("2025-07-26T10:00:00Z")
  },
  {
    id_hospital: ObjectId('6887ea5f0be2cd6239fe6b03'),
    id_medicamento: ObjectId('6600000000000000000000A6'),
    stock: 300,
    fecha_ultima_actualizacion: new Date("2025-07-27T13:00:00Z")
  },
  {
    id_hospital: ObjectId('6887ea5f0be2cd6239fe6b03'),
    id_medicamento: ObjectId('6600000000000000000000A7'),
    stock: 250,
    fecha_ultima_actualizacion: new Date("2025-07-27T08:00:00Z")
  },
  {
    id_hospital: ObjectId('6887ea5f0be2cd6239fe6b03'),
    id_medicamento: ObjectId('6600000000000000000000A8'),
    stock: 120,
    fecha_ultima_actualizacion: new Date("2025-07-26T17:00:00Z")
  }
]);

// Validacion HistoriaClinica

db.createCollection("HistoriaClinica", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "paciente",
        "tratamiento"
      ],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "ID único de la historia clínica."
        },
        paciente: {
          bsonType: "objectId",
          description: "Referencia al ID del paciente asociado a esta historia clínica (FK). Debe ser un ObjectId."
        },
        tratamiento: {
          bsonType: "objectId",
          description: "Referencia al ID del tratamiento asociado a esta historia clínica (FK). Debe ser un ObjectId."
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});


// Coleccion Historial Clinico

db.HistoriaClinica.insertMany([
  {
    _id: ObjectId('688824670be2cd6239fe6c2e'),
    paciente: ObjectId('be2d259697cd42fc99d36162'),
    tratamiento: ObjectId('6887ee060be2cd6239fe6bbc')
  },
  {
    _id: ObjectId('688824670be2cd6239fe6c2f'),
    paciente: ObjectId('bc63b5c2331d4fcdb26c517c'),
    tratamiento: ObjectId('6887ee060be2cd6239fe6bbd')
  },
  {
    _id: ObjectId('688824670be2cd6239fe6c30'),
    paciente: ObjectId('be5639854e484337a5f7fd40'),
    tratamiento: ObjectId('6887ee060be2cd6239fe6bbe')
  },
  {
    _id: ObjectId('688824670be2cd6239fe6c31'),
    paciente: ObjectId('65dc333014f4439ea1da0e34'),
    tratamiento: ObjectId('6887ee060be2cd6239fe6bbf')
  },
  {
    _id: ObjectId('688824670be2cd6239fe6c32'),
    paciente: ObjectId('048f014687e34335a6a79477'),
    tratamiento: ObjectId('6887ee060be2cd6239fe6bc0')
  },
  {
    _id: ObjectId('688824670be2cd6239fe6c33'),
    paciente: ObjectId('ec7e983507f34fada5a4501e'),
    tratamiento: ObjectId('6887ee060be2cd6239fe6bc1')
  },
  {
    _id: ObjectId('688824670be2cd6239fe6c34'),
    paciente: ObjectId('3524f8a2f3414c1d98fcd28e'),
    tratamiento: ObjectId('6887ee060be2cd6239fe6bc2')
  },
  {
    _id: ObjectId('688824670be2cd6239fe6c35'),
    paciente: ObjectId('8d89f735a02543188d6a7d43'),
    tratamiento: ObjectId('6887ee060be2cd6239fe6bc3')
  },
  {
    _id: ObjectId('688824670be2cd6239fe6c36'),
    paciente: ObjectId('066bd5575f2f407ab17240af'),
    tratamiento: ObjectId('6887ee060be2cd6239fe6bc4')
  },
  {
    _id: ObjectId('688824670be2cd6239fe6c37'),
    paciente: ObjectId('ba5eb1c2ad2b4f6d8d084ce5'),
    tratamiento: ObjectId('6887ee060be2cd6239fe6bc5')
  },
  {
    _id: ObjectId('688824670be2cd6239fe6c38'),
    paciente: ObjectId('f48a3c0baf544bcc867f790c'),
    tratamiento: ObjectId('6887ee060be2cd6239fe6bc6')
  },
  {
    _id: ObjectId('688824670be2cd6239fe6c39'),
    paciente: ObjectId('85e612ca3f234b9493005ab9'),
    tratamiento: ObjectId('6887ee060be2cd6239fe6bc7')
  },
  {
    _id: ObjectId('688824670be2cd6239fe6c3a'),
    paciente: ObjectId('f5e7d20c635d4575ab41b4e6'),
    tratamiento: ObjectId('6887ee060be2cd6239fe6bc8')
  },
  {
    _id: ObjectId('688824670be2cd6239fe6c3b'),
    paciente: ObjectId('fca35a6dea3f4cc082275df5'),
    tratamiento: ObjectId('6887ee060be2cd6239fe6bc9')
  },
  {
    _id: ObjectId('688824670be2cd6239fe6c3c'),
    paciente: ObjectId('f9d0b158dadc4667a34d451c'),
    tratamiento: ObjectId('6887ee060be2cd6239fe6bca')
  },
  {
    _id: ObjectId('688824670be2cd6239fe6c3d'),
    paciente: ObjectId('bb00acc6e59e4979a884d61e'),
    tratamiento: ObjectId('6887ee060be2cd6239fe6bcb')
  },
  {
    _id: ObjectId('688824670be2cd6239fe6c3e'),
    paciente: ObjectId('5cec787741d54b4b92beb29c'),
    tratamiento: ObjectId('6887ee060be2cd6239fe6bcc')
  },
  {
    _id: ObjectId('688824670be2cd6239fe6c3f'),
    paciente: ObjectId('9b6606b94359493a9210b8e0'),
    tratamiento: ObjectId('6887ee060be2cd6239fe6bcd')
  },
  {
    _id: ObjectId('688824670be2cd6239fe6c40'),
    paciente: ObjectId('4f93178bf13c4a1fb79c758a'),
    tratamiento: ObjectId('6887ee060be2cd6239fe6bce')
  },
  {
    _id: ObjectId('688824670be2cd6239fe6c41'),
    paciente: ObjectId('c428a1233cfd4a8d934fb460'),
    tratamiento: ObjectId('6887ee060be2cd6239fe6bcf')
  }
])


  // Validacion Visitasmedicas

  db.createCollection("VisitasMedicas", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "fecha_visita",
          "id_tratamiento",
          "id_medico",
          "id_paciente",
          "id_hospital",
          "tipo_visita",
          "estado_visita",
          "observaciones"
        ],
        properties: {
          _id: {
            bsonType: "objectId",
            description: "ID único de la visita médica."
          },
          fecha_visita: {
            bsonType: "date",
            description: "Fecha y hora de la visita médica. Debe ser un tipo Date."
          },
          id_tratamiento: {
            bsonType: "objectId",
            description: "Referencia al ID del tratamiento asociado a esta visita (FK). Debe ser un ObjectId."
          },
          id_medico: {
            bsonType: "objectId",
            description: "Referencia al ID del médico que realizó la visita (FK). Debe ser un ObjectId."
          },
          id_paciente: {
            bsonType: "objectId",
            description: "Referencia al ID del paciente que recibió la visita (FK). Debe ser un ObjectId."
          },
          id_hospital: {
            bsonType: "objectId",
            description: "Referencia al ID del hospital donde se realizó la visita (FK). Debe ser un ObjectId."
          },
          tipo_visita: {
            bsonType: "string",
            enum: ["Consulta General", "Emergencia", "Seguimiento", "Control", "Interconsulta", "Procedimiento"],
            description: "Tipo de visita médica. Debe ser uno de los valores predefinidos."
          },
          estado_visita: {
            bsonType: "string",
            enum: ["Programada", "Realizada", "Cancelada", "Reprogramada", "Pendiente"],
            description: "Estado actual de la visita médica. Debe ser uno de los valores predefinidos."
          },
          observaciones: {
            bsonType: "string",
            maxLength: 1000,
            description: "Notas u observaciones relevantes de la visita. Debe ser un string, máximo 1000 caracteres."
          }
        }
      }
    },
    validationLevel: "strict",
    validationAction: "error"
  });



// Coleccion VisitasMedicas


db.VisitasMedicas.insertMany([
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-01-15T09:30:00Z"),
    id_tratamiento: ObjectId('be2d259697cd42fc99d36162'),
    id_medico: "med001",
    id_paciente: "44827dbe77d340ae975ec45c",
    tipo_visita: "Consulta general",
    estado_visita: "Completada",
    observaciones: "Paciente presenta mejoría en síntomas iniciales. Se recomienda continuar tratamiento."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-01-16T14:00:00Z"),
    id_tratamiento: ObjectId('bc63b5c2331d4fcdb26c517c'),
    id_medico: "med002",
    id_paciente: "6313070bc3634e8694175f22",
    tipo_visita: "Control postoperatorio",
    estado_visita: "Completada",
    observaciones: "Herida quirúrgica cicatrizando correctamente. Sin signos de infección."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-01-17T10:15:00Z"),
    id_tratamiento: ObjectId('be5639854e484337a5f7fd40'),
    id_medico: "med003",
    id_paciente: "8ae0a42a2f354a45861708d5",
    tipo_visita: "Urgencia",
    estado_visita: "Completada",
    observaciones: "Paciente atendido por dolor abdominal agudo. Se realizaron estudios complementarios."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-01-18T11:45:00Z"),
    id_tratamiento: ObjectId('65dc333014f4439ea1da0e34'),
    id_medico: "med004",
    id_paciente: "66667855c5204841b0a174cf",
    tipo_visita: "Consulta especializada",
    estado_visita: "Completada",
    observaciones: "Evaluación cardiológica completa. Se ajusta medicación antihipertensiva."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-01-19T08:30:00Z"),
    id_tratamiento: ObjectId('048f014687e34335a6a79477'),
    id_medico: "med005",
    id_paciente: "4f9ce3a8b8534deba71ca321",
    tipo_visita: "Control rutinario",
    estado_visita: "Completada",
    observaciones: "Paciente diabético con niveles de glucosa estables. Continuar con dieta y ejercicio."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-01-20T15:20:00Z"),
    id_tratamiento: ObjectId('ec7e983507f34fada5a4501e'),
    id_medico: "med006",
    id_paciente: "db4dd9a5bacb438caf9fde8b",
    tipo_visita: "Rehabilitación",
    estado_visita: "En progreso",
    observaciones: "Sesión de fisioterapia completada. Paciente muestra progreso en movilidad."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-01-22T09:00:00Z"),
    id_tratamiento: ObjectId('3524f8a2f3414c1d98fcd28e'),
    id_medico: "med007",
    id_paciente: "98647a40f54c4013a2231d87",
    tipo_visita: "Consulta general",
    estado_visita: "Completada",
    observaciones: "Chequeo anual completo. Todos los parámetros dentro de rangos normales."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-01-23T13:30:00Z"),
    id_tratamiento: ObjectId('8d89f735a02543188d6a7d43'),
    id_medico: "med008",
    id_paciente: "fa6caa4ffb2348b391a29d12",
    tipo_visita: "Consulta especializada",
    estado_visita: "Completada",
    observaciones: "Evaluación neurológica. Se solicitan estudios complementarios."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-01-24T16:45:00Z"),
    id_tratamiento: ObjectId('066bd5575f2f407ab17240af'),
    id_medico: "med009",
    id_paciente: "a36d36f944fa4a6bbc9b1108",
    tipo_visita: "Urgencia",
    estado_visita: "Completada",
    observaciones: "Atención por crisis asmática. Paciente estabilizado y dado de alta."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-01-25T10:30:00Z"),
    id_tratamiento: ObjectId('ba5eb1c2ad2b4f6d8d084ce5'),
    id_medico: "med010",
    id_paciente: "87550034ec0c46fb9305eeb9",
    tipo_visita: "Control postoperatorio",
    estado_visita: "Completada",
    observaciones: "Primera consulta postoperatoria. Evolución favorable sin complicaciones."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-01-26T12:15:00Z"),
    id_tratamiento: ObjectId('f48a3c0baf544bcc867f790c'),
    id_medico: "med011",
    id_paciente: "789bac0123ce4f56a461478e",
    tipo_visita: "Consulta general",
    estado_visita: "Completada",
    observaciones: "Paciente refiere dolor en articulaciones. Se inicia tratamiento antiinflamatorio."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-01-29T14:00:00Z"),
    id_tratamiento: ObjectId('85e612ca3f234b9493005ab9'),
    id_medico: "med012",
    id_paciente: "b287c155f2c3455f80484841",
    tipo_visita: "Rehabilitación",
    estado_visita: "En progreso",
    observaciones: "Continúa programa de rehabilitación cardíaca. Tolerancia al ejercicio mejorada."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-01-30T08:45:00Z"),
    id_tratamiento: ObjectId('f5e7d20c635d4575ab41b4e6'),
    id_medico: "med013",
    id_paciente: "36076c4cdfb948d5a8b6f8e3",
    tipo_visita: "Consulta especializada",
    estado_visita: "Completada",
    observaciones: "Evaluación dermatológica completa. Se detecta lesión que requiere biopsia."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-01-31T11:20:00Z"),
    id_tratamiento: ObjectId('fca35a6dea3f4cc082275df5'),
    id_medico: "med014",
    id_paciente: "f599cf0705884961a72d51bd",
    tipo_visita: "Control rutinario",
    estado_visita: "Completada",
    observaciones: "Control de hipertensión arterial. Presión arterial controlada con medicación actual."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-02-01T15:30:00Z"),
    id_tratamiento: ObjectId('f9d0b158dadc4667a34d451c'),
    id_medico: "med015",
    id_paciente: "ad5006ae5a58430f8660cc11",
    tipo_visita: "Urgencia",
    estado_visita: "Completada",
    observaciones: "Traumatismo en extremidad inferior. Se realiza radiografía, sin fracturas evidentes."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-02-02T09:10:00Z"),
    id_tratamiento: ObjectId('bb00acc6e59e4979a884d61e'),
    id_medico: "med016",
    id_paciente: "a81ad550f8224abdbceb5ca7",
    tipo_visita: "Consulta general",
    estado_visita: "Completada",
    observaciones: "Síntomas gripales. Se indica tratamiento sintomático y reposo."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-02-05T13:45:00Z"),
    id_tratamiento: ObjectId('5cec787741d54b4b92beb29c'),
    id_medico: "med017",
    id_paciente: "a93baf82c485424cb0a1139d",
    tipo_visita: "Control postoperatorio",
    estado_visita: "Completada",
    observaciones: "Segunda evaluación postoperatoria. Herida limpia, retiro de puntos programado."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-02-06T16:00:00Z"),
    id_tratamiento: ObjectId('9b6606b94359493a9210b8e0'),
    id_medico: "med018",
    id_paciente: "23bb5590bca044958152cdf8",
    tipo_visita: "Consulta especializada",
    estado_visita: "Completada",
    observaciones: "Evaluación oftalmológica. Se prescribe nueva graduación para lentes."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-02-07T10:30:00Z"),
    id_tratamiento: ObjectId('4f93178bf13c4a1fb79c758a'),
    id_medico: "med019",
    id_paciente: "69de04630e9040b092fb48ae",
    tipo_visita: "Rehabilitación",
    estado_visita: "En progreso",
    observaciones: "Terapia ocupacional. Paciente muestra mejora en coordinación motora fina."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-02-08T14:15:00Z"),
    id_tratamiento: ObjectId('c428a1233cfd4a8d934fb460'),
    id_medico: "med020",
    id_paciente: "88999d504ecc4c74b718f3aa",
    tipo_visita: "Consulta general",
    estado_visita: "Completada",
    observaciones: "Control de rutina. Se solicitan exámenes de laboratorio para próxima cita."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-02-09T08:00:00Z"),
    id_tratamiento: ObjectId('b7856f0086cc491fa39f1294'),
    id_medico: "med021",
    id_paciente: "cd626fd5803844369b9bbe72",
    tipo_visita: "Urgencia",
    estado_visita: "Completada",
    observaciones: "Dolor torácico. Electrocardiograma normal. Se descarta origen cardíaco."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-02-12T11:30:00Z"),
    id_tratamiento: ObjectId('5cfd89f776cf4a7eaab02319'),
    id_medico: "med022",
    id_paciente: "301a531cbd614944a6a1445f",
    tipo_visita: "Consulta especializada",
    estado_visita: "Completada",
    observaciones: "Evaluación endocrinológica. Ajuste en dosis de medicación para diabetes."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-02-13T15:45:00Z"),
    id_tratamiento: ObjectId('72e124bde5d24daf9fb5265a'),
    id_medico: "med023",
    id_paciente: "5fa0d27199ee47569b9ce5e5",
    tipo_visita: "Control rutinario",
    estado_visita: "Completada",
    observaciones: "Paciente embarazada. Control prenatal sin alteraciones. Feto en buenas condiciones."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-02-14T09:20:00Z"),
    id_tratamiento: ObjectId('7775b869954f4c609cb9dc92'),
    id_medico: "med024",
    id_paciente: "c252a79788ad4d8da0f5057d",
    tipo_visita: "Rehabilitación",
    estado_visita: "En progreso",
    observaciones: "Fisioterapia post fractura. Rango de movimiento mejorando progresivamente."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-02-15T12:00:00Z"),
    id_tratamiento: ObjectId('4e222e7e65804ccf927a0234'),
    id_medico: "med025",
    id_paciente: "657055c99b474d9e96f5f314",
    tipo_visita: "Consulta general",
    estado_visita: "Completada",
    observaciones: "Cefaleas recurrentes. Se solicita resonancia magnética para descartar patología."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-02-16T16:30:00Z"),
    id_tratamiento: ObjectId('93e2f21cd1b044539246e749'),
    id_medico: "med026",
    id_paciente: "3b7d58ab9557486a9fa88b9b",
    tipo_visita: "Urgencia",
    estado_visita: "Completada",
    observaciones: "Reacción alérgica medicamentosa. Tratamiento con antihistamínicos y corticoides."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-02-19T10:45:00Z"),
    id_tratamiento: ObjectId('70db30ff717e439584dce9f3'),
    id_medico: "med027",
    id_paciente: "ee6bda32f09c489d957b8cf2",
    tipo_visita: "Control postoperatorio",
    estado_visita: "Completada",
    observaciones: "Control a las 2 semanas de cirugía. Evolución excelente, sin complicaciones."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-02-20T13:15:00Z"),
    id_tratamiento: ObjectId('cb4a253860604a9f9da41c33'),
    id_medico: "med028",
    id_paciente: "a9ceb66826244b0997920bf0",
    tipo_visita: "Consulta especializada",
    estado_visita: "Completada",
    observaciones: "Evaluación psiquiátrica. Ajuste en medicación antidepresiva."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-02-21T14:30:00Z"),
    id_tratamiento: ObjectId('745460e515dc4304951ddcea'),
    id_medico: "med029",
    id_paciente: "8f7b3b484aec4171925ecfd9",
    tipo_visita: "Rehabilitación",
    estado_visita: "En progreso",
    observaciones: "Terapia del lenguaje post ACV. Se observa mejoría en articulación."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-02-22T08:30:00Z"),
    id_tratamiento: ObjectId('d031f50cb7a644058400fc20'),
    id_medico: "med030",
    id_paciente: "93efec4840cf4f49ae82c60c",
    tipo_visita: "Consulta general",
    estado_visita: "Completada",
    observaciones: "Dolor lumbar crónico. Se indica fisioterapia y analgésicos."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-02-23T15:00:00Z"),
    id_tratamiento: ObjectId('6527d68ce81b455db16bd420'),
    id_medico: "med031",
    id_paciente: "cbd109c0a6cd4f6d99349647",
    tipo_visita: "Control rutinario",
    estado_visita: "Completada",
    observaciones: "Control de colesterol. Niveles dentro de rango objetivo con dieta y medicación."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-02-26T09:15:00Z"),
    id_tratamiento: ObjectId('3e2a0a03299e4be9b7aa2650'),
    id_medico: "med032",
    id_paciente: "fe23b8906e104c288e08b9d1",
    tipo_visita: "Urgencia",
    estado_visita: "Completada",
    observaciones: "Gastroenteritis aguda. Hidratación endovenosa y tratamiento sintomático."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-02-27T11:00:00Z"),
    id_tratamiento: ObjectId('2b4c0443bb0446c89955b637'),
    id_medico: "med033",
    id_paciente: "b3e29cc380dd4fbd85a3fcac",
    tipo_visita: "Consulta especializada",
    estado_visita: "Completada",
    observaciones: "Evaluación ortopédica. Se programa cirugía de rodilla para próximo mes."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-02-28T16:20:00Z"),
    id_tratamiento: ObjectId('6a6b574e72ec4bbfad7d8ba2'),
    id_medico: "med034",
    id_paciente: "ab2671eb0e354741861a5804",
    tipo_visita: "Rehabilitación",
    estado_visita: "En progreso",
    observaciones: "Rehabilitación pulmonar. Capacidad respiratoria mejorando gradualmente."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-03-01T10:30:00Z"),
    id_tratamiento: ObjectId('166b32fac8db4e13a013c63f'),
    id_medico: "med035",
    id_paciente: "9bf4441add30418ab41211ac",
    tipo_visita: "Consulta general",
    estado_visita: "Completada",
    observaciones: "Vacunación de rutina completada. Próxima cita en 6 meses para control."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-03-04T14:45:00Z"),
    id_tratamiento: ObjectId('3dfc0771329b41e7ab764d0c'),
    id_medico: "med036",
    id_paciente: "d626b432e7cb41599dabc5cd",
    tipo_visita: "Consulta especializada",
    estado_visita: "Completada",
    observaciones: "Evaluación ginecológica anual. Se realizan estudios preventivos de rutina."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-03-05T11:15:00Z"),
    id_tratamiento: ObjectId('bfa69a6e428e47b78481d345'),
    id_medico: "med037",
    id_paciente: "c192a7ca8b59495db860aba7",
    tipo_visita: "Control rutinario",
    estado_visita: "Completada",
    observaciones: "Control de presión arterial. Medicación ajustada según evolución clínica."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-03-06T09:45:00Z"),
    id_tratamiento: ObjectId('b259d5fcc0f34f3bb1f94e4b'),
    id_medico: "med038",
    id_paciente: "89181af5cab54d6eb404c76a",
    tipo_visita: "Urgencia",
    estado_visita: "Completada",
    observaciones: "Episodio de broncoespasmo. Nebulizaciones y corticoides inhalados."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-03-07T16:00:00Z"),
    id_tratamiento: ObjectId('0df5e5db9d384398af1cda01'),
    id_medico: "med039",
    id_paciente: "63c26a8be9ca40169c166545",
    tipo_visita: "Rehabilitación",
    estado_visita: "En progreso",
    observaciones: "Sesión de terapia física. Fortalecimiento muscular progresivo satisfactorio."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-03-08T13:20:00Z"),
    id_tratamiento: ObjectId('961401f855dc461886f662cf'),
    id_medico: "med040",
    id_paciente: "7dd585bd94ae48e99b5290f0",
    tipo_visita: "Consulta general",
    estado_visita: "Completada",
    observaciones: "Evaluación de salud mental. Se refiere a especialista en psicología clínica."
  }
]);










// Coleccion VisitasMedicas

db.VisitasMedicas.insertMany([
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-03-10T09:30:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbc'),
    id_medico: "med001",
    id_paciente: "f39f8a0de6bb41558c572960",
    tipo_visita: "Consulta inicial",
    estado_visita: "Completada",
    observaciones: "Paciente con dolor abdominal. Se ordenaron análisis de sangre."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-03-15T14:15:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbd'),
    id_medico: "med012",
    id_paciente: "7de16aa11ef64441881e8afc",
    tipo_visita: "Seguimiento",
    estado_visita: "Completada",
    observaciones: "Mejoría notable en los síntomas. Ajustar dosis de medicación."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-03-20T11:00:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbe'),
    id_medico: "med025",
    id_paciente: "65513a811af94d15817ffb19",
    tipo_visita: "Control rutinario",
    estado_visita: "Cancelada",
    observaciones: "Paciente no se presentó. Reagendar."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-03-22T16:45:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbf'),
    id_medico: "med038",
    id_paciente: "ca1d04d3a6384ec799088359",
    tipo_visita: "Urgencia",
    estado_visita: "Completada",
    observaciones: "Paciente con fiebre alta. Se administró antipirético."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-03-25T10:00:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc0'),
    id_medico: "med005",
    id_paciente: "1db882ee6aec4460ba013961",
    tipo_visita: "Revisión postoperatoria",
    estado_visita: "Completada",
    observaciones: "Herida quirúrgica cicatrizando correctamente."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-04-02T13:30:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc1'),
    id_medico: "med031",
    id_paciente: "48e09b852d9440b19063140b",
    tipo_visita: "Control rutinario",
    estado_visita: "Completada",
    observaciones: "Presión arterial estable con medicación actual."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-04-05T08:45:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc2'),
    id_medico: "med019",
    id_paciente: "88ed3da661d54cb082cdd6d3",
    tipo_visita: "Consulta especializada",
    estado_visita: "Completada",
    observaciones: "Derivar a endocrinólogo para evaluación adicional."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-04-10T15:20:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc3'),
    id_medico: "med042",
    id_paciente: "c4c33f4b721f4e11b73bada1",
    tipo_visita: "Seguimiento crónico",
    estado_visita: "Completada",
    observaciones: "Paciente con diabetes controlada. Mantener tratamiento."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-04-12T11:15:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc4'),
    id_medico: "med007",
    id_paciente: "bd6f23dec1894fa0989ff0fe",
    tipo_visita: "Vacunación",
    estado_visita: "Completada",
    observaciones: "Administrada vacuna antigripal. Sin reacciones adversas."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-04-18T09:00:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc5'),
    id_medico: "med053",
    id_paciente: "c4300bed41724d0e8e71b3bd",
    tipo_visita: "Control pediátrico",
    estado_visita: "Completada",
    observaciones: "Niño con desarrollo normal para su edad."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-04-20T14:30:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc6'),
    id_medico: "med015",
    id_paciente: "8634bc0e6692475687a3d6e6",
    tipo_visita: "Emergencia",
    estado_visita: "Completada",
    observaciones: "Paciente con dificultad respiratoria. Mejoría tras tratamiento."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-04-25T10:45:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc7'),
    id_medico: "med028",
    id_paciente: "ef70a89b53f84591a470ce8d",
    tipo_visita: "Consulta psicológica",
    estado_visita: "Completada",
    observaciones: "Sesión de terapia cognitivo-conductual."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-05-03T16:00:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc8'),
    id_medico: "med036",
    id_paciente: "fbf4213d9d54484c9bc0164e",
    tipo_visita: "Rehabilitación",
    estado_visita: "Completada",
    observaciones: "Progreso en movilidad tras fractura de tibia."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-05-08T08:30:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc9'),
    id_medico: "med022",
    id_paciente: "565b6aba0fab4b8a9d939856",
    tipo_visita: "Control prenatal",
    estado_visita: "Completada",
    observaciones: "Embarazo de 24 semanas. Todo normal."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-05-12T12:15:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bca'),
    id_medico: "med047",
    id_paciente: "035d1382d23244319fb934cb",
    tipo_visita: "Tratamiento dermatológico",
    estado_visita: "Completada",
    observaciones: "Mejoría en lesiones cutáneas con crema recetada."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-05-18T15:45:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bcb'),
    id_medico: "med009",
    id_paciente: "5bc185636aa24ce2b5800968",
    tipo_visita: "Chequeo anual",
    estado_visita: "Completada",
    observaciones: "Analíticas dentro de rangos normales."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-05-22T11:30:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bcc'),
    id_medico: "med054",
    id_paciente: "78a11003bfb54abdba7a7215",
    tipo_visita: "Consulta oftalmológica",
    estado_visita: "Completada",
    observaciones: "Cambio en graduación de lentes. Recetados nuevos anteojos."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-05-25T09:15:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bcd'),
    id_medico: "med033",
    id_paciente: "f1cad87e1a964c258cf39f0b",
    tipo_visita: "Control geriátrico",
    estado_visita: "Completada",
    observaciones: "Paciente con artrosis. Recomendado fisioterapia."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-05-30T14:00:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bce'),
    id_medico: "med061",
    id_paciente: "9cf3fccf2247471288d0c60b",
    tipo_visita: "Evaluación cardiológica",
    estado_visita: "Pendiente",
    observaciones: "Programar electrocardiograma para próxima visita."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-06-05T10:20:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bcf'),
    id_medico: "med017",
    id_paciente: "6f5f2ec759074e1fae02beb1",
    tipo_visita: "Seguimiento tratamiento",
    estado_visita: "Completada",
    observaciones: "Paciente tolerando bien la medicación. Continuar igual."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-09-05T10:15:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbc'),
    id_medico: "med018",
    id_paciente: "8634bc0e6692475687a3d6e6",
    tipo_visita: "Consulta general",
    estado_visita: "Completada",
    observaciones: "Paciente con dolor de garganta. Se recetó antibiótico tras test rápido positivo para estreptococo."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-09-08T14:30:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbd'),
    id_medico: "med027",
    id_paciente: "ef70a89b53f84591a470ce8d",
    tipo_visita: "Control rutinario",
    estado_visita: "Completada",
    observaciones: "Presión arterial dentro de rangos normales. Continuar con hábitos saludables."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-09-12T11:45:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbe'),
    id_medico: "med035",
    id_paciente: "fbf4213d9d54484c9bc0164e",
    tipo_visita: "Consulta especializada",
    estado_visita: "Completada",
    observaciones: "Derivado a neumología por sospecha de asma. Solicitar espirometría."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-09-15T16:20:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbf'),
    id_medico: "med049",
    id_paciente: "565b6aba0fab4b8a9d939856",
    tipo_visita: "Urgencia",
    estado_visita: "Completada",
    observaciones: "Paciente con reacción alérgica leve. Administrado antihistamínico. Mejoría inmediata."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-09-18T09:10:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc0'),
    id_medico: "med011",
    id_paciente: "035d1382d23244319fb934cb",
    tipo_visita: "Control postoperatorio",
    estado_visita: "Completada",
    observaciones: "Retirada de puntos. Herida cicatrizando adecuadamente sin signos de infección."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-09-22T13:25:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc1'),
    id_medico: "med052",
    id_paciente: "5bc185636aa24ce2b5800968",
    tipo_visita: "Seguimiento",
    estado_visita: "Completada",
    observaciones: "Paciente con artritis reumatoide. Dolor mejor controlado con medicación actual."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-09-25T15:50:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc2'),
    id_medico: "med024",
    id_paciente: "78a11003bfb54abdba7a7215",
    tipo_visita: "Rehabilitación",
    estado_visita: "Completada",
    observaciones: "Progreso en terapia física tras accidente cerebrovascular. Aumentar intensidad de ejercicios."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-09-28T08:40:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc3'),
    id_medico: "med043",
    id_paciente: "f1cad87e1a964c258cf39f0b",
    tipo_visita: "Procedimiento",
    estado_visita: "Completada",
    observaciones: "Extracción de lunar para biopsia. Resultados en 7-10 días."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-10-02T12:15:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc4'),
    id_medico: "med016",
    id_paciente: "9cf3fccf2247471288d0c60b",
    tipo_visita: "Interconsulta",
    estado_visita: "Completada",
    observaciones: "Evaluación conjunta con psiquiatría para manejo de depresión resistente."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-10-05T10:30:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc5'),
    id_medico: "med030",
    id_paciente: "6f5f2ec759074e1fae02beb1",
    tipo_visita: "Control rutinario",
    estado_visita: "Completada",
    observaciones: "Analíticas dentro de rangos normales. Recomendar continuar con ejercicio moderado."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-10-09T14:45:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc6'),
    id_medico: "med041",
    id_paciente: "5fad35df50fa4a41a10b177d",
    tipo_visita: "Consulta general",
    estado_visita: "Completada",
    observaciones: "Paciente con sinusitis. Recetado tratamiento antibiótico y descongestionante."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-10-12T09:20:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc7'),
    id_medico: "med055",
    id_paciente: "fdad6026193541e38df55755",
    tipo_visita: "Control postoperatorio",
    estado_visita: "Completada",
    observaciones: "Seguimiento tras cirugía de vesícula. Dieta baja en grasas tolerada adecuadamente."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-10-15T16:10:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc8'),
    id_medico: "med008",
    id_paciente: "9726b7134942488894089fe1",
    tipo_visita: "Urgencia",
    estado_visita: "Completada",
    observaciones: "Paciente con esguince de tobillo grado I. Recomendado reposo, hielo y elevación."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-10-18T11:35:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc9'),
    id_medico: "med062",
    id_paciente: "ae4a23ebdbfa4088bb49b60b",
    tipo_visita: "Consulta especializada",
    estado_visita: "Completada",
    observaciones: "Evaluación endocrinológica por posible trastorno tiroideo. Solicitar perfil tiroideo completo."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-10-22T08:50:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bca'),
    id_medico: "med013",
    id_paciente: "0b53d8c4945640f490005032",
    tipo_visita: "Seguimiento",
    estado_visita: "Completada",
    observaciones: "Paciente con EPOC estable. Continuar tratamiento inhalatorio actual."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-10-25T13:15:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bcb'),
    id_medico: "med046",
    id_paciente: "8505a55a62cc4d78a3fc0be2",
    tipo_visita: "Control rutinario",
    estado_visita: "Completada",
    observaciones: "Chequeo anual sin hallazgos relevantes. Próxima visita en 1 año."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-10-28T15:40:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bcc'),
    id_medico: "med029",
    id_paciente: "0745a05c307843c284440288",
    tipo_visita: "Procedimiento",
    estado_visita: "Completada",
    observaciones: "Aplicación de vacuna antineumocócica. Sin reacciones adversas."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-11-02T10:25:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bcd'),
    id_medico: "med057",
    id_paciente: "6b05232b1b304a0a9a5a3990",
    tipo_visita: "Interconsulta",
    estado_visita: "Pendiente",
    observaciones: "Derivación a cardiología por soplo cardíaco detectado en examen rutinario."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-11-05T14:50:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bce'),
    id_medico: "med004",
    id_paciente: "2631f701dc604f5db2c4f320",
    tipo_visita: "Rehabilitación",
    estado_visita: "Completada",
    observaciones: "Sesión de fisioterapia para recuperación de movilidad tras fractura de húmero."
  },
  {
    _id: new ObjectId(),
    fecha_visita: new Date("2024-11-08T09:35:00Z"),
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bcf'),
    id_medico: "med050",
    id_paciente: "f9b746ebd82a4f09b5b46a77",
    tipo_visita: "Consulta general",
    estado_visita: "Completada",
    observaciones: "Paciente con conjuntivitis viral. Recomendado tratamiento sintomático y medidas higiénicas."
  }
])





// Validacion Enfermedades

db.createCollection("Enfermedades", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nombre", "tipo", "clasificacion", "id_sintoma"],
      properties: {
        nombre: {
          bsonType: "string",
          description: "Debe ser un string y es requerido."
        },
        tipo: {
          bsonType: "string",
          description: "Debe ser un string y es requerido."
        },
        clasificacion: {
          bsonType: "string",
          description: "Debe ser un string y es requerido."
        },
        id_sintoma: {
          bsonType: "objectId",
          description: "Debe ser un ObjectId válido que referencia a la colección Sintomas y es requerido."
        }
      }
    }
  }
});

// Coleccion Enfermedades
db.Enfermedades.insertMany([
  {
    _id: ObjectId(),
    nombre: "Gripe Común",
    tipo: "Infecciosa",
    clasificacion: "Viral",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe696a')
  },
  {
    _id: ObjectId(),
    nombre: "Migraña",
    tipo: "Neurológica",
    clasificacion: "Crónica",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe696b')
  },
  {
    _id: ObjectId(),
    nombre: "Bronquitis Aguda",
    tipo: "Respiratoria",
    clasificacion: "Inflamatoria",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe696c')
  },
  {
    _id: ObjectId(),
    nombre: "Diabetes Tipo 2",
    tipo: "Metabólica",
    clasificacion: "Crónica",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe696d')
  },
  {
    _id: ObjectId(),
    nombre: "Dermatitis Atópica",
    tipo: "Cutánea",
    clasificacion: "Autoinmune",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe696e')
  },
  {
    _id: ObjectId(),
    nombre: "Hipertensión",
    tipo: "Cardiovascular",
    clasificacion: "Crónica",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe696f')
  },
  {
    _id: ObjectId(),
    nombre: "Gastritis",
    tipo: "Digestiva",
    clasificacion: "Inflamatoria",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6970')
  },
  {
    _id: ObjectId(),
    nombre: "Artritis Reumatoide",
    tipo: "Autoinmune",
    clasificacion: "Crónica",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6971')
  },
  {
    _id: ObjectId(),
    nombre: "Conjuntivitis",
    tipo: "Ocular",
    clasificacion: "Infecciosa",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6972')
  },
  {
    _id: ObjectId(),
    nombre: "Anemia Ferropénica",
    tipo: "Sanguínea",
    clasificacion: "Deficiencia",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6973')
  },
  {
    _id: ObjectId(),
    nombre: "Asma",
    tipo: "Respiratoria",
    clasificacion: "Crónica",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6974')
  },
  {
    _id: ObjectId(),
    nombre: "Tiña",
    tipo: "Cutánea",
    clasificacion: "Fúngica",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6975')
  },
  {
    _id: ObjectId(),
    nombre: "Cálculos Renales",
    tipo: "Urológica",
    clasificacion: "Metabólica",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6976')
  },
  {
    _id: ObjectId(),
    nombre: "Depresión",
    tipo: "Mental",
    clasificacion: "Trastorno del ánimo",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6977')
  },
  {
    _id: ObjectId(),
    nombre: "Hepatitis A",
    tipo: "Infecciosa",
    clasificacion: "Viral",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6978')
  },
  {
    _id: ObjectId(),
    nombre: "Osteoporosis",
    tipo: "Ósea",
    clasificacion: "Degenerativa",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6979')
  },
  {
    _id: ObjectId(),
    nombre: "Reflujo Gastroesofágico",
    tipo: "Digestiva",
    clasificacion: "Funcional",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe697a')
  },
  {
    _id: ObjectId(),
    nombre: "Sinusitis",
    tipo: "Respiratoria",
    clasificacion: "Inflamatoria",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe697b')
  },
  {
    _id: ObjectId(),
    nombre: "Varicela",
    tipo: "Infecciosa",
    clasificacion: "Viral",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe697c')
  },
  {
    _id: ObjectId(),
    nombre: "Cáncer de Piel",
    tipo: "Oncológica",
    clasificacion: "Neoplasia",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe697d')
  },
  {
    _id: ObjectId(),
    nombre: "Resfriado Común",
    tipo: "Infecciosa",
    clasificacion: "Viral",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe697e')
  },
  {
    _id: ObjectId(),
    nombre: "Dolor de Espalda Crónico",
    tipo: "Musculoesquelética",
    clasificacion: "Dolor crónico",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe697f')
  },
  {
    _id: ObjectId(),
    nombre: "Alergia Estacional",
    tipo: "Inmunológica",
    clasificacion: "Alérgica",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6980')
  },
  {
    _id: ObjectId(),
    nombre: "Gota",
    tipo: "Metabólica",
    clasificacion: "Inflamatoria",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6981')
  },
  {
    _id: ObjectId(),
    nombre: "Conjuntivitis Alérgica",
    tipo: "Ocular",
    clasificacion: "Alérgica",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6982')
  },
  {
    _id: ObjectId(),
    nombre: "Anorexia Nerviosa",
    tipo: "Mental",
    clasificacion: "Trastorno alimentario",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6983')
  },
  {
    _id: ObjectId(),
    nombre: "Enfermedad Celíaca",
    tipo: "Autoinmune",
    clasificacion: "Digestiva",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6984')
  },
  {
    _id: ObjectId(),
    nombre: "Pie de Atleta",
    tipo: "Cutánea",
    clasificacion: "Fúngica",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6985')
  },
  {
    _id: ObjectId(),
    nombre: "Neuralgia del Trigémino",
    tipo: "Neurológica",
    clasificacion: "Dolor crónico",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6986')
  },
  {
    _id: ObjectId(),
    nombre: "Endometriosis",
    tipo: "Ginecológica",
    clasificacion: "Crónica",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6987')
  },
  {
    _id: ObjectId(),
    nombre: "Herpes Labial",
    tipo: "Infecciosa",
    clasificacion: "Viral",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6988')
  },
  {
    _id: ObjectId(),
    nombre: "Colitis Ulcerosa",
    tipo: "Digestiva",
    clasificacion: "Inflamatoria",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6989')
  },
  {
    _id: ObjectId(),
    nombre: "Esclerosis Múltiple",
    tipo: "Neurológica",
    clasificacion: "Autoinmune",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe698a')
  },
  {
    _id: ObjectId(),
    nombre: "Síndrome de Colon Irritable",
    tipo: "Digestiva",
    clasificacion: "Funcional",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe698b')
  },
  {
    _id: ObjectId(),
    nombre: "Cataratas",
    tipo: "Ocular",
    clasificacion: "Degenerativa",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe698c')
  },
  {
    _id: ObjectId(),
    nombre: "Mononucleosis",
    tipo: "Infecciosa",
    clasificacion: "Viral",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe698d')
  },
  {
    _id: ObjectId(),
    nombre: "Fibromialgia",
    tipo: "Musculoesquelética",
    clasificacion: "Dolor crónico",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe698e')
  },
  {
    _id: ObjectId(),
    nombre: "Enfermedad de Crohn",
    tipo: "Digestiva",
    clasificacion: "Autoinmune",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe698f')
  },
  {
    _id: ObjectId(),
    nombre: "Glaucoma",
    tipo: "Ocular",
    clasificacion: "Crónica",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6990')
  },
  {
    _id: ObjectId(),
    nombre: "Neumonía Bacteriana",
    tipo: "Respiratoria",
    clasificacion: "Bacteriana",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6991')
  },
  {
    _id: ObjectId(),
    nombre: "Otitis Media",
    tipo: "Otorrinolaringológica",
    clasificacion: "Infecciosa",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6992')
  },
  {
    _id: ObjectId(),
    nombre: "Psoriasis",
    tipo: "Cutánea",
    clasificacion: "Autoinmune",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6993')
  },
  {
    _id: ObjectId(),
    nombre: "Síndrome de Fatiga Crónica",
    tipo: "Neurológica",
    clasificacion: "Crónica",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6994')
  },
  {
    _id: ObjectId(),
    nombre: "Hipotiroidismo",
    tipo: "Endocrina",
    clasificacion: "Hormonal",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6995')
  },
  {
    _id: ObjectId(),
    nombre: "VIH/SIDA",
    tipo: "Infecciosa",
    clasificacion: "Viral",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6996')
  },
  {
    _id: ObjectId(),
    nombre: "Cistitis",
    tipo: "Urológica",
    clasificacion: "Infecciosa",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6997')
  },
  {
    _id: ObjectId(),
    nombre: "Parkinson",
    tipo: "Neurológica",
    clasificacion: "Neurodegenerativa",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe6998')
  },
  {
    _id: ObjectId(),
    nombre: "Úlcera Péptica",
    tipo: "Digestiva",
    clasificacion: "Inflamatoria",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe696a') // Repetido para completar los 50
  },
  {
    _id: ObjectId(),
    nombre: "Hemorroides",
    tipo: "Digestiva",
    clasificacion: "Vascular",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe696b') // Repetido
  },
  {
    _id: ObjectId(),
    nombre: "Apendicitis",
    tipo: "Digestiva",
    clasificacion: "Inflamatoria aguda",
    id_sintoma: ObjectId('6887e4cc0be2cd6239fe696c') // Repetido
  }
]);

// Validacion Beneficios
db.createCollection("Beneficios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["descripcion", "id_tratamiento"],
      properties: {
        descripcion: {
          bsonType: "string",
          description: "Debe ser un string y es requerido."
        },
        id_tratamiento: {
          bsonType: "objectId",
          description: "Debe ser un ObjectId válido que referencia a la colección Tratamientos y es requerido."
        }
      }
    }
  }
});

// coleccion Beneficios

  db.Beneficios.insertMany([ {
    _id: ObjectId(),
    descripcion: "Alivio significativo del dolor y mejora de la movilidad.", 
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbc')
  },
  {
    _id: ObjectId(),
    descripcion: "Reducción de la inflamación y recuperación más rápida.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbd')
  },
  {
    _id: ObjectId(),
    descripcion: "Mejora en la función respiratoria y menos episodios de asma.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbe')
  },
  {
    _id: ObjectId(),
    descripcion: "Control efectivo de los niveles de azúcar en sangre.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbf')
  },
  {
    _id: ObjectId(),
    descripcion: "Piel más sana y reducción de brotes de dermatitis.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc0')
  },
  {
    _id: ObjectId(),
    descripcion: "Normalización de la presión arterial y menor riesgo cardiovascular.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc1')
  },
  {
    _id: ObjectId(),
    descripcion: "Disminución de la acidez estomacal y alivio de la indigestión.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc2')
  },
  {
    _id: ObjectId(),
    descripcion: "Mejora en la calidad del sueño y reducción de la fatiga.", 
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc3')
  },
  {
    _id: ObjectId(),
    descripcion: "Recuperación de la visión y prevención de futuros problemas oculares.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc4')
  },
  {
    _id: ObjectId(),
    descripcion: "Aumento de los niveles de energía y mejora general del bienestar.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc5')
  },
  {
    _id: ObjectId(),
    descripcion: "Fortalecimiento del sistema inmunológico y menor susceptibilidad a infecciones.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc6')
  },
  {
    _id: ObjectId(),
    descripcion: "Crecimiento de cabello y uñas más saludables.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc7')
  },
  {
    _id: ObjectId(),
    descripcion: "Mejora del estado de ánimo y reducción de la ansiedad.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc8')
  },
  {
    _id: ObjectId(),
    descripcion: "Desintoxicación del organismo y mejora de la función hepática.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc9')
  },
  {
    _id: ObjectId(),
    descripcion: "Reducción de la frecuencia e intensidad de los dolores de cabeza.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bca')
  },
  {
    _id: ObjectId(),
    descripcion: "Mejora de la digestión y regularidad intestinal.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bcb')
  },
  {
    _id: ObjectId(),
    descripcion: "Aumento de la concentración y claridad mental.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bcc')
  },
  {
    _id: ObjectId(),
    descripcion: "Recuperación de la masa ósea y prevención de fracturas.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bcd')
  },
  {
    _id: ObjectId(),
    descripcion: "Ciclos menstruales más regulares y menos dolorosos.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bce')
  },
  {
    _id: ObjectId(),
    descripcion: "Mejora de la circulación sanguínea y reducción de hinchazón.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bcf')
  },
  {
    _id: ObjectId(),
    descripcion: "Restauración de la vitalidad y energía general.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbc')
  },
  {
    _id: ObjectId(),
    descripcion: "Eliminación de toxinas y purificación del cuerpo.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbd')
  },
  {
    _id: ObjectId(),
    descripcion: "Mejora de la postura y reducción de dolores crónicos.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbe')
  },
  {
    _id: ObjectId(),
    descripcion: "Fortalecimiento de articulaciones y ligamentos.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbf')
  },
  {
    _id: ObjectId(),
    descripcion: "Reducción del estrés y promoción de la calma.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc0')
  },
  {
    _id: ObjectId(),
    descripcion: "Mejora de la función cognitiva y memoria.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc1')
  },
  {
    _id: ObjectId(),
    descripcion: "Regulación del apetito y promoción de un peso saludable.", 
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc2')
  },
  {
    _id: ObjectId(),
    descripcion: "Piel más luminosa y reducción de imperfecciones.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc3')
  },
  {
    _id: ObjectId(),
    descripcion: "Recuperación rápida de lesiones deportivas.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc4')
  },
  {
    _id: ObjectId(),
    descripcion: "Mejora de la audición y reducción de zumbidos.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc5')
  },
  {
    _id: ObjectId(),
    descripcion: "Aumento de la flexibilidad y rango de movimiento.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc6')
  },
  {
    _id: ObjectId(),
    descripcion: "Refuerzo del sistema cardiovascular.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc7')
  },
  {
    _id: ObjectId(),
    descripcion: "Disminución de la sensibilidad dental.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc8')
  },
  {
    _id: ObjectId(),
    descripcion: "Reducción de la retención de líquidos.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc9')
  },
  {
    _id: ObjectId(),
    descripcion: "Mejora del equilibrio y coordinación.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bca')
  },
  {
    _id: ObjectId(),
    descripcion: "Alivio de los síntomas del síndrome premenstrual.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bcb')
  },
  {
    _id: ObjectId(),
    descripcion: "Fortalecimiento del cabello y reducción de su caída.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bcc')
  },
  {
    _id: ObjectId(),
    descripcion: "Mayor resistencia física y menos fatiga muscular.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bcd')
  },
  {
    _id: ObjectId(),
    descripcion: "Regulación hormonal y mejora del bienestar general.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bce')
  },
  {
    _id: ObjectId(),
    descripcion: "Mejora de la función renal y desintoxicación.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bcf')
  },
  {
    _id: ObjectId(),
    descripcion: "Reducción de la tensión muscular y espasmos.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbc')
  },
  {
    _id: ObjectId(),
    descripcion: "Mejora del tránsito intestinal y alivio del estreñimiento.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbd')
  },
  {
    _id: ObjectId(),
    descripcion: "Piel hidratada y reducción de la sequedad.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbe')
  },
  {
    _id: ObjectId(),
    descripcion: "Reducción de la caída del cabello y fomento del crecimiento.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bbf')
  },
  {
    _id: ObjectId(),
    descripcion: "Fortalecimiento de los huesos y prevención de la osteoporosis.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc0')
  },
  {
    _id: ObjectId(),
    descripcion: "Alivio del dolor articular y mejora de la movilidad.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc1')
  },
  {
    _id: ObjectId(),
    descripcion: "Mejora en la cicatrización de heridas.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc2')
  },
  {
    _id: ObjectId(),
    descripcion: "Refuerzo de la función pulmonar.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc3')
  },
  {
    _id: ObjectId(),
    descripcion: "Reducción del cansancio ocular.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc4')
  },
  {
    _id: ObjectId(),
    descripcion: "Regulación del ciclo del sueño.",
    id_tratamiento: ObjectId('6887ee060be2cd6239fe6bc5')
  }
]);

  



// Valiacion Requerimientos
db.createCollection("Requerimientos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["descripcion", "id_tratamiento"],
      properties: {
        descripcion: {
          bsonType: "string",
          description: "debe ser una cadena de texto y es obligatoria"
        },
        id_tratamiento: {
          bsonType: "objectId",
          description: "debe ser un ObjectId válido referenciando un tratamiento y es obligatorio"
        }
      }
    }
  },
  validationAction: "error" // Esto asegura que cualquier documento que no cumpla con el esquema no sea insertado
});




// Coleccion Requeriminetos

db.Requerimientos.insertMany([
  {
    "descripcion": "El paciente debe ayunar al menos 8 horas antes del procedimiento. Se requiere una evaluación pre-anestésica completa.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bbc" }
  },
  {
    "descripcion": "Monitorear la presión arterial cada 8 horas durante los primeros 3 días. Dosis máxima diaria de 500mg.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bbd" }
  },
  {
    "descripcion": "El tratamiento está contraindicado en pacientes con insuficiencia renal. Se necesita consentimiento informado por escrito.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bbe" }
  },
  {
    "descripcion": "Las sesiones deben ser al menos 3 veces por semana para ver resultados. Requiere la participación activa del paciente.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bbf" }
  },
  {
    "descripcion": "El paciente debe abstenerse de consumir alcohol durante la duración del tratamiento. Seguimiento semanal requerido.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc0" }
  },
  {
    "descripcion": "Administrar el medicamento con alimentos para reducir irritación gástrica. Advertir sobre posibles náuseas.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc1" }
  },
  {
    "descripcion": "Verificar la disponibilidad de equipo especializado. Realizar pruebas de coagulación sanguínea previas.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc2" }
  },
  {
    "descripcion": "El paciente debe tener un historial médico completo. No apto para pacientes con ideación suicida activa.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc3" }
  },
  {
    "descripcion": "Asegurar un entorno seguro y libre de obstáculos. El paciente debe tener movilidad mínima.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc4" }
  },
  {
    "descripcion": "Confidencialidad absoluta garantizada, salvo excepciones legales. Compromiso a asistir a todas las sesiones.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc5" }
  },
  {
    "descripcion": "Se requiere una prueba de laboratorio (e.g., hemograma completo) antes y después del tratamiento.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc6" }
  },
  {
    "descripcion": "Ajustar la dosis según la respuesta del paciente. Monitoreo constante de efectos adversos.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc7" }
  },
  {
    "descripcion": "El paciente no debe tener antecedentes de alergias a los componentes del tratamiento.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc8" }
  },
  {
    "descripcion": "Evitar la exposición solar directa durante el tratamiento. Usar protector solar de alto factor.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc9" }
  },
  {
    "descripcion": "Se recomienda una dieta baja en sodio. Controlar el nivel de glucosa en sangre diariamente.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bca" }
  },
  {
    "descripcion": "El tratamiento es de larga duración, se requiere compromiso del paciente.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bcb" }
  },
  {
    "descripcion": "Realizar un electrocardiograma antes de iniciar el tratamiento.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bcc" }
  },
  {
    "descripcion": "No combinar con otros medicamentos sin consultar al médico.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bcd" }
  },
  {
    "descripcion": "El paciente debe informar cualquier cambio en su estado de salud.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bce" }
  },
  {
    "descripcion": "Se requiere la presencia de un acompañante para pacientes menores de edad.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bcf" }
  },
  {
    "descripcion": "El tratamiento requiere que el paciente no tenga antecedentes de alergias a AINEs.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bbc" }
  },
  {
    "descripcion": "Se necesita consentimiento informado por escrito. Dosis máxima diaria de 500mg.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bbd" }
  },
  {
    "descripcion": "El tratamiento está contraindicado en pacientes con insuficiencia hepática.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bbe" }
  },
  {
    "descripcion": "Requiere la participación activa del paciente en tareas inter-sesión.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bbf" }
  },
  {
    "descripcion": "El paciente debe abstenerse de fumar durante la duración del tratamiento.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc0" }
  },
  {
    "descripcion": "Administrar el medicamento 30 minutos antes de las comidas.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc1" }
  },
  {
    "descripcion": "Verificar la compatibilidad sanguínea antes de la transfusión.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc2" }
  },
  {
    "descripcion": "El paciente debe tener un historial de vacunación actualizado.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc3" }
  },
  {
    "descripcion": "Asegurar un entorno tranquilo para la terapia de relajación.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc4" }
  },
  {
    "descripcion": "Se requiere la supervisión de un terapeuta ocupacional certificado.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc5" }
  },
  {
    "descripcion": "Realizar un estudio de imagen (e.g., radiografía) antes de proceder.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc6" }
  },
  {
    "descripcion": "Ajustar la dosis en pacientes pediátricos según el peso corporal.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc7" }
  },
  {
    "descripcion": "El paciente no debe tener implantes metálicos si se usa resonancia magnética.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc8" }
  },
  {
    "descripcion": "Evitar el consumo de cafeína y estimulantes durante el tratamiento.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc9" }
  },
  {
    "descripcion": "Se recomienda una dieta rica en fibra. Controlar los niveles de colesterol.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bca" }
  },
  {
    "descripcion": "El tratamiento puede causar somnolencia, evitar conducir vehículos.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bcb" }
  },
  {
    "descripcion": "Realizar un examen oftalmológico anual durante el tratamiento.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bcc" }
  },
  {
    "descripcion": "No suspender el medicamento abruptamente sin supervisión médica.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bcd" }
  },
  {
    "descripcion": "El paciente debe mantener un registro de sus síntomas diarios.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bce" }
  },
  {
    "descripcion": "Se requiere un acompañante para pacientes con movilidad reducida.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bcf" }
  },
  {
    "descripcion": "El paciente debe evitar el contacto con personas enfermas.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bbc" }
  },
  {
    "descripcion": "Se necesita un período de recuperación de 24 horas después del procedimiento.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bbd" }
  },
  {
    "descripcion": "El tratamiento no es compatible con el embarazo o la lactancia.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bbe" }
  },
  {
    "descripcion": "Requiere la asistencia a grupos de apoyo semanales.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bbf" }
  },
  {
    "descripcion": "El paciente debe mantener una buena higiene oral durante el tratamiento.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc0" }
  },
  {
    "descripcion": "Administrar el medicamento por vía intravenosa lentamente.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc1" }
  },
  {
    "descripcion": "Verificar la fecha de caducidad de todos los insumos médicos.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc2" }
  },
  {
    "descripcion": "El paciente debe evitar actividades físicas extenuantes.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc3" }
  },
  {
    "descripcion": "Asegurar que el paciente comprenda completamente las instrucciones post-tratamiento.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc4" }
  },
  {
    "descripcion": "Se requiere la firma de un acuerdo de confidencialidad por parte del terapeuta.",
    "id_tratamiento": { "$oid": "6887ee060be2cd6239fe6bc5" }
  }
]);