
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
En este documento se halla la especificación del desarrollo de la **base de datos** realizada para un **sistema hospitalario** de Colombia, el cual busca permitir la gestión eficiente de todas las operaciones relacionadas con la administración de este sistema.

Entre los problemas más destacados se encuentran la gestión deficiente de clientes y repuestos, la ineficiencia en la cadena de suministro y las dificultades en el análisis de ventas y compras.

Aquí se muestra de forma esquematizada la creación de una base de datos para una gestión de la información, almacenamiento y manipulación de datos eficiente y asequible para el sistema. Para lograr esto, se realizaron los tipos de modelos necesarios para la base de datos: **modelo conceptual**, **lógico** y **físico**.

El **modelo conceptual** es una descripción de los requerimientos a grandes rasgos, identificando las principales entidades, atributos y las relaciones de los datos, para crear una esquematización general que plasme todo correctamente a partir de una idea.

El **modelo lógico** trabaja con lo logrado en el modelo conceptual, con la diferencia de que implementa una estructura más específica de los datos, definiendo tablas, llaves primarias o foráneas y cardinalidad.

Finalmente, el **modelo físico** para la implementación de una base de datos en MongoDB, que toma en cuenta varios factores del lenguaje de definición de datos y detalles de estos tipos de datos.

El plasmar estos datos tiene como objetivo para esta documentación la **representación visual** que define los sistemas de recopilación y administración de información del Sistema Hospitalario, logrando ayudar a las diferentes partes interesadas, como analistas e ingenieros, para interpretar de manera efectiva los datos.

---

## Caso de Estudio

Se pide diseñar y desarrollar un sistema que incluirá la gestión de hospitales, pacientes, médicos, tratamientos, medicamentos, visitas médicas, historiales clínicos, áreas especializadas y personal administrativo.

### Estructura del Sistema

* Un hospital puede tener múltiples **áreas especializadas** (Cardiología, Neurología, etc.).
* Cada hospital tiene un **director general**, pero un director puede supervisar varios hospitales.
* Cada hospital tiene un conjunto de **médicos, enfermeras y personal administrativo**.
* Los hospitales deben contar con un **historial detallado de pacientes y tratamientos realizados**.

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



# Construcción del Modelo Lógico

Este modelo busca brindar más contexto que el modelo conceptual, como se evidenció con anterioridad, agregando **atributos**, asignando **tipos de datos** y especificando **requisitos** para la información, incluyendo las **llaves principales** y **restricciones** dadas en las especificaciones.

Durante la construcción del modelo lógico, se añaden detalles para documentar completamente cómo se representarán en una base de datos las ideas generales descritas en el modelo conceptual.

---

## Representación Gráfica

``` mermaid
erDiagram

    Hospital {
        string id
        string nombre
        string direccion
        string telefono
        string codigo_habilitacion 
        string tipo_institucion   
        string nivel_complejidad
    }

    Administrativos {
        string id
        string[] hospitales
        string nombre
        string telefono
        string correo
        string genero
        string rol
        string horario
    }

    Medicos {
        string id
        string nombre
        string rol
        string especialidad
        float salario
        date fecha_ingreso
        string correo
        string telefono
        string numero_colegiatura
        string area_asignada
        string hospital_id
        string estado
        string horario
    }

    Enfermeros {
        string id
        string nombre
        string rol
        string especialidad
        float salario
        date fecha_ingreso
        string numero_colegiatura
        string correo
        string telefono
        string area_asignada
        string hospital_id
        string estado
        string horario
    }

    Mantenimiento {
        string id
        string nombre
        string correo
        string telefono
        string servicios
        string hospital_id
        date fecha_ingreso
        string estado
        string horario
    }

    Pacientes {
        string _id
        string hospital_registro_id
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
    }

    VisitasMedicas {
        string id
        date fecha_visita
        string sintomas
        string id_tratamiento
        string id_medico
        string id_paciente
        string nombre_paciente
        string hospital_id
        string enfermedad
        string tipo_visita
        string estado_visita
        string observaciones
    }

    Tratamientos {
        string id
        string nombre
        string descripcion
        float costo
        string duracion
        string beneficios
        string requerimientos
        string area_relacionada
        string frecuencia_aplicacion
        string vía_administración
        Medicamento[] medicamentos_asociados
    }

     Medicamentos {
        string id
        string nombre
        string principio_activo
        string concentracion
        string tipo
        string lote
        string presentaciones
        boolean disponibilidad
        string fabricante
        Inventario[] inventario_hospitales
    }

    Inventario {
        string hospital_id
        string hospital_nombre
        int stock
        date fecha_ultima_actualizacion
    }


    Proveedores {
        string id
        string nombre_empresa
        string nit
        string datos_contacto
        string tipo
        string[] hospitales_asociados
        date fecha
        string terminos_pago
    }

    Areas {
        string codigo
        string tipo_area
        string descripcion
        string subareas
        string personal
        string estado
        string id_hospital
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
    Tratamientos ||--o{ Areas : se_asocia_con

      Medicamentos ||--o{ Inventario : tiene_stock_en
```

#  Documentación: Entidades y Atributos del Modelo ER

## 1. Hospital

- `id`: `STRING` **PRIMARY KEY** → Identificador único del hospital  
- `nombre`: `VARCHAR(100)` **NOT NULL** → Nombre del hospital  
- `direccion`: `VARCHAR(150)` → Dirección física  
- `telefono`: `VARCHAR(20)` → Teléfono de contacto  
- `codigo_habilitacion`: `VARCHAR(50)` → Código oficial de habilitación  
- `tipo_institucion`: `VARCHAR(50)` → Pública / Privada  
- `nivel_complejidad`: `VARCHAR(30)` → Nivel (I, II, III, etc.)

---

## 2. Administrativos

- `id`: `STRING` **PRIMARY KEY**  
- `hospitales`: `STRING[]` → IDs de hospitales donde trabaja  
- `nombre`: `VARCHAR(100)`  
- `telefono`: `VARCHAR(20)`  
- `correo`: `VARCHAR(100)`  
- `genero`: `VARCHAR(10)`  
- `rol`: `VARCHAR(50)` → Ej: Coordinador, Director, etc.  
- `horario`: `VARCHAR(50)`

---

## 3. Médicos

- `id`: `STRING` **PRIMARY KEY**  
- `nombre`: `VARCHAR(100)`  
- `rol`: `VARCHAR(30)`  
- `especialidad`: `VARCHAR(50)`  
- `salario`: `FLOAT`  
- `fecha_ingreso`: `DATE`  
- `correo`: `VARCHAR(100)`  
- `telefono`: `VARCHAR(20)`  
- `numero_colegiatura`: `VARCHAR(30)`  
- `area_asignada`: `VARCHAR(50)`  
- `hospital_id`: `STRING` (FK a Hospital)  
- `estado`: `VARCHAR(20)`  
- `horario`: `VARCHAR(50)`

---

## 4. Enfermeros

*(Igual a Médicos, adaptado al personal de enfermería)*  
**Mismos campos que la entidad Médicos.**

---

## 5. Mantenimiento

- `id`: `STRING` **PRIMARY KEY**  
- `nombre`: `VARCHAR(100)`  
- `correo`: `VARCHAR(100)`  
- `telefono`: `VARCHAR(20)`  
- `servicios`: `VARCHAR(100)` → Tipos de mantenimiento  
- `hospital_id`: `STRING` (FK)  
- `fecha_ingreso`: `DATE`  
- `estado`: `VARCHAR(20)`  
- `horario`: `VARCHAR(50)`

---

## 6. Pacientes

- `_id`: `STRING` **PRIMARY KEY**  
- `hospital_registro_id`: `STRING` (FK a Hospital)  
- `historia_clinica`: `VARCHAR(100)`  
- `nombre`: `VARCHAR(100)`  
- `tipo_identificacion`: `VARCHAR(20)`  
- `numero_identificacion`: `VARCHAR(30)`  
- `fecha_nacimiento`: `DATE`  
- `genero`: `VARCHAR(10)`  
- `direccion`: `VARCHAR(150)`  
- `telefono_contacto`: `VARCHAR(20)`  
- `seguros_medicos`: `VARCHAR(100)`  
- `fecha_registro`: `DATE`  
- `estado_paciente`: `VARCHAR(20)`  
- `nivel_atencion`: `VARCHAR(20)`  
- `eps_actual`: `VARCHAR(50)`

---

## 7. Visitas Médicas

- `id`: `STRING` **PRIMARY KEY**  
- `fecha_visita`: `DATE`  
- `sintomas`: `VARCHAR(150)`  
- `id_tratamiento`: `STRING` (FK)  
- `id_medico`: `STRING` (FK)  
- `id_paciente`: `STRING` (FK)  
- `nombre_paciente`: `VARCHAR(100)`  
- `hospital_id`: `STRING` (FK)  
- `enfermedad`: `VARCHAR(100)`  
- `tipo_visita`: `VARCHAR(50)`  
- `estado_visita`: `VARCHAR(30)`  
- `observaciones`: `TEXT`

---

## 8. Tratamientos

- `id`: `STRING` **PRIMARY KEY**  
- `nombre`: `VARCHAR(100)`  
- `descripcion`: `TEXT`  
- `costo`: `FLOAT`  
- `duracion`: `VARCHAR(50)`  
- `beneficios`: `TEXT`  
- `requerimientos`: `TEXT`  
- `area_relacionada`: `VARCHAR(50)`  
- `frecuencia_aplicacion`: `VARCHAR(50)`  
- `vía_administración`: `VARCHAR(50)`  
- `medicamentos_asociados`: `ARRAY` de IDs

---

## 9. Medicamentos

- `id`: `STRING` **PRIMARY KEY**  
- `nombre`: `VARCHAR(100)`  
- `principio_activo`: `VARCHAR(100)`  
- `concentracion`: `VARCHAR(50)`  
- `tipo`: `VARCHAR(50)`  
- `lote`: `VARCHAR(50)`  
- `presentaciones`: `VARCHAR(100)`  
- `disponibilidad`: `BOOLEAN`  
- `fabricante`: `VARCHAR(100)`  
- `inventario_hospitales`: `ARRAY` de objetos tipo Inventario

---

## 10. Inventario (Interno en Medicamentos)

- `hospital_id`: `STRING` (FK)  
- `hospital_nombre`: `VARCHAR(100)`  
- `stock`: `INT`  
- `fecha_ultima_actualizacion`: `DATE`

---

## 11. Proveedores

- `id`: `STRING` **PRIMARY KEY**  
- `nombre_empresa`: `VARCHAR(100)`  
- `nit`: `VARCHAR(30)`  
- `datos_contacto`: `VARCHAR(100)`  
- `tipo`: `VARCHAR(50)`  
- `hospitales_asociados`: `ARRAY` de IDs  
- `fecha`: `DATE`  
- `terminos_pago`: `TEXT`

---

## 12. Áreas

- `codigo`: `STRING` **PRIMARY KEY**  
- `tipo_area`: `VARCHAR(50)`  
- `descripcion`: `TEXT`  
- `subareas`: `VARCHAR(100)`  
- `personal`: `VARCHAR(100)`  
- `estado`: `VARCHAR(20)`  
- `id_hospital`: `STRING` (FK)


































// Para la busqueda de la informacion se buco en REPS los hospitales de bmanga
https://prestadores.minsalud.gov.co/habilitacion/consultas/habilitados_reps.aspx?pageTitle=Registro+Actual&pageHlp=

🏥 1. Área Asistencial
Son áreas clínicas y de soporte diagnóstico que atienden directamente a los pacientes.

1.1 Servicios ambulatorios

Consulta externa

Urgencias

1.2 Servicios de apoyo diagnóstico y terapéutico

Laboratorio clínico

Banco de sangre

Radiología e imágenes diagnósticas

Radiología

Ecografía, EKG, EEG

Resonancia magnética

TAC (Tomógrafo Axial Computarizado)

Hemodinamia

Gastroenterología / endoscopia diagnóstica

Laboratorio de patología

Morgue

Nutrición y dietética

Farmacia

Archivo de historias clínicas

Transporte

Comunicaciones

Rehabilitación (Terapias físicas, respiratorias)

Unidad Renal

1.3 Servicios quirúrgicos y obstétricos

Cirugía general

Cirugía ambulatoria

Obstetricia

Central de esterilización

1.4 Servicios de hospitalización

Hospitalización general

Neonatología / Cuidado neonatal

UCI adultos

UCI pediátrica

Cuidados intermedios

🛠 2. Área General
Son áreas de soporte logístico y funcional.

2.1 Servicios generales

Cocina

Lavandería

Almacén

Mantenimiento

Máquinas (planta eléctrica, gases medicinales, calderas, etc.)

Vestuarios

2.2 Servicios complementarios

Seguridad

Gestión ambiental / residuos

Parqueadero

Capellanía o apoyo espiritual

Oficina de atención al usuario

🧠 3. Área Administrativa
Gestión institucional, financiera y de talento humano.

Dirección general

Subdirección médica

Subdirección administrativa

Recursos humanos

Contabilidad y finanzas

Contratación

Sistemas de información (TI)

Archivo general

Planeación y calidad

Comité de ética

Docencia e investigación








