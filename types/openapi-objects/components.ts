import ExampleObject from "./example"
import HeaderObject from "./header"
import LinkObject from "./link"
import ParameterObject from "./parameter"
import ReferenceObject from "./reference"
import RequestBodyObject from "./request-body"
import ResponseObject from "./response"
import SchemaObject from "./schema"
import SecuritySchemeObject from "./security-scheme"
import CallbackObject from "./callback"
import SpecificationExtensions from "./specification-extension"
import PathItemObject from "./path-item"

type ComponentsObject = {
    schemas?: Record<string, SchemaObject>
    responses?: Record<string, ResponseObject | ReferenceObject>
    parameters?: Record<string, ParameterObject | ReferenceObject>
    examples?: Record<string, ExampleObject | ReferenceObject>
    requestBodies?: Record<string, RequestBodyObject | ReferenceObject>
    headers?: Record<string, HeaderObject | ReferenceObject>
    securitySchemes?: Record<string, SecuritySchemeObject | ReferenceObject>
    links?: Record<string, LinkObject | ReferenceObject>
    callbacks?: Record<string, CallbackObject | ReferenceObject>
    pathItems?: Record<string, PathItemObject | ReferenceObject>
} & SpecificationExtensions

export default ComponentsObject