# PDR.md: Preliminary Design Review - BerryLink B2B

## 1. Visión Técnica General
El sistema será una plataforma desacoplada (Decoupled) con un núcleo de servicios en **NestJS** y una interfaz de alta fidelidad en **React**. La persistencia se manejará mediante **PostgreSQL** para garantizar la integridad de las transacciones B2B.

## 2. Stack Tecnológico Definido

| Capa | Tecnología | Razón de elección |
| :--- | :--- | :--- |
| **Frontend** | React + Vite + TS | Velocidad de desarrollo y tipado fuerte. |
| **Backend** | NestJS | Estructura modular escalable (Arquitectura Enterprise). |
| **Base de Datos** | PostgreSQL + Prisma | Relaciones complejas y migraciones seguras. |
| **Pagos** | Stripe | Manejo nativo de suscripciones y facturación B2B. |
| **Testing** | testSprite | Automatización de pruebas de integración. |

## 3. Arquitectura de Módulos (Backend)
Siguiendo la filosofía de NestJS, el servidor se dividirá en:
- **Auth Module:** Gestión de sesiones y roles (Comprador/Admin).
- **Products Module:** Catálogo técnico de fresas y gestión de lotes.
- **Orders Module:** Lógica de carrito, impuestos y validación de MOQ (Mínimo de compra).
- **Payments Module:** Integración con el puente de Stripe.

## 4. Diagrama de Datos Preliminar (Entidades)
- **Company:** Perfil fiscal del cliente B2B.
- **Product:** Información del derivado de fresa (Precio, unidad de medida).
- **Batch (Lote):** Trazabilidad (Fecha de cosecha, fecha de expiración).
- **Order:** Registro de transacciones y estados de envío.

## 5. Estrategia de Despliegue y CI/CD
- **Repositorio:** GitHub (Estructura Monorepo: `/client`, `/server`).
- **Backend:** Render o Railway (con soporte para NestJS).
- **Frontend:** Vercel o Netlify (optimizado para React/Vite).

## 6. Riesgos Identificados
- **Sincronización de Stock:** Manejar compras concurrentes de grandes volúmenes.
- **Seguridad de Pagos:** Asegurar que los webhooks de Stripe se procesen una sola vez (Idempotencia).
