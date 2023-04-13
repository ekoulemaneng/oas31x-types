import HeaderObject from "./header"
import LinkObject from "./link"
import MediaTypeObject from "./media-type"
import ReferenceObject from "./reference"
import SpecificationExtensions from "./specification-extension"

type ResponseObject = {
    description: string
    headers?: Record<string, HeaderObject | ReferenceObject>
    content?: Record<string, MediaTypeObject>
    links?: Record<string, LinkObject>
} & SpecificationExtensions

export default ResponseObject