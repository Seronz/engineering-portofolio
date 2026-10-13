import { Route, Routes } from 'react-router-dom'
import { LanguageProvider } from '@/i18n/LanguageProvider'
import { SiteLayout } from '@/components/SiteLayout'
import { HomePage } from '@/pages/HomePage'
import { ProjectsPage } from '@/pages/ProjectsPage'
import { NotesPage } from '@/pages/NotesPage'
import { AboutPage } from '@/pages/AboutPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="notes" element={<NotesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </LanguageProvider>
  )
}
