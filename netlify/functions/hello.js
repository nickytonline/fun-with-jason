exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ greeting: 'YOLO'})
  }
}