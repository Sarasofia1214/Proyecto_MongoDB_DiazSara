
<div align="center">
<h1> SISTEMA HOSPITALARIO </h1>
<br>
<br><br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<h1>SARA SOFÍA DÍAZ RODRÍGUEZ</h1>
<h1>S1</h1>
<h1>PEDRO FELIPE GÓMEZ BONILLA</h1>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<h2>CAMPUSLANDS</h2>

<h2>RUTA NODEJS</h2>

<h2>BUCARAMANGA</h2>

<h2>2025</h2>

</div>

<br>
<br>

## Tabla de Contenidos

* [Introducción](#introducción)
* [Caso de Estudio](#caso-de-estudio)
* [Planificación](#planificación)
    * [Construcción del Modelo Conceptual](#construcción-del-modelo-conceptual)
        * [Descripción](#descripción)
        * [Gráfica](#gráfica)
        * [Descripción Técnica](#descripción-técnica)
    * [Construcción del Modelo Lógico](#construcción-del-modelo-lógico)
        * [Descripción](#descripción-1)
        * [Gráfica](#gráfica-1)
        * [Descripción Técnica](#descripción-técnica-1)
    * [Normalización del Modelo Lógico](#normalización-del-modelo-lógico)
        * [Primera Forma Normal (1FN)](#primera-forma-normal-1fn)
            * [Descripción](#descripción-2)
            * [Gráfica](#gráfica-2)
            * [Descripción Técnica](#descripción-técnica-2)
        * [Segunda Forma Normal (2FN)](#segunda-forma-normal-2fn)
            * [Descripción](#descripción-3)
            * [Gráfica](#gráfica-3)
            * [Descripción Técnica](#descripción-técnica-3)
        * [Tercera Forma Normal (3FN)](#tercera-forma-normal-3fn)
            * [Descripción](#descripción-4)
            * [Gráfica](#gráfica-4)
            * [Descripción Técnica](#descripción-técnica-4)
    * [Construcción del Modelo Físico](#construcción-del-modelo-físico)
        * [Descripción](#descripción-5)
        * [Código](#código)
        * [Descripción Técnica](#descripción-técnica-5)
    * [Diagrama E-R](#diagrama-e-r)
        * [Gráfica](#gráfica-5)
        * [Descripción Técnica](#descripción-técnica-6)
    * [Tablas](#tablas)
        * [Gráfica](#gráfica-6)
        * [Descripción Técnica](#descripción-técnica-7)
    * [Relaciones entre Tablas](#relaciones-entre-tablas)
        * [Gráfica](#gráfica-7)
        * [Descripción Técnica](#descripción-técnica-8)
    * [Inserción de Datos](#inserción-de-datos)
        * [Descripción](#descripción-6)
        * [Gráfica](#gráfica-8)
        * [Descripción Técnica](#descripción-técnica-9)
* [Referencias](#referencias)

---
<div align="center">
 <h2>Introducción</h2>
</div>
En este documento se halla la especificación del desarrollo de la base de datos realizada para un sistema hospitalario de Colombia, el cual busca permitir la gestión eficiente de todas las operaciones relacionadas con la administración de este sistema.

Entre los problemas más destacados se encuentran la gestión deficiente de clientes y repuestos, la ineficiencia en la cadena de suministro y las dificultades en el análisis de ventas y compras.

Aquí se muestra de forma esquematizada la creación de una base de datos para una gestión de la información, almacenamiento y manipulación de datos eficiente y asequible para el sistema. Para lograr esto, se realizaron los tipos de modelos necesarios para la base de datos: **modelo conceptual**, **lógico** y **físico**.

El **modelo conceptual** es una descripción de los requerimientos a grandes rasgos, identificando las principales entidades, atributos y las relaciones de los datos, para crear una esquematización general que plasme todo correctamente a partir de una idea.

El **modelo lógico** trabaja con lo logrado en el modelo conceptual, con la diferencia de que implementa una estructura más específica de los datos, definiendo colecciones, llaves primarias o foráneas y cardinalidad.

Finalmente, el **modelo físico** para la implementación de una base de datos en MongoDB, que toma en cuenta varios factores del lenguaje de definición de datos y detalles de estos tipos de datos.

El plasmar estos datos tiene como objetivo para esta documentación la **representación visual** que define los sistemas de recopilación y administración de información del Sistema Hospitalario, logrando ayudar a las diferentes partes interesadas, como analistas e ingenieros, para interpretar de manera efectiva los datos.



## Caso de Estudio

Se pide diseñar y desarrollar un sistema que incluirá la gestión de hospitales, pacientes, médicos, tratamientos, medicamentos, visitas médicas, historiales clínicos, áreas especializadas y personal administrativo.

### Estructura del Sistema

* Un hospital puede tener múltiples **áreas especializadas** (Cardiología, Neurología, etc.).


#  1. Área Asistencial
Son áreas clínicas y de soporte diagnóstico que atienden directamente a los pacientes.

## 1.1 Servicios Ambulatorios
- Consulta externa  
- Urgencias  

## 1.2 Servicios de Apoyo Diagnóstico y Terapéutico
- Laboratorio clínico  
- Banco de sangre  
- Radiología e imágenes diagnósticas  
  - Radiología  
  - Ecografía, EKG, EEG  
  - Resonancia magnética  
  - TAC (Tomógrafo Axial Computarizado)  
- Hemodinamia  
- Gastroenterología / Endoscopia diagnóstica  
- Laboratorio de patología  
- Morgue  
- Nutrición y dietética  
- Farmacia  
- Archivo de historias clínicas  
- Transporte  
- Comunicaciones  
- Rehabilitación (Terapias físicas, respiratorias)  
- Unidad Renal  

## 1.3 Servicios Quirúrgicos y Obstétricos
- Cirugía general  
- Cirugía ambulatoria  
- Obstetricia  
- Central de esterilización  

## 1.4 Servicios de Hospitalización
- Hospitalización general  
- Neonatología / Cuidado neonatal  
- UCI adultos  
- UCI pediátrica  
- Cuidados intermedios  

#  2. Área General
Son áreas de soporte logístico y funcional.

## 2.1 Servicios Generales
- Cocina  
- Lavandería  
- Almacén  
- Mantenimiento  
- Máquinas (planta eléctrica, gases medicinales, calderas, etc.)  
- Vestuarios  

## 2.2 Servicios Complementarios
- Seguridad  
- Gestión ambiental / Residuos  
- Parqueadero  
- Capellanía o apoyo espiritual  
- Oficina de atención al usuario  

#  3. Área Administrativa
Gestión institucional, financiera y de talento humano.

- Dirección general  
- Subdirección médica  
- Subdirección administrativa  
- Recursos humanos  
- Contabilidad y finanzas  
- Contratación  
- Sistemas de información (TI)  
- Archivo general  
- Planeación y calidad  
- Comité de ética  
- Docencia e investigación  


* Cada hospital tiene un **director general**, pero un director puede supervisar varios hospitales.

### En este caso, los 3 hospitales son dirigidos por el mismo director general.

* Cada hospital tiene un conjunto de **médicos, enfermeras y personal administrativo**.

Cada hospital tiene mas de 40 médicos, 70 enfermeros y 7 administrativos

* Los hospitales deben contar con un **historial detallado de pacientes y tratamientos realizados**.

Registrado en hospital clinico y tratamientos.

### Pacientes

* Los pacientes se identifican por su **número de historia clínica, nombre, dirección, teléfono, correo electrónico y seguros médicos**.

* Los historiales médicos incluyen **diagnósticos, tratamientos realizados y resultados**.

### Médicos y Personal

* Los médicos se identifican por su **número de colegiatura, nombre, especialidad, teléfono, correo electrónico y salario**.
* **001: Director General:** Gestión general del hospital.
* **002: Médico Especialista:** Atiende pacientes y realiza diagnósticos.
* **003: Enfermero/a:** Asiste a médicos y cuida a los pacientes.
* **004: Personal Administrativo:** Gestión de recursos y logística.
* **005: Personal de Mantenimiento:** Mantenimiento y limpieza de las instalaciones.

### Tratamientos y Medicamentos

* Los tratamientos se identifican por su **nombre, descripción, área médica relacionada y costo**.
* Los medicamentos se almacenan por **nombre, fabricante, tipo y disponibilidad en inventario**.

### Visitas Médicas

* Las visitas médicas se registran con **fecha, hora, médico asignado, paciente atendido y diagnóstico**.
* Los pacientes pueden tener múltiples visitas médicas a lo largo del tiempo.

---

## Planificación

### Construcción del Modelo Conceptual

Este modelo plasma gráficamente de forma general y estructurada la información que gestiona el sistema del sistema hospitalario, sin especificaciones en aspectos técnicos como el uso de llaves primarias o de implementación.

En la creación de este modelo, se analizó el contexto del país, en este caso Colombia, enfocándose en los detalles claves del funcionamiento de los hospitales, los requerimientos de los pacientes y demás requerimientos importantes. Este modelo permite una comunicación segura entre las reglas empresariales y el sistema físico de gestión de bases de datos, garantizando una transición efectiva hacia etapas más técnicas del diseño.

#### Descripción

Este modelo se realizó en base a **entidad-relación**, en la que una entidad es un objeto, ya sea un cliente, pedido o producto, que previamente es gestionado en la base de datos. Los **atributos** son las propiedades que describen y se relacionan con estas entidades. Las **relaciones** describen los vínculos entre entidades definiendo la interacción que se representa por las cardinalidades.

#### Gráfica

``` mermaid
---
config:
  theme: redux
  layout: dagre
---

flowchart TD
    
    Hospital["Hospital"] --> HId(("id")) & HNombre(("nombre")) & HDireccion(("direccion")) & HTelefono(("telefono"))
    Administrativos["Administrativos"] --> AId(("id")) & AIdHospital(("id_hospital")) & ANombre(("nombre")) & ADatos(("datos")) & AGenero(("genero")) & ARol(("rol"))
    Hospital -- tiene --> Administrativos
    Medicos["Medicos"] --> MNombre(("nombre")) & MRol(("rol")) & MEspecialidad(("especialidad")) & MSalario(("salario")) & MFecha(("fecha")) & MCorreo(("correo")) & MTelefono(("telefono")) & MNumeroColegiatura(("numero_colegiatura")) & MAreaAsignada(("area asignada")) & MColegiatura(("colegiatura"))
    Hospital -- emplea --> Medicos & Enfermeros["Enfermeros"] & Mantenimiento["Mantenimiento"]
    Enfermeros --> ENombre(("nombre")) & EEspecialidad(("especialidad")) & ENumeroColegiatura(("numero_colegiatura")) & ECorreo(("correo")) & ETelefono(("telefono"))
    Mantenimiento --> MaNombre(("nombre")) & MaCorreo(("correo")) & MaTelefono(("telefono")) & MaEspecialidad(("especialidad")) & MaNumeroColegiatura(("numero_colegiatura"))
    Pacientes["Pacientes"] --> PaNombre(("nombre")) & PaEnfermedad(("enfermedad"))
    Hospital -- atiende --> Pacientes
    VisitasMedicas["Visitas Medicas"] --> VId(("id")) & VDiagnostico(("diagnostico")) & VSintomas(("sintomas")) & VIdTratamiento(("id_tratamiento")) & VIdMedico(("id_medico")) & VIdPaciente(("id_paciente")) & VHospitalId(("hospital_id")) & VMedico(("medico")) & VEnfermedad(("enfermedad"))
    VisitasMedicas -- se relaciona con --> Medicos
    VisitasMedicas -- para --> Pacientes
    VisitasMedicas -- en --> Hospital
    VisitasMedicas -- prescribe --> Tratamientos["Tratamientos"]
    Medicamentos["Medicamentos"] --> MedId(("id")) & MedPrincipioActivo(("principio_activo")) & MedConcentracion(("concentracion")) & MedTipo(("tipo")) & MedLote(("lote")) & MedPresentaciones(("presentaciones")) & MedDisponibilidad(("disponibilidad")) & MedNombre(("nombre")) & MedFabricante(("fabricante"))
    Tratamientos -- puede incluir --> Medicamentos
    Tratamientos --> TId(("id")) & TNombre(("nombre")) & TDescripcion(("descripcion")) & TCosto(("costo")) & TDuracion(("duracion")) & TBeneficios(("beneficios")) & TRequerimientos(("requerimientos")) & TAreaRelacionada(("area relacionada"))
    Tratamientos -- se asocia con --> Areas["Areas"]
    Proveedores["Proveedores"] --> ProvId(("id")) & ProvNombreEmpresa(("nombre_empresa")) & ProvNit(("nit")) & ProvDatosContacto(("datos_contacto")) & ProvTipo(("tipo")) & ProvFecha(("fecha")) & ProvTerminosPago(("terminos_pago"))
    Hospital -- recibe suministros de --> Proveedores
    Areas --> ArCodigo(("codigo")) & ArTipoArea(("tipo_area")) & ArDescripcion(("descripcion")) & ArSubareas(("subareas")) & ArPersonal(("personal")) & ArEstado(("estado")) & ArIdHospital(("id_hospital"))
    Hospital -- contiene --> Areas

```

### Descripción Técnica

El diseño del modelo conceptual cuenta con estos elementos, donde las entidades estan en los rectangulos, los atributos de estas entidades en elipses, las relaciones en rombos con el verbo o accion dentro de este y por ultimo la cardinalidad de las entidades tal y como estan indicadas en la imagen, la cabeza de la flecha indican el 1 en la relación.




### Hospital
- **id:** Identificador único del hospital.
- **nombre:** Nombre del hospital.
- **direccion:** Dirección física del hospital.
- **telefono:** Número de contacto principal del hospital.

### Administrativos
- **id:** Identificador único del personal administrativo.
- **id_hospital:** ID del hospital al que pertenece.
- **nombre:** Nombre completo.
- **datos:** Información adicional relevante.
- **genero:** Género del administrativo.
- **rol:** Cargo o función que desempeña.

### Médicos
- **nombre:** Nombre completo del médico.
- **rol:** Función principal (ej. General, Especialista).
- **especialidad:** Especialidad médica.
- **salario:** Salario mensual.
- **fecha:** Fecha de ingreso al hospital.
- **correo:** Correo electrónico.
- **telefono:** Teléfono de contacto.
- **numero_colegiatura:** Número de registro profesional.
- **area asignada:** Área o departamento al que pertenece.
- **colegiatura:** Entidad que expide la colegiatura.

### Enfermeros
- **nombre:** Nombre completo.
- **especialidad:** Especialidad o área de trabajo.
- **numero_colegiatura:** Registro profesional.
- **correo:** Correo electrónico.
- **telefono:** Teléfono de contacto.

### Mantenimiento
- **nombre:** Nombre del personal de mantenimiento.
- **correo:** Correo electrónico.
- **telefono:** Teléfono de contacto.
- **especialidad:** Área técnica de experticia.
- **numero_colegiatura:** Número profesional (si aplica).

### Pacientes
- **_id:** Identificador único del paciente.
- **numero_historia_clinica:** Número de historia clínica.
- **nombre:** Nombre completo del paciente.
- **tipo_identificacion:** Tipo de documento (CC, TI, etc).
- **numero_identificacion:** Número del documento.
- **fecha_nacimiento:** Fecha de nacimiento.
- **genero:** Género del paciente.
- **direccion:** Dirección de residencia.
- **telefono_contacto:** Teléfono para contacto.
- **seguros_medicos:** Lista de aseguradoras.
- **hospital_registro_id:** Hospital donde se registró.
- **fecha_registro:** Fecha de ingreso al sistema.
- **estado_paciente:** Activo, egresado, en observación, etc.

### Visitas Médicas
- **id:** Identificador único de la visita.
- **diagnostico:** Diagnóstico final del médico.
- **sintomas:** Lista de síntomas reportados.
- **id_tratamiento:** Relación con el tratamiento asignado.
- **id_medico:** Relación con el médico tratante.
- **id_paciente:** Relación con el paciente.
- **hospital_id:** Hospital donde se realizó la visita.
- **medico:** Nombre del médico (redundancia para trazabilidad).
- **enfermedad:** Enfermedad diagnosticada.

### Tratamientos
- **id:** Identificador del tratamiento.
- **nombre:** Nombre del tratamiento.
- **descripcion:** Descripción general.
- **costo:** Valor económico del tratamiento.
- **duracion:** Tiempo estimado de aplicación.
- **beneficios:** Resultados esperados.
- **requerimientos:** Equipos, personal o recursos necesarios.
- **area relacionada:** Área médica encargada.

### Medicamentos
- **id:** Identificador del medicamento.
- **principio_activo:** Sustancia base del medicamento.
- **concentracion:** Cantidad de principio activo por unidad.
- **tipo:** Forma farmacéutica (comprimido, jarabe, etc).
- **lote:** Código de fabricación.
- **presentaciones:** Formatos disponibles.
- **disponibilidad:** Estado de inventario.
- **nombre:** Nombre comercial.
- **fabricante:** Empresa productora.

### Proveedores
- **id:** Identificador único.
- **nombre_empresa:** Nombre legal de la empresa.
- **nit:** Número de identificación tributaria.
- **tipo:** Categoría del proveedor (medicamentos, insumos, etc).
- **datos_contacto:** Información de contacto general.
- **direccion:** Ubicación física de la empresa.
- **telefono:** Número principal.
- **email:** Correo de contacto.
- **persona_contacto:** Representante de la empresa.
- **terminos_pago:** Acuerdos financieros.
- **condiciones:** Términos contractuales.
- **descuento_pronto_pago:** Beneficio por pago anticipado.
- **fecha:** Último acuerdo formal.
- **fecha_registro:** Fecha de inclusión en el sistema.
- **estado:** Activo, inactivo, bloqueado.
- **productos_ofrecidos:** Lista de bienes o servicios.
- **admin_responsable:** Personal encargado de la relación.

### Áreas
- **codigo:** Código único del área.
- **tipo_area:** Clasificación funcional (quirúrgica, administrativa).
- **descripcion:** Detalle general del área.
- **subareas:** Divisiones internas.
- **personal:** Listado de personas asignadas.
- **estado:** Estado actual del área.
- **id_hospital:** Relación con el hospital al que pertenece.

</br>

# Construcción del Modelo Lógico

Este modelo busca brindar más contexto que el modelo conceptual, como se evidenció con anterioridad, agregando **atributos**, asignando **tipos de datos** y especificando **requisitos** para la información, incluyendo las **llaves principales** y **restricciones** dadas en las especificaciones.

Durante la construcción del modelo lógico, se añaden detalles para documentar completamente cómo se representarán en una base de datos las ideas generales descritas en el modelo conceptual.

---

## Representación Gráfica

``` mermaid
erDiagram

    Hospital {
        ObjectId id PK
        string nombre
        string direccion
        string telefono
        string codigo_habilitacion 
        string tipo_institucion   
        string nivel_complejidad
    }

    Administrativos {
        ObjectId id PK
        ObjectId[] hospitales FK
        string nombre
        string telefono
        string correo
        string genero
        string rol
        string horario
    }

    Medicos {
        ObjectId id PK
        string nombre
        string rol
        string especialidad 
        float salario
        date fecha_ingreso
        string correo
        string telefono
        string numero_colegiatura
        string area_asignada
        ObjectId hospital_id FK
        string estado
        string horario
    }

    Enfermeros {
        ObjectId id PK
        string nombre
        string rol
        string especialidad
        float salario
        date fecha_ingreso
        string numero_colegiatura
        string correo
        string telefono
        string area_asignada
        ObjectId hospital_id FK
        string estado
        string horario
    }

    Mantenimiento {
        ObjectId id PK
        string nombre
        string correo
        string telefono
        string servicios
        ObjectId hospital_id FK
        date fecha_ingreso
        string estado
        string horario
    }

    Pacientes {
        ObjectId _id PK
        ObjectId hospital_registro_id FK
        string historia_clinica
        string nombre
        string tipo_identificacion
        string numero_identificacion
        date fecha_nacimiento
        string genero
        string direccion
        string telefono_contacto
        string seguros_medicos
        date fecha_registro
        string estado_paciente
        string nivel_atencion
        string eps_actual
        string sintomas
            string enfermedad
    }

    VisitasMedicas {
        ObjectId id PK
        date fecha_visita
        ObjectId id_tratamiento FK
        ObjectId id_medico FK
        ObjectId id_paciente FK
        string nombre_paciente
        ObjectId hospital_id FK
        string tipo_visita
        string estado_visita
        string observaciones
    }

    Tratamientos {
        ObjectId id PK
        string nombre
        string descripcion
        float costo
        string duracion
        string beneficios
        string requerimientos
        string area_relacionada
        string frecuencia_aplicacion
        string vía_administración
        ObjectId[] medicamentos_asociados FK
    }

    Medicamentos {
        ObjectId id PK
        string nombre
        string principio_activo
        string concentracion
        string tipo
        string lote
        string presentaciones
        boolean disponibilidad
        string fabricante
        ObjectId[] inventario_hospitales FK
    }

    Inventario {
        ObjectId hospital_id PK
        string hospital_nombre
        int stock
        date fecha_ultima_actualizacion
    }

    Proveedores {
        ObjectId id PK
        string nombre_empresa
        string nit
        string datos_contacto
        string tipo
        ObjectId[] hospitales_asociados FK
        date fecha
        string terminos_pago
    }

    Areas {
        ObjectId codigo PK
        string tipo_area
        string descripcion
        string subareas
        string personal
        string estado
        ObjectId id_hospital FK
    }

    %% Relaciones entre entidades
    Hospital ||--o{ Administrativos : tiene
    Hospital ||--o{ Medicos : emplea
    Hospital ||--o{ Enfermeros : emplea
    Hospital ||--o{ Mantenimiento : emplea
    Hospital ||--o{ Pacientes : atiende
    Hospital ||--o{ Proveedores : recibe_suministros_de
    Hospital ||--o{ Areas : contiene
    Hospital ||--o{ Medicamentos : contiene

    Medicos ||--o{ VisitasMedicas : realiza
    Pacientes ||--o{ VisitasMedicas : recibe
    VisitasMedicas ||--o{ Tratamientos : prescribe
    Tratamientos ||--o{ Medicamentos : contiene
    Areas ||--o{ Medicos : tiene

    Medicamentos ||--o{ Inventario : tiene_stock_en



```

## Las Entidades y Atributos 


### 1. hospital  
❖ id: ObjectId PRIMARY KEY  
❖ nombre: VARCHAR(100)  
❖ direccion: VARCHAR(150)  
❖ telefono: VARCHAR(20)  
❖ codigo_habilitacion: VARCHAR(50)  
❖ tipo_institucion: VARCHAR(50)  
❖ nivel_complejidad: VARCHAR(30)  

### 2. administrativos  
❖ id: ObjectId PRIMARY KEY  
❖ hospitales: ARRAY<ObjectId> FOREIGN KEY  
❖ nombre: VARCHAR(100)  
❖ telefono: VARCHAR(20)  
❖ correo: VARCHAR(100)  
❖ genero: VARCHAR(20)  
❖ rol: VARCHAR(50)  
❖ horario: VARCHAR(100)  

### 3. medicos  
❖ id: ObjectId PRIMARY KEY  
❖ nombre: VARCHAR(100)  
❖ rol: VARCHAR(50)  
❖ especialidad: VARCHAR(100)  
❖ salario: FLOAT  
❖ fecha_ingreso: DATE  
❖ correo: VARCHAR(100)  
❖ telefono: VARCHAR(20)  
❖ numero_colegiatura: VARCHAR(50)  
❖ area_asignada: VARCHAR(100)  
❖ hospital_id: ObjectId FOREIGN KEY  
❖ estado: VARCHAR(20)  
❖ horario: VARCHAR(100)  

### 4. enfermeros  
❖ id: ObjectId PRIMARY KEY  
❖ nombre: VARCHAR(100)  
❖ rol: VARCHAR(50)  
❖ especialidad: VARCHAR(100)  
❖ salario: FLOAT  
❖ fecha_ingreso: DATE  
❖ numero_colegiatura: VARCHAR(50)  
❖ correo: VARCHAR(100)  
❖ telefono: VARCHAR(20)  
❖ area_asignada: VARCHAR(100)  
❖ hospital_id: ObjectId FOREIGN KEY  
❖ estado: VARCHAR(20)  
❖ horario: VARCHAR(100)  

### 5. mantenimiento  
❖ id: ObjectId PRIMARY KEY  
❖ nombre: VARCHAR(100)  
❖ correo: VARCHAR(100)  
❖ telefono: VARCHAR(20)  
❖ servicios: VARCHAR(150)  
❖ hospital_id: ObjectId FOREIGN KEY  
❖ fecha_ingreso: DATE  
❖ estado: VARCHAR(20)  
❖ horario: VARCHAR(100)  

### 6. pacientes  
❖ _id: ObjectId PRIMARY KEY  
❖ hospital_registro_id: ObjectId FOREIGN KEY  
❖ historia_clinica: VARCHAR(50)  
❖ nombre: VARCHAR(100)  
❖ tipo_identificacion: VARCHAR(30)  
❖ numero_identificacion: VARCHAR(50)  
❖ fecha_nacimiento: DATE  
❖ genero: VARCHAR(20)  
❖ direccion: VARCHAR(150)  
❖ telefono_contacto: VARCHAR(20)  
❖ seguros_medicos: VARCHAR(100)  
❖ fecha_registro: DATE  
❖ estado_paciente: VARCHAR(30)  
❖ nivel_atencion: VARCHAR(30)  
❖ eps_actual: VARCHAR(50)  

### 7. visitas_medicas  
❖ id: ObjectId PRIMARY KEY  
❖ fecha_visita: DATE  
❖ sintomas: TEXT  
❖ id_tratamiento: ObjectId FOREIGN KEY  
❖ id_medico: ObjectId FOREIGN KEY  
❖ id_paciente: ObjectId FOREIGN KEY  
❖ nombre_paciente: VARCHAR(100)  
❖ hospital_id: ObjectId FOREIGN KEY  
❖ enfermedad: VARCHAR(100)  
❖ tipo_visita: VARCHAR(50)  
❖ estado_visita: VARCHAR(30)  
❖ observaciones: TEXT  

### 8. tratamientos  
❖ id: ObjectId PRIMARY KEY  
❖ nombre: VARCHAR(100)  
❖ descripcion: TEXT  
❖ costo: FLOAT  
❖ duracion: VARCHAR(50)  
❖ beneficios: TEXT  
❖ requerimientos: TEXT  
❖ area_relacionada: VARCHAR(100)  
❖ frecuencia_aplicacion: VARCHAR(50)  
❖ vía_administración: VARCHAR(50)  
❖ medicamentos_asociados: ARRAY<ObjectId> FOREIGN KEY  

### 9. medicamentos  
❖ id: ObjectId PRIMARY KEY  
❖ nombre: VARCHAR(100)  
❖ principio_activo: VARCHAR(100)  
❖ concentracion: VARCHAR(50)  
❖ tipo: VARCHAR(50)  
❖ lote: VARCHAR(50)  
❖ presentaciones: TEXT  
❖ disponibilidad: BOOLEAN  
❖ fabricante: VARCHAR(100)  
❖ inventario_hospitales: ARRAY<ObjectId> FOREIGN KEY  

### 10. inventario  
❖ hospital_id: ObjectId PRIMARY KEY  
❖ hospital_nombre: VARCHAR(100)  
❖ stock: INT  
❖ fecha_ultima_actualizacion: DATE  

### 11. proveedores  
❖ id: ObjectId PRIMARY KEY  
❖ nombre_empresa: VARCHAR(100)  
❖ nit: VARCHAR(50)  
❖ datos_contacto: TEXT  
❖ tipo: VARCHAR(50)  
❖ hospitales_asociados: ARRAY<ObjectId> FOREIGN KEY  
❖ fecha: DATE  
❖ terminos_pago: TEXT  

### 12. areas  
❖ codigo: ObjectId PRIMARY KEY  
❖ tipo_area: VARCHAR(50)  
❖ descripcion: TEXT  
❖ subareas: TEXT  
❖ personal: TEXT  
❖ estado: VARCHAR(20)  
❖ id_hospital: ObjectId FOREIGN KEY  





</br>

## Relaciones y Cardinalidades 
### Se realizó las relaciones y cardinalidades respectivas del modelo lógico con sus entidades para tener mejor visualización de la base de datos: 
</br>
# Relaciones y Cardinalidades  
### Se realizaron las relaciones y cardinalidades respectivas del modelo lógico con sus entidades para tener mejor visualización de la base de datos:  

1. Hospital - Administrativos:  
❖ Un hospital puede tener varios administrativos y cada administrativo puede estar asociado a uno o más hospitales. N-N (muchos a muchos).  

2. Hospital - Médicos:  
❖ Un hospital puede emplear varios médicos, pero cada médico pertenece a un solo hospital. 1-N (uno a muchos).  

3. Hospital - Enfermeros:  
❖ Un hospital puede emplear varios enfermeros, y cada enfermero pertenece a un solo hospital. 1-N (uno a muchos).  

4. Hospital - Mantenimiento:  
❖ Un hospital puede tener varios trabajadores de mantenimiento, cada uno asignado a un solo hospital. 1-N (uno a muchos).  

5. Hospital - Pacientes:  
❖ Un hospital puede atender a muchos pacientes, pero cada paciente está registrado en un solo hospital. 1-N (uno a muchos).  

6. Hospital - Proveedores:  
❖ Un hospital puede estar relacionado con varios proveedores, y un proveedor puede suministrar a varios hospitales. N-N (muchos a muchos).  

7. Hospital - Áreas:  
❖ Un hospital puede contener varias áreas, y cada área pertenece a un solo hospital. 1-N (uno a muchos).  

8. Hospital - Medicamentos:  
❖ Un hospital puede almacenar múltiples medicamentos, gestionados en su inventario. 1-N (uno a muchos).  

9. Médicos - Visitas Médicas:  
❖ Un médico puede realizar muchas visitas médicas, pero cada visita médica es realizada por un solo médico. 1-N (uno a muchos).  

10. Pacientes - Visitas Médicas:  
❖ Un paciente puede recibir muchas visitas médicas, pero cada visita médica corresponde a un solo paciente. 1-N (uno a muchos).  

11. Visitas Médicas - Tratamientos:  
❖ Una visita médica puede prescribir un tratamiento, y un tratamiento puede ser recetado por muchas visitas médicas. 1-N (uno a muchos).  

12. Tratamientos - Medicamentos:  
❖ Un tratamiento puede incluir varios medicamentos, y un medicamento puede estar en varios tratamientos. N-N (muchos a muchos).  

13. Áreas - Médicos:  
❖ Un área puede tener varios médicos asignados, y un médico puede estar relacionado con una sola área. 1-N (uno a muchos).  

14. Medicamentos - Inventario:  
❖ Un medicamento puede estar en el inventario de varios hospitales, y un hospital tiene su propio stock de cada medicamento. N-N (muchos a muchos).  
</br>
</br>
</br>

# Normalización del Modelo Lógico

Se realizó el proceso de la normalización de las colecciones anteriormente visualizadas para organizar los datos de manera más eficiente, minimizando redundancias y dependencias transitivas en la base de datos en desarrollo.

## Primera Forma Normal (1FN)

Una tabla está en **1FN** si cumple con los siguientes criterios:

❖ Todos los atributos contienen valores atómicos (indivisibles).  
❖ No debe haber grupos repetitivos de columnas.  
❖ Cada columna debe contener un solo valor en cada fila.  


``` mermaid
erDiagram

    Hospital {
        ObjectId id PK
        string nombre
        string direccion
        string telefono
        string codigo_habilitacion 
        string tipo_institucion  
        string nivel_complejidad
    }

    Administrativos {
        ObjectId id PK
        string nombre
        string telefono
        string correo
        string rol
        string horario
        ObjectId id_tipo_personal FK  
    }

    AdministrativoHospital {
        ObjectId id PK
        ObjectId id_administrativo FK
        ObjectId id_hospital FK
    }


    Medicos {
        ObjectId id PK
        string nombre
        string rol
        float salario
        date fecha_ingreso
        string correo
        string telefono
        string numero_colegiatura
        string area_asignada
        ObjectId hospital_id FK
        string estado
        ObjectId id_horario FK
         ObjectId id_tipo_personal FK  
    }
  

    Horario {
        ObjectId id PK
        string horario_tipo
        string dias
    }

    Enfermeros {
        ObjectId id PK
        string nombre
        string rol
     ObjectId id_tipo_personal FK  
        date fecha_ingreso
        string numero_colegiatura
        string correo
        string telefono
        string area_asignada
        ObjectId hospital_id FK
        string estado
        string horario FK
    }

    Mantenimiento {
        ObjectId id PK
        string nombre
        string correo
        string telefono
        objectid servicios FK
        ObjectId hospital_id FK
        date fecha_ingreso
        string estado
        string horario
         ObjectId id_tipo_personal FK  
    }

    ServiciosMantenimineto {
        ObjectId id PK
        string tipo_ambiente
        string nombre_servicio
    }

    Pacientes {
        ObjectId id PK
        ObjectId hospital_registro_id FK
        string nombre
        string tipo_identificacion
        string numero_identificacion
        date fecha_nacimiento
        string genero
        string direccion
        string telefono_contacto
        date fecha_registro
        string estado_paciente
        string nivel_atencion
        string eps_actual
       
    }


    HistoriaClinica {
        ObjectId id PK
        ObjectId paciente FK
        ObjectId tratamiento FK
    }

    SegurosMedicos {
        ObjectId id PK
        string nombre
    }

    PacienteSeguroMedico {
        ObjectId id PK
        ObjectId id_paciente FK
        ObjectId id_seguro_medico FK
    }

    VisitasMedicas {
        ObjectId id PK
        date fecha_visita
        ObjectId id_tratamiento FK
        ObjectId id_medico FK
        ObjectId id_paciente FK
        ObjectId id_hospital FK
        string tipo_visita
        string estado_visita
        string observaciones
    }

    Sintomas {
        ObjectId id PK
        string descripcion
        string observaciones
        date fehca_encontrada
    }

  
    Enfermedades {
        ObjectId id PK
        string nombre
        string tipo
        string clasificacion 
        objectid id_sintoma
    }

 

    Tratamientos {
        ObjectId id PK
        string nombre
        string descripcion
        decimal costo
        string duracion
        ObjectId area_relacionada FK
        ObjectId frecuencia_aplicacion FK
        ObjectId via_administracion FK
    }

    Beneficios {
        ObjectId id PK
        string descripcion
        ObjectId id_tratamiento FK
    }

    Requerimientos {
        ObjectId id PK
        string descripcion
        ObjectId id_tratamiento FK
    }

    TratamientoMedicamento {
        ObjectId id PK
        ObjectId id_tratamiento FK
        ObjectId id_medicamento FK
    }

    FrecuenciaAplicacion {
        ObjectId id PK
        string frecuencia
    }

    ViaAdministracion {
        ObjectId id PK
        string descripcion
    }

    Medicamentos {
        ObjectId id PK
        string nombre
        string principio_activo
        string concentracion
        string tipo
        string lote
        boolean disponibilidad
        string fabricante
    }

    Presentaciones {
        ObjectId id PK
        string tipo_presentacion
        ObjectId id_medicamento FK
    }

    Inventario {
        ObjectId id PK
        ObjectId id_hospital FK
        ObjectId id_medicamento FK
        int stock
        date fecha_ultima_actualizacion
    }

    Proveedores {
        ObjectId id PK
        string nombre_empresa
        string nit
        string tipo
        date fecha
        string terminos_pago
    }

   

    Areas {
        ObjectId codigo PK
        string tipo_area
        string descripcion
        string estado
        ObjectId id_hospital FK
    }

    AreaEspecializacion {
        ObjectId id PK
        ObjectId id_area FK
        date fecha_asignacion
        ObjectId id_hospital FK
        string estado
    }

    Subareas {
        ObjectId id PK
        string nombre_subarea
        ObjectId id_area FK
        string descripcion
        string estado
        string tipo
    }


    TiposPersonal {
    ObjectId id PK
    string codigo
    string nombre
    string descripcion
    decimal salario_base
   }


    Hospital ||--o{ AdministrativoHospital : contiene
    AdministrativoHospital }o--|| Administrativos : asigna

    Hospital ||--o{ Medicos : emplea
    Hospital ||--o{ Enfermeros : emplea
    Hospital ||--o{ Mantenimiento : emplea
    Hospital ||--o{ Pacientes : atiende
    Hospital ||--o{ Areas : contiene

    Areas ||--o{ Subareas : subdivide
    Areas ||--o{ AreaEspecializacion : maneja

    Medicos ||--o{ VisitasMedicas : realiza
    TiposPersonal ||--o{ Medicos : clasifica
    TiposPersonal ||--o{ Enfermeros : clasifica
    TiposPersonal ||--o{ Administrativos : clasifica

    Pacientes ||--o{ VisitasMedicas : recibe
    VisitasMedicas ||--|| Tratamientos : prescribe

    Tratamientos ||--o{ TratamientoMedicamento : utiliza
    TratamientoMedicamento }o--|| Medicamentos : pertenece

    Medicamentos ||--o{ Inventario : disponible_en
    Inventario }o--|| Hospital : tiene_stock
    Medicamentos ||--o{ Presentaciones : tiene

    Hospital ||--o{ Proveedores : abastece

    Pacientes ||--o{ HistoriaClinica : posee
    HistoriaClinica }o--|| Tratamientos : relacionados

    Pacientes ||--o{ PacienteSeguroMedico : asegurado_por
    SegurosMedicos ||--o{ PacienteSeguroMedico : ofrece

    Pacientes ||--o{ Enfermedades : diagnostica
    Enfermedades ||--o{ Sintomas : presenta

    VisitasMedicas ||--o{ Enfermedades : detecta
    VisitasMedicas ||--o{ Sintomas : observa

    Tratamientos ||--o{ Beneficios : ofrece
    Tratamientos ||--o{ Requerimientos : necesita
    Tratamientos ||--|| FrecuenciaAplicacion : frecuencia
    Tratamientos ||--|| ViaAdministracion : administrado_por

    Medicos ||--|| Horario : turno
    Enfermeros ||--|| Horario : turno
    Mantenimiento ||--|| ServiciosMantenimineto: presta
    Mantenimiento ||--|| Horario : turno


``` 


# Descripción 
## Las Entidades y Atributos 


### 1. hospital  
❖ id: ObjectId PRIMARY KEY  
❖ nombre: VARCHAR(100)  
❖ direccion: VARCHAR(150)  
❖ telefono: VARCHAR(20)  
❖ codigo_habilitacion: VARCHAR(50)  
❖ tipo_institucion: VARCHAR(50)  
❖ nivel_complejidad: VARCHAR(30)  

### 2. administrativos  
❖ id: ObjectId PRIMARY KEY  
❖ hospitales: ARRAY<ObjectId> FOREIGN KEY  
❖ nombre: VARCHAR(100)  
❖ telefono: VARCHAR(20)  
❖ correo: VARCHAR(100)  
❖ genero: VARCHAR(20)  
❖ rol: VARCHAR(50)  
❖ horario: VARCHAR(100)  

### 3. medicos  
❖ id: ObjectId PRIMARY KEY  
❖ nombre: VARCHAR(100)  
❖ rol: VARCHAR(50)  
❖ especialidad: VARCHAR(100)  
❖ salario: FLOAT  
❖ fecha_ingreso: DATE  
❖ correo: VARCHAR(100)  
❖ telefono: VARCHAR(20)  
❖ numero_colegiatura: VARCHAR(50)  
❖ area_asignada: VARCHAR(100)  
❖ hospital_id: ObjectId FOREIGN KEY  
❖ estado: VARCHAR(20)  
❖ horario: VARCHAR(100)  

### 4. enfermeros  
❖ id: ObjectId PRIMARY KEY  
❖ nombre: VARCHAR(100)  
❖ rol: VARCHAR(50)  
❖ especialidad: VARCHAR(100)  
❖ salario: FLOAT  
❖ fecha_ingreso: DATE  
❖ numero_colegiatura: VARCHAR(50)  
❖ correo: VARCHAR(100)  
❖ telefono: VARCHAR(20)  
❖ area_asignada: VARCHAR(100)  
❖ hospital_id: ObjectId FOREIGN KEY  
❖ estado: VARCHAR(20)  
❖ horario: VARCHAR(100)  

### 5. mantenimiento  
❖ id: ObjectId PRIMARY KEY  
❖ nombre: VARCHAR(100)  
❖ correo: VARCHAR(100)  
❖ telefono: VARCHAR(20)  
❖ servicios: VARCHAR(150)  
❖ hospital_id: ObjectId FOREIGN KEY  
❖ fecha_ingreso: DATE  
❖ estado: VARCHAR(20)  
❖ horario: VARCHAR(100)  

### 6. pacientes  
❖ _id: ObjectId PRIMARY KEY  
❖ hospital_registro_id: ObjectId FOREIGN KEY  
❖ historia_clinica: VARCHAR(50)  
❖ nombre: VARCHAR(100)  
❖ tipo_identificacion: VARCHAR(30)  
❖ numero_identificacion: VARCHAR(50)  
❖ fecha_nacimiento: DATE  
❖ genero: VARCHAR(20)  
❖ direccion: VARCHAR(150)  
❖ telefono_contacto: VARCHAR(20)  
❖ seguros_medicos: VARCHAR(100)  
❖ fecha_registro: DATE  
❖ estado_paciente: VARCHAR(30)  
❖ nivel_atencion: VARCHAR(30)  
❖ eps_actual: VARCHAR(50)  

### 7. visitas_medicas  
❖ id: ObjectId PRIMARY KEY  
❖ fecha_visita: DATE  
❖ sintomas: TEXT  
❖ id_tratamiento: ObjectId FOREIGN KEY  
❖ id_medico: ObjectId FOREIGN KEY  
❖ id_paciente: ObjectId FOREIGN KEY  
❖ nombre_paciente: VARCHAR(100)  
❖ hospital_id: ObjectId FOREIGN KEY  
❖ enfermedad: VARCHAR(100)  
❖ tipo_visita: VARCHAR(50)  
❖ estado_visita: VARCHAR(30)  
❖ observaciones: TEXT  

### 8. tratamientos  
❖ id: ObjectId PRIMARY KEY  
❖ nombre: VARCHAR(100)  
❖ descripcion: TEXT  
❖ costo: FLOAT  
❖ duracion: VARCHAR(50)  
❖ beneficios: TEXT  
❖ requerimientos: TEXT  
❖ area_relacionada: VARCHAR(100)  
❖ frecuencia_aplicacion: VARCHAR(50)  
❖ vía_administración: VARCHAR(50)  
❖ medicamentos_asociados: ARRAY<ObjectId> FOREIGN KEY  

### 9. medicamentos  
❖ id: ObjectId PRIMARY KEY  
❖ nombre: VARCHAR(100)  
❖ principio_activo: VARCHAR(100)  
❖ concentracion: VARCHAR(50)  
❖ tipo: VARCHAR(50)  
❖ lote: VARCHAR(50)  
❖ presentaciones: TEXT  
❖ disponibilidad: BOOLEAN  
❖ fabricante: VARCHAR(100)  
❖ inventario_hospitales: ARRAY<ObjectId> FOREIGN KEY  

### 10. inventario  
❖ hospital_id: ObjectId PRIMARY KEY  
❖ hospital_nombre: VARCHAR(100)  
❖ stock: INT  
❖ fecha_ultima_actualizacion: DATE  

### 11. proveedores  
❖ id: ObjectId PRIMARY KEY  
❖ nombre_empresa: VARCHAR(100)  
❖ nit: VARCHAR(50)  
❖ datos_contacto: TEXT  
❖ tipo: VARCHAR(50)  
❖ hospitales_asociados: ARRAY<ObjectId> FOREIGN KEY  
❖ fecha: DATE  
❖ terminos_pago: TEXT  

### 12. areas  
❖ codigo: ObjectId PRIMARY KEY  
❖ tipo_area: VARCHAR(50)  
❖ descripcion: TEXT  
❖ subareas: TEXT  
❖ personal: TEXT  
❖ estado: VARCHAR(20)  
❖ id_hospital: ObjectId FOREIGN KEY  

</br>

# Relaciones y Cardinalidades 
### Se realizó las relaciones y cardinalidades respectivas del modelo lógico con sus entidades para tener mejor visualización de la base de datos: 
# Normalización 1FN – Modelo Hospitalario

## Las Entidades y Atributos

### 1. Hospital  
❖ Se encuentra en 1FN, ya que cuenta con una clave primaria única (`id`) y cada columna contiene valores atómicos y no repetitivos.  
- `id`: ObjectId PRIMARY KEY  
- `nombre`: string  
- `direccion`: string  
- `telefono`: string  
- `codigo_habilitacion`: string  
- `tipo_institucion`: string  
- `nivel_complejidad`: string  

---

### 2. Administrativos  
❖ En 1FN, gracias a la clave primaria `id` y a que cada campo almacena un único dato por celda.  
- `id`: ObjectId PRIMARY KEY  
- `nombre`: string  
- `telefono`: string  
- `correo`: string  
- `rol`: string  
- `horario`: string  
- `id_tipo_personal`: ObjectId FOREIGN KEY  

---

### 3. AdministrativoHospital  
❖ Cumple con 1FN: todas las celdas contienen valores simples y la relación entre hospital y administrativo está correctamente normalizada.  
- `id`: ObjectId PRIMARY KEY  
- `id_administrativo`: ObjectId FOREIGN KEY  
- `id_hospital`: ObjectId FOREIGN KEY  

---

### 4. Medicos  
❖ Cumple con 1FN: datos atómicos, clave primaria definida.  
- `id`: ObjectId PRIMARY KEY  
- `rol`: string  
- `fecha_ingreso`: date  
- `correo`: string  
- `telefono`: string  
- `numero_colegiatura`: string  
- `area_asignada`: string  
- `hospital_id`: ObjectId FOREIGN KEY  
- `estado`: string  
- `id_horario`: ObjectId FOREIGN KEY  
- `id_tipo_personal`: ObjectId FOREIGN KEY  

---

### 5. Horario  
❖ En 1FN: campos simples y sin valores multivaluados.  
- `id`: ObjectId PRIMARY KEY  
- `horario_tipo`: string  
- `dias`: string  

---

### 6. Enfermeros  
❖ Cumple con 1FN: todos los campos son atómicos.  
- `id`: ObjectId PRIMARY KEY  
- `nombre`: string  
- `rol`: string  
- `id_tipo_personal`: ObjectId FOREIGN KEY  
- `fecha_ingreso`: date  
- `numero_colegiatura`: string  
- `correo`: string  
- `telefono`: string  
- `area_asignada`: string  
- `hospital_id`: ObjectId FOREIGN KEY  
- `estado`: string  
- `horario`: string  

---

### 7. Mantenimiento  
❖ En 1FN: cada campo representa un dato único, sin listas ni repeticiones.  
- `id`: ObjectId PRIMARY KEY  
- `nombre`: string  
- `correo`: string  
- `telefono`: string  
- `servicios`: ObjectId FOREIGN KEY  
- `hospital_id`: ObjectId FOREIGN KEY  
- `fecha_ingreso`: date  
- `estado`: string  
- `horario`: string  
- `id_tipo_personal`: ObjectId FOREIGN KEY  

---

### 8. ServiciosMantenimineto  
❖ Cumple con 1FN: campos simples, sin repetición.  
- `id`: ObjectId PRIMARY KEY  
- `tipo_ambiente`: string  
- `nombre_servicio`: string  

---

### 9. Pacientes  
❖ En 1FN: todos los atributos son atómicos, identificador único.  
- `id`: ObjectId PRIMARY KEY  
- `hospital_registro_id`: ObjectId FOREIGN KEY  
- `nombre`: string  
- `tipo_identificacion`: string  
- `numero_identificacion`: string  
- `fecha_nacimiento`: date  
- `genero`: string  
- `direccion`: string  
- `telefono_contacto`: string  
- `fecha_registro`: date  
- `estado_paciente`: string  
- `nivel_atencion`: string  
- `eps_actual`: string  
- `seguro_medico`: string  

---

### 10. HistoriaClinica  
❖ Cumple con 1FN: todos los campos son atómicos y no hay repeticiones.  
- `id`: ObjectId PRIMARY KEY  
- `paciente`: ObjectId FOREIGN KEY  
- `tratamiento`: ObjectId FOREIGN KEY  

---

### 11. VisitasMedicas  
❖ En 1FN: los datos son atómicos, bien definidos.  
- `id`: ObjectId PRIMARY KEY  
- `fecha_visita`: date  
- `id_tratamiento`: ObjectId FOREIGN KEY  
- `id_medico`: ObjectId FOREIGN KEY  
- `id_paciente`: ObjectId FOREIGN KEY  
- `id_hospital`: ObjectId FOREIGN KEY  
- `tipo_visita`: string  
- `estado_visita`: string  
- `observaciones`: string  

---

### 12. Sintomas  
❖ Cumple con 1FN: datos simples, sin campos multivaluados.  
- `id`: ObjectId PRIMARY KEY  
- `descripcion`: string  
- `observaciones`: string  
- `fehca_encontrada`: date  

---

### 13. Enfermedades  
❖ En 1FN: cada campo representa un valor único.  
- `id`: ObjectId PRIMARY KEY  
- `nombre`: string  
- `tipo`: string  
- `clasificacion`: string  
- `id_sintoma`: ObjectId  

---

### 14. Tratamientos  
❖ Cumple con 1FN: datos simples y normalizados.  
- `id`: ObjectId PRIMARY KEY  
- `nombre`: string  
- `descripcion`: string  
- `costo`: decimal  
- `duracion`: string  
- `area_relacionada`: ObjectId FOREIGN KEY  
- `via_administracion`: string  
- `FrecuenciaAplicacion`: int  

---

### 15. Beneficios  
❖ En 1FN: cada fila representa un beneficio único y ligado a un tratamiento.  
- `id`: ObjectId PRIMARY KEY  
- `descripcion`: string  
- `id_tratamiento`: ObjectId FOREIGN KEY  

---

### 16. Requerimientos  
❖ Cumple con 1FN: valores simples y normalizados.  
- `id`: ObjectId PRIMARY KEY  
- `descripcion`: string  
- `id_tratamiento`: ObjectId FOREIGN KEY  

---

### 17. Medicamentos  
❖ En 1FN: todos los atributos son atómicos.  
- `id`: ObjectId PRIMARY KEY  
- `nombre`: string  
- `principio_activo`: string  
- `concentracion`: string  
- `tipo`: string  
- `lote`: string  
- `disponibilidad`: boolean  
- `fabricante`: string  

---

### 18. Presentaciones  
❖ Cumple con 1FN: campos únicos por fila, sin listas.  
- `id`: ObjectId PRIMARY KEY  
- `tipo_presentacion`: string  
- `id_medicamento`: ObjectId FOREIGN KEY  

---

### 19. Inventario  
❖ En 1FN: sin datos repetitivos, bien identificados.  
- `id`: ObjectId PRIMARY KEY  
- `id_hospital`: ObjectId FOREIGN KEY  
- `id_medicamento`: ObjectId FOREIGN KEY  
- `stock`: int  
- `fecha_ultima_actualizacion`: date  

---

### 20. Proveedores  
❖ Cumple con 1FN: cada proveedor tiene un conjunto único de datos.  
- `id`: ObjectId PRIMARY KEY  
- `nombre_empresa`: string  
- `nit`: string  
- `tipo`: string  
- `fecha`: date  
- `terminos_pago`: string  

---

### 21. Areas  
❖ En 1FN: campos bien definidos, sin estructuras repetidas.  
- `codigo`: ObjectId PRIMARY KEY  
- `tipo_area`: string  
- `descripcion`: string  
- `estado`: string  
- `id_hospital`: ObjectId FOREIGN KEY  

---

### 22. AreaEspecializacion  
❖ Cumple con 1FN: campos simples y relaciones normalizadas.  
- `id`: ObjectId PRIMARY KEY  
- `id_area`: ObjectId FOREIGN KEY  
- `fecha_asignacion`: date  
- `id_hospital`: ObjectId FOREIGN KEY  
- `estado`: string  

---

### 23. Subareas  
❖ En 1FN: datos atómicos, sin duplicación.  
- `id`: ObjectId PRIMARY KEY  
- `nombre_subarea`: string  
- `id_area`: ObjectId FOREIGN KEY  
- `descripcion`: string  
- `estado`: string  
- `tipo`: string  

---

### 24. TiposPersonal  
❖ Cumple con 1FN: todos los datos son simples.  
- `id`: ObjectId PRIMARY KEY  
- `codigo`: string  
- `nombre`: string  
- `descripcion`: string  
- `salario_base`: decimal  

</br>
</br>

## Segunda Forma Normal (2FN)

Una tabla está en **2FN** si cumple con los siguientes criterios:

❖ Está en 1FN.  
❖ Todos los atributos no clave (no pertenecientes a una clave primaria compuesta) dependen completamente de la clave primaria.  

### Descripción

La Segunda Forma Normal es el segundo nivel de normalización en el diseño de una base de datos. Se aplica a las tablas que ya cumplen con la Primera Forma Normal (1FN) y busca eliminar **dependencias parciales** dentro de una tabla.


``` mermaid
---
config:
  theme: redux-color
title: Sample title
---
erDiagram

%% ========= ENTIDADES PRINCIPALES =========

Hospital {
	ObjectId id PK
	string nombre
	string direccion
	string telefono
	string codigo_habilitacion
	string tipo_institucion
	string nivel_complejidad
}

Administrativos {
	ObjectId id PK
	string nombre
	string telefono
	string correo
	string rol
	ObjectId horario
	ObjectId id_tipo_personal FK
}

AdministrativoHospital {
	ObjectId id PK
	ObjectId id_administrativo FK
	ObjectId id_hospital FK
}

Medicos {
	ObjectId id PK
	string rol
	date fecha_ingreso
	string correo
	string telefono
	string numero_colegiatura
	string area_asignada
	ObjectId hospital_id FK
	string estado
	ObjectId id_horario FK
	ObjectId id_tipo_personal FK
}

Enfermeros {
	ObjectId id PK
	string nombre
	string rol
	ObjectId id_tipo_personal FK
	date fecha_ingreso
	string numero_colegiatura
	string correo
	string telefono
	string area_asignada
	ObjectId hospital_id FK
	string estado
	ObjectId horario FK
}

Mantenimiento {
	ObjectId id PK
	string nombre
	string correo
	string telefono
	ObjectId servicios FK
	ObjectId hospital_id FK
	date fecha_ingreso
	string estado
	ObjectId horario FK
	ObjectId id_tipo_personal FK
}

Pacientes {
	ObjectId id PK
	ObjectId hospital_registro_id FK
	string nombre
	string tipo_identificacion
	string numero_identificacion
	date fecha_nacimiento
	string genero
	string direccion
	string telefono_contacto
	date fecha_registro
	string estado_paciente
	string nivel_atencion
	ObjectId id_eps FK
	ObjectId id_seguro FK
}

VisitasMedicas {
	ObjectId id PK
	date fecha_visita
	ObjectId id_tratamiento FK
	ObjectId id_medico FK
	ObjectId id_paciente FK
	ObjectId id_hospital FK
	string tipo_visita
	string estado_visita
	string observaciones
}

Tratamientos {
	ObjectId id PK
	string nombre
	string descripcion
	decimal costo
	string duracion
	ObjectId area_relacionada FK
	string via_administracion
	int FrecuenciaAplicacion
}

HistoriaClinica {
	ObjectId id PK
	ObjectId paciente FK
	ObjectId tratamiento FK
}

EPS {
	ObjectId id PK
	string nombre
	string nit
	string tipo
	string nivel
	string telefono
	string correo
}

Seguros {
	ObjectId id PK
	string nombre
	string compañia
	string tipo
	string nivel_cobertura
	string plan
	string telefono
}

Enfermedades {
	ObjectId id PK
	string nombre
	string tipo
	string clasificacion
	ObjectId id_sintoma FK
}

Sintomas {
	ObjectId id PK
	string descripcion
	string observaciones
	date fecha_encontrada
}

Beneficios {
	ObjectId id PK
	string descripcion
	ObjectId id_tratamiento FK
}

Requerimientos {
	ObjectId id PK
	string descripcion
	ObjectId id_tratamiento FK
}

Medicamentos {
	ObjectId id PK
	string nombre
	string principio_activo
	string concentracion
	string tipo
	string lote
	boolean disponibilidad
	string fabricante
}

Presentaciones {
	ObjectId id PK
	string tipo_presentacion
	ObjectId id_medicamento FK
}

Inventario {
	ObjectId id PK
	ObjectId id_hospital FK
	ObjectId id_medicamento FK
	int stock
	date fecha_ultima_actualizacion
}

Proveedores {
	ObjectId id PK
	string nombre_empresa
	string nit
	string tipo
	date fecha
	string terminos_pago
}

ServiciosMantenimiento {
	ObjectId id PK
	string tipo_ambiente
	string nombre_servicio
}

Horario {
	ObjectId id PK
	string horario_tipo
	string dias
}

TiposPersonal {
	ObjectId id PK
	string codigo
	string nombre
	string descripcion
	decimal salario_base
}

Areas {
	ObjectId codigo PK
	string tipo_area
	string descripcion
	string estado
	ObjectId id_hospital FK
}

AreaEspecializacion {
	ObjectId id PK
	ObjectId id_area FK
	date fecha_asignacion
	ObjectId id_hospital FK
	string estado
}

Subareas {
	ObjectId id PK
	string nombre_subarea
	ObjectId id_area FK
	string descripcion
	string estado
	string tipo
}

%% ========= RELACIONES =========

Hospital ||--o{ AdministrativoHospital : "contiene"
Hospital ||--o{ Areas : "contiene"
Hospital ||--o{ AreaEspecializacion : "cuenta_con"
Areas ||--o{ AreaEspecializacion : "maneja"

AdministrativoHospital }o--|| Administrativos : "asigna"
Hospital ||--o{ TiposPersonal : "emplea"
TiposPersonal ||--o{ Enfermeros : "clasifica"
TiposPersonal ||--o{ Medicos : "clasifica"
TiposPersonal ||--o{ Administrativos : "clasifica"
TiposPersonal ||--o{ Mantenimiento : "clasifica"
Hospital ||--o{ Pacientes : "atiende"
Hospital ||--o{ Areas : "contiene"
Areas ||--o{ Subareas : "subdivide"

AreaEspecializacion ||--o{ Medicos : "especializa"
Medicos ||--o{ VisitasMedicas : "realiza"
Pacientes ||--o{ VisitasMedicas : "recibe"
VisitasMedicas ||--|| Tratamientos : "prescribe"
Tratamientos ||--o{ Medicamentos : "utiliza"
Medicamentos ||--o{ Inventario : "disponible_en"
Inventario }o--|| Hospital : "tiene_stock"
Medicamentos ||--o{ Presentaciones : "tiene"
Hospital ||--o{ Proveedores : "abastece"
Pacientes ||--o{ HistoriaClinica : "posee"
HistoriaClinica }o--|| Tratamientos : "relacionados"
Pacientes ||--o{ Enfermedades : "diagnostica"
Enfermedades ||--o{ Sintomas : "presenta"
VisitasMedicas ||--o{ Enfermedades : "detecta"
VisitasMedicas ||--o{ Sintomas : "observa"
Tratamientos ||--o{ Beneficios : "ofrece"
Tratamientos ||--o{ Requerimientos : "necesita"
Medicos ||--|| Horario : "turno"
Enfermeros ||--|| Horario : "turno"
Mantenimiento ||--|| Horario : "turno"
Mantenimiento ||--|| ServiciosMantenimiento : "presta"
Pacientes }o--|| EPS : "afiliado_a"
Pacientes }o--|| Seguros : "posee"

``` 



## Las Entidades y Atributos

### 1. Hospital :  
❖ Se encuentra en 2FN, ya que cuenta con una clave primaria única (`id`) y todos sus atributos dependen totalmente de ella.  
- `id`: ObjectId PRIMARY KEY  
- `nombre`: string  
- `direccion`: string  
- `telefono`: string  
- `codigo_habilitacion`: string  
- `tipo_institucion`: string  
- `nivel_complejidad`: string  

---

### 2. Administrativos :  
❖ En 2FN, todos los atributos dependen por completo de la clave primaria `id`, y no hay dependencias parciales.  
- `id`: ObjectId PRIMARY KEY  
- `nombre`: string  
- `telefono`: string  
- `correo`: string  
- `rol`: string  
- `horario`: ObjectId FOREIGN KEY  
- `id_tipo_personal`: ObjectId FOREIGN KEY  

---

### 3. AdministrativoHospital :  
❖ Se encuentra en 2FN, ya que sus campos dependen completamente del identificador `id`.  
- `id`: ObjectId PRIMARY KEY  
- `id_administrativo`: ObjectId FOREIGN KEY  
- `id_hospital`: ObjectId FOREIGN KEY  

---

### 4. Medicos :  
❖ En 2FN, ya que la clave primaria es simple (`id`) y todos los atributos dependen funcionalmente de esta.  
- `id`: ObjectId PRIMARY KEY  
- `rol`: string  
- `fecha_ingreso`: date  
- `correo`: string  
- `telefono`: string  
- `numero_colegiatura`: string  
- `area_asignada`: string  
- `hospital_id`: ObjectId FOREIGN KEY  
- `estado`: string  
- `id_horario`: ObjectId FOREIGN KEY  
- `id_tipo_personal`: ObjectId FOREIGN KEY  

---

### 5. Enfermeros :  
❖ Cumple 2FN, ya que cada campo depende completamente del identificador `id`.  
- `id`: ObjectId PRIMARY KEY  
- `nombre`: string  
- `rol`: string  
- `id_tipo_personal`: ObjectId FOREIGN KEY  
- `fecha_ingreso`: date  
- `numero_colegiatura`: string  
- `correo`: string  
- `telefono`: string  
- `area_asignada`: string  
- `hospital_id`: ObjectId FOREIGN KEY  
- `estado`: string  
- `horario`: ObjectId FOREIGN KEY  

---

### 6. Mantenimiento :  
❖ En 2FN, todos los atributos dependen totalmente de la clave primaria `id`.  
- `id`: ObjectId PRIMARY KEY  
- `nombre`: string  
- `correo`: string  
- `telefono`: string  
- `servicios`: ObjectId FOREIGN KEY  
- `hospital_id`: ObjectId FOREIGN KEY  
- `fecha_ingreso`: date  
- `estado`: string  
- `horario`: ObjectId FOREIGN KEY  
- `id_tipo_personal`: ObjectId FOREIGN KEY  

---

### 7. Pacientes :  
❖ Se encuentra en 2FN, ya que cada campo depende exclusivamente de la clave primaria `id`.  
- `id`: ObjectId PRIMARY KEY  
- `hospital_registro_id`: ObjectId FOREIGN KEY  
- `nombre`: string  
- `tipo_identificacion`: string  
- `numero_identificacion`: string  
- `fecha_nacimiento`: date  
- `genero`: string  
- `direccion`: string  
- `telefono_contacto`: string  
- `fecha_registro`: date  
- `estado_paciente`: string  
- `nivel_atencion`: string  
- `id_eps`: ObjectId FOREIGN KEY  
- `id_seguro`: ObjectId FOREIGN KEY  

---

### 8. VisitasMedicas :  
❖ Cumple 2FN, todos los campos dependen únicamente de la clave `id`.  
- `id`: ObjectId PRIMARY KEY  
- `fecha_visita`: date  
- `id_tratamiento`: ObjectId FOREIGN KEY  
- `id_medico`: ObjectId FOREIGN KEY  
- `id_paciente`: ObjectId FOREIGN KEY  
- `id_hospital`: ObjectId FOREIGN KEY  
- `tipo_visita`: string  
- `estado_visita`: string  
- `observaciones`: string  

---

### 9. Tratamientos :  
❖ Se encuentra en 2FN, todos los atributos dependen de la clave `id`.  
- `id`: ObjectId PRIMARY KEY  
- `nombre`: string  
- `descripcion`: string  
- `costo`: decimal  
- `duracion`: string  
- `area_relacionada`: ObjectId FOREIGN KEY  
- `via_administracion`: string  
- `FrecuenciaAplicacion`: int  

---

### 10. HistoriaClinica :  
❖ En 2FN, los campos `paciente` y `tratamiento` están correctamente separados en claves foráneas.  
- `id`: ObjectId PRIMARY KEY  
- `paciente`: ObjectId FOREIGN KEY  
- `tratamiento`: ObjectId FOREIGN KEY  

---

### 11. EPS :  
❖ En 2FN, ya que todos los campos dependen totalmente del `id`.  
- `id`: ObjectId PRIMARY KEY  
- `nombre`: string  
- `nit`: string  
- `tipo`: string  
- `nivel`: string  
- `telefono`: string  
- `correo`: string  

---

### 12. Seguros :  
❖ Se encuentra en 2FN, sin dependencias parciales.  
- `id`: ObjectId PRIMARY KEY  
- `nombre`: string  
- `compañia`: string  
- `tipo`: string  
- `nivel_cobertura`: string  
- `plan`: string  
- `telefono`: string  

---

### 13. Enfermedades :  
❖ Cumple 2FN: cada atributo depende completamente del `id`.  
- `id`: ObjectId PRIMARY KEY  
- `nombre`: string  
- `tipo`: string  
- `clasificacion`: string  
- `id_sintoma`: ObjectId FOREIGN KEY  

---

### 14. Sintomas :  
❖ En 2FN, atributos simples que dependen completamente de `id`.  
- `id`: ObjectId PRIMARY KEY  
- `descripcion`: string  
- `observaciones`: string  
- `fecha_encontrada`: date  

---

### 15. Beneficios :  
❖ Todos los atributos dependen del identificador `id`.  
- `id`: ObjectId PRIMARY KEY  
- `descripcion`: string  
- `id_tratamiento`: ObjectId FOREIGN KEY  

---

### 16. Requerimientos :  
❖ En 2FN, sin redundancia ni dependencia parcial.  
- `id`: ObjectId PRIMARY KEY  
- `descripcion`: string  
- `id_tratamiento`: ObjectId FOREIGN KEY  

---

### 17. Medicamentos :  
❖ Todos los campos están normalizados a 2FN.  
- `id`: ObjectId PRIMARY KEY  
- `nombre`: string  
- `principio_activo`: string  
- `concentracion`: string  
- `tipo`: string  
- `lote`: string  
- `disponibilidad`: boolean  
- `fabricante`: string  

---

### 18. Presentaciones :  
❖ Cumple con 2FN, no hay atributos parcialmente dependientes.  
- `id`: ObjectId PRIMARY KEY  
- `tipo_presentacion`: string  
- `id_medicamento`: ObjectId FOREIGN KEY  

---

### 19. Inventario :  
❖ En 2FN: la dependencia de la clave primaria `id` es total.  
- `id`: ObjectId PRIMARY KEY  
- `id_hospital`: ObjectId FOREIGN KEY  
- `id_medicamento`: ObjectId FOREIGN KEY  
- `stock`: int  
- `fecha_ultima_actualizacion`: date  

---

### 20. Proveedores :  
❖ Cumple con 2FN, atributos directamente dependientes del `id`.  
- `id`: ObjectId PRIMARY KEY  
- `nombre_empresa`: string  
- `nit`: string  
- `tipo`: string  
- `fecha`: date  
- `terminos_pago`: string  

---

### 21. ServiciosMantenimiento :  
❖ Está en 2FN, sin redundancia y con dependencia funcional total.  
- `id`: ObjectId PRIMARY KEY  
- `tipo_ambiente`: string  
- `nombre_servicio`: string  

---

### 22. Horario :  
❖ En 2FN, ya que no hay dependencia parcial de ningún atributo.  
- `id`: ObjectId PRIMARY KEY  
- `horario_tipo`: string  
- `dias`: string  

---

### 23. TiposPersonal :  
❖ Se encuentra en 2FN, con estructura clara y sin repetición.  
- `id`: ObjectId PRIMARY KEY  
- `codigo`: string  
- `nombre`: string  
- `descripcion`: string  
- `salario_base`: decimal  

---

### 24. Areas :  
❖ Cumple con 2FN, cada columna depende únicamente del `codigo`.  
- `codigo`: ObjectId PRIMARY KEY  
- `tipo_area`: string  
- `descripcion`: string  
- `estado`: string  
- `id_hospital`: ObjectId FOREIGN KEY  

---

### 25. AreaEspecializacion :  
❖ Está en 2FN, sin dependencias parciales sobre la clave.  
- `id`: ObjectId PRIMARY KEY  
- `id_area`: ObjectId FOREIGN KEY  
- `fecha_asignacion`: date  
- `id_hospital`: ObjectId FOREIGN KEY  
- `estado`: string  

---

### 26. Subareas :  
❖ En 2FN, los atributos son atómicos y dependen solo del `id`.  
- `id`: ObjectId PRIMARY KEY  
- `nombre_subarea`: string  
- `id_area`: ObjectId FOREIGN KEY  
- `descripcion`: string  
- `estado`: string  
- `tipo`: string  

---


# Tercera Forma Normal (3FN)

### Una tabla está en 3FN si cumple con los siguientes criterios:
-  Está en 2FN.
-  No hay dependencias transitivas: ningún atributo no clave depende de otro atributo no clave.

## Descripción
La Tercera Forma Normal (3FN) es el tercer nivel de normalización en el diseño de bases de datos. Se aplica a tablas que ya cumplen con la Segunda Forma Normal (2FN) y su objetivo principal es la eliminación de dependencias transitivas. Esto significa que se busca evitar que un atributo no clave dentro de una tabla dependa de otro atributo no clave, en lugar de depender directamente de la clave primaria.

## Descripción Técnica


## Justificación por Entidad

### 1. Hospital  
❖ Se encuentra en 3FN, ya que está en la 2FN y en cada columna no hay dependencias transitivas con la clave primaria.

### 2. Administrativos  
❖ Se encuentra en 3FN, ya que cada atributo depende únicamente de la clave primaria y no existen dependencias transitivas entre atributos.

### 3. AdministrativoHospital  
❖ Se encuentra en 3FN, ya que sus columnas representan exclusivamente las claves externas que identifican la relación, sin atributos redundantes.

### 4. Medicos  
❖ Se encuentra en 3FN, dado que no existen atributos que dependan de otro campo que no sea la clave primaria.

### 5. Enfermeros  
❖ Se encuentra en 3FN, ya que todos sus atributos dependen directamente de la clave primaria y no entre ellos.

### 6. Mantenimiento  
❖ Se encuentra en 3FN, puesto que cada campo depende únicamente del identificador y no existen dependencias transitivas.

### 7. Pacientes  
❖ Se encuentra en 3FN, ya que sus datos personales, de contacto y afiliaciones están normalizados y no dependen unos de otros, sino de la clave primaria.

### 8. VisitasMedicas  
❖ Se encuentra en 3FN, pues todas las columnas están relacionadas directamente con la visita identificada por su ID, sin relaciones transitivas.

### 9. Tratamientos  
❖ Se encuentra en 3FN, ya que los atributos del tratamiento dependen de su ID, y no entre sí.

### 10. HistoriaClinica  
❖ Se encuentra en 3FN, ya que no hay dependencia transitiva entre paciente y tratamiento, cada uno depende directamente de la clave principal de la historia.

### 11. EPS  
❖ Se encuentra en 3FN, ya que no hay campos dependientes entre sí, solo de la clave primaria.

### 12. Seguros  
❖ Se encuentra en 3FN, dado que no hay redundancias ni dependencias transitivas; todos los campos describen directamente al seguro.

### 13. Enfermedades  
❖ Se encuentra en 3FN, ya que todos los atributos dependen directamente del identificador de la enfermedad.

### 14. Sintomas  
❖ Se encuentra en 3FN, los datos del síntoma no dependen entre sí, solo de su identificador.

### 15. Beneficios  
❖ Se encuentra en 3FN, ya que la descripción del beneficio está relacionada directamente con la clave primaria y no depende del tratamiento.

### 16. Requerimientos  
❖ Se encuentra en 3FN, dado que cada requerimiento está vinculado de forma directa a su ID y su tratamiento asociado.

### 17. Medicamentos  
❖ Se encuentra en 3FN, ya que todos los atributos son independientes entre sí y están relacionados directamente con la clave.

### 18. Presentaciones  
❖ Se encuentra en 3FN, porque el tipo de presentación depende exclusivamente del medicamento referenciado por su ID.

### 19. Inventario  
❖ Se encuentra en 3FN, ya que los datos del inventario dependen de la combinación hospital–medicamento y no entre columnas.

### 20. Proveedores  
❖ Se encuentra en 3FN, todos los campos se relacionan directamente con el proveedor, sin redundancia.

### 21. ServiciosMantenimiento  
❖ Se encuentra en 3FN, ya que cada atributo describe directamente al servicio sin depender de otro campo.

### 22. Horario  
❖ Se encuentra en 3FN, ya que los atributos están correctamente separados y dependen únicamente del ID del horario.

### 23. TiposPersonal  
❖ Se encuentra en 3FN, ya que el salario, código y descripción se relacionan directamente con el tipo de personal sin dependencias entre ellos.

### 24. Areas  
❖ Se encuentra en 3FN, todos los campos dependen directamente del código del área como identificador único.

### 25. AreaEspecializacion  
❖ Se encuentra en 3FN, ya que no hay dependencias transitivas: cada atributo se relaciona directamente con el ID de la especialización.

### 26. Subareas  
❖ Se encuentra en 3FN, los atributos como nombre, descripción y estado dependen directamente del identificador de la subárea.


``` mermaid
---
config:
  theme: redux-color
title: Sample title
---
erDiagram

%% ========= ENTIDADES PRINCIPALES =========

Hospital {
	ObjectId id PK
	string nombre
	string direccion
	string telefono
	string codigo_habilitacion
	string tipo_institucion
	string nivel_complejidad
}

Administrativos {
	ObjectId id PK
	string nombre
	string telefono
	string correo
	string rol
	ObjectId horario
	ObjectId id_tipo_personal FK
}

AdministrativoHospital {
	ObjectId id PK
	ObjectId id_administrativo FK
	ObjectId id_hospital FK
}

Medicos {
	ObjectId id PK
	string rol
	date fecha_ingreso
	string correo
	string telefono
	string numero_colegiatura
	string area_asignada
	ObjectId hospital_id FK
	string estado
	ObjectId id_horario FK
	ObjectId id_tipo_personal FK
}

Enfermeros {
	ObjectId id PK
	string nombre
	string rol
	ObjectId id_tipo_personal FK
	date fecha_ingreso
	string numero_colegiatura
	string correo
	string telefono
	string area_asignada
	ObjectId hospital_id FK
	string estado
	ObjectId horario FK
}

Mantenimiento {
	ObjectId id PK
	string nombre
	string correo
	string telefono
	ObjectId servicios FK
	ObjectId hospital_id FK
	date fecha_ingreso
	string estado
	ObjectId horario FK
	ObjectId id_tipo_personal FK
}

Pacientes {
	ObjectId id PK
	ObjectId hospital_registro_id FK
	string nombre
	string tipo_identificacion
	string numero_identificacion
	date fecha_nacimiento
	string genero
	string direccion
	string telefono_contacto
	date fecha_registro
	string estado_paciente
	string nivel_atencion
	ObjectId id_eps FK
	ObjectId id_seguro FK
}

VisitasMedicas {
	ObjectId id PK
	date fecha_visita
	ObjectId id_tratamiento FK
	ObjectId id_medico FK
	ObjectId id_paciente FK
	ObjectId id_hospital FK
	string tipo_visita
	string estado_visita
	string observaciones
}

Tratamientos {
	ObjectId id PK
	string nombre
	string descripcion
	decimal costo
	string duracion
	ObjectId area_relacionada FK
	string via_administracion
	int FrecuenciaAplicacion
}

HistoriaClinica {
	ObjectId id PK
	ObjectId paciente FK
	ObjectId tratamiento FK
}

EPS {
	ObjectId id PK
	string nombre
	string nit
	string tipo
	string nivel
	string telefono
	string correo
}

Seguros {
	ObjectId id PK
	string nombre
	string compañia
	string tipo
	string nivel_cobertura
	string plan
	string telefono
}

Enfermedades {
	ObjectId id PK
	string nombre
	string tipo
	string clasificacion
	ObjectId id_sintoma FK
}

Sintomas {
	ObjectId id PK
	string descripcion
	string observaciones
	date fecha_encontrada
}

Beneficios {
	ObjectId id PK
	string descripcion
	ObjectId id_tratamiento FK
}

Requerimientos {
	ObjectId id PK
	string descripcion
	ObjectId id_tratamiento FK
}

Medicamentos {
	ObjectId id PK
	string nombre
	string principio_activo
	string concentracion
	string tipo
	string lote
	boolean disponibilidad
	string fabricante
}

Presentaciones {
	ObjectId id PK
	string tipo_presentacion
	ObjectId id_medicamento FK
}

Inventario {
	ObjectId id PK
	ObjectId id_hospital FK
	ObjectId id_medicamento FK
	int stock
	date fecha_ultima_actualizacion
}

Proveedores {
	ObjectId id PK
	string nombre_empresa
	string nit
	string tipo
	date fecha
	string terminos_pago
}

ServiciosMantenimiento {
	ObjectId id PK
	string tipo_ambiente
	string nombre_servicio
}

Horario {
	ObjectId id PK
	string horario_tipo
	string dias
}

TiposPersonal {
	ObjectId id PK
	string codigo
	string nombre
	string descripcion
	decimal salario_base
}

Areas {
	ObjectId codigo PK
	string tipo_area
	string descripcion
	string estado
	ObjectId id_hospital FK
}

AreaEspecializacion {
	ObjectId id PK
	ObjectId id_area FK
	date fecha_asignacion
	ObjectId id_hospital FK
	string estado
}

Subareas {
	ObjectId id PK
	string nombre_subarea
	ObjectId id_area FK
	string descripcion
	string estado
	string tipo
}

%% ========= RELACIONES =========

Hospital ||--o{ AdministrativoHospital : "contiene"
Hospital ||--o{ Areas : "contiene"
Hospital ||--o{ AreaEspecializacion : "cuenta_con"
Areas ||--o{ AreaEspecializacion : "maneja"

AdministrativoHospital }o--|| Administrativos : "asigna"
Hospital ||--o{ TiposPersonal : "emplea"
TiposPersonal ||--o{ Enfermeros : "clasifica"
TiposPersonal ||--o{ Medicos : "clasifica"
TiposPersonal ||--o{ Administrativos : "clasifica"
TiposPersonal ||--o{ Mantenimiento : "clasifica"
Hospital ||--o{ Pacientes : "atiende"
Hospital ||--o{ Areas : "contiene"
Areas ||--o{ Subareas : "subdivide"

AreaEspecializacion ||--o{ Medicos : "especializa"
Medicos ||--o{ VisitasMedicas : "realiza"
Pacientes ||--o{ VisitasMedicas : "recibe"
VisitasMedicas ||--|| Tratamientos : "prescribe"
Tratamientos ||--o{ Medicamentos : "utiliza"
Medicamentos ||--o{ Inventario : "disponible_en"
Inventario }o--|| Hospital : "tiene_stock"
Medicamentos ||--o{ Presentaciones : "tiene"
Hospital ||--o{ Proveedores : "abastece"
Pacientes ||--o{ HistoriaClinica : "posee"
HistoriaClinica }o--|| Tratamientos : "relacionados"
Pacientes ||--o{ Enfermedades : "diagnostica"
Enfermedades ||--o{ Sintomas : "presenta"
VisitasMedicas ||--o{ Enfermedades : "detecta"
VisitasMedicas ||--o{ Sintomas : "observa"
Tratamientos ||--o{ Beneficios : "ofrece"
Tratamientos ||--o{ Requerimientos : "necesita"
Medicos ||--|| Horario : "turno"
Enfermeros ||--|| Horario : "turno"
Mantenimiento ||--|| Horario : "turno"
Mantenimiento ||--|| ServiciosMantenimiento : "presta"
Pacientes }o--|| EPS : "afiliado_a"
Pacientes }o--|| Seguros : "posee"

``` 


# Construcción del Modelo Físico

Se diseñó el modelo físico considerando el modelo lógico que incluye todas las entidades, sus atributos y las relaciones entre ellas. Además, este modelo incorpora los tipos de datos de los atributos previamente definidos, los cuales fueron estructurados en colecciones utilizando el lenguaje de un Sistema de Gestión de Bases de Datos (SGBD) compatible con la plataforma **MongoDB**.

## Descripción

El modelo físico se diseñó para funcionar en **MongoDB**, donde cada entidad se representa como una coleccion por sus atributos correspondientes, organizados en columnas con tipos de datos específicos según sea necesario.

## Colecciones


## Hospital

```json
{
  "_id": "ObjectId",
  "nombre": "string",
  "direccion": "string",
  "telefono": "string",
  "codigo_habilitacion": "string",
  "tipo_institucion": "string",
  "nivel_complejidad": "string"
}
```

##  Administrativos

```json
{
  "_id": "ObjectId",
  "nombre": "string",
  "telefono": "string",
  "correo": "string",
  "rol": "string",
  "horario": "ObjectId",
  "id_tipo_personal": "ObjectId"
}
```

## AdministrativoHospital

```json
{
  "_id": "ObjectId",
  "id_administrativo": "ObjectId",
  "id_hospital": "ObjectId"
}
```

##  Médicos

```json
{
  "_id": "ObjectId",
  "rol": "string",
  "fecha_ingreso": "date",
  "correo": "string",
  "telefono": "string",
  "numero_colegiatura": "string",
  "area_asignada": "string",
  "hospital_id": "ObjectId",
  "estado": "string",
  "id_horario": "ObjectId",
  "id_tipo_personal": "ObjectId"
}
```

##  Enfermeros

```json
{
  "_id": "ObjectId",
  "nombre": "string",
  "rol": "string",
  "id_tipo_personal": "ObjectId",
  "fecha_ingreso": "date",
  "numero_colegiatura": "string",
  "correo": "string",
  "telefono": "string",
  "area_asignada": "string",
  "hospital_id": "ObjectId",
  "estado": "string",
  "horario": "ObjectId"
}
```

##  Mantenimiento

```json
{
  "_id": "ObjectId",
  "nombre": "string",
  "correo": "string",
  "telefono": "string",
  "servicios": "ObjectId",
  "hospital_id": "ObjectId",
  "fecha_ingreso": "date",
  "estado": "string",
  "horario": "ObjectId",
  "id_tipo_personal": "ObjectId"
}
```

##  Pacientes

```json
{
  "_id": "ObjectId",
  "hospital_registro_id": "ObjectId",
  "nombre": "string",
  "tipo_identificacion": "string",
  "numero_identificacion": "string",
  "fecha_nacimiento": "date",
  "genero": "string",
  "direccion": "string",
  "telefono_contacto": "string",
  "fecha_registro": "date",
  "estado_paciente": "string",
  "nivel_atencion": "string",
  "id_eps": "ObjectId",
  "id_seguro": "ObjectId"
}
```

##  VisitasMedicas

```json
{
  "_id": "ObjectId",
  "fecha_visita": "date",
  "id_tratamiento": "ObjectId",
  "id_medico": "ObjectId",
  "id_paciente": "ObjectId",
  "id_hospital": "ObjectId",
  "tipo_visita": "string",
  "estado_visita": "string",
  "observaciones": "string"
}
```

##  Tratamientos

```json
{
  "_id": "ObjectId",
  "nombre": "string",
  "descripcion": "string",
  "costo": "decimal",
  "duracion": "string",
  "area_relacionada": "ObjectId",
  "via_administracion": "string",
  "FrecuenciaAplicacion": "int"
}
```

##  HistoriaClinica

```json
{
  "_id": "ObjectId",
  "paciente": "ObjectId",
  "tratamiento": "ObjectId"
}
```

##  EPS

```json
{
  "_id": "ObjectId",
  "nombre": "string",
  "nit": "string",
  "tipo": "string",
  "nivel": "string",
  "telefono": "string",
  "correo": "string"
}
```

##  Seguros

```json
{
  "_id": "ObjectId",
  "nombre": "string",
  "compañia": "string",
  "tipo": "string",
  "nivel_cobertura": "string",
  "plan": "string",
  "telefono": "string"
}
```

##  Enfermedades

```json
{
  "_id": "ObjectId",
  "nombre": "string",
  "tipo": "string",
  "clasificacion": "string",
  "id_sintoma": "ObjectId"
}
```

##  Sintomas

```json
{
  "_id": "ObjectId",
  "descripcion": "string",
  "observaciones": "string",
  "fecha_encontrada": "date"
}
```

##  Beneficios

```json
{
  "_id": "ObjectId",
  "descripcion": "string",
  "id_tratamiento": "ObjectId"
}
```

## Requerimientos

```json
{
  "_id": "ObjectId",
  "descripcion": "string",
  "id_tratamiento": "ObjectId"
}
```

##  Medicamentos

```json
{
  "_id": "ObjectId",
  "nombre": "string",
  "principio_activo": "string",
  "concentracion": "string",
  "tipo": "string",
  "lote": "string",
  "disponibilidad": "boolean",
  "fabricante": "string"
}
```

##  Presentaciones

```json
{
  "_id": "ObjectId",
  "tipo_presentacion": "string",
  "id_medicamento": "ObjectId"
}
```

##  Inventario

```json
{
  "_id": "ObjectId",
  "id_hospital": "ObjectId",
  "id_medicamento": "ObjectId",
  "stock": "int",
  "fecha_ultima_actualizacion": "date"
}
```

##  Proveedores

```json
{
  "_id": "ObjectId",
  "nombre_empresa": "string",
  "nit": "string",
  "tipo": "string",
  "fecha": "date",
  "terminos_pago": "string"
}
```

##  ServiciosMantenimiento

```json
{
  "_id": "ObjectId",
  "tipo_ambiente": "string",
  "nombre_servicio": "string"
}
```

##  Horario

```json
{
  "_id": "ObjectId",
  "horario_tipo": "string",
  "dias": "string"
}
```

##  TiposPersonal

```json
{
  "_id": "ObjectId",
  "codigo": "string",
  "nombre": "string",
  "descripcion": "string",
  "salario_base": "decimal"
}
```

##  Areas

```json
{
  "_id": "ObjectId",
  "tipo_area": "string",
  "descripcion": "string",
  "estado": "string",
  "id_hospital": "ObjectId"
}
```

##  AreaEspecializacion

```json
{
  "_id": "ObjectId",
  "id_area": "ObjectId",
  "fecha_asignacion": "date",
  "id_hospital": "ObjectId",
  "estado": "string"
}
```

## Subareas

```json
{
  "_id": "ObjectId",
  "nombre_subarea": "string",
  "id_area": "ObjectId",
  "descripcion": "string",
  "estado": "string",
  "tipo": "string"
}
```




#  Tecnologías y Herramientas Utilizadas

El desarrollo del sistema hospitalario se llevó a cabo utilizando las siguientes tecnologías y herramientas:

### 1. MongoDB

Base de datos NoSQL orientada a documentos, ideal para almacenar y consultar grandes volúmenes de información estructurada y semiestructurada.

- **MongoDB Server** 
- **MongoDB Compass**: herramienta visual para consultas, inspección de colecciones y agregaciones.

### 2. MongoDB Query Language (MQL)

Lenguaje nativo para realizar operaciones sobre los documentos. Utilizado para:

- Consultas básicas (`find`, `insert`, `update`, `delete`)
- Agregaciones avanzadas (`$lookup`, `$unwind`, `$group`, `$match`, `$project`, `$regex`, etc.)

### 3. JavaScript (Funciones Simuladas)

Se implementaron **20 funciones simuladas** usando JavaScript para reutilización de lógica dentro de MongoDB:

```javascript
db.system.js.save({
  _id: "nombreFuncion",
  value: function(parametro) {
  }
});
```

##  4. GitHub

Repositorio **en GitHub** para entrega y control de versiones del proyecto.

###  Estructura organizada por carpetas:

- `ddl.json` → Creación de colecciones y estructura de la base de datos.
- `dml.json` → Inserciones de datos.
- `dql_select.json` → Consultas básicas y avanzadas.
- `dql_funciones.json` → Funciones JavaScript simuladas reutilizables.
- `README.md` → Documentación general del sistema.


##  5. Herramientas de Modelado

Se utilizaron herramientas de diagramación para representar el modelo lógico y entidad-relación del sistema:

- **Mermaid.js** para diagramas ER en Markdown.


# Instalación Rápida

### 1. Clona el repositorio:

```bash
git clone https://github.com/Sarasofia1214/MongoDB_DiazSara.git
cd MongoDB_DiazSara
```
2. Conéctate a la base de datos MongoDB Atlas:
```bash
mongosh 'mongodb+srv://saradiaz01214:Adri1206@cluster0.kxkmcm5.mongodb.net/'
```
3. Selecciona la base de datos del sistema hospitalario:
``` js
use Sistemahospitalario
```
4. Ya puedes ejecutar consultas y funciones con esos pasos.



# Referencias

En el presente documento del Ministerio de la Protección Social
República de Colombia del 2010, se encuentran especificaciones que se tomaron como guia para la arquitectura del sistema hospitalario en la base de datos manejada:

https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PSA/guias-programa-medico-arquitectonico-red-prestadores%20servicios-salud.pdf

Para la busqueda de la informacion verdiica de los hopitales, se busco en REPS de minsalud:

https://prestadores.minsalud.gov.co/habilitacion/consultas/habilitados_reps.aspx?pageTitle=Registro+Actual&pageHlp=


# 📬 Contacto

Si tienes preguntas, sugerencias o encuentras algún problema con la implementación, no dudes en contactarme a través de:

- GitHub: [Sarasofia1214](https://github.com/Sarasofia1214)
- Puedes abrir un [Issue aquí](https://github.com/Sarasofia1214/MongoDB_DiazSara/issues)






