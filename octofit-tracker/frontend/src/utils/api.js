const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
export const codespaceApiBase = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

export const buildApiUrl = (resource) => `${codespaceApiBase}/api/${resource}/`;

export function normalizeApiResponse(payload) {
  if (Array.isArray(payload)) return payload;
  if (!payload) return [];
  if (Array.isArray(payload.data)) return payload.data;
  if (Array.isArray(payload.results)) return payload.results;
  if (Array.isArray(payload.items)) return payload.items;
  if (payload.data) return [payload.data];
  if (payload.results) return [payload.results];
  if (payload.items) return [payload.items];
  return [payload];
}
