type ClassNameArray = (string | boolean)[];

export const getClassNames = (classNames: ClassNameArray): string => {
  return classNames.filter(Boolean).join(" ");
};


// Not used, but a nice util if you need to create an object of classNames 
// vs using getClassNames multiple times :)
type ClassNamesObj = {
  [key: string]: ClassNameArray;
};

export const createClassNames = <T extends ClassNamesObj>(obj: T) => {
  type TypedResult = { [key in keyof T]: string };

  const result = Object.keys(obj).reduce((acc, key: string) => {
    const classNameArray = obj[key];
    const filteredClassNames = getClassNames(classNameArray);
    return {
      ...acc,
      [key]: filteredClassNames,
    };
  }, {} as TypedResult);

  return result;
};
