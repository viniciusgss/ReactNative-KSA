const url = 'https://back-end-mediotec.onrender.com';
const token = await AsyncStorage.getItem('token');

const fetchData = async ( turmaid ) => {
    try {
        const response = await fetch(`${url}/api/comunicados/turma/${turmaid}`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            },
        });
        return response.json();
    } catch (err) {
        console.error(err);
    }
};

export default fetchData;