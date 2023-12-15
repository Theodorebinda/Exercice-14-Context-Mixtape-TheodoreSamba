import React from 'react';

mixtapeContext = React.createContext();

function MixtapeProvider({children, songs}) {
    const [genre, setGenre] = React.useState("all");
    const [sortOrder, setSortOrder] = React.useState('ascending');

    return (
        <mixtapeContext.Provider value={{ genre, setGenre, sortOrder, setSortOrder }}>
          {children}
        </mixtapeContext.Provider>
    );
};




























// mixtapeContext.jsx
// import React from 'react';

// const mixtapeContext = React.createContext();

// const MixtapeProvider = ({ children, songs }) => {
//   const [genre, setGenre] = React.useState('all');
//   const [sortOrder, setSortOrder] = React.useState('ascending');

//   return (
//     <mixtapeContext.Provider value={{ songs, genre, setGenre, sortOrder, setSortOrder }}>
//       {children}
//     </mixtapeContext.Provider>
//   );
// };

// export { mixtapeContext, MixtapeProvider };
