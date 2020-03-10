import cloneDeep from 'lodash/cloneDeep';

interface MyInterface {
  property1: string;
}

const object1: MyInterface = { property1: 'value1 '};

const clone1 = cloneDeep(object1);
const clone2: MyInterface = cloneDeep(object1);

// The following line is an error as expected which indicates that the compiler knows that clone is of type"MyInterface"
// but IntelliJ does not.
// Error:(16, 7) TS2322: Type 'MyInterface' is not assignable to type 'boolean'.
const toObject: boolean = clone1;

// IntelliJ does not recognize this as a usage of property1. This is the bug.
clone1.property1 = 'new value';

// IntelliJ does (as expected) recognize this as a usage of property1.
clone2.property1 = 'new value';
