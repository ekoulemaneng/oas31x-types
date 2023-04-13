import MediaTypeObject from "./media-type"
import SpecificationExtensions from "./specification-extension"

type RequestBodyObject = {
    description?: string
    content: Record<string, MediaTypeObject>
    required?: boolean
} & SpecificationExtensions

export default RequestBodyObject