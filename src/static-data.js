const shortid = require("shortid"); // shortid.generate() returns a unique "short" id
/**
 * @returns {Object} - a new user object
 */
export function generateUniqueId() {
    return {
        user_id: shortid.generate()
    }
}
