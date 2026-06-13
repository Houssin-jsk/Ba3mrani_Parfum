export function MenuIcon({ open = false }) {
  return (
    <span className={`menu-icon ${open ? "is-open" : ""}`} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

export function ArrowIcon() {
  return <ExternalLinkIcon />;
}

export function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14 5h5v5M19 5l-9 9M19 14v5H5V5h5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="17.4" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7.2 3.8 10 7.3 8.3 9.6c1.2 2.5 3.5 4.8 6.1 6.1l2.3-1.7 3.5 2.8c.3.3.4.7.2 1.1-.7 1.5-2.2 2.5-3.9 2.4C9.7 19.7 4.3 14.3 3.7 7.5c-.1-1.7.9-3.2 2.4-3.9.4-.2.8-.1 1.1.2Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m15 18-6-6 6-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m9 18 6-6-6-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10H8v3h2.6v8h3.1Z"
      />
    </svg>
  );
}

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2a9.83 9.83 0 0 0-8.45 14.84L2.05 22l5.3-1.49A9.94 9.94 0 1 0 12.04 2Zm5.78 13.87c-.25.71-1.48 1.36-2.04 1.42-.52.05-1.18.08-1.9-.15-.44-.14-1-.33-1.73-.65-3.04-1.31-5.02-4.37-5.17-4.57-.15-.2-1.24-1.65-1.24-3.15s.79-2.24 1.07-2.55c.28-.3.61-.38.81-.38h.59c.19.01.44-.07.69.53.25.6.84 2.05.91 2.2.08.15.13.33.03.53-.1.2-.15.33-.3.51-.15.18-.32.4-.46.54-.15.15-.3.31-.13.61.18.3.78 1.29 1.68 2.09 1.15 1.03 2.12 1.35 2.42 1.5.3.15.48.13.66-.08.18-.2.76-.89.96-1.19.2-.3.4-.25.68-.15.28.1 1.77.84 2.07.99.3.15.51.23.58.35.08.13.08.74-.17 1.46Z"
      />
    </svg>
  );
}
