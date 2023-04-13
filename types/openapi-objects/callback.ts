import PathItemObject from "./path-item"
import ReferenceObject from "./reference"
import SpecificationExtensions from "./specification-extension"

type CallbackObject = Record<string, PathItemObject | ReferenceObject> & SpecificationExtensions
export default CallbackObject