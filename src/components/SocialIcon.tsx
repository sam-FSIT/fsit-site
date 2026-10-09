import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaXTwitter, FaYoutube, FaGlobe } from 'react-icons/fa6'

export default function SocialIcon({ icone, label, className }: { icone: string | null; label: string; className?: string }) {
  const cls = className ?? 'w-4 h-4'
  const key = (icone ?? label).toLowerCase()
  if (key.includes('github')) return <FaGithub className={cls} />
  if (key.includes('linkedin')) return <FaLinkedin className={cls} />
  if (key.includes('instagram')) return <FaInstagram className={cls} />
  if (key.includes('facebook')) return <FaFacebook className={cls} />
  if (key.includes('twitter') || key === 'x') return <FaXTwitter className={cls} />
  if (key.includes('youtube')) return <FaYoutube className={cls} />
  return <FaGlobe className={cls} />
}
