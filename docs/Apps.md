# List Apps (/apps/Apps_list)

List all apps with the ability to filter by organization slug.


`GET /apps`

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `org_slug` | query | `string` | Yes | The org slug, or 'personal', to filter apps |
| `app_role` | query | `string` | No | Filter apps by role |

## Responses

| Status | Description | Schema |
| --- | --- | --- |
| `200` | OK | `ListAppsResponse` |

The full machine-readable OpenAPI spec is available at /openapi.json.
