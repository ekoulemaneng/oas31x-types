import assert from 'assert'
import { Callback, Components, Contact, Discriminator, Encoding, Example, ExternalDocumentation,
         Header, Info, License, Link, MediaType, OAuthFlow, OAuthFlows, OpenAPI, Operation,
         Parameter, Paths, PathItem, Reference, RequestBody, Response, Responses,
         Schema, SecurityRequirement, SecurityScheme, Server, ServerVariable, SpecificationExtensions,
         Tag, XML } from '../types/3.1.x'

describe('Callback', () => {
    it('should match schema1', () => {
        // Setup
        const schema: Callback = {
            "{$request.query.queryUrl}": {
              "post": {
                "requestBody": {
                  "description": "Callback payload",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/SomePayload"
                      }
                    }
                  }
                },
                "responses": {
                  "200": {
                    "description": "callback successfully processed"
                  }
                }
              }
            }
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema2', () => {
        // Setup
        const schema: Callback =  {
            "http://notificationServer.com?transactionId={$request.body#/id}&email={$request.body#/email}": {
              "post": {
                "requestBody": {
                  "description": "Callback payload",
                  "content": {
                    "application/json": {
                      "schema": {
                        "$ref": "#/components/schemas/SomePayload"
                      }
                    }
                  }
                },
                "responses": {
                  "200": {
                    "description": "callback successfully processed"
                  }
                }
              }
            }
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('Components', () => {
    it('should match schema1', () => {
        // Setup
        const schema: Components = {
            "schemas": {
              "GeneralError": {
                "type": "object",
                "properties": {
                  "code": {
                    "type": "integer",
                    "format": "int32"
                  },
                  "message": {
                    "type": "string"
                  }
                }
              },
              "Category": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer",
                    "format": "int64"
                  },
                  "name": {
                    "type": "string"
                  }
                }
              },
              "Tag": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "integer",
                    "format": "int64"
                  },
                  "name": {
                    "type": "string"
                  }
                }
              }
            },
            "parameters": {
              "skipParam": {
                "name": "skip",
                "in": "query",
                "description": "number of items to skip",
                "required": true,
                "schema": {
                  "type": "integer",
                  "format": "int32"
                }
              },
              "limitParam": {
                "name": "limit",
                "in": "query",
                "description": "max records to return",
                "required": true,
                "schema" : {
                  "type": "integer",
                  "format": "int32"
                }
              }
            },
            "responses": {
              "NotFound": {
                "description": "Entity not found."
              },
              "IllegalInput": {
                "description": "Illegal input for operation."
              },
              "GeneralError": {
                "description": "General Error",
                "content": {
                  "application/json": {
                    "schema": {
                      "$ref": "#/components/schemas/GeneralError"
                    }
                  }
                }
              }
            },
            "securitySchemes": {
              "api_key": {
                "type": "apiKey",
                "name": "api_key",
                "in": "header"
              },
              "petstore_auth": {
                "type": "oauth2",
                "flows": {
                  "implicit": {
                    "authorizationUrl": "https://example.org/api/oauth/dialog",
                    "scopes": {
                      "write:pets": "modify pets in your account",
                      "read:pets": "read your pets"
                    }
                  }
                }
              }
            }
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('Contact', () => {
    it('should match schema1', () => {
        // Setup
        const schema: Contact = {
            "name": "API Support",
            "url": "https://www.example.com/support",
            "email": "support@example.com"
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('Discriminator', () => {
    it('should match schema1', () => {
        // Setup
        const schema: Discriminator = {
            "propertyName": "petType",
            "mapping": {
              "dog": "#/components/schemas/Dog",
              "monster": "https://gigantic-server.com/schemas/Monster/schema.json"
            }
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema2', () => {
        // Setup
        const schema: Discriminator = {
            "propertyName": "petType"
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema3', () => {
        // Setup
        const schema: Discriminator = {
            "propertyName": "petType"
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('Encoding', () => {
    it('should match schema1', () => {
        // Setup
        const schema: Encoding = {
            "contentType": "image/png, image/jpeg",
            "headers": {
              "X-Rate-Limit-Limit": {
                "description": "The number of allowed requests in the current period",
                "schema": {
                  "type": "integer"
                }
              }
            }
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('Example', () => {
    it('should match schema1', () => {
        // Setup
        const schema: Example = {
            "summary": "This is an example in XML",
            "externalValue": "https://example.org/examples/address-example.xml"
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema2', () => {
        // Setup
        const schema: Example = {
            "$ref": "#/components/examples/confirmation-success"
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('ExternalDocumentation', () => {
    it('should match schema1', () => {
        // Setup
        const schema: ExternalDocumentation = {
            "description": "Find more info here",
            "url": "https://example.com"
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('Header', () => {
    it('should match schema1', () => {
        // Setup
        const schema: Header = {
            "description": "The number of allowed requests in the current period",
            "schema": {
              "type": "integer"
            }
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('Info', () => {
    it('should match schema1', () => {
        // Setup
        const schema: Info = {
            "title": "Sample Pet Store App",
            "summary": "A pet store manager.",
            "description": "This is a sample server for a pet store.",
            "termsOfService": "https://example.com/terms/",
            "contact": {
              "name": "API Support",
              "url": "https://www.example.com/support",
              "email": "support@example.com"
            },
            "license": {
              "name": "Apache 2.0",
              "url": "https://www.apache.org/licenses/LICENSE-2.0.html"
            },
            "version": "1.0.1"
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('License', () => {
    it('should match schema1', () => {
        // Setup
        const schema: License = {
            "name": "Apache 2.0",
            "identifier": "Apache-2.0"
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('Link', () => {
    it('should match schema1', () => {
        // Setup
        const schema: Link = {
            "operationId": "getUserAddress",
            "parameters": {
              "userId": "$request.path.id"
            }
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('MediaType', () => {
    it('should match schema1', () => {
        // Setup
        const schema: MediaType = {
            "schema": {
                 "$ref": "#/components/schemas/Pet"
            },
            "examples": {
              "cat" : {
                "summary": "An example of a cat",
                "value": 
                  {
                    "name": "Fluffy",
                    "petType": "Cat",
                    "color": "White",
                    "gender": "male",
                    "breed": "Persian"
                  }
              },
              "dog": {
                "summary": "An example of a dog with a cat's name",
                "value" :  { 
                  "name": "Puma",
                  "petType": "Dog",
                  "color": "Black",
                  "gender": "Female",
                  "breed": "Mixed"
                }
              },
              "frog": {
                  "$ref": "#/components/examples/frog-example"
                }
              } 
        }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('OAuthFlow', () => {
    it('should match schema1', () => {
        // Setup
        const schema: OAuthFlow = {
            "authorizationUrl": "https://example.com/api/oauth/dialog",
            "scopes": {
              "write:pets": "modify pets in your account",
              "read:pets": "read your pets"
            }
        }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema2', () => {
        // Setup
        const schema: OAuthFlow = {
            "authorizationUrl": "https://example.com/api/oauth/dialog",
            "tokenUrl": "https://example.com/api/oauth/token",
            "scopes": {
              "write:pets": "modify pets in your account",
              "read:pets": "read your pets"
            }
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('OAuthFlows', () => {
    it('should match schema1', () => {
        // Setup
        const schema: OAuthFlows = {}
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('Operation', () => {
    it('should match schema1', () => {
        // Setup
        const schema: Operation = {
            "tags": [
              "pet"
            ],
            "summary": "Updates a pet in the store with form data",
            "operationId": "updatePetWithForm",
            "parameters": [
              {
                "name": "petId",
                "in": "path",
                "description": "ID of pet that needs to be updated",
                "required": true,
                "schema": {
                  "type": "string"
                }
              }
            ],
            "requestBody": {
              "content": {
                "application/x-www-form-urlencoded": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "name": { 
                        "description": "Updated name of the pet",
                        "type": "string"
                      },
                      "status": {
                        "description": "Updated status of the pet",
                        "type": "string"
                      }
                    },
                    "required": ["status"] 
                  }
                }
              }
            },
            "responses": {
              "200": {
                "description": "Pet updated.",
                "content": {
                  "application/json": {},
                  "application/xml": {}
                }
              },
              "405": {
                "description": "Method Not Allowed",
                "content": {
                  "application/json": {},
                  "application/xml": {}
                }
              }
            },
            "security": [
              {
                "petstore_auth": [
                  "write:pets",
                  "read:pets"
                ]
              }
            ]
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('Parameter', () => {
    it('should match schema1', () => {
        // Setup
        const schema: Parameter = {
            "name": "token",
            "in": "header",
            "description": "token to be passed as a header",
            "required": true,
            "schema": {
              "type": "array",
              "items": {
                "type": "integer",
                "format": "int64"
              }
            },
            "style": "simple"
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema2', () => {
        // Setup
        const schema: Parameter = {
            "name": "username",
            "in": "path",
            "description": "username to fetch",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema3', () => {
        // Setup
        const schema: Parameter = {
            "name": "id",
            "in": "query",
            "description": "ID of the object to fetch",
            "required": false,
            "schema": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "style": "form",
            "explode": true
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema4', () => {
        // Setup
        const schema: Parameter = {
            "in": "query",
            "name": "freeForm",
            "schema": {
              "type": "object",
              "additionalProperties": {
                "type": "integer"
              },
            },
            "style": "form"
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema5', () => {
        // Setup
        const schema: Parameter = {
            "in": "query",
            "name": "coordinates",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "required": [
                    "lat",
                    "long"
                  ],
                  "properties": {
                    "lat": {
                      "type": "number"
                    },
                    "long": {
                      "type": "number"
                    }
                  }
                }
              }
            }
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('Paths', () => {
    it('should match schema1', () => {
        // Setup
        const schema: Paths = {
            "/pets": {
              "get": {
                "description": "Returns all pets from the system that the user has access to",
                "responses": {
                  "200": {          
                    "description": "A list of pets.",
                    "content": {
                      "application/json": {
                        "schema": {
                          "type": "array",
                          "items": {
                            "$ref": "#/components/schemas/pet"
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('PathItem', () => {
    it('should match schema1', () => {
        // Setup
        const schema: PathItem = {
            "get": {
              "description": "Returns pets based on ID",
              "summary": "Find pets by ID",
              "operationId": "getPetsById",
              "responses": {
                "200": {
                  "description": "pet response",
                  "content": {
                    "*/*": {
                      "schema": {
                        "type": "array",
                        "items": {
                          "$ref": "#/components/schemas/Pet"
                        }
                      }
                    }
                  }
                },
                "default": {
                  "description": "error payload",
                  "content": {
                    "text/html": {
                      "schema": {
                        "$ref": "#/components/schemas/ErrorModel"
                      }
                    }
                  }
                }
              }
            },
            "parameters": [
              {
                "name": "id",
                "in": "path",
                "description": "ID of pet to use",
                "required": true,
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "style": "simple"
              }
            ]
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('Reference', () => {
    it('should match schema1', () => {
        // Setup
        const schema: Reference = {
            "$ref": "#/components/schemas/Pet"
        }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema2', () => {
        // Setup
        const schema: Reference = {
            "$ref": "Pet.json"
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('RequestBody', () => {
    it('should match schema1', () => {
        // Setup
        const schema: RequestBody = {
            "description": "user to add to the system",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                },
                "examples": {
                    "user" : {
                      "summary": "User Example", 
                      "externalValue": "http://foo.bar/examples/user-example.json"
                    } 
                  }
              },
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                },
                "examples": {
                    "user" : {
                      "summary": "User example in XML",
                      "externalValue": "http://foo.bar/examples/user-example.xml"
                    }
                  }
              },
              "text/plain": {
                "examples": {
                  "user" : {
                      "summary": "User example in Plain text",
                      "externalValue": "http://foo.bar/examples/user-example.txt" 
                  }
                } 
              },
              "*/*": {
                "examples": {
                  "user" : {
                      "summary": "User example in other format",
                      "externalValue": "http://foo.bar/examples/user-example.whatever"
                  }
                }
              }
            }
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema2', () => {
        // Setup
        const schema: RequestBody = {
            "description": "user to add to the system",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                }
              }
            }
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('Response', () => {
    it('should match schema1', () => {
        // Setup
        const schema: Response = {
            "description": "A complex object array response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/VeryComplexType"
                  }
                }
              }
            }
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema2', () => {
        // Setup
        const schema: Response = {
            "description": "A simple string response",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "string"
                }
              }
            }
          
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema3', () => {
        // Setup
        const schema: Response = {
            "description": "A simple string response",
            "content": {
              "text/plain": {
                "schema": {
                  "type": "string",
                  "example": "whoa!"
                }
              }
            },
            "headers": {
              "X-Rate-Limit-Limit": {
                "description": "The number of allowed requests in the current period",
                "schema": {
                  "type": "integer"
                }
              },
              "X-Rate-Limit-Remaining": {
                "description": "The number of remaining requests in the current period",
                "schema": {
                  "type": "integer"
                }
              },
              "X-Rate-Limit-Reset": {
                "description": "The number of seconds left in the current period",
                "schema": {
                  "type": "integer"
                }
              }
            }
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema4', () => {
        // Setup
        const schema: Response = {
            "description": "object created"
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('Responses', () => {
    it('should match schema1', () => {
        // Setup
        const schema: Responses = {
            "200": {
              "description": "a pet to be returned",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Pet"
                  }
                }
              }
            },
            "default": {
              "description": "Unexpected error",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ErrorModel"
                  }
                }
              }
            }
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('Schema', () => {
    it('should match schema1', () => {
        // Setup
        const schema: Schema = {
            "type": "string",
            "format": "email"
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema2', () => {
        // Setup
        const schema: Schema = {
            type: "object",
            "required": [
              "name"
            ],
            "properties": {
              "name": {
                "type": "string"
              },
              "address": {
                "$ref": "#/components/schemas/Address"
              },
              "age": {
                "type": "integer",
                "format": "int32",
                "minimum": 0
              }
            }
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema2', () => {
        // Setup
        const schema: Schema = {
            "type": "object",
            "additionalProperties": {
              "type": "string"
            }
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema3', () => {
        // Setup
        const schema: Schema = {
            "type": "object",
            "additionalProperties": {
              "$ref": "#/components/schemas/ComplexModel"
            }
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema4', () => {
        // Setup
        const schema: Schema = {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer",
                "format": "int64"
              },
              "name": {
                "type": "string"
              }
            },
            "required": [
              "name"
            ],
            "example": {
              "name": "Puma",
              "id": 1
            }
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema5', () => {
        // Setup
        const schema: Schema = {
            "type": "object",
            "required": [
              "message",
              "code"
            ],
            "properties": {
              "message": {
                "type": "string"
              },
              "code": {
                "type": "integer",
                "minimum": 100,
                "maximum": 600
              }
            }
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema6', () => {
        // Setup
        const schema: Schema = {
            "allOf": [
              {
                "$ref": "#/components/schemas/ErrorModel"
              },
              {
                "type": "object",
                "required": [
                  "rootCause"
                ],
                "properties": {
                  "rootCause": {
                    "type": "string"
                  }
                }
              }
            ]
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema7', () => {
        // Setup
        const schema: Schema = {
            "type": "object",
            "discriminator": {
              "propertyName": "petType"
            },
            "properties": {
              "name": {
                "type": "string"
              },
              "petType": {
                "type": "string"
              }
            },
            "required": [
              "name",
              "petType"
            ]
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema8', () => {
        // Setup
        const schema: Schema = {
            "description": "A representation of a cat. Note that `Cat` will be used as the discriminator value.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Pet"
              },
              {
                "type": "object",
                "properties": {
                  "huntingSkill": {
                    "type": "string",
                    "description": "The measured skill for hunting",
                    "default": "lazy",
                    "enum": [
                      "clueless",
                      "lazy",
                      "adventurous",
                      "aggressive"
                    ]
                  }
                },
                "required": [
                  "huntingSkill"
                ]
              }
            ]
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema9', () => {
        // Setup
        const schema: Schema = {
            "description": "A representation of a dog. Note that `Dog` will be used as the discriminator value.",
            "allOf": [
              {
                "$ref": "#/components/schemas/Pet"
              },
              {
                "type": "object",
                "properties": {
                  "packSize": {
                    "type": "integer",
                    "format": "int32",
                    "description": "the size of the pack the dog is from",
                    "default": 0,
                    "minimum": 0
                  }
                },
                "required": [
                  "packSize"
                ]
              }
            ]
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('SecurityRequirement', () => {
    it('should match schema1', () => {
        // Setup
        const schema: SecurityRequirement = {
            "api_key": []
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('SecurityScheme', () => {
    it('should match schema1', () => {
        // Setup
        const schema: SecurityScheme = {
            "type": "http",
            "scheme": "basic"
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema2', () => {
        // Setup
        const schema: SecurityScheme = {
            "type": "apiKey",
            "name": "api_key",
            "in": "header"
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema3', () => {
        // Setup
        const schema: SecurityScheme = {
            "type": "http",
            "scheme": "bearer",
            "bearerFormat": "JWT",
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema4', () => {
        // Setup
        const schema: SecurityScheme = {
            "type": "oauth2",
            "flows": {
              "implicit": {
                "authorizationUrl": "https://example.com/api/oauth/dialog",
                "scopes": {
                  "write:pets": "modify pets in your account",
                  "read:pets": "read your pets"
                }
              }
            }
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('Server', () => {
    it('should match schema1', () => {
        // Setup
        const schema: Server = {
            "url": "https://development.gigantic-server.com/v1",
            "description": "Development server"
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema2', () => {
        // Setup
        const schema: Server = {
            "url": "https://{username}.gigantic-server.com:{port}/{basePath}",
            "description": "The production API server",
            "variables": {
              "username": {
                "default": "demo",
                "description": "this value is assigned by the service provider, in this example `gigantic-server.com`"
              },
              "port": {
                "enum": [
                  "8443",
                  "443"
                ],
                "default": "8443"
              },
              "basePath": {
                "default": "v2"
              }
            }
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('ServerVariable', () => {
    it('should match schema1', () => {
        // Setup
        const schema: ServerVariable = {
            enum: ['a', 'b', 'c'],
            default: 'b',
            description: 'a'
        }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('SpecificationExtensions', () => {
    it('should match schema1', () => {
        // Setup
        const schema: SpecificationExtensions = {
            ffg: 45,
            fh: true
        }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('Tag', () => {
    it('should match schema1', () => {
        // Setup
        const schema: Tag = {
            "name": "pet",
            "description": "Pets operations"
        }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('XML', () => {
    it('should match schema1', () => {
        // Setup
        const schema: XML = {
            "name": "animal"
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema2', () => {
        // Setup
        const schema: XML = {
            "attribute": true
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema3', () => {
        // Setup
        const schema: XML = {
            "namespace": "https://example.com/schema/sample",
            "prefix": "sample"
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema4', () => {
        // Setup
        const schema: XML = {
            "wrapped": true
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema5', () => {
        // Setup
        const schema: XML = {
            "name": "aliens",
            "wrapped": true
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})

describe('OpenAPI', () => {
    it('should match schema1', () => {
        // Setup
        const schema: OpenAPI = {
            "openapi": "3.1.0",
            "servers": [
              {
                "url": "https://balanceplatform-api-test.adyen.com/bcl/v1"
              }
            ],
            "info": {
              "contact": {
                "email": "developer-experience@adyen.com",
                "name": "Adyen Developer Experience team",
                "url": "https://www.adyen.help/hc/en-us/community/topics",
                "x-twitter": "Adyen"
              },
              "description": "Adyen sends notifications through webhooks to inform your system that reports were generated and are ready to be downloaded.\n\nYou can download reports programmatically by making an HTTP GET request, or manually from your [Balance Platform Customer Area](https://balanceplatform-test.adyen.com/balanceplatform).",
              "termsOfService": "https://www.adyen.com/legal/terms-and-conditions",
              "title": "Report webhooks",
              "version": "1",
              "x-apisguru-categories": [
                "payment"
              ],
              "x-logo": {
                "url": "https://api.apis.guru/v2/cache/logo/https_twitter.com_Adyen_profile_image"
              },
              "x-origin": [
                {
                  "format": "openapi",
                  "url": "https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BalancePlatformReportNotification-v1.json",
                  "version": "3.1"
                }
              ],
              "x-providerName": "adyen.com",
              "x-publicVersion": true,
              "x-serviceName": "BalancePlatformReportNotification-v1",
              "x-timestamp": "2023-03-30T18:22:06Z"
            },
            "tags": [],
            "components": {
              "examples": {
                "WebhookAck": {
                  "summary": "Acknowledge Webhook",
                  "value": "[accepted]"
                },
                "post-balancePlatform.report.created-balancePlatform.report.created": {
                  "description": "Example webhook when a report was generated and is ready to be downloaded",
                  "summary": "Report created",
                  "value": {
                    "data": {
                      "accountHolder": {
                        "id": "AH32272223222B59MTF7458DP"
                      },
                      "balanceAccount": {
                        "id": "BA3227C223222B5B9SCR82TMV"
                      },
                      "balancePlatform": "YOUR_BALANCE_PLATFORM",
                      "creationDate": "2021-07-02T02:01:08+02:00",
                      "downloadUrl": "https://balanceplatform-test.adyen.com/balanceplatform/.../.../.../balanceplatform_payments_accounting_report_2021_07_01.csv",
                      "fileName": "balanceplatform_payments_accounting_report_2021_07_01.csv",
                      "reportType": "balanceplatform_payments_accounting_report"
                    },
                    "environment": "test",
                    "type": "balancePlatform.report.created"
                  }
                }
              },
              "schemas": {
                "BalancePlatformNotificationResponse": {
                  "properties": {
                    "notificationResponse": {
                      "description": "Respond with **HTTP 200 OK** and `[accepted]` in the response body to [accept the webhook](https://docs.adyen.com/development-resources/webhooks#accept-notifications).",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "ReportNotificationData": {
                  "properties": {
                    "accountHolder": {
                      "$ref": "#/components/schemas/ResourceReference",
                      "description": "The account holder related to the report."
                    },
                    "balanceAccount": {
                      "$ref": "#/components/schemas/ResourceReference",
                      "description": "The balance account related to the report."
                    },
                    "balancePlatform": {
                      "description": "The unique identifier of the balance platform.",
                      "type": "string"
                    },
                    "creationDate": {
                      "description": "The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.",
                      "format": "date-time",
                      "type": "string"
                    },
                    "downloadUrl": {
                      "description": "The URL at which you can download the report. To download, you must authenticate your GET request with your [API credentials](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/overview).",
                      "type": "string"
                    },
                    "fileName": {
                      "description": "The filename of the report.",
                      "type": "string"
                    },
                    "reportType": {
                      "description": "Type of report.",
                      "type": "string"
                    }
                  },
                  "required": [
                    "fileName",
                    "reportType",
                    "downloadUrl"
                  ],
                  "type": "object"
                },
                "ReportNotificationRequest": {
                  "properties": {
                    "data": {
                      "$ref": "#/components/schemas/ReportNotificationData",
                      "description": "Contains event details."
                    },
                    "environment": {
                      "description": "The environment from which the webhook originated.\n\nPossible values: **test**, **live**.",
                      "type": "string"
                    },
                    "type": {
                      "description": "Type of notification.",
                      "enum": [
                        "balancePlatform.report.created"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "environment",
                    "type",
                    "data"
                  ],
                  "type": "object"
                },
                "Resource": {
                  "properties": {
                    "balancePlatform": {
                      "description": "The unique identifier of the balance platform.",
                      "type": "string"
                    },
                    "creationDate": {
                      "description": "The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.",
                      "format": "date-time",
                      "type": "string"
                    },
                    "id": {
                      "description": "The ID of the resource.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "ResourceReference": {
                  "properties": {
                    "description": {
                      "description": "The description of the resource.",
                      "type": "string"
                    },
                    "id": {
                      "description": "The unique identifier of the resource.",
                      "type": "string"
                    },
                    "reference": {
                      "description": "The reference for the resource.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                }
              },
              "securitySchemes": {
                "ApiKeyAuth": {
                  "in": "header",
                  "name": "X-API-Key",
                  "type": "apiKey"
                },
                "BasicAuth": {
                  "scheme": "basic",
                  "type": "http"
                }
              }
            },
            "webhooks": {
              "balancePlatform.report.created": {
                "post": {
                  "description": "Adyen sends this webhook after a report is generated and ready to be downloaded. The webhook contains the URL at which the report can be downloaded.\n\nBefore you download reports, ask your Adyen contact for your report credentials. You must use your the credentials to authenticate your GET request.",
                  "operationId": "post-balancePlatform.report.created",
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "examples": {
                          "balancePlatform.report.created": {
                            "$ref": "#/components/examples/post-balancePlatform.report.created-balancePlatform.report.created"
                          }
                        },
                        "schema": {
                          "$ref": "#/components/schemas/ReportNotificationRequest"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "balancePlatform.report.created": {
                              "$ref": "#/components/examples/WebhookAck"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/BalancePlatformNotificationResponse"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    }
                  },
                  "security": [
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Report generated",
                  "tags": [
                    "General"
                  ],
                  "x-groupName": "General",
                  "x-methodName": "reportGenerated",
                  "x-sortIndex": 0
                }
              }
            },
            "x-groups": [
              "General"
            ]
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema2', () => {
        // Setup
        const schema: OpenAPI = {
            "openapi": "3.1.0",
            "servers": [
              {
                "url": "https://balanceplatform-api-test.adyen.com/bcl/v1"
              }
            ],
            "info": {
              "contact": {
                "email": "developer-experience@adyen.com",
                "name": "Adyen Developer Experience team",
                "url": "https://www.adyen.help/hc/en-us/community/topics",
                "x-twitter": "Adyen"
              },
              "description": "Adyen sends notifications through webhooks to inform your system that reports were generated and are ready to be downloaded.\n\nYou can download reports programmatically by making an HTTP GET request, or manually from your [Balance Platform Customer Area](https://balanceplatform-test.adyen.com/balanceplatform).",
              "termsOfService": "https://www.adyen.com/legal/terms-and-conditions",
              "title": "Report webhooks",
              "version": "1",
              "x-apisguru-categories": [
                "payment"
              ],
              "x-logo": {
                "url": "https://api.apis.guru/v2/cache/logo/https_twitter.com_Adyen_profile_image"
              },
              "x-origin": [
                {
                  "format": "openapi",
                  "url": "https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BalancePlatformReportNotification-v1.json",
                  "version": "3.1"
                }
              ],
              "x-providerName": "adyen.com",
              "x-publicVersion": true,
              "x-serviceName": "BalancePlatformReportNotification-v1",
              "x-timestamp": "2023-03-30T18:22:06Z"
            },
            "tags": [],
            "components": {
              "examples": {
                "WebhookAck": {
                  "summary": "Acknowledge Webhook",
                  "value": "[accepted]"
                },
                "post-balancePlatform.report.created-balancePlatform.report.created": {
                  "description": "Example webhook when a report was generated and is ready to be downloaded",
                  "summary": "Report created",
                  "value": {
                    "data": {
                      "accountHolder": {
                        "id": "AH32272223222B59MTF7458DP"
                      },
                      "balanceAccount": {
                        "id": "BA3227C223222B5B9SCR82TMV"
                      },
                      "balancePlatform": "YOUR_BALANCE_PLATFORM",
                      "creationDate": "2021-07-02T02:01:08+02:00",
                      "downloadUrl": "https://balanceplatform-test.adyen.com/balanceplatform/.../.../.../balanceplatform_payments_accounting_report_2021_07_01.csv",
                      "fileName": "balanceplatform_payments_accounting_report_2021_07_01.csv",
                      "reportType": "balanceplatform_payments_accounting_report"
                    },
                    "environment": "test",
                    "type": "balancePlatform.report.created"
                  }
                }
              },
              "schemas": {
                "BalancePlatformNotificationResponse": {
                  "properties": {
                    "notificationResponse": {
                      "description": "Respond with **HTTP 200 OK** and `[accepted]` in the response body to [accept the webhook](https://docs.adyen.com/development-resources/webhooks#accept-notifications).",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "ReportNotificationData": {
                  "properties": {
                    "accountHolder": {
                      "$ref": "#/components/schemas/ResourceReference",
                      "description": "The account holder related to the report."
                    },
                    "balanceAccount": {
                      "$ref": "#/components/schemas/ResourceReference",
                      "description": "The balance account related to the report."
                    },
                    "balancePlatform": {
                      "description": "The unique identifier of the balance platform.",
                      "type": "string"
                    },
                    "creationDate": {
                      "description": "The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.",
                      "format": "date-time",
                      "type": "string"
                    },
                    "downloadUrl": {
                      "description": "The URL at which you can download the report. To download, you must authenticate your GET request with your [API credentials](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/overview).",
                      "type": "string"
                    },
                    "fileName": {
                      "description": "The filename of the report.",
                      "type": "string"
                    },
                    "reportType": {
                      "description": "Type of report.",
                      "type": "string"
                    }
                  },
                  "required": [
                    "fileName",
                    "reportType",
                    "downloadUrl"
                  ],
                  "type": "object"
                },
                "ReportNotificationRequest": {
                  "properties": {
                    "data": {
                      "$ref": "#/components/schemas/ReportNotificationData",
                      "description": "Contains event details."
                    },
                    "environment": {
                      "description": "The environment from which the webhook originated.\n\nPossible values: **test**, **live**.",
                      "type": "string"
                    },
                    "type": {
                      "description": "Type of notification.",
                      "enum": [
                        "balancePlatform.report.created"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "environment",
                    "type",
                    "data"
                  ],
                  "type": "object"
                },
                "Resource": {
                  "properties": {
                    "balancePlatform": {
                      "description": "The unique identifier of the balance platform.",
                      "type": "string"
                    },
                    "creationDate": {
                      "description": "The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.",
                      "format": "date-time",
                      "type": "string"
                    },
                    "id": {
                      "description": "The ID of the resource.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "ResourceReference": {
                  "properties": {
                    "description": {
                      "description": "The description of the resource.",
                      "type": "string"
                    },
                    "id": {
                      "description": "The unique identifier of the resource.",
                      "type": "string"
                    },
                    "reference": {
                      "description": "The reference for the resource.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                }
              },
              "securitySchemes": {
                "ApiKeyAuth": {
                  "in": "header",
                  "name": "X-API-Key",
                  "type": "apiKey"
                },
                "BasicAuth": {
                  "scheme": "basic",
                  "type": "http"
                }
              }
            },
            "webhooks": {
              "balancePlatform.report.created": {
                "post": {
                  "description": "Adyen sends this webhook after a report is generated and ready to be downloaded. The webhook contains the URL at which the report can be downloaded.\n\nBefore you download reports, ask your Adyen contact for your report credentials. You must use your the credentials to authenticate your GET request.",
                  "operationId": "post-balancePlatform.report.created",
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "examples": {
                          "balancePlatform.report.created": {
                            "$ref": "#/components/examples/post-balancePlatform.report.created-balancePlatform.report.created"
                          }
                        },
                        "schema": {
                          "$ref": "#/components/schemas/ReportNotificationRequest"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "balancePlatform.report.created": {
                              "$ref": "#/components/examples/WebhookAck"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/BalancePlatformNotificationResponse"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    }
                  },
                  "security": [
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Report generated",
                  "tags": [
                    "General"
                  ],
                  "x-groupName": "General",
                  "x-methodName": "reportGenerated",
                  "x-sortIndex": 0
                }
              }
            },
            "x-groups": [
              "General"
            ]
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema3', () => {
        // Setup
        const schema: OpenAPI = {
            "openapi": "3.1.0",
            "servers": [
              {
                "url": "https://balanceplatform-api-test.adyen.com/bcl/v2"
              }
            ],
            "info": {
              "contact": {
                "email": "developer-experience@adyen.com",
                "name": "Adyen Developer Experience team",
                "url": "https://www.adyen.help/hc/en-us/community/topics",
                "x-twitter": "Adyen"
              },
              "description": "The Configuration API enables you to create a platform where you can onboard your users as account holders and create balance accounts, cards, and business accounts.\n\n## Authentication\nYour Adyen contact will provide your API credential and an API key. To connect to the API, add an `X-API-Key` header with the API key as the value, for example:\n\n ```\ncurl\n-H \"Content-Type: application/json\" \\\n-H \"X-API-Key: YOUR_API_KEY\" \\\n...\n```\n\nAlternatively, you can use the username and password to connect to the API using basic authentication. For example:\n\n```\ncurl\n-H \"Content-Type: application/json\" \\\n-U \"ws@BalancePlatform.YOUR_BALANCE_PLATFORM\":\"YOUR_WS_PASSWORD\" \\\n...\n```\n## Versioning\nThe Configuration API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.\n\nFor example:\n```\nhttps://balanceplatform-api-test.adyen.com/bcl/v2/accountHolders\n```\n## Going live\nWhen going live, your Adyen contact will provide your API credential for the live environment. You can then use the API key or the username and password to send requests to `https://balanceplatform-api-live.adyen.com/bcl/v2`.",
              "termsOfService": "https://www.adyen.com/legal/terms-and-conditions",
              "title": "Configuration API",
              "version": "2",
              "x-apisguru-categories": [
                "payment"
              ],
              "x-logo": {
                "url": "https://api.apis.guru/v2/cache/logo/https_adyen.com_.resources_adyen-website_themes_images_apple-icon-180x180.png"
              },
              "x-origin": [
                {
                  "format": "openapi",
                  "url": "https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BalancePlatformService-v2.json",
                  "version": "3.1"
                }
              ],
              "x-preferred": true,
              "x-providerName": "adyen.com",
              "x-publicVersion": true,
              "x-serviceName": "BalancePlatformService",
              "x-timestamp": "2023-04-03T11:30:38Z"
            },
            "tags": [
              {
                "name": "Platform"
              },
              {
                "name": "Payment instrument groups"
              },
              {
                "name": "Account holders"
              },
              {
                "name": "Payment instruments"
              },
              {
                "name": "Bank account validation"
              },
              {
                "name": "Balance accounts"
              },
              {
                "name": "Transaction rules"
              }
            ],
            "paths": {
              "/accountHolders": {
                "post": {
                  "description": "Creates an account holder linked to a [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities).\n\n",
                  "operationId": "post-accountHolders",
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "examples": {
                          "createAccountHolder": {
                            "$ref": "#/components/examples/post-accountHolders-createAccountHolder"
                          }
                        },
                        "schema": {
                          "$ref": "#/components/schemas/AccountHolderInfo"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/AccountHolder"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Create an account holder",
                  "tags": [
                    "Account holders"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Account holders",
                  "x-methodName": "createAccountHolder",
                  "x-sortIndex": 1
                }
              },
              "/accountHolders/{id}": {
                "get": {
                  "description": "Returns an account holder.",
                  "operationId": "get-accountHolders-id",
                  "parameters": [
                    {
                      "description": "The unique identifier of the account holder.",
                      "in": "path",
                      "name": "id",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    }
                  ],
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "success": {
                              "$ref": "#/components/examples/get-accountHolders-id-success-200"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/AccountHolder"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Get an account holder",
                  "tags": [
                    "Account holders"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Account holders",
                  "x-methodName": "getAccountHolder",
                  "x-sortIndex": 3
                },
                "patch": {
                  "description": "Updates an account holder. When updating an account holder resource, if a parameter is not provided in the request, it is left unchanged.",
                  "operationId": "patch-accountHolders-id",
                  "parameters": [
                    {
                      "description": "The unique identifier of the account holder.",
                      "in": "path",
                      "name": "id",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    }
                  ],
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "examples": {
                          "requestAccountHolderCapability": {
                            "$ref": "#/components/examples/patch-accountHolders-id-requestAccountHolderCapability"
                          },
                          "updateAccountHolderStatus": {
                            "$ref": "#/components/examples/patch-accountHolders-id-updateAccountHolderStatus"
                          }
                        },
                        "schema": {
                          "$ref": "#/components/schemas/AccountHolder"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "requestAccountHolderCapability": {
                              "$ref": "#/components/examples/patch-accountHolders-id-requestAccountHolderCapability-200"
                            },
                            "updateAccountHolderStatus": {
                              "$ref": "#/components/examples/patch-accountHolders-id-updateAccountHolderStatus-200"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/AccountHolder"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Update an account holder",
                  "tags": [
                    "Account holders"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Account holders",
                  "x-methodName": "updateAccountHolder",
                  "x-sortIndex": 2
                }
              },
              "/accountHolders/{id}/balanceAccounts": {
                "get": {
                  "description": "Returns a paginated list of the balance accounts associated with an account holder. To fetch multiple pages, use the query parameters. \n\nFor example, to limit the page to 5 balance accounts and skip the first 10, use `/accountHolders/{id}/balanceAccounts?limit=5&offset=10`.",
                  "operationId": "get-accountHolders-id-balanceAccounts",
                  "parameters": [
                    {
                      "description": "The unique identifier of the account holder.",
                      "in": "path",
                      "name": "id",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    },
                    {
                      "description": "The number of items that you want to skip.",
                      "in": "query",
                      "name": "offset",
                      "required": false,
                      "schema": {
                        "format": "int32",
                        "type": "integer"
                      }
                    },
                    {
                      "description": "The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.",
                      "in": "query",
                      "name": "limit",
                      "required": false,
                      "schema": {
                        "format": "int32",
                        "type": "integer"
                      }
                    }
                  ],
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "success": {
                              "$ref": "#/components/examples/get-accountHolders-id-balanceAccounts-success-200"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/PaginatedBalanceAccountsResponse"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Get all balance accounts of an account holder",
                  "tags": [
                    "Account holders"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Account holders",
                  "x-methodName": "getAllBalanceAccountsOfAccountHolder",
                  "x-sortIndex": 4
                }
              },
              "/balanceAccounts": {
                "post": {
                  "description": "Creates a balance account that holds the funds of the associated account holder.",
                  "operationId": "post-balanceAccounts",
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "examples": {
                          "createBalanceAccount": {
                            "$ref": "#/components/examples/post-balanceAccounts-createBalanceAccount"
                          }
                        },
                        "schema": {
                          "$ref": "#/components/schemas/BalanceAccountInfo"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/BalanceAccount"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Create a balance account",
                  "tags": [
                    "Balance accounts"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Balance accounts",
                  "x-methodName": "createBalanceAccount",
                  "x-sortIndex": 1
                }
              },
              "/balanceAccounts/{balanceAccountId}/sweeps": {
                "get": {
                  "description": "Returns a list of the sweeps configured for a balance account.\n\nTo fetch multiple pages, use the query parameters. For example, to limit the page to 5 sweeps and to skip the first 10, use `/balanceAccounts/{balanceAccountId}/sweeps?limit=5&offset=10`.",
                  "operationId": "get-balanceAccounts-balanceAccountId-sweeps",
                  "parameters": [
                    {
                      "description": "The unique identifier of the balance account.",
                      "in": "path",
                      "name": "balanceAccountId",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    },
                    {
                      "description": "The number of items that you want to skip.",
                      "in": "query",
                      "name": "offset",
                      "required": false,
                      "schema": {
                        "format": "int32",
                        "type": "integer"
                      }
                    },
                    {
                      "description": "The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.",
                      "in": "query",
                      "name": "limit",
                      "required": false,
                      "schema": {
                        "format": "int32",
                        "type": "integer"
                      }
                    }
                  ],
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "success": {
                              "$ref": "#/components/examples/get-balanceAccounts-balanceAccountId-sweeps-success-200"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/BalanceSweepConfigurationsResponse"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Get all sweeps for a balance account",
                  "tags": [
                    "Balance accounts"
                  ],
                  "x-addedInVersion": "2",
                  "x-groupName": "Balance accounts",
                  "x-methodName": "getAllSweepsForBalanceAccount",
                  "x-sortIndex": 7
                },
                "post": {
                  "description": "Creates a sweep that results in moving funds from or to a balance account.\n\nA sweep pulls in or pushes out funds based on a defined schedule, amount, currency, and a source or a destination.",
                  "operationId": "post-balanceAccounts-balanceAccountId-sweeps",
                  "parameters": [
                    {
                      "description": "The unique identifier of the balance account.",
                      "in": "path",
                      "name": "balanceAccountId",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    }
                  ],
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "examples": {
                          "createSweep-pull": {
                            "$ref": "#/components/examples/post-balanceAccounts-balanceAccountId-sweeps-createSweep-pull"
                          },
                          "createSweep-push": {
                            "$ref": "#/components/examples/post-balanceAccounts-balanceAccountId-sweeps-createSweep-push"
                          },
                          "createSweep-push-priorities": {
                            "$ref": "#/components/examples/post-balanceAccounts-balanceAccountId-sweeps-createSweep-push-priorities"
                          }
                        },
                        "schema": {
                          "$ref": "#/components/schemas/SweepConfigurationV2"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "createSweep-pull": {
                              "$ref": "#/components/examples/post-balanceAccounts-balanceAccountId-sweeps-createSweep-pull-200"
                            },
                            "createSweep-push": {
                              "$ref": "#/components/examples/post-balanceAccounts-balanceAccountId-sweeps-createSweep-push-200"
                            },
                            "createSweep-push-priorities": {
                              "$ref": "#/components/examples/post-balanceAccounts-balanceAccountId-sweeps-createSweep-push-priorities-200"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/SweepConfigurationV2"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Create a sweep",
                  "tags": [
                    "Balance accounts"
                  ],
                  "x-addedInVersion": "2",
                  "x-groupName": "Balance accounts",
                  "x-methodName": "createSweep",
                  "x-sortIndex": 5
                }
              },
              "/balanceAccounts/{balanceAccountId}/sweeps/{sweepId}": {
                "delete": {
                  "description": "Deletes a sweep for a balance account.",
                  "operationId": "delete-balanceAccounts-balanceAccountId-sweeps-sweepId",
                  "parameters": [
                    {
                      "description": "The unique identifier of the balance account.",
                      "in": "path",
                      "name": "balanceAccountId",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    },
                    {
                      "description": "The unique identifier of the sweep.",
                      "in": "path",
                      "name": "sweepId",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    }
                  ],
                  "responses": {
                    "204": {
                      "description": "No Content - the request has been successfully processed, but there is no additional content."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Delete a sweep",
                  "tags": [
                    "Balance accounts"
                  ],
                  "x-addedInVersion": "2",
                  "x-groupName": "Balance accounts",
                  "x-methodName": "deleteSweep",
                  "x-sortIndex": 9
                },
                "get": {
                  "description": "Returns a sweep.",
                  "operationId": "get-balanceAccounts-balanceAccountId-sweeps-sweepId",
                  "parameters": [
                    {
                      "description": "The unique identifier of the balance account.",
                      "in": "path",
                      "name": "balanceAccountId",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    },
                    {
                      "description": "The unique identifier of the sweep.",
                      "in": "path",
                      "name": "sweepId",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    }
                  ],
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "success": {
                              "$ref": "#/components/examples/get-balanceAccounts-balanceAccountId-sweeps-sweepId-success-200"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/SweepConfigurationV2"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Get a sweep",
                  "tags": [
                    "Balance accounts"
                  ],
                  "x-addedInVersion": "2",
                  "x-groupName": "Balance accounts",
                  "x-methodName": "getSweep",
                  "x-sortIndex": 8
                },
                "patch": {
                  "description": "Updates a sweep. When updating a sweep resource, note that if a request parameter is not provided, the parameter is left unchanged.",
                  "operationId": "patch-balanceAccounts-balanceAccountId-sweeps-sweepId",
                  "parameters": [
                    {
                      "description": "The unique identifier of the balance account.",
                      "in": "path",
                      "name": "balanceAccountId",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    },
                    {
                      "description": "The unique identifier of the sweep.",
                      "in": "path",
                      "name": "sweepId",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    }
                  ],
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "examples": {
                          "updateSweep-status": {
                            "$ref": "#/components/examples/patch-balanceAccounts-balanceAccountId-sweeps-sweepId-updateSweep-status"
                          }
                        },
                        "schema": {
                          "$ref": "#/components/schemas/SweepConfigurationV2"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "updateSweep-status": {
                              "$ref": "#/components/examples/patch-balanceAccounts-balanceAccountId-sweeps-sweepId-updateSweep-status-200"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/SweepConfigurationV2"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Update a sweep",
                  "tags": [
                    "Balance accounts"
                  ],
                  "x-addedInVersion": "2",
                  "x-groupName": "Balance accounts",
                  "x-methodName": "updateSweep",
                  "x-sortIndex": 6
                }
              },
              "/balanceAccounts/{id}": {
                "get": {
                  "description": "Returns a balance account and its balances for the default currency and other currencies with a non-zero balance.",
                  "operationId": "get-balanceAccounts-id",
                  "parameters": [
                    {
                      "description": "The unique identifier of the balance account.",
                      "in": "path",
                      "name": "id",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    }
                  ],
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "success": {
                              "$ref": "#/components/examples/get-balanceAccounts-id-success-200"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/BalanceAccount"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Get a balance account",
                  "tags": [
                    "Balance accounts"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Balance accounts",
                  "x-methodName": "getBalanceAccount",
                  "x-sortIndex": 3
                },
                "patch": {
                  "description": "Updates a balance account.",
                  "operationId": "patch-balanceAccounts-id",
                  "parameters": [
                    {
                      "description": "The unique identifier of the balance account.",
                      "in": "path",
                      "name": "id",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    }
                  ],
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "schema": {
                          "$ref": "#/components/schemas/BalanceAccountUpdateRequest"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/BalanceAccount"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Update a balance account",
                  "tags": [
                    "Balance accounts"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Balance accounts",
                  "x-methodName": "updateBalanceAccount",
                  "x-sortIndex": 2
                }
              },
              "/balanceAccounts/{id}/paymentInstruments": {
                "get": {
                  "description": "Returns a paginated list of the payment instruments associated with a balance account. \n\nTo fetch multiple pages, use the query parameters.For example, to limit the page to 3 payment instruments and to skip the first 6, use `/balanceAccounts/{id}/paymentInstruments?limit=3&offset=6`.",
                  "operationId": "get-balanceAccounts-id-paymentInstruments",
                  "parameters": [
                    {
                      "description": "The unique identifier of the balance account.",
                      "in": "path",
                      "name": "id",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    },
                    {
                      "description": "The number of items that you want to skip.",
                      "in": "query",
                      "name": "offset",
                      "required": false,
                      "schema": {
                        "format": "int32",
                        "type": "integer"
                      }
                    },
                    {
                      "description": "The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.",
                      "in": "query",
                      "name": "limit",
                      "required": false,
                      "schema": {
                        "format": "int32",
                        "type": "integer"
                      }
                    }
                  ],
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "success": {
                              "$ref": "#/components/examples/get-balanceAccounts-id-paymentInstruments-success-200"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/PaginatedPaymentInstrumentsResponse"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Get all payment instruments for a balance account",
                  "tags": [
                    "Balance accounts"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Balance accounts",
                  "x-methodName": "getAllPaymentInstrumentsForBalanceAccount",
                  "x-sortIndex": 4
                }
              },
              "/balancePlatforms/{id}": {
                "get": {
                  "description": "Returns a balance platform.",
                  "operationId": "get-balancePlatforms-id",
                  "parameters": [
                    {
                      "description": "The unique identifier of the balance platform.",
                      "in": "path",
                      "name": "id",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    }
                  ],
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "success": {
                              "$ref": "#/components/examples/get-balancePlatforms-id-success-200"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/BalancePlatform"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Get a balance platform",
                  "tags": [
                    "Platform"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Platform",
                  "x-methodName": "getBalancePlatform",
                  "x-sortIndex": 1
                }
              },
              "/balancePlatforms/{id}/accountHolders": {
                "get": {
                  "description": "Returns a paginated list of all the account holders that belong to the balance platform. To fetch multiple pages, use the query parameters. \n\nFor example, to limit the page to 5 account holders and to skip the first 20, use `/balancePlatforms/{id}/accountHolders?limit=5&offset=20`.",
                  "operationId": "get-balancePlatforms-id-accountHolders",
                  "parameters": [
                    {
                      "description": "The unique identifier of the balance platform.",
                      "in": "path",
                      "name": "id",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    },
                    {
                      "description": "The number of items that you want to skip.",
                      "in": "query",
                      "name": "offset",
                      "required": false,
                      "schema": {
                        "format": "int32",
                        "type": "integer"
                      }
                    },
                    {
                      "description": "The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.",
                      "in": "query",
                      "name": "limit",
                      "required": false,
                      "schema": {
                        "format": "int32",
                        "type": "integer"
                      }
                    }
                  ],
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "success": {
                              "$ref": "#/components/examples/get-balancePlatforms-id-accountHolders-success-200"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/PaginatedAccountHoldersResponse"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Get all account holders under a balance platform",
                  "tags": [
                    "Platform"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Platform",
                  "x-methodName": "getAllAccountHoldersUnderBalancePlatform",
                  "x-sortIndex": 2
                }
              },
              "/paymentInstrumentGroups": {
                "post": {
                  "description": "Creates a payment instrument group to associate and group payment instrument resources together. You can apply a transaction rule to a payment instrument group.",
                  "operationId": "post-paymentInstrumentGroups",
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "examples": {
                          "createPaymentInstrumentGroups": {
                            "$ref": "#/components/examples/post-paymentInstrumentGroups-createPaymentInstrumentGroups"
                          }
                        },
                        "schema": {
                          "$ref": "#/components/schemas/PaymentInstrumentGroupInfo"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/PaymentInstrumentGroup"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Create a payment instrument group",
                  "tags": [
                    "Payment instrument groups"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Payment instrument groups",
                  "x-methodName": "createPaymentInstrumentGroup",
                  "x-sortIndex": 1
                }
              },
              "/paymentInstrumentGroups/{id}": {
                "get": {
                  "description": "Returns the details of a payment instrument group.",
                  "operationId": "get-paymentInstrumentGroups-id",
                  "parameters": [
                    {
                      "description": "The unique identifier of the payment instrument group.",
                      "in": "path",
                      "name": "id",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    }
                  ],
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "success": {
                              "$ref": "#/components/examples/get-paymentInstrumentGroups-id-success-200"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/PaymentInstrumentGroup"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Get a payment instrument group",
                  "tags": [
                    "Payment instrument groups"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Payment instrument groups",
                  "x-methodName": "getPaymentInstrumentGroup",
                  "x-sortIndex": 2
                }
              },
              "/paymentInstrumentGroups/{id}/transactionRules": {
                "get": {
                  "description": "Returns a list of all the transaction rules associated with a payment instrument group.",
                  "operationId": "get-paymentInstrumentGroups-id-transactionRules",
                  "parameters": [
                    {
                      "description": "The unique identifier of the payment instrument group.",
                      "in": "path",
                      "name": "id",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    }
                  ],
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "success": {
                              "$ref": "#/components/examples/get-paymentInstrumentGroups-id-transactionRules-success-200"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/TransactionRulesResponse"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Get all transaction rules for a payment instrument group",
                  "tags": [
                    "Payment instrument groups"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Payment instrument groups",
                  "x-methodName": "getAllTransactionRulesForPaymentInstrumentGroup",
                  "x-sortIndex": 3
                }
              },
              "/paymentInstruments": {
                "post": {
                  "description": "Creates a payment instrument to issue a physical card, a virtual card, or a business account to your user.\n\n For more information, refer to [Issue cards](https://docs.adyen.com/issuing/create-cards) or [Issue business accounts](https://docs.adyen.com/marketplaces-and-platforms/business-accounts).",
                  "operationId": "post-paymentInstruments",
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "examples": {
                          "createBusinessAccountNL": {
                            "$ref": "#/components/examples/post-paymentInstruments-createBusinessAccountNL"
                          },
                          "createBusinessAccountUS": {
                            "$ref": "#/components/examples/post-paymentInstruments-createBusinessAccountUS"
                          },
                          "createPhysicalCard": {
                            "$ref": "#/components/examples/post-paymentInstruments-createPhysicalCard"
                          },
                          "createVirtualCard": {
                            "$ref": "#/components/examples/post-paymentInstruments-createVirtualCard"
                          }
                        },
                        "schema": {
                          "$ref": "#/components/schemas/PaymentInstrumentInfo"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "createBusinessAccountNL": {
                              "$ref": "#/components/examples/post-paymentInstruments-createBusinessAccountNL-200"
                            },
                            "createBusinessAccountUS": {
                              "$ref": "#/components/examples/post-paymentInstruments-createBusinessAccountUS-200"
                            },
                            "createPhysicalCard": {
                              "$ref": "#/components/examples/post-paymentInstruments-createPhysicalCard-200"
                            },
                            "createVirtualCard": {
                              "$ref": "#/components/examples/post-paymentInstruments-createVirtualCard-200"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/PaymentInstrument"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Create a payment instrument",
                  "tags": [
                    "Payment instruments"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Payment instruments",
                  "x-methodName": "createPaymentInstrument",
                  "x-sortIndex": 11
                }
              },
              "/paymentInstruments/{id}": {
                "get": {
                  "description": "Returns the details of a payment instrument.",
                  "operationId": "get-paymentInstruments-id",
                  "parameters": [
                    {
                      "description": "The unique identifier of the payment instrument.",
                      "in": "path",
                      "name": "id",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    }
                  ],
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "success": {
                              "$ref": "#/components/examples/get-paymentInstruments-id-success-200"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/PaymentInstrument"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Get a payment instrument",
                  "tags": [
                    "Payment instruments"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Payment instruments",
                  "x-methodName": "getPaymentInstrument",
                  "x-sortIndex": 13
                },
                "patch": {
                  "description": "Updates a payment instrument. Once a payment instrument is already active, you can only update its status. However, for cards created with **inactive** status, you can still update the balance account associated with the card.",
                  "operationId": "patch-paymentInstruments-id",
                  "parameters": [
                    {
                      "description": "The unique identifier of the payment instrument.",
                      "in": "path",
                      "name": "id",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    }
                  ],
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "examples": {
                          "updatePaymentInstrumentBalanceAccount": {
                            "$ref": "#/components/examples/patch-paymentInstruments-id-updatePaymentInstrumentBalanceAccount"
                          },
                          "updatePaymentInstrumentStatus": {
                            "$ref": "#/components/examples/patch-paymentInstruments-id-updatePaymentInstrumentStatus"
                          }
                        },
                        "schema": {
                          "$ref": "#/components/schemas/PaymentInstrumentUpdateRequest"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "updatePaymentInstrumentBalanceAccount": {
                              "$ref": "#/components/examples/patch-paymentInstruments-id-updatePaymentInstrumentBalanceAccount-200"
                            },
                            "updatePaymentInstrumentStatus": {
                              "$ref": "#/components/examples/patch-paymentInstruments-id-updatePaymentInstrumentStatus-200"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/UpdatePaymentInstrument"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Update a payment instrument",
                  "tags": [
                    "Payment instruments"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Payment instruments",
                  "x-methodName": "updatePaymentInstrument",
                  "x-sortIndex": 12
                }
              },
              "/paymentInstruments/{id}/reveal": {
                "get": {
                  "description": "Returns the primary account number (PAN) of a payment instrument.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/issuing/manage-access/api-credentials-web-service#api-permissions):\n\n* Balance Platform BCL PCI role",
                  "operationId": "get-paymentInstruments-id-reveal",
                  "parameters": [
                    {
                      "description": "The unique identifier of the payment instrument.",
                      "in": "path",
                      "name": "id",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    }
                  ],
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/PaymentInstrumentRevealInfo"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Get the PAN of a payment instrument",
                  "tags": [
                    "Payment instruments"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Payment instruments",
                  "x-methodName": "getPanOfPaymentInstrument",
                  "x-sortIndex": 14
                }
              },
              "/paymentInstruments/{id}/transactionRules": {
                "get": {
                  "description": "Returns a list of transaction rules associated with a payment instrument.",
                  "operationId": "get-paymentInstruments-id-transactionRules",
                  "parameters": [
                    {
                      "description": "The unique identifier of the payment instrument.",
                      "in": "path",
                      "name": "id",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    }
                  ],
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "success": {
                              "$ref": "#/components/examples/get-paymentInstruments-id-transactionRules-success-200"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/TransactionRulesResponse"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Get all transaction rules for a payment instrument",
                  "tags": [
                    "Payment instruments"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Payment instruments",
                  "x-methodName": "getAllTransactionRulesForPaymentInstrument",
                  "x-sortIndex": 14
                }
              },
              "/transactionRules": {
                "post": {
                  "description": "Creates a [transaction rule](https://docs.adyen.com/issuing/transaction-rules). When your user makes a transaction with their Adyen-issued card, the transaction is allowed or declined based on the conditions and outcome defined in the transaction rule. You can apply the transaction rule to several cards, such as all the cards in your platform, or to a specific card. For use cases, see [examples](https://docs.adyen.com/issuing/transaction-rules/examples).",
                  "operationId": "post-transactionRules",
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "examples": {
                          "createTransactionRuleAllowPos": {
                            "$ref": "#/components/examples/post-transactionRules-createTransactionRuleAllowPos"
                          },
                          "createTransactionRuleIncreaseScore": {
                            "$ref": "#/components/examples/post-transactionRules-createTransactionRuleIncreaseScore"
                          },
                          "createTransactionRuleLimitSliding": {
                            "$ref": "#/components/examples/post-transactionRules-createTransactionRuleLimitSliding"
                          },
                          "createTransactionRuleLimitTransaction": {
                            "$ref": "#/components/examples/post-transactionRules-createTransactionRuleLimitTransaction"
                          }
                        },
                        "schema": {
                          "$ref": "#/components/schemas/TransactionRuleInfo"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/TransactionRule"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Create a transaction rule",
                  "tags": [
                    "Transaction rules"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Transaction rules",
                  "x-methodName": "createTransactionRule",
                  "x-sortIndex": 1
                }
              },
              "/transactionRules/{transactionRuleId}": {
                "delete": {
                  "description": "Deletes a transaction rule.",
                  "operationId": "delete-transactionRules-transactionRuleId",
                  "parameters": [
                    {
                      "description": "The unique identifier of the transaction rule.",
                      "in": "path",
                      "name": "transactionRuleId",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    }
                  ],
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "success": {
                              "$ref": "#/components/examples/delete-transactionRules-transactionRuleId-success-200"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/TransactionRule"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Delete a transaction rule",
                  "tags": [
                    "Transaction rules"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Transaction rules",
                  "x-methodName": "deleteTransactionRule",
                  "x-sortIndex": 5
                },
                "get": {
                  "description": "Returns the details of a transaction rule.",
                  "operationId": "get-transactionRules-transactionRuleId",
                  "parameters": [
                    {
                      "description": "The unique identifier of the transaction rule.",
                      "in": "path",
                      "name": "transactionRuleId",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    }
                  ],
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "success": {
                              "$ref": "#/components/examples/get-transactionRules-transactionRuleId-success-200"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/TransactionRuleResponse"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Get a transaction rule",
                  "tags": [
                    "Transaction rules"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Transaction rules",
                  "x-methodName": "getTransactionRule",
                  "x-sortIndex": 2
                },
                "patch": {
                  "description": "Updates a transaction rule. \n\n* To update only the status of a transaction rule, send only the `status` parameter. All other parameters not provided in the request are left unchanged.\n\n* When updating any other parameter, you need to send all existing resource parameters. If you omit a parameter in the request, that parameter is removed from the resource.",
                  "operationId": "patch-transactionRules-transactionRuleId",
                  "parameters": [
                    {
                      "description": "The unique identifier of the transaction rule.",
                      "in": "path",
                      "name": "transactionRuleId",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    }
                  ],
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "examples": {
                          "updateTransactionRuleStatus": {
                            "$ref": "#/components/examples/patch-transactionRules-transactionRuleId-updateTransactionRuleStatus"
                          }
                        },
                        "schema": {
                          "$ref": "#/components/schemas/TransactionRuleInfo"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "updateTransactionRuleStatus": {
                              "$ref": "#/components/examples/patch-transactionRules-transactionRuleId-updateTransactionRuleStatus-200"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/TransactionRule"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-400"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Update a transaction rule",
                  "tags": [
                    "Transaction rules"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Transaction rules",
                  "x-methodName": "updateTransactionRule",
                  "x-sortIndex": 3
                }
              },
              "/validateBankAccountIdentification": {
                "post": {
                  "description": "Validates bank account identification details. You can use this endpoint to validate bank account details before you [make a transfer](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) or [create a transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments).",
                  "operationId": "post-validateBankAccountIdentification",
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "examples": {
                          "validateBankAccountIdentificationIban": {
                            "$ref": "#/components/examples/post-validateBankAccountIdentification-validateBankAccountIdentificationIban"
                          },
                          "validateBankAccountIdentificationUs": {
                            "$ref": "#/components/examples/post-validateBankAccountIdentification-validateBankAccountIdentificationUs"
                          }
                        },
                        "schema": {
                          "$ref": "#/components/schemas/BankAccountIdentificationValidationRequest"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/Void"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-401"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-403"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-422"
                            },
                            "validateBankAccountIdentificationIban": {
                              "$ref": "#/components/examples/post-validateBankAccountIdentification-validateBankAccountIdentificationIban-422"
                            },
                            "validateBankAccountIdentificationUs": {
                              "$ref": "#/components/examples/post-validateBankAccountIdentification-validateBankAccountIdentificationUs-422"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "generic": {
                              "$ref": "#/components/examples/generic-500"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/RestServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Validate a bank account",
                  "tags": [
                    "Bank account validation"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Bank account validation",
                  "x-methodName": "validateBankAccountIdentification",
                  "x-sortIndex": 1
                }
              }
            },
            "components": {
              "examples": {
                "delete-transactionRules-transactionRuleId-success-200": {
                  "description": "Example response for successfully deleting a transaction rule",
                  "summary": "Transaction rule deleted",
                  "value": {
                    "aggregationLevel": "paymentInstrument",
                    "description": "Up to 1000 EUR per card for the last 12 hours",
                    "entityKey": {
                      "entityReference": "PG3227C223222C5GXR3M5592Q",
                      "entityType": "paymentInstrumentGroup"
                    },
                    "id": "TR3227C223222C5GXT3DD5VCF",
                    "interval": {
                      "duration": {
                        "unit": "hours",
                        "value": 12
                      },
                      "timeZone": "UTC",
                      "type": "sliding"
                    },
                    "outcomeType": "hardBlock",
                    "reference": "myRule12345",
                    "requestType": "authorization",
                    "ruleRestrictions": {
                      "totalAmount": {
                        "operation": "greaterThan",
                        "value": {
                          "currency": "EUR",
                          "value": 100000
                        }
                      }
                    },
                    "type": "velocity"
                  }
                },
                "generic-400": {
                  "summary": "Response code - 400 Bad request",
                  "value": {
                    "detail": "Empty input which would have resulted in a null result.",
                    "errorCode": "00_400",
                    "status": 400,
                    "title": "Bad request",
                    "type": "https://docs.adyen.com/errors/general/bad-request"
                  }
                },
                "generic-401": {
                  "summary": "Response code - 401 Unauthorized",
                  "value": {
                    "detail": "Not authorized to access this service.",
                    "errorCode": "00_401",
                    "status": 401,
                    "title": "Unauthorized",
                    "type": "https://docs.adyen.com/errors/security/unauthorized"
                  }
                },
                "generic-403": {
                  "summary": "Response code - 403 Forbidden.",
                  "value": {
                    "detail": "Not the right permission to access this service.",
                    "errorCode": "00_403",
                    "status": 403,
                    "title": "Forbidden",
                    "type": "https://docs.adyen.com/errors/security/unauthorized"
                  }
                },
                "generic-404": {
                  "summary": "Response code 404 - Not found",
                  "value": {
                    "detail": "Service not found.",
                    "errorCode": "00_404",
                    "status": 404,
                    "title": "Not found",
                    "type": "https://docs.adyen.com/errors/general/not-found"
                  }
                },
                "generic-422": {
                  "summary": "Response code - 422 Unprocessable Entity.",
                  "value": {
                    "detail": "The balanceAccountId can only be changed when the status is Inactive or Requested",
                    "errorCode": "30_031",
                    "requestId": "1W1UI15PLVGC9V8O",
                    "status": 422,
                    "title": "Invalid Payment Instrument information provided",
                    "type": "https://docs.adyen.com/errors/general/invalid-field-value"
                  }
                },
                "generic-500": {
                  "summary": "Response code - 500 Internal Server Error",
                  "value": {
                    "detail": "Unrecoverable error while trying to create payment instrument",
                    "errorCode": "00_500",
                    "requestId": "1WAF555PLWNTLYOQ",
                    "status": 500,
                    "title": "An internal error happened",
                    "type": "https://docs.adyen.com/errors/general/internal"
                  }
                },
                "generic-503": {
                  "summary": "Response code - 503 Internal Server Error",
                  "value": {
                    "detail": "Error while determining the payment instrument workflow",
                    "errorCode": "99_500",
                    "requestId": "1W1UHY5O2CONU4R7",
                    "status": 500,
                    "title": "Error processing request",
                    "type": "https://docs.adyen.com/errors/general/processing-error"
                  }
                },
                "get-accountHolders-id-balanceAccounts-success-200": {
                  "description": "Example response when retrieving a list of balance accounts under an account holder",
                  "summary": "List of balance accounts retrieved",
                  "value": {
                    "balanceAccounts": [
                      {
                        "accountHolderId": "AH32272223222B5CTBMZT6W2V",
                        "defaultCurrencyCode": "EUR",
                        "description": "S. Hopper - Main Account",
                        "id": "BA32272223222B5CTDNB66W2Z",
                        "reference": "YOUR_REFERENCE-X173L",
                        "status": "active",
                        "timeZone": "Europe/Amsterdam"
                      },
                      {
                        "accountHolderId": "AH32272223222B5CTBMZT6W2V",
                        "defaultCurrencyCode": "EUR",
                        "description": "S. Hopper - Main Account",
                        "id": "BA32272223222B5CTDQPM6W2H",
                        "reference": "YOUR_REFERENCE-X173L",
                        "status": "active",
                        "timeZone": "Europe/Amsterdam"
                      },
                      {
                        "accountHolderId": "AH32272223222B5CTBMZT6W2V",
                        "defaultCurrencyCode": "EUR",
                        "description": "S. Hopper - Main Account",
                        "id": "BA32272223222B5CVF5J63LMW",
                        "reference": "YOUR_REFERENCE-X173L",
                        "status": "active",
                        "timeZone": "Europe/Amsterdam"
                      }
                    ],
                    "hasNext": true,
                    "hasPrevious": false
                  }
                },
                "get-accountHolders-id-success-200": {
                  "description": "Example response when retrieving an account holder",
                  "summary": "Account holder retrieved",
                  "value": {
                    "balancePlatform": "YOUR_BALANCE_PLATFORM",
                    "capabilities": {
                      "receiveFromBalanceAccount": {
                        "allowed": false,
                        "enabled": true,
                        "requested": true,
                        "verificationStatus": "pending"
                      },
                      "receiveFromPlatformPayments": {
                        "allowed": false,
                        "enabled": true,
                        "requested": true,
                        "verificationStatus": "pending"
                      },
                      "sendToBalanceAccount": {
                        "allowed": false,
                        "enabled": true,
                        "requested": true,
                        "verificationStatus": "pending"
                      },
                      "sendToTransferInstrument": {
                        "allowed": false,
                        "enabled": true,
                        "requested": true,
                        "verificationStatus": "pending"
                      }
                    },
                    "description": "Liable account holder used for international payments and payouts",
                    "id": "AH3227C223222C5GXQXF658WB",
                    "legalEntityId": "LE322JV223222D5GG42KN6869",
                    "reference": "S.Eller-001",
                    "status": "active"
                  }
                },
                "get-balanceAccounts-balanceAccountId-sweeps-success-200": {
                  "description": "Example response when retrieving sweeps under a balance account",
                  "summary": "Sweeps under a balance account retrieved",
                  "value": {
                    "hasNext": false,
                    "hasPrevious": false,
                    "sweeps": [
                      {
                        "counterparty": {
                          "balanceAccountId": "BA32272223222B5FTD2KR6TJD"
                        },
                        "currency": "EUR",
                        "id": "SWPC4227C224555B5FTD2NT2JV4WN5",
                        "schedule": {
                          "type": "daily"
                        },
                        "status": "active",
                        "targetAmount": {
                          "currency": "EUR",
                          "value": 0
                        },
                        "triggerAmount": {
                          "currency": "EUR",
                          "value": 0
                        },
                        "type": "push"
                      }
                    ]
                  }
                },
                "get-balanceAccounts-balanceAccountId-sweeps-sweepId-success-200": {
                  "description": "Example response when retrieving a sweep",
                  "summary": "Sweep retrieved",
                  "value": {
                    "counterparty": {
                      "balanceAccountId": "BA32272223222B5FTD2KR6TJD"
                    },
                    "currency": "EUR",
                    "id": "SWPC4227C224555B5FTD2NT2JV4WN5",
                    "schedule": {
                      "type": "daily"
                    },
                    "status": "active",
                    "targetAmount": {
                      "currency": "EUR",
                      "value": 0
                    },
                    "triggerAmount": {
                      "currency": "EUR",
                      "value": 0
                    },
                    "type": "push"
                  }
                },
                "get-balanceAccounts-id-paymentInstruments-success-200": {
                  "description": "Example response when retrieving a list of payment instruments under a balance account",
                  "summary": "List of payment instruments retrieved",
                  "value": {
                    "hasNext": true,
                    "hasPrevious": false,
                    "paymentInstruments": [
                      {
                        "balanceAccountId": "BA32272223222B59CZ3T52DKZ",
                        "card": {
                          "bin": "555544",
                          "brand": "mc",
                          "brandVariant": "mc",
                          "cardholderName": "name",
                          "expiration": {
                            "month": "12",
                            "year": "2022"
                          },
                          "formFactor": "virtual",
                          "lastFour": "2357",
                          "number": "************2357"
                        },
                        "id": "PI32272223222B59M5TM658DT",
                        "issuingCountryCode": "GB",
                        "status": "active",
                        "type": "card"
                      },
                      {
                        "balanceAccountId": "BA32272223222B59CZ3T52DKZ",
                        "card": {
                          "bin": "555544",
                          "brand": "mc",
                          "brandVariant": "mc",
                          "cardholderName": "name",
                          "expiration": {
                            "month": "01",
                            "year": "2023"
                          },
                          "formFactor": "virtual",
                          "lastFour": "8331",
                          "number": "************8331"
                        },
                        "id": "PI32272223222B59PXDGQDLSF",
                        "issuingCountryCode": "GB",
                        "status": "active",
                        "type": "card"
                      }
                    ]
                  }
                },
                "get-balanceAccounts-id-success-200": {
                  "description": "Example response for retrieving a balance account",
                  "summary": "Balance account details retrieved",
                  "value": {
                    "accountHolderId": "AH32272223222B59K6RTQBFNZ",
                    "balances": [
                      {
                        "available": 0,
                        "balance": 0,
                        "currency": "EUR",
                        "reserved": 0
                      }
                    ],
                    "defaultCurrencyCode": "EUR",
                    "id": "BA3227C223222B5BLP6JQC3FD",
                    "status": "active",
                    "timeZone": "Europe/Amsterdam"
                  }
                },
                "get-balancePlatforms-id-accountHolders-success-200": {
                  "description": "Example response when retrieving a list of account holders under a balance platform",
                  "summary": "List of account holders retrieved",
                  "value": {
                    "accountHolders": [
                      {
                        "description": "Test-305",
                        "id": "AH32272223222B5GFSNSXFFL9",
                        "legalEntityId": "LE3227C223222D5D8S5S33M4M",
                        "reference": "LegalEntity internal error test",
                        "status": "active"
                      },
                      {
                        "description": "Test-751",
                        "id": "AH32272223222B5GFSNVGFFM7",
                        "legalEntityId": "LE3227C223222D5D8S5TT3SRX",
                        "reference": "LegalEntity internal error test",
                        "status": "active"
                      },
                      {
                        "description": "Explorer Holder",
                        "id": "AH32272223222B5GFWNRFFVR6",
                        "legalEntityId": "LE3227C223222D5D8S5TT3SRX",
                        "reference": "Account from the Explorer Holder",
                        "status": "active"
                      }
                    ],
                    "hasNext": true,
                    "hasPrevious": true
                  }
                },
                "get-balancePlatforms-id-success-200": {
                  "description": "Example response when retrieving a balance platform",
                  "summary": "Balance platform retrieved",
                  "value": {
                    "id": "YOUR_BALANCE_PLATFORM",
                    "status": "Active"
                  }
                },
                "get-paymentInstrumentGroups-id-success-200": {
                  "description": "Example response when retrieving a payment instrument group",
                  "summary": "Payment instrument group retrieved",
                  "value": {
                    "balancePlatform": "YOUR_BALANCE_PLATFORM",
                    "id": "PG3227C223222B5CMD3FJFKGZ",
                    "txVariant": "mc"
                  }
                },
                "get-paymentInstrumentGroups-id-transactionRules-success-200": {
                  "description": "Example response when retrieving a list of transaction rules applied to a payment instrument group",
                  "summary": "Transaction rules for a payment instrument group retrieved",
                  "value": {
                    "transactionRules": [
                      {
                        "aggregationLevel": "paymentInstrument",
                        "description": "Up to 1000 EUR per card for the last 12 hours",
                        "entityKey": {
                          "entityReference": "PG3227C223222C5GXR3M5592Q",
                          "entityType": "paymentInstrumentGroup"
                        },
                        "id": "TR3227C223222C5GXR3XP596N",
                        "interval": {
                          "duration": {
                            "unit": "hours",
                            "value": 12
                          },
                          "timeZone": "UTC",
                          "type": "sliding"
                        },
                        "outcomeType": "hardBlock",
                        "reference": "YOUR_REFERENCE_2918A",
                        "requestType": "authorization",
                        "ruleRestrictions": {
                          "totalAmount": {
                            "operation": "greaterThan",
                            "value": {
                              "currency": "EUR",
                              "value": 100000
                            }
                          }
                        },
                        "status": "inactive",
                        "type": "velocity"
                      },
                      {
                        "aggregationLevel": "paymentInstrument",
                        "description": "NL only",
                        "entityKey": {
                          "entityReference": "PG3227C223222C5GXR3M5592Q",
                          "entityType": "paymentInstrumentGroup"
                        },
                        "id": "TR3227C223222C5GXR3WC595H",
                        "interval": {
                          "duration": {
                            "unit": "hours",
                            "value": 12
                          },
                          "timeZone": "UTC",
                          "type": "sliding"
                        },
                        "outcomeType": "hardBlock",
                        "reference": "myRule12345",
                        "requestType": "authorization",
                        "ruleRestrictions": {
                          "totalAmount": {
                            "operation": "greaterThan",
                            "value": {
                              "currency": "EUR",
                              "value": 100000
                            }
                          }
                        },
                        "status": "inactive",
                        "type": "velocity"
                      }
                    ]
                  }
                },
                "get-paymentInstruments-id-success-200": {
                  "description": "Example response for retrieving payment instruments associated with a balance account",
                  "summary": "Payment instruments retrieved",
                  "value": {
                    "balanceAccountId": "BA32272223222B59CZ3T52DKZ",
                    "card": {
                      "bin": "555544",
                      "brand": "mc",
                      "brandVariant": "mcdebit",
                      "cardholderName": "Simon Hopper",
                      "expiration": {
                        "month": "01",
                        "year": "2024"
                      },
                      "formFactor": "virtual",
                      "lastFour": "3548",
                      "number": "************3548"
                    },
                    "description": "S. Hopper - Main card",
                    "id": "PI32272223222B5CMD3MQ3HXX",
                    "issuingCountryCode": "GB",
                    "status": "active",
                    "type": "card"
                  }
                },
                "get-paymentInstruments-id-transactionRules-success-200": {
                  "description": "Example response when retrieving a list of transaction rules applied to a payment instrument",
                  "summary": "Transaction rules for a payment instrument retrieved",
                  "value": {
                    "transactionRules": [
                      {
                        "description": "Only allow point-of-sale transactions",
                        "entityKey": {
                          "entityReference": "PI3227C223222B5FN65FN5NS9",
                          "entityType": "paymentInstrument"
                        },
                        "id": "TR32272223222B5GFSGFLFCHM",
                        "interval": {
                          "timeZone": "UTC",
                          "type": "perTransaction"
                        },
                        "outcomeType": "hardBlock",
                        "reference": "YOUR_REFERENCE_4F7346",
                        "requestType": "authorization",
                        "ruleRestrictions": {
                          "processingTypes": {
                            "operation": "noneMatch",
                            "value": [
                              "pos"
                            ]
                          }
                        },
                        "startDate": "2022-08-02T16:07:00.851374+02:00",
                        "status": "active",
                        "type": "blockList"
                      },
                      {
                        "description": "Set the maximum number of active network tokens to one for this card",
                        "entityKey": {
                          "entityReference": "PI3227C223222B5FN65FN5NS9",
                          "entityType": "paymentInstrument"
                        },
                        "id": "TR32272223222C5GQJ93L7J8Z",
                        "interval": {
                          "timeZone": "UTC",
                          "type": "perTransaction"
                        },
                        "outcomeType": "hardBlock",
                        "reference": "myRule123",
                        "requestType": "authorization",
                        "ruleRestrictions": {
                          "activeNetworkTokens": {
                            "operation": "greaterThanOrEqualTo",
                            "value": 1
                          }
                        },
                        "startDate": "2022-10-03T14:48:28.999314+02:00",
                        "status": "active",
                        "type": "blockList"
                      }
                    ]
                  }
                },
                "get-transactionRules-transactionRuleId-success-200": {
                  "description": "Example response when retrieving a transaction rule",
                  "summary": "Transaction rules retrieved",
                  "value": {
                    "transactionRule": {
                      "description": "Only allow point-of-sale transactions",
                      "entityKey": {
                        "entityReference": "PI3227C223222B5FN65FN5NS9",
                        "entityType": "paymentInstrument"
                      },
                      "id": "TR32272223222B5GFSGFLFCHM",
                      "interval": {
                        "timeZone": "UTC",
                        "type": "perTransaction"
                      },
                      "outcomeType": "hardBlock",
                      "reference": "YOUR_REFERENCE_4F7346",
                      "requestType": "authorization",
                      "ruleRestrictions": {
                        "processingTypes": {
                          "operation": "noneMatch",
                          "value": [
                            "pos"
                          ]
                        }
                      },
                      "startDate": "2022-08-02T16:07:00.851374+02:00",
                      "status": "active",
                      "type": "blockList"
                    }
                  }
                },
                "patch-accountHolders-id-requestAccountHolderCapability": {
                  "description": "Example request for the `receivePayments` capability for an account holder",
                  "summary": "Request account holder capability",
                  "value": {
                    "capabilities": {
                      "receivePayments": {
                        "requested": true
                      }
                    },
                    "description": "Liable account holder used for international payments and payouts",
                    "legalEntityId": "LE322JV223222D5GG42KN6869",
                    "reference": "S.Eller-001"
                  }
                },
                "patch-accountHolders-id-requestAccountHolderCapability-200": {
                  "description": "Example response for requesting the `receivePayments` capability for an account holder",
                  "summary": "Account holder capability requested",
                  "value": {
                    "balancePlatform": "YOUR_BALANCE_PLATFORM",
                    "capabilities": {
                      "receivePayments": {
                        "allowed": false,
                        "enabled": false,
                        "requested": true,
                        "verificationStatus": "pending"
                      }
                    },
                    "description": "Liable account holder used for international payments and payouts",
                    "id": "AH3227C223222C5GKR23686TF",
                    "legalEntityId": "LE322JV223222F5GKQZZ9DS99",
                    "reference": "S.Eller-001",
                    "status": "active"
                  }
                },
                "patch-accountHolders-id-updateAccountHolderStatus": {
                  "description": "Example request for permanently deactivating an account holder",
                  "summary": "Deactivate an account holder",
                  "value": {
                    "status": "closed"
                  }
                },
                "patch-accountHolders-id-updateAccountHolderStatus-200": {
                  "description": "Example response for permanently deactivating an account holder",
                  "summary": "Account holder deactivated",
                  "value": {
                    "balancePlatform": "YOUR_BALANCE_PLATFORM",
                    "description": "Liable account holder used for international payments and payouts",
                    "id": "AH3227C223222C5GKR23686TF",
                    "legalEntityId": "LE322JV223222F5GKQZZ9DS99",
                    "reference": "S.Eller-001",
                    "status": "closed"
                  }
                },
                "patch-balanceAccounts-balanceAccountId-sweeps-sweepId-updateSweep-status": {
                  "description": "Example request for updating a sweep",
                  "summary": "Update the status of a sweep",
                  "value": {
                    "status": "inactive"
                  }
                },
                "patch-balanceAccounts-balanceAccountId-sweeps-sweepId-updateSweep-status-200": {
                  "description": "Example response for updating a sweep",
                  "summary": "Sweep status updated",
                  "value": {
                    "counterparty": {
                      "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
                    },
                    "currency": "EUR",
                    "id": "SWPC4227C224555B5FTD2NT2JV4WN5",
                    "schedule": {
                      "type": "balance"
                    },
                    "status": "inactive",
                    "triggerAmount": {
                      "currency": "EUR",
                      "value": 50000
                    },
                    "type": "pull"
                  }
                },
                "patch-paymentInstruments-id-updatePaymentInstrumentBalanceAccount": {
                  "description": "Example request for updating the balance account of a payment instrument",
                  "summary": "Update the balance account linked to a payment instrument",
                  "value": {
                    "balanceAccountId": "BA32272223222B5CM82WL892M"
                  }
                },
                "patch-paymentInstruments-id-updatePaymentInstrumentBalanceAccount-200": {
                  "description": "Example response for updating the balance account linked to a payment instrument",
                  "summary": "Balance account updated",
                  "value": {
                    "balanceAccountId": "BA32272223222B5CM82WL892M",
                    "card": {
                      "bin": "555544",
                      "brand": "mc",
                      "brandVariant": "mcdebit",
                      "cardholderName": "Simon Hopper",
                      "expiration": {
                        "month": "01",
                        "year": "2024"
                      },
                      "formFactor": "virtual",
                      "lastFour": "5785",
                      "number": "************5785"
                    },
                    "description": "S. Hopper - Main card",
                    "id": "PI3227C223222B5CMD278FKGS",
                    "issuingCountryCode": "GB",
                    "status": "inactive",
                    "type": "card"
                  }
                },
                "patch-paymentInstruments-id-updatePaymentInstrumentStatus": {
                  "description": "Example request for updating the status of a payment instrument",
                  "summary": "Update the status of a payment instrument",
                  "value": {
                    "status": "suspended"
                  }
                },
                "patch-paymentInstruments-id-updatePaymentInstrumentStatus-200": {
                  "description": "Example response for updating the status of a payment instrument",
                  "summary": "Payment instrument status updated",
                  "value": {
                    "balanceAccountId": "BA32272223222B59CZ3T52DKZ",
                    "card": {
                      "bin": "555544",
                      "brand": "mc",
                      "brandVariant": "mcdebit",
                      "cardholderName": "Simon Hopper",
                      "expiration": {
                        "month": "01",
                        "year": "2024"
                      },
                      "formFactor": "virtual",
                      "lastFour": "5785",
                      "number": "************5785"
                    },
                    "description": "S. Hopper - Main card",
                    "id": "PI3227C223222B5CMD278FKGS",
                    "issuingCountryCode": "GB",
                    "status": "suspended",
                    "type": "card"
                  }
                },
                "patch-transactionRules-transactionRuleId-updateTransactionRuleStatus": {
                  "description": "Example request for updating the status of a transaction rule",
                  "summary": "Update the status of transaction rule",
                  "value": {
                    "status": "inactive"
                  }
                },
                "patch-transactionRules-transactionRuleId-updateTransactionRuleStatus-200": {
                  "description": "Example response for successfully updating the status of a transaction rule",
                  "summary": "Transaction rule status updated",
                  "value": {
                    "aggregationLevel": "paymentInstrument",
                    "description": "Up to 1000 EUR per card for the last 12 hours",
                    "entityKey": {
                      "entityReference": "PG3227C223222C5GXR3M5592Q",
                      "entityType": "paymentInstrumentGroup"
                    },
                    "id": "TR3227C223222C5GXR3XP596N",
                    "interval": {
                      "duration": {
                        "unit": "hours",
                        "value": 12
                      },
                      "timeZone": "UTC",
                      "type": "sliding"
                    },
                    "outcomeType": "hardBlock",
                    "reference": "YOUR_REFERENCE_2918A",
                    "requestType": "authorization",
                    "ruleRestrictions": {
                      "totalAmount": {
                        "operation": "greaterThan",
                        "value": {
                          "currency": "EUR",
                          "value": 100000
                        }
                      }
                    },
                    "startDate": "2022-11-17T00:07:09.10057663+01:00",
                    "status": "inactive",
                    "type": "velocity"
                  }
                },
                "post-accountHolders-createAccountHolder": {
                  "description": "Example request for creating an account holder",
                  "summary": "Create an account holder",
                  "value": {
                    "description": "Liable account holder used for international payments and payouts",
                    "legalEntityId": "LE322JV223222D5GG42KN6869",
                    "reference": "S.Eller-001"
                  }
                },
                "post-balanceAccounts-balanceAccountId-sweeps-createSweep-pull": {
                  "description": "Example request for creating a pull sweep",
                  "summary": "Create a sweep to pull funds in to a balance account",
                  "value": {
                    "counterparty": {
                      "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
                    },
                    "currency": "EUR",
                    "schedule": {
                      "type": "balance"
                    },
                    "status": "active",
                    "triggerAmount": {
                      "currency": "EUR",
                      "value": 50000
                    },
                    "type": "pull"
                  }
                },
                "post-balanceAccounts-balanceAccountId-sweeps-createSweep-pull-200": {
                  "description": "Example response for creating a pull sweep",
                  "summary": "Sweep of pull type created",
                  "value": {
                    "counterparty": {
                      "merchantAccount": "YOUR_MERCHANT_ACCOUNT"
                    },
                    "currency": "EUR",
                    "id": "SWPC4227C224555B5FTD2NT2JV4WN5",
                    "schedule": {
                      "type": "balance"
                    },
                    "status": "active",
                    "triggerAmount": {
                      "currency": "EUR",
                      "value": 50000
                    },
                    "type": "pull"
                  }
                },
                "post-balanceAccounts-balanceAccountId-sweeps-createSweep-push": {
                  "description": "Example request for creating a push sweep",
                  "summary": "Create a sweep to push funds out of a balance account",
                  "value": {
                    "counterparty": {
                      "balanceAccountId": "BA32278887611B5FTD2KR6TJD"
                    },
                    "currency": "EUR",
                    "schedule": {
                      "type": "weekly"
                    },
                    "status": "active",
                    "triggerAmount": {
                      "currency": "EUR",
                      "value": 50000
                    },
                    "type": "push"
                  }
                },
                "post-balanceAccounts-balanceAccountId-sweeps-createSweep-push-200": {
                  "description": "Example response for creating a push sweep",
                  "summary": "Sweep of push type created",
                  "value": {
                    "counterparty": {
                      "balanceAccountId": "BA32278887611B5FTD2KR6TJD"
                    },
                    "currency": "EUR",
                    "id": "SWPC4227C224555B5FTD2NT2JV4WN5",
                    "schedule": {
                      "type": "weekly"
                    },
                    "status": "active",
                    "triggerAmount": {
                      "currency": "EUR",
                      "value": 50000
                    },
                    "type": "push"
                  }
                },
                "post-balanceAccounts-balanceAccountId-sweeps-createSweep-push-priorities": {
                  "description": "Example request for creating a push sweep with priorities",
                  "summary": "Create a sweep to push funds out of a balance account with set priorities",
                  "value": {
                    "category": "bank",
                    "counterparty": {
                      "transferInstrumentId": "SE322JV223222J5HGLCGF2WDV"
                    },
                    "currency": "EUR",
                    "priorities": [
                      "fast",
                      "instant"
                    ],
                    "schedule": {
                      "type": "weekly"
                    },
                    "status": "active",
                    "triggerAmount": {
                      "currency": "EUR",
                      "value": 50000
                    },
                    "type": "push"
                  }
                },
                "post-balanceAccounts-balanceAccountId-sweeps-createSweep-push-priorities-200": {
                  "description": "Example response for creating a push sweep with priorities",
                  "summary": "Sweep of push type with priorities created",
                  "value": {
                    "category": "bank",
                    "counterparty": {
                      "transferInstrumentId": "SE322JV223222J5HGLCGF2WDV"
                    },
                    "currency": "EUR",
                    "id": "SWPC4227C224555B5FTD2NT2JV4WN9",
                    "priorities": [
                      "fast",
                      "instant"
                    ],
                    "schedule": {
                      "type": "weekly"
                    },
                    "status": "active",
                    "triggerAmount": {
                      "currency": "EUR",
                      "value": 50000
                    },
                    "type": "push"
                  }
                },
                "post-balanceAccounts-createBalanceAccount": {
                  "description": "Example request for creating a balance account",
                  "summary": "Create a balance account",
                  "value": {
                    "accountHolderId": "AH32272223222C5GXTD343TKP",
                    "description": "S.Hopper - Main balance account"
                  }
                },
                "post-paymentInstrumentGroups-createPaymentInstrumentGroups": {
                  "description": "Example request for creating a payment instrument group",
                  "summary": "Create a payment instrument group",
                  "value": {
                    "balancePlatform": "YOUR_BALANCE_PLATFORM",
                    "txVariant": "mc"
                  }
                },
                "post-paymentInstruments-createBusinessAccountNL": {
                  "description": "Example request for creating a business account in NL",
                  "summary": "Create a business account in NL",
                  "value": {
                    "balanceAccountId": "BA3227C223222B5CTBLR8BWJB",
                    "description": "YOUR_DESCRIPTION",
                    "issuingCountryCode": "NL",
                    "type": "bankAccount"
                  }
                },
                "post-paymentInstruments-createBusinessAccountNL-200": {
                  "description": "Example response for creating a business account in NL",
                  "summary": "Business account in NL created",
                  "value": {
                    "balanceAccountId": "BA3227C223222B5CTBLR8BWJB",
                    "bankAccount": {
                      "iban": "NL20ADYB2017000035"
                    },
                    "description": "YOUR_DESCRIPTION",
                    "id": "PI322LJ223222B5DJS7CD9LWL",
                    "issuingCountryCode": "NL",
                    "status": "Active",
                    "type": "bankAccount"
                  }
                },
                "post-paymentInstruments-createBusinessAccountUS": {
                  "description": "Example request for creating a business account in the US",
                  "summary": "Create a business account in the US",
                  "value": {
                    "balanceAccountId": "BA3227C223222B5CTBLR8BWJB",
                    "description": "YOUR_DESCRIPTION",
                    "issuingCountryCode": "US",
                    "type": "bankAccount"
                  }
                },
                "post-paymentInstruments-createBusinessAccountUS-200": {
                  "description": "Example response for creating a business account in the US",
                  "summary": "Business account in the US created",
                  "value": {
                    "balanceAccountId": "BA3227C223222B5CTBLR8BWJB",
                    "bankAccount": {
                      "accountNumber": "333720756",
                      "accountType": "checking",
                      "routingNumber": "21000021"
                    },
                    "description": "YOUR_DESCRIPTION",
                    "id": "PI322LJ223222B5DJS7CD9LWL",
                    "issuingCountryCode": "US",
                    "status": "Active",
                    "type": "bankAccount"
                  }
                },
                "post-paymentInstruments-createPhysicalCard": {
                  "description": "Example request for creating a physical card",
                  "summary": "Create a physical card",
                  "value": {
                    "balanceAccountId": "BA32272223222B59CZ3T52DKZ",
                    "card": {
                      "brand": "mc",
                      "brandVariant": "mcdebit",
                      "cardholderName": "Sam Hopper",
                      "configuration": {
                        "configurationProfileId": "CP123AB45678C91ABCD2ABCDE"
                      },
                      "deliveryContact": {
                        "address": {
                          "city": "Amsterdam",
                          "country": "NL",
                          "line1": "Brannan Street",
                          "line2": "274",
                          "postalCode": "1020CD",
                          "stateOrProvince": "NH"
                        },
                        "name": {
                          "firstName": "Sam",
                          "lastName": "Hopper"
                        }
                      },
                      "formFactor": "physical"
                    },
                    "description": "S.Hopper - Main card",
                    "issuingCountryCode": "NL",
                    "status": "inactive",
                    "type": "card"
                  }
                },
                "post-paymentInstruments-createPhysicalCard-200": {
                  "description": "Example response for creating a physical card",
                  "summary": "Physical card created",
                  "value": {
                    "balanceAccountId": "BA32272223222B59CZ3T52DKZ",
                    "card": {
                      "authentication": {
                        "password": "******",
                        "phone": {
                          "number": "+123456789",
                          "type": "mobile"
                        }
                      },
                      "bin": "555544",
                      "brand": "mc",
                      "brandVariant": "mcdebit",
                      "cardholderName": "Sam Hopper",
                      "configuration": {
                        "configurationProfileId": "CP123AB45678C91ABCD2ABCDE"
                      },
                      "deliveryContact": {
                        "address": {
                          "city": "Amsterdam",
                          "country": "NL",
                          "line1": "Brannan Street",
                          "line2": "274",
                          "postalCode": "1020CD",
                          "stateOrProvince": "NH"
                        },
                        "name": {
                          "firstName": "Sam",
                          "lastName": "Hopper"
                        }
                      },
                      "expiration": {
                        "month": "08",
                        "year": "2024"
                      },
                      "formFactor": "physical",
                      "lastFour": "2765",
                      "number": "************5785"
                    },
                    "description": "S. Hopper - Main card",
                    "id": "PI3227C223222B5BPCMFXD2XG",
                    "issuingCountryCode": "NL",
                    "status": "inactive",
                    "type": "card"
                  }
                },
                "post-paymentInstruments-createVirtualCard": {
                  "description": "Example request for creating a virtual card",
                  "summary": "Create a virtual card",
                  "value": {
                    "balanceAccountId": "BA3227C223222B5FG88S28BGN",
                    "card": {
                      "brand": "mc",
                      "brandVariant": "mcdebit",
                      "cardholderName": "Simon Hopper",
                      "formFactor": "virtual"
                    },
                    "description": "My test card",
                    "issuingCountryCode": "NL",
                    "type": "card"
                  }
                },
                "post-paymentInstruments-createVirtualCard-200": {
                  "description": "Example response for creating a virtual card",
                  "summary": "Virtual card created",
                  "value": {
                    "balanceAccountId": "BA3227C223222B5FG88S28BGN",
                    "card": {
                      "bin": "555544",
                      "brand": "mc",
                      "brandVariant": "mcdebit",
                      "cardholderName": "Simon Hopper",
                      "cvc": "136",
                      "expiration": {
                        "month": "11",
                        "year": "2025"
                      },
                      "formFactor": "virtual",
                      "lastFour": "3703",
                      "number": "5555444411213703"
                    },
                    "description": "My test card",
                    "id": "PI32272223222C5GXTDWH3TTN",
                    "issuingCountryCode": "NL",
                    "status": "active",
                    "type": "card"
                  }
                },
                "post-transactionRules-createTransactionRuleAllowPos": {
                  "description": "Example request to allow only point-of-sale transactions",
                  "summary": "Allow only point-of-sale transactions",
                  "value": {
                    "description": "Allow only point-of-sale transactions",
                    "entityKey": {
                      "entityReference": "PI3227C223222B5FG88SB8BHR",
                      "entityType": "paymentInstrument"
                    },
                    "interval": {
                      "type": "perTransaction"
                    },
                    "reference": "YOUR_REFERENCE_4F7346",
                    "ruleRestrictions": {
                      "processingTypes": {
                        "operation": "noneMatch",
                        "value": [
                          "pos"
                        ]
                      }
                    },
                    "status": "active",
                    "type": "blockList"
                  }
                },
                "post-transactionRules-createTransactionRuleIncreaseScore": {
                  "description": "Example request to increase the score of a card",
                  "summary": "Increase the score of a card",
                  "value": {
                    "description": "Assign score if more than 500 EUR in 2 hours",
                    "entityKey": {
                      "entityReference": "PI3227C223222B5FG88SB8BHR",
                      "entityType": "paymentInstrument"
                    },
                    "interval": {
                      "duration": {
                        "unit": "hours",
                        "value": 2
                      },
                      "type": "sliding"
                    },
                    "outcomeType": "scoreBased",
                    "reference": "myRule11789",
                    "ruleRestrictions": {
                      "totalAmount": {
                        "operation": "greaterThan",
                        "value": {
                          "currency": "EUR",
                          "value": 50000
                        }
                      }
                    },
                    "score": 20,
                    "type": "velocity"
                  }
                },
                "post-transactionRules-createTransactionRuleLimitSliding": {
                  "description": "Example request to limit the total amount in a sliding interval",
                  "summary": "Limit total amount in the last 12 hours",
                  "value": {
                    "aggregationLevel": "paymentInstrument",
                    "description": "Up to 1000 EUR per card for the last 12 hours",
                    "entityKey": {
                      "entityReference": "BA3227C223222B5FN65355NR3",
                      "entityType": "balanceAccount"
                    },
                    "interval": {
                      "duration": {
                        "unit": "hours",
                        "value": 12
                      },
                      "type": "sliding"
                    },
                    "outcomeType": "hardBlock",
                    "reference": "YOUR_REFERENCE_2918A",
                    "ruleRestrictions": {
                      "totalAmount": {
                        "operation": "greaterThan",
                        "value": {
                          "currency": "EUR",
                          "value": 100000
                        }
                      }
                    },
                    "status": "active",
                    "type": "velocity"
                  }
                },
                "post-transactionRules-createTransactionRuleLimitTransaction": {
                  "description": "Example request to limit total amount of international transations",
                  "summary": "Limit international payments",
                  "value": {
                    "description": "Up to 50 EUR international transactions",
                    "entityKey": {
                      "entityReference": "BA3227C223222B5FN65355NR3",
                      "entityType": "balanceAccount"
                    },
                    "interval": {
                      "type": "daily"
                    },
                    "outcomeType": "hardBlock",
                    "reference": "YOUR_REFERENCE_B2634",
                    "ruleRestrictions": {
                      "internationalTransaction": {
                        "operation": "equals",
                        "value": true
                      },
                      "totalAmount": {
                        "operation": "greaterThan",
                        "value": {
                          "currency": "EUR",
                          "value": 5000
                        }
                      }
                    },
                    "status": "active",
                    "type": "velocity"
                  }
                },
                "post-validateBankAccountIdentification-validateBankAccountIdentificationIban": {
                  "summary": "Validate an IBAN",
                  "value": {
                    "accountIdentification": {
                      "iban": "1001001234",
                      "type": "iban"
                    }
                  }
                },
                "post-validateBankAccountIdentification-validateBankAccountIdentificationIban-422": {
                  "summary": "Invalid IBAN details",
                  "value": {
                    "errorCode": "33_01",
                    "invalidFields": [
                      {
                        "message": "Invalid IBAN.",
                        "name": "iban"
                      }
                    ],
                    "status": 422,
                    "title": "Invalid bank account identification details provided",
                    "type": "https://docs.adyen.com/errors/validation"
                  }
                },
                "post-validateBankAccountIdentification-validateBankAccountIdentificationUs": {
                  "summary": "Validate a US bank account",
                  "value": {
                    "accountIdentification": {
                      "accountNumber": "12345JHDhjkf67890",
                      "routingNumber": "121000cxhgjhzxg248",
                      "type": "usLocal"
                    }
                  }
                },
                "post-validateBankAccountIdentification-validateBankAccountIdentificationUs-422": {
                  "summary": "Invalid US bank account details",
                  "value": {
                    "errorCode": "33_01",
                    "invalidFields": [
                      {
                        "message": "Invalid account number.",
                        "name": "accountNumber"
                      },
                      {
                        "message": "Invalid routing number.",
                        "name": "routingNumber"
                      }
                    ],
                    "status": 422,
                    "title": "Invalid bank account identification details provided",
                    "type": "https://docs.adyen.com/errors/validation"
                  }
                }
              },
              "schemas": {
                "AULocalAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "accountNumber": {
                      "description": "The bank account number, without separators or whitespace.",
                      "maxLength": 9,
                      "minLength": 5,
                      "type": "string"
                    },
                    "bsbCode": {
                      "description": "The 6-digit [Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch), without separators or whitespace.",
                      "maxLength": 6,
                      "minLength": 6,
                      "type": "string"
                    },
                    "type": {
                      "default": "auLocal",
                      "description": "**auLocal**",
                      "enum": [
                        "auLocal"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "accountNumber",
                    "bsbCode"
                  ],
                  "type": "object"
                },
                "AccountHolder": {
                  "properties": {
                    "balancePlatform": {
                      "description": "The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the account holder belongs. Required in the request if your API credentials can be used for multiple balance platforms.",
                      "type": "string"
                    },
                    "capabilities": {
                      "additionalProperties": {
                        "$ref": "#/components/schemas/AccountHolderCapability"
                      },
                      "description": "Contains key-value pairs that specify the actions that an account holder can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.",
                      "type": "object"
                    },
                    "contactDetails": {
                      "$ref": "#/components/schemas/ContactDetails",
                      "deprecated": true,
                      "description": "Contact details of the account holder."
                    },
                    "description": {
                      "description": "Your description for the account holder, maximum 300 characters.",
                      "maxLength": 300,
                      "type": "string"
                    },
                    "id": {
                      "description": "The unique identifier of the account holder.",
                      "readOnly": true,
                      "type": "string"
                    },
                    "legalEntityId": {
                      "description": "The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) associated with the account holder. Adyen performs a verification process against the legal entity of the account holder.",
                      "type": "string"
                    },
                    "primaryBalanceAccount": {
                      "description": "The ID of the account holder's primary balance account. By default, this is set to the first balance account that you create for the account holder. To assign a different balance account, send a PATCH request.",
                      "type": "string"
                    },
                    "reference": {
                      "description": "Your reference for the account holder, maximum 150 characters.",
                      "maxLength": 150,
                      "type": "string"
                    },
                    "status": {
                      "description": "The status of the account holder.\n\nPossible values: \n\n * **active**: The account holder is active. This is the default status when creating an account holder. \n\n * **inactive (Deprecated)**: The account holder is temporarily inactive due to missing KYC details. You can set the account back to active by providing the missing KYC details. \n\n * **suspended**: The account holder is permanently deactivated by Adyen. This action cannot be undone. \n\n* **closed**: The account holder is permanently deactivated by you. This action cannot be undone.",
                      "enum": [
                        "active",
                        "closed",
                        "inactive",
                        "suspended"
                      ],
                      "type": "string"
                    },
                    "timeZone": {
                      "description": "The [time zone](https://www.iana.org/time-zones) of the account holder. For example, **Europe/Amsterdam**.\nDefaults to the time zone of the balance platform if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).",
                      "type": "string"
                    },
                    "verificationDeadlines": {
                      "description": "List of verification deadlines and the capabilities that will be disallowed if verification errors are not resolved.",
                      "items": {
                        "$ref": "#/components/schemas/VerificationDeadline"
                      },
                      "readOnly": true,
                      "type": "array",
                      "x-addedInVersion": "2"
                    }
                  },
                  "required": [
                    "legalEntityId",
                    "id"
                  ],
                  "type": "object"
                },
                "AccountHolderCapability": {
                  "properties": {
                    "allowed": {
                      "description": "Indicates whether the capability is allowed. Adyen sets this to **true** if the verification is successful and the account holder is permitted to use the capability.",
                      "readOnly": true,
                      "type": "boolean"
                    },
                    "allowedLevel": {
                      "description": "The capability level that is allowed for the account holder.\n\nPossible values: **notApplicable**, **low**, **medium**, **high**.",
                      "enum": [
                        "high",
                        "low",
                        "medium",
                        "notApplicable"
                      ],
                      "readOnly": true,
                      "type": "string"
                    },
                    "allowedSettings": {
                      "$ref": "#/components/schemas/JSONObject",
                      "description": "A JSON object containing the settings that are allowed for the account holder.",
                      "readOnly": true
                    },
                    "enabled": {
                      "description": "Indicates whether the capability is enabled. If **false**, the capability is temporarily disabled for the account holder.",
                      "type": "boolean"
                    },
                    "problems": {
                      "description": "Contains verification errors and the actions that you can take to resolve them.",
                      "items": {
                        "$ref": "#/components/schemas/CapabilityProblem"
                      },
                      "readOnly": true,
                      "type": "array"
                    },
                    "requested": {
                      "description": "Indicates whether the capability is requested. To check whether the account holder is permitted to use the capability, refer to the `allowed` field.",
                      "type": "boolean"
                    },
                    "requestedLevel": {
                      "description": "The requested level of the capability. Some capabilities, such as those used in [card issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different levels. Levels increase the capability, but also require additional checks and increased monitoring.\n\nPossible values: **notApplicable**, **low**, **medium**, **high**.",
                      "enum": [
                        "high",
                        "low",
                        "medium",
                        "notApplicable"
                      ],
                      "type": "string"
                    },
                    "requestedSettings": {
                      "$ref": "#/components/schemas/JSONObject",
                      "description": "A JSON object containing the settings that were requested for the account holder.",
                      "readOnly": true
                    },
                    "transferInstruments": {
                      "description": "Contains the status of the transfer instruments associated with this capability. ",
                      "items": {
                        "$ref": "#/components/schemas/AccountSupportingEntityCapability"
                      },
                      "type": "array"
                    },
                    "verificationStatus": {
                      "description": "The status of the verification checks for the capability.\n\nPossible values:\n\n* **pending**: Adyen is running the verification.\n\n* **invalid**: The verification failed. Check if the `errors` array contains more information.\n\n* **valid**: The verification has been successfully completed.\n\n* **rejected**: Adyen has verified the information, but found reasons to not allow the capability.\n",
                      "enum": [
                        "invalid",
                        "pending",
                        "rejected",
                        "valid"
                      ],
                      "readOnly": true,
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "AccountHolderInfo": {
                  "properties": {
                    "balancePlatform": {
                      "description": "The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the account holder belongs. Required in the request if your API credentials can be used for multiple balance platforms.",
                      "type": "string"
                    },
                    "capabilities": {
                      "additionalProperties": {
                        "$ref": "#/components/schemas/AccountHolderCapability"
                      },
                      "description": "Contains key-value pairs that specify the actions that an account holder can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.",
                      "type": "object"
                    },
                    "contactDetails": {
                      "$ref": "#/components/schemas/ContactDetails",
                      "deprecated": true,
                      "description": "Contact details of the account holder."
                    },
                    "description": {
                      "description": "Your description for the account holder, maximum 300 characters.",
                      "maxLength": 300,
                      "type": "string"
                    },
                    "legalEntityId": {
                      "description": "The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) associated with the account holder. Adyen performs a verification process against the legal entity of the account holder.",
                      "type": "string"
                    },
                    "reference": {
                      "description": "Your reference for the account holder, maximum 150 characters.",
                      "maxLength": 150,
                      "type": "string"
                    },
                    "timeZone": {
                      "description": "The [time zone](https://www.iana.org/time-zones) of the account holder. For example, **Europe/Amsterdam**.\nDefaults to the time zone of the balance platform if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).",
                      "type": "string"
                    }
                  },
                  "required": [
                    "legalEntityId"
                  ],
                  "type": "object"
                },
                "AccountSupportingEntityCapability": {
                  "properties": {
                    "allowed": {
                      "description": "Indicates whether the supporting entity capability is allowed. Adyen sets this to **true** if the verification is successful and the account holder is permitted to use the capability.",
                      "readOnly": true,
                      "type": "boolean"
                    },
                    "allowedLevel": {
                      "description": "The capability level that is allowed for the account holder.\n\nPossible values: **notApplicable**, **low**, **medium**, **high**.",
                      "enum": [
                        "high",
                        "low",
                        "medium",
                        "notApplicable"
                      ],
                      "readOnly": true,
                      "type": "string"
                    },
                    "enabled": {
                      "description": "Indicates whether the capability is enabled. If **false**, the capability is temporarily disabled for the account holder.",
                      "type": "boolean"
                    },
                    "id": {
                      "description": "The ID of the supporting entity.",
                      "readOnly": true,
                      "type": "string"
                    },
                    "requested": {
                      "description": "Indicates whether the capability is requested. To check whether the account holder is permitted to use the capability, refer to the `allowed` field.",
                      "type": "boolean"
                    },
                    "requestedLevel": {
                      "description": "The requested level of the capability. Some capabilities, such as those used in [card issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different levels. Levels increase the capability, but also require additional checks and increased monitoring.\n\nPossible values: **notApplicable**, **low**, **medium**, **high**.",
                      "enum": [
                        "high",
                        "low",
                        "medium",
                        "notApplicable"
                      ],
                      "type": "string"
                    },
                    "verificationStatus": {
                      "description": "The status of the verification checks for the supporting entity capability.\n\nPossible values:\n\n* **pending**: Adyen is running the verification.\n\n* **invalid**: The verification failed. Check if the `errors` array contains more information.\n\n* **valid**: The verification has been successfully completed.\n\n* **rejected**: Adyen has verified the information, but found reasons to not allow the capability.\n",
                      "enum": [
                        "invalid",
                        "pending",
                        "rejected",
                        "valid"
                      ],
                      "readOnly": true,
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "ActiveNetworkTokensRestriction": {
                  "properties": {
                    "operation": {
                      "description": "Defines how the condition must be evaluated.",
                      "type": "string"
                    },
                    "value": {
                      "description": "The number of tokens.",
                      "format": "int32",
                      "type": "integer"
                    }
                  },
                  "required": [
                    "operation"
                  ],
                  "type": "object"
                },
                "AdditionalBankIdentification": {
                  "properties": {
                    "code": {
                      "description": "The value of the additional bank identification.",
                      "type": "string"
                    },
                    "type": {
                      "description": "The type of additional bank identification, depending on the country.\n\nPossible values:\n\n * **gbSortCode**: The 6-digit [UK sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or spaces\n * **usRoutingNumber**: The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or spaces.",
                      "enum": [
                        "gbSortCode",
                        "usRoutingNumber"
                      ],
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "Address": {
                  "properties": {
                    "city": {
                      "description": "The name of the city. Maximum length: 3000 characters.",
                      "maxLength": 3000,
                      "type": "string"
                    },
                    "country": {
                      "description": "The two-character ISO-3166-1 alpha-2 country code. For example, **US**.\n> If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.",
                      "type": "string"
                    },
                    "houseNumberOrName": {
                      "description": "The number or name of the house. Maximum length: 3000 characters.",
                      "maxLength": 3000,
                      "type": "string"
                    },
                    "postalCode": {
                      "description": "A maximum of five digits for an address in the US, or a maximum of ten characters for an address in all other countries.",
                      "type": "string"
                    },
                    "stateOrProvince": {
                      "description": "The two-character ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.\n> Required for the US and Canada.",
                      "type": "string"
                    },
                    "street": {
                      "description": "The name of the street. Maximum length: 3000 characters.\n> The house number should not be included in this field; it should be separately provided via `houseNumberOrName`.",
                      "maxLength": 3000,
                      "type": "string"
                    }
                  },
                  "required": [
                    "street",
                    "houseNumberOrName",
                    "city",
                    "postalCode",
                    "country"
                  ],
                  "type": "object"
                },
                "Address-2": {
                  "properties": {
                    "city": {
                      "description": "The name of the city.",
                      "type": "string"
                    },
                    "country": {
                      "description": "The two-character ISO-3166-1 alpha-2 country code. For example, **US**.\n>If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.",
                      "type": "string"
                    },
                    "line1": {
                      "description": "First line of the address.",
                      "type": "string"
                    },
                    "line2": {
                      "description": "Second line of the address.",
                      "type": "string"
                    },
                    "line3": {
                      "description": "Third line of the address.",
                      "type": "string"
                    },
                    "postalCode": {
                      "description": "The postal code.\nMaximum length:\n* 5 digits for an address in the US.\n* 10 characters for an address in all other countries.",
                      "type": "string"
                    },
                    "stateOrProvince": {
                      "description": "The two-letterISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.\n> Required for the US and Canada.",
                      "type": "string"
                    }
                  },
                  "required": [
                    "country"
                  ],
                  "type": "object"
                },
                "Amount": {
                  "properties": {
                    "currency": {
                      "description": "The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).",
                      "maxLength": 3,
                      "minLength": 3,
                      "type": "string"
                    },
                    "value": {
                      "description": "The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).",
                      "format": "int64",
                      "type": "integer"
                    }
                  },
                  "required": [
                    "value",
                    "currency"
                  ],
                  "type": "object"
                },
                "Authentication": {
                  "properties": {
                    "email": {
                      "description": "The email address where the one-time password (OTP) is sent.",
                      "type": "string"
                    },
                    "password": {
                      "description": "The password used for 3D Secure password-based authentication. The value must be between 1 to 30 characters and must only contain the following supported characters.\n\n* Characters between **a-z**, **A-Z**, and **0-9**\n\n* Special characters: **äöüßÄÖÜ+-*/ç%()=?!~#'\",;:$&àùòâôûáúó**",
                      "maxLength": 30,
                      "minLength": 1,
                      "type": "string"
                    },
                    "phone": {
                      "$ref": "#/components/schemas/Phone",
                      "description": "The phone number where the one-time password (OTP) is sent.\n\nThis object must have:\n\n* A `type` set to **mobile**.\n\n* A `number` with a valid country code.\n\n* A `number` with more than 4 digits, excluding the country code.\n\n>Make sure to verify that the card user owns the phone number."
                    }
                  },
                  "type": "object"
                },
                "Balance": {
                  "properties": {
                    "available": {
                      "description": "The remaining amount available for spending.",
                      "format": "int64",
                      "type": "integer"
                    },
                    "balance": {
                      "description": "The total amount in the balance.",
                      "format": "int64",
                      "type": "integer"
                    },
                    "currency": {
                      "description": "The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance.",
                      "type": "string"
                    },
                    "reserved": {
                      "description": "The amount reserved for payments that have been authorised, but have not been captured yet.",
                      "format": "int64",
                      "type": "integer"
                    }
                  },
                  "required": [
                    "currency",
                    "balance",
                    "reserved",
                    "available"
                  ],
                  "type": "object"
                },
                "BalanceAccount": {
                  "properties": {
                    "accountHolderId": {
                      "description": "The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/accountHolders__resParam_id) associated with the balance account.",
                      "type": "string"
                    },
                    "balances": {
                      "description": "List of balances with the amount and currency.",
                      "items": {
                        "$ref": "#/components/schemas/Balance"
                      },
                      "type": "array"
                    },
                    "defaultCurrencyCode": {
                      "description": "The default three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance account.\nThe default value is **EUR**.",
                      "type": "string"
                    },
                    "description": {
                      "description": "A human-readable description of the balance account, maximum 300 characters. You can use this parameter to distinguish between multiple balance accounts under an account holder.",
                      "maxLength": 300,
                      "type": "string"
                    },
                    "id": {
                      "description": "The unique identifier of the balance account.",
                      "type": "string"
                    },
                    "reference": {
                      "description": "Your reference for the balance account, maximum 150 characters.",
                      "maxLength": 150,
                      "type": "string"
                    },
                    "status": {
                      "description": "The status of the balance account, set to **active** by default. \n",
                      "enum": [
                        "active",
                        "closed",
                        "inactive",
                        "suspended"
                      ],
                      "type": "string"
                    },
                    "timeZone": {
                      "description": "The [time zone](https://www.iana.org/time-zones) of the balance account. For example, **Europe/Amsterdam**.\nDefaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).",
                      "type": "string"
                    }
                  },
                  "required": [
                    "accountHolderId",
                    "id"
                  ],
                  "type": "object"
                },
                "BalanceAccountBase": {
                  "properties": {
                    "accountHolderId": {
                      "description": "The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/accountHolders__resParam_id) associated with the balance account.",
                      "type": "string"
                    },
                    "defaultCurrencyCode": {
                      "description": "The default three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance account.\nThe default value is **EUR**.",
                      "type": "string"
                    },
                    "description": {
                      "description": "A human-readable description of the balance account, maximum 300 characters. You can use this parameter to distinguish between multiple balance accounts under an account holder.",
                      "maxLength": 300,
                      "type": "string"
                    },
                    "id": {
                      "description": "The unique identifier of the balance account.",
                      "type": "string"
                    },
                    "reference": {
                      "description": "Your reference for the balance account, maximum 150 characters.",
                      "maxLength": 150,
                      "type": "string"
                    },
                    "status": {
                      "description": "The status of the balance account, set to **active** by default. \n",
                      "enum": [
                        "active",
                        "closed",
                        "inactive",
                        "suspended"
                      ],
                      "type": "string"
                    },
                    "timeZone": {
                      "description": "The [time zone](https://www.iana.org/time-zones) of the balance account. For example, **Europe/Amsterdam**.\nDefaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).",
                      "type": "string"
                    }
                  },
                  "required": [
                    "accountHolderId",
                    "id"
                  ],
                  "type": "object"
                },
                "BalanceAccountInfo": {
                  "properties": {
                    "accountHolderId": {
                      "description": "The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/accountHolders__resParam_id) associated with the balance account.",
                      "type": "string"
                    },
                    "defaultCurrencyCode": {
                      "description": "The default three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance account.\nThe default value is **EUR**.",
                      "type": "string"
                    },
                    "description": {
                      "description": "A human-readable description of the balance account, maximum 300 characters. You can use this parameter to distinguish between multiple balance accounts under an account holder.",
                      "maxLength": 300,
                      "type": "string"
                    },
                    "reference": {
                      "description": "Your reference for the balance account, maximum 150 characters.",
                      "maxLength": 150,
                      "type": "string"
                    },
                    "timeZone": {
                      "description": "The [time zone](https://www.iana.org/time-zones) of the balance account. For example, **Europe/Amsterdam**.\nDefaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).",
                      "type": "string"
                    }
                  },
                  "required": [
                    "accountHolderId"
                  ],
                  "type": "object"
                },
                "BalanceAccountUpdateRequest": {
                  "properties": {
                    "accountHolderId": {
                      "description": "The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/accountHolders__resParam_id) associated with the balance account.",
                      "type": "string"
                    },
                    "defaultCurrencyCode": {
                      "description": "The default currency code of this balance account, in three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) format. \nThe default value is **EUR**.",
                      "type": "string"
                    },
                    "description": {
                      "description": "A human-readable description of the balance account, maximum 300 characters. You can use this parameter to distinguish between multiple balance accounts under an account holder.",
                      "maxLength": 300,
                      "type": "string"
                    },
                    "reference": {
                      "description": "Your reference to the balance account, maximum 150 characters.",
                      "maxLength": 150,
                      "type": "string"
                    },
                    "status": {
                      "description": "The status of the balance account. Payment instruments linked to the balance account can only be used if the balance account status is **active**.\n\nPossible values: **active**, **inactive**, **closed**, **suspended**.",
                      "enum": [
                        "active",
                        "closed",
                        "inactive",
                        "suspended"
                      ],
                      "type": "string"
                    },
                    "timeZone": {
                      "description": "The [time zone](https://www.iana.org/time-zones) of the balance account. For example, **Europe/Amsterdam**.\nDefaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "BalancePlatform": {
                  "properties": {
                    "description": {
                      "description": "Your description of the balance platform, maximum 300 characters.",
                      "maxLength": 300,
                      "type": "string"
                    },
                    "id": {
                      "description": "The unique identifier of the balance platform.",
                      "type": "string"
                    },
                    "status": {
                      "description": "The status of the balance platform.\n\nPossible values: **Active**, **Inactive**, **Closed**, **Suspended**.",
                      "type": "string"
                    }
                  },
                  "required": [
                    "id"
                  ],
                  "type": "object"
                },
                "BalanceSweepConfigurationsResponse": {
                  "properties": {
                    "hasNext": {
                      "description": "Indicates whether there are more items on the next page.",
                      "type": "boolean"
                    },
                    "hasPrevious": {
                      "description": "Indicates whether there are more items on the previous page.",
                      "type": "boolean"
                    },
                    "sweeps": {
                      "description": "List of sweeps associated with the balance account.",
                      "items": {
                        "$ref": "#/components/schemas/SweepConfigurationV2"
                      },
                      "type": "array"
                    }
                  },
                  "required": [
                    "sweeps",
                    "hasPrevious",
                    "hasNext"
                  ],
                  "type": "object"
                },
                "BankAccountIdentificationValidationRequest": {
                  "properties": {
                    "accountIdentification": {
                      "description": "Bank account identification.",
                      "oneOf": [
                        {
                          "$ref": "#/components/schemas/AULocalAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/CALocalAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/CZLocalAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/HULocalAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/IbanAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/NOLocalAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/NumberAndBicAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/PLLocalAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/SELocalAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/SGLocalAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/UKLocalAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/USLocalAccountIdentification"
                        }
                      ]
                    }
                  },
                  "required": [
                    "accountIdentification"
                  ],
                  "type": "object"
                },
                "BrandVariantsRestriction": {
                  "properties": {
                    "operation": {
                      "description": "Defines how the condition must be evaluated.",
                      "type": "string"
                    },
                    "value": {
                      "description": "List of card brand variants.\n\nPossible values: \n\n- **mc**, **mccredit**, **mccommercialcredit_b2b**, **mcdebit**, **mcbusinessdebit**, **mcbusinessworlddebit**, **mcprepaid**, **mcmaestro**\n\n - **visa**, **visacredit**, **visadebit**, **visaprepaid**.\n\nYou can specify a rule for a generic variant. For example, to create a rule for all Mastercard payment instruments, use **mc**. The rule is applied to all payment instruments under **mc**, such as **mcbusinessdebit** and **mcdebit**.\n\n",
                      "items": {
                        "type": "string"
                      },
                      "type": "array"
                    }
                  },
                  "required": [
                    "operation"
                  ],
                  "type": "object"
                },
                "BulkAddress": {
                  "properties": {
                    "city": {
                      "description": "The name of the city.",
                      "type": "string"
                    },
                    "company": {
                      "description": "The name of the company.",
                      "type": "string"
                    },
                    "country": {
                      "description": "The two-character ISO-3166-1 alpha-2 country code. For example, **US**.",
                      "type": "string"
                    },
                    "email": {
                      "description": "The email address.",
                      "type": "string"
                    },
                    "houseNumberOrName": {
                      "description": "The house number or name.",
                      "type": "string"
                    },
                    "mobile": {
                      "description": "The full telephone number.",
                      "type": "string"
                    },
                    "postalCode": {
                      "description": "The postal code.\n\nMaximum length:\n\n* 5 digits for addresses in the US.\n\n* 10 characters for all other countries.",
                      "type": "string"
                    },
                    "stateOrProvince": {
                      "description": "The two-letter ISO 3166-2 state or province code.\n\nMaximum length: 2 characters for addresses in the US.",
                      "type": "string"
                    },
                    "street": {
                      "description": "The streetname of the house.",
                      "type": "string"
                    }
                  },
                  "required": [
                    "country"
                  ],
                  "type": "object"
                },
                "CALocalAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "accountNumber": {
                      "description": "The 5- to 12-digit bank account number, without separators or whitespace.",
                      "maxLength": 12,
                      "minLength": 5,
                      "type": "string"
                    },
                    "accountType": {
                      "default": "checking",
                      "description": "The bank account type.\n\nPossible values: **checking** or **savings**. Defaults to **checking**.",
                      "enum": [
                        "checking",
                        "savings"
                      ],
                      "type": "string"
                    },
                    "institutionNumber": {
                      "description": "The 3-digit institution number, without separators or whitespace.",
                      "maxLength": 3,
                      "minLength": 3,
                      "type": "string"
                    },
                    "transitNumber": {
                      "description": "The 5-digit transit number, without separators or whitespace.",
                      "maxLength": 5,
                      "minLength": 5,
                      "type": "string"
                    },
                    "type": {
                      "default": "caLocal",
                      "description": "**caLocal**",
                      "enum": [
                        "caLocal"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "accountNumber",
                    "institutionNumber",
                    "transitNumber"
                  ],
                  "type": "object"
                },
                "CZLocalAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "accountNumber": {
                      "description": "The 2- to 16-digit bank account number (Číslo účtu) in the following format:\n\n- The optional prefix (předčíslí).\n\n- The required second part (základní část) which must be at least two non-zero digits.\n\nExamples:\n\n- **19-123457** (with prefix)\n\n- **123457** (without prefix)\n\n- **000019-0000123457** (with prefix, normalized)\n\n- **000000-0000123457** (without prefix, normalized)",
                      "maxLength": 17,
                      "minLength": 2,
                      "type": "string"
                    },
                    "bankCode": {
                      "description": "The 4-digit bank code (Kód banky), without separators or whitespace.",
                      "maxLength": 4,
                      "minLength": 4,
                      "type": "string"
                    },
                    "type": {
                      "default": "czLocal",
                      "description": "**czLocal**",
                      "enum": [
                        "czLocal"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "accountNumber",
                    "bankCode"
                  ],
                  "type": "object"
                },
                "CapabilityProblem": {
                  "type": "object"
                },
                "Card": {
                  "properties": {
                    "authentication": {
                      "$ref": "#/components/schemas/Authentication",
                      "description": "Contains the card user's password and mobile phone number. This is required when you issue cards that can be used to make online payments within the EEA and the UK, or can be added to digital wallets. Refer to [3D Secure and digital wallets](https://docs.adyen.com/issuing/3d-secure-and-wallets) for more information."
                    },
                    "bin": {
                      "description": "The bank identification number (BIN) of the card number.",
                      "type": "string"
                    },
                    "brand": {
                      "description": "The brand of the physical or the virtual card.\nPossible values: **visa**, **mc**.",
                      "type": "string"
                    },
                    "brandVariant": {
                      "description": "The brand variant of the physical or the virtual card.\n>Contact your Adyen Implementation Manager to get the values that are relevant to your integration. Examples: **visadebit**, **mcprepaid**.",
                      "type": "string"
                    },
                    "cardholderName": {
                      "description": "The name of the cardholder.\n Maximum length: 26 characters.",
                      "maxLength": 26,
                      "type": "string"
                    },
                    "configuration": {
                      "$ref": "#/components/schemas/CardConfiguration",
                      "description": "Settings required when creating a physical or a virtual card. \n\nReach out to your Adyen contact to get the values that you can send in this object."
                    },
                    "cvc": {
                      "description": "The CVC2 value of the card.\n> The CVC2 is not sent by default. This is only returned in the `POST` response for single-use virtual cards.",
                      "type": "string"
                    },
                    "deliveryContact": {
                      "$ref": "#/components/schemas/DeliveryContact",
                      "description": "The delivery contact (name and address) for physical card delivery.",
                      "x-addedInVersion": "2"
                    },
                    "expiration": {
                      "$ref": "#/components/schemas/Expiry",
                      "description": "The expiration date of the card."
                    },
                    "formFactor": {
                      "description": "The form factor of the card.\nPossible values: **virtual**, **physical**.",
                      "enum": [
                        "physical",
                        "unknown",
                        "virtual"
                      ],
                      "type": "string"
                    },
                    "lastFour": {
                      "description": "Last last four digits of the card number.",
                      "type": "string"
                    },
                    "number": {
                      "description": "The primary account number (PAN) of the card.\n> The PAN is masked by default and returned only for single-use virtual cards.",
                      "readOnly": true,
                      "type": "string"
                    }
                  },
                  "required": [
                    "formFactor",
                    "cardholderName",
                    "brand",
                    "brandVariant",
                    "number"
                  ],
                  "type": "object"
                },
                "CardConfiguration": {
                  "properties": {
                    "activation": {
                      "description": "Overrides the activation label design ID defined in the `configurationProfileId`. The activation label is attached to the card and contains the activation instructions.",
                      "type": "string"
                    },
                    "activationUrl": {
                      "description": "Your app's URL, if you want to activate cards through your app. For example, **my-app://ref1236a7d**. A QR code is created based on this URL, and is included in the carrier. Before you use this field, reach out to your Adyen contact to set up the QR code process. \n\nMaximum length: 255 characters.",
                      "maxLength": 255,
                      "type": "string"
                    },
                    "bulkAddress": {
                      "$ref": "#/components/schemas/BulkAddress",
                      "description": "Overrides the shipment bulk address defined in the `configurationProfileId`."
                    },
                    "cardImageId": {
                      "description": "The ID of the card image. This is the image that will be printed on the full front of the card.",
                      "type": "string"
                    },
                    "carrier": {
                      "description": "Overrides the carrier design ID defined in the `configurationProfileId`. The carrier is the letter or packaging to which the card is attached.",
                      "type": "string"
                    },
                    "carrierImageId": {
                      "description": "The ID of the carrier image. This is the image that will printed on the letter to which the card is attached.",
                      "type": "string"
                    },
                    "configurationProfileId": {
                      "description": "The ID of the card configuration profile that contains the settings of the card. For example, the envelope and PIN mailer designs or the logistics company handling the shipment. All the settings in the profile are applied to the card, unless you provide other fields to override them.\n\nFor example, send the `shipmentMethod` to override the logistics company defined in the card configuration profile.",
                      "type": "string"
                    },
                    "currency": {
                      "description": "The three-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the card. For example, **EUR**.",
                      "type": "string"
                    },
                    "envelope": {
                      "description": "Overrides the envelope design ID defined in the `configurationProfileId`. ",
                      "type": "string"
                    },
                    "insert": {
                      "description": "Overrides the insert design ID defined in the `configurationProfileId`. An insert is any additional material, such as marketing materials, that are shipped together with the card.",
                      "type": "string"
                    },
                    "language": {
                      "description": "The two-letter [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code of the card. For example, **en**.",
                      "type": "string"
                    },
                    "logoImageId": {
                      "description": "The ID of the logo image. This is the image that will be printed on the partial front of the card, such as a logo on the upper right corner.",
                      "type": "string"
                    },
                    "pinMailer": {
                      "description": "Overrides the PIN mailer design ID defined in the `configurationProfileId`. The PIN mailer is the letter on which the PIN is printed.",
                      "type": "string"
                    },
                    "shipmentMethod": {
                      "description": "Overrides the logistics company defined in the `configurationProfileId`.",
                      "type": "string"
                    }
                  },
                  "required": [
                    "configurationProfileId"
                  ],
                  "type": "object"
                },
                "CardInfo": {
                  "properties": {
                    "authentication": {
                      "$ref": "#/components/schemas/Authentication",
                      "description": "Contains the card user's password and mobile phone number. This is required when you issue cards that can be used to make online payments within the EEA and the UK, or can be added to digital wallets. Refer to [3D Secure and digital wallets](https://docs.adyen.com/issuing/3d-secure-and-wallets) for more information."
                    },
                    "brand": {
                      "description": "The brand of the physical or the virtual card.\nPossible values: **visa**, **mc**.",
                      "type": "string"
                    },
                    "brandVariant": {
                      "description": "The brand variant of the physical or the virtual card.\n>Contact your Adyen Implementation Manager to get the values that are relevant to your integration. Examples: **visadebit**, **mcprepaid**.",
                      "type": "string"
                    },
                    "cardholderName": {
                      "description": "The name of the cardholder.\n Maximum length: 26 characters.",
                      "maxLength": 26,
                      "type": "string"
                    },
                    "configuration": {
                      "$ref": "#/components/schemas/CardConfiguration",
                      "description": "Settings required when creating a physical or a virtual card. \n\nReach out to your Adyen contact to get the values that you can send in this object."
                    },
                    "deliveryContact": {
                      "$ref": "#/components/schemas/DeliveryContact",
                      "description": "The delivery contact (name and address) for physical card delivery.",
                      "x-addedInVersion": "2"
                    },
                    "formFactor": {
                      "description": "The form factor of the card.\nPossible values: **virtual**, **physical**.",
                      "enum": [
                        "physical",
                        "unknown",
                        "virtual"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "formFactor",
                    "cardholderName",
                    "brand",
                    "brandVariant"
                  ],
                  "type": "object"
                },
                "ContactDetails": {
                  "properties": {
                    "address": {
                      "$ref": "#/components/schemas/Address",
                      "description": "The address of the account holder."
                    },
                    "email": {
                      "description": "The email address of the account holder.",
                      "type": "string"
                    },
                    "phone": {
                      "$ref": "#/components/schemas/Phone",
                      "description": "The phone number of the account holder."
                    },
                    "webAddress": {
                      "description": "The URL of the account holder's website.",
                      "type": "string"
                    }
                  },
                  "required": [
                    "email",
                    "phone",
                    "address"
                  ],
                  "type": "object"
                },
                "CountriesRestriction": {
                  "properties": {
                    "operation": {
                      "description": "Defines how the condition must be evaluated.",
                      "type": "string"
                    },
                    "value": {
                      "description": "List of two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes.",
                      "items": {
                        "type": "string"
                      },
                      "type": "array"
                    }
                  },
                  "required": [
                    "operation"
                  ],
                  "type": "object"
                },
                "CronSweepSchedule": {
                  "additionalProperties": false,
                  "properties": {
                    "cronExpression": {
                      "description": "A [cron expression](https://en.wikipedia.org/wiki/Cron#CRON_expression) that is used to set the sweep schedule. The schedule uses the time zone of the balance account. For example, **30 17 * * MON** schedules a sweep every Monday at 17:30.\n\nThe expression must have five values separated by a single space in the following order:\n\n* Minute: **0-59**\n\n* Hour: **0-23**\n\n* Day of the month: **1-31**\n\n* Month: **1-12** or **JAN-DEC**\n\n* Day of the week: **0-7** (0 and 7 are Sunday) or **MON-SUN**.\n\nThe following non-standard characters are supported: **&ast;**, **L**, **#**, **W** and **/**. See [crontab guru](https://crontab.guru/) for more examples.",
                      "type": "string"
                    },
                    "type": {
                      "description": "The schedule type.\n\nPossible values:\n\n* **cron**: push out funds based on a cron expression.\n\n* **daily**: push out funds daily at 07:00 AM CET.\n\n* **weekly**: push out funds every Monday at 07:00 AM CET.\n\n* **monthly**: push out funds every first of the month at 07:00 AM CET.\n\n* **balance**: pull in funds instantly if the balance is less than or equal to the `triggerAmount`. You can only use this for sweeps of `type` **pull** and when the source is a `merchantAccount` or `transferInstrument`.",
                      "enum": [
                        "daily",
                        "weekly",
                        "monthly",
                        "balance",
                        "cron"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "cronExpression"
                  ],
                  "type": "object"
                },
                "DayOfWeekRestriction": {
                  "properties": {
                    "operation": {
                      "description": "Defines how the condition must be evaluated.",
                      "type": "string"
                    },
                    "value": {
                      "description": "List of days of the week.\n\nPossible values: **monday**, **tuesday**, **wednesday**, **thursday**, **friday**, **saturday**, **sunday**.\n\n",
                      "items": {
                        "enum": [
                          "friday",
                          "monday",
                          "saturday",
                          "sunday",
                          "thursday",
                          "tuesday",
                          "wednesday"
                        ],
                        "type": "string"
                      },
                      "type": "array"
                    }
                  },
                  "required": [
                    "operation"
                  ],
                  "type": "object"
                },
                "DeliveryContact": {
                  "properties": {
                    "address": {
                      "$ref": "#/components/schemas/Address-2",
                      "description": "The address of the contact."
                    },
                    "email": {
                      "description": "The email address of the contact.",
                      "type": "string"
                    },
                    "fullPhoneNumber": {
                      "description": "The full phone number of the contact provided as a single string. It will be handled as a landline phone.\n**Examples:** \"0031 6 11 22 33 44\", \"+316/1122-3344\", \"(0031) 611223344\"",
                      "type": "string"
                    },
                    "name": {
                      "$ref": "#/components/schemas/Name",
                      "description": "The name of the contact."
                    },
                    "phoneNumber": {
                      "$ref": "#/components/schemas/PhoneNumber",
                      "description": "The phone number of the contact."
                    },
                    "webAddress": {
                      "description": "The URL of the contact's website.",
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "address"
                  ],
                  "type": "object"
                },
                "DifferentCurrenciesRestriction": {
                  "properties": {
                    "operation": {
                      "description": "Defines how the condition must be evaluated.",
                      "type": "string"
                    },
                    "value": {
                      "description": "Checks the currency of the payment against the currency of the payment instrument.\n\nPossible values:\n\n- **true**: The currency of the payment is different from the currency of the payment instrument.\n\n- **false**: The currencies are the same.\n\n",
                      "type": "boolean"
                    }
                  },
                  "required": [
                    "operation"
                  ],
                  "type": "object"
                },
                "Duration": {
                  "properties": {
                    "unit": {
                      "description": "The unit of time. You can only use **minutes** and **hours** if the `interval.type` is **sliding**.\n\nPossible values: **minutes**, **hours**, **days**, **weeks**, or **months**",
                      "enum": [
                        "days",
                        "hours",
                        "minutes",
                        "months",
                        "weeks"
                      ],
                      "type": "string"
                    },
                    "value": {
                      "description": "The length of time by the unit. For example, 5 days.\n\nThe maximum duration is 90 days or an equivalent in other units. For example, 3 months.",
                      "format": "int32",
                      "type": "integer"
                    }
                  },
                  "type": "object"
                },
                "EntryModesRestriction": {
                  "properties": {
                    "operation": {
                      "description": "Defines how the condition must be evaluated.",
                      "type": "string"
                    },
                    "value": {
                      "description": "List of point-of-sale entry modes.\n\nPossible values: **barcode**, **chip**, **cof**, **contactless**, **magstripe**, **manual**, **ocr**, **server**.\n\n",
                      "items": {
                        "enum": [
                          "barcode",
                          "chip",
                          "cof",
                          "contactless",
                          "magstripe",
                          "manual",
                          "ocr",
                          "server",
                          "unknown"
                        ],
                        "type": "string"
                      },
                      "type": "array"
                    }
                  },
                  "required": [
                    "operation"
                  ],
                  "type": "object"
                },
                "Expiry": {
                  "properties": {
                    "month": {
                      "description": "The month in which the card will expire.",
                      "type": "string"
                    },
                    "year": {
                      "description": "The year in which the card will expire.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "HULocalAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "accountNumber": {
                      "description": "The 24-digit bank account number, without separators or whitespace.",
                      "maxLength": 24,
                      "minLength": 24,
                      "type": "string"
                    },
                    "type": {
                      "default": "huLocal",
                      "description": "**huLocal**",
                      "enum": [
                        "huLocal"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "accountNumber"
                  ],
                  "type": "object"
                },
                "IbanAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "iban": {
                      "description": "The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard.",
                      "type": "string"
                    },
                    "type": {
                      "default": "iban",
                      "description": "**iban**",
                      "enum": [
                        "iban"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "iban"
                  ],
                  "type": "object"
                },
                "InternationalTransactionRestriction": {
                  "properties": {
                    "operation": {
                      "description": "Defines how the condition must be evaluated.",
                      "type": "string"
                    },
                    "value": {
                      "description": "Boolean indicating whether transaction is an international transaction.\n\nPossible values:\n\n- **true**: The transaction is an international transaction.\n\n- **false**: The transaction is a domestic transaction.\n\n",
                      "type": "boolean"
                    }
                  },
                  "required": [
                    "operation"
                  ],
                  "type": "object"
                },
                "InvalidField": {
                  "properties": {
                    "message": {
                      "description": "Description of the validation error.",
                      "type": "string"
                    },
                    "name": {
                      "description": "The field that has an invalid value.",
                      "type": "string"
                    },
                    "value": {
                      "description": "The invalid value.",
                      "type": "string"
                    }
                  },
                  "required": [
                    "name",
                    "value",
                    "message"
                  ],
                  "type": "object"
                },
                "JSONObject": {
                  "properties": {
                    "paths": {
                      "items": {
                        "$ref": "#/components/schemas/JSONPath"
                      },
                      "type": "array"
                    },
                    "rootPath": {
                      "$ref": "#/components/schemas/JSONPath"
                    }
                  },
                  "type": "object"
                },
                "JSONPath": {
                  "properties": {
                    "content": {
                      "items": {
                        "type": "string"
                      },
                      "type": "array"
                    }
                  },
                  "type": "object"
                },
                "MatchingTransactionsRestriction": {
                  "properties": {
                    "operation": {
                      "description": "Defines how the condition must be evaluated.",
                      "type": "string"
                    },
                    "value": {
                      "description": "The number of transactions.",
                      "format": "int32",
                      "type": "integer"
                    }
                  },
                  "required": [
                    "operation"
                  ],
                  "type": "object"
                },
                "MccsRestriction": {
                  "properties": {
                    "operation": {
                      "description": "Defines how the condition must be evaluated.",
                      "type": "string"
                    },
                    "value": {
                      "description": "List of merchant category codes (MCCs).",
                      "items": {
                        "type": "string"
                      },
                      "type": "array"
                    }
                  },
                  "required": [
                    "operation"
                  ],
                  "type": "object"
                },
                "MerchantAcquirerPair": {
                  "properties": {
                    "acquirerId": {
                      "description": "The acquirer ID.",
                      "type": "string"
                    },
                    "merchantId": {
                      "description": "The merchant identification number (MID).",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "MerchantNamesRestriction": {
                  "properties": {
                    "operation": {
                      "description": "Defines how the condition must be evaluated.",
                      "type": "string"
                    },
                    "value": {
                      "items": {
                        "$ref": "#/components/schemas/StringMatch"
                      },
                      "type": "array"
                    }
                  },
                  "required": [
                    "operation"
                  ],
                  "type": "object"
                },
                "MerchantsRestriction": {
                  "properties": {
                    "operation": {
                      "description": "Defines how the condition must be evaluated.",
                      "type": "string"
                    },
                    "value": {
                      "description": "List of merchant ID and acquirer ID pairs.",
                      "items": {
                        "$ref": "#/components/schemas/MerchantAcquirerPair"
                      },
                      "type": "array"
                    }
                  },
                  "required": [
                    "operation"
                  ],
                  "type": "object"
                },
                "NOLocalAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "accountNumber": {
                      "description": "The 11-digit bank account number, without separators or whitespace.",
                      "maxLength": 11,
                      "minLength": 11,
                      "type": "string"
                    },
                    "type": {
                      "default": "noLocal",
                      "description": "**noLocal**",
                      "enum": [
                        "noLocal"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "accountNumber"
                  ],
                  "type": "object"
                },
                "Name": {
                  "properties": {
                    "firstName": {
                      "description": "The first name.",
                      "type": "string"
                    },
                    "lastName": {
                      "description": "The last name.",
                      "type": "string"
                    }
                  },
                  "required": [
                    "firstName",
                    "lastName"
                  ],
                  "type": "object"
                },
                "NumberAndBicAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "accountNumber": {
                      "description": "The bank account number, without separators or whitespace. The length and format depends on the bank or country.",
                      "maxLength": 34,
                      "type": "string"
                    },
                    "additionalBankIdentification": {
                      "$ref": "#/components/schemas/AdditionalBankIdentification",
                      "description": "Additional identification codes of the bank. Some banks may require these identifiers for cross-border transfers."
                    },
                    "bic": {
                      "description": "The bank's 8- or 11-character BIC or SWIFT code.",
                      "maxLength": 11,
                      "minLength": 8,
                      "type": "string"
                    },
                    "type": {
                      "default": "numberAndBic",
                      "description": "**numberAndBic**",
                      "enum": [
                        "numberAndBic"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "accountNumber",
                    "bic"
                  ],
                  "type": "object"
                },
                "PLLocalAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "accountNumber": {
                      "description": "The 26-digit bank account number ([Numer rachunku](https://pl.wikipedia.org/wiki/Numer_Rachunku_Bankowego)), without separators or whitespace.",
                      "maxLength": 26,
                      "minLength": 26,
                      "type": "string"
                    },
                    "type": {
                      "default": "plLocal",
                      "description": "**plLocal**",
                      "enum": [
                        "plLocal"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "accountNumber"
                  ],
                  "type": "object"
                },
                "PaginatedAccountHoldersResponse": {
                  "properties": {
                    "accountHolders": {
                      "description": "List of account holders.",
                      "items": {
                        "$ref": "#/components/schemas/AccountHolder"
                      },
                      "type": "array"
                    },
                    "hasNext": {
                      "description": "Indicates whether there are more items on the next page.",
                      "type": "boolean"
                    },
                    "hasPrevious": {
                      "description": "Indicates whether there are more items on the previous page.",
                      "type": "boolean"
                    }
                  },
                  "required": [
                    "accountHolders",
                    "hasPrevious",
                    "hasNext"
                  ],
                  "type": "object"
                },
                "PaginatedBalanceAccountsResponse": {
                  "properties": {
                    "balanceAccounts": {
                      "description": "List of balance accounts.",
                      "items": {
                        "$ref": "#/components/schemas/BalanceAccountBase"
                      },
                      "type": "array"
                    },
                    "hasNext": {
                      "description": "Indicates whether there are more items on the next page.",
                      "type": "boolean"
                    },
                    "hasPrevious": {
                      "description": "Indicates whether there are more items on the previous page.",
                      "type": "boolean"
                    }
                  },
                  "required": [
                    "balanceAccounts",
                    "hasPrevious",
                    "hasNext"
                  ],
                  "type": "object"
                },
                "PaginatedPaymentInstrumentsResponse": {
                  "properties": {
                    "hasNext": {
                      "description": "Indicates whether there are more items on the next page.",
                      "type": "boolean"
                    },
                    "hasPrevious": {
                      "description": "Indicates whether there are more items on the previous page.",
                      "type": "boolean"
                    },
                    "paymentInstruments": {
                      "description": "List of payment instruments associated with the balance account.",
                      "items": {
                        "$ref": "#/components/schemas/PaymentInstrument"
                      },
                      "type": "array"
                    }
                  },
                  "required": [
                    "paymentInstruments",
                    "hasPrevious",
                    "hasNext"
                  ],
                  "type": "object"
                },
                "PaymentInstrument": {
                  "properties": {
                    "balanceAccountId": {
                      "description": "The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/balanceAccounts__resParam_id) associated with the payment instrument.",
                      "type": "string"
                    },
                    "bankAccount": {
                      "description": "Contains the business account details. Returned when you create a payment instrument with `type` **bankAccount**.",
                      "oneOf": [
                        {
                          "$ref": "#/components/schemas/IbanAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/USLocalAccountIdentification"
                        }
                      ]
                    },
                    "card": {
                      "$ref": "#/components/schemas/Card",
                      "description": "Contains information about the card payment instrument. Returned when you create a payment instrument with `type` **card**."
                    },
                    "description": {
                      "description": "Your description for the payment instrument, maximum 300 characters.",
                      "maxLength": 300,
                      "type": "string"
                    },
                    "id": {
                      "description": "The unique identifier of the payment instrument.",
                      "type": "string"
                    },
                    "issuingCountryCode": {
                      "description": "The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**.",
                      "type": "string"
                    },
                    "paymentInstrumentGroupId": {
                      "description": "The unique identifier of the [payment instrument group](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/paymentInstrumentGroups__resParam_id) to which the payment instrument belongs.",
                      "type": "string"
                    },
                    "reference": {
                      "description": "Your reference for the payment instrument, maximum 150 characters.",
                      "maxLength": 150,
                      "type": "string"
                    },
                    "status": {
                      "description": "The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **inactive**.\n\nPossible values: \n\n * **active**:  The payment instrument is active and can be used to make payments. \n\n * **inactive**: The payment instrument is inactive and cannot be used to make payments. \n\n * **suspended**: The payment instrument is suspended, either because it was stolen or lost. \n\n * **closed**: The payment instrument is permanently closed. This action cannot be undone. \n\n",
                      "enum": [
                        "active",
                        "closed",
                        "inactive",
                        "suspended"
                      ],
                      "type": "string",
                      "x-enum": [
                        {
                          "description": "The payment instrument is active and can be used to make payments.",
                          "value": "active"
                        },
                        {
                          "description": "The payment instrument is inactive and cannot be used to make payments.",
                          "value": "inactive"
                        },
                        {
                          "description": "The payment instrument is suspended. Either because it was stolen or lost.",
                          "value": "suspended"
                        },
                        {
                          "description": "The payment instrument is permanently closed. This action cannot be undone.",
                          "value": "closed"
                        }
                      ]
                    },
                    "statusReason": {
                      "description": "The reason for updating the status of the payment instrument.\n\nPossible values: **lost**, **stolen**, **damaged**, **suspectedFraud**, **expired**, **endOfLife**, **accountClosure**, **other**.\nIf the reason is **other**, you must also send the `statusComment` parameter describing the status change.",
                      "enum": [
                        "accountClosure",
                        "damaged",
                        "endOfLife",
                        "expired",
                        "lost",
                        "other",
                        "stolen",
                        "suspectedFraud"
                      ],
                      "type": "string",
                      "x-addedInVersion": "2"
                    },
                    "type": {
                      "description": "Type of payment instrument.\n\nPossible value: **card**, **bankAccount**. ",
                      "enum": [
                        "bankAccount",
                        "card"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "balanceAccountId",
                    "issuingCountryCode",
                    "type",
                    "id"
                  ],
                  "type": "object"
                },
                "PaymentInstrumentGroup": {
                  "properties": {
                    "balancePlatform": {
                      "description": "The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the payment instrument group belongs.",
                      "type": "string"
                    },
                    "description": {
                      "description": "Your description for the payment instrument group, maximum 300 characters.",
                      "maxLength": 300,
                      "type": "string"
                    },
                    "id": {
                      "description": "The unique identifier of the payment instrument group.",
                      "type": "string"
                    },
                    "properties": {
                      "additionalProperties": {
                        "type": "string"
                      },
                      "description": "Properties of the payment instrument group.",
                      "type": "object"
                    },
                    "reference": {
                      "description": "Your reference for the payment instrument group, maximum 150 characters.",
                      "maxLength": 150,
                      "type": "string"
                    },
                    "txVariant": {
                      "description": "The tx variant of the payment instrument group.",
                      "type": "string"
                    }
                  },
                  "required": [
                    "balancePlatform",
                    "txVariant"
                  ],
                  "type": "object"
                },
                "PaymentInstrumentGroupInfo": {
                  "properties": {
                    "balancePlatform": {
                      "description": "The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the payment instrument group belongs.",
                      "type": "string"
                    },
                    "description": {
                      "description": "Your description for the payment instrument group, maximum 300 characters.",
                      "maxLength": 300,
                      "type": "string"
                    },
                    "properties": {
                      "additionalProperties": {
                        "type": "string"
                      },
                      "description": "Properties of the payment instrument group.",
                      "type": "object"
                    },
                    "reference": {
                      "description": "Your reference for the payment instrument group, maximum 150 characters.",
                      "maxLength": 150,
                      "type": "string"
                    },
                    "txVariant": {
                      "description": "The tx variant of the payment instrument group.",
                      "type": "string"
                    }
                  },
                  "required": [
                    "balancePlatform",
                    "txVariant"
                  ],
                  "type": "object"
                },
                "PaymentInstrumentInfo": {
                  "properties": {
                    "balanceAccountId": {
                      "description": "The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/balanceAccounts__resParam_id) associated with the payment instrument.",
                      "type": "string"
                    },
                    "card": {
                      "$ref": "#/components/schemas/CardInfo",
                      "description": "Contains information about the card. Required when you create a payment instrument of `type` **card**."
                    },
                    "description": {
                      "description": "Your description for the payment instrument, maximum 300 characters.",
                      "maxLength": 300,
                      "type": "string"
                    },
                    "issuingCountryCode": {
                      "description": "The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**.",
                      "type": "string"
                    },
                    "paymentInstrumentGroupId": {
                      "description": "The unique identifier of the [payment instrument group](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/paymentInstrumentGroups__resParam_id) to which the payment instrument belongs.",
                      "type": "string"
                    },
                    "reference": {
                      "description": "Your reference for the payment instrument, maximum 150 characters.",
                      "maxLength": 150,
                      "type": "string"
                    },
                    "status": {
                      "description": "The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **inactive**.\n\nPossible values: \n\n * **active**:  The payment instrument is active and can be used to make payments. \n\n * **inactive**: The payment instrument is inactive and cannot be used to make payments. \n\n * **suspended**: The payment instrument is suspended, either because it was stolen or lost. \n\n * **closed**: The payment instrument is permanently closed. This action cannot be undone. \n\n",
                      "enum": [
                        "active",
                        "closed",
                        "inactive",
                        "suspended"
                      ],
                      "type": "string",
                      "x-enum": [
                        {
                          "description": "The payment instrument is active and can be used to make payments.",
                          "value": "active"
                        },
                        {
                          "description": "The payment instrument is inactive and cannot be used to make payments.",
                          "value": "inactive"
                        },
                        {
                          "description": "The payment instrument is suspended. Either because it was stolen or lost.",
                          "value": "suspended"
                        },
                        {
                          "description": "The payment instrument is permanently closed. This action cannot be undone.",
                          "value": "closed"
                        }
                      ]
                    },
                    "statusReason": {
                      "description": "The reason for updating the status of the payment instrument.\n\nPossible values: **lost**, **stolen**, **damaged**, **suspectedFraud**, **expired**, **endOfLife**, **accountClosure**, **other**.\nIf the reason is **other**, you must also send the `statusComment` parameter describing the status change.",
                      "enum": [
                        "accountClosure",
                        "damaged",
                        "endOfLife",
                        "expired",
                        "lost",
                        "other",
                        "stolen",
                        "suspectedFraud"
                      ],
                      "type": "string",
                      "x-addedInVersion": "2"
                    },
                    "type": {
                      "description": "Type of payment instrument.\n\nPossible value: **card**, **bankAccount**. ",
                      "enum": [
                        "bankAccount",
                        "card"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "balanceAccountId",
                    "issuingCountryCode",
                    "type"
                  ],
                  "type": "object"
                },
                "PaymentInstrumentRevealInfo": {
                  "properties": {
                    "cvc": {
                      "description": "The CVC2 value of the card.",
                      "type": "string"
                    },
                    "expiration": {
                      "$ref": "#/components/schemas/Expiry",
                      "description": "The expiration date of the card."
                    },
                    "pan": {
                      "description": "The primary account number (PAN) of the card.",
                      "type": "string"
                    }
                  },
                  "required": [
                    "pan",
                    "expiration",
                    "cvc"
                  ],
                  "type": "object"
                },
                "PaymentInstrumentUpdateRequest": {
                  "properties": {
                    "balanceAccountId": {
                      "description": "The unique identifier of the balance account associated with this payment instrument.\n>You can only change the balance account ID if the payment instrument has **inactive** status.",
                      "type": "string"
                    },
                    "card": {
                      "$ref": "#/components/schemas/CardInfo",
                      "description": "Object that contains information about the card payment instrument."
                    },
                    "status": {
                      "description": "The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **inactive**.\n\nPossible values: \n\n * **active**:  The payment instrument is active and can be used to make payments. \n\n * **inactive**: The payment instrument is inactive and cannot be used to make payments. \n\n * **suspended**: The payment instrument is suspended, either because it was stolen or lost. \n\n * **closed**: The payment instrument is permanently closed. This action cannot be undone. \n\n",
                      "enum": [
                        "active",
                        "closed",
                        "inactive",
                        "suspended"
                      ],
                      "type": "string",
                      "x-enum": [
                        {
                          "description": "The payment instrument is active and can be used to make payments.",
                          "value": "active"
                        },
                        {
                          "description": "The payment instrument is inactive and cannot be used to make payments.",
                          "value": "inactive"
                        },
                        {
                          "description": "The payment instrument is suspended. Either because it was stolen or lost.",
                          "value": "suspended"
                        },
                        {
                          "description": "The payment instrument is permanently closed. This action cannot be undone.",
                          "value": "closed"
                        }
                      ]
                    },
                    "statusComment": {
                      "description": "Comment for the status of the payment instrument.\n\nRequired if `statusReason` is **other**.",
                      "type": "string"
                    },
                    "statusReason": {
                      "description": "The reason for updating the status of the payment instrument.\n\nPossible values: **lost**, **stolen**, **damaged**, **suspectedFraud**, **expired**, **endOfLife**, **accountClosure**, **other**.\nIf the reason is **other**, you must also send the `statusComment` parameter describing the status change.",
                      "enum": [
                        "accountClosure",
                        "damaged",
                        "endOfLife",
                        "expired",
                        "lost",
                        "other",
                        "stolen",
                        "suspectedFraud"
                      ],
                      "type": "string",
                      "x-addedInVersion": "2"
                    }
                  },
                  "type": "object"
                },
                "Phone": {
                  "properties": {
                    "number": {
                      "description": "The full phone number provided as a single string. \nFor example, **\"0031 6 11 22 33 44\"**, **\"+316/1122-3344\"**, \n\n or **\"(0031) 611223344\"**.",
                      "type": "string"
                    },
                    "type": {
                      "description": "Type of phone number.\nPossible values: \n**Landline**, **Mobile**.\n",
                      "enum": [
                        "landline",
                        "mobile"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "number",
                    "type"
                  ],
                  "type": "object"
                },
                "PhoneNumber": {
                  "properties": {
                    "phoneCountryCode": {
                      "description": "The two-character ISO-3166-1 alpha-2 country code of the phone number.\nFor example, **US** or **NL**.",
                      "type": "string"
                    },
                    "phoneNumber": {
                      "description": "The phone number.\nThe inclusion of the phone number country code is not necessary.",
                      "type": "string"
                    },
                    "phoneType": {
                      "description": "The type of the phone number.\nPossible values: **Landline**, **Mobile**, **SIP**, **Fax**.",
                      "enum": [
                        "Fax",
                        "Landline",
                        "Mobile",
                        "SIP"
                      ],
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "ProcessingTypesRestriction": {
                  "properties": {
                    "operation": {
                      "description": "Defines how the condition must be evaluated.",
                      "type": "string"
                    },
                    "value": {
                      "description": "List of processing types.\n\nPossible values: **atmWithdraw**, **balanceInquiry**, **ecommerce**, **moto**, **pos**, **recurring**, **token**.\n\n",
                      "items": {
                        "enum": [
                          "atmWithdraw",
                          "balanceInquiry",
                          "ecommerce",
                          "moto",
                          "pos",
                          "recurring",
                          "token",
                          "unknown"
                        ],
                        "type": "string"
                      },
                      "type": "array"
                    }
                  },
                  "required": [
                    "operation"
                  ],
                  "type": "object"
                },
                "RestServiceError": {
                  "properties": {
                    "detail": {
                      "description": "A human-readable explanation specific to this occurrence of the problem.",
                      "type": "string"
                    },
                    "errorCode": {
                      "description": "A code that identifies the problem type.",
                      "type": "string"
                    },
                    "instance": {
                      "description": "A unique URI that identifies the specific occurrence of the problem.",
                      "type": "string"
                    },
                    "invalidFields": {
                      "description": "Detailed explanation of each validation error, when applicable.",
                      "items": {
                        "$ref": "#/components/schemas/InvalidField"
                      },
                      "type": "array"
                    },
                    "requestId": {
                      "description": "A unique reference for the request, essentially the same as `pspReference`.",
                      "type": "string"
                    },
                    "response": {
                      "$ref": "#/components/schemas/JSONObject",
                      "description": "JSON response payload."
                    },
                    "status": {
                      "description": "The HTTP status code.",
                      "format": "int32",
                      "type": "integer"
                    },
                    "title": {
                      "description": "A short, human-readable summary of the problem type.",
                      "type": "string"
                    },
                    "type": {
                      "description": "A URI that identifies the problem type, pointing to human-readable documentation on this problem type.",
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "errorCode",
                    "title",
                    "detail",
                    "status"
                  ],
                  "type": "object"
                },
                "SELocalAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "accountNumber": {
                      "description": "The 7- to 10-digit bank account number ([Bankkontonummer](https://sv.wikipedia.org/wiki/Bankkonto)), without the clearing number, separators, or whitespace.",
                      "maxLength": 10,
                      "minLength": 7,
                      "type": "string"
                    },
                    "clearingNumber": {
                      "description": "The 4- to 5-digit clearing number ([Clearingnummer](https://sv.wikipedia.org/wiki/Clearingnummer)), without separators or whitespace.",
                      "maxLength": 5,
                      "minLength": 4,
                      "type": "string"
                    },
                    "type": {
                      "default": "seLocal",
                      "description": "**seLocal**",
                      "enum": [
                        "seLocal"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "accountNumber",
                    "clearingNumber"
                  ],
                  "type": "object"
                },
                "SGLocalAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "accountNumber": {
                      "description": "The 4- to 19-digit bank account number, without separators or whitespace.",
                      "maxLength": 19,
                      "minLength": 4,
                      "type": "string"
                    },
                    "bic": {
                      "description": "The bank's 8- or 11-character BIC or SWIFT code.",
                      "maxLength": 11,
                      "minLength": 8,
                      "type": "string"
                    },
                    "type": {
                      "default": "sgLocal",
                      "description": "**sgLocal**",
                      "enum": [
                        "sgLocal"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "accountNumber",
                    "bic"
                  ],
                  "type": "object"
                },
                "StringMatch": {
                  "properties": {
                    "operation": {
                      "description": "The type of string matching operation. Possible values:  **startsWith**, **endsWith**, **isEqualTo**, **contains**,",
                      "enum": [
                        "contains",
                        "endsWith",
                        "isEqualTo",
                        "startsWith"
                      ],
                      "type": "string"
                    },
                    "value": {
                      "description": "The string to be matched.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "SweepConfigurationV2": {
                  "properties": {
                    "category": {
                      "description": "The type of transfer that results from the sweep.\n\nPossible values:\n\n - **bank**: Sweep to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).\n\n- **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.\n\nRequired when setting `priorities`.",
                      "enum": [
                        "bank",
                        "internal",
                        "platformPayment"
                      ],
                      "type": "string",
                      "x-addedInVersion": "2"
                    },
                    "counterparty": {
                      "$ref": "#/components/schemas/SweepCounterparty",
                      "description": "The destination or the source of the funds, depending on the `type`.\n\nEither a `balanceAccountId`, `transferInstrumentId`, or `merchantAccount` is required."
                    },
                    "currency": {
                      "description": "The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) in uppercase. For example, **EUR**.\n\nThe sweep currency must match any of the [balances currencies](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__resParam_balances).",
                      "type": "string"
                    },
                    "description": {
                      "description": "The message that will be used in the sweep transfer's description body with a maximum length of 140 characters.\n\nIf the message is longer after replacing placeholders, the message will be cut off at 140 characters.",
                      "type": "string"
                    },
                    "id": {
                      "description": "The unique identifier of the sweep.",
                      "readOnly": true,
                      "type": "string"
                    },
                    "priorities": {
                      "description": "The list of priorities for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. You can provide multiple priorities. Adyen will try to pay out using the priority listed first, and if that's not possible, it moves on to the next option in the order of provided priorities.\n\nPossible values:\n\n* **regular**: For normal, low-value transactions.\n\n* **fast**: Faster way to transfer funds but has higher fees. Recommended for high-priority, low-value transactions.\n\n* **wire**: Fastest way to transfer funds but has the highest fees. Recommended for high-priority, high-value transactions.\n\n* **instant**: Instant way to transfer funds in [SEPA countries](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).\n\n* **crossBorder**: High-value transfer to a recipient in a different country.\n\n* **internal**: Transfer to an Adyen-issued business bank account (by bank account number/IBAN).\n\nSet `category` to **bank**. For more details, see [optional priorities setup](https://docs.adyen.com/marketplaces-and-platforms/payout-to-users/scheduled-payouts#optional-priorities-setup).",
                      "items": {
                        "enum": [
                          "crossBorder",
                          "directDebit",
                          "fast",
                          "instant",
                          "internal",
                          "regular",
                          "wire"
                        ],
                        "type": "string"
                      },
                      "type": "array",
                      "x-addedInVersion": "2"
                    },
                    "reason": {
                      "description": "The reason for disabling the sweep.",
                      "enum": [
                        "amountLimitExceeded",
                        "approved",
                        "counterpartyAccountBlocked",
                        "counterpartyAccountClosed",
                        "counterpartyAccountNotFound",
                        "counterpartyAddressRequired",
                        "counterpartyBankTimedOut",
                        "counterpartyBankUnavailable",
                        "error",
                        "notEnoughBalance",
                        "refusedByCounterpartyBank",
                        "routeNotFound",
                        "unknown"
                      ],
                      "readOnly": true,
                      "type": "string"
                    },
                    "schedule": {
                      "description": "The schedule when the `triggerAmount` is evaluated. If the balance meets the threshold, funds are pushed out of or pulled in to the balance account.",
                      "oneOf": [
                        {
                          "$ref": "#/components/schemas/CronSweepSchedule"
                        },
                        {
                          "$ref": "#/components/schemas/SweepSchedule"
                        }
                      ]
                    },
                    "status": {
                      "description": "The status of the sweep. If not provided, by default, this is set to **active**.\n\nPossible values: \n\n * **active**:  the sweep is enabled and funds will be pulled in or pushed out based on the defined configuration. \n\n * **inactive**: the sweep is disabled and cannot be triggered. \n\n",
                      "enum": [
                        "active",
                        "inactive"
                      ],
                      "type": "string",
                      "x-enum": [
                        {
                          "description": "The sweep is enabled and funds will be pulled in or pushed out based on the defined configuration",
                          "value": "active"
                        },
                        {
                          "description": "The sweep is disabled and cannot be triggered.",
                          "value": "inactive"
                        }
                      ]
                    },
                    "sweepAmount": {
                      "$ref": "#/components/schemas/Amount",
                      "description": "The amount that must be pushed out or pulled in. You can configure either `sweepAmount` or `targetAmount`, not both."
                    },
                    "targetAmount": {
                      "$ref": "#/components/schemas/Amount",
                      "description": "The amount that must be available in the balance account after the sweep. You can configure either `sweepAmount` or `targetAmount`, not both."
                    },
                    "triggerAmount": {
                      "$ref": "#/components/schemas/Amount",
                      "description": "The threshold amount that triggers the sweep. If not provided, by default, the amount is set to zero. The `triggerAmount` is evaluated according to the specified `schedule.type`.\n\n* For `type` **pull**, if the balance is less than or equal to the `triggerAmount`, funds are pulled in to the balance account.\n\n* For `type` **push**, if the balance is more than or equal to the `triggerAmount`, funds are pushed out of the balance account."
                    },
                    "type": {
                      "default": "push",
                      "description": "The direction of sweep, whether pushing out or pulling in funds to the balance account. If not provided, by default, this is set to **push**.\n\nPossible values:\n\n * **push**: _push out funds_ to a destination balance account or transfer instrument.\n\n * **pull**: _pull in funds_ from a source merchant account, transfer instrument, or balance account.",
                      "enum": [
                        "pull",
                        "push"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "id",
                    "schedule",
                    "currency",
                    "counterparty"
                  ],
                  "type": "object"
                },
                "SweepCounterparty": {
                  "properties": {
                    "balanceAccountId": {
                      "description": "The unique identifier of the destination or source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).\n\n You can only use this for periodic sweep schedules such as `schedule.type` **daily** or **monthly**.",
                      "type": "string"
                    },
                    "merchantAccount": {
                      "description": "The merchant account that will be the source of funds, if you are processing payments with Adyen. You can only use this with sweeps of `type` **pull** and `schedule.type` **balance**.",
                      "type": "string"
                    },
                    "transferInstrumentId": {
                      "description": "The unique identifier of the destination or source [transfer instrument](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/transferInstruments__resParam_id).\n\nYou can also use this in combination with a `merchantAccount` and a `type` **pull** to start a direct debit request from the source transfer instrument. To use this feature, reach out to your Adyen contact.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "SweepSchedule": {
                  "additionalProperties": false,
                  "properties": {
                    "type": {
                      "description": "The schedule type.\n\nPossible values:\n\n* **cron**: push out funds based on a cron expression.\n\n* **daily**: push out funds daily at 07:00 AM CET.\n\n* **weekly**: push out funds every Monday at 07:00 AM CET.\n\n* **monthly**: push out funds every first of the month at 07:00 AM CET.\n\n* **balance**: pull in funds instantly if the balance is less than or equal to the `triggerAmount`. You can only use this for sweeps of `type` **pull** and when the source is a `merchantAccount` or `transferInstrument`.",
                      "enum": [
                        "daily",
                        "weekly",
                        "monthly",
                        "balance",
                        "cron"
                      ],
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "TimeOfDay": {
                  "properties": {
                    "endTime": {
                      "description": "The end time in a time-only ISO-8601 extended offset format. For example: **08:00:00+02:00**, **22:30:00-03:00**.\n\n",
                      "type": "string"
                    },
                    "startTime": {
                      "description": "The start time in a time-only ISO-8601 extended offset format. For example: **08:00:00+02:00**, **22:30:00-03:00**.\n\n",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "TimeOfDayRestriction": {
                  "properties": {
                    "operation": {
                      "description": "Defines how the condition must be evaluated.",
                      "type": "string"
                    },
                    "value": {
                      "$ref": "#/components/schemas/TimeOfDay"
                    }
                  },
                  "required": [
                    "operation"
                  ],
                  "type": "object"
                },
                "TotalAmountRestriction": {
                  "properties": {
                    "operation": {
                      "description": "Defines how the condition must be evaluated.",
                      "type": "string"
                    },
                    "value": {
                      "$ref": "#/components/schemas/Amount",
                      "description": "The amount value and currency."
                    }
                  },
                  "required": [
                    "operation"
                  ],
                  "type": "object"
                },
                "TransactionRule": {
                  "properties": {
                    "aggregationLevel": {
                      "description": "The level at which data must be accumulated, used in rules with `type` **velocity** or **maxUsage**. The level must be the [same or lower in hierarchy](https://docs.adyen.com/issuing/transaction-rules#accumulate-data) than the `entityKey`.\n\nIf not provided, by default, the rule will accumulate data at the **paymentInstrument** level.\n\nPossible values: **paymentInstrument**, **paymentInstrumentGroup**, **balanceAccount**, **accountHolder**, **balancePlatform**.",
                      "type": "string",
                      "x-addedInVersion": "2"
                    },
                    "description": {
                      "description": "Your description for the transaction rule, maximum 300 characters.",
                      "maxLength": 300,
                      "type": "string"
                    },
                    "endDate": {
                      "description": "The date when the rule will stop being evaluated, in ISO 8601 extended offset date-time format. For example, **2020-12-18T10:15:30+01:00**.\n\nIf not provided, the rule will be evaluated until the rule status is set to **inactive**.",
                      "type": "string"
                    },
                    "entityKey": {
                      "$ref": "#/components/schemas/TransactionRuleEntityKey",
                      "description": "The type and unique identifier of the resource to which the rule applies.",
                      "x-addedInVersion": "2"
                    },
                    "id": {
                      "description": "The unique identifier of the transaction rule.",
                      "type": "string"
                    },
                    "interval": {
                      "$ref": "#/components/schemas/TransactionRuleInterval",
                      "description": "The [time interval](https://docs.adyen.com/issuing/transaction-rules#time-intervals) when the rule conditions apply."
                    },
                    "outcomeType": {
                      "description": "The [outcome](https://docs.adyen.com/issuing/transaction-rules#outcome) that will be applied when a transaction meets the conditions of the rule. If not provided, by default, this is set to **hardBlock**.\n\nPossible values:\n\n * **hardBlock**: the transaction is declined.\n\n* **scoreBased**: the transaction is assigned the `score` you specified. Adyen calculates the total score and if it exceeds 100, the transaction is declined.",
                      "enum": [
                        "hardBlock",
                        "scoreBased"
                      ],
                      "type": "string",
                      "x-addedInVersion": "2"
                    },
                    "reference": {
                      "description": "Your reference for the transaction rule, maximum 150 characters.",
                      "maxLength": 150,
                      "type": "string"
                    },
                    "requestType": {
                      "description": "Indicates the type of request to which the rule applies.\n\nPossible values: **authorization**, **authentication**, **tokenization**.",
                      "enum": [
                        "authentication",
                        "authorization",
                        "tokenization"
                      ],
                      "type": "string",
                      "x-addedInVersion": "2"
                    },
                    "ruleRestrictions": {
                      "$ref": "#/components/schemas/TransactionRuleRestrictions",
                      "description": "Contains one or more objects that define the [rule conditions](https://docs.adyen.com/issuing/transaction-rules#conditions). Each object must have a value and an operation which determines how the values must be evaluated.\n\nFor example, a `countries` object can have a list of country codes **[\"US\", \"CA\"]** in the `value` field and **anyMatch** in the `operation` field.",
                      "x-addedInVersion": "2"
                    },
                    "score": {
                      "description": "A positive or negative score applied to the transaction if it meets the conditions of the rule. Required when `outcomeType` is **scoreBased**.  The value must be between **-100** and **100**.",
                      "format": "int32",
                      "type": "integer",
                      "x-addedInVersion": "2"
                    },
                    "startDate": {
                      "description": "The date when the rule will start to be evaluated, in ISO 8601 extended offset date-time format. For example, **2020-12-18T10:15:30+01:00**.\n\nIf not provided when creating a transaction rule, the `startDate` is set to the date when the rule status is set to **active**. \n\n",
                      "type": "string"
                    },
                    "status": {
                      "description": "The status of the transaction rule. If you provide a `startDate` in the request, the rule is automatically created \nwith an **active** status. \n\nPossible values: **active**, **inactive**.",
                      "enum": [
                        "active",
                        "inactive"
                      ],
                      "type": "string"
                    },
                    "type": {
                      "description": "The [type of rule](https://docs.adyen.com/issuing/transaction-rules#rule-types), which defines if a rule blocks transactions based on individual characteristics or accumulates data.\n\nPossible values:\n * **blockList**: decline a transaction when the conditions are met.\n * **maxUsage**: add the amount or number of transactions for the lifetime of a payment instrument, and then decline a transaction when the specified limits are met.\n * **velocity**: add the amount or number of transactions based on a specified time interval, and then decline a transaction when the specified limits are met.\n",
                      "enum": [
                        "allowList",
                        "blockList",
                        "maxUsage",
                        "velocity"
                      ],
                      "type": "string",
                      "x-enum": [
                        {
                          "description": "The rule provides categories (such as country and MCC) where payments must be allowed.",
                          "value": "allowList"
                        },
                        {
                          "description": "The rule provides categories (such as country and MCC) where payments must be blocked.",
                          "value": "blockList"
                        },
                        {
                          "description": "The rule sets limits for the maximum amount or maximum number of transactions for a given time interval.",
                          "value": "velocity"
                        },
                        {
                          "description": "The rule sets limits for the maximum amount or maximum number of transactions for the lifetime of the payment instrument.",
                          "value": "maxUsage"
                        }
                      ]
                    }
                  },
                  "required": [
                    "type",
                    "description",
                    "reference",
                    "entityKey",
                    "interval",
                    "ruleRestrictions"
                  ],
                  "type": "object"
                },
                "TransactionRuleEntityKey": {
                  "properties": {
                    "entityReference": {
                      "description": "The unique identifier of the resource.",
                      "type": "string"
                    },
                    "entityType": {
                      "description": "The type of resource.\n\nPossible values: **balancePlatform**, **paymentInstrumentGroup**, **accountHolder**, **balanceAccount**, or **paymentInstrument**.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "TransactionRuleInfo": {
                  "properties": {
                    "aggregationLevel": {
                      "description": "The level at which data must be accumulated, used in rules with `type` **velocity** or **maxUsage**. The level must be the [same or lower in hierarchy](https://docs.adyen.com/issuing/transaction-rules#accumulate-data) than the `entityKey`.\n\nIf not provided, by default, the rule will accumulate data at the **paymentInstrument** level.\n\nPossible values: **paymentInstrument**, **paymentInstrumentGroup**, **balanceAccount**, **accountHolder**, **balancePlatform**.",
                      "type": "string",
                      "x-addedInVersion": "2"
                    },
                    "description": {
                      "description": "Your description for the transaction rule, maximum 300 characters.",
                      "maxLength": 300,
                      "type": "string"
                    },
                    "endDate": {
                      "description": "The date when the rule will stop being evaluated, in ISO 8601 extended offset date-time format. For example, **2020-12-18T10:15:30+01:00**.\n\nIf not provided, the rule will be evaluated until the rule status is set to **inactive**.",
                      "type": "string"
                    },
                    "entityKey": {
                      "$ref": "#/components/schemas/TransactionRuleEntityKey",
                      "description": "The type and unique identifier of the resource to which the rule applies.",
                      "x-addedInVersion": "2"
                    },
                    "interval": {
                      "$ref": "#/components/schemas/TransactionRuleInterval",
                      "description": "The [time interval](https://docs.adyen.com/issuing/transaction-rules#time-intervals) when the rule conditions apply."
                    },
                    "outcomeType": {
                      "description": "The [outcome](https://docs.adyen.com/issuing/transaction-rules#outcome) that will be applied when a transaction meets the conditions of the rule. If not provided, by default, this is set to **hardBlock**.\n\nPossible values:\n\n * **hardBlock**: the transaction is declined.\n\n* **scoreBased**: the transaction is assigned the `score` you specified. Adyen calculates the total score and if it exceeds 100, the transaction is declined.",
                      "enum": [
                        "hardBlock",
                        "scoreBased"
                      ],
                      "type": "string",
                      "x-addedInVersion": "2"
                    },
                    "reference": {
                      "description": "Your reference for the transaction rule, maximum 150 characters.",
                      "maxLength": 150,
                      "type": "string"
                    },
                    "requestType": {
                      "description": "Indicates the type of request to which the rule applies.\n\nPossible values: **authorization**, **authentication**, **tokenization**.",
                      "enum": [
                        "authentication",
                        "authorization",
                        "tokenization"
                      ],
                      "type": "string",
                      "x-addedInVersion": "2"
                    },
                    "ruleRestrictions": {
                      "$ref": "#/components/schemas/TransactionRuleRestrictions",
                      "description": "Contains one or more objects that define the [rule conditions](https://docs.adyen.com/issuing/transaction-rules#conditions). Each object must have a value and an operation which determines how the values must be evaluated.\n\nFor example, a `countries` object can have a list of country codes **[\"US\", \"CA\"]** in the `value` field and **anyMatch** in the `operation` field.",
                      "x-addedInVersion": "2"
                    },
                    "score": {
                      "description": "A positive or negative score applied to the transaction if it meets the conditions of the rule. Required when `outcomeType` is **scoreBased**.  The value must be between **-100** and **100**.",
                      "format": "int32",
                      "type": "integer",
                      "x-addedInVersion": "2"
                    },
                    "startDate": {
                      "description": "The date when the rule will start to be evaluated, in ISO 8601 extended offset date-time format. For example, **2020-12-18T10:15:30+01:00**.\n\nIf not provided when creating a transaction rule, the `startDate` is set to the date when the rule status is set to **active**. \n\n",
                      "type": "string"
                    },
                    "status": {
                      "description": "The status of the transaction rule. If you provide a `startDate` in the request, the rule is automatically created \nwith an **active** status. \n\nPossible values: **active**, **inactive**.",
                      "enum": [
                        "active",
                        "inactive"
                      ],
                      "type": "string"
                    },
                    "type": {
                      "description": "The [type of rule](https://docs.adyen.com/issuing/transaction-rules#rule-types), which defines if a rule blocks transactions based on individual characteristics or accumulates data.\n\nPossible values:\n * **blockList**: decline a transaction when the conditions are met.\n * **maxUsage**: add the amount or number of transactions for the lifetime of a payment instrument, and then decline a transaction when the specified limits are met.\n * **velocity**: add the amount or number of transactions based on a specified time interval, and then decline a transaction when the specified limits are met.\n",
                      "enum": [
                        "allowList",
                        "blockList",
                        "maxUsage",
                        "velocity"
                      ],
                      "type": "string",
                      "x-enum": [
                        {
                          "description": "The rule provides categories (such as country and MCC) where payments must be allowed.",
                          "value": "allowList"
                        },
                        {
                          "description": "The rule provides categories (such as country and MCC) where payments must be blocked.",
                          "value": "blockList"
                        },
                        {
                          "description": "The rule sets limits for the maximum amount or maximum number of transactions for a given time interval.",
                          "value": "velocity"
                        },
                        {
                          "description": "The rule sets limits for the maximum amount or maximum number of transactions for the lifetime of the payment instrument.",
                          "value": "maxUsage"
                        }
                      ]
                    }
                  },
                  "required": [
                    "type",
                    "description",
                    "reference",
                    "entityKey",
                    "interval",
                    "ruleRestrictions"
                  ],
                  "type": "object"
                },
                "TransactionRuleInterval": {
                  "properties": {
                    "dayOfMonth": {
                      "description": "The day of month, used when the `duration.unit` is **months**. If not provided, by default, this is set to **1**, the first day of the month.",
                      "format": "int32",
                      "type": "integer",
                      "x-addedInVersion": "2"
                    },
                    "dayOfWeek": {
                      "description": "The day of week, used when the `duration.unit` is **weeks**. If not provided, by default, this is set to **monday**.\n\nPossible values: **sunday**, **monday**, **tuesday**, **wednesday**, **thursday**, **friday**.",
                      "enum": [
                        "friday",
                        "monday",
                        "saturday",
                        "sunday",
                        "thursday",
                        "tuesday",
                        "wednesday"
                      ],
                      "type": "string",
                      "x-addedInVersion": "2"
                    },
                    "duration": {
                      "$ref": "#/components/schemas/Duration",
                      "description": "The duration, which you can specify in hours, days, weeks, or months. The maximum duration is 90 days or an equivalent in other units. Required when the `type` is **rolling** or **sliding**.",
                      "x-addedInVersion": "2"
                    },
                    "timeOfDay": {
                      "description": "The time of day, in **hh:mm:ss** format, used when the `duration.unit` is **hours**. If not provided, by default, this is set to **00:00:00**.",
                      "type": "string",
                      "x-addedInVersion": "2"
                    },
                    "timeZone": {
                      "description": "The [time zone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For example, **Europe/Amsterdam**. By default, this is set to **UTC**.",
                      "type": "string",
                      "x-addedInVersion": "2"
                    },
                    "type": {
                      "description": "The [type of interval](https://docs.adyen.com/issuing/transaction-rules#time-intervals) during which the rule conditions and limits apply, and how often counters are reset.\n\nPossible values:\n  * **perTransaction**: conditions are evaluated and the counters are reset for every transaction.\n * **daily**: the counters are reset daily at 00:00:00 UTC.\n * **weekly**: the counters are reset every Monday at 00:00:00 UTC. \n * **monthly**: the counters reset every first day of the month at 00:00:00 UTC. \n * **lifetime**: conditions are applied to the lifetime of the payment instrument.\n * **rolling**: conditions are applied and the counters are reset based on a `duration`. If the reset date and time are not provided, Adyen applies the default reset time similar to fixed intervals. For example, if the duration is every two weeks, the counter resets every third Monday at 00:00:00 UTC.\n * **sliding**: conditions are applied and the counters are reset based on the current time and a `duration` that you specify.",
                      "enum": [
                        "daily",
                        "lifetime",
                        "monthly",
                        "perTransaction",
                        "rolling",
                        "sliding",
                        "weekly"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type"
                  ],
                  "type": "object"
                },
                "TransactionRuleResponse": {
                  "properties": {
                    "transactionRule": {
                      "$ref": "#/components/schemas/TransactionRule",
                      "description": "The transaction rule."
                    }
                  },
                  "type": "object"
                },
                "TransactionRuleRestrictions": {
                  "properties": {
                    "activeNetworkTokens": {
                      "$ref": "#/components/schemas/ActiveNetworkTokensRestriction",
                      "description": "The total number of tokens that a card can have across different kinds of digital wallets on the user's phones, watches, or other wearables.\n\nSupported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**."
                    },
                    "brandVariants": {
                      "$ref": "#/components/schemas/BrandVariantsRestriction",
                      "description": "List of card brand variants and the operation.\n\nSupported operations: **anyMatch**, **noneMatch**."
                    },
                    "countries": {
                      "$ref": "#/components/schemas/CountriesRestriction",
                      "description": "List of countries and the operation.\n\nSupported operations: **anyMatch**, **noneMatch**."
                    },
                    "dayOfWeek": {
                      "$ref": "#/components/schemas/DayOfWeekRestriction",
                      "description": "List of week days and the operation. Supported operations: **anyMatch**, **noneMatch**."
                    },
                    "differentCurrencies": {
                      "$ref": "#/components/schemas/DifferentCurrenciesRestriction",
                      "description": "Compares the currency of the payment against the currency of the payment instrument, and specifies the operation.\n\nSupported operations: **equals**, **notEquals**."
                    },
                    "entryModes": {
                      "$ref": "#/components/schemas/EntryModesRestriction",
                      "description": "List of point-of-sale entry modes and the operation..\n\nSupported operations: **anyMatch**, **noneMatch**."
                    },
                    "internationalTransaction": {
                      "$ref": "#/components/schemas/InternationalTransactionRestriction",
                      "description": "Indicates whether transaction is an international transaction and specifies the operation.\n\nSupported operations: **equals**, **notEquals**."
                    },
                    "matchingTransactions": {
                      "$ref": "#/components/schemas/MatchingTransactionsRestriction",
                      "description": "The number of transactions and the operation.\n\nSupported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**."
                    },
                    "mccs": {
                      "$ref": "#/components/schemas/MccsRestriction",
                      "description": "List of merchant category codes (MCCs) and the operation.\n\nSupported operations: **anyMatch**, **noneMatch**."
                    },
                    "merchantNames": {
                      "$ref": "#/components/schemas/MerchantNamesRestriction",
                      "description": "List of names that will be compared to the merchant name according to the matching type.\n\nSupported operations: **anyMatch**, **noneMatch**."
                    },
                    "merchants": {
                      "$ref": "#/components/schemas/MerchantsRestriction",
                      "description": "List of merchant ID and acquirer ID pairs, and the operation.\n\nSupported operations: **anyMatch**, **noneMatch**."
                    },
                    "processingTypes": {
                      "$ref": "#/components/schemas/ProcessingTypesRestriction",
                      "description": "List of processing types and the operation.\n\nSupported operations: **anyMatch**, **noneMatch**."
                    },
                    "timeOfDay": {
                      "$ref": "#/components/schemas/TimeOfDayRestriction",
                      "description": "A start and end time in a time-only ISO-8601 extended offset format. Supported operations: **equals**, **notEquals**."
                    },
                    "totalAmount": {
                      "$ref": "#/components/schemas/TotalAmountRestriction",
                      "description": "The total amount and the operation.\n\nSupported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**."
                    }
                  },
                  "type": "object"
                },
                "TransactionRulesResponse": {
                  "properties": {
                    "transactionRules": {
                      "description": "List of transaction rules.",
                      "items": {
                        "$ref": "#/components/schemas/TransactionRule"
                      },
                      "type": "array"
                    }
                  },
                  "type": "object"
                },
                "UKLocalAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "accountNumber": {
                      "description": "The 8-digit bank account number, without separators or whitespace.",
                      "maxLength": 8,
                      "minLength": 8,
                      "type": "string"
                    },
                    "sortCode": {
                      "description": "The 6-digit [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace.",
                      "maxLength": 6,
                      "minLength": 6,
                      "type": "string"
                    },
                    "type": {
                      "default": "ukLocal",
                      "description": "**ukLocal**",
                      "enum": [
                        "ukLocal"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "accountNumber",
                    "sortCode"
                  ],
                  "type": "object"
                },
                "USLocalAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "accountNumber": {
                      "description": "The bank account number, without separators or whitespace.",
                      "maxLength": 18,
                      "minLength": 2,
                      "type": "string"
                    },
                    "accountType": {
                      "default": "checking",
                      "description": "The bank account type.\n\nPossible values: **checking** or **savings**. Defaults to **checking**.",
                      "enum": [
                        "checking",
                        "savings"
                      ],
                      "type": "string"
                    },
                    "routingNumber": {
                      "description": "The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.",
                      "maxLength": 9,
                      "minLength": 9,
                      "type": "string"
                    },
                    "type": {
                      "default": "usLocal",
                      "description": "**usLocal**",
                      "enum": [
                        "usLocal"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "accountNumber",
                    "routingNumber"
                  ],
                  "type": "object"
                },
                "UpdatePaymentInstrument": {
                  "properties": {
                    "balanceAccountId": {
                      "description": "The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/balanceAccounts__resParam_id) associated with the payment instrument.",
                      "type": "string"
                    },
                    "bankAccount": {
                      "description": "Contains the business account details. Returned when you create a payment instrument with `type` **bankAccount**.",
                      "oneOf": [
                        {
                          "$ref": "#/components/schemas/IbanAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/USLocalAccountIdentification"
                        }
                      ]
                    },
                    "card": {
                      "$ref": "#/components/schemas/Card",
                      "description": "Contains information about the card payment instrument. Returned when you create a payment instrument with `type` **card**."
                    },
                    "description": {
                      "description": "Your description for the payment instrument, maximum 300 characters.",
                      "maxLength": 300,
                      "type": "string"
                    },
                    "id": {
                      "description": "The unique identifier of the payment instrument.",
                      "type": "string"
                    },
                    "issuingCountryCode": {
                      "description": "The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**.",
                      "type": "string"
                    },
                    "paymentInstrumentGroupId": {
                      "description": "The unique identifier of the [payment instrument group](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/paymentInstrumentGroups__resParam_id) to which the payment instrument belongs.",
                      "type": "string"
                    },
                    "reference": {
                      "description": "Your reference for the payment instrument, maximum 150 characters.",
                      "maxLength": 150,
                      "type": "string"
                    },
                    "status": {
                      "description": "The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **inactive**.\n\nPossible values: \n\n * **active**:  The payment instrument is active and can be used to make payments. \n\n * **inactive**: The payment instrument is inactive and cannot be used to make payments. \n\n * **suspended**: The payment instrument is suspended, either because it was stolen or lost. \n\n * **closed**: The payment instrument is permanently closed. This action cannot be undone. \n\n",
                      "enum": [
                        "active",
                        "closed",
                        "inactive",
                        "suspended"
                      ],
                      "type": "string",
                      "x-enum": [
                        {
                          "description": "The payment instrument is active and can be used to make payments.",
                          "value": "active"
                        },
                        {
                          "description": "The payment instrument is inactive and cannot be used to make payments.",
                          "value": "inactive"
                        },
                        {
                          "description": "The payment instrument is suspended. Either because it was stolen or lost.",
                          "value": "suspended"
                        },
                        {
                          "description": "The payment instrument is permanently closed. This action cannot be undone.",
                          "value": "closed"
                        }
                      ]
                    },
                    "statusComment": {
                      "description": "Comment for the status of the payment instrument.\n\nRequired if `statusReason` is **other**.",
                      "type": "string"
                    },
                    "statusReason": {
                      "description": "The reason for updating the status of the payment instrument.\n\nPossible values: **lost**, **stolen**, **damaged**, **suspectedFraud**, **expired**, **endOfLife**, **accountClosure**, **other**.\nIf the reason is **other**, you must also send the `statusComment` parameter describing the status change.",
                      "enum": [
                        "accountClosure",
                        "damaged",
                        "endOfLife",
                        "expired",
                        "lost",
                        "other",
                        "stolen",
                        "suspectedFraud"
                      ],
                      "type": "string",
                      "x-addedInVersion": "2"
                    },
                    "type": {
                      "description": "Type of payment instrument.\n\nPossible value: **card**, **bankAccount**. ",
                      "enum": [
                        "bankAccount",
                        "card"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "balanceAccountId",
                    "issuingCountryCode",
                    "type",
                    "id"
                  ],
                  "type": "object"
                },
                "VerificationDeadline": {
                  "properties": {
                    "capabilities": {
                      "description": "The names of the capabilities to be disallowed.",
                      "items": {
                        "enum": [
                          "acceptExternalFunding",
                          "acceptPspFunding",
                          "acceptTransactionInRestrictedCountries",
                          "acceptTransactionInRestrictedCountriesCommercial",
                          "acceptTransactionInRestrictedCountriesConsumer",
                          "acceptTransactionInRestrictedIndustries",
                          "acceptTransactionInRestrictedIndustriesCommercial",
                          "acceptTransactionInRestrictedIndustriesConsumer",
                          "acquiring",
                          "atmWithdrawal",
                          "atmWithdrawalCommercial",
                          "atmWithdrawalConsumer",
                          "atmWithdrawalInRestrictedCountries",
                          "atmWithdrawalInRestrictedCountriesCommercial",
                          "atmWithdrawalInRestrictedCountriesConsumer",
                          "authorisedPaymentInstrumentUser",
                          "getGrantOffers",
                          "issueBankAccount",
                          "issueCard",
                          "issueCardCommercial",
                          "issueCardConsumer",
                          "localAcceptance",
                          "payout",
                          "payoutToTransferInstrument",
                          "processing",
                          "receiveFromBalanceAccount",
                          "receiveFromPlatformPayments",
                          "receiveFromThirdParty",
                          "receiveFromTransferInstrument",
                          "receiveGrants",
                          "receivePayments",
                          "sendToBalanceAccount",
                          "sendToThirdParty",
                          "sendToTransferInstrument",
                          "thirdPartyFunding",
                          "useCard",
                          "useCardCommercial",
                          "useCardConsumer",
                          "useCardInRestrictedCountries",
                          "useCardInRestrictedCountriesCommercial",
                          "useCardInRestrictedCountriesConsumer",
                          "useCardInRestrictedIndustries",
                          "useCardInRestrictedIndustriesCommercial",
                          "useCardInRestrictedIndustriesConsumer",
                          "withdrawFromAtm",
                          "withdrawFromAtmCommercial",
                          "withdrawFromAtmConsumer",
                          "withdrawFromAtmInRestrictedCountries",
                          "withdrawFromAtmInRestrictedCountriesCommercial",
                          "withdrawFromAtmInRestrictedCountriesConsumer"
                        ],
                        "type": "string"
                      },
                      "readOnly": true,
                      "type": "array"
                    },
                    "expiresAt": {
                      "description": "The date that verification is due by before capabilities are disallowed.",
                      "format": "date-time",
                      "readOnly": true,
                      "type": "string"
                    }
                  },
                  "required": [
                    "expiresAt",
                    "capabilities"
                  ],
                  "type": "object"
                },
                "Void": {
                  "type": "object"
                },
                "void": {
                  "type": "object"
                }
              },
              "securitySchemes": {
                "ApiKeyAuth": {
                  "in": "header",
                  "name": "X-API-Key",
                  "type": "apiKey"
                },
                "BasicAuth": {
                  "scheme": "basic",
                  "type": "http"
                }
              }
            },
            "x-groups": [
              "Platform",
              "Account holders",
              "Balance accounts",
              "Payment instruments",
              "Payment instrument groups",
              "Transaction rules",
              "Bank account validation"
            ]
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema4', () => {
        // Setup
        const schema: OpenAPI = {
            "openapi": "3.1.0",
            "servers": [
              {
                "url": "https://balanceplatform-api-test.adyen.com/btl/v3"
              }
            ],
            "info": {
              "contact": {
                "email": "developer-experience@adyen.com",
                "name": "Adyen Developer Experience team",
                "url": "https://www.adyen.help/hc/en-us/community/topics",
                "x-twitter": "Adyen"
              },
              "description": "Adyen sends notifications through webhooks to inform your system about incoming and outgoing transfers in your platform.\n\nYou can use these webhooks to build your implementation. For example, you can use this information to update balances in your own dashboards or to keep track of incoming funds.",
              "termsOfService": "https://www.adyen.com/legal/terms-and-conditions",
              "title": "Transfer webhooks",
              "version": "3",
              "x-apisguru-categories": [
                "payment"
              ],
              "x-logo": {
                "url": "https://api.apis.guru/v2/cache/logo/https_twitter.com_Adyen_profile_image"
              },
              "x-origin": [
                {
                  "format": "openapi",
                  "url": "https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BalancePlatformTransferNotification-v3.json",
                  "version": "3.1"
                }
              ],
              "x-providerName": "adyen.com",
              "x-publicVersion": true,
              "x-serviceName": "BalancePlatformTransferNotification-v3",
              "x-timestamp": "2023-04-05T18:24:48Z"
            },
            "tags": [],
            "components": {
              "examples": {},
              "schemas": {
                "AULocalAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "accountNumber": {
                      "description": "The bank account number, without separators or whitespace.",
                      "maxLength": 9,
                      "minLength": 5,
                      "type": "string"
                    },
                    "bsbCode": {
                      "description": "The 6-digit [Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch), without separators or whitespace.",
                      "maxLength": 6,
                      "minLength": 6,
                      "type": "string"
                    },
                    "type": {
                      "default": "auLocal",
                      "description": "**auLocal**",
                      "enum": [
                        "auLocal"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "accountNumber",
                    "bsbCode"
                  ],
                  "type": "object"
                },
                "AdditionalBankIdentification": {
                  "properties": {
                    "code": {
                      "description": "The value of the additional bank identification.",
                      "type": "string"
                    },
                    "type": {
                      "description": "The type of additional bank identification, depending on the country.\n\nPossible values:\n\n * **gbSortCode**: The 6-digit [UK sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or spaces\n * **usRoutingNumber**: The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or spaces.",
                      "enum": [
                        "gbSortCode",
                        "usRoutingNumber"
                      ],
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "Address": {
                  "properties": {
                    "city": {
                      "description": "The name of the city.",
                      "type": "string"
                    },
                    "country": {
                      "description": "The two-character ISO 3166-1 alpha-2 country code. For example, **US**.\n>If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.",
                      "type": "string"
                    },
                    "line1": {
                      "description": "First line of the street address.",
                      "type": "string"
                    },
                    "line2": {
                      "description": "Second line of the street address.",
                      "type": "string"
                    },
                    "postalCode": {
                      "description": "The postal code.\nMaximum length:\n* 5 digits for an address in the US.\n* 10 characters for an address in all other countries.",
                      "type": "string"
                    },
                    "stateOrProvince": {
                      "description": "The two-letter ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.\n> Required for the US and Canada.",
                      "type": "string"
                    }
                  },
                  "required": [
                    "country"
                  ],
                  "type": "object"
                },
                "Amount": {
                  "properties": {
                    "currency": {
                      "description": "The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).",
                      "maxLength": 3,
                      "minLength": 3,
                      "type": "string"
                    },
                    "value": {
                      "description": "The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).",
                      "format": "int64",
                      "type": "integer"
                    }
                  },
                  "required": [
                    "value",
                    "currency"
                  ],
                  "type": "object"
                },
                "AmountAdjustment": {
                  "properties": {
                    "amount": {
                      "$ref": "#/components/schemas/Amount",
                      "description": "The adjustment amount.",
                      "x-addedInVersion": "3"
                    },
                    "amountAdjustmentType": {
                      "description": "The type of markup that is applied to an authorised payment.\n\nPossible values: **exchange**, **forexMarkup**, **authHoldReserve**, **atmMarkup**.",
                      "enum": [
                        "atmMarkup",
                        "authHoldReserve",
                        "exchange",
                        "forexMarkup"
                      ],
                      "type": "string",
                      "x-addedInVersion": "3"
                    },
                    "basepoints": {
                      "description": "The basepoints associated with the applied markup.",
                      "format": "int32",
                      "type": "integer",
                      "x-addedInVersion": "3"
                    }
                  },
                  "type": "object"
                },
                "BRLocalAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "accountNumber": {
                      "description": "The bank account number (without separators or whitespace).",
                      "maxLength": 10,
                      "minLength": 1,
                      "type": "string"
                    },
                    "bankCode": {
                      "description": "The 3-digit Brazilian bank code (with leading zeros).",
                      "maxLength": 3,
                      "minLength": 3,
                      "type": "string"
                    },
                    "branchNumber": {
                      "description": "The bank account branch number (without separators or whitespace).",
                      "maxLength": 4,
                      "minLength": 1,
                      "type": "string"
                    },
                    "type": {
                      "default": "brLocal",
                      "description": "**brLocal**",
                      "enum": [
                        "brLocal"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "branchNumber",
                    "accountNumber",
                    "bankCode"
                  ],
                  "type": "object"
                },
                "BalanceMutation": {
                  "properties": {
                    "balance": {
                      "description": "The amount in the payment's currency that is debited or credited on the balance accounting register.",
                      "format": "int64",
                      "type": "integer",
                      "x-addedInVersion": "3"
                    },
                    "currency": {
                      "description": "The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).",
                      "type": "string",
                      "x-addedInVersion": "3"
                    },
                    "received": {
                      "description": "The amount in the payment's currency that is debited or credited on the received accounting register.",
                      "format": "int64",
                      "type": "integer",
                      "x-addedInVersion": "3"
                    },
                    "reserved": {
                      "description": "The amount in the payment's currency that is debited or credited on the reserved accounting register.",
                      "format": "int64",
                      "type": "integer",
                      "x-addedInVersion": "3"
                    }
                  },
                  "type": "object"
                },
                "BalancePlatformNotificationResponse": {
                  "properties": {
                    "notificationResponse": {
                      "description": "Respond with **HTTP 200 OK** and `[accepted]` in the response body to [accept the webhook](https://docs.adyen.com/development-resources/webhooks#accept-notifications).",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "BankAccountV3": {
                  "properties": {
                    "accountHolder": {
                      "$ref": "#/components/schemas/PartyIdentification",
                      "description": "Information about the owner of the bank account."
                    },
                    "accountIdentification": {
                      "description": "Contains the bank account details. The fields required in this object depend on the country of the bank account and the currency of the transfer.",
                      "oneOf": [
                        {
                          "$ref": "#/components/schemas/AULocalAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/BRLocalAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/CALocalAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/CZLocalAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/DKLocalAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/HULocalAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/IbanAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/NOLocalAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/NumberAndBicAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/PLLocalAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/SELocalAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/SGLocalAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/UKLocalAccountIdentification"
                        },
                        {
                          "$ref": "#/components/schemas/USLocalAccountIdentification"
                        }
                      ]
                    }
                  },
                  "required": [
                    "accountIdentification",
                    "accountHolder"
                  ],
                  "type": "object"
                },
                "CALocalAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "accountNumber": {
                      "description": "The 5- to 12-digit bank account number, without separators or whitespace.",
                      "maxLength": 12,
                      "minLength": 5,
                      "type": "string"
                    },
                    "accountType": {
                      "default": "checking",
                      "description": "The bank account type.\n\nPossible values: **checking** or **savings**. Defaults to **checking**.",
                      "enum": [
                        "checking",
                        "savings"
                      ],
                      "type": "string"
                    },
                    "institutionNumber": {
                      "description": "The 3-digit institution number, without separators or whitespace.",
                      "maxLength": 3,
                      "minLength": 3,
                      "type": "string"
                    },
                    "transitNumber": {
                      "description": "The 5-digit transit number, without separators or whitespace.",
                      "maxLength": 5,
                      "minLength": 5,
                      "type": "string"
                    },
                    "type": {
                      "default": "caLocal",
                      "description": "**caLocal**",
                      "enum": [
                        "caLocal"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "accountNumber",
                    "institutionNumber",
                    "transitNumber"
                  ],
                  "type": "object"
                },
                "CZLocalAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "accountNumber": {
                      "description": "The 2- to 16-digit bank account number (Číslo účtu) in the following format:\n\n- The optional prefix (předčíslí).\n\n- The required second part (základní část) which must be at least two non-zero digits.\n\nExamples:\n\n- **19-123457** (with prefix)\n\n- **123457** (without prefix)\n\n- **000019-0000123457** (with prefix, normalized)\n\n- **000000-0000123457** (without prefix, normalized)",
                      "maxLength": 17,
                      "minLength": 2,
                      "type": "string"
                    },
                    "bankCode": {
                      "description": "The 4-digit bank code (Kód banky), without separators or whitespace.",
                      "maxLength": 4,
                      "minLength": 4,
                      "type": "string"
                    },
                    "type": {
                      "default": "czLocal",
                      "description": "**czLocal**",
                      "enum": [
                        "czLocal"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "accountNumber",
                    "bankCode"
                  ],
                  "type": "object"
                },
                "CounterpartyV3": {
                  "properties": {
                    "balanceAccountId": {
                      "description": "Unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).",
                      "type": "string"
                    },
                    "bankAccount": {
                      "$ref": "#/components/schemas/BankAccountV3",
                      "description": "Contains information about the bank account."
                    },
                    "merchant": {
                      "$ref": "#/components/schemas/MerchantData",
                      "description": "Contains information about the merchant."
                    },
                    "transferInstrumentId": {
                      "description": "Unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "DKLocalAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "accountNumber": {
                      "description": "The 4-10 digits bank account number (Kontonummer) (without separators or whitespace).",
                      "maxLength": 10,
                      "minLength": 4,
                      "type": "string"
                    },
                    "bankCode": {
                      "description": "The 4-digit bank code (Registreringsnummer) (without separators or whitespace).",
                      "maxLength": 4,
                      "minLength": 4,
                      "type": "string"
                    },
                    "type": {
                      "default": "dkLocal",
                      "description": "**dkLocal**",
                      "enum": [
                        "dkLocal"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "accountNumber",
                    "bankCode"
                  ],
                  "type": "object"
                },
                "HULocalAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "accountNumber": {
                      "description": "The 24-digit bank account number, without separators or whitespace.",
                      "maxLength": 24,
                      "minLength": 24,
                      "type": "string"
                    },
                    "type": {
                      "default": "huLocal",
                      "description": "**huLocal**",
                      "enum": [
                        "huLocal"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "accountNumber"
                  ],
                  "type": "object"
                },
                "IbanAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "iban": {
                      "description": "The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard.",
                      "type": "string"
                    },
                    "type": {
                      "default": "iban",
                      "description": "**iban**",
                      "enum": [
                        "iban"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "iban"
                  ],
                  "type": "object"
                },
                "MerchantData": {
                  "properties": {
                    "mcc": {
                      "description": "The merchant category code.",
                      "type": "string"
                    },
                    "merchantId": {
                      "description": "The merchant identifier.",
                      "type": "string"
                    },
                    "nameLocation": {
                      "$ref": "#/components/schemas/NameLocation",
                      "description": "Contains the merchant's name and location."
                    },
                    "postalCode": {
                      "description": "The merchant postal code.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "NOLocalAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "accountNumber": {
                      "description": "The 11-digit bank account number, without separators or whitespace.",
                      "maxLength": 11,
                      "minLength": 11,
                      "type": "string"
                    },
                    "type": {
                      "default": "noLocal",
                      "description": "**noLocal**",
                      "enum": [
                        "noLocal"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "accountNumber"
                  ],
                  "type": "object"
                },
                "NameLocation": {
                  "properties": {
                    "city": {
                      "description": "The city where the merchant is located.",
                      "type": "string"
                    },
                    "country": {
                      "description": "The country where the merchant is located in [three-letter country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) format.",
                      "type": "string"
                    },
                    "countryOfOrigin": {
                      "description": "The home country in [three-digit country code](https://en.wikipedia.org/wiki/ISO_3166-1_numeric) format, used for government-controlled merchants such as embassies.",
                      "type": "string"
                    },
                    "name": {
                      "description": "The name of the merchant's shop or service.",
                      "type": "string"
                    },
                    "rawData": {
                      "description": "The raw data.",
                      "type": "string"
                    },
                    "state": {
                      "description": "The state where the merchant is located.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "NumberAndBicAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "accountNumber": {
                      "description": "The bank account number, without separators or whitespace. The length and format depends on the bank or country.",
                      "maxLength": 34,
                      "type": "string"
                    },
                    "additionalBankIdentification": {
                      "$ref": "#/components/schemas/AdditionalBankIdentification",
                      "description": "Additional identification codes of the bank. Some banks may require these identifiers for cross-border transfers."
                    },
                    "bic": {
                      "description": "The bank's 8- or 11-character BIC or SWIFT code.",
                      "maxLength": 11,
                      "minLength": 8,
                      "type": "string"
                    },
                    "type": {
                      "default": "numberAndBic",
                      "description": "**numberAndBic**",
                      "enum": [
                        "numberAndBic"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "accountNumber",
                    "bic"
                  ],
                  "type": "object"
                },
                "PLLocalAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "accountNumber": {
                      "description": "The 26-digit bank account number ([Numer rachunku](https://pl.wikipedia.org/wiki/Numer_Rachunku_Bankowego)), without separators or whitespace.",
                      "maxLength": 26,
                      "minLength": 26,
                      "type": "string"
                    },
                    "type": {
                      "default": "plLocal",
                      "description": "**plLocal**",
                      "enum": [
                        "plLocal"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "accountNumber"
                  ],
                  "type": "object"
                },
                "PartyIdentification": {
                  "properties": {
                    "address": {
                      "$ref": "#/components/schemas/Address",
                      "description": "Address of the bank account owner."
                    },
                    "dateOfBirth": {
                      "description": "The date of birth of the individual.\nFormat: [ISO-8601](https://www.w3.org/TR/NOTE-datetime); example: YYYY-MM-DD\nAllowed only when `type` is **individual**.",
                      "format": "date",
                      "type": "string"
                    },
                    "firstName": {
                      "description": "First name of the individual. Allowed only when `type` is **individual**.",
                      "type": "string"
                    },
                    "fullName": {
                      "description": "The name of the entity.",
                      "type": "string"
                    },
                    "lastName": {
                      "description": "Last name of the individual. Allowed only when `type` is **individual**.",
                      "type": "string"
                    },
                    "type": {
                      "default": "unknown",
                      "description": "The type of entity that owns the bank account.\n\n Possible values: **individual**, **organization**, or **unknown**.",
                      "enum": [
                        "individual",
                        "organization",
                        "unknown"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "fullName"
                  ],
                  "type": "object"
                },
                "PaymentInstrument": {
                  "properties": {
                    "description": {
                      "description": "The description of the resource.",
                      "type": "string"
                    },
                    "id": {
                      "description": "The unique identifier of the resource.",
                      "type": "string"
                    },
                    "reference": {
                      "description": "The reference for the resource.",
                      "type": "string"
                    },
                    "tokenType": {
                      "description": "The type of wallet the network token is associated with.",
                      "type": "string",
                      "x-addedInVersion": "3"
                    }
                  },
                  "type": "object"
                },
                "RelayedAuthorisationData": {
                  "properties": {
                    "metadata": {
                      "additionalProperties": {
                        "type": "string"
                      },
                      "description": "Contains key-value pairs of your references and descriptions, for example, `customId`:`your-own-custom-field-12345`.",
                      "type": "object",
                      "x-addedInVersion": "3"
                    },
                    "reference": {
                      "description": "Your reference for the relayed authorisation data.",
                      "type": "string",
                      "x-addedInVersion": "3"
                    }
                  },
                  "type": "object"
                },
                "Resource": {
                  "properties": {
                    "balancePlatform": {
                      "description": "The unique identifier of the balance platform.",
                      "type": "string"
                    },
                    "creationDate": {
                      "description": "The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.",
                      "format": "date-time",
                      "type": "string"
                    },
                    "id": {
                      "description": "The ID of the resource.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "ResourceReference": {
                  "properties": {
                    "description": {
                      "description": "The description of the resource.",
                      "type": "string"
                    },
                    "id": {
                      "description": "The unique identifier of the resource.",
                      "type": "string"
                    },
                    "reference": {
                      "description": "The reference for the resource.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "SELocalAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "accountNumber": {
                      "description": "The 7- to 10-digit bank account number ([Bankkontonummer](https://sv.wikipedia.org/wiki/Bankkonto)), without the clearing number, separators, or whitespace.",
                      "maxLength": 10,
                      "minLength": 7,
                      "type": "string"
                    },
                    "clearingNumber": {
                      "description": "The 4- to 5-digit clearing number ([Clearingnummer](https://sv.wikipedia.org/wiki/Clearingnummer)), without separators or whitespace.",
                      "maxLength": 5,
                      "minLength": 4,
                      "type": "string"
                    },
                    "type": {
                      "default": "seLocal",
                      "description": "**seLocal**",
                      "enum": [
                        "seLocal"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "accountNumber",
                    "clearingNumber"
                  ],
                  "type": "object"
                },
                "SGLocalAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "accountNumber": {
                      "description": "The 4- to 19-digit bank account number, without separators or whitespace.",
                      "maxLength": 19,
                      "minLength": 4,
                      "type": "string"
                    },
                    "bic": {
                      "description": "The bank's 8- or 11-character BIC or SWIFT code.",
                      "maxLength": 11,
                      "minLength": 8,
                      "type": "string"
                    },
                    "type": {
                      "default": "sgLocal",
                      "description": "**sgLocal**",
                      "enum": [
                        "sgLocal"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "accountNumber",
                    "bic"
                  ],
                  "type": "object"
                },
                "TransactionEventViolation": {
                  "properties": {
                    "reason": {
                      "description": "An explanation about why the transaction rule failed.",
                      "type": "string"
                    },
                    "transactionRule": {
                      "$ref": "#/components/schemas/TransactionRuleReference",
                      "description": "Contains information about the transaction rule."
                    },
                    "transactionRuleSource": {
                      "$ref": "#/components/schemas/TransactionRuleSource",
                      "description": "Contains the type and ID of the resource to which the transaction rule is linked."
                    }
                  },
                  "type": "object"
                },
                "TransactionRuleReference": {
                  "properties": {
                    "description": {
                      "description": "The description of the resource.",
                      "type": "string"
                    },
                    "id": {
                      "description": "The unique identifier of the resource.",
                      "type": "string"
                    },
                    "reference": {
                      "description": "The reference for the resource.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "TransactionRuleSource": {
                  "properties": {
                    "id": {
                      "description": "ID of the resource, when applicable.",
                      "type": "string"
                    },
                    "type": {
                      "description": "Indicates the type of resource for which the transaction rule is defined.\n\nPossible values:\n\n * **PaymentInstrumentGroup**\n\n* **PaymentInstrument**\n\n* **BalancePlatform**\n\n* **EntityUsageConfiguration**\n\n* **PlatformRule**: The transaction rule is a platform-wide rule imposed by Adyen.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "TransactionRulesResult": {
                  "properties": {
                    "advice": {
                      "description": "The advice given by the Risk analysis.",
                      "type": "string"
                    },
                    "allRulesPassed": {
                      "description": "Indicates whether the transaction passed the evaluation for all transaction rules.",
                      "type": "boolean"
                    },
                    "failedTransactionRules": {
                      "description": "Array containing all the transaction rules that the transaction violated. This list is only sent when `allRulesPassed` is **false**.",
                      "items": {
                        "$ref": "#/components/schemas/TransactionEventViolation"
                      },
                      "type": "array"
                    },
                    "score": {
                      "description": "The score of the Risk analysis.",
                      "format": "int32",
                      "type": "integer"
                    }
                  },
                  "type": "object"
                },
                "TransferEvent": {
                  "properties": {
                    "amount": {
                      "$ref": "#/components/schemas/Amount",
                      "description": "The original journal amount.",
                      "x-addedInVersion": "3"
                    },
                    "amountAdjustments": {
                      "description": "The amount adjustments in this transfer.",
                      "items": {
                        "$ref": "#/components/schemas/AmountAdjustment"
                      },
                      "type": "array",
                      "x-addedInVersion": "3"
                    },
                    "bookingDate": {
                      "description": "The date when the transfer request was sent.",
                      "format": "date-time",
                      "type": "string",
                      "x-addedInVersion": "3"
                    },
                    "estimatedArrivalTime": {
                      "description": "The estimated time the beneficiary should have access to the funds.",
                      "format": "date-time",
                      "type": "string",
                      "x-addedInVersion": "3"
                    },
                    "id": {
                      "description": "The unique identifier of the transfer event.",
                      "type": "string",
                      "x-addedInVersion": "3"
                    },
                    "mutations": {
                      "description": "The list of the balance mutation per event.",
                      "items": {
                        "$ref": "#/components/schemas/BalanceMutation"
                      },
                      "type": "array",
                      "x-addedInVersion": "3"
                    },
                    "originalAmount": {
                      "$ref": "#/components/schemas/Amount",
                      "description": "The amount in the original currency.",
                      "x-addedInVersion": "3"
                    },
                    "reason": {
                      "description": "The reason for the transfer status.",
                      "enum": [
                        "amountLimitExceeded",
                        "approved",
                        "counterpartyAccountBlocked",
                        "counterpartyAccountClosed",
                        "counterpartyAccountNotFound",
                        "counterpartyAddressRequired",
                        "counterpartyBankTimedOut",
                        "counterpartyBankUnavailable",
                        "error",
                        "notEnoughBalance",
                        "refusedByCounterpartyBank",
                        "routeNotFound",
                        "unknown"
                      ],
                      "type": "string",
                      "x-addedInVersion": "3"
                    },
                    "status": {
                      "description": "The status of the transfer event.",
                      "enum": [
                        "approvalPending",
                        "atmWithdrawal",
                        "atmWithdrawalReversalPending",
                        "atmWithdrawalReversed",
                        "authAdjustmentAuthorised",
                        "authAdjustmentError",
                        "authAdjustmentRefused",
                        "authorised",
                        "bankTransfer",
                        "bankTransferPending",
                        "booked",
                        "bookingPending",
                        "cancelled",
                        "capturePending",
                        "captureReversalPending",
                        "captureReversed",
                        "captured",
                        "chargeback",
                        "chargebackPending",
                        "chargebackReversalPending",
                        "chargebackReversed",
                        "credited",
                        "depositCorrection",
                        "depositCorrectionPending",
                        "dispute",
                        "disputeClosed",
                        "disputeExpired",
                        "disputeNeedsReview",
                        "error",
                        "expired",
                        "failed",
                        "fee",
                        "feePending",
                        "internalTransfer",
                        "internalTransferPending",
                        "invoiceDeduction",
                        "invoiceDeductionPending",
                        "manualCorrectionPending",
                        "manuallyCorrected",
                        "matchedStatement",
                        "matchedStatementPending",
                        "merchantPayin",
                        "merchantPayinPending",
                        "merchantPayinReversed",
                        "merchantPayinReversedPending",
                        "miscCost",
                        "miscCostPending",
                        "paymentCost",
                        "paymentCostPending",
                        "received",
                        "refundPending",
                        "refundReversalPending",
                        "refundReversed",
                        "refunded",
                        "refused",
                        "reserveAdjustment",
                        "reserveAdjustmentPending",
                        "returned",
                        "secondChargeback",
                        "secondChargebackPending",
                        "undefined"
                      ],
                      "type": "string",
                      "x-addedInVersion": "3"
                    },
                    "transactionId": {
                      "description": "The id of the transaction that is related to this accounting event. Only sent for events of type **accounting** where the balance changes.",
                      "type": "string",
                      "x-addedInVersion": "3"
                    },
                    "type": {
                      "description": "The type of the transfer event. Possible values: **accounting**, **tracking**.",
                      "enum": [
                        "accounting",
                        "tracking"
                      ],
                      "type": "string",
                      "x-addedInVersion": "3"
                    },
                    "updateDate": {
                      "description": "The date when the tracking status was updated.",
                      "format": "date-time",
                      "type": "string",
                      "x-addedInVersion": "3"
                    },
                    "valueDate": {
                      "description": "A future date, when the funds are expected to be deducted from or credited to the balance account.",
                      "format": "date-time",
                      "type": "string",
                      "x-addedInVersion": "3"
                    }
                  },
                  "type": "object"
                },
                "TransferNotificationData": {
                  "properties": {
                    "accountHolder": {
                      "$ref": "#/components/schemas/ResourceReference",
                      "description": "The account holder associated with the balance account used in the transfer.",
                      "x-addedInVersion": "3"
                    },
                    "amount": {
                      "$ref": "#/components/schemas/Amount",
                      "description": "The amount of the transfer.",
                      "x-addedInVersion": "1"
                    },
                    "balanceAccount": {
                      "$ref": "#/components/schemas/ResourceReference",
                      "description": "Contains information about the balance account involved in the transfer.",
                      "x-addedInVersion": "3"
                    },
                    "balanceAccountId": {
                      "deprecated": true,
                      "description": "The unique identifier of the source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).",
                      "type": "string",
                      "x-addedInVersion": "3",
                      "x-deprecatedInVersion": "3",
                      "x-deprecatedMessage": "Use the ID in the [`balanceAccount`](https://docs.adyen.com/api-explorer/transfer-webhooks/latest/post/balancePlatform.transfer.created#request-data-balanceAccount-id) object instead."
                    },
                    "balancePlatform": {
                      "description": "The unique identifier of the balance platform.",
                      "type": "string"
                    },
                    "balances": {
                      "description": "The list of the latest balance statuses in the transfer.",
                      "items": {
                        "$ref": "#/components/schemas/BalanceMutation"
                      },
                      "type": "array",
                      "x-addedInVersion": "3"
                    },
                    "category": {
                      "description": "The type of transfer.\n\nPossible values:\n\n - **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.\n\n- **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.\n\n- **issuedCard**: Transfer initiated by a Adyen-issued card.\n\n- **platformPayment**: Fund movements related to payments that are acquired for your users.",
                      "enum": [
                        "bank",
                        "internal",
                        "issuedCard",
                        "platformPayment"
                      ],
                      "type": "string",
                      "x-addedInVersion": "3"
                    },
                    "counterparty": {
                      "$ref": "#/components/schemas/CounterpartyV3",
                      "description": "The other party in the transfer.",
                      "x-addedInVersion": "3"
                    },
                    "creationDate": {
                      "description": "The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**.",
                      "format": "date-time",
                      "type": "string"
                    },
                    "description": {
                      "description": "Your description for the transfer. It is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.\n\nSupported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , ' + Space**\n\nSupported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z] [0-9] & $ % # @** **~ = + - _ ' \" ! ?**",
                      "type": "string",
                      "x-addedInVersion": "1"
                    },
                    "direction": {
                      "description": "The direction of the transfer.\n\nPossible values: **incoming**, **outgoing**.",
                      "enum": [
                        "incoming",
                        "outgoing"
                      ],
                      "type": "string",
                      "x-addedInVersion": "2"
                    },
                    "events": {
                      "description": "The list of events leading up to the current status of the transfer.",
                      "items": {
                        "$ref": "#/components/schemas/TransferEvent"
                      },
                      "type": "array",
                      "x-addedInVersion": "3"
                    },
                    "id": {
                      "description": "The ID of the resource.",
                      "type": "string"
                    },
                    "modificationMerchantReference": {
                      "description": "The capture's merchant reference included in the transfer.",
                      "type": "string",
                      "x-addedInVersion": "3"
                    },
                    "modificationPspReference": {
                      "description": "The capture reference included in the transfer.",
                      "type": "string",
                      "x-addedInVersion": "3"
                    },
                    "panEntryMode": {
                      "description": "Indicates the method used for entering the PAN to initiate a transaction.\n\nPossible values: **manual**, **chip**, **magstripe**, **contactless**, **cof**, **ecommerce**, **token**.",
                      "enum": [
                        "chip",
                        "cof",
                        "contactless",
                        "ecommerce",
                        "magstripe",
                        "manual",
                        "token"
                      ],
                      "type": "string",
                      "x-addedInVersion": "3"
                    },
                    "paymentInstrument": {
                      "$ref": "#/components/schemas/PaymentInstrument",
                      "description": "Contains information about the payment instrument used in the transfer.",
                      "x-addedInVersion": "3"
                    },
                    "paymentInstrumentId": {
                      "deprecated": true,
                      "description": "The unique identifier of the [payment instrument](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) used in the transfer.",
                      "type": "string",
                      "x-addedInVersion": "3",
                      "x-deprecatedInVersion": "3",
                      "x-deprecatedMessage": "Use the ID in the [`paymentInstrument`](https://docs.adyen.com/api-explorer/transfer-webhooks/latest/post/balancePlatform.transfer.created#request-data-paymentInstrument-id) object instead."
                    },
                    "paymentMerchantReference": {
                      "description": "The payment's merchant reference included in the transfer.",
                      "type": "string",
                      "x-addedInVersion": "3"
                    },
                    "priority": {
                      "description": "The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Required for transfers with `category` **bank**.\n\nPossible values:\n\n* **regular**: For normal, low-value transactions.\n\n* **fast**: Faster way to transfer funds but has higher fees. Recommended for high-priority, low-value transactions.\n\n* **wire**: Fastest way to transfer funds but has the highest fees. Recommended for high-priority, high-value transactions.\n\n* **instant**: Instant way to transfer funds in [SEPA countries](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).\n\n* **crossBorder**: High-value transfer to a recipient in a different country.\n\n* **internal**: Transfer to an Adyen-issued business bank account (by bank account number/IBAN).",
                      "enum": [
                        "crossBorder",
                        "directDebit",
                        "fast",
                        "instant",
                        "internal",
                        "regular",
                        "wire"
                      ],
                      "type": "string",
                      "x-addedInVersion": "3"
                    },
                    "processingType": {
                      "description": "Contains information about how the payment was processed. For example, **ecommerce** for online or **pos** for in-person payments.",
                      "enum": [
                        "atmWithdraw",
                        "balanceInquiry",
                        "ecommerce",
                        "moto",
                        "pos",
                        "purchaseWithCashback",
                        "recurring",
                        "token"
                      ],
                      "type": "string",
                      "x-addedInVersion": "3"
                    },
                    "pspPaymentReference": {
                      "description": "The payment reference included in the transfer.",
                      "type": "string",
                      "x-addedInVersion": "3"
                    },
                    "reason": {
                      "description": "Additional information about the status of the transfer.",
                      "enum": [
                        "amountLimitExceeded",
                        "approved",
                        "counterpartyAccountBlocked",
                        "counterpartyAccountClosed",
                        "counterpartyAccountNotFound",
                        "counterpartyAddressRequired",
                        "counterpartyBankTimedOut",
                        "counterpartyBankUnavailable",
                        "error",
                        "notEnoughBalance",
                        "refusedByCounterpartyBank",
                        "routeNotFound",
                        "unknown"
                      ],
                      "type": "string",
                      "x-addedInVersion": "2"
                    },
                    "reference": {
                      "description": "Your reference for the transfer, used internally within your platform. If you don't provide this in the request, Adyen generates a unique reference.",
                      "maxLength": 80,
                      "type": "string",
                      "x-addedInVersion": "2"
                    },
                    "referenceForBeneficiary": {
                      "description": " A reference that is sent to the recipient. This reference is also sent in all notification webhooks related to the transfer, so you can use it to track statuses for both the source and recipient of funds.\n\n Supported characters: **a-z**, **A-Z**, **0-9**. The maximum length depends on the `category`.\n\n- **internal**: 80 characters\n\n- **bank**: 35 characters when transferring to an IBAN, 15 characters for others.",
                      "maxLength": 80,
                      "type": "string",
                      "x-addedInVersion": "2"
                    },
                    "relayedAuthorisationData": {
                      "$ref": "#/components/schemas/RelayedAuthorisationData",
                      "description": "If you are using relayed authorisation, this object contains information from the relayed authorisation response from your server.",
                      "x-addedInVersion": "3"
                    },
                    "sequenceNumber": {
                      "description": "The sequence number of the transfer notification. The numbers start from 1 and increase with each new notification for a specific transfer.\n\nIt can help you restore the correct sequence of events even if they arrive out of order.",
                      "format": "int32",
                      "type": "integer",
                      "x-addedInVersion": "3"
                    },
                    "status": {
                      "description": "The result of the transfer.\n\n For example, **authorised**, **refused**, or **error**.",
                      "enum": [
                        "approvalPending",
                        "atmWithdrawal",
                        "atmWithdrawalReversalPending",
                        "atmWithdrawalReversed",
                        "authAdjustmentAuthorised",
                        "authAdjustmentError",
                        "authAdjustmentRefused",
                        "authorised",
                        "bankTransfer",
                        "bankTransferPending",
                        "booked",
                        "bookingPending",
                        "cancelled",
                        "capturePending",
                        "captureReversalPending",
                        "captureReversed",
                        "captured",
                        "chargeback",
                        "chargebackPending",
                        "chargebackReversalPending",
                        "chargebackReversed",
                        "credited",
                        "depositCorrection",
                        "depositCorrectionPending",
                        "dispute",
                        "disputeClosed",
                        "disputeExpired",
                        "disputeNeedsReview",
                        "error",
                        "expired",
                        "failed",
                        "fee",
                        "feePending",
                        "internalTransfer",
                        "internalTransferPending",
                        "invoiceDeduction",
                        "invoiceDeductionPending",
                        "manualCorrectionPending",
                        "manuallyCorrected",
                        "matchedStatement",
                        "matchedStatementPending",
                        "merchantPayin",
                        "merchantPayinPending",
                        "merchantPayinReversed",
                        "merchantPayinReversedPending",
                        "miscCost",
                        "miscCostPending",
                        "paymentCost",
                        "paymentCostPending",
                        "received",
                        "refundPending",
                        "refundReversalPending",
                        "refundReversed",
                        "refunded",
                        "refused",
                        "reserveAdjustment",
                        "reserveAdjustmentPending",
                        "returned",
                        "secondChargeback",
                        "secondChargebackPending",
                        "undefined"
                      ],
                      "type": "string",
                      "x-addedInVersion": "2"
                    },
                    "tracking": {
                      "$ref": "#/components/schemas/TransferNotificationTransferTracking",
                      "description": "The tracking information for the transfer.",
                      "x-addedInVersion": "3"
                    },
                    "transactionId": {
                      "deprecated": true,
                      "description": "The ID of the transaction that is created based on the transfer.",
                      "type": "string",
                      "x-addedInVersion": "3",
                      "x-deprecatedInVersion": "3",
                      "x-deprecatedMessage": "Use the [transactionId](https://docs.adyen.com/api-explorer/transfer-webhooks/latest/post/balancePlatform.transfer.created#request-data-events-transactionId) in the `events` array instead."
                    },
                    "transactionRulesResult": {
                      "$ref": "#/components/schemas/TransactionRulesResult",
                      "description": "Contains the results of the evaluation of the transaction rules.",
                      "x-addedInVersion": "3"
                    },
                    "type": {
                      "description": "The type of transfer or transaction. For example, **refund**, **payment**, **internalTransfer**, **bankTransfer**.",
                      "enum": [
                        "atmWithdrawal",
                        "atmWithdrawalReversal",
                        "balanceAdjustment",
                        "balanceRollover",
                        "bankTransfer",
                        "capture",
                        "captureReversal",
                        "chargeback",
                        "chargebackReversal",
                        "depositCorrection",
                        "fee",
                        "grant",
                        "installment",
                        "installmentReversal",
                        "internalTransfer",
                        "invoiceDeduction",
                        "leftover",
                        "manualCorrection",
                        "miscCost",
                        "payment",
                        "paymentCost",
                        "refund",
                        "refundReversal",
                        "repayment",
                        "reserveAdjustment",
                        "secondChargeback"
                      ],
                      "type": "string",
                      "x-addedInVersion": "3"
                    },
                    "validationFacts": {
                      "description": "The evaluation of the validation facts. See [validation checks](https://docs.adyen.com/issuing/validation-checks) for more information.",
                      "items": {
                        "$ref": "#/components/schemas/TransferNotificationValidationFact"
                      },
                      "type": "array",
                      "x-addedInVersion": "3"
                    }
                  },
                  "required": [
                    "category",
                    "amount",
                    "status"
                  ],
                  "type": "object"
                },
                "TransferNotificationRequest": {
                  "properties": {
                    "data": {
                      "$ref": "#/components/schemas/TransferNotificationData",
                      "description": "Contains details about the event."
                    },
                    "environment": {
                      "description": "The environment from which the webhook originated.\n\nPossible values: **test**, **live**.",
                      "type": "string"
                    },
                    "type": {
                      "description": "The type of the notification.",
                      "enum": [
                        "balancePlatform.transfer.created",
                        "balancePlatform.transfer.updated"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "environment",
                    "data"
                  ],
                  "type": "object"
                },
                "TransferNotificationTransferTracking": {
                  "properties": {
                    "estimatedArrivalTime": {
                      "description": "The estimated time the beneficiary should have access to the funds.",
                      "format": "date-time",
                      "type": "string",
                      "x-addedInVersion": "3"
                    },
                    "status": {
                      "description": "The tracking status of the transfer.",
                      "enum": [
                        "credited"
                      ],
                      "type": "string",
                      "x-addedInVersion": "3"
                    }
                  },
                  "type": "object"
                },
                "TransferNotificationValidationFact": {
                  "properties": {
                    "result": {
                      "description": "The evaluation result of the validation fact.",
                      "type": "string"
                    },
                    "type": {
                      "description": "The type of the validation fact.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "UKLocalAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "accountNumber": {
                      "description": "The 8-digit bank account number, without separators or whitespace.",
                      "maxLength": 8,
                      "minLength": 8,
                      "type": "string"
                    },
                    "sortCode": {
                      "description": "The 6-digit [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace.",
                      "maxLength": 6,
                      "minLength": 6,
                      "type": "string"
                    },
                    "type": {
                      "default": "ukLocal",
                      "description": "**ukLocal**",
                      "enum": [
                        "ukLocal"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "accountNumber",
                    "sortCode"
                  ],
                  "type": "object"
                },
                "USLocalAccountIdentification": {
                  "additionalProperties": false,
                  "properties": {
                    "accountNumber": {
                      "description": "The bank account number, without separators or whitespace.",
                      "maxLength": 18,
                      "minLength": 2,
                      "type": "string"
                    },
                    "accountType": {
                      "default": "checking",
                      "description": "The bank account type.\n\nPossible values: **checking** or **savings**. Defaults to **checking**.",
                      "enum": [
                        "checking",
                        "savings"
                      ],
                      "type": "string"
                    },
                    "routingNumber": {
                      "description": "The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.",
                      "maxLength": 9,
                      "minLength": 9,
                      "type": "string"
                    },
                    "type": {
                      "default": "usLocal",
                      "description": "**usLocal**",
                      "enum": [
                        "usLocal"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "accountNumber",
                    "routingNumber"
                  ],
                  "type": "object"
                }
              },
              "securitySchemes": {
                "ApiKeyAuth": {
                  "in": "header",
                  "name": "X-API-Key",
                  "type": "apiKey"
                },
                "BasicAuth": {
                  "scheme": "basic",
                  "type": "http"
                }
              }
            },
            "webhooks": {
              "balancePlatform.transfer.created": {
                "post": {
                  "description": "Adyen sends this webhook when there are fund movements on your platform.",
                  "operationId": "post-balancePlatform.transfer.created",
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "schema": {
                          "$ref": "#/components/schemas/TransferNotificationRequest"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/BalancePlatformNotificationResponse"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    }
                  },
                  "security": [
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Transfer created",
                  "tags": [
                    "General"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "General",
                  "x-methodName": "transferCreated",
                  "x-sortIndex": 0
                }
              },
              "balancePlatform.transfer.updated": {
                "post": {
                  "description": "Adyen sends this webhook when the status of a transfer changes. Use the `data.id` to track the original transfer resource in the [balancePlatform.transfer.created](https://docs.adyen.com/api-explorer/transfer-webhooks/1/post/balancePlatform.transfer.created) webhook.\n\nThe `status` field indicates the event that triggered the webhook. \n\n",
                  "operationId": "post-balancePlatform.transfer.updated",
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "schema": {
                          "$ref": "#/components/schemas/TransferNotificationRequest"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/BalancePlatformNotificationResponse"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    }
                  },
                  "security": [
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Transfer updated",
                  "tags": [
                    "General"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "General",
                  "x-methodName": "transferUpdated",
                  "x-sortIndex": 0
                }
              }
            },
            "x-groups": [
              "General"
            ],
            "x-staticResponse": "response.json"
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema5', () => {
        // Setup
        const schema: OpenAPI = {
            "openapi": "3.1.0",
            "servers": [
              {
                "url": "https://ca-test.adyen.com/ca/services/DataProtectionService/v1"
              }
            ],
            "info": {
              "contact": {
                "email": "developer-experience@adyen.com",
                "name": "Adyen Developer Experience team",
                "url": "https://www.adyen.help/hc/en-us/community/topics",
                "x-twitter": "Adyen"
              },
              "description": "Adyen Data Protection API provides a way for you to process [Subject Erasure Requests](https://gdpr-info.eu/art-17-gdpr/) as mandated in GDPR.\n\nUse our API to submit a request to delete shopper's data, including payment details and other related information (for example, delivery address or shopper email).## Authentication\nEach request to the Data Protection API must be signed with an API key. Get your API Key from your Customer Area, as described in [How to get the API key](https://docs.adyen.com/development-resources/api-credentials#generate-api-key). Then set this key to the `X-API-Key` header value, for example:\n\n```\ncurl\n-H \"Content-Type: application/json\" \\\n-H \"X-API-Key: Your_API_key\" \\\n...\n```\nNote that when going live, you need to generate a new API Key to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).\n\n## Versioning\nData Protection Service API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.\n\nFor example:\n```\nhttps://ca-test.adyen.com/ca/services/DataProtectionService/v1/requestSubjectErasure\n```",
              "termsOfService": "https://www.adyen.com/legal/terms-and-conditions",
              "title": "Adyen Data Protection API",
              "version": "1",
              "x-apisguru-categories": [
                "payment"
              ],
              "x-logo": {
                "url": "https://api.apis.guru/v2/cache/logo/https_twitter.com_Adyen_profile_image"
              },
              "x-origin": [
                {
                  "format": "openapi",
                  "url": "https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/DataProtectionService-v1.json",
                  "version": "3.1"
                }
              ],
              "x-providerName": "adyen.com",
              "x-publicVersion": true,
              "x-serviceName": "DataProtectionService",
              "x-timestamp": "2023-02-20T18:24:23Z"
            },
            "tags": [
              {
                "name": "General"
              }
            ],
            "paths": {
              "/requestSubjectErasure": {
                "post": {
                  "description": "Sends the PSP reference containing the shopper data that should be deleted.",
                  "operationId": "post-requestSubjectErasure",
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "schema": {
                          "$ref": "#/components/schemas/SubjectErasureByPspReferenceRequest"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/SubjectErasureResponse"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Submit a Subject Erasure Request.",
                  "tags": [
                    "General"
                  ],
                  "x-groupName": "General",
                  "x-methodName": "requestSubjectErasure",
                  "x-sortIndex": 0
                }
              }
            },
            "components": {
              "examples": {},
              "schemas": {
                "ServiceError": {
                  "properties": {
                    "errorCode": {
                      "description": "The error code mapped to the error message.",
                      "type": "string"
                    },
                    "errorType": {
                      "description": "The category of the error.",
                      "type": "string"
                    },
                    "message": {
                      "description": "A short explanation of the issue.",
                      "type": "string"
                    },
                    "pspReference": {
                      "description": "The PSP reference of the payment.",
                      "type": "string"
                    },
                    "status": {
                      "description": "The HTTP response status.",
                      "format": "int32",
                      "type": "integer"
                    }
                  },
                  "type": "object"
                },
                "SubjectErasureByPspReferenceRequest": {
                  "properties": {
                    "forceErasure": {
                      "description": "Set this to **true** if you want to delete shopper-related data, even if the shopper has an existing recurring transaction. This only deletes the shopper-related data for the specific payment, but does not cancel the existing recurring transaction.",
                      "type": "boolean"
                    },
                    "merchantAccount": {
                      "description": "Your merchant account",
                      "type": "string"
                    },
                    "pspReference": {
                      "description": "The PSP reference of the payment. We will delete all shopper-related data for this payment.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "SubjectErasureResponse": {
                  "properties": {
                    "result": {
                      "description": "The result of this operation.",
                      "enum": [
                        "ACTIVE_RECURRING_TOKEN_EXISTS",
                        "ALREADY_PROCESSED",
                        "PAYMENT_NOT_FOUND",
                        "SUCCESS"
                      ],
                      "type": "string"
                    }
                  },
                  "type": "object"
                }
              },
              "securitySchemes": {
                "ApiKeyAuth": {
                  "in": "header",
                  "name": "X-API-Key",
                  "type": "apiKey"
                },
                "BasicAuth": {
                  "scheme": "basic",
                  "type": "http"
                }
              }
            },
            "x-groups": [
              "General"
            ]
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema6', () => {
        // Setup
        const schema: OpenAPI = {
            "openapi": "3.1.0",
            "servers": [
              {
                "url": "https://cal-test.adyen.com/cal/services/Fund/v6"
              }
            ],
            "info": {
              "contact": {
                "email": "developer-experience@adyen.com",
                "name": "Adyen Developer Experience team",
                "url": "https://www.adyen.help/hc/en-us/community/topics",
                "x-twitter": "Adyen"
              },
              "description": "This API is used for the classic integration. If you are just starting your implementation, refer to our [new integration guide](https://docs.adyen.com/marketplaces-and-platforms) instead.\n\nThe Fund API provides endpoints for managing the funds in the accounts on your platform. These management operations include, for example, the transfer of funds from one account to another, the payout of funds to an account holder, and the retrieval of balances in an account.\n\nFor more information, refer to our [documentation](https://docs.adyen.com/marketplaces-and-platforms/classic/).\n## Authentication\nYour Adyen contact will provide your API credential and an API key. To connect to the API, add an `X-API-Key` header with the API key as the value, for example:\n\n ```\ncurl\n-H \"Content-Type: application/json\" \\\n-H \"X-API-Key: YOUR_API_KEY\" \\\n...\n```\n\nAlternatively, you can use the username and password to connect to the API using basic authentication. For example:\n\n```\ncurl\n-U \"ws@MarketPlace.YOUR_PLATFORM_ACCOUNT\":\"YOUR_WS_PASSWORD\" \\\n-H \"Content-Type: application/json\" \\\n...\n```\nWhen going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).\n\n## Versioning\nThe Fund API supports [versioning](https://docs.adyen.com/development-resources/versioning) using a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.\n\nFor example:\n```\nhttps://cal-test.adyen.com/cal/services/Fund/v6/accountHolderBalance\n```",
              "termsOfService": "https://www.adyen.com/legal/terms-and-conditions",
              "title": "Fund API",
              "version": "6",
              "x-apisguru-categories": [
                "payment"
              ],
              "x-logo": {
                "url": "https://api.apis.guru/v2/cache/logo/https_twitter.com_Adyen_profile_image"
              },
              "x-origin": [
                {
                  "format": "openapi",
                  "url": "https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/FundService-v6.json",
                  "version": "3.1"
                }
              ],
              "x-preferred": true,
              "x-providerName": "adyen.com",
              "x-publicVersion": true,
              "x-serviceName": "FundService",
              "x-timestamp": "2023-02-20T18:23:38Z"
            },
            "tags": [
              {
                "name": "General"
              }
            ],
            "paths": {
              "/accountHolderBalance": {
                "post": {
                  "description": "Returns the account balances of an account holder. An account's balances are organized according by currencies. This mean that an account may have multiple balances: one for each currency.",
                  "operationId": "post-accountHolderBalance",
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "examples": {
                          "basic": {
                            "$ref": "#/components/examples/post-accountHolderBalance-basic"
                          }
                        },
                        "schema": {
                          "$ref": "#/components/schemas/AccountHolderBalanceRequest"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/AccountHolderBalanceResponse"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "202": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/AccountHolderBalanceResponse"
                          }
                        }
                      },
                      "description": "Accepted - the request has been accepted for processing, but the processing has not been completed."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Get the balances of an account holder",
                  "tags": [
                    "General"
                  ],
                  "x-groupName": "General",
                  "x-methodName": "accountHolderBalance",
                  "x-sortIndex": 1
                }
              },
              "/accountHolderTransactionList": {
                "post": {
                  "description": "Returns a list of transactions for an account holder's accounts. You can specify the accounts and transaction statuses to be included on the list. The call returns a maximum of 50 transactions for each account. To retrieve all transactions, you must make another call with the 'page' value incremented. Transactions are listed in chronological order, with the most recent transaction first.",
                  "operationId": "post-accountHolderTransactionList",
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "examples": {
                          "basic": {
                            "$ref": "#/components/examples/post-accountHolderTransactionList-basic"
                          },
                          "specific": {
                            "$ref": "#/components/examples/post-accountHolderTransactionList-specific"
                          }
                        },
                        "schema": {
                          "$ref": "#/components/schemas/AccountHolderTransactionListRequest"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/AccountHolderTransactionListResponse"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "202": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/AccountHolderTransactionListResponse"
                          }
                        }
                      },
                      "description": "Accepted - the request has been accepted for processing, but the processing has not been completed."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Get a list of transactions",
                  "tags": [
                    "General"
                  ],
                  "x-groupName": "General",
                  "x-methodName": "accountHolderTransactionList",
                  "x-sortIndex": 2
                }
              },
              "/debitAccountHolder": {
                "post": {
                  "description": "Sends a direct debit request to an account holder's bank account. If the direct debit is successful, the funds are settled in the accounts specified in the split instructions. Adyen sends the result of the direct debit in a [`DIRECT_DEBIT_INITIATED`](https://docs.adyen.com/api-explorer/#/NotificationService/latest/post/DIRECT_DEBIT_INITIATED) notification webhook.\n\n To learn more about direct debits, see [Top up accounts](https://docs.adyen.com/marketplaces-and-platforms/classic/top-up-accounts).",
                  "operationId": "post-debitAccountHolder",
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "examples": {
                          "debit-account-holder": {
                            "$ref": "#/components/examples/post-debitAccountHolder-debit-account-holder"
                          }
                        },
                        "schema": {
                          "$ref": "#/components/schemas/DebitAccountHolderRequest"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "debit-account-holder": {
                              "$ref": "#/components/examples/post-debitAccountHolder-debit-account-holder-200"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/DebitAccountHolderResponse"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "202": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/DebitAccountHolderResponse"
                          }
                        }
                      },
                      "description": "Accepted - the request has been accepted for processing, but the processing has not been completed."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Send a direct debit request",
                  "tags": [
                    "General"
                  ],
                  "x-groupName": "General",
                  "x-methodName": "debitAccountHolder",
                  "x-sortIndex": 8
                }
              },
              "/payoutAccountHolder": {
                "post": {
                  "description": "Pays out a specified amount from an account to the bank account of account holder.",
                  "operationId": "post-payoutAccountHolder",
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "examples": {
                          "oneOff": {
                            "$ref": "#/components/examples/post-payoutAccountHolder-oneOff"
                          }
                        },
                        "schema": {
                          "$ref": "#/components/schemas/PayoutAccountHolderRequest"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/PayoutAccountHolderResponse"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "202": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/PayoutAccountHolderResponse"
                          }
                        }
                      },
                      "description": "Accepted - the request has been accepted for processing, but the processing has not been completed."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Pay out from an account to the account holder",
                  "tags": [
                    "General"
                  ],
                  "x-groupName": "General",
                  "x-methodName": "payoutAccountHolder",
                  "x-sortIndex": 3
                }
              },
              "/refundFundsTransfer": {
                "post": {
                  "description": "Refunds funds transferred from one account to another. Both accounts must be in the same platform, but can have different account holders. ",
                  "operationId": "post-refundFundsTransfer",
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "examples": {
                          "basic": {
                            "$ref": "#/components/examples/post-refundFundsTransfer-basic"
                          }
                        },
                        "schema": {
                          "$ref": "#/components/schemas/RefundFundsTransferRequest"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/RefundFundsTransferResponse"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "202": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/RefundFundsTransferResponse"
                          }
                        }
                      },
                      "description": "Accepted - the request has been accepted for processing, but the processing has not been completed."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Refund a funds transfer",
                  "tags": [
                    "General"
                  ],
                  "x-groupName": "General",
                  "x-methodName": "refundFundsTransfer",
                  "x-sortIndex": 5
                }
              },
              "/refundNotPaidOutTransfers": {
                "post": {
                  "description": "Refunds all the transactions of an account that have taken place since the most recent payout. This request is on a account basis (as opposed to a payment basis), so only the portion of the payment that was made to the specified account is refunded. The commissions, fees, and payments to other accounts remain in the accounts to which they were sent as designated by the original payment's split details.",
                  "operationId": "post-refundNotPaidOutTransfers",
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "examples": {
                          "basic": {
                            "$ref": "#/components/examples/post-refundNotPaidOutTransfers-basic"
                          }
                        },
                        "schema": {
                          "$ref": "#/components/schemas/RefundNotPaidOutTransfersRequest"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/RefundNotPaidOutTransfersResponse"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "202": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/RefundNotPaidOutTransfersResponse"
                          }
                        }
                      },
                      "description": "Accepted - the request has been accepted for processing, but the processing has not been completed."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Refund all transactions of an account since the most recent payout",
                  "tags": [
                    "General"
                  ],
                  "x-groupName": "General",
                  "x-methodName": "refundNotPaidOutTransfers",
                  "x-sortIndex": 7
                }
              },
              "/setupBeneficiary": {
                "post": {
                  "description": "Defines a benefactor and a beneficiary relationship between two accounts. At the time of benefactor/beneficiary setup, the funds in the benefactor account are transferred to the beneficiary account, and any further payments to the benefactor account are automatically sent to the beneficiary account. A series of benefactor/beneficiaries may not exceed four beneficiaries and may not have a cycle in it.",
                  "operationId": "post-setupBeneficiary",
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "examples": {
                          "basic": {
                            "$ref": "#/components/examples/post-setupBeneficiary-basic"
                          }
                        },
                        "schema": {
                          "$ref": "#/components/schemas/SetupBeneficiaryRequest"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/SetupBeneficiaryResponse"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "202": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/SetupBeneficiaryResponse"
                          }
                        }
                      },
                      "description": "Accepted - the request has been accepted for processing, but the processing has not been completed."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Designate a beneficiary account and transfer the benefactor's current balance",
                  "tags": [
                    "General"
                  ],
                  "x-groupName": "General",
                  "x-methodName": "setupBeneficiary",
                  "x-sortIndex": 6
                }
              },
              "/transferFunds": {
                "post": {
                  "description": "Transfers funds from one account to another account. Both accounts must be in the same platform, but can have different account holders. The transfer must include a transfer code, which should be determined by the platform, in compliance with local regulations.",
                  "operationId": "post-transferFunds",
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "examples": {
                          "basic": {
                            "$ref": "#/components/examples/post-transferFunds-basic"
                          }
                        },
                        "schema": {
                          "$ref": "#/components/schemas/TransferFundsRequest"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/TransferFundsResponse"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    },
                    "202": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/TransferFundsResponse"
                          }
                        }
                      },
                      "description": "Accepted - the request has been accepted for processing, but the processing has not been completed."
                    },
                    "400": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Bad Request - a problem reading or understanding the request."
                    },
                    "401": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Unauthorized - authentication required."
                    },
                    "403": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Forbidden - insufficient permissions to process the request."
                    },
                    "422": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Unprocessable Entity - a request validation error."
                    },
                    "500": {
                      "content": {
                        "application/json": {
                          "schema": {
                            "$ref": "#/components/schemas/ServiceError"
                          }
                        }
                      },
                      "description": "Internal Server Error - the server could not process the request."
                    }
                  },
                  "security": [
                    {
                      "BasicAuth": []
                    },
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Transfer funds between platform accounts",
                  "tags": [
                    "General"
                  ],
                  "x-groupName": "General",
                  "x-methodName": "transferFunds",
                  "x-sortIndex": 4
                }
              }
            },
            "components": {
              "examples": {
                "post-accountHolderBalance-basic": {
                  "summary": "Review the account holder balance",
                  "value": {
                    "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER"
                  }
                },
                "post-accountHolderTransactionList-basic": {
                  "summary": "Retrieve transactions page by page",
                  "value": {
                    "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
                    "transactionListsPerAccount": [
                      {
                        "accountCode": "195752115",
                        "page": 1
                      }
                    ]
                  }
                },
                "post-accountHolderTransactionList-specific": {
                  "summary": "Retrieve transactions with specific statuses.",
                  "value": {
                    "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
                    "transactionListsPerAccount": [
                      {
                        "accountCode": "2e64b396-1200-4474-b848-0cb06b52b3c7",
                        "page": 2
                      }
                    ],
                    "transactionStatuses": [
                      "PendingCredit",
                      "Credited",
                      "Debited"
                    ]
                  }
                },
                "post-debitAccountHolder-debit-account-holder": {
                  "description": "Example request to send a direct debit from a bank account",
                  "summary": "Send a bank account direct debit",
                  "value": {
                    "accountHolderCode": "ACCOUNT_HOLDER_CODE",
                    "amount": {
                      "currency": "USD",
                      "value": 6200
                    },
                    "bankAccountUUID": "000b81aa-ae7e-4492-aa7e-72b2129dce0c",
                    "description": "YOUR_DESCRIPTION",
                    "merchantAccount": "YOUR_MERCHANT_ACCOUNT",
                    "splits": [
                      {
                        "account": "8535516988037431",
                        "amount": {
                          "value": 6000
                        },
                        "reference": "YOUR_SPLIT_REFERENCE_1",
                        "type": "MarketPlace"
                      },
                      {
                        "amount": {
                          "value": 200
                        },
                        "reference": "YOUR_SPLIT_REFERENCE_2",
                        "type": "Commission"
                      }
                    ]
                  }
                },
                "post-debitAccountHolder-debit-account-holder-200": {
                  "description": "Example response for requesting a direct debit from a bank account",
                  "summary": "Direct debit request sent",
                  "value": {
                    "pspReference": "8816480354727275",
                    "submittedAsync": "false"
                  }
                },
                "post-payoutAccountHolder-oneOff": {
                  "summary": "One-off payout",
                  "value": {
                    "accountCode": "118731451",
                    "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER",
                    "amount": {
                      "currency": "EUR",
                      "value": 99792
                    },
                    "bankAccountUUID": "000b81aa-ae7e-4492-aa7e-72b2129dce0c",
                    "description": "12345 – Test"
                  }
                },
                "post-refundFundsTransfer-basic": {
                  "summary": "Refund the fund transfer",
                  "value": {
                    "amount": {
                      "currency": "EUR",
                      "value": 1000
                    },
                    "merchantReference": "YOUR_REFERENCE_ID",
                    "originalReference": "PSP_REFERENCE_OF_TRANSFER_TO_REFUND"
                  }
                },
                "post-refundNotPaidOutTransfers-basic": {
                  "summary": "Refund last transactions",
                  "value": {
                    "accountCode": "189184578",
                    "accountHolderCode": "CODE_OF_ACCOUNT_HOLDER"
                  }
                },
                "post-setupBeneficiary-basic": {
                  "summary": "Set up a beneficiary",
                  "value": {
                    "destinationAccountCode": "128952522",
                    "merchantReference": "YOUR_REFERENCE_ID",
                    "sourceAccountCode": "134498192"
                  }
                },
                "post-transferFunds-basic": {
                  "summary": "Transfer funds from one account to another",
                  "value": {
                    "amount": {
                      "currency": "EUR",
                      "value": 2000
                    },
                    "destinationAccountCode": "190324759",
                    "sourceAccountCode": "100000000",
                    "transferCode": "TransferCode_1"
                  }
                }
              },
              "schemas": {
                "AccountDetailBalance": {
                  "properties": {
                    "accountCode": {
                      "description": "The code of the account that holds the balance.",
                      "type": "string"
                    },
                    "detailBalance": {
                      "$ref": "#/components/schemas/DetailBalance",
                      "description": "Details of the balance held by the account."
                    }
                  },
                  "type": "object"
                },
                "AccountHolderBalanceRequest": {
                  "properties": {
                    "accountHolderCode": {
                      "description": "The code of the Account Holder of which to retrieve the balance.",
                      "type": "string"
                    }
                  },
                  "required": [
                    "accountHolderCode"
                  ],
                  "type": "object"
                },
                "AccountHolderBalanceResponse": {
                  "properties": {
                    "balancePerAccount": {
                      "description": "A list of each account and their balances.",
                      "items": {
                        "$ref": "#/components/schemas/AccountDetailBalance"
                      },
                      "type": "array"
                    },
                    "invalidFields": {
                      "description": "Contains field validation errors that would prevent requests from being processed.",
                      "items": {
                        "$ref": "#/components/schemas/ErrorFieldType"
                      },
                      "type": "array",
                      "x-addedInVersion": "5"
                    },
                    "pspReference": {
                      "description": "The reference of a request. Can be used to uniquely identify the request.",
                      "type": "string"
                    },
                    "resultCode": {
                      "description": "The result code.",
                      "type": "string"
                    },
                    "totalBalance": {
                      "$ref": "#/components/schemas/DetailBalance",
                      "description": "The total balance of the account holder."
                    }
                  },
                  "type": "object"
                },
                "AccountHolderTransactionListRequest": {
                  "properties": {
                    "accountHolderCode": {
                      "description": "The code of the account holder that owns the account(s) of which retrieve the transaction list.",
                      "type": "string"
                    },
                    "transactionListsPerAccount": {
                      "description": "A list of accounts to include in the transaction list. If left blank, the last fifty (50) transactions for all accounts of the account holder will be included.",
                      "items": {
                        "$ref": "#/components/schemas/TransactionListForAccount"
                      },
                      "type": "array"
                    },
                    "transactionStatuses": {
                      "description": "A list of statuses to include in the transaction list. If left blank, all transactions will be included.\n>Permitted values:\n>* `PendingCredit` - a pending balance credit.\n>* `CreditFailed` - a pending credit failure; the balance will not be credited.\n>* `Credited` - a credited balance.\n>* `PendingDebit` - a pending balance debit (e.g., a refund).\n>* `CreditClosed` - a pending credit closed; the balance will not be credited.\n>* `CreditSuspended` - a pending credit closed; the balance will not be credited.\n>* `DebitFailed` - a pending debit failure; the balance will not be debited.\n>* `Debited` - a debited balance (e.g., a refund).\n>* `DebitReversedReceived` - a pending refund reversal.\n>* `DebitedReversed` - a reversed refund.\n>* `ChargebackReceived` - a received chargeback request.\n>* `Chargeback` - a processed chargeback.\n>* `ChargebackReversedReceived` - a pending chargeback reversal.\n>* `ChargebackReversed` - a reversed chargeback.\n>* `Converted` - converted.\n>* `ManualCorrected` - manual booking/adjustment by Adyen.\n>* `Payout` - a payout.\n>* `PayoutReversed` - a reversed payout.\n>* `PendingFundTransfer` - a pending transfer of funds from one account to another.\n>* `FundTransfer` - a transfer of funds from one account to another.",
                      "items": {
                        "enum": [
                          "BalanceNotPaidOutTransfer",
                          "BalancePlatformSweep",
                          "BalancePlatformSweepReturned",
                          "Chargeback",
                          "ChargebackCorrection",
                          "ChargebackCorrectionReceived",
                          "ChargebackReceived",
                          "ChargebackReversed",
                          "ChargebackReversedCorrection",
                          "ChargebackReversedCorrectionReceived",
                          "ChargebackReversedReceived",
                          "Converted",
                          "CreditClosed",
                          "CreditFailed",
                          "CreditReversed",
                          "CreditReversedReceived",
                          "CreditSuspended",
                          "Credited",
                          "DebitFailed",
                          "DebitReversedReceived",
                          "Debited",
                          "DebitedReversed",
                          "DepositCorrectionCredited",
                          "DepositCorrectionDebited",
                          "Fee",
                          "FundTransfer",
                          "FundTransferReversed",
                          "InvoiceDeductionCredited",
                          "InvoiceDeductionDebited",
                          "ManualCorrected",
                          "ManualCorrectionCredited",
                          "ManualCorrectionDebited",
                          "MerchantPayin",
                          "MerchantPayinReversed",
                          "Payout",
                          "PayoutReversed",
                          "PendingCredit",
                          "PendingDebit",
                          "PendingFundTransfer",
                          "ReCredited",
                          "ReCreditedReceived",
                          "SecondChargeback",
                          "SecondChargebackCorrection",
                          "SecondChargebackCorrectionReceived",
                          "SecondChargebackReceived"
                        ],
                        "type": "string"
                      },
                      "type": "array"
                    }
                  },
                  "required": [
                    "accountHolderCode"
                  ],
                  "type": "object"
                },
                "AccountHolderTransactionListResponse": {
                  "properties": {
                    "accountTransactionLists": {
                      "description": "A list of the transactions.",
                      "items": {
                        "$ref": "#/components/schemas/AccountTransactionList"
                      },
                      "type": "array"
                    },
                    "invalidFields": {
                      "description": "Contains field validation errors that would prevent requests from being processed.",
                      "items": {
                        "$ref": "#/components/schemas/ErrorFieldType"
                      },
                      "type": "array",
                      "x-addedInVersion": "5"
                    },
                    "pspReference": {
                      "description": "The reference of a request. Can be used to uniquely identify the request.",
                      "type": "string"
                    },
                    "resultCode": {
                      "description": "The result code.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "AccountTransactionList": {
                  "properties": {
                    "accountCode": {
                      "description": "The code of the account.",
                      "type": "string"
                    },
                    "hasNextPage": {
                      "description": "Indicates whether there is a next page of transactions available.",
                      "type": "boolean"
                    },
                    "transactions": {
                      "description": "The list of transactions.",
                      "items": {
                        "$ref": "#/components/schemas/Transaction"
                      },
                      "type": "array"
                    }
                  },
                  "type": "object"
                },
                "Amount": {
                  "properties": {
                    "currency": {
                      "description": "The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).",
                      "maxLength": 3,
                      "minLength": 3,
                      "type": "string"
                    },
                    "value": {
                      "description": "The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).",
                      "format": "int64",
                      "type": "integer"
                    }
                  },
                  "required": [
                    "value",
                    "currency"
                  ],
                  "type": "object"
                },
                "BankAccountDetail": {
                  "properties": {
                    "accountNumber": {
                      "description": "The bank account number (without separators).\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
                      "type": "string"
                    },
                    "accountType": {
                      "description": "The type of bank account.\nOnly applicable to bank accounts held in the USA.\nThe permitted values are: `checking`, `savings`.\n\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
                      "type": "string"
                    },
                    "bankAccountName": {
                      "description": "The name of the bank account.",
                      "type": "string"
                    },
                    "bankAccountReference": {
                      "description": "Merchant reference to the bank account.",
                      "type": "string",
                      "x-addedInVersion": "5"
                    },
                    "bankAccountUUID": {
                      "description": "The unique identifier (UUID) of the Bank Account.\n>If, during an account holder create or update request, this field is left blank (but other fields provided), a new Bank Account will be created with a procedurally-generated UUID.\n\n>If, during an account holder create request, a UUID is provided, the creation of the Bank Account will fail while the creation of the account holder will continue.\n\n>If, during an account holder update request, a UUID that is not correlated with an existing Bank Account is provided, the update of the account holder will fail.\n\n>If, during an account holder update request, a UUID that is correlated with an existing Bank Account is provided, the existing Bank Account will be updated.\n",
                      "type": "string"
                    },
                    "bankBicSwift": {
                      "description": "The bank identifier code.\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
                      "type": "string"
                    },
                    "bankCity": {
                      "description": "The city in which the bank branch is located.\n\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
                      "type": "string"
                    },
                    "bankCode": {
                      "description": "The bank code of the banking institution with which the bank account is registered.\n\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
                      "type": "string"
                    },
                    "bankName": {
                      "description": "The name of the banking institution with which the bank account is held.\n\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
                      "type": "string"
                    },
                    "branchCode": {
                      "description": "The branch code of the branch under which the bank account is registered. The value to be specified in this parameter depends on the country of the bank account:\n* United States - Routing number\n* United Kingdom - Sort code\n* Germany - Bankleitzahl\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
                      "type": "string"
                    },
                    "checkCode": {
                      "description": "The check code of the bank account.\n\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
                      "type": "string"
                    },
                    "countryCode": {
                      "description": "The two-letter country code in which the bank account is registered.\n>The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').\n\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
                      "type": "string"
                    },
                    "currencyCode": {
                      "description": "The currency in which the bank account deals.\n>The permitted currency codes are defined in ISO-4217 (e.g. 'EUR').\n",
                      "type": "string"
                    },
                    "iban": {
                      "description": "The international bank account number.\n>The IBAN standard is defined in ISO-13616.\n\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
                      "type": "string"
                    },
                    "ownerCity": {
                      "description": "The city of residence of the bank account owner.\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
                      "type": "string"
                    },
                    "ownerCountryCode": {
                      "description": "The country code of the country of residence of the bank account owner.\n>The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').\n\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
                      "type": "string"
                    },
                    "ownerDateOfBirth": {
                      "deprecated": true,
                      "description": "The date of birth of the bank account owner.\nThe date should be in ISO-8601 format yyyy-mm-dd (e.g. 2000-01-31).",
                      "type": "string"
                    },
                    "ownerHouseNumberOrName": {
                      "description": "The house name or number of the residence of the bank account owner.\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
                      "type": "string"
                    },
                    "ownerName": {
                      "description": "The name of the bank account owner.\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
                      "type": "string"
                    },
                    "ownerNationality": {
                      "description": "The country code of the country of nationality of the bank account owner.\n>The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').\n\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
                      "type": "string"
                    },
                    "ownerPostalCode": {
                      "description": "The postal code of the residence of the bank account owner.\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
                      "type": "string"
                    },
                    "ownerState": {
                      "description": "The state of residence of the bank account owner.\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
                      "type": "string"
                    },
                    "ownerStreet": {
                      "description": "The street name of the residence of the bank account owner.\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
                      "type": "string"
                    },
                    "primaryAccount": {
                      "description": "If set to true, the bank account is a primary account.",
                      "type": "boolean"
                    },
                    "taxId": {
                      "description": "The tax ID number.\n\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
                      "type": "string"
                    },
                    "urlForVerification": {
                      "description": "The URL to be used for bank account verification.\nThis may be generated on bank account creation.\n\n>Refer to [Required information](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-process/required-information) for details on field requirements.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "DebitAccountHolderRequest": {
                  "properties": {
                    "accountHolderCode": {
                      "description": "The code of the account holder.",
                      "type": "string"
                    },
                    "amount": {
                      "$ref": "#/components/schemas/Amount",
                      "description": "The amount to be debited from the account holder's bank account."
                    },
                    "bankAccountUUID": {
                      "description": "The Adyen-generated unique alphanumeric identifier (UUID) of the account holder's bank account.",
                      "type": "string"
                    },
                    "description": {
                      "description": "A description of the direct debit. Maximum length: 35 characters.\n\nAllowed characters: **a-z**, **A-Z**, **0-9**, and special characters **/?:().,'+ \";**.",
                      "maxLength": 35,
                      "type": "string"
                    },
                    "merchantAccount": {
                      "description": "Your merchant account.",
                      "type": "string"
                    },
                    "splits": {
                      "description": "Contains instructions on how to split the funds between the accounts in your platform. The request must have at least one split item.",
                      "items": {
                        "$ref": "#/components/schemas/Split"
                      },
                      "type": "array"
                    }
                  },
                  "required": [
                    "accountHolderCode",
                    "bankAccountUUID",
                    "amount",
                    "splits",
                    "merchantAccount"
                  ],
                  "type": "object"
                },
                "DebitAccountHolderResponse": {
                  "properties": {
                    "accountHolderCode": {
                      "description": "The code of the account holder.",
                      "type": "string"
                    },
                    "bankAccountUUID": {
                      "description": "The Adyen-generated unique alphanumeric identifier (UUID) of the account holder's bank account.",
                      "type": "string"
                    },
                    "invalidFields": {
                      "description": "Contains field validation errors that would prevent requests from being processed.",
                      "items": {
                        "$ref": "#/components/schemas/ErrorFieldType"
                      },
                      "type": "array",
                      "x-addedInVersion": "5"
                    },
                    "merchantReferences": {
                      "description": "List of the `reference` values from the `split` array in the request.",
                      "items": {
                        "type": "string"
                      },
                      "type": "array"
                    },
                    "pspReference": {
                      "description": "The reference of a request. Can be used to uniquely identify the request.",
                      "type": "string"
                    },
                    "resultCode": {
                      "description": "The result code.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "DetailBalance": {
                  "properties": {
                    "balance": {
                      "description": "The list of balances held by the account.",
                      "items": {
                        "$ref": "#/components/schemas/Amount"
                      },
                      "type": "array"
                    },
                    "onHoldBalance": {
                      "description": "The list of on hold balances held by the account.",
                      "items": {
                        "$ref": "#/components/schemas/Amount"
                      },
                      "type": "array",
                      "x-addedInVersion": "5"
                    },
                    "pendingBalance": {
                      "description": "The list of pending balances held by the account.",
                      "items": {
                        "$ref": "#/components/schemas/Amount"
                      },
                      "type": "array"
                    }
                  },
                  "type": "object"
                },
                "ErrorFieldType": {
                  "properties": {
                    "errorCode": {
                      "description": "The validation error code.",
                      "format": "int32",
                      "type": "integer"
                    },
                    "errorDescription": {
                      "description": "A description of the validation error.",
                      "type": "string"
                    },
                    "fieldType": {
                      "$ref": "#/components/schemas/FieldType",
                      "description": "The type of error field."
                    }
                  },
                  "type": "object"
                },
                "FieldType": {
                  "properties": {
                    "field": {
                      "description": "The full name of the property.",
                      "type": "string"
                    },
                    "fieldName": {
                      "description": "The type of the field.",
                      "enum": [
                        "accountCode",
                        "accountHolderCode",
                        "accountHolderDetails",
                        "accountNumber",
                        "accountStateType",
                        "accountStatus",
                        "accountType",
                        "address",
                        "balanceAccount",
                        "balanceAccountActive",
                        "balanceAccountCode",
                        "balanceAccountId",
                        "bankAccount",
                        "bankAccountCode",
                        "bankAccountName",
                        "bankAccountUUID",
                        "bankBicSwift",
                        "bankCity",
                        "bankCode",
                        "bankName",
                        "bankStatement",
                        "branchCode",
                        "businessContact",
                        "cardToken",
                        "checkCode",
                        "city",
                        "companyRegistration",
                        "constitutionalDocument",
                        "controller",
                        "country",
                        "countryCode",
                        "currency",
                        "currencyCode",
                        "dateOfBirth",
                        "description",
                        "destinationAccountCode",
                        "document",
                        "documentContent",
                        "documentExpirationDate",
                        "documentIssuerCountry",
                        "documentIssuerState",
                        "documentName",
                        "documentNumber",
                        "documentType",
                        "doingBusinessAs",
                        "drivingLicence",
                        "drivingLicenceBack",
                        "drivingLicenceFront",
                        "drivingLicense",
                        "email",
                        "firstName",
                        "formType",
                        "fullPhoneNumber",
                        "gender",
                        "hopWebserviceUser",
                        "houseNumberOrName",
                        "iban",
                        "idCard",
                        "idCardBack",
                        "idCardFront",
                        "idNumber",
                        "identityDocument",
                        "individualDetails",
                        "infix",
                        "jobTitle",
                        "lastName",
                        "lastReviewDate",
                        "legalArrangement",
                        "legalArrangementCode",
                        "legalArrangementEntity",
                        "legalArrangementEntityCode",
                        "legalArrangementLegalForm",
                        "legalArrangementMember",
                        "legalArrangementMembers",
                        "legalArrangementName",
                        "legalArrangementReference",
                        "legalArrangementRegistrationNumber",
                        "legalArrangementTaxNumber",
                        "legalArrangementType",
                        "legalBusinessName",
                        "legalEntity",
                        "legalEntityType",
                        "logo",
                        "merchantAccount",
                        "merchantCategoryCode",
                        "merchantHouseNumber",
                        "merchantReference",
                        "microDeposit",
                        "name",
                        "nationality",
                        "originalReference",
                        "ownerCity",
                        "ownerCountryCode",
                        "ownerDateOfBirth",
                        "ownerHouseNumberOrName",
                        "ownerName",
                        "ownerPostalCode",
                        "ownerState",
                        "ownerStreet",
                        "passport",
                        "passportNumber",
                        "payoutMethodCode",
                        "payoutSchedule",
                        "pciSelfAssessment",
                        "personalData",
                        "phoneCountryCode",
                        "phoneNumber",
                        "postalCode",
                        "primaryCurrency",
                        "reason",
                        "registrationNumber",
                        "returnUrl",
                        "schedule",
                        "shareholder",
                        "shareholderCode",
                        "shareholderCodeAndSignatoryCode",
                        "shareholderCodeOrSignatoryCode",
                        "shareholderType",
                        "shareholderTypes",
                        "shopperInteraction",
                        "signatory",
                        "signatoryCode",
                        "socialSecurityNumber",
                        "sourceAccountCode",
                        "splitAccount",
                        "splitConfigurationUUID",
                        "splitCurrency",
                        "splitValue",
                        "splits",
                        "stateOrProvince",
                        "status",
                        "stockExchange",
                        "stockNumber",
                        "stockTicker",
                        "store",
                        "storeDetail",
                        "storeName",
                        "storeReference",
                        "street",
                        "taxId",
                        "tier",
                        "tierNumber",
                        "transferCode",
                        "ultimateParentCompany",
                        "ultimateParentCompanyAddressDetails",
                        "ultimateParentCompanyAddressDetailsCountry",
                        "ultimateParentCompanyBusinessDetails",
                        "ultimateParentCompanyBusinessDetailsLegalBusinessName",
                        "ultimateParentCompanyBusinessDetailsRegistrationNumber",
                        "ultimateParentCompanyCode",
                        "ultimateParentCompanyStockExchange",
                        "ultimateParentCompanyStockNumber",
                        "ultimateParentCompanyStockNumberOrStockTicker",
                        "ultimateParentCompanyStockTicker",
                        "unknown",
                        "value",
                        "verificationType",
                        "virtualAccount",
                        "visaNumber",
                        "webAddress",
                        "year"
                      ],
                      "type": "string"
                    },
                    "shareholderCode": {
                      "description": "The code of the shareholder that the field belongs to. If empty, the field belongs to an account holder.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "PayoutAccountHolderRequest": {
                  "properties": {
                    "accountCode": {
                      "description": "The code of the account from which the payout is to be made.",
                      "type": "string"
                    },
                    "accountHolderCode": {
                      "description": "The code of the Account Holder who owns the account from which the payout is to be made.\nThe Account Holder is the party to which the payout will be made.",
                      "type": "string"
                    },
                    "amount": {
                      "$ref": "#/components/schemas/Amount",
                      "description": "An object containing the currency and value of the payout.\nIf the account has multiple currencies, specify the currency to be used.\nIf the `bankAccountUUID` is provided in the request, the currency supported by the bank is used.\nIf the `payoutMethodCode` is provided in the request, the specified payout method is selected."
                    },
                    "bankAccountUUID": {
                      "description": "The unique ID of the Bank Account held by the Account Holder to which the payout is to be made.\nIf left blank, a bank account is automatically selected.",
                      "type": "string"
                    },
                    "description": {
                      "description": "A description of the payout. Maximum 200 characters.\nAllowed: **abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/?:().,'+ \";**",
                      "maxLength": 200,
                      "type": "string"
                    },
                    "merchantReference": {
                      "description": "A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.",
                      "type": "string",
                      "x-addedInVersion": "2"
                    },
                    "payoutMethodCode": {
                      "description": "The unique ID of the payout method held by the Account Holder to which the payout is to be made.\nIf left blank, a payout instrument is automatically selected.",
                      "type": "string",
                      "x-addedInVersion": "5"
                    },
                    "payoutSpeed": {
                      "default": "STANDARD",
                      "description": "Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.",
                      "enum": [
                        "INSTANT",
                        "SAME_DAY",
                        "STANDARD"
                      ],
                      "type": "string",
                      "x-addedInVersion": "5"
                    }
                  },
                  "required": [
                    "accountHolderCode",
                    "accountCode"
                  ],
                  "type": "object"
                },
                "PayoutAccountHolderResponse": {
                  "properties": {
                    "bankAccountUUID": {
                      "description": "The unique ID of the Bank Account to which the payout was made.",
                      "type": "string"
                    },
                    "invalidFields": {
                      "description": "Contains field validation errors that would prevent requests from being processed.",
                      "items": {
                        "$ref": "#/components/schemas/ErrorFieldType"
                      },
                      "type": "array",
                      "x-addedInVersion": "5"
                    },
                    "merchantReference": {
                      "description": "The value supplied by the executing user when initiating the transfer; may be used to link multiple transactions.",
                      "type": "string",
                      "x-addedInVersion": "2"
                    },
                    "payoutSpeed": {
                      "default": "STANDARD",
                      "description": "Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.",
                      "enum": [
                        "INSTANT",
                        "SAME_DAY",
                        "STANDARD"
                      ],
                      "type": "string",
                      "x-addedInVersion": "5"
                    },
                    "pspReference": {
                      "description": "The reference of a request. Can be used to uniquely identify the request.",
                      "type": "string"
                    },
                    "resultCode": {
                      "description": "The result code.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "RefundFundsTransferRequest": {
                  "properties": {
                    "amount": {
                      "$ref": "#/components/schemas/Amount",
                      "description": "The amount to be transferred."
                    },
                    "merchantReference": {
                      "description": "A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.",
                      "type": "string"
                    },
                    "originalReference": {
                      "description": "A PSP reference of the original fund transfer.",
                      "type": "string"
                    }
                  },
                  "required": [
                    "originalReference",
                    "amount"
                  ],
                  "type": "object"
                },
                "RefundFundsTransferResponse": {
                  "properties": {
                    "invalidFields": {
                      "description": "Contains field validation errors that would prevent requests from being processed.",
                      "items": {
                        "$ref": "#/components/schemas/ErrorFieldType"
                      },
                      "type": "array",
                      "x-addedInVersion": "5"
                    },
                    "merchantReference": {
                      "description": "The value supplied by the executing user when initiating the transfer refund; may be used to link multiple transactions.",
                      "type": "string"
                    },
                    "message": {
                      "description": "The message of the response.",
                      "type": "string"
                    },
                    "originalReference": {
                      "description": "A PSP reference of the original fund transfer.",
                      "type": "string"
                    },
                    "pspReference": {
                      "description": "The reference of a request. Can be used to uniquely identify the request.",
                      "type": "string"
                    },
                    "resultCode": {
                      "description": "The result code.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "RefundNotPaidOutTransfersRequest": {
                  "properties": {
                    "accountCode": {
                      "description": "The code of the account from which to perform the refund(s).",
                      "type": "string"
                    },
                    "accountHolderCode": {
                      "description": "The code of the Account Holder which owns the account from which to perform the refund(s).",
                      "type": "string"
                    }
                  },
                  "required": [
                    "accountHolderCode",
                    "accountCode"
                  ],
                  "type": "object"
                },
                "RefundNotPaidOutTransfersResponse": {
                  "properties": {
                    "invalidFields": {
                      "description": "Contains field validation errors that would prevent requests from being processed.",
                      "items": {
                        "$ref": "#/components/schemas/ErrorFieldType"
                      },
                      "type": "array",
                      "x-addedInVersion": "5"
                    },
                    "pspReference": {
                      "description": "The reference of a request. Can be used to uniquely identify the request.",
                      "type": "string"
                    },
                    "resultCode": {
                      "description": "The result code.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "ServiceError": {
                  "properties": {
                    "errorCode": {
                      "description": "The error code mapped to the error message.",
                      "type": "string"
                    },
                    "errorType": {
                      "description": "The category of the error.",
                      "type": "string"
                    },
                    "message": {
                      "description": "A short explanation of the issue.",
                      "type": "string"
                    },
                    "pspReference": {
                      "description": "The PSP reference of the payment.",
                      "type": "string"
                    },
                    "status": {
                      "description": "The HTTP response status.",
                      "format": "int32",
                      "type": "integer"
                    }
                  },
                  "type": "object"
                },
                "SetupBeneficiaryRequest": {
                  "properties": {
                    "destinationAccountCode": {
                      "description": "The destination account code.",
                      "type": "string"
                    },
                    "merchantReference": {
                      "description": "A value that can be supplied at the discretion of the executing user.",
                      "type": "string"
                    },
                    "sourceAccountCode": {
                      "description": "The benefactor account.",
                      "type": "string"
                    }
                  },
                  "required": [
                    "sourceAccountCode",
                    "destinationAccountCode"
                  ],
                  "type": "object"
                },
                "SetupBeneficiaryResponse": {
                  "properties": {
                    "invalidFields": {
                      "description": "Contains field validation errors that would prevent requests from being processed.",
                      "items": {
                        "$ref": "#/components/schemas/ErrorFieldType"
                      },
                      "type": "array",
                      "x-addedInVersion": "5"
                    },
                    "pspReference": {
                      "description": "The reference of a request. Can be used to uniquely identify the request.",
                      "type": "string"
                    },
                    "resultCode": {
                      "description": "The result code.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "Split": {
                  "properties": {
                    "account": {
                      "description": "Unique identifier of the account where the split amount should be sent. This is required if `type` is **MarketPlace** or **BalanceAccount**.\n\n",
                      "type": "string"
                    },
                    "amount": {
                      "$ref": "#/components/schemas/SplitAmount",
                      "description": "The amount of this split."
                    },
                    "description": {
                      "description": "A description of this split.",
                      "type": "string"
                    },
                    "reference": {
                      "description": "Your reference for the split, which you can use to link the split to other operations such as captures and refunds.\n\nThis is required if `type` is **MarketPlace** or **BalanceAccount**. For the other types, we also recommend sending a reference so you can reconcile the split and the associated payment in the transaction overview and in the reports. If the reference is not provided, the split is reported as part of the aggregated [TransferBalance record type](https://docs.adyen.com/reporting/marketpay-payments-accounting-report) in Adyen for Platforms.",
                      "type": "string"
                    },
                    "type": {
                      "description": "The type of split.\nPossible values: **Default**, **PaymentFee**, **VAT**, **Commission**, **MarketPlace**, **BalanceAccount**, **Remainder**, **Surcharge**, **Tip**.",
                      "enum": [
                        "BalanceAccount",
                        "Commission",
                        "Default",
                        "MarketPlace",
                        "PaymentFee",
                        "Remainder",
                        "Surcharge",
                        "Tip",
                        "VAT",
                        "Verification"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "amount",
                    "type"
                  ],
                  "type": "object"
                },
                "SplitAmount": {
                  "properties": {
                    "currency": {
                      "description": "The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).\n\nIf this value is not provided, the currency in which the payment is made will be used.",
                      "maxLength": 3,
                      "minLength": 3,
                      "type": "string"
                    },
                    "value": {
                      "description": "The amount in [minor units](https://docs.adyen.com/development-resources/currency-codes).",
                      "format": "int64",
                      "type": "integer"
                    }
                  },
                  "required": [
                    "value"
                  ],
                  "type": "object"
                },
                "Transaction": {
                  "properties": {
                    "amount": {
                      "$ref": "#/components/schemas/Amount",
                      "description": "The amount of the transaction."
                    },
                    "bankAccountDetail": {
                      "$ref": "#/components/schemas/BankAccountDetail",
                      "description": "The details of the bank account to where a payout was made."
                    },
                    "captureMerchantReference": {
                      "description": "The merchant reference of a related capture.",
                      "type": "string"
                    },
                    "capturePspReference": {
                      "description": "The psp reference of a related capture.",
                      "type": "string"
                    },
                    "creationDate": {
                      "description": "The date on which the transaction was performed.",
                      "format": "date-time",
                      "type": "string"
                    },
                    "description": {
                      "description": "A description of the transaction.",
                      "type": "string"
                    },
                    "destinationAccountCode": {
                      "description": "The code of the account to which funds were credited during an outgoing fund transfer.",
                      "type": "string"
                    },
                    "disputePspReference": {
                      "description": "The psp reference of the related dispute.",
                      "type": "string"
                    },
                    "disputeReasonCode": {
                      "description": "The reason code of a dispute.",
                      "type": "string"
                    },
                    "merchantReference": {
                      "description": "The merchant reference of a transaction.",
                      "type": "string"
                    },
                    "paymentPspReference": {
                      "description": "The psp reference of the related authorisation or transfer.",
                      "type": "string",
                      "x-addedInVersion": "3"
                    },
                    "payoutPspReference": {
                      "description": "The psp reference of the related payout.",
                      "type": "string",
                      "x-addedInVersion": "3"
                    },
                    "pspReference": {
                      "description": "The psp reference of a transaction.",
                      "type": "string"
                    },
                    "sourceAccountCode": {
                      "description": "The code of the account from which funds were debited during an incoming fund transfer.",
                      "type": "string"
                    },
                    "transactionStatus": {
                      "description": "The status of the transaction.\n>Permitted values: `PendingCredit`, `CreditFailed`, `CreditClosed`, `CreditSuspended`, `Credited`, `Converted`, `PendingDebit`, `DebitFailed`, `Debited`, `DebitReversedReceived`, `DebitedReversed`, `ChargebackReceived`, `Chargeback`, `ChargebackReversedReceived`, `ChargebackReversed`, `Payout`, `PayoutReversed`, `FundTransfer`, `PendingFundTransfer`, `ManualCorrected`.",
                      "enum": [
                        "BalanceNotPaidOutTransfer",
                        "BalancePlatformSweep",
                        "BalancePlatformSweepReturned",
                        "Chargeback",
                        "ChargebackCorrection",
                        "ChargebackCorrectionReceived",
                        "ChargebackReceived",
                        "ChargebackReversed",
                        "ChargebackReversedCorrection",
                        "ChargebackReversedCorrectionReceived",
                        "ChargebackReversedReceived",
                        "Converted",
                        "CreditClosed",
                        "CreditFailed",
                        "CreditReversed",
                        "CreditReversedReceived",
                        "CreditSuspended",
                        "Credited",
                        "DebitFailed",
                        "DebitReversedReceived",
                        "Debited",
                        "DebitedReversed",
                        "DepositCorrectionCredited",
                        "DepositCorrectionDebited",
                        "Fee",
                        "FundTransfer",
                        "FundTransferReversed",
                        "InvoiceDeductionCredited",
                        "InvoiceDeductionDebited",
                        "ManualCorrected",
                        "ManualCorrectionCredited",
                        "ManualCorrectionDebited",
                        "MerchantPayin",
                        "MerchantPayinReversed",
                        "Payout",
                        "PayoutReversed",
                        "PendingCredit",
                        "PendingDebit",
                        "PendingFundTransfer",
                        "ReCredited",
                        "ReCreditedReceived",
                        "SecondChargeback",
                        "SecondChargebackCorrection",
                        "SecondChargebackCorrectionReceived",
                        "SecondChargebackReceived"
                      ],
                      "type": "string"
                    },
                    "transferCode": {
                      "description": "The transfer code of the transaction.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "TransactionListForAccount": {
                  "properties": {
                    "accountCode": {
                      "description": "The account for which to retrieve the transactions.",
                      "type": "string"
                    },
                    "page": {
                      "description": "The page of transactions to retrieve.\nEach page lists fifty (50) transactions.  The most recent transactions are included on page 1.",
                      "format": "int32",
                      "type": "integer"
                    }
                  },
                  "required": [
                    "accountCode",
                    "page"
                  ],
                  "type": "object"
                },
                "TransferFundsRequest": {
                  "properties": {
                    "amount": {
                      "$ref": "#/components/schemas/Amount",
                      "description": "The amount to be transferred."
                    },
                    "destinationAccountCode": {
                      "description": "The code of the account to which the funds are to be credited.\n>The state of the Account Holder of this account must be Active.",
                      "type": "string"
                    },
                    "merchantReference": {
                      "description": "A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.",
                      "type": "string",
                      "x-addedInVersion": "2"
                    },
                    "sourceAccountCode": {
                      "description": "The code of the account from which the funds are to be debited.\n>The state of the Account Holder of this account must be Active and allow payouts.",
                      "type": "string"
                    },
                    "transferCode": {
                      "description": "The code related to the type of transfer being performed.\n>The permitted codes differ for each platform account and are defined in their service level agreement.",
                      "type": "string"
                    }
                  },
                  "required": [
                    "sourceAccountCode",
                    "destinationAccountCode",
                    "transferCode",
                    "amount"
                  ],
                  "type": "object"
                },
                "TransferFundsResponse": {
                  "properties": {
                    "invalidFields": {
                      "description": "Contains field validation errors that would prevent requests from being processed.",
                      "items": {
                        "$ref": "#/components/schemas/ErrorFieldType"
                      },
                      "type": "array",
                      "x-addedInVersion": "5"
                    },
                    "merchantReference": {
                      "description": "The value supplied by the executing user when initiating the transfer; may be used to link multiple transactions.",
                      "type": "string",
                      "x-addedInVersion": "2"
                    },
                    "pspReference": {
                      "description": "The reference of a request. Can be used to uniquely identify the request.",
                      "type": "string"
                    },
                    "resultCode": {
                      "description": "The result code.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                }
              },
              "securitySchemes": {
                "ApiKeyAuth": {
                  "in": "header",
                  "name": "X-API-Key",
                  "type": "apiKey"
                },
                "BasicAuth": {
                  "scheme": "basic",
                  "type": "http"
                }
              }
            },
            "x-groups": [
              "General",
              "Migration"
            ]
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
    it('should match schema7', () => {
        // Setup
        const schema: OpenAPI = {
            "openapi": "3.1.0",
            "servers": [
              {
                "url": "https://management-test.adyen.com/v1"
              }
            ],
            "info": {
              "contact": {
                "email": "developer-experience@adyen.com",
                "name": "Adyen Developer Experience team",
                "url": "https://www.adyen.help/hc/en-us/community/topics",
                "x-twitter": "Adyen"
              },
              "description": "Adyen uses webhooks to inform your system about events that happen with your Adyen company and merchant accounts, stores, payment terminals, and payment methods when using [Management API](https://docs.adyen.com/api-explorer/#/ManagementService/latest/overview).\n\nWhen an event occurs, Adyen makes an HTTP POST request to a URL on your server and includes the details of the event in the request body.\n\nSee [Webhooks](https://docs.adyen.com/development-resources/webhooks) for more information.",
              "termsOfService": "https://www.adyen.com/legal/terms-and-conditions",
              "title": "Management Webhooks",
              "version": "1",
              "x-apisguru-categories": [
                "payment"
              ],
              "x-logo": {
                "url": "https://api.apis.guru/v2/cache/logo/https_twitter.com_Adyen_profile_image"
              },
              "x-origin": [
                {
                  "format": "openapi",
                  "url": "https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/ManagementNotificationService-v1.json",
                  "version": "3.1"
                }
              ],
              "x-providerName": "adyen.com",
              "x-publicVersion": true,
              "x-serviceName": "ManagementNotificationService-v1",
              "x-timestamp": "2023-03-30T18:21:57Z"
            },
            "tags": [],
            "components": {
              "examples": {
                "WebhookAck": {
                  "summary": "Acknowledge Webhook",
                  "value": "[accepted]"
                },
                "post-merchant.created-merchant.created": {
                  "description": "Example webhook when a merchant account was created",
                  "summary": "Merchant account created",
                  "value": {
                    "createdAt": "2022-08-12T10:50:01+02:00",
                    "data": {
                      "capabilities": {
                        "sendToTransferInstrument": {
                          "requested": true,
                          "requestedLevel": "notApplicable"
                        }
                      },
                      "companyId": "YOUR_COMPANY_ID",
                      "merchantId": "MC3224X22322535GH8D537TJR",
                      "status": "PreActive"
                    },
                    "environment": "test",
                    "type": "merchant.created"
                  }
                },
                "post-merchant.updated-merchant-updated-valid": {
                  "description": "Example webhook when verification is succesful",
                  "summary": "Merchant account verified",
                  "value": {
                    "createdAt": "2022-09-20T13:42:31+02:00",
                    "data": {
                      "capabilities": {
                        "receivePayments": {
                          "allowed": true,
                          "requested": true,
                          "requestedLevel": "notApplicable",
                          "verificationStatus": "valid"
                        }
                      },
                      "legalEntityId": "LE322KH223222F5GNNW694PZN",
                      "merchantId": "YOUR_MERCHANT_ID",
                      "status": "PreActive"
                    },
                    "environment": "test",
                    "type": "merchant.updated"
                  }
                },
                "post-merchant.updated-merchant-updated-with-errors": {
                  "description": "Example webhook when verification fails",
                  "summary": "Merchant account verification failed",
                  "value": {
                    "createdAt": "2022-09-20T13:41:12+02:00",
                    "data": {
                      "capabilities": {
                        "receivePayments": {
                          "allowed": false,
                          "problems": [
                            {
                              "entity": {
                                "id": "LE322KH223222F5GNNW694PZN",
                                "type": "LegalEntity"
                              },
                              "verificationErrors": [
                                {
                                  "code": "2_8064",
                                  "message": "'UBO through ownership' was missing.",
                                  "remediatingActions": [
                                    {
                                      "code": "2_123",
                                      "message": "Add 'organization.entityAssociations' of type 'uboThroughOwnership' to legal entity"
                                    }
                                  ],
                                  "type": "dataMissing"
                                },
                                {
                                  "code": "1_30",
                                  "message": "Individual details couldn't be verified",
                                  "remediatingActions": [
                                    {
                                      "code": "1_300",
                                      "message": "Update individual details"
                                    }
                                  ],
                                  "subErrors": [
                                    {
                                      "code": "1_3000",
                                      "message": "The user couldn't be verified",
                                      "remediatingActions": [
                                        {
                                          "code": "1_300",
                                          "message": "Update individual details"
                                        },
                                        {
                                          "code": "1_301",
                                          "message": "Upload an ID document"
                                        }
                                      ],
                                      "type": "invalidInput"
                                    }
                                  ],
                                  "type": "invalidInput"
                                }
                              ]
                            }
                          ],
                          "requested": true,
                          "requestedLevel": "notApplicable",
                          "verificationStatus": "invalid"
                        }
                      },
                      "legalEntityId": "LE322KH223222F5GNNW694PZN",
                      "merchantId": "YOUR_MERCHANT_ID",
                      "status": "PreActive"
                    },
                    "environment": "test",
                    "type": "merchant.updated"
                  }
                },
                "post-paymentMethod.created-paymentMethod.created": {
                  "summary": "Payment method Visa created",
                  "value": {
                    "createdAt": "2022-01-24T14:59:11+01:00",
                    "data": {
                      "id": "PM3224R223224K5FH4M2K9B86",
                      "merchantId": "MERCHANT_ACCOUNT",
                      "result": "SUCCESS",
                      "storeId": "ST322LJ223223K5F4SQNR9XL5",
                      "type": "visa"
                    },
                    "environment": "test",
                    "type": "paymentMethod.created"
                  }
                }
              },
              "schemas": {
                "AccountCapabilityData": {
                  "properties": {
                    "allowed": {
                      "description": "Indicates whether the capability is allowed. Adyen sets this to **true** if the verification is successful.",
                      "type": "boolean"
                    },
                    "allowedLevel": {
                      "description": "The allowed level of the capability. Some capabilities have different levels which correspond to thresholds. Higher levels may require additional checks and increased monitoring.Possible values: **notApplicable**, **low**, **medium**, **high**.",
                      "type": "string"
                    },
                    "capability": {
                      "description": "The name of the capability. For example, **sendToTransferInstrument**.",
                      "type": "string"
                    },
                    "problems": {
                      "description": "List of entities that has problems with verification. The information includes the details of the errors and the actions that you can take to resolve them.",
                      "items": {
                        "$ref": "#/components/schemas/CapabilityProblem"
                      },
                      "type": "array"
                    },
                    "requested": {
                      "description": "Indicates whether you requested the capability.",
                      "type": "boolean"
                    },
                    "requestedLevel": {
                      "description": "The level that you requested for the capability. Some capabilities have different levels which correspond to thresholds. Higher levels may require additional checks and increased monitoring.Possible values: **notApplicable**, **low**, **medium**, **high**.",
                      "type": "string"
                    },
                    "verificationStatus": {
                      "description": "The status of the verification checks for the capability.\n\nPossible values:\n\n* **pending**: Adyen is running the verification.\n\n* **invalid**: The verification failed. Check if the `errors` array contains more information.\n\n* **valid**: The verification was successful.\n\n* **rejected**: Adyen checked the information and found reasons to not allow the capability.\n",
                      "type": "string"
                    }
                  },
                  "required": [
                    "requestedLevel",
                    "requested"
                  ],
                  "type": "object"
                },
                "AccountCreateNotificationData": {
                  "properties": {
                    "capabilities": {
                      "additionalProperties": {
                        "$ref": "#/components/schemas/AccountCapabilityData"
                      },
                      "description": "Key-value pairs that specify the actions that the merchant account can do and its settings. The key is a capability. For example, the **sendToTransferInstrument** is the capability required before you can pay out funds to the bank account. The value is an object containing the settings for the capability.",
                      "type": "object"
                    },
                    "companyId": {
                      "description": "The unique identifier of the company account.",
                      "type": "string"
                    },
                    "legalEntityId": {
                      "description": "The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id).",
                      "type": "string"
                    },
                    "merchantId": {
                      "description": "The unique identifier of the merchant account.",
                      "type": "string"
                    },
                    "status": {
                      "description": "The status of the merchant account.\n\nPossible values:\n\n* **PreActive**: The merchant account has been created. Users cannot access the merchant account in the Customer Area. The account cannot process payments.\n* **Active**: Users can access the merchant account in the Customer Area. If the company account is also **Active**, then payment processing and payouts are enabled.\n* **InactiveWithModifications**: Users can access the merchant account in the Customer Area. The account cannot process new payments but can still modify payments, for example issue refunds. The account can still receive payouts.\n* **Inactive**: Users can access the merchant account in the Customer Area. Payment processing and payouts are disabled.\n* **Closed**: The account is closed and this cannot be reversed. Users cannot log in. Payment processing and payouts are disabled.",
                      "type": "string"
                    }
                  },
                  "required": [
                    "merchantId",
                    "companyId",
                    "status",
                    "capabilities"
                  ],
                  "type": "object"
                },
                "AccountNotificationResponse": {
                  "properties": {
                    "notificationResponse": {
                      "description": "Respond with **HTTP 200 OK** and `[accepted]` in the response body to [accept the webhook](https://docs.adyen.com/development-resources/webhooks#accept-notifications).",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "AccountUpdateNotificationData": {
                  "properties": {
                    "capabilities": {
                      "additionalProperties": {
                        "$ref": "#/components/schemas/AccountCapabilityData"
                      },
                      "description": "Key-value pairs that specify what you can do with the merchant account and its settings. The key is a capability. For example, the **sendToTransferInstrument** is the capability required before you can pay out the funds of a merchant account to a [bank account](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments). The value is an object containing the settings for the capability.",
                      "type": "object"
                    },
                    "legalEntityId": {
                      "description": "The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id).",
                      "type": "string"
                    },
                    "merchantId": {
                      "description": "The unique identifier of the merchant account.",
                      "type": "string"
                    },
                    "status": {
                      "description": "The status of the merchant account.\n\nPossible values:\n\n* **PreActive**: The merchant account has been created. Users cannot access the merchant account in the Customer Area. The account cannot process payments.\n* **Active**: Users can access the merchant account in the Customer Area. If the company account is also **Active**, then payment processing and payouts are enabled.\n* **InactiveWithModifications**: Users can access the merchant account in the Customer Area. The account cannot process new payments but can still modify payments, for example issue refunds. The account can still receive payouts.\n* **Inactive**: Users can access the merchant account in the Customer Area. Payment processing and payouts are disabled.\n* **Closed**: The account is closed and this cannot be reversed. Users cannot log in. Payment processing and payouts are disabled.",
                      "type": "string"
                    }
                  },
                  "required": [
                    "merchantId",
                    "status",
                    "capabilities"
                  ],
                  "type": "object"
                },
                "CapabilityProblem": {
                  "properties": {
                    "entity": {
                      "$ref": "#/components/schemas/CapabilityProblemEntity",
                      "description": "The ID and the type of entity that has verification errors."
                    },
                    "verificationErrors": {
                      "description": "List of verification errors.",
                      "items": {
                        "$ref": "#/components/schemas/VerificationError"
                      },
                      "type": "array"
                    }
                  },
                  "type": "object"
                },
                "CapabilityProblemEntity": {
                  "properties": {
                    "id": {
                      "description": "The ID of the entity.",
                      "type": "string"
                    },
                    "owner": {
                      "$ref": "#/components/schemas/CapabilityProblemEntity-recursive",
                      "description": "The owner of the entity that has an error. For example, if the `entity.type` is **BankAccount**, then the `owner` contains the details of the legal entity that owns the bank account."
                    },
                    "type": {
                      "description": "The type of entity.\n\nPossible values: **LegalEntity**, **BankAccount**, or **Document**.",
                      "enum": [
                        "BankAccount",
                        "Document",
                        "LegalEntity"
                      ],
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "CapabilityProblemEntity-recursive": {
                  "properties": {
                    "id": {
                      "description": "The ID of the entity.",
                      "type": "string"
                    },
                    "type": {
                      "description": "The type of entity.\n\nPossible values: **LegalEntity**, **BankAccount**, or **Document**.",
                      "enum": [
                        "BankAccount",
                        "Document",
                        "LegalEntity"
                      ],
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "MidServiceNotificationData": {
                  "properties": {
                    "allowed": {
                      "description": "Indicates whether receiving payments is allowed. This value is set to **true** by Adyen after screening your merchant account.",
                      "type": "boolean"
                    },
                    "enabled": {
                      "description": "Indicates whether the payment method is enabled (**true**) or disabled (**false**).",
                      "type": "boolean"
                    },
                    "id": {
                      "description": "The identifier of the resource.",
                      "type": "string"
                    },
                    "merchantId": {
                      "description": "The identifier of the merchant account.",
                      "type": "string"
                    },
                    "reference": {
                      "description": "Your reference for the payment method.",
                      "type": "string"
                    },
                    "result": {
                      "description": "The result of the request to create a payment method.",
                      "enum": [
                        "SUCCESS",
                        "FAILURE"
                      ],
                      "type": "string"
                    },
                    "storeId": {
                      "description": "The identifier of the [store](https://docs.adyen.com/api-explorer/#/ManagementService/latest/post/merchants/{id}/paymentMethodSettings__reqParam_storeId), if any.",
                      "type": "string"
                    },
                    "type": {
                      "description": "Payment method [variant](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api).",
                      "type": "string"
                    },
                    "verificationStatus": {
                      "description": "Payment method status. Possible values:\n* **valid**\n* **pending**\n* **invalid**\n* **rejected**",
                      "enum": [
                        "valid",
                        "pending",
                        "invalid",
                        "rejected"
                      ],
                      "type": "string"
                    }
                  },
                  "required": [
                    "result",
                    "merchantId",
                    "id",
                    "type"
                  ],
                  "type": "object"
                },
                "NotificationDataMessage": {
                  "properties": {
                    "createdAt": {
                      "description": "Timestamp for when the webhook was created.",
                      "format": "date-time",
                      "type": "string"
                    },
                    "data": {
                      "$ref": "#/components/schemas/AccountCreateNotificationData",
                      "description": "Contains event details."
                    },
                    "environment": {
                      "description": "The environment from which the webhook originated.\n\nPossible values: **test**, **live**.",
                      "type": "string"
                    },
                    "type": {
                      "description": "Type of notification.",
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "environment",
                    "createdAt",
                    "data"
                  ],
                  "type": "object"
                },
                "NotificationDataMessage-type2": {
                  "properties": {
                    "createdAt": {
                      "description": "Timestamp for when the webhook was created.",
                      "format": "date-time",
                      "type": "string"
                    },
                    "data": {
                      "$ref": "#/components/schemas/AccountUpdateNotificationData",
                      "description": "Contains event details."
                    },
                    "environment": {
                      "description": "The environment from which the webhook originated.\n\nPossible values: **test**, **live**.",
                      "type": "string"
                    },
                    "type": {
                      "description": "Type of notification.",
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "environment",
                    "createdAt",
                    "data"
                  ],
                  "type": "object"
                },
                "NotificationDataMessage-type3": {
                  "properties": {
                    "createdAt": {
                      "description": "Timestamp for when the webhook was created.",
                      "format": "date-time",
                      "type": "string"
                    },
                    "data": {
                      "$ref": "#/components/schemas/MidServiceNotificationData",
                      "description": "Contains event details."
                    },
                    "environment": {
                      "description": "The environment from which the webhook originated.\n\nPossible values: **test**, **live**.",
                      "type": "string"
                    },
                    "type": {
                      "description": "Type of notification.",
                      "type": "string"
                    }
                  },
                  "required": [
                    "type",
                    "environment",
                    "createdAt",
                    "data"
                  ],
                  "type": "object"
                },
                "PaymentMethodNotificationResponse": {
                  "properties": {
                    "notificationResponse": {
                      "description": "Respond with **HTTP 200 OK** and `[accepted]` in the response body to [accept the webhook](https://docs.adyen.com/development-resources/webhooks#accept-notifications).",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "RemediatingAction": {
                  "properties": {
                    "code": {
                      "description": "The remediating action code.",
                      "type": "string"
                    },
                    "message": {
                      "description": "A description of how you can resolve the verification error.",
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "VerificationError": {
                  "properties": {
                    "code": {
                      "description": "The verification error code.",
                      "type": "string"
                    },
                    "message": {
                      "description": "The verification error message.",
                      "type": "string"
                    },
                    "remediatingActions": {
                      "description": "The actions that you can take to resolve the verification error.",
                      "items": {
                        "$ref": "#/components/schemas/RemediatingAction"
                      },
                      "type": "array"
                    },
                    "subErrors": {
                      "description": "More granular information about the verification error.",
                      "items": {
                        "$ref": "#/components/schemas/VerificationError-recursive"
                      },
                      "type": "array"
                    },
                    "type": {
                      "description": "The type of verification error.\n\nPossible values: **invalidInput**, **dataMissing**, and **pendingStatus**.",
                      "enum": [
                        "dataMissing",
                        "invalidInput",
                        "pendingStatus"
                      ],
                      "type": "string"
                    }
                  },
                  "type": "object"
                },
                "VerificationError-recursive": {
                  "properties": {
                    "code": {
                      "description": "The verification error code.",
                      "type": "string"
                    },
                    "message": {
                      "description": "The verification error message.",
                      "type": "string"
                    },
                    "remediatingActions": {
                      "description": "The actions that you can take to resolve the verification error.",
                      "items": {
                        "$ref": "#/components/schemas/RemediatingAction"
                      },
                      "type": "array"
                    },
                    "type": {
                      "description": "The type of verification error.\n\nPossible values: **invalidInput**, **dataMissing**, and **pendingStatus**.",
                      "enum": [
                        "dataMissing",
                        "invalidInput",
                        "pendingStatus"
                      ],
                      "type": "string"
                    }
                  },
                  "type": "object"
                }
              },
              "securitySchemes": {
                "ApiKeyAuth": {
                  "in": "header",
                  "name": "X-API-Key",
                  "type": "apiKey"
                },
                "BasicAuth": {
                  "scheme": "basic",
                  "type": "http"
                }
              }
            },
            "webhooks": {
              "merchant.created": {
                "post": {
                  "description": "A merchant account [was created](https://docs.adyen.com/api-explorer/#/ManagementService/latest/post/merchants).",
                  "operationId": "post-merchant.created",
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "examples": {
                          "merchant.created": {
                            "$ref": "#/components/examples/post-merchant.created-merchant.created"
                          }
                        },
                        "schema": {
                          "$ref": "#/components/schemas/NotificationDataMessage"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "merchant.created": {
                              "$ref": "#/components/examples/WebhookAck"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/AccountNotificationResponse"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    }
                  },
                  "security": [
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Merchant account created",
                  "tags": [
                    "Merchant account"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Merchant account",
                  "x-methodName": "merchantAccountCreated",
                  "x-sortIndex": 1
                }
              },
              "merchant.updated": {
                "post": {
                  "description": "There were changes to verification status and capabilities of a [merchant account](https://docs.adyen.com/api-explorer/#/ManagementService/latest/post/merchants). If the verification fails, this webhook includes the errors and the actions that you can take to resolve them.",
                  "operationId": "post-merchant.updated",
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "examples": {
                          "merchant-updated-valid": {
                            "$ref": "#/components/examples/post-merchant.updated-merchant-updated-valid"
                          },
                          "merchant-updated-with-errors": {
                            "$ref": "#/components/examples/post-merchant.updated-merchant-updated-with-errors"
                          }
                        },
                        "schema": {
                          "$ref": "#/components/schemas/NotificationDataMessage-type2"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "merchant-updated-valid": {
                              "$ref": "#/components/examples/WebhookAck"
                            },
                            "merchant-updated-with-errors": {
                              "$ref": "#/components/examples/WebhookAck"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/AccountNotificationResponse"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    }
                  },
                  "security": [
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Merchant account capability updated",
                  "tags": [
                    "Merchant account"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Merchant account",
                  "x-methodName": "merchantAccountCapabilityUpdated",
                  "x-sortIndex": 2
                }
              },
              "paymentMethod.created": {
                "post": {
                  "description": "A request to [add a payment method](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/_merchantId_/paymentMethodSettings) was completed.",
                  "operationId": "post-paymentMethod.created",
                  "requestBody": {
                    "content": {
                      "application/json": {
                        "examples": {
                          "paymentMethod.created": {
                            "$ref": "#/components/examples/post-paymentMethod.created-paymentMethod.created"
                          }
                        },
                        "schema": {
                          "$ref": "#/components/schemas/NotificationDataMessage-type3"
                        }
                      }
                    }
                  },
                  "responses": {
                    "200": {
                      "content": {
                        "application/json": {
                          "examples": {
                            "paymentMethod.created": {
                              "$ref": "#/components/examples/WebhookAck"
                            }
                          },
                          "schema": {
                            "$ref": "#/components/schemas/PaymentMethodNotificationResponse"
                          }
                        }
                      },
                      "description": "OK - the request has succeeded."
                    }
                  },
                  "security": [
                    {
                      "ApiKeyAuth": []
                    }
                  ],
                  "summary": "Payment method created",
                  "tags": [
                    "Payment method"
                  ],
                  "x-addedInVersion": "1",
                  "x-groupName": "Payment method",
                  "x-methodName": "paymentMethodCreated",
                  "x-sortIndex": 1
                }
              }
            },
            "x-groups": [
              "Merchant account",
              "Payment method"
            ],
            "x-staticResponse": "response.json"
          }
        // Exercise and evaluate
        assert.ok(typeof schema === 'object')
    })
})
