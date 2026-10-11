# Sitio web — Dr. Simón Duque Solórzano (cardiología pediátrica)

Sitio informativo y carta de presentación (Fase 1). Stack: Next.js 16, React 19, Tailwind CSS 4.

## Desarrollo

```bash
cd C:\Users\sheid\Projects\dr-simon-duque-web
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Configuración

Editar `src/lib/site-config.ts`:

- Teléfono y WhatsApp (`whatsappNumber` sin signo +, ej. `593991234567`)
- Correo real
- Horarios, estacionamiento, URL de agendamiento (`bookingUrl`)
- Biografía en `src/app/sobre-mi/page.tsx`

## Producción

```bash
npm run build
npm run start
```

Despliegue recomendado: [Vercel](https://vercel.com) conectado al repositorio git.

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Inicio |
| `/servicios` | Servicios de cardiología pediátrica |
| `/sobre-mi` | Biografía |
| `/consultorio` | Ubicación y mapa |
| `/pacientes` | Preparación para la cita |
| `/contacto` | WhatsApp y formulario |
| `/privacidad` | Aviso LOPDP |
