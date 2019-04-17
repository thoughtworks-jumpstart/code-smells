class Security {
  constructor(securityChecker) {
    this.securityChecker = securityChecker;
  }

  hasAccess(user, permission, exemptions) {
    let permission = false;
    if (user !== null) {
      if (permission !== null) {
        if (exemptions.length === 0) {
          if (
            this.securityChecker.checkPermission(
              user,
              permission,
              exemptions
            )
          ) {
            permission = true;
          }
        }
      }
    }
    return permission;
  }
}
