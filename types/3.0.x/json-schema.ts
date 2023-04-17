import { Schema } from "./index"
import Format from "../common/formats"

type JSONSchema = {
    $ref: string
    type: 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object'
    title: string
    description: string
    pattern: string
    format: Format
    required: Array<string>
    enum: Array<any>
    minimum: number
    maximum: number
    exclusiveMinimum: number
    exclusiveMaximum: number
    multipleOf: number
    minLength: number
    maxLength: number
    minItems: number
    maxItems: number
    uniqueItems: boolean
    minProperties: number
    maxProperties: number
    items: Schema
    properties: Record<string, Schema>
    additionalProperties: boolean | Schema
    default: any
    allOf: Array<Schema>
    oneOf: Array<Schema>
    anyOf: Array<Schema>
    not: Schema
    deprecated: boolean
    nullable: boolean
    readOnly: boolean
    writeOnly: boolean
}

export default JSONSchema