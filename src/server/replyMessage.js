const requestErrors = require("./errors");

const operations = ["GET", "POST", "REMOVE"]
const tables = ['users']
const users = ["Guilherme"]

function replyMessage(message) {
    try {
        const JSONMessage = JSON.parse(JSON.parse(message))

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

