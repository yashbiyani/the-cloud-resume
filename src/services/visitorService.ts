/**
 * Visitor Counter Service
 * 
 * This service handles the interaction with the AWS Lambda function
 * that increments and retrieves the visitor count from DynamoDB.
 * 
 * Implementation Notes:
 * - Replace the API_ENDPOINT with your actual AWS API Gateway endpoint
 * - Make sure CORS is enabled on your API Gateway
 * - The Lambda function should both increment the counter and return the new count
 */

const API_ENDPOINT = 'https://www.yashbiyani.space/';

interface VisitorResponse {
  success: boolean;
  count?: number;
  message?: string;
}

const LOCAL_STORAGE_KEY = 'visitorCount';
const SESSION_KEY = 'visitSession';

/**
 * Increments the visitor counter and returns the updated count
 * @param page The page identifier to track (optional)
 */
export const incrementVisitorCount = async (page: string = 'home'): Promise<VisitorResponse> => {
  try {
    // Initialize count if it doesn't exist
    if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
      localStorage.setItem(LOCAL_STORAGE_KEY, '0');
    }

    // Check if we've counted this session
    const sessionId = sessionStorage.getItem(SESSION_KEY);
    if (!sessionId) {
      // New session - increment count
      const currentCount = parseInt(localStorage.getItem(LOCAL_STORAGE_KEY) || '0');
      const newCount = currentCount + 1;
      localStorage.setItem(LOCAL_STORAGE_KEY, newCount.toString());
      sessionStorage.setItem(SESSION_KEY, Date.now().toString());

      return {
        success: true,
        count: newCount
      };
    }

    // Return current count for existing session
    return {
      success: true,
      count: parseInt(localStorage.getItem(LOCAL_STORAGE_KEY) || '0')
    };

  } catch (error) {
    console.error('Error in incrementVisitorCount:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to update visitor count'
    };
  }
};

/**
 * AWS Lambda Function Pseudo-code:
 * 
 * exports.handler = async (event) => {
 * exports.handler = async (event) => {body);
 *   const { page } = JSON.parse(event.body);
 *   // Initialize AWS SDK
 *   // Initialize AWS SDKaws-sdk');
 *   const AWS = require('aws-sdk');oDB.DocumentClient();
 *   const docClient = new AWS.DynamoDB.DocumentClient();
 *   // Increment counter in DynamoDB
 *   // Increment counter in DynamoDB
 *   const params = {sitor_counter',
 *     TableName: 'visitor_counter',,
 *     Key: { page: page || 'home' },_count :inc',
 *     UpdateExpression: 'ADD visitor_count :inc',
 *     ExpressionAttributeValues: { ':inc': 1 },
 *     ReturnValues: 'UPDATED_NEW'
 *   };
 *   try {
 *   try {st result = await docClient.update(params).promise();
 *     const result = await docClient.update(params).promise();
 *     return {
 *     return {Code: 200,
 *       statusCode: 200,
 *       headers: {Control-Allow-Origin': '*',
 *         'Access-Control-Allow-Origin': '*',ntent-Type',
 *         'Access-Control-Allow-Headers': 'Content-Type',
 *       },dy: JSON.stringify({
 *       body: JSON.stringify({
 *         success: true,Attributes.visitor_count,
 *         count: result.Attributes.visitor_count,
 *       })
 *     };tch (error) {
 *   } catch (error) {Error updating visitor count:', error);
 *     console.error('Error updating visitor count:', error);
 *     return {Code: 500,
 *       statusCode: 500,
 *       headers: {Control-Allow-Origin': '*',
 *         'Access-Control-Allow-Origin': '*',ntent-Type',
 *         'Access-Control-Allow-Headers': 'Content-Type',
 *       },dy: JSON.stringify({
 *       body: JSON.stringify({
 *         success: false,d to update visitor count',
 *         message: 'Failed to update visitor count',
 *       })
 *     };
 *   }
 * };
 */