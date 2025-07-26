# SISTEMA HOSPITALARIO

---
<div aling="center">
**SARA SOFÍA DÍAZ RODRÍGUEZ**
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
**S1**
&nbsp;
&nbsp;
**PEDRO FELIPE GÓMEZ BONILLA**
&nbsp;
&nbsp;
CAMPUSLANDS
&nbsp;
&nbsp;
RUTA NODEJS
&nbsp;
&nbsp;
BUCARAMANGA
&nbsp;
&nbsp;
2025
</div>
---

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

## Introducción

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

