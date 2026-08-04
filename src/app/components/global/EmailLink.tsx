// ─── Email link protegido contra bots/scrapers ────────────────────────────────
// La dirección se guarda codificada en base64 para que no aparezca como texto
// plano ni en el HTML ni en el bundle JS, y se decodifica en tiempo de render.

const ENCODED_MAILBOX = "aW5mb0BqYWNpZGkuY29t"; // info@jacidi.com

function decodeMailbox() {
  return atob(ENCODED_MAILBOX);
}

export function EmailLink({ className, style }: { className?: string; style?: React.CSSProperties }) {
  const email = decodeMailbox();
  return (
    <a href={`mailto:${email}`} className={className} style={style}>
      {email}
    </a>
  );
}
