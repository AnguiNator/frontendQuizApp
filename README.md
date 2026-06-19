# 📌 Frontend Quiz App

## 📝 Descripción
Reto de Frontend Mentor que consiste en una aplicación de quiz interactiva sobre tecnologías frontend. El usuario puede elegir entre cuatro categorías (HTML, CSS, JavaScript y Accessibility), responder preguntas de opción múltiple, ver retroalimentación visual inmediata de respuestas correctas e incorrectas, y consultar su puntuación final. Incluye modo oscuro/claro y diseño completamente responsivo.

---

## 📸 Capturas de pantalla

### 📱 Vista Mobile
![Mobile](./screenshots/Mobil.png)

### 💻 Vista Desktop
![Desktop](./screenshots/Desktop.png)

---

## 🛠 Tecnologías utilizadas
- React 19
- Vite
- Tailwind CSS 4
- JavaScript (ES6+)
- Context API
- HTML5 semántico
- CSS custom properties

---

## 🚀 Retos
- Manejar el flujo completo del quiz (selección → preguntas → resultado) usando una sola variable de estado `phase` con Context API, sin necesidad de un router externo.
- Implementar la lógica de validación de respuestas con bloqueo de opciones (`isLocked`) para que el usuario no pueda cambiar su respuesta una vez seleccionada, mostrando visualmente cuál era la correcta.
- Configurar el modo oscuro/claro manualmente con Tailwind CSS 4 usando `@custom-variant` y clases dinámicas en el `body`, incluyendo el cambio de fondos SVG por breakpoint y tema.
- Lograr un diseño responsivo con tres breakpoints (mobile, tablet, desktop) usando utilidades personalizadas de tipografía para cada tamaño.

---

## 📚 Aprendizajes
- Profundicé en el uso de Context API para centralizar todo el estado de la aplicación en un solo provider, evitando prop drilling entre múltiples pantallas y componentes.
- Aprendí a crear utilidades de tipografía personalizadas con `@utility` en Tailwind CSS 4, lo que me permitió mantener un sistema de diseño consistente con presets reutilizables.
- Mejoré mi comprensión del manejo de temas con la directiva `@custom-variant dark` y cómo aplicar fondos condicionales por breakpoint y tema usando clases de Tailwind.
- Practiqué accesibilidad implementando `aria-label`, `aria-live`, `role="progressbar"` y atributos `aria-disabled` para mejorar la experiencia con lectores de pantalla.

---

## 👨‍💻 Autor
**Anguiano**  
[GitHub](https://github.com/anguiano)
