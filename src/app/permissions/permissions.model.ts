export interface RequiredPermissions {
  mustHaveAll: string[],
  mustHaveOne: string[],
}

export function can({ mustHaveAll, mustHaveOne }: RequiredPermissions, userPermissions: string[]) {

  for (let i = 0; i < mustHaveAll.length; i++) {
    if (!userPermissions.includes(mustHaveAll[i])) {
      return false;
    }
  }

  for (let i = 0; i < mustHaveOne.length; i++) {
    if (i === mustHaveOne.length - 1 && !userPermissions.includes(mustHaveOne[i])) {
      return false;
    }

    if (userPermissions.includes(mustHaveOne[i])) {
      break;
    }
  }

  return true;
}
