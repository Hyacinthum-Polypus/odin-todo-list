function isDateInThePast(otherDate)
{
    const date = new Date();
    if(date.getFullYear() > otherDate.year)
    {
        return true;
    } 
    else if(date.getFullYear() == otherDate.year)
    {
        if(date.getMonth() > otherDate.month)
        {
            return true;
        }
        else if(date.getMonth() == otherDate.month)
        {
            if(date.getDate() > otherDate.day) return true;
            else return false;
        }
        else
        {
            return false;
        }
    }
    else
    {
        return false;
    }
}

export {isDateInThePast};