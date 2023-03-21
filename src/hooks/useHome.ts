import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { DataContext } from '../context';
import { ThemeContext } from '../context/ThemeContext';

export const useHome = () => {

    const { dataState } = useContext(DataContext);
    const { darkMode, controlBackground } = useContext(ThemeContext);

    const navigate = useNavigate();

    const changeToStore = (): void => navigate('/store');

    return {
        dataState, darkMode, controlBackground, changeToStore
    };

};