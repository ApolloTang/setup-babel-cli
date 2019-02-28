module.exports = api => {
  api.cache(true);
  const presets = [
    [
      "@babel/preset-env",
      {
        "targets": {
          "chrome": "58",
          "ie": "11"
        },
        "modules": "amd"
      }
    ]
  ]

  return {
    presets
  }
}
