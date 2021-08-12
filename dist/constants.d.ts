/**
 * Global prefix used for all GraphQL types and, where necessary, fields.
 */
export declare const GLOBAL_TYPE_PREFIX = "Prismic";
/**
 * Custom type fields that are included alongside other fields in the JSON
 * schema, but are not included in the API response for a document's `data`
 * field.
 *
 * Fields in this list are moved from the `data` GraphQL field to the root.
 */
export declare const PRISMIC_API_NON_DATA_FIELDS: string[];
/**
 * Default endpoint used to fetch custom type JSON schemas from Prismic's
 * Custom Type API.
 *
 * @see https://prismic.io/docs/technologies/custom-types-api
 */
export declare const DEFAULT_CUSTOM_TYPES_API_ENDPOINT = "https://customtypes.prismic.io/customtypes";
/**
 * Default Imgix URL parameters for `gatsby-plugin-image` fields.
 *
 * These defaults provide a good balance between image quality and filesize.
 *
 * @see https://docs.imgix.com/apis/rendering
 */
export declare const DEFAULT_IMGIX_PARAMS: {
    readonly auto: "compress,format";
    readonly fit: "max";
    readonly q: 50;
};
/**
 * Default Imgix URL parameters for `gatsby-plugin-image` placeholder images.
 *
 * These defaults provide a good balance between image quality and filesize.
 * They are merged with the `imageImgixParams` plugin option.
 *
 * @see https://docs.imgix.com/apis/rendering
 */
export declare const DEFAULT_PLACEHOLDER_IMGIX_PARAMS: {
    readonly w: 100;
    readonly blur: 15;
};
/**
 * Default Prismic language option used when fetching documents. The current
 * default fetches all languages.
 *
 * @see https://prismic.io/docs/technologies/query-by-language-rest-api
 */
export declare const DEFAULT_LANG = "*";
/**
 * Format used for all plugin reporting. Includes the plugin's name and the
 * instance's repository name (helpful when multiple repositories are
 * configured).
 */
export declare const REPORTER_TEMPLATE = "gatsby-source-prismic(%s) - %s";
/**
 * Root node field used to compare static data with preview data. If values are
 * equal, the preview node can be treated as an updated version of the static
 * node.
 *
 * This is an internal-use-only field used by `gatsby-plugin-prismic-previews`.
 */
export declare const PREVIEWABLE_NODE_ID_FIELD = "_previewable";
/**
 * Message displayed to the user when a webhook's secret does not match the
 * secret configured in the site's `gatsby-config.js`.
 */
export declare const WEBHOOK_SECRET_MISMATCH_MSG = "A webhook was received, but the webhook secret did not match the webhook secret provided in the plugin options. If this is unexpected, verify that the `webhookSecret` plugin option matches the webhook secret in your Prismic repository.";
/**
 * Message displayed to the user when a `test-trigger` webhook is received.
 */
export declare const WEBHOOK_TEST_TRIGGER_SUCCESS_MSG = "Success! Received a test trigger webhook. When changes to your content are saved, Gatsby will automatically fetch the changes.";
/**
 * Message displayed to the user when a missing custom type schema is detected.
 */
export declare const MISSING_SCHEMAS_MSG = "JSON schemas for all custom types are required";
/**
 * Format used to inform the user of a missing schema.
 */
export declare const MISSING_SCHEMA_MSG = "JSON schema for \"%s\" is missing";
