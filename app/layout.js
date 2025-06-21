import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { LanguageProvider } from '../lib/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  icons: {
    icon: '/favicon.svg',
  },
  title: 'MealMate AI - Your Personal AI-Powered Meal Planner',
  description: 'Transform your eating habits with personalized meal plans, nutrition tracking, and smart shopping lists - all powered by AI',
  keywords: 'meal planning, nutrition tracking, AI meal planner, diet app, healthy eating, recipe app',
  openGraph: {
    title: 'MealMate AI - Your Personal AI-Powered Meal Planner',
    description: 'Transform your eating habits with personalized meal plans, nutrition tracking, and smart shopping lists',
    images: ['/og-image.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MealMate AI - Your Personal AI-Powered Meal Planner',
    description: 'Transform your eating habits with personalized meal plans',
    images: ['/og-image.svg'],
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}