function pattern(input) {
  if (input == 0 || input == 1) {
    return input;
  }
  return pattern(input - 1) + pattern(input - 2);
}