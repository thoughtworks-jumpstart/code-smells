class MedicalRecord {
  constructor() {
    this.dDateArchived = null;
    this.bArchived = false;
  }

  archiveRecord() {
    this.bArchived = true;
    this.dDateArchived = Date.now();
  }

  closeRecord() {
    this.bArchived = true;
    this.dDateArchived = Date.now();
  }
}
