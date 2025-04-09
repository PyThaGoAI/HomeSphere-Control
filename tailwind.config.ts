
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				cosmic: {
					DEFAULT: '#0A1428', // Cosmic black
					blue: {
						DEFAULT: '#1A2A44', // Midnight blue
						light: '#2A3A66' // Lighter midnight blue
					},
					amber: '#FFAA00', // Amber accent
					teal: '#00E5E5', // Teal accent
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'orbit': {
					'0%': { transform: 'rotate(0deg) translateX(70px) rotate(0deg)' },
					'100%': { transform: 'rotate(360deg) translateX(70px) rotate(-360deg)' }
				},
				'orbit-reverse': {
					'0%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
					'100%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						boxShadow: '0 0 10px 2px rgba(0, 229, 229, 0.7)'
					},
					'50%': { 
						opacity: '0.8',
						boxShadow: '0 0 20px 4px rgba(0, 229, 229, 0.9)'
					}
				},
				'pulse-amber': {
					'0%, 100%': { 
						opacity: '1',
						boxShadow: '0 0 10px 2px rgba(255, 170, 0, 0.7)'
					},
					'50%': { 
						opacity: '0.8',
						boxShadow: '0 0 20px 4px rgba(255, 170, 0, 0.9)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'ripple': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0.7'
					},
					'50%': {
						transform: 'scale(1)',
						opacity: '1'
					},
					'100%': {
						transform: 'scale(1.05)',
						opacity: '0'
					}
				},
				'meteor': {
					'0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
					'70%': { opacity: '1' },
					'100%': { transform: 'rotate(215deg) translateX(-500px)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'orbit': 'orbit 20s linear infinite',
				'orbit-reverse': 'orbit-reverse 30s linear infinite',
				'pulse-glow': 'pulse-glow 2s infinite',
				'pulse-amber': 'pulse-amber 2s infinite',
				'float': 'float 6s ease-in-out infinite',
				'ripple': 'ripple 1.5s ease-out',
				'meteor': 'meteor 5s linear infinite'
			},
			fontFamily: {
				orbitron: ['Orbitron', 'sans-serif'],
				exo: ['Exo', 'sans-serif']
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
