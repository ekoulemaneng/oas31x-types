import ServerVariableObject from "./server-variable"

type ServerObject = {
    url: string
    description?: string
    variables?: Record<string, ServerVariableObject>
}

export default ServerObject