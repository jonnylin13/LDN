module.exports = class ProgressState {
  constructor(elapsed = 0, total = 0) {
    this.elapsed = elapsed;
    this.total = total;
  }

  getElapsed() {
    return this.elapsed;
  }

  getTotal() {
    return this.total;
  }

  static fromJson(jsonString) {
    const data = JSON.parse(jsonString);
    if (!("elapsed" in data) || !("total" in data)) {
      console.log(
        "<Error> Tried to instantiate progress state with corrupt data!"
      );
      return null;
    }
    return new ProgressState(data["elapsed"], data["total"]);
  }
};
