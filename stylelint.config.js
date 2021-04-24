module.exports = {
    extends: ['stylelint-config-recommended'],
    rules: {
      "at-rule-no-unknown": [
        true,
        {
          ignoreAtRules: [
            "tailwind",
            'mixin',
            'define-mixin',
          ],
          ignore: ["consecutive-duplicates-with-different-values"],
        },
      ],
      "named-grid-areas-no-invalid": false,
      "declaration-block-trailing-semicolon": null,
      "no-descending-specificity": null,
      'at-rule-no-vendor-prefix': true,
    },
  };