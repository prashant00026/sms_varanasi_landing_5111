module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./*.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Brand Authority & Institutional Trust
        primary: {
          DEFAULT: "#ad1f37", // red-700
          50: "#fef2f2", // red-50
          100: "#fee2e2", // red-100
          200: "#fecaca", // red-200
          300: "#fca5a5", // red-300
          400: "#f87171", // red-400
          500: "#ef4444", // red-500
          600: "#dc2626", // red-600
          700: "#ad1f37", // custom-red
          800: "#8b1a2d", // red-900
          900: "#7f1d1d", // red-950
        },
        // Secondary Colors - Professional Hierarchy Support
        secondary: {
          DEFAULT: "#2c3e50", // slate-800
          50: "#f8fafc", // slate-50
          100: "#f1f5f9", // slate-100
          200: "#e2e8f0", // slate-200
          300: "#cbd5e1", // slate-300
          400: "#94a3b8", // slate-400
          500: "#64748b", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#2c3e50", // custom-slate
          900: "#0f172a", // slate-900
        },
        // Accent Colors - Achievement Highlights & Urgency
        accent: {
          DEFAULT: "#f39c12", // amber-500
          50: "#fffbeb", // amber-50
          100: "#fef3c7", // amber-100
          200: "#fde68a", // amber-200
          300: "#fcd34d", // amber-300
          400: "#fbbf24", // amber-400
          500: "#f39c12", // custom-amber
          600: "#d97706", // amber-600
          700: "#b45309", // amber-700
          800: "#92400e", // amber-800
          900: "#78350f", // amber-900
        },
        // Background Colors
        background: "#ffffff", // white
        surface: {
          DEFAULT: "#f8f9fa", // gray-50
          100: "#f3f4f6", // gray-100
          200: "#e5e7eb", // gray-200
        },
        // Text Colors
        text: {
          primary: "#2c3e50", // slate-800
          secondary: "#6c757d", // gray-600
          tertiary: "#9ca3af", // gray-400
          inverse: "#ffffff", // white
        },
        // Semantic Colors
        success: {
          DEFAULT: "#28a745", // green-600
          50: "#f0fdf4", // green-50
          100: "#dcfce7", // green-100
          500: "#22c55e", // green-500
          600: "#28a745", // custom-green
          700: "#15803d", // green-700
        },
        warning: {
          DEFAULT: "#ff6b35", // orange-500
          50: "#fff7ed", // orange-50
          100: "#ffedd5", // orange-100
          500: "#ff6b35", // custom-orange
          600: "#ea580c", // orange-600
          700: "#c2410c", // orange-700
        },
        error: {
          DEFAULT: "#dc3545", // red-600
          50: "#fef2f2", // red-50
          100: "#fee2e2", // red-100
          500: "#ef4444", // red-500
          600: "#dc3545", // custom-red
          700: "#b91c1c", // red-700
        },
        // Border Colors
        border: {
          DEFAULT: "#e9ecef", // gray-200
          focus: "#ad1f37", // primary
        },
      },
      fontFamily: {
        headline: ['Playfair Display', 'serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        cta: ['Montserrat', 'sans-serif'],
        accent: ['Lora', 'serif'],
      },
      boxShadow: {
        'cta': '0 4px 12px rgba(173, 31, 55, 0.15)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 8px 16px rgba(0, 0, 0, 0.1)',
        'light': '0 1px 4px rgba(0, 0, 0, 0.05)',
        'elevated': '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        '250': '250ms',
      },
      transitionTimingFunction: {
        'in-out': 'ease-in-out',
      },
      animation: {
        'slide-in': 'slideIn 300ms ease-in-out',
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}