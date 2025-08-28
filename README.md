# QuickReply Hero Section

A modern, animated hero section for QuickReply's Instagram chat ads platform, built with React, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Mobile-first approach with side-by-side layout on desktop
- **Smooth Animations**: Framer Motion animations with staggered entrance effects
- **Instagram Chat UI Mockup**: Realistic iPhone mockup showing the chatbot in action
- **Modern Typography**: Inter font from Google Fonts
- **QuickReply Brand Colors**: Custom color palette matching the brand guidelines
- **Interactive Elements**: Hover effects and micro-interactions

## Tech Stack

- React 18
- Tailwind CSS
- Framer Motion
- Vite (Build tool)
- Inter Font (Google Fonts)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to `http://localhost:3000`

## Project Structure

```
├── src/
│   ├── HeroSection.jsx    # Main hero component
│   ├── App.jsx           # App wrapper
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles & Tailwind
├── tailwind.config.js    # Tailwind configuration
├── package.json          # Dependencies
└── index.html           # HTML template
```

## Design Features

### Visual Elements
- **Radial Background**: Warm gradient with noise texture overlay
- **Meta Partner Badge**: Trust indicator with Meta logo
- **Instagram Chat Mockup**: iPhone-style interface showing bot interactions
- **Floating Elements**: Animated chart emoji for visual interest

### Animations
- **Staggered Entrance**: Content appears with delays for smooth flow
- **Hover Effects**: Button scaling and glow effects
- **Floating Animation**: Continuous gentle movement on decorative elements
- **Scroll Indicator**: Bouncing arrow at bottom

### Responsive Behavior
- **Mobile**: Stacked layout with centered content
- **Desktop**: Side-by-side layout with chat mockup on right
- **Typography**: Scales appropriately across screen sizes

## Customization

### Colors
The component uses a custom color palette defined in `tailwind.config.js`:
- Primary: Green tones (#4EC84E, #378E37)
- Grey: Neutral tones for text and backgrounds
- Accent: Blue for interactive elements

### Content
All copy is easily editable in the `HeroSection.jsx` component:
- Headline and subheadline
- CTA button text
- Feature bullet points
- Trust indicators

## Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` directory ready for deployment.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this component in your projects. 