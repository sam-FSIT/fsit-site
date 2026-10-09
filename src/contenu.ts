/**
 * Contenu du site, repris tel quel de la vitrine qui était servie par FollowPro
 * (export de la table site_config du 09/10/2026).
 *
 * Volontairement absents : coordonnées bancaires et modèles d'e-mails du portail,
 * qui ne concernent pas ce site.
 */

export const contenu = {
  hero: {
    badge: 'Conseil & Administration IT',
    tagline: "L'informaticien des artisans et des PME.",
    description:
      'Expertise en infrastructure serveur, infrastructure réseau, Microsoft 365 & Cloud, et support informatique. Developing your IT.',
    cta1: { texte: 'Nous contacter', lien: '#contact' },
    cta2: { texte: 'Découvrir nos services', lien: '#services' },
  },

  services: {
    titre: 'Une expertise IT complète et intégrée',
    description:
      "De la sécurisation de votre réseau à la migration cloud, nous prenons en charge l'intégralité de votre système d'information.",
    liste: [
      {
        titre: 'Infra & Réseau',
        description:
          "Conception, déploiement et administration de votre infrastructure réseau d'entreprise. De la sécurité périmétrique à la connectivité mobile.",
        points: [
          'Firewall & sécurité périmétrique',
          'VPN site-à-site et nomades',
          'VLAN & segmentation réseau',
          'WiFi entreprise (802.1X, WPA3)',
          'Serveurs (Windows Server, Linux)',
          'Virtualisation (VMware, Hyper-V)',
        ],
      },
      {
        titre: 'Microsoft 365 & Cloud',
        description:
          'Pilotez votre transformation digitale avec les solutions Microsoft. Licences, migration, sécurité et gestion des identités dans le cloud.',
        points: [
          'Gestion des licences Microsoft 365',
          'Migration Exchange → Exchange Online',
          'Intune & gestion des appareils (MDM)',
          'Sécurité & conformité Microsoft',
        ],
      },
      {
        titre: 'Support & Maintenance',
        description:
          "Un interlocuteur réactif et des contrats de maintenance sur mesure pour garantir la disponibilité et la performance de votre système d'information.",
        points: [
          'Contrats de maintenance',
          'Helpdesk utilisateurs',
          'Infogérance complète du SI',
          'Supervision & monitoring',
          'Sauvegarde',
          'Audit et optimisation SI',
        ],
      },
    ],
  },

  about: {
    titre: 'Un partenaire IT de confiance',
    paragraphes: [
      "FULLST4CK-IT est votre informaticien de proximité, spécialisé dans l'accompagnement des artisans et des PME. Nous intervenons sur l'ensemble de votre système d'information avec réactivité et pédagogie.",
      "De la mise en place de votre réseau à la gestion de vos postes de travail, en passant par la téléphonie et la migration cloud Microsoft 365 — nous gérons votre IT pour que vous puissiez vous concentrer sur votre métier.",
      'Notre approche ? Simple : comprendre votre activité pour vous proposer des solutions adaptées, sans jargon inutile.',
    ],
    zone: 'Alsace & Grand Est — interventions sur site + télémaintenance partout en Alsace',
    valeurs: [
      {
        titre: 'Fiabilité',
        description:
          'Nous construisons des infrastructures stables et sécurisées, avec des contrats de service clairs.',
      },
      {
        titre: 'Réactivité',
        description:
          "Un interlocuteur disponible et des interventions rapides pour minimiser l'impact sur votre activité.",
      },
      {
        titre: 'Expertise',
        description: 'Nous investissons continuellement dans notre montée en compétences.',
      },
      {
        titre: 'Proximité',
        description:
          'Une relation de confiance sur le long terme. Nous devenons un véritable partenaire IT de votre entreprise.',
      },
    ],
  },

  contact: {
    email: 'contact@fullstack-it.fr',
    telephone: '06 82 82 84 83',
    telephoneHref: 'tel:+33682828483',
    adresse: '12 rue des Entrepreneurs, 67270 Wilwisheim',
  },

  /**
   * Mentions légales. Données publiques d'immatriculation.
   * La forme juridique n'est pas dans l'export : à ajouter quand elle sera confirmée.
   */
  entreprise: {
    nom: 'FULLSTACK-IT',
    responsable: 'Samuel Mathié',
    siret: '988 535 043 00018',
    rcs: 'Strasbourg 988 535 043',
    capital: '3 000 €',
    tva: 'FR85 988 535 043',
    ape: '6202A',
  },

  /**
   * Réseaux sociaux du pied de page.
   * Vide tant que les adresses (table site_links) n'ont pas été fournies : rien d'inventé.
   * `icone` : github, linkedin, instagram, facebook, twitter, youtube.
   */
  liens: [] as { label: string; url: string; icone: string }[],
}
