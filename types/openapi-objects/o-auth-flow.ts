import SpecificationExtensions from "./specification-extension"

type OAuthFlowObject = {
    authorizationUrl?: string
    tokenUrl?: string
    refreshUrl?: string
    scopes?: Record<string, string>
} & SpecificationExtensions

export default OAuthFlowObject