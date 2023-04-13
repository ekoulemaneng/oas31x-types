import ExampleObject from "./example"
import MediaTypeObject from "./media-type"
import ReferenceObject from "./reference"
import SchemaObject from "./schema"

type ParameterObject = {
    name: string
    in: 'path' | 'query' | 'headers' | 'cookie'
    description?: string
    required?: boolean
    deprecated?: boolean
    allowEmptyValue?: boolean
    style?: 'matrix' | 'label' | 'form' | 'simple' | 'spaceDelimited' | 'pipeDelimited' | 'deepObject'
    explode?: boolean
    allowReserved?: boolean
    schema?: SchemaObject
    example?: any
    examples?: Record<string, ExampleObject | ReferenceObject>
    content?: Record<string, MediaTypeObject>
}

export default ParameterObject