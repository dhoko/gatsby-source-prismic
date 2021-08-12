var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/index.ts
__export(exports, {
  DEFAULT_CUSTOM_TYPES_API_ENDPOINT: () => DEFAULT_CUSTOM_TYPES_API_ENDPOINT,
  DEFAULT_IMGIX_PARAMS: () => DEFAULT_IMGIX_PARAMS,
  DEFAULT_LANG: () => DEFAULT_LANG,
  DEFAULT_PLACEHOLDER_IMGIX_PARAMS: () => DEFAULT_PLACEHOLDER_IMGIX_PARAMS,
  GLOBAL_TYPE_PREFIX: () => GLOBAL_TYPE_PREFIX,
  MISSING_SCHEMAS_MSG: () => MISSING_SCHEMAS_MSG,
  MISSING_SCHEMA_MSG: () => MISSING_SCHEMA_MSG,
  PREVIEWABLE_NODE_ID_FIELD: () => PREVIEWABLE_NODE_ID_FIELD,
  PRISMIC_API_NON_DATA_FIELDS: () => PRISMIC_API_NON_DATA_FIELDS,
  PrismicSpecialType: () => PrismicSpecialType,
  PrismicWebhookType: () => PrismicWebhookType,
  REPORTER_TEMPLATE: () => REPORTER_TEMPLATE,
  WEBHOOK_SECRET_MISMATCH_MSG: () => WEBHOOK_SECRET_MISMATCH_MSG,
  WEBHOOK_TEST_TRIGGER_SUCCESS_MSG: () => WEBHOOK_TEST_TRIGGER_SUCCESS_MSG
});

// src/types.ts
var PrismicSpecialType;
(function(PrismicSpecialType2) {
  PrismicSpecialType2["Document"] = "Document";
  PrismicSpecialType2["DocumentData"] = "DocumentData";
  PrismicSpecialType2["Unknown"] = "Unknown";
})(PrismicSpecialType || (PrismicSpecialType = {}));
var PrismicWebhookType;
(function(PrismicWebhookType2) {
  PrismicWebhookType2["APIUpdate"] = "api-update";
  PrismicWebhookType2["TestTrigger"] = "test-trigger";
})(PrismicWebhookType || (PrismicWebhookType = {}));

// src/constants.ts
var GLOBAL_TYPE_PREFIX = "Prismic";
var PRISMIC_API_NON_DATA_FIELDS = ["uid"];
var DEFAULT_CUSTOM_TYPES_API_ENDPOINT = "https://customtypes.prismic.io/customtypes";
var DEFAULT_IMGIX_PARAMS = {
  auto: "compress,format",
  fit: "max",
  q: 50
};
var DEFAULT_PLACEHOLDER_IMGIX_PARAMS = {
  w: 100,
  blur: 15
};
var DEFAULT_LANG = "*";
var REPORTER_TEMPLATE = `gatsby-source-prismic(%s) - %s`;
var PREVIEWABLE_NODE_ID_FIELD = "_previewable";
var WEBHOOK_SECRET_MISMATCH_MSG = "A webhook was received, but the webhook secret did not match the webhook secret provided in the plugin options. If this is unexpected, verify that the `webhookSecret` plugin option matches the webhook secret in your Prismic repository.";
var WEBHOOK_TEST_TRIGGER_SUCCESS_MSG = "Success! Received a test trigger webhook. When changes to your content are saved, Gatsby will automatically fetch the changes.";
var MISSING_SCHEMAS_MSG = "JSON schemas for all custom types are required";
var MISSING_SCHEMA_MSG = 'JSON schema for "%s" is missing';
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DEFAULT_CUSTOM_TYPES_API_ENDPOINT,
  DEFAULT_IMGIX_PARAMS,
  DEFAULT_LANG,
  DEFAULT_PLACEHOLDER_IMGIX_PARAMS,
  GLOBAL_TYPE_PREFIX,
  MISSING_SCHEMAS_MSG,
  MISSING_SCHEMA_MSG,
  PREVIEWABLE_NODE_ID_FIELD,
  PRISMIC_API_NON_DATA_FIELDS,
  PrismicSpecialType,
  PrismicWebhookType,
  REPORTER_TEMPLATE,
  WEBHOOK_SECRET_MISMATCH_MSG,
  WEBHOOK_TEST_TRIGGER_SUCCESS_MSG
});
//# sourceMappingURL=index.js.map
