import { Logo, Retour } from '@/components/Legal'

export const metadata = {
  title: 'CGV — FULLSTACK-IT',
}

export default function CGV() {
  return (
    <div className="min-h-screen bg-[#e8ede0] pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="max-w-md w-full text-center">
        <Logo />

        <h1 className="text-3xl font-extrabold text-[#1a1a1a] mb-8">Conditions générales de vente</h1>

        <div className="bg-[#dce4d4] rounded-2xl p-8">
          <div className="w-12 h-12 rounded-xl bg-[#d4a832]/10 flex items-center justify-center mx-auto mb-5">
            <svg className="w-6 h-6 text-[#d4a832]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <p className="text-[#1a1a1a] font-medium mb-2">Nos CGV sont en cours de rédaction.</p>
          <p className="text-[#1a1a1a]/65 text-sm">
            Pour toute question, contactez-nous à{' '}
            <a href="mailto:samuel.mathie@fullstack-it.fr" className="text-[#d4a832] hover:underline">
              samuel.mathie@fullstack-it.fr
            </a>
          </p>
        </div>

        <Retour />
      </div>
    </div>
  )
}
