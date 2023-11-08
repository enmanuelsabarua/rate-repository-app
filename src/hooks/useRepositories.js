import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
    const { data, error, loading } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
    });

    const fetchRepositories = () => {
        if (loading) {
            return null;
        } else if (error) {
            console.log('error', error);
        }

        return data.repositories;
    }
    
    const repositories = fetchRepositories();

    return { repositories, loading, refetch: fetchRepositories}
};

export default useRepositories;