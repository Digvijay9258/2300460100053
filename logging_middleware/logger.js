const axios = require("axios");

const LOG_API = "http://4.224.186.213/evaluation-service/logs";

// Paste your Bearer token here
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJkaWd2aWpheXNpbmdoNjM5MzQ2QGdtYWlsLmNvbSIsImV4cCI6MTc4MTE3MTQzOSwiaWF0IjoxNzgxMTcwNTM5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZDM3MDJmM2MtNDFkMC00MTQ5LWI4MTgtZjVlZmI4OTI4Y2FiIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiZGlndmlqYXkgc2luZ2giLCJzdWIiOiIzY2FjZjQ1Ny0zMzMzLTQyYWQtYmI4MS1kNDRjNmQxYWZhNDYifSwiZW1haWwiOiJkaWd2aWpheXNpbmdoNjM5MzQ2QGdtYWlsLmNvbSIsIm5hbWUiOiJkaWd2aWpheSBzaW5naCIsInJvbGxObyI6IjIzMDA0NjAxMDAwNTMiLCJhY2Nlc3NDb2RlIjoiQkFWRFNoIiwiY2xpZW50SUQiOiIzY2FjZjQ1Ny0zMzMzLTQyYWQtYmI4MS1kNDRjNmQxYWZhNDYiLCJjbGllbnRTZWNyZXQiOiJoV3dmV1JndmdGSHBUVGNFIn0.sNoHqiwWbVsg_A9JXWN_rDCWYkcCH_mJEJXXukqPaAA";

async function Log(stack, level, pkg, message) {
    try {
        const response = await axios.post(
            LOG_API,
            {
                stack,
                level,
                package: pkg,
                message
            },
            {
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );

        return response.data;
    } catch (err) {
        console.error(err.response?.data || err.message);
    }
}

module.exports = Log;