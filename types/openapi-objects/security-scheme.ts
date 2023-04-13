import OAuthFlowsObject from "./o-auth-flows"
import SpecificationExtensions from "./specification-extension"

type SecuritySchemeObject = {
    type: "apiKey" | "http" | "mutualTLS" | "oauth2" | "openIdConnect"
    description?: string
    name?: string
    in?: "query" | "header" | "cookie"
    scheme?: 'Basic' | 'Bearer' | 'Digest' | 'HOBA' | 'Mutual' | 'Negotiate' | 'OAuth' | 'SCRAM-SHA-1' | 'SCRAM-SHA-256' | 'vapid'
    bearerFormat?: string
    flows?: OAuthFlowsObject
    openIdConnectUrl?: string
} & SpecificationExtensions

export default SecuritySchemeObject