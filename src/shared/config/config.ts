export default () => ({
  port: parseInt(process.env.PORT) || 3340,
  apiKey: process.env.API_KEY || "",
});
