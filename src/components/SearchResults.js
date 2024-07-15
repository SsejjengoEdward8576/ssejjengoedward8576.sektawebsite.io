import React from 'react';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const SearchResults = ({ items }) => {
    const query = useQuery();
    const searchTerm = query.get('query') || '';

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2>Search Results for "{searchTerm}"</h2>
            <ul>
                {filteredItems.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.description}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchResults;
