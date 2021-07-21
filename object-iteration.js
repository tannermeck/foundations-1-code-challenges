// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/


/*
Output:
`wheelstypegoes`
or
`goeswheelstype`
or
`wheelsgoestype`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    const newObject = Object.keys(someObject)
    return newObject;
}


/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject) {
    const newObject = Object.keys(someObject)
    const values = Object.values(someObject)
    const key = newObject.map(item => item.toUpperCase());
    const object = values.map(item => item)
    let result = {};
    for (var i = 0; i < key.length; i++) {
        result[key[i]] = object[i]
    }
    return result;
}

/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    const keys = Object.keys(someObject)
    const values = Object.values(someObject)
   const entries = Object.entries(someObject);
   return entries;
}
