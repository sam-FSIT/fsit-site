import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis.' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide.' },
        { status: 400 }
      )
    }

    const contactEmail = process.env.CONTACT_EMAIL || 'contact@fullstack-it.fr'
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'FULLSTACK-IT Contact <noreply@fullstack-it.fr>',
      to: contactEmail,
      reply_to: email,
      subject: `[Contact] Nouveau message de ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f5f5f5; border-radius: 8px;">
          <h2 style="color: #0066CC; margin-bottom: 20px;">Nouveau message via le formulaire de contact</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #333; width: 100px;">Nom :</td>
              <td style="padding: 8px; color: #555;">${name}</td>
            </tr>
            <tr style="background: #fff;">
              <td style="padding: 8px; font-weight: bold; color: #333;">Email :</td>
              <td style="padding: 8px; color: #555;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #333; vertical-align: top;">Message :</td>
              <td style="padding: 8px; color: #555; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #999;">Ce message a été envoyé depuis le formulaire de contact de fullstack-it.fr</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}
