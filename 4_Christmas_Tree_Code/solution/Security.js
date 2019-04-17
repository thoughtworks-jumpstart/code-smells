class Security {
  constructor(securityChecker) {
    this.securityChecker = securityChecker;
  }

  hasAccess(user, permission, exemptions) {
    if (user === null || permission === null) {
      return false;
    }
    if (exemptions.contains(permission)) {
      return true;
    }
    return this.securityChecker.checkHasPermission(user, permission);
  }
}
