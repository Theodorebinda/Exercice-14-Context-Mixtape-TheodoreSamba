import React from 'react';

export const mixtapeContext = React.createContext();


function MixtapeProvider({children, songs}) {
    const [genre, setGenre] = React.useState("all");
    const [sortOrder, setSortOrder] = React.useState('ascending');

    return (
        <mixtapeContext.Provider value={{ songs, genre, setGenre, sortOrder, setSortOrder }}>
          {children}
        </mixtapeContext.Provider>
    );
};

export default MixtapeProvider;
