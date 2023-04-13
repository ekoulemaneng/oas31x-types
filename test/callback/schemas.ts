export const schema1 = {
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

export const schema2 = {
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