import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: 'Client-ID igS5RUDWFygWsyuClzUDMGFJCgsKLyaP_cLNIwlN_yc'
        },
        params: {
            query: term
        }
    })
    return response.data?.results;
}

export default searchImages;

// Access : igS5RUDWFygWsyuClzUDMGFJCgsKLyaP_cLNIwlN_yc
// Secret: yAWTQwPK1WIYjAK0U6TRtjcVbh8atvhlZz76OU7TZa4