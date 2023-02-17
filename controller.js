module.exports = (request, response) => {
  try {
    let file = request.file.filename;
    response.json({ status: "OK", file: file });
  } catch (error) {
    response.json({ status: "error" });
  }
};
