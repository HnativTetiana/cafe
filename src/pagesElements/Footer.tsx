import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    return (
        <footer>
            <nav>
                <ul>
                    {
                        letters.map((letter: string) => (
                            <li key={letter}>
                                <Link to={`/cocktails/letter:${letter.toLocaleLowerCase()}`}>{letter}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;