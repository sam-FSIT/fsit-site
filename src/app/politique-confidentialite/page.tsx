import { contenu } from '@/contenu'
import { Logo, Section, Retour } from '@/components/Legal'

export const metadata = {
  title: 'Politique de confidentialité',
}

export default function PolitiqueConfidentialite() {
  const { contact } = contenu

  return (
    <div className="min-h-screen bg-[#e8ede0] pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Logo />

        <h1 className="text-3xl font-extrabold text-[#1a1a1a] text-center mb-10">
          Politique de confidentialité
        </h1>

        <div className="space-y-4">
          <Section title="Données collectées">
            <p>
              Les seules données personnelles collectées sur ce site le sont via le formulaire de contact.
              Il s&apos;agit de votre <strong className="text-[#1a1a1a]">nom</strong>, votre{' '}
              <strong className="text-[#1a1a1a]">adresse email</strong> et le{' '}
              <strong className="text-[#1a1a1a]">contenu de votre message</strong>.
            </p>
            <p>
              Ces données sont utilisées exclusivement pour répondre à votre demande. Elles ne sont
              transmises à aucun tiers et ne font l&apos;objet d&apos;aucun traitement commercial.
            </p>
          </Section>

          <Section title="Durée de conservation">
            <p>
              Vos données sont conservées pour une durée maximale de{' '}
              <strong className="text-[#1a1a1a]">3 ans</strong> à compter de votre prise de contact,
              conformément aux recommandations de la CNIL.
            </p>
          </Section>

          <Section title="Cookies">
            <p>
              Ce site n&apos;utilise <strong className="text-[#1a1a1a]">aucun cookie de tracking</strong> ni
              de solution d&apos;analyse d&apos;audience. Aucune donnée de navigation n&apos;est collectée à
              des fins publicitaires ou statistiques.
            </p>
          </Section>

          <Section title="Vos droits (RGPD)">
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un
              droit d&apos;accès, de rectification, d&apos;effacement et de portabilité de vos données
              personnelles.
            </p>
            <p>
              Pour exercer ces droits ou pour toute question relative à la gestion de vos données,
              contactez-nous à :{' '}
              <a href="mailto:samuel.mathie@fullstack-it.fr" className="text-[#d4a832] hover:underline">
                samuel.mathie@fullstack-it.fr
              </a>
            </p>
          </Section>

          <Section title="Responsable du traitement">
            <p>
              FULLSTACK-IT — Samuel Mathié
              <br />
              {contact.adresse}
              <br />
              samuel.mathie@fullstack-it.fr
            </p>
          </Section>
        </div>

        <Retour />
      </div>
    </div>
  )
}
