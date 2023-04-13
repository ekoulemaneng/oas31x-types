import OAuthFlowObject from "./o-auth-flow"
import SpecificationExtensions from "./specification-extension"

type OAuthFlowsObject = {
    implicit?: OAuthFlowObject
    password?: OAuthFlowObject
    clientCredentials?: OAuthFlowObject
    authorizationCode?: OAuthFlowObject
} & SpecificationExtensions

export default OAuthFlowsObject