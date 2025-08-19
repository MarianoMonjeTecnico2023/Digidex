# 🐉 DigiDex

Una aplicación web interactiva que funciona como una enciclopedia digital de Digimon, permitiendo a los usuarios explorar y descubrir información sobre diferentes criaturas digitales.

## 📋 Descripción

DigiDex es una aplicación web moderna que consume la API de Digimon para mostrar una colección completa de criaturas digitales. La aplicación presenta los Digimon en un formato de tarjetas atractivo, organizados por tipos y con información detallada de cada uno.

## ✨ Características

- **Catálogo Completo**: Muestra todos los Digimon disponibles en la API
- **Clasificación por Tipos**: Organiza los Digimon por sus tipos (Vacuna, Dato, Virus)
- **Diseño Responsivo**: Interfaz adaptativa que funciona en diferentes dispositivos
- **Efectos Visuales**: Animaciones y efectos hover para mejorar la experiencia de usuario
- **Información Detallada**: Muestra nombre, nivel y tipo de cada Digimon
- **Interfaz Intuitiva**: Diseño limpio y fácil de navegar

## 🎨 Tipos de Digimon

La aplicación clasifica los Digimon en tres categorías principales:

- **🟢 Vacuna**: Digimon de tipo defensivo (fondo verde claro)
- **🔵 Dato**: Digimon de tipo equilibrado (fondo azul claro)  
- **🔴 Virus**: Digimon de tipo ofensivo (fondo rojo claro)

## 🚀 Instalación

1. **Clona o descarga el repositorio**
   ```bash
   git clone [URL-del-repositorio]
   cd DigiDex
   ```

2. **Abre el proyecto**
   - Simplemente abre el archivo `index.html` en tu navegador web
   - O utiliza un servidor local para desarrollo

3. **Para desarrollo local (opcional)**
   ```bash
   # Si tienes Python instalado
   python -m http.server 8000
   
   # Si tienes Node.js instalado
   npx serve .
   ```

## 📱 Uso

1. **Carga la aplicación** abriendo `index.html` en tu navegador
2. **Explora los Digimon** que se cargan automáticamente
3. **Filtra por tipo** observando los colores de las tarjetas
4. **Haz clic en "Ver detalles"** para obtener información específica de cada Digimon
5. **Disfruta** de la experiencia visual con los efectos hover

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica de la aplicación
- **CSS3**: Estilos modernos con Grid Layout y efectos visuales
- **JavaScript (ES6+)**: Lógica de la aplicación y consumo de API
- **Digimon API**: Fuente de datos de los Digimon

## 📁 Estructura del Proyecto

```
DigiDex/
├── index.html          # Página principal
├── index.css           # Estilos y diseño
├── index.js            # Lógica de la aplicación
└── README.md           # Documentación del proyecto
```

## 🔧 Funcionalidades Técnicas

- **Consumo de API**: Utiliza fetch para obtener datos de la Digimon API
- **Manejo de Errores**: Implementa try-catch para gestionar errores de red
- **Diseño Responsivo**: Grid CSS que se adapta a diferentes tamaños de pantalla
- **Event Listeners**: Interactividad con botones y efectos hover
- **Clasificación Automática**: Algoritmo que determina el tipo de cada Digimon

## 🎯 Características del Diseño

- **Paleta de Colores**: Colores temáticos para cada tipo de Digimon
- **Tipografía**: Fuente temática que mejora la experiencia visual
- **Efectos Visuales**: Transiciones suaves y efectos hover
- **Layout Grid**: Organización automática de tarjetas
- **Sombras y Bordes**: Profundidad visual con CSS moderno

## 🌐 API Utilizada

La aplicación consume la [Digimon API](https://digimon-api.vercel.app/api/digimon) que proporciona:
- Información completa de cada Digimon
- Imágenes oficiales
- Niveles de evolución
- Datos estructurados en formato JSON

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

Desarrollado con ❤️ para la comunidad de Digimon.

---

**¡Disfruta explorando el mundo digital de los Digimon!** 🐉✨
