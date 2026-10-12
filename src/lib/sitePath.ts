const configuredBasePath = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/^\/+|\/+$/g, '');
const basePath = configuredBasePath ? `/${configuredBasePath}` : '';

/** Prefix root-relative asset and plain-anchor URLs for a subdirectory deployment. */
export function withBasePath(url: string): string {
    if (!basePath || !url.startsWith('/') || url.startsWith('//')) return url;

    if (
        url === basePath ||
        url.startsWith(`${basePath}/`) ||
        url.startsWith(`${basePath}?`) ||
        url.startsWith(`${basePath}#`)
    ) return url;

    return `${basePath}${url}`;
}
