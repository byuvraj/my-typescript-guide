function process(value: unknown) {// unknown type to accept any type of value but need to check type before using it
    if (
        typeof value === 'object' &&
        !!value &&
        'getPass' in value &&
        typeof value.getPass === 'function'
        ) 
    {
        value.getPass();
    }
    else {
        throw new Error('Invalid user object');
    }
}