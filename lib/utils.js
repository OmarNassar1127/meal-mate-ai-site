export const getAssetPath = (path) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/meal-mate-ai-site' : '';
  return `${basePath}${path}`;
};