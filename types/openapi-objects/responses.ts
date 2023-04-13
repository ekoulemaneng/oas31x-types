import HTTPStatusCode from "./http-status-code"
import ReferenceObject from "./reference"
import ResponseObject from "./response"
import SpecificationExtensions from "./specification-extension"

type ResponsesObject = {
    default: ResponseObject | ReferenceObject
} & SpecificationExtensions & Record<HTTPStatusCode, ResponseObject | ReferenceObject>

export default ResponsesObject