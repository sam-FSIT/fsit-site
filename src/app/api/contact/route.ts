import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const MAX = { name: 100, email: 200, message: 5000 }

/** Neutralise le HTML : ce que le visiteur saisit est affiché comme du texte. */
function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Champ piège rempli : c'est un robot. On répond « succès » sans rien envoyer.
    if (typeof body?.website === 'string' && body.website !== '') {
      return NextResponse.json({ success: true })
    }

    const { name, email, message } = body ?? {}

    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string' ||
        !name.trim() || !email.trim() || !message.trim()) {
      return NextResponse.json({ error: 'Tous les champs sont requis.' }, { status: 400 })
    }

    if (name.length > MAX.name || email.length > MAX.email || message.length > MAX.message) {
      return NextResponse.json({ error: 'Un des champs est trop long.' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Adresse email invalide.' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'noreply@fullstack-it.fr'
    const contactEmail = process.env.CONTACT_EMAIL || 'contact@fullstack-it.fr'
    if (!apiKey) {
      console.error('[contact] RESEND_API_KEY absente')
      return NextResponse.json({ error: "Erreur lors de l'envoi de l'email." }, { status: 500 })
    }

    const resend = new Resend(apiKey)
    // Pas de saut de ligne dans l'objet : empêche l'injection d'en-têtes.
    const nomPourObjet = name.replace(/[\r\n]+/g, ' ').trim()

    const { error } = await resend.emails.send({
      from: `FULLSTACK-IT Contact <${fromEmail}>`,
      to: contactEmail,
      replyTo: email.trim(),
      subject: `[Contact] Nouveau message de ${nomPourObjet}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5; border-radius: 8px;">
          <h2 style="color: #0066CC; margin-bottom: 20px;">Nouveau message via le formulaire de contact</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #333; width: 100px;">Nom :</td>
              <td style="padding: 8px; color: #555;">${esc(name)}</td>
            </tr>
            <tr style="background: #fff;">
              <td style="padding: 8px; font-weight: bold; color: #333;">Email :</td>
              <td style="padding: 8px; color: #555;">${esc(email)}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #333; vertical-align: top;">Message :</td>
              <td style="padding: 8px; color: #555; white-space: pre-wrap;">${esc(message)}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #999;">Ce message a été envoyé depuis le formulaire de contact de fullstack-it.fr</p>
        </div>
      `,
    })

    if (error) {
      console.error('[contact] erreur Resend :', error)
      return NextResponse.json({ error: "Erreur lors de l'envoi de l'email." }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[contact] erreur :', error)
    return NextResponse.json({ error: 'Une erreur est survenue. Veuillez réessayer.' }, { status: 500 })
  }
}
