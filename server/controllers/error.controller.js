// Turns Mongoose / MongoDB errors into a readable message
const getErrorMessage = (err) => {
  console.log(err)
  // Duplicate key (e.g. email already exists)
  if (err.code === 11000 || err.code === 11001) {
    return 'A record with that value already exists'
  }
  // Validation errors: return the first message
  if (err.errors) {
    for (const field in err.errors) {
      if (err.errors[field].message) return err.errors[field].message
    }
  }
  return err.message || 'Something went wrong'
}

export default { getErrorMessage }