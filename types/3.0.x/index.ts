import HTTPStatusCode from "../common/http-status-code"
import JSONSchema from "./json-schema"

type Openapi = '3.0.0' | '3.0.1' | '3.0.2' | '3.0.3'

export type Callback = Record<string, PathItem> & SpecificationExtensions

export type Components = {
    schemas?: Record<string, Schema | Reference>
    responses?: Record<string, Response | Reference>
    parameters?: Record<string, Parameter | Reference>
    examples?: Record<string, Example | Reference>
    requestBodies?: Record<string, RequestBody | Reference>
    headers?: Record<string, Header | Reference>
    securitySchemes?: Record<string, SecurityScheme | Reference>
    links?: Record<string, Link | Reference>
    callbacks?: Record<string, Callback | Reference>
} & SpecificationExtensions

export type Contact = {
    name?: string
    url?: string
    email?: string
} & SpecificationExtensions

export type Discriminator = {
    propertyName: string
    mapping?: Record<string, string>
} & SpecificationExtensions

export type OpenAPI = {
    openapi: Openapi
    info: Info
    servers?: Array<Server>
    paths: Paths
    components?: Components
    security?: Array<SecurityRequirement>
    tags?: Array<Tag>
    externalDocs?: ExternalDocumentation
} & SpecificationExtensions

export type Encoding = {
    contentType?: string
    headers?: Record<string, Header | Reference>
    style?: string
    explode?: boolean
    allowReserved?: boolean
} & SpecificationExtensions

export type Example = Reference | {
    summary?: string
    description?: string
    value?: any
    externalValue?: string
} & SpecificationExtensions

export type ExternalDocumentation = {
    description?: string
    url: string
} & SpecificationExtensions

export type Header = {
    description?: string
    required?: boolean
    deprecated?: boolean
    allowEmptyValue?: boolean
    style?: 'matrix' | 'label' | 'form' | 'simple' | 'spaceDelimited' | 'pipeDelimited' | 'deepObject'
    explode?: boolean
    allowReserved?: boolean
    schema?: Schema
    example?: any
    examples?: Record<string, Example | Reference>
    content?: Record<string, MediaType>
}

export type Info = {
    title: string
    description?: string
    termsOfService?: string
    contact?: Contact
    license?: License
    version: string
} & SpecificationExtensions

export type License = {
    name: string
    url?: string
} & SpecificationExtensions

export type Link = {
    operationRef?: string
    operationId?: string
    parameters?: Record<string, any | string>
    requestBody?: any | string
    description?: string
    server?: Server
} & SpecificationExtensions

export type MediaType = {
    schema?: Schema | Reference
    example?: any
    examples?: Record<string, Example | Reference>
    encoding?: Record<string, Encoding>
} & SpecificationExtensions

export type OAuthFlow = {
    authorizationUrl?: string
    tokenUrl?: string
    refreshUrl?: string
    scopes?: Record<string, string>
} & SpecificationExtensions

export type OAuthFlows = {
    implicit?: OAuthFlow
    password?: OAuthFlow
    clientCredentials?: OAuthFlow
    authorizationCode?: OAuthFlow
} & SpecificationExtensions

export type Operation = {
    tags?: Array<string>
    summary?: string
    description?: string
    externalDocs?: ExternalDocumentation
    operationId?: string
    parameters?: Array<Parameter | Reference>
    requestBody?: RequestBody | Reference
    responses?: Responses
    callbacks?: Record<string, Callback | Reference>
    deprecated?: boolean
    security?: Array<SecurityRequirement>
    servers?: Array<Server>
} & SpecificationExtensions

export type Parameter = {
    name: string
    in: 'path' | 'query' | 'header' | 'cookie'
    description?: string
    required?: boolean
    deprecated?: boolean
    allowEmptyValue?: boolean
    style?: 'matrix' | 'label' | 'form' | 'simple' | 'spaceDelimited' | 'pipeDelimited' | 'deepObject'
    explode?: boolean
    allowReserved?: boolean
    schema?: Schema | Reference
    example?: any
    examples?: Record<string, Example | Reference>
    content?: Record<string, MediaType>
}

export type PathItem = {
    $ref?: string
    summary?: string
    description?: string
    get?: Operation
    put?: Operation
    post?: Operation
    delete?: Operation
    options?: Operation
    head?: Operation
    patch?: Operation
    trace?: Operation
    servers?: Array<Server>
    parameters?: Array<Parameter | Reference>
} & SpecificationExtensions

export type Paths = Record<string, PathItem>

export type Reference = {
    $ref: string
}

export type RequestBody = {
    description?: string
    content: Record<string, MediaType>
    required?: boolean
} & SpecificationExtensions

export type Response = {
    description: string
    headers?: Record<string, Header | Reference>
    content?: Record<string, MediaType>
    links?: Record<string, Link>
} & SpecificationExtensions

export type Responses = {
    default?: Response | Reference
} & Partial<Record<HTTPStatusCode, Response | Reference>> & SpecificationExtensions

export type Schema = Partial<JSONSchema> & {
    discriminator?: Discriminator
    xml?: XML
    externalDocs?: ExternalDocumentation
    example?: any
} & SpecificationExtensions

export type SecurityRequirement = Record<string, Array<string>>

export type SecurityScheme = {
    type: "apiKey" | "http" | "mutualTLS" | "oauth2" | "openIdConnect"
    description?: string
    name?: string
    in?: "query" | "header" | "cookie"
    scheme?: 'basic' | 'bearer' | 'digest' | 'hoba' | 'mutual' | 'negotiate' | 'oauth' | 'scram-sha-1' | 'scram-sha-256' | 'vapid'
    bearerFormat?: string
    flows?: OAuthFlows
    openIdConnectUrl?: string
} & SpecificationExtensions

export type ServerVariable = {
    enum?: Array<string>
    default: string
    description?: string
} & SpecificationExtensions

export type Server = {
    url: string
    description?: string
    variables?: Record<string, ServerVariable>
} & SpecificationExtensions

export type SpecificationExtensions = Record<string, any>

export type Tag = {
    name: string
    description?: string
    externalDocs?: ExternalDocumentation
} & SpecificationExtensions

export type XML = {
    name?: string
    namespace?: string
    prefix?: string
    attribute?: boolean
    wrapped?: boolean
} & SpecificationExtensions

