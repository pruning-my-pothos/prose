const base = import.meta.env.BASE_URL || '/';

export function withBase(path: string) {
  if (!path.startsWith('/')) {
    path = '/' + path;
  }
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  return `${normalizedBase}${path}`;
}
