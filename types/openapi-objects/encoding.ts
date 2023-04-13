import SpecificationExtensions from "./specification-extension"

type EncodingObject = {
    contentType?: string
    headers?: Record<string, any>
    style?: string
    explode?: boolean
    allowReserved?: boolean
} & SpecificationExtensions

export default EncodingObject