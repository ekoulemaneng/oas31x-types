import OperationObject from './operation'
import ParameterObject from './parameter'
import ReferenceObject from './reference'
import ServerObject from './server'

type PathItemObject = {
    $ref?: string
    summary?: string
    description?: string
    get?: OperationObject
    put?: OperationObject
    post?: OperationObject
    delete?: OperationObject
    options?: OperationObject
    head?: OperationObject
    patch?: OperationObject
    trace?: OperationObject
    servers?: Array<ServerObject>
    parameters?: Array<ParameterObject | ReferenceObject>
}

export default PathItemObject