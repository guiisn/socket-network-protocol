const requestErrors = require("./errors");

const operations = ["GET", "POST", "REMOVE"]
const tables = ['users']
const users = ["Guilherme"]

function replyMessage(message) {
    try {
        const JSONMessage = JSON.parse(JSON.parse(message))

        if (!operations.includes(JSONMessage.operation)) {
            return { "error": requestErrors.invalidOperation, "message": "Invalid operation" }
        }

        if (!operations.includes(JSONMessage.table)) {
            return { "error": requestErrors.nonExistentTable, "message": "Table does not exists" }
        }

        if (JSONMessage.operation === 'POST') {
            if (users.includes(JSONMessage.key)) {
                return { "error": requestErrors.existingRegister, "message": "User already exist" }
            }

            return { "success": 200 }
        }

        if (JSONMessage.operation === 'REMOVE') {
            if (!users.includes(JSONMessage.key)) {
                return { "error": requestErrors.nonExistentRegister, "message": "User does not exists" }
            }

            return { "success": 200 }
        }

        if (JSONMessage.operation === 'GET') {
            if (!users.includes(JSONMessage.key)) {
                return { "error": requestErrors.nonExistentRegister, "message": "User does not exists" }
            }

            return { "success": 200 }
        }
    } catch (error) {
        return { "error": 900, "message": "Internal server error." }
    }
}

module.exports = replyMessage

