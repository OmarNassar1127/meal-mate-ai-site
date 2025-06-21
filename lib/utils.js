export const getAssetPath = (path) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/meal-mat-ai-site' : '';
  return `${basePath}${path}`;
};