import { useState } from 'react';

// keyof ISession would be 'id' | 'workshopId' | 'name' | 'upvoteCount' | 'level' | ...
const useFilter = <P extends ObjectMap>( items : P[] | null, itemKey : keyof P ) => {
    const [ filterKey, setFilterKey ] = useState<string>( '' );

    const filter = ( value : string ) => {
        setFilterKey( value );
    };

    // case-insensitive matching
    const filteredItems = () => {
        return items?.filter( 
            item => item[itemKey].toUpperCase().includes( filterKey.toUpperCase() )
        );
    };

    return {
        filterKey,
        filter,
        filteredItems
    };
};

export default useFilter;