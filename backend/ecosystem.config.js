module.exports = {
  apps: [
    {
      name: "ChatApp",
      script: "index.js",
      args: "run dev",
      env: {
        NODE_ENV: "development",
        ENV_VAR1: "environment-variable",
      },
    },
  ],
};
