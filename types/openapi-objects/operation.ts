import CallbackObject from "./callback"
import ExternalDocumentationObject from "./external-documentation"
import ParameterObject from "./parameter"
import ReferenceObject from "./reference"
import RequestBodyObject from "./request-body"
import ResponsesObject from "./responses"
import SecurityRequirementObject from "./security-requirement"
import ServerObject from "./server"
import SpecificationExtensions from "./specification-extension"

type OperationObject = {
    tags?: Array<string>
    summary?: string
    description?: string
    externalDocs?: ExternalDocumentationObject
    operationId?: string
    parameters?: ParameterObject
    requestBody?: RequestBodyObject
    responses?: ResponsesObject
    callbacks?: Record<string, CallbackObject | ReferenceObject>
    deprecated?: boolean
    security?: Array<SecurityRequirementObject>
    servers?: Array<ServerObject>
} & SpecificationExtensions

export default OperationObject