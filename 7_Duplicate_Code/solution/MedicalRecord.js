class MedicalRecord {
  constructor() {
    this.dDateArchived = null;
    this.bArchived = false;
  }

  archiveRecord() {
    this._switchToArchived();
  }

  closeRecord() {
    this._switchToArchived();
  }

  _switchToArchived() {
    this.bArchived = true;
    this.dDateArchived = Date.now();
  }
}
