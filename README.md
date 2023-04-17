# OpenAPI Objects Types

TypeScript library provide OpenAPI objects types for TypeScript developers. For 3.1.x and 3.0.x versions.

## Installation
To install this package, run the following command:
```
npm install openapi-objects-types --save-dev
```
or
```
yarn add openapi-objects-types --dev
```

## Usage
To use this package, import it into your project and call its function:
```typescript
// import namespaces
import { OpenAPIv31x, OpenAPIv30x } from 'openapi-objects-types'

// use OpenAPI Object types from OpenAPIv31x and OpenAPIv30x to type variables
let schemaOne: OpenAPIv31x.OpenAPI, schemaTwo: OpenAPIv30x.OpenAPI
```

## List of provided OpenAPI Objects types

### OpenAPI v3.1.x
- **OpenAPI** - the root object of the OpenAPI document.
- **Info** - this object provides metadata about the API.
- **Contact** - contact information for the exposed API.
- **License** - License information for the exposed API
- **Server** - An object representing a server.
- **ServerVariable** - An object representing a server variable for server URL template substitution.
- **Components** - Holds a set of reusable objects for different aspects of the OAS.
- **Paths** - Holds the relative paths to the individual endpoints and their operations.
- **PathItem** - Describes the operations available on a single path.
- **Operation** - Describes a single API operation on a path.
- **ExternalDocumentation** - Allows referencing an external resource for extended documentation.
- **Parameter** - Describes a single operation parameter.
- **RequestBody** - Describes a single request body.
- **MediaType** - Each Media Type Object provides schema and examples for the media type identified by its key.
- **Encoding** - A single encoding definition applied to a single schema property.
- **Response** - A container for the expected responses of an operation.
- **Response** - Describes a single response from an API Operation, including design-time, static _links_ to operations based on the response.
- **Callback** - A map of possible out-of band callbacks related to the parent operation. 
- **Example**
- **Link** - The _Link object_ represents a possible design-time link for a response.
- **Header**
- **Tag** - Adds metadata to a single tag that is used by the _Operation Object_.
- **Reference** - A simple object to allow referencing other components in the OpenAPI document, internally and externally.
- **Schema** - The Schema Object allows the definition of input and output data types.
- **Discriminator** - The discriminator is a specific object in a schema which is used to inform the consumer of the document of an alternative schema based on the value associated with it.
- **XML** - A metadata object that allows for more fine-tuned XML model definitions.
- **SecurityScheme** -  Defines a security scheme that can be used by the operations.
- **OAuthFlows** - Allows configuration of the supported OAuth Flows.
- **OAuthFlow** Configuration details for a supported OAuth Flow.
- **SecurityRequirement** - Lists the required security schemes to execute this operation.
- **SpecificationExtensions** - While the OpenAPI Specification tries to accommodate most use cases, additional data can be added to extend the specification at certain points.

### OpenAPI v3.0.x
- **OpenAPI** - This is the root document object of the OpenAPI document.
- **Info** - The object provides metadata about the API.
- **Contact** - contact information for the exposed API.
- **License** - License information for the exposed API
- **Server** - An object representing a server.
- **ServerVariable** - An object representing a server variable for server URL template substitution.
- **Components** - Holds a set of reusable objects for different aspects of the OAS.
- **Paths** - Holds the relative paths to the individual endpoints and their operations.
- **PathItem** - Describes the operations available on a single path.
- **Operation** - Describes a single API operation on a path.
- **ExternalDocumentation** - Allows referencing an external resource for extended documentation.
- **Parameter** - Describes a single operation parameter.
- **RequestBody** - Describes a single request body.
- **MediaType** - Each Media Type Object provides schema and examples for the media type identified by its key.
- **Encoding** - A single encoding definition applied to a single schema property.
- **Response** - A container for the expected responses of an operation.
- **Response** - Describes a single response from an API Operation, including design-time, static _links_ to operations based on the response.
- **Callback** - A map of possible out-of band callbacks related to the parent operation. 
- **Example**
- **Link** - The _Link object_ represents a possible design-time link for a response.
- **Header**
- **Tag** - Adds metadata to a single tag that is used by the _Operation Object_.
- **Reference** - A simple object to allow referencing other components in the OpenAPI document, internally and externally.
- **Schema** - The Schema Object allows the definition of input and output data types.
- **Discriminator** - The discriminator is a specific object in a schema which is used to inform the consumer of the document of an alternative schema based on the value associated with it.
- **XML** - A metadata object that allows for more fine-tuned XML model definitions.
- **SecurityScheme** -  Defines a security scheme that can be used by the operations.
- **OAuthFlows** - Allows configuration of the supported OAuth Flows.
- **OAuthFlow** Configuration details for a supported OAuth Flow.
- **SecurityRequirement** - Lists the required security schemes to execute this operation.
- **SpecificationExtensions** - While the OpenAPI Specification tries to accommodate most use cases, additional data can be added to extend the specification at certain points.

## License
This package is licensed under the [MIT License](https://opensource.org/licenses/mit).

## Contact
If you have any questions or issues, please contact the package maintainer at ekoulemaneng@gmail.com.
