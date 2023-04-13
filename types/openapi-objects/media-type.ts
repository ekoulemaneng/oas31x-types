import EncodingObject from "./encoding"
import ExampleObject from "./example"
import ReferenceObject from "./reference"
import SchemaObject from "./schema"
import SpecificationExtensions from "./specification-extension"

type MediaTypeObject = {
    schema?: SchemaObject
    example?: any
    examples?: Record<string, ExampleObject | ReferenceObject>
    encoding?: Record<string, EncodingObject>
} & SpecificationExtensions

export default MediaTypeObject