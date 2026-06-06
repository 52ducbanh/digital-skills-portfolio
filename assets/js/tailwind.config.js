/* =====================================================
   Tailwind CSS Configuration
   Portfolio – Trần Vũ Đức | UET-VNU Hà Nội
   ===================================================== */

tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        navy:   { 900: '#0a0f1e', 800: '#0d1b2a', 700: '#112240', 600: '#1d3461' },
        cyan:   { 400: '#22d3ee', 500: '#06b6d4', 300: '#67e8f9' },
        purple: { 400: '#c084fc', 500: '#a855f7', 600: '#9333ea' },
        neon:   { DEFAULT: '#00fff5' },
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'slide-up':   'slideUp 0.6s ease-out forwards',
        'fade-in':    'fadeIn 0.8s ease-out forwards',
        'glow':       'glow 2s ease-in-out infinite alternate',
        'typing':     'typing 3.5s steps(30,end), blink .75s step-end infinite',
      },
      keyframes: {
        float:   { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } },
        slideUp: { from: { opacity: 0, transform: 'translateY(30px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:  { from: { opacity: 0 }, to: { opacity: 1 } },
        glow:    { from: { 'text-shadow': '0 0 10px #22d3ee' }, to: { 'text-shadow': '0 0 25px #22d3ee, 0 0 50px #22d3ee' } },
        typing:  { from: { width: 0 }, to: { width: '100%' } },
        blink:   { 'from,to': { 'border-color': 'transparent' }, '50%': { 'border-color': '#22d3ee' } },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0a0f1e 0%, #0d1b2a 40%, #112240 70%, #1a0533 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(17,34,64,0.8) 0%, rgba(26,5,51,0.6) 100%)',
        'text-gradient': 'linear-gradient(90deg, #22d3ee, #a855f7)',
      },
    },
  },
}
