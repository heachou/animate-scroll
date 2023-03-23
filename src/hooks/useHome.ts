import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


export const useHome = () => {


    const navigate = useNavigate();

    const changeToStore = (): void => navigate('/store');

    return {
      changeToStore
    };

};