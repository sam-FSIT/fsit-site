import { contenu } from '@/contenu'
import { Logo, Section, Row, Retour } from '@/components/Legal'

export const metadata = {
  title: 'Mentions légales — FULLSTACK-IT',
}

export default function MentionsLegales() {
  const { entreprise: e, contact } = contenu

  return (
    <div className="min-h-screen bg-[#e8ede0] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Logo />

        <h1 className="text-3xl font-extrabold text-[#1a1a1a] text-center mb-10">Mentions légales</h1>

        <div className="space-y-4">
          <Section title="Éditeur du site">
            <Row label="Entreprise" value={e.nom} />
            <Row label="Responsable" value={e.responsable} />
            <Row label="Adresse" value={contact.adresse} />
            <Row label="Email" value="samuel.mathie@fullstack-it.fr" />
            <Row label="Téléphone" value={contact.telephone} />
            <Row label="SIRET" value={e.siret} />
            <Row label="RCS" value={e.rcs} />
            <Row label="Capital social" value={e.capital} />
            <Row label="N° TVA intracommunautaire" value={e.tva} />
            <Row label="Code APE" value={e.ape} />
          </Section>

          <Section title="Hébergeur">
            <Row label="Société" value="Vercel Inc." />
            <Row label="Adresse" value="340 Pine Street, San Francisco, CA 94104, États-Unis" />
            <Row label="Site" value="vercel.com" />
          </Section>

          <Section title="Propriété intellectuelle">
            <p>
              L&apos;ensemble du contenu de ce site (textes, images, graphismes, logo) est la propriété
              exclusive de FULLSTACK-IT et est protégé par les lois relatives à la propriété intellectuelle.
              Toute reproduction, même partielle, est interdite sans autorisation préalable.
            </p>
          </Section>

          <Section title="Limitation de responsabilité">
            <p>
              FULLSTACK-IT s&apos;efforce de maintenir les informations de ce site à jour et exactes.
              Cependant, nous ne saurions être tenus responsables des erreurs ou omissions éventuelles,
              ni de tout dommage résultant de l&apos;utilisation des informations présentées.
            </p>
          </Section>
        </div>

        <Retour />
      </div>
    </div>
  )
}
