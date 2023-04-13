import ServerObject from './server'
import SpecificationExtensions from './specification-extension'

type LinkObject = {
    operationRef?: string
    operationId?: string
    parameters?: Record<string, any | string>
    requestBody?: any | string
    description?: string
    server?: ServerObject
} & SpecificationExtensions

export default LinkObject