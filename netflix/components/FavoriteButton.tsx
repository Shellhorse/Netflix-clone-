import useFavorites from "@/hooks/useFavorites";
import useCurrentUser from "@/hooks/userCurrentUser";
import axios from "axios";
import { useCallback, useMemo } from "react";
import { AiOutlinePlus, AiOutlineCheck} from "react-icons/ai";

interface IFavoriteButtonProps {
    movieId: string
}

const FavoriteButton: React.FC<IFavoriteButtonProps> = (({
    movieId
}) => {
    const { mutate: mutateFavorites } = useFavorites();
    const { data: currentUser, mutate } = useCurrentUser();

    const isFavorite = useMemo(() => {
        const list = currentUser?.favoriteIds || [];

        return list.includes(movieId);
    }, [currentUser, movieId])

    const toggleFavorite = useCallback(async () => {
        let response;

        if(isFavorite) {
            response = await axios.delete('/api/favorite', { params: { movieId } })
        }
        else {
            response = await axios.post('/api/favorite', { movieId })
        }

        const updateFavoriteIds = response?.data?.favoriteIds;

        mutate({
            ...currentUser,
            favoriteIds: updateFavoriteIds
        });

        mutateFavorites();
    }, [movieId, isFavorite, currentUser, mutate, mutateFavorites])

    const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

    return (
        <>
        <div onClick={toggleFavorite} className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
            <Icon className="text-white" size={25}/> 
        </div>
        </>
    )
}) 


export default FavoriteButton;