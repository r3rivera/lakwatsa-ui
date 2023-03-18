export class Compare{

    public static isEqual(a:any, b:any) {
        if (typeof a !== typeof b) return false;
        if (a.constructor !== b.constructor) return false;
        if (a instanceof Array)
        {
            return this.isArrayEqual(a, b);
        }
        if(typeof a === "object")
        {
            return this.isObjectEqual(a, b);
        }
        return a === b;
    }
    
    public static isObjectEqual(a:any, b:any) {
        for (var x in a)
        {
             if (a.hasOwnProperty(x))
             {
                 if (!b.hasOwnProperty(x))
                 {
                     return false;
                 }
    
                 if (!this.isEqual(a[x], b[x]))
                 {
                     return false;
                 }
             }
        }
    
        for (var x in b)
        {
            if (b.hasOwnProperty(x) && !a.hasOwnProperty(x))
            {
                return false;
            }
        }
    
        return true;
    }
    
    public static isArrayEqual(a:any[], b:any[]) {
        if (a.length !== b.length)
        {
            return false;
        }
    
        var i = a.length;
    
        while (i--)
        {
            var j = b.length;
            var found = false;
    
            while (!found && j--)
            {
                if (this.isEqual(a[i], b[j])) found = true;
            }
    
            if (!found)
            {
                return false;
            }
        }
    
        return true;
    }
}