export const globalErrorHandler = (err, req, res, next) => {
  console.log(err);

  switch (err.name) {
    case "ValidationError":
      return res.status(400).json({ message: err.message });
    case "NotFoundError":
      return res.status(404).json({ message: err.message });
    case "ForbiddenError":
      return res.status(403).json({ message: err.message });
    default:
      return res.status(500).json({ message: err.message });
  }
};
