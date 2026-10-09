export function Logo() {
  return (
    <div className="flex items-center justify-center gap-2.5 mb-10">
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#d4a832] to-amber-400 flex items-center justify-center shadow-sm">
        <span className="text-[#1a1a1a] font-bold text-sm">FS</span>
      </div>
      <span className="font-bold text-[#1a1a1a] text-xl tracking-tight">
        FULLSTACK<span className="text-[#d4a832]">-IT</span>
      </span>
    </div>
  )
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#dce4d4] rounded-2xl p-6">
      <h2 className="text-sm font-bold text-[#1a1a1a] uppercase tracking-wider mb-4 pb-2 border-b border-[#1a1a1a]/10">
        {title}
      </h2>
      <div className="space-y-2 text-sm text-[#1a1a1a]/75 leading-relaxed">{children}</div>
    </div>
  )
}

export function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-wrap gap-x-2">
      <span className="text-[#1a1a1a]/50 shrink-0">{label} :</span>
      <span className="text-[#1a1a1a]">{value}</span>
    </div>
  )
}

export function Retour() {
  return (
    <div className="mt-10 text-center">
      <a href="/" className="text-sm text-[#d4a832] hover:underline">
        ← Retour à l&apos;accueil
      </a>
    </div>
  )
}
